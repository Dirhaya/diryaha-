/* Dirhaya: deterministic money and offline assistant logic. No network or eval. */
(function(root,factory){const value=factory();if(typeof module==='object'&&module.exports)module.exports=value;else root.DirhayaCore=value})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const VERSION=1,MAX_MONEY=999999999999;
const ACCOUNT_TYPES=['bank','savings','cash','wallet','prepaid','investment'];
const COLORS=['sand','sage','slate','clay','lilac'];
const CATEGORIES=['Food & drink','Groceries','Transport','Shopping','Bills','Laundry','Education','Health','Entertainment','Travel','Gifts','Other','Salary','Allowance','Refund','Other income','Unexplained','Unexplained income'];
const INCOME_CATEGORIES=['Salary','Allowance','Refund','Other income','Unexplained income'];
function validCategory(kind,category){return kind==='income'?INCOME_CATEGORIES.includes(category):kind==='expense'?CATEGORIES.includes(category)&&!INCOME_CATEGORIES.includes(category):true}
const GOAL_ICONS=['spark','shield','plane','car','home','book','laptop','gift','heart'];
const uid=()=>globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
const clone=x=>JSON.parse(JSON.stringify(x));
const fail=s=>{throw new Error(s)};
function normalDigits(s){return String(s).replace(/[٠-٩]/g,d=>String(d.charCodeAt(0)-1632)).replace(/[۰-۹]/g,d=>String(d.charCodeAt(0)-1776)).replace(/٫/g,'.').replace(/٬/g,',')}
function money(input,{negative=false,zero=false}={}){
 let s=normalDigits(input).trim().replace(/^AED\s*/i,'').replace(/\s*AED$/i,'').trim();
 if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d{1,2})?$/.test(s))fail('Enter an amount with up to 2 decimal places, such as 125.50.');
 s=s.replace(/,/g,'');const sign=s.startsWith('-')?-1:1;s=s.replace(/^-/,'');const [whole,part='']=s.split('.');const result=sign*(Number(whole)*100+Number(part.padEnd(2,'0')));
 if(!Number.isSafeInteger(result)||Math.abs(result)>MAX_MONEY)fail('That amount is outside the supported range.');
 if(!negative&&result<0)fail('Enter a positive amount.');if(!zero&&result===0)fail('Enter an amount above zero.');return result;
}
function format(cents,decimals=2){if(!Number.isSafeInteger(cents))fail('Invalid stored amount.');return new Intl.NumberFormat('en-AE',{minimumFractionDigits:decimals,maximumFractionDigits:2}).format(cents/100)}
function localDate(date=new Date()){return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`}
function validDate(s){if(!/^\d{4}-\d{2}-\d{2}$/.test(s))return false;const d=new Date(s+'T12:00:00');return Number.isFinite(d.getTime())&&localDate(d)===s}
function cleanName(s,label='Name',max=70){if(typeof s!=='string'||!s.trim()||s.trim().length>max)fail(`${label} must be between 1 and ${max} characters.`);return s.trim()}
function cents(n,{negative=false,zero=true}={}){if(!Number.isSafeInteger(n)||Math.abs(n)>MAX_MONEY||!negative&&n<0||!zero&&n===0)fail('Invalid amount.');return n}
function safeSum(values){let sum=0;for(const x of values){sum+=x;if(!Number.isSafeInteger(sum)||Math.abs(sum)>MAX_MONEY)fail('The combined total is outside the supported range.')}return sum}
function blank(){return {format:'dirhaya',version:VERSION,rev:0,accounts:[],cards:[],transactions:[],goals:[],settings:{name:'Friend',needsName:true,theme:'beige',hideAmounts:false,monthlyBudget:0,lastBackup:null},created:Date.now()}}
function canSetOpening(state,id){return state.accounts.some(a=>a.id===id)&&!state.accounts.find(a=>a.id===id)?.holdings?.length&&!state.transactions.some(t=>t.account===id||t.to===id)&&!state.goals.some(g=>g.allocations.some(a=>a.account===id))}
function resetMoney(state){const fresh=blank();fresh.rev=state.rev+1;fresh.accounts=state.accounts.map(a=>{const account={...clone(a),opening:0};delete account.lastCheck;delete account.holdings;return account});fresh.cards=clone(state.cards);fresh.goals=state.goals.map(g=>({...clone(g),allocations:[]}));if(state.settings.reminderTimes)fresh.settings.reminderTimes=clone(state.settings.reminderTimes);for(const key of ['name','theme','hideAmounts','needsName','gharsWelcomed','quickCategories','defaultPayment'])fresh.settings[key]=state.settings[key];validate(fresh);return fresh}
function shareQuantity(value){const text=normalDigits(value).trim();if(!/^\d+(?:\.\d{1,6})?$/.test(text)||!Number.isFinite(Number(text))||Number(text)<=0||Number(text)>1000000000)fail('Enter shares above zero, with up to 6 decimal places.');return String(Number(text))}
function holdingsValue(account){return safeSum((account.holdings||[]).map(h=>h.value))}
function balances(state){const result=Object.fromEntries(state.accounts.map(a=>[a.id,a.opening]));for(const t of state.transactions){if(t.type==='expense')result[t.account]-=t.amount;else if(t.type==='income')result[t.account]+=t.amount;else if(t.type==='transfer'){result[t.account]-=t.amount;result[t.to]+=t.amount}else if(t.type==='adjustment')result[t.account]+=t.amount}for(const v of Object.values(result))cents(v,{negative:true});return result}
function reserves(state){const byAccount=Object.fromEntries(state.accounts.map(a=>[a.id,0]));for(const g of state.goals)for(const a of g.allocations)byAccount[a.account]+=a.amount;return byAccount}
function goalSaved(g){return safeSum(g.allocations.map(a=>a.amount))}
function inTrackingPeriod(state,t){return !state.settings.trackingFrom||(!t.beforeStart&&t.date>=state.settings.trackingFrom)}
function summary(state,date=localDate(),{allHistory=false}={}){
 const b=balances(state),r=reserves(state),total=safeSum(Object.values(b)),reserved=safeSum(Object.values(r));let income=0,spent=0,salary=0,unknownSpent=0,unknownIncome=0;const month=date.slice(0,7),categories={};
 for(const t of state.transactions){if(t.date.slice(0,7)!==month||(!allHistory&&!inTrackingPeriod(state,t)))continue;if(t.type==='expense'){spent+=t.amount;if(t.category==='Unexplained')unknownSpent+=t.amount;categories[t.category]=(categories[t.category]||0)+t.amount}else if(t.type==='income'){income+=t.amount;if(t.category==='Salary')salary+=t.amount;if(t.category==='Unexplained income')unknownIncome+=t.amount}}
 const cash=safeSum(state.accounts.filter(a=>a.type!=='investment').map(a=>b[a.id])),investmentTotal=total-cash,cashGoals=safeSum(state.accounts.filter(a=>a.type!=='investment').map(a=>r[a.id])),investmentGoals=reserved-cashGoals,holdings=safeSum(state.accounts.map(holdingsValue));
 cents(income);cents(spent);for(const n of Object.values(categories))cents(n);return {balances:b,reserves:r,total,reserved,available:total-reserved,cash,cashGoals,availableCash:cash-cashGoals,investmentTotal,investmentGoals,holdings,portfolioUnassigned:investmentTotal-holdings,income,spent,net:income-spent,categories,month,salary,unknownSpent,knownSpent:spent-unknownSpent,unknownIncome};
}
function spendingBreakdown(state,transactions=state.transactions){
 const groups=new Map(),types=new Map(state.accounts.map(a=>[a.id,a.type]));let spent=0,invested=0;
 const broad={'Groceries':'Food & drink','Health':'Health & personal care','Gifts':'Gifts & charity','Other':'Other / uncategorised'};
 for(const t of transactions){let category;
  if(t.type==='expense'){category=broad[t.category]||t.category;spent+=t.amount}
  else if(t.type==='transfer'&&types.get(t.to)==='investment'&&types.get(t.account)!=='investment'){category='Investment contributions';invested+=t.amount}
  else continue;
  groups.set(category,(groups.get(category)||0)+t.amount);
 }
 const total=safeSum([spent,invested]);const rows=[...groups].map(([category,value])=>({category,amount:value,percent:total?value/total*100:0})).sort((a,b)=>b.amount-a.amount||a.category.localeCompare(b.category));
 return {rows,spent,invested,total};
}
function goalPlan(g,today=localDate()){
 const saved=goalSaved(g),remaining=Math.max(0,g.target-saved),progress=Math.min(100,saved/g.target*100);let months=null,perMonth=null,overdue=false;
 if(g.deadline){const a=new Date(today+'T12:00:00'),b=new Date(g.deadline+'T12:00:00');overdue=b<a&&remaining>0;months=Math.max(1,Math.ceil((b-a)/86400000/30.4375));perMonth=Math.ceil(remaining/months)}
 return {saved,remaining,progress,months,perMonth,overdue};
}
function assertReserves(state){const b=balances(state),r=reserves(state);for(const a of state.accounts){if(b[a.id]<0)fail(`“${a.name}” would have a negative balance. Check the opening balance or record missing income first.`);if(holdingsValue(a)>b[a.id])fail('This account contains investments. Sell or update the holdings before moving their value out.');if(r[a.id]>b[a.id])fail(`Some money in “${a.name}” is reserved for goals. Release enough goal money first.`)}}
function uniqueName(items,name,id,label){if(items.some(x=>x.id!==id&&x.name.toLocaleLowerCase()===name.toLocaleLowerCase()))fail(`A ${label} with that name already exists.`)}
const DEFAULT_QUICK=['Food & drink','Transport','Laundry','Groceries','Bills','Shopping'];
const FREQUENCIES=['daily','weekly','monthly','yearly'];
function quickCategories(state){return state.settings.quickCategories||DEFAULT_QUICK}
function nextOccurrence(r){
 const [year,month,day]=r.nextDate.split('-').map(Number);let next;
 if(r.frequency==='daily'||r.frequency==='weekly'){next=new Date(r.nextDate+'T12:00:00');next.setDate(next.getDate()+(r.frequency==='daily'?1:7))}
 else {const targetMonth=r.frequency==='yearly'?r.anchorMonth-1:month,targetYear=r.frequency==='yearly'?year+1:year;next=new Date(r.nextDate+'T12:00:00');next.setFullYear(targetYear,targetMonth,1);const end=new Date(next);end.setMonth(end.getMonth()+1,0);next.setDate(Math.min(r.anchorDay,end.getDate()))}
 const result=localDate(next);if(!validDate(result)||result<=r.nextDate)fail('The recurring date is outside the supported range.');return result;
}
function dueRecurring(state,today=localDate()){return (state.recurring||[]).filter(r=>!r.paused&&r.nextDate<=today).sort((a,b)=>a.nextDate.localeCompare(b.nextDate)||a.name.localeCompare(b.name))}
function apply(state,action){
 let s=clone(state);const getAccount=id=>{const a=s.accounts.find(x=>x.id===id);if(!a)fail('Choose an existing account.');return a};const getGoal=id=>{const g=s.goals.find(x=>x.id===id);if(!g)fail('Choose an existing goal.');return g};
 switch(action.type){
  case 'account.add':{if(s.accounts.length>=100)fail('You can keep up to 100 accounts.');const name=cleanName(action.name,'Account name');uniqueName(s.accounts,name,null,'account');const type=ACCOUNT_TYPES.includes(action.kind)?action.kind:'bank';s.accounts.push({id:uid(),name,type,opening:cents(action.opening),color:COLORS.includes(action.color)?action.color:'sand',created:Date.now()});break}
  case 'account.edit':{const a=getAccount(action.id),name=cleanName(action.name,'Account name');uniqueName(s.accounts,name,a.id,'account');if(action.opening!==undefined&&action.opening!==a.opening){if(!canSetOpening(s,a.id))fail('Set a starting balance before recording entries or reserving goal money. This account already has activity.');a.opening=cents(action.opening);delete a.lastCheck}Object.assign(a,{name,type:ACCOUNT_TYPES.includes(action.kind)?action.kind:a.type,color:COLORS.includes(action.color)?action.color:a.color});break}
  case 'account.delete':{if((s.recurring||[]).some(r=>r.account===action.id))fail('Remove recurring entries using this account first.');if(s.settings.defaultPayment===action.id)s.settings.defaultPayment='';if(getAccount(action.id).holdings?.length)fail('Remove the holding details before deleting this account.');if(s.cards.some(c=>c.account===action.id)||s.transactions.some(t=>t.account===action.id||t.to===action.id)||s.goals.some(g=>g.allocations.some(a=>a.account===action.id)))fail('This account has transactions or goal savings. Keep it to preserve your history.');s.accounts=s.accounts.filter(a=>a.id!==action.id);break}
  case 'card.add':case 'card.edit':{
   const a=getAccount(action.account);if(!['bank','savings'].includes(a.type))fail('Link a debit card to a bank or savings account. For a separately funded card, add a prepaid account.');
   const card=action.type==='card.edit'?s.cards.find(c=>c.id===action.id):{id:uid(),created:Date.now()};if(!card)fail('Card not found.');const name=cleanName(action.name,'Card name');uniqueName(s.cards,name,card.id,'card');const last4=String(action.last4||'');if(last4&&!/^\d{4}$/.test(last4))fail('Enter only the last four digits, or leave them blank.');if(card.account&&card.account!==a.id&&(s.transactions.some(t=>t.card===card.id)||(s.recurring||[]).some(r=>r.card===card.id)))fail('This card has spending history. Add a new card to link a different bank.');Object.assign(card,{name,account:a.id,last4,color:COLORS.includes(action.color)?action.color:'slate'});if(action.type==='card.add'){if(s.cards.length>=100)fail('You can keep up to 100 cards.');s.cards.push(card)}break;
  }
  case 'card.delete':{if((s.recurring||[]).some(r=>r.card===action.id))fail('Remove recurring entries using this card first.');if(s.settings.defaultPayment==='card:'+action.id)s.settings.defaultPayment='';if(!s.cards.some(c=>c.id===action.id))fail('Card not found.');if(s.transactions.some(t=>t.card===action.id))fail('This card has recorded spending. Keep it to preserve your history.');s.cards=s.cards.filter(c=>c.id!==action.id);break}
  case 'transaction.add':case 'transaction.edit':{
   if(action.type==='transaction.edit'&&s.transactions.find(t=>t.id===action.id)?.holdingEvent)fail('Use the portfolio holding to update this investment record.');
   const a=getAccount(action.account);if(!['expense','income','transfer','adjustment'].includes(action.kind))fail('Choose a transaction type.');
   const amount=cents(action.amount,{negative:action.kind==='adjustment',zero:false});if(!validDate(action.date)||action.date>localDate())fail('Use today or an earlier valid date.');
   if(action.kind==='transfer'){getAccount(action.to);if(action.to===a.id)fail('Choose two different accounts.');}
   if(action.card){const card=s.cards.find(c=>c.id===action.card);if(!card||card.account!==a.id||action.kind!=='expense')fail('Choose a debit card linked to this payment account.');}
   if(action.category&&!validCategory(action.kind,action.category))fail('Choose a category that matches income or spending.');
   const item={card:action.card||null,id:action.type==='transaction.edit'?action.id:uid(),type:action.kind,amount,account:a.id,to:action.kind==='transfer'?action.to:null,date:action.date,category:action.kind==='transfer'?'Transfer':action.kind==='adjustment'?'Balance adjustment':CATEGORIES.includes(action.category)?action.category:(action.kind==='income'?'Other income':'Other'),note:String(action.note||'').trim().slice(0,180),created:Date.now()};
   if(action.type==='transaction.edit'){const idx=s.transactions.findIndex(x=>x.id===action.id);if(idx<0)fail('This transaction no longer exists.');item.created=s.transactions[idx].created;for(const key of ['beforeStart','recurringId','occurrence'])if(s.transactions[idx][key]!==undefined)item[key]=s.transactions[idx][key];s.transactions[idx]=item}else{if(s.transactions.length>=50000)fail('Export your history before adding more than 50,000 entries.');s.transactions.push(item)}assertReserves(s);break;
  }
  case 'transaction.delete':{if(s.transactions.find(t=>t.id===action.id)?.holdingEvent)fail('Use the portfolio holding to update this investment record.');if(!s.transactions.some(t=>t.id===action.id))fail('This transaction no longer exists.');s.transactions=s.transactions.filter(t=>t.id!==action.id);assertReserves(s);break}
  case 'transaction.split':{
   const t=s.transactions.find(x=>x.id===action.id);if(!t||!['expense','income'].includes(t.type))fail('Choose an expense or income entry to split.');
   const amount=cents(action.amount,{zero:false});if(amount>=t.amount)fail('Split less than the full amount. To move the whole entry, use Edit entry and change its date.');
   if(!validDate(action.date)||action.date>localDate())fail('Use today or an earlier valid date.');
   const part={...t,id:uid(),amount,date:action.date,created:Date.now(),splitFrom:t.id};delete part.balanceCheck;t.amount-=amount;s.transactions.push(part);assertReserves(s);break;
  }
  case 'account.check':{
   const a=getAccount(action.id),actual=cents(action.balance),expected=balances(s)[a.id],delta=actual-expected,reserved=reserves(s)[a.id];
   if(actual<reserved)fail(`You marked AED ${format(reserved)} of goal savings as held in “${a.name}”, but its actual balance is AED ${format(actual)}. Move those savings to their real account, or release the unfunded reservation first.`);
   if(delta!==0)s.transactions.push({id:uid(),type:delta<0?'expense':'income',amount:Math.abs(delta),account:a.id,to:null,card:null,date:localDate(),category:delta<0?'Unexplained':'Unexplained income',note:delta<0?'Balance check · spending to explain':'Balance check · money received to explain',created:Date.now(),balanceCheck:{expected,actual}});
   a.lastCheck={date:localDate(),at:Date.now(),actual};assertReserves(s);break;
  }
  case 'transaction.explain':{
   const t=s.transactions.find(t=>t.id===action.id);if(!t||!['Unexplained','Unexplained income'].includes(t.category))fail('Choose an unexplained entry.');const amount=cents(action.amount,{zero:false});if(amount>t.amount)fail('That is more than the amount still unexplained.');const category=action.category;if(!validCategory(t.type,category)||['Unexplained','Unexplained income'].includes(category))fail('Choose a known spending or income category.');
   const date=action.date??t.date;if(!validDate(date)||date>localDate())fail('Use today or an earlier valid date.');
   if(action.card&&!s.cards.some(c=>c.id===action.card&&c.account===t.account&&t.type==='expense'))fail('Choose a debit card linked to this account.');const explained={...t,date,card:action.card||t.card||null,id:uid(),amount,category,note:String(action.note||'').trim().slice(0,180)||category,created:Date.now(),explainedFrom:t.id};delete explained.balanceCheck;t.amount-=amount;s.transactions=s.transactions.filter(x=>x.amount!==0);s.transactions.push(explained);assertReserves(s);break;
  }
  case 'account.reconcile':{const a=getAccount(action.id),desired=cents(action.balance),delta=desired-balances(s)[a.id];if(delta===0)fail('This account already matches that balance.');s.transactions.push({id:uid(),type:'adjustment',amount:delta,account:a.id,to:null,date:localDate(),category:'Balance adjustment',note:'Balance corrected',created:Date.now()});assertReserves(s);break}
  case 'goal.add':case 'goal.edit':{
   const g=action.type==='goal.edit'?getGoal(action.id):{id:uid(),allocations:[],created:Date.now()};const name=cleanName(action.name,'Goal name');uniqueName(s.goals,name,g.id,'goal');const target=cents(action.target,{zero:false});if(target<goalSaved(g))fail('The target cannot be below the money already saved.');if(action.deadline&&!validDate(action.deadline))fail('Choose a valid target date.');
   Object.assign(g,{name,target,deadline:action.deadline||'',icon:GOAL_ICONS.includes(action.icon)?action.icon:'spark',color:COLORS.includes(action.color)?action.color:'sand',note:String(action.note||'').trim().slice(0,180)});if(action.type==='goal.add'){if(s.goals.length>=200)fail('You can keep up to 200 goals.');s.goals.push(g)}break;
  }
  case 'goal.allocate':{
   const g=getGoal(action.id),a=getAccount(action.account),amount=cents(action.amount,{zero:false});if(goalSaved(g)+amount>g.target)fail('That would save more than this goal’s target. Raise the target or save the remaining amount.');const source=getAccount(action.source||a.id);if(source.id!==a.id)s.transactions.push({id:uid(),type:'transfer',amount,account:source.id,to:a.id,date:localDate(),category:'Transfer',note:'Savings · '+g.name,created:Date.now()});g.allocations.push({id:uid(),account:a.id,amount,date:localDate(),created:Date.now()});assertReserves(s);break;
  }
  case 'goal.release':{
   const g=getGoal(action.id);getAccount(action.account);let remaining=cents(action.amount,{zero:false});const available=safeSum(g.allocations.filter(a=>a.account===action.account).map(a=>a.amount));if(remaining>available)fail('This goal does not have that much saved in the selected account.');
   for(let i=g.allocations.length-1;i>=0&&remaining>0;i--){const a=g.allocations[i];if(a.account!==action.account)continue;const take=Math.min(a.amount,remaining);a.amount-=take;remaining-=take}g.allocations=g.allocations.filter(a=>a.amount>0);break;
  }
  case 'goal.move':{
   const g=getGoal(action.id),source=getAccount(action.source),destination=getAccount(action.account),amount=cents(action.amount,{zero:false});if(source.id===destination.id)fail('Choose a different destination account.');const available=safeSum(g.allocations.filter(a=>a.account===source.id).map(a=>a.amount));if(amount>available)fail('This goal does not have that much in the source account.');let remaining=amount;const moved=[];for(let i=g.allocations.length-1;i>=0&&remaining>0;i--){const a=g.allocations[i];if(a.account!==source.id)continue;const take=Math.min(a.amount,remaining);a.amount-=take;remaining-=take;moved.push({...a,id:uid(),account:destination.id,amount:take})}g.allocations=g.allocations.filter(a=>a.amount>0).concat(moved);s.transactions.push({id:uid(),type:'transfer',amount,account:source.id,to:destination.id,date:localDate(),category:'Transfer',note:'Move savings · '+g.name,created:Date.now()});assertReserves(s);break;
  }
  case 'goal.delete':{getGoal(action.id);s.goals=s.goals.filter(g=>g.id!==action.id);break}
  case 'holding.add':case 'holding.edit':case 'holding.sell':case 'holding.remove':{
   const a=getAccount(action.account);if(a.type!=='investment')fail('Choose an investment portfolio.');a.holdings=a.holdings||[];
   const h=a.holdings.find(h=>h.id===action.id);if(action.type!=='holding.add'&&!h)fail('Holding not found.');
   const record=(kind,amount,from,to,note)=>{if(!amount)return;s.transactions.push({id:uid(),type:kind,amount,account:from,to:to||null,card:null,date:localDate(),category:kind==='transfer'?'Transfer':'Balance adjustment',note,created:Date.now(),holdingEvent:true})};
   if(action.type==='holding.remove'){a.holdings=a.holdings.filter(x=>x.id!==h.id);break}
   if(action.type==='holding.sell'){const proceeds=cents(action.proceeds);record('adjustment',proceeds-h.value,a.id,null,'Sale of '+h.name+' · '+h.quantity+' shares');a.holdings=a.holdings.filter(x=>x.id!==h.id);break}
   const name=cleanName(action.name,'Company'),quantity=shareQuantity(action.quantity),cost=cents(action.cost),value=cents(action.value);
   if(action.type==='holding.edit'){record('adjustment',value-h.value,a.id,null,'Valuation · '+name);Object.assign(h,{name,quantity,cost,value,updated:localDate()});break}
   if(a.holdings.length>=500)fail('A portfolio can contain up to 500 holdings.');
   if(action.mode==='transfer'){const source=getAccount(action.source);if(source.id===a.id)fail('Choose a different source account.');const funding=cents(action.funding===undefined?cost:action.funding,{zero:false});record('transfer',funding,source.id,a.id,'Investment funding · '+name);record('adjustment',value-funding,a.id,null,'Valuation · '+name)}
   else if(action.mode==='unrecorded'){record('adjustment',value,a.id,null,'Existing investment added · '+name)}
   else if(action.mode!=='included')fail('Choose how this investment is already recorded.');
   a.holdings.push({id:uid(),name,quantity,cost,value,updated:localDate()});break;
  }
  case 'tracking.start':{
   if(action.expectedRev!==state.rev)fail('Your records changed. Reopen Start from today to review the latest balances.');
   if(!Array.isArray(action.balances)||action.balances.length!==s.accounts.length||!s.accounts.length||new Set(action.balances.map(x=>x.id)).size!==s.accounts.length)fail('Enter the current balance of each account.');
   const current=balances(s);for(const row of action.balances){getAccount(row.id);const desired=cents(row.balance),delta=desired-current[row.id];if(delta)s.transactions.push({id:uid(),type:'adjustment',amount:delta,account:row.id,to:null,card:null,date:localDate(),category:'Balance adjustment',note:'Start from today · current balance',created:Date.now()})}
   for(const t of s.transactions)t.beforeStart=true;
   s.settings.trackingFrom=localDate();s.settings.trackingStartedAt=Date.now();assertReserves(s);break;
  }
  case 'tracking.show-all':{delete s.settings.trackingFrom;delete s.settings.trackingStartedAt;break}
  case 'recurring.save':{
   s.recurring=s.recurring||[];const old=s.recurring.find(r=>r.id===action.id);if(action.id&&!old)fail('This recurring entry no longer exists.');
   if(old&&action.expectedNext!==old.nextDate)fail('This schedule changed. Reopen it before editing.');
   const item={id:old?.id||uid(),name:cleanName(action.name,'Recurring name'),kind:action.kind,category:action.category,account:action.account,card:action.kind==='expense'?(action.card||null):null,amount:cents(action.amount,{zero:false}),frequency:action.frequency,nextDate:action.nextDate,anchorDay:Number(action.nextDate?.slice(8,10)),anchorMonth:Number(action.nextDate?.slice(5,7)),paused:!!action.paused,handled:old?.handled||[]};
   if(old&&old.frequency===item.frequency&&old.nextDate===item.nextDate){item.anchorDay=old.anchorDay;item.anchorMonth=old.anchorMonth}
   if(item.handled.includes(item.nextDate))fail('This date was already recorded or skipped. Choose the next unhandled date.');
   if(old)s.recurring[s.recurring.indexOf(old)]=item;else s.recurring.push(item);break;
  }
  case 'recurring.delete':{if(!(s.recurring||[]).some(r=>r.id===action.id))fail('Recurring entry not found.');s.recurring=s.recurring.filter(r=>r.id!==action.id);break}
  case 'recurring.record':case 'recurring.skip':{
   const r=(s.recurring||[]).find(r=>r.id===action.id);if(!r||r.paused||r.nextDate!==action.dueDate||r.nextDate>localDate()||r.handled.includes(action.dueDate))fail('This occurrence is no longer waiting for review. Refresh the list.');
   if(action.type==='recurring.record'){
    s=apply(s,{type:'transaction.add',kind:r.kind,amount:action.amount,account:action.account,card:action.card,category:r.category,date:action.date,note:action.note||r.name});
    const t=s.transactions.at(-1);t.recurringId=r.id;t.occurrence=action.dueDate;
   }
   const updated=s.recurring.find(x=>x.id===r.id);updated.handled.push(updated.nextDate);updated.nextDate=nextOccurrence(updated);break;
  }
  case 'backup.exported':{s.settings.lastExport=clone(action.record);break}
  case 'backup.verified':{s.settings.lastVerifiedBackup=clone(action.record);break}
  case 'settings':{for(const key of ['quickCategories','defaultPayment'])if(action[key]!==undefined)s.settings[key]=clone(action[key]);if(action.gharsWelcomed!==undefined)s.settings.gharsWelcomed=!!action.gharsWelcomed;if(action.reminderTimes!==undefined){if(!Array.isArray(action.reminderTimes)||action.reminderTimes.length>24||action.reminderTimes.some(t=>typeof t!=='string'||!/^([01]\d|2[0-3]):[0-5]\d$/.test(t)))fail('Choose up to 24 valid reminder times.');s.settings.reminderTimes=[...new Set(action.reminderTimes)].sort();}if(action.name!==undefined){s.settings.name=cleanName(action.name,'Your name',35);s.settings.needsName=false;}if(action.theme!==undefined){if(!['beige','grey','night'].includes(action.theme))fail('Choose beige, grey or night.');s.settings.theme=action.theme}if(action.hideAmounts!==undefined)s.settings.hideAmounts=!!action.hideAmounts;if(action.monthlyBudget!==undefined)s.settings.monthlyBudget=cents(action.monthlyBudget);if(action.lastBackup!==undefined)s.settings.lastBackup=action.lastBackup;break}
  default:fail('That action is not supported.');
 }
 s.rev=state.rev+1;validate(s);return s;
}
function validate(d){
 if(!d||d.format!=='dirhaya'||d.version!==VERSION)fail('This is not a supported Dirhaya backup.');
 if(!Array.isArray(d.accounts)||!Array.isArray(d.cards)||d.cards.length>100||!Array.isArray(d.transactions)||!Array.isArray(d.goals)||d.accounts.length>100||d.transactions.length>50000||d.goals.length>200)fail('Invalid or oversized backup.');
 const validId=x=>typeof x==='string'&&/^[a-zA-Z0-9_-]{1,100}$/.test(x);const unique=items=>{const ids=new Set();for(const x of items){if(!x||!validId(x.id)||ids.has(x.id))fail('Invalid or duplicate record ID.');ids.add(x.id)}};
 unique(d.accounts);unique(d.cards);unique(d.transactions);unique(d.goals);const accounts=new Set(d.accounts.map(a=>a.id));const names=new Set();
 for(const a of d.accounts){cleanName(a.name);if(names.has(a.name.toLowerCase()))fail('Duplicate account name.');names.add(a.name.toLowerCase());if(!ACCOUNT_TYPES.includes(a.type)||!COLORS.includes(a.color))fail('Invalid account.');cents(a.opening);if(a.holdings!==undefined){if(!Array.isArray(a.holdings)||a.holdings.length>500||a.type!=='investment')fail('Invalid portfolio holdings.');unique(a.holdings);for(const h of a.holdings){cleanName(h.name,'Company');shareQuantity(h.quantity);cents(h.cost);cents(h.value);if(!validDate(h.updated)||h.updated>localDate())fail('Invalid holding valuation date.')}}if(a.lastCheck){if(!validDate(a.lastCheck.date)||!Number.isFinite(a.lastCheck.at))fail('Invalid balance check.');cents(a.lastCheck.actual)}}
 const cardNames=new Set();for(const card of d.cards){cleanName(card.name);if(cardNames.has(card.name.toLowerCase()))fail('Duplicate card name.');cardNames.add(card.name.toLowerCase());const linked=d.accounts.find(a=>a.id===card.account);if(!linked||!['bank','savings'].includes(linked.type)||!COLORS.includes(card.color)||typeof card.last4!=='string'||card.last4&&!/^\d{4}$/.test(card.last4))fail('Invalid debit card.');}
 for(const t of d.transactions){if(!['expense','income','transfer','adjustment'].includes(t.type)||!accounts.has(t.account)||!validDate(t.date)||t.date>localDate())fail('Invalid transaction.');cents(t.amount,{negative:t.type==='adjustment',zero:false});if(t.card&&!d.cards.some(c=>c.id===t.card&&c.account===t.account&&t.type==='expense'))fail('Invalid card payment.');if(t.type==='transfer'&&(!accounts.has(t.to)||t.to===t.account))fail('Invalid transfer.');if(t.beforeStart!==undefined&&typeof t.beforeStart!=='boolean')fail('Invalid tracking marker.');if(typeof t.note!=='string'||t.note.length>180||typeof t.category!=='string'||t.category.length>40)fail('Invalid transaction details.');if(!validCategory(t.type,t.category))fail('Invalid income or spending category.');if(!Number.isFinite(t.created))fail('Invalid transaction timestamp.')}
 const goalNames=new Set();for(const g of d.goals){cleanName(g.name);if(goalNames.has(g.name.toLowerCase()))fail('Duplicate goal name.');goalNames.add(g.name.toLowerCase());cents(g.target,{zero:false});if(!Array.isArray(g.allocations)||g.allocations.length>50000||!GOAL_ICONS.includes(g.icon)||!COLORS.includes(g.color)||g.deadline&&!validDate(g.deadline)||typeof g.note!=='string'||g.note.length>180)fail('Invalid goal.');unique(g.allocations);for(const a of g.allocations){if(!accounts.has(a.account)||!validDate(a.date))fail('Invalid saved amount.');cents(a.amount,{zero:false})}if(goalSaved(g)>g.target)fail('A goal has more saved than its target.')}
 if(d.recurring!==undefined){
  if(!Array.isArray(d.recurring)||d.recurring.length>200)fail('Keep up to 200 recurring entries.');unique(d.recurring);
  for(const r of d.recurring){cleanName(r.name,'Recurring name');if(!['income','expense'].includes(r.kind)||!validCategory(r.kind,r.category)||!accounts.has(r.account)||!FREQUENCIES.includes(r.frequency)||!validDate(r.nextDate)||typeof r.paused!=='boolean'||!Number.isInteger(r.anchorDay)||r.anchorDay<1||r.anchorDay>31||!Number.isInteger(r.anchorMonth)||r.anchorMonth<1||r.anchorMonth>12)fail('Invalid recurring entry.');cents(r.amount,{zero:false});if(r.card&&!d.cards.some(c=>c.id===r.card&&c.account===r.account&&r.kind==='expense'))fail('Invalid recurring payment card.');if(!Array.isArray(r.handled)||r.handled.length>50000||new Set(r.handled).size!==r.handled.length||r.handled.some(x=>!validDate(x))||r.handled.includes(r.nextDate))fail('Invalid recurring review history.');}
 }
 if(d.settings?.quickCategories!==undefined&&(!Array.isArray(d.settings.quickCategories)||d.settings.quickCategories.length>8||new Set(d.settings.quickCategories).size!==d.settings.quickCategories.length||d.settings.quickCategories.some(x=>!validCategory('expense',x)||x==='Unexplained')))fail('Choose up to 8 different expense categories.');
 const payment=d.settings?.defaultPayment;if(payment!==undefined&&(typeof payment!=='string'||payment&&!accounts.has(payment)&&!d.cards.some(c=>'card:'+c.id===payment)))fail('Choose an existing default payment account.');
 if(d.settings?.trackingFrom!==undefined&&(!validDate(d.settings.trackingFrom)||d.settings.trackingFrom>localDate()||!Number.isFinite(d.settings.trackingStartedAt)))fail('Invalid tracking start.');
 for(const key of ['lastExport','lastVerifiedBackup']){const record=d.settings?.[key];if(record!=null&&(!record||typeof record!=='object'||!Number.isFinite(record.at)||record.at<=0||typeof record.filename!=='string'||record.filename.length>240||!/^([a-f0-9]{64})$/.test(record.digest)||!Number.isSafeInteger(record.revision)||record.revision<0))fail('Invalid backup record.');}
 if(d.settings?.reminderTimes!==undefined&&(!Array.isArray(d.settings.reminderTimes)||d.settings.reminderTimes.length>24||d.settings.reminderTimes.some(t=>typeof t!=='string'||!/^([01]\d|2[0-3]):[0-5]\d$/.test(t))))fail('Invalid reminder schedule.');
 if(!d.settings||!['beige','grey','night'].includes(d.settings.theme))fail('Invalid app settings.');cleanName(d.settings.name,'Your name',35);cents(d.settings.monthlyBudget);if(typeof d.settings.hideAmounts!=='boolean')fail('Invalid privacy setting.');if(!Number.isSafeInteger(d.rev)||d.rev<0)fail('Invalid data version.');assertReserves(d);summary(d);return d;
}
// Exact rational arithmetic avoids 0.1 + 0.2 floating-point surprises.
const gcd=(a,b)=>{a=a<0n?-a:a;b=b<0n?-b:b;while(b){const t=a%b;a=b;b=t}return a||1n};
function rational(n,d=1n){if(d===0n)fail('Division by zero is undefined.');if(d<0n){n=-n;d=-d}const g=gcd(n,d);n/=g;d/=g;if(n.toString().length>180||d.toString().length>180)fail('That calculation is too large.');return {n,d}}
function calc(input){
 let s=normalDigits(input).toLowerCase().trim().replace(/^(?:what is|what's|calculate|calc|how much is)\s+/,'').replace(/[?=]$/,'').replace(/\bmultiplied by\b|\btimes\b/g,'*').replace(/\bdivided by\b/g,'/').replace(/\bplus\b/g,'+').replace(/\bminus\b/g,'-').replace(/\bpercent of\b/g,'% *').replace(/\bpercent\b/g,'%').replace(/\bof\b/g,'*').replace(/[×x]/g,'*').replace(/÷/g,'/').replace(/−/g,'-').replace(/\b(?:aed|dirhams?)\b/g,'');
 const split=s.match(/^split\s+([\d,.]+)\s+(?:between|among)\s+(\d+)(?:\s+people)?$/);if(split)s=`${split[1]} / ${split[2]}`;
 const discount=s.match(/^([\d.]+)\s*%\s+off\s+([\d,.]+)$/);if(discount)s=`${discount[2]} * (1 - ${discount[1]}%)`;
 const markup=s.match(/^add\s+([\d.]+)\s*%\s+to\s+([\d,.]+)$/);if(markup)s=`${markup[2]} * (1 + ${markup[1]}%)`;
 if(s.length>180)fail('Keep calculations under 180 characters.');
 const tokens=[];let i=0;while(i<s.length){if(/\s/.test(s[i])){i++;continue}const number=s.slice(i).match(/^(?:\d+(?:,\d{3})*(?:\.\d+)?|\.\d+)/);if(number){const raw=number[0];if(raw.includes(',')&&!/^\d{1,3}(,\d{3})+(\.\d+)?$/.test(raw))fail('Use commas only as thousands separators.');const n=raw.replace(/,/g,'');if(n.replace('.','').length>16)fail('Use numbers with at most 16 digits.');tokens.push(n);i+=raw.length}else if('+-*/()%'.includes(s[i]))tokens.push(s[i++]);else fail('Try a calculation such as (2500 - 350) / 5.');if(tokens.length>90)fail('That calculation has too many steps.')}
 let p=0;const peek=()=>tokens[p];
 const atom=()=>{let v;if(peek()==='+'||peek()==='-'){const op=tokens[p++];v=atom();if(op==='-')v=rational(-v.n,v.d);return v}if(peek()==='('){p++;v=expression();if(tokens[p++]!==')')fail('Close every bracket.')}else{const t=tokens[p++];if(!t||!/^\d*\.?\d+$/.test(t))fail('The calculation is incomplete.');const [a,b='']=t.split('.');v=rational(BigInt((a||'0')+b),10n**BigInt(b.length))}while(peek()==='%'){p++;v=rational(v.n,v.d*100n)}return v};
 const term=()=>{let v=atom();while(peek()==='*'||peek()==='/'){const op=tokens[p++],r=atom();v=op==='*'?rational(v.n*r.n,v.d*r.d):rational(v.n*r.d,v.d*r.n)}return v};
 const expression=()=>{let v=term();while(peek()==='+'||peek()==='-'){const op=tokens[p++],r=term();v=rational(v.n*r.d+(op==='+'?1n:-1n)*r.n*v.d,v.d*r.d)}return v};
 if(!tokens.length)fail('Type a calculation first.');const result=expression();if(p!==tokens.length)fail('Check the calculation’s operators and brackets.');
 const sign=result.n<0n?'-':'',n=result.n<0n?-result.n:result.n,scale=10000000000n,rounded=(n*scale*2n+result.d)/(result.d*2n),whole=rounded/scale,part=(rounded%scale).toString().padStart(10,'0').replace(/0+$/,'');const text=(rounded===0n?'':sign)+whole.toString()+(part?'.'+part:'');return {text,approximate:(n*scale)%result.d!==0n,expression:input.trim()};
}
function findNamed(list,text,kind){const matches=list.filter(x=>x.name.toLowerCase()===text.trim().toLowerCase());if(matches.length!==1)fail(`I couldn’t find a ${kind} named “${text.trim()}”. Use the exact name shown in the app.`);return matches[0]}
function assistant(state,input){
 const text=input.trim(),q=text.toLowerCase(),m=summary(state);if(!text)return {text:'Ask me a calculation, your balance, or a short command.'};
 try{
  if(/^(?:help|what can you do)[?.]?$/.test(q))return {text:'I work offline. Try:\n• (2500 - 350) / 5\n• balance\n• spending this month\n• spending last month\n• spending on food this month\n• budget\n• split 120 between 3\n• 20% off 150\n• add 5% to 100\n• ans * 2 (reuse the last result)\n• goals\n• salary\n• unexplained\n• expense 25 from Cash for coffee\n• income 1000 to Bank for allowance\n• transfer 200 from Bank to Cash\n• save 100 to Travel from Bank\nI prepare money changes for you to review.'};
  if(/^(?:budget|spending limit|budget remaining)[?.]?$/.test(q)){const limit=state.settings.monthlyBudget;return {text:limit?`This month: AED ${format(m.spent)} spent against your AED ${format(limit)} limit. ${m.spent>limit?'Over by':'Remaining'} AED ${format(Math.abs(limit-m.spent))}. This is a spending limit, not your account balance.`:'No spending limit is set. Add one in Settings → Monthly spending limit.'}}
  const period=q.match(/^(spending|income|salary) last month[?.]?$/);
  if(period){const now=new Date(),previous=localDate(new Date(now.getFullYear(),now.getMonth()-1,1)),last=summary(state,previous,{allHistory:true}),value=period[1]==='spending'?last.spent:period[1]==='salary'?last.salary:last.income;return {text:`Recorded ${period[1]} for ${last.month}: AED ${format(value)}. Transfers and opening balances are excluded.`}}
  const categoryQuery=q.match(/^spending on (.+?)(?: (this|last) month)?[?]?$/);
  if(categoryQuery){const alias={food:['Food & drink','Groceries'],'food & drink':['Food & drink','Groceries'],groceries:['Groceries'],health:['Health'],gifts:['Gifts']},name=categoryQuery[1].trim(),categories=alias[name]||CATEGORIES.filter(c=>c.toLowerCase()===name&&!INCOME_CATEGORIES.includes(c));if(!categories.length)return {text:'Choose a spending category, for example: spending on food this month, or spending on transport last month.'};const now=new Date(),date=categoryQuery[2]==='last'?localDate(new Date(now.getFullYear(),now.getMonth()-1,1)):localDate(),totals=summary(state,date,{allHistory:categoryQuery[2]==='last'}),value=safeSum(categories.map(c=>totals.categories[c]||0));return {text:`${categories.join(' + ')} in ${totals.month}: AED ${format(value)}. Based on your recorded categories; refunds are not subtracted.`}}
  if(/^(?:balance|balances|accounts|where is my money|how much (?:money )?do i have)[?.]?$/.test(q))return {text:state.accounts.length?`You have AED ${format(m.total)} in total.\n${state.accounts.map(a=>`${a.name}: AED ${format(m.balances[a.id])}`).join('\n')}\nAED ${format(m.reserved)} is reserved for goals. AED ${format(m.available)} is unreserved.`:'Add your first account with its current balance. I can then show where your money is.'};
  if(/^(?:spending|spent|expenses)(?: this month)?[?.]?$/.test(q))return {text:`You’ve recorded AED ${format(m.spent)} of spending this month.\n${Object.entries(m.categories).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`${k}: AED ${format(v)}`).join('\n')||'No expenses recorded yet.'}`};
  if(/^(?:income)(?: this month)?[?.]?$/.test(q))return {text:`Recorded income this month: AED ${format(m.income)}. Transfers and opening balances are excluded.`};
  if(/^(?:unknown|unexplained|unexplained spending)(?: this month)?[?.]?$/.test(q))return {text:`AED ${format(m.unknownSpent)} is recorded as unexplained spending this month. Use Check actual balance to compare an account with its real balance. Then explain any missing spending in Activity.`};
  if(/^(?:salary|my salary)(?: this month)?[?.]?$/.test(q))return {text:`Salary recorded this month: AED ${format(m.salary)}.\nKnown spending: AED ${format(m.knownSpent)}.\nUnexplained spending: AED ${format(m.unknownSpent)}.\nGoal savings held across accounts: AED ${format(m.reserved)}.\nTotal money still held: AED ${format(m.total)}.\nSpending and balances can also include opening balances or other income.`};
  if(/^(?:goals|savings goals|my goals)[?.]?$/.test(q))return {text:state.goals.length?state.goals.map(g=>{const p=goalPlan(g);return `${g.name}: AED ${format(p.saved)} of ${format(g.target)} (${Math.floor(p.progress)}%). AED ${format(p.remaining)} left.`}).join('\n'):'No goals yet. Tap Goals to choose what you’re saving for.'};
  let match=text.match(/^(?:add\s+)?(?:expense|spent|spend)\s+([\d٠-٩۰-۹.,٫٬]+)\s+(?:aed\s+)?from\s+(.+?)\s+for\s+(.+)$/i);
  if(match){const amount=money(match[1]),account=findNamed(state.accounts,match[2],'account'),note=match[3].trim();return {text:`Ready to record AED ${format(amount)} from ${account.name} for ${note}. Review the entry before saving.`,draft:{type:'transaction',kind:'expense',amount,account:account.id,note,category:guessCategory(note)}}}
  match=text.match(/^(?:add\s+)?(?:income|received)\s+([\d٠-٩۰-۹.,٫٬]+)\s+(?:aed\s+)?to\s+(.+?)\s+for\s+(.+)$/i);
  if(match){const amount=money(match[1]),account=findNamed(state.accounts,match[2],'account'),note=match[3].trim();return {text:`Ready to record AED ${format(amount)} of income in ${account.name}.`,draft:{type:'transaction',kind:'income',amount,account:account.id,note,category:/allowance/i.test(note)?'Allowance':/salary/i.test(note)?'Salary':'Other income'}}}
  match=text.match(/^transfer\s+([\d٠-٩۰-۹.,٫٬]+)\s+(?:aed\s+)?from\s+(.+?)\s+to\s+(.+)$/i);
  if(match){const amount=money(match[1]),a=findNamed(state.accounts,match[2],'account'),b=findNamed(state.accounts,match[3],'account');if(a.id===b.id)fail('Choose two different accounts.');return {text:`Ready to record a transfer of AED ${format(amount)} from ${a.name} to ${b.name}. This records a transfer you make yourself.`,draft:{type:'transaction',kind:'transfer',amount,account:a.id,to:b.id,note:''}}}
  match=text.match(/^save\s+([\d٠-٩۰-۹.,٫٬]+)\s+(?:aed\s+)?to\s+(.+?)\s+from\s+(.+)$/i);
  if(match){const amount=money(match[1]),g=findNamed(state.goals,match[2],'goal'),a=findNamed(state.accounts,match[3],'account');return {text:`Ready to reserve AED ${format(amount)} in ${a.name} for ${g.name}. Your total money stays the same.`,draft:{type:'allocate',id:g.id,account:a.id,amount}}}
  if(/[\d٠-٩۰-۹]/.test(text)){const answer=calc(text);return {text:`${answer.approximate?'≈ ':''}${answer.text}${answer.approximate?'\nRounded to 10 decimal places.':''}`,calculation:true}}
  return {text:'I can do maths, show balances and goals, or prepare simple entries. Try “2500 - 350”, “balance”, or “expense 25 from Cash for coffee”. Type “help” for all commands.'};
 }catch(error){return {text:error.message,error:true}}
}
function guessCategory(note){const q=note.toLowerCase();if(/\blaundry\b|\bdry[ -]clean(?:ing)?\b/.test(q))return 'Laundry';if(/coffee|lunch|dinner|food|cafe|restaurant/.test(q))return 'Food & drink';if(/petrol|fuel|taxi|parking|uber|bus/.test(q))return 'Transport';if(/grocery|groceries|supermarket/.test(q))return 'Groceries';if(/book|university|tuition|course/.test(q))return 'Education';return 'Other'}
function demo(){let s=blank();for(const [name,kind,opening,color] of [['Everyday','bank',45000,'sand'],['Future fund','savings',1200000,'sage'],['Cash','cash',35000,'slate']])s=apply(s,{type:'account.add',name,kind,opening,color});s=apply(s,{type:'transaction.add',kind:'income',amount:800000,account:s.accounts[0].id,date:localDate(),category:'Salary',note:'Sample salary'});s=apply(s,{type:'card.add',name:'Everyday debit',account:s.accounts[0].id,last4:'1234',color:'slate'});s=apply(s,{type:'goal.add',name:'A little more freedom',target:1500000,deadline:'',icon:'shield',color:'sage'});s=apply(s,{type:'goal.allocate',id:s.goals[0].id,account:s.accounts[1].id,amount:800000});s=apply(s,{type:'goal.add',name:'China trip',target:1200000,deadline:'',icon:'plane',color:'sand'});s=apply(s,{type:'goal.allocate',id:s.goals[1].id,account:s.accounts[1].id,amount:250000});s=apply(s,{type:'transaction.add',kind:'expense',amount:2800,account:s.accounts[0].id,card:s.cards[0].id,date:localDate(),category:'Food & drink',note:'A good cup of coffee'});s=apply(s,{type:'transaction.add',kind:'expense',amount:12000,account:s.accounts[0].id,date:localDate(),category:'Transport',note:'Petrol'});return s}
return {VERSION,MAX_MONEY,DEFAULT_QUICK,FREQUENCIES,quickCategories,nextOccurrence,dueRecurring,inTrackingPeriod,ACCOUNT_TYPES,COLORS,CATEGORIES,GOAL_ICONS,uid,clone,money,format,localDate,validDate,blank,canSetOpening,resetMoney,shareQuantity,holdingsValue,balances,reserves,goalSaved,summary,spendingBreakdown,goalPlan,apply,validate,calc,assistant,guessCategory,demo};
});
