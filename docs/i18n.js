/* Offline UI translation. Stored values, account names, notes and form values are never translated. */
(function(root,factory){const value=factory();if(typeof module==='object'&&module.exports)module.exports=value;else root.DirhayaI18n=value})(globalThis,function(){
'use strict';
const dictionary=Object.create(null),originals=new WeakMap(),attributes=new WeakMap();
function add(lines){for(const line of lines.trim().split('\n')){const at=line.indexOf('\t');if(at>0)dictionary[line.slice(0,at)]=line.slice(at+1)}}
add(`
Overview	نظرة عامة
Accounts	الحسابات
Goals	الأهداف
Activity	الحركة المالية
Assistant	المساعد
Settings	الإعدادات
Personal finance	إدارة المال
Your space	مساحتك الخاصة
Just you and your goals.	أنت وأهدافك فقط.
Your numbers stay on this device.	تبقى بياناتك على هذا الجهاز.
No accounts to create. No bank login.	لا حاجة لإنشاء حساب مستخدم أو تسجيل دخول للبنك.
A little closer, every day.	خطوة أقرب، كل يوم.
Your money, growing.	أموالك تنمو.
Opening your private space…	جارٍ فتح مساحتك الخاصة…
LESS NOISE. MORE DIRECTION.	بساطة أكثر. رؤية أوضح.
GHARS · YOUR PRIVATE MONEY SPACE	غرس · مساحتك المالية الخاصة
Good morning	صباح الخير
Good afternoon	طاب يومك
Good evening	مساء الخير
A simple view of what you have and where you’re going.	صورة واضحة لما تملكه وما تطمح إليه.
Add entry	إضافة حركة
Add an entry	إضافة حركة
Add account	إضافة حساب
Add an account	إضافة حساب
Total money	إجمالي أموالك
Available cash	النقد المتاح
Set aside for goals	مخصص للأهداف
Cash set aside for goals	نقد مخصص للأهداف
This month, so far	هذا الشهر حتى الآن
Money in	الأموال الواردة
Money out	الأموال الخارجة
Transfers, corrections and opening balances are excluded.	لا تشمل التحويلات وتصحيحات الرصيد والأرصدة الافتتاحية.
What makes up your total	مكونات إجمالي أموالك
Cash outside investment accounts, after goal reservations.	النقد خارج حسابات الاستثمار بعد تخصيص مبالغ الأهداف.
Still in your accounts. Not extra money.	هذه المبالغ ضمن حساباتك وليست أموالاً إضافية.
Investment accounts	حسابات الاستثمار
Investments	الاستثمارات
Where your money lives	أين توجد أموالك
All accounts	جميع الحسابات
A little closer to your goals	خطوة أقرب إلى أهدافك
View all	عرض الكل
Recent activity	آخر الحركات
Quick expense	مصروف سريع
Customise	تخصيص
Choose a category, enter the amount.	اختر الفئة وأدخل المبلغ.
Your salary & spending	راتبك ومصروفاتك
Check my balance	مراجعة رصيدي
Salary received this month	الراتب المستلم هذا الشهر
Known spending this month	المصروفات المعروفة هذا الشهر
Unexplained spending this month	مصروفات غير مفسرة هذا الشهر
Tap to explain	اضغط لتوضيحها
Where your money goes	أين تذهب أموالك
Period	الفترة
Account	الحساب
All recorded dates	جميع التواريخ المسجلة
Where this money goes	توزيع هذه المصروفات
Matching your filters	المطابق للفلاتر
All types	جميع الأنواع
Expenses	المصروفات
Income	الدخل
Transfers	التحويلات
Corrections	التصحيحات
Clear month	إلغاء اختيار الشهر
Show more	عرض المزيد
Search notes, categories, accounts…	ابحث في الملاحظات والفئات والحسابات…
The small things add up	التفاصيل الصغيرة تصنع الفرق
Your money in motion.	حركة أموالك.
A clear record of every entry.	سجل واضح لكل حركة.
No entries here yet	لا توجد حركات هنا بعد
Record an expense, income, or a transfer.	سجل مصروفاً أو دخلاً أو تحويلاً.
Food & drink	طعام ومشروبات
Groceries	بقالة
Transport	مواصلات
Shopping	تسوق
Bills	فواتير
Laundry	غسيل الملابس
Education	تعليم
Health	صحة
Entertainment	ترفيه
Travel	سفر
Gifts	هدايا
Other	أخرى
Salary	راتب
Allowance	بدل أو مصروف شخصي
Refund	مبلغ مسترد
Other income	دخل آخر
Unexplained	غير مفسر
Unexplained income	دخل غير مفسر
Health & personal care	الصحة والعناية الشخصية
Gifts & charity	هدايا وتبرعات
Other / uncategorised	أخرى / غير مصنف
Investment contributions	مبالغ محولة للاستثمار
Bank account	حساب بنكي
Savings account	حساب توفير
Cash on hand	نقد في اليد
Digital wallet	محفظة رقمية
Prepaid card balance	رصيد بطاقة مسبقة الدفع
Investment account	حساب استثماري
Debit card	بطاقة خصم
Debit cards	بطاقات الخصم
Debit cards · same bank money	بطاقات الخصم · نفس رصيد البنك
Expense	مصروف
Transfer	تحويل
Balance correction	تصحيح الرصيد
Balance adjustment	تعديل الرصيد
Edit entry	تعديل الحركة
A quick money moment.	سجل حركة مالية.
Update this record. Balances will be recalculated.	عدّل هذه الحركة وسيُعاد حساب الأرصدة.
A few details now. A clearer picture later.	تفاصيل بسيطة الآن، وصورة أوضح لاحقاً.
Amount	المبلغ
Amount · AED	المبلغ · درهم
Expense amount in AED	قيمة المصروف بالدرهم
Amount in AED	المبلغ بالدرهم
Amount to move	المبلغ المراد تحويله
Into account	إلى حساب
From account	من حساب
To account	إلى حساب
Into	إلى
From	من
To	إلى
Type	النوع
Category	الفئة
A short note	ملاحظة قصيرة
Note	ملاحظة
Date	التاريخ
Today	اليوم
Optional note	ملاحظة اختيارية
e.g. Coffee with friends	مثال: قهوة مع الأصدقاء
Cancel	إلغاء
Close	إغلاق
Done	تم
Back	رجوع
Continue	متابعة
Save	حفظ
Save entry	حفظ الحركة
Save expense	حفظ المصروف
Save changes	حفظ التغييرات
Delete entry	حذف الحركة
Delete this entry?	حذف هذه الحركة؟
The account balance will be recalculated. This cannot be undone except by restoring a backup.	سيُعاد حساب رصيد الحساب. يمكنك التراجع عن هذا الحذف من «التراجع عن التغييرات الأخيرة».
Pay from	الدفع من
Date & note · optional	التاريخ والملاحظة · اختياري
Dated today unless you change it. Nothing is recorded until you tap Save expense.	يُستخدم تاريخ اليوم ما لم تغيّره. لا يُسجل شيء قبل الضغط على حفظ المصروف.
Your default payment account. Change it here for this expense.	حساب الدفع الافتراضي. يمكنك تغييره لهذا المصروف.
Remembered from your recent expenses, or your first account.	محدد من مصروفاتك الأخيرة أو من حسابك الأول.
Enter an amount and save. Check the payment account below.	أدخل المبلغ وراجع حساب الدفع ثم احفظ.
Salary is new money received. If it is already included in a starting balance, do not add it again. Use a transfer to move existing money into investments.	الراتب هو مبلغ جديد استلمته. إذا كان ضمن الرصيد الافتتاحي فلا تضفه مرة أخرى. استخدم التحويل لنقل أموال موجودة إلى الاستثمارات.
This records money you move yourself. It does not make a bank transfer, and does not count as income or spending.	يسجل هذا انتقال أموالك بين حساباتك. لا ينفذ تحويلاً بنكياً ولا يُحسب دخلاً أو مصروفاً.
Give the transfer a destination.	حدد وجهة التحويل.
Add a second account before recording money moving between accounts.	أضف حساباً ثانياً قبل تسجيل تحويل بين الحسابات.
Add another account	إضافة حساب آخر
Give your money a home.	أضف مكاناً لأموالك.
Give your money a home	أضف مكاناً لأموالك
Account name	اسم الحساب
Current balance	الرصيد الحالي
Starting balance	الرصيد الافتتاحي
Current balance · AED	الرصيد الحالي · درهم
Starting balance · AED	الرصيد الافتتاحي · درهم
Edit account	تعديل الحساب
Save account	حفظ الحساب
Set starting balance	تعيين الرصيد الافتتاحي
Delete unused account	حذف حساب غير مستخدم
Delete this account?	حذف هذا الحساب؟
Delete account	حذف الحساب
Only unused accounts can be removed. Recorded entries and goal savings must keep their account reference.	يمكن حذف الحسابات غير المستخدمة فقط. يجب الاحتفاظ بالحسابات المرتبطة بحركات أو مبالغ أهداف.
Use a name you recognise. No bank login or account number needed.	اختر اسماً تعرفه. لا حاجة لبيانات دخول البنك أو رقم الحساب.
Change the name, type, or colour.	غيّر الاسم أو النوع أو اللون.
Set your starting balance, name, type, or colour.	عيّن الرصيد الافتتاحي أو الاسم أو النوع أو اللون.
A little colour	لون الحساب
Colour	اللون
Use the money you actually have now. This is not income. Only log later transactions; do not add salary again if it is already included here. To reconstruct earlier transactions, use the balance before them instead.	أدخل المبلغ الذي تملكه فعلاً الآن. هذا ليس دخلاً جديداً. سجل الحركات اللاحقة فقط، ولا تضف الراتب مرة أخرى إذا كان ضمن هذا الرصيد. لإعادة بناء سجل سابق استخدم الرصيد الذي كان موجوداً قبله.
For investments, use Investment account and record contributions as transfers. Values are manual; market prices are not updated automatically.	للاستثمارات اختر حساباً استثمارياً وسجل تمويله كتحويل. القيم تُدخل يدوياً ولا تُحدّث أسعار السوق تلقائياً.
Unreserved	غير مخصص
Reserved for goals	مخصص للأهداف
Record a transfer	تسجيل تحويل
Check actual balance	مراجعة الرصيد الفعلي
Correct balance · no income or spending	تصحيح الرصيد · دون دخل أو مصروف
See this account’s activity	عرض حركات هذا الحساب
Correct the balance	تصحيح الرصيد
Correct current balance · AED	الرصيد الحالي الصحيح · درهم
Save balance correction	حفظ تصحيح الرصيد
Use this for a starting balance or bookkeeping mistake. It changes the balance without inventing salary or spending. To find missing income or spending instead, use Check actual balance.	استخدم هذا لتصحيح خطأ في الرصيد الافتتاحي أو التسجيل. يتغير الرصيد دون إضافة راتب أو مصروف افتراضي. للبحث عن دخل أو مصروف مفقود استخدم مراجعة الرصيد الفعلي.
What is actually left?	ما المبلغ المتبقي فعلاً؟
Expected from your records	المتوقع حسب سجلاتك
Actual current balance · AED	الرصيد الفعلي الحالي · درهم
Enter the balance you see	أدخل الرصيد الظاهر لديك
Save balance check	حفظ مراجعة الرصيد
Use your current/posted balance consistently. Account for pending card payments before treating a gap as spending.	استخدم الرصيد الحالي أو المسجل باستمرار. راجع مدفوعات البطاقة المعلقة قبل اعتبار أي فرق مصروفاً.
Enter the real balance to see any unexplained difference. A gap is dated today; split it across months in Activity if some belongs earlier.	أدخل الرصيد الفعلي لمعرفة الفرق غير المفسر. يُسجل الفرق بتاريخ اليوم ويمكن تقسيمه على أشهر من الحركة المالية إذا كان بعضه أقدم.
Link your debit card.	اربط بطاقة الخصم.
Edit debit card	تعديل بطاقة الخصم
Card name	اسم البطاقة
Linked bank account	الحساب البنكي المرتبط
Last four digits · optional	آخر أربعة أرقام · اختياري
No full card number, PIN, expiry, or security code.	لا تدخل رقم البطاقة الكامل أو الرقم السري أو تاريخ الانتهاء أو رمز الأمان.
Save card	حفظ البطاقة
Link card	ربط البطاقة
A debit card uses its bank’s money. This keeps both visible without counting the balance twice.	تستخدم بطاقة الخصم رصيد حسابها البنكي. يظهر الاثنان دون احتساب الرصيد مرتين.
Record card spending	تسجيل مصروف بالبطاقة
Edit card	تعديل البطاقة
Remove unused card	إزالة بطاقة غير مستخدمة
This is the same balance shown under the bank account. It is counted once in your total.	هذا هو الرصيد نفسه الظاهر في الحساب البنكي ويُحسب مرة واحدة في الإجمالي.
Money is held in	الأموال موجودة في
Paid with this card this month	المدفوع بهذه البطاقة هذا الشهر
Check linked bank’s actual balance	مراجعة الرصيد الفعلي للحساب المرتبط
Create a goal	إنشاء هدف
Add goal	إضافة هدف
Edit goal	تعديل الهدف
Goal name	اسم الهدف
Target amount · AED	المبلغ المستهدف · درهم
Target date · optional	التاريخ المستهدف · اختياري
Target date	التاريخ المستهدف
Save goal	حفظ الهدف
Save towards goal	ادخار للهدف
Remove this goal?	إزالة هذا الهدف؟
Remove goal	إزالة الهدف
Any savings reserved for this goal become unreserved. Your actual account balances stay the same.	تصبح المبالغ المخصصة لهذا الهدف متاحة دون تخصيص. أرصدة حساباتك الفعلية لا تتغير.
Saved	تم ادخار
Remaining	المتبقي
Target	الهدف
Move saved money	نقل المال المخصص
Release savings	إلغاء تخصيص الادخار
Where the savings will be held	الحساب الذي سيحتفظ بالادخار
Take the money from	اسحب المبلغ من
Record savings move	تسجيل نقل الادخار
Move the money, keep the goal.	انقل المال واحتفظ بالهدف.
Add a destination first.	أضف حساب الوجهة أولاً.
A move needs another account, cash balance, or savings balance.	يتطلب النقل حساباً آخر أو رصيداً نقدياً أو حساب توفير.
Add savings to this goal first.	خصص مبلغاً لهذا الهدف أولاً.
Record a transfer you make yourself. The savings stay attached to this goal and move to the destination balance. This is not new spending.	سجل تحويلاً تنفذه بنفسك. يبقى الادخار مرتبطاً بالهدف وينتقل إلى رصيد الوجهة. هذا ليس مصروفاً جديداً.
Add portfolio	إضافة محفظة استثمارية
Create investment portfolio	إنشاء محفظة استثمارية
New investment portfolio	محفظة استثمارية جديدة
One account can hold several companies or funds.	يمكن لحساب واحد أن يضم عدة شركات أو صناديق.
One account can hold several companies.	يمكن لحساب واحد أن يضم عدة شركات.
Portfolio name	اسم المحفظة
Opening total · AED	الإجمالي الافتتاحي · درهم
Create portfolio	إنشاء المحفظة
Keep multiple companies in one portfolio. Their current value is included in total money once.	احتفظ باستثمارات عدة شركات في محفظة واحدة. تُحتسب قيمتها الحالية مرة واحدة ضمن إجمالي أموالك.
Shares at current value	الأسهم بالقيمة الحالية
Cash / value not assigned to holdings	نقد / قيمة غير موزعة على استثمارات
These are parts of this portfolio total, not additional money. Values are entered manually.	هذه أجزاء من إجمالي المحفظة وليست أموالاً إضافية. تُدخل القيم يدوياً.
Add stock / holding	إضافة سهم أو استثمار
Update holding	تحديث الاستثمار
Company / fund	الشركة / الصندوق
Number of shares	عدد الأسهم
Fractional shares supported, up to 6 decimal places.	تدعم كسور الأسهم حتى 6 منازل عشرية.
Total original cost · AED	إجمالي التكلفة الأصلية · درهم
Total current value · AED	إجمالي القيمة الحالية · درهم
Enter totals for all shares, not the price of one share. A value change adjusts your total money without recording salary or spending.	أدخل الإجمالي لجميع الأسهم، وليس سعر السهم الواحد. تغير القيمة يعدل إجمالي أموالك دون تسجيل راتب أو مصروف.
How is this money recorded?	كيف سُجل هذا المبلغ؟
Already included in this portfolio’s balance	مدرج بالفعل ضمن رصيد هذه المحفظة
Move money from another app account	نقل مال من حساب آخر في التطبيق
Existing investment not yet counted anywhere	استثمار موجود لم يُحتسب بعد في أي حساب
Source account · for moving money	حساب المصدر · لنقل المال
Amount moved · AED	المبلغ المنقول · درهم
Defaults to original cost	افتراضياً: التكلفة الأصلية
Save valuation	حفظ التقييم
Add holding	إضافة الاستثمار
Sell all shares	بيع جميع الأسهم
Remove share details only	إزالة تفاصيل الأسهم فقط
Remove share details only?	إزالة تفاصيل الأسهم فقط؟
Remove details	إزالة التفاصيل
Record sale of all shares	تسجيل بيع جميع الأسهم
Net proceeds received · AED	صافي المبلغ المستلم · درهم
Record full sale	تسجيل البيع الكامل
The account balance stays unchanged. This does not record a sale. The value becomes unassigned within the portfolio.	لا يتغير رصيد الحساب ولا تُسجل عملية بيع. تصبح القيمة غير موزعة داخل المحفظة.
Make entry quicker	تسجيل أسرع
Choose up to 8 categories and a default payment account.	اختر حتى 8 فئات وحساب دفع افتراضياً.
Default payment	الدفع الافتراضي
Remember my latest expense	تذكر طريقة دفع آخر مصروف
You can change the account on any expense. Linked debit cards use their bank balance once.	يمكنك تغيير الحساب لكل مصروف. تستخدم بطاقات الخصم رصيد البنك المرتبط مرة واحدة.
Quick buttons	الأزرار السريعة
Save shortcuts	حفظ الاختصارات
Repeat this expense	تكرار هذا المصروف
Undo recent changes	التراجع عن التغييرات الأخيرة
Undo one recorded change at a time, starting with the latest.	تراجع عن تغيير واحد في كل مرة، بدءاً من الأحدث.
Undo latest change	التراجع عن آخر تغيير
Recent changes	التغييرات الأخيرة
No recent changes to undo. New entries, edits and deletions appear here after this update.	لا توجد تغييرات حديثة للتراجع عنها. ستظهر هنا الإضافات والتعديلات والحذف التي تجريها بعد هذا التحديث.
The latest change will be reversed. Other preferences stay as they are. Balances and goal reservations are checked before anything is saved.	سيُعكس آخر تغيير وتبقى التفضيلات الأخرى كما هي. تُراجع الأرصدة ومبالغ الأهداف قبل الحفظ.
Up to 20 recent changes are kept on this device. Restore, reset and Start from today begin a new undo history. Their separate recovery options still apply. If other records depend on a change, Ghars will keep it rather than leave invalid balances.	يُحتفظ بآخر 20 تغييراً على الجهاز. تبدأ الاستعادة وإعادة الضبط والبدء من اليوم سجل تراجع جديداً، مع بقاء خيارات استعادتها الخاصة. إذا ارتبطت سجلات أخرى بالتغيير فلن يُتراجع عنه بطريقة تفسد الأرصدة.
Latest change undone.	تم التراجع عن آخر تغيير.
Entry added	أُضيفت حركة
Entry edited	عُدلت حركة
Entry deleted	حُذفت حركة
Entry split	قُسمت حركة
Unexplained amount categorised	صُنّف مبلغ غير مفسر
Balance checked	رُوجع الرصيد
Balance corrected	صُحح الرصيد
Recurring entry recorded	سُجلت حركة متكررة
Existing entry linked	رُبطت حركة موجودة
Recurring occurrence skipped	تُخطي استحقاق متكرر
Holding added	أُضيف استثمار
Holding valuation changed	عُدل تقييم استثمار
Holding sold	بيع استثمار
Money reserved for a goal	خُصص مال لهدف
Goal money released	أُلغي تخصيص مال لهدف
Goal money moved	نُقل مال مخصص لهدف
Possible duplicate	حركة قد تكون مكررة
Possible duplicate. Review the existing entries before saving.	قد تكون هذه الحركة مكررة. راجع الحركات الموجودة قبل الحفظ.
These entries already exist. Nothing new has been saved.	هذه الحركات موجودة بالفعل. لم يُحفظ أي شيء جديد.
I checked. This is a separate payment.	راجعت السجل. هذه دفعة مستقلة.
To record it anyway, tick the box and press Save again. Otherwise cancel or edit this draft.	لتسجيلها رغم التشابه، حدد المربع واضغط حفظ مرة أخرى. أو ألغِ المسودة أو عدّلها.
Expense favourites	المصروفات المفضلة
Manage favourites	إدارة المفضلة
Save a usual amount, category and payment account for next time.	احفظ المبلغ المعتاد والفئة وحساب الدفع للمرة القادمة.
A favourite opens a draft. Check it and save when the payment happens.	تفتح المفضلة مسودة تراجعها وتحفظها عند حدوث الدفع.
Use favourite	استخدام المفضلة
Edit favourite	تعديل المفضلة
Create favourite	إنشاء مصروف مفضل
Choose a name, usual amount and payment account.	اختر اسماً ومبلغاً معتاداً وحساب دفع.
Favourite name	اسم المصروف المفضل
Usual amount · AED	المبلغ المعتاد · درهم
e.g. Weekly laundry	مثال: غسيل أسبوعي
Save favourite	حفظ المفضلة
Save as favourite	حفظ كمفضلة
Delete favourite	حذف المفضلة
Delete this favourite?	حذف هذا الاختصار؟
Only the shortcut is removed. Recorded payments stay unchanged.	يُحذف الاختصار فقط. تبقى المدفوعات المسجلة كما هي.
Add an account before creating a favourite.	أضف حساباً قبل إنشاء مصروف مفضل.
Recurring entries	الحركات المتكررة
Salary, rent & subscriptions	الراتب والإيجار والاشتراكات
Prepare regular entries automatically when you open the app.	تجهيز الحركات المعتادة تلقائياً عند فتح التطبيق.
Set up recurring	إعداد التكرار
Review due	مراجعة المستحق
Review	مراجعة
Check each due amount before it changes your balance.	راجع كل مبلغ مستحق قبل أن يؤثر في رصيدك.
Due entries are prepared on this device. Nothing is recorded until you review it.	تُجهز الحركات المستحقة على هذا الجهاز ولا تُسجل حتى تراجعها.
Nothing is due for review.	لا توجد حركات مستحقة للمراجعة.
Paused	متوقف مؤقتاً
Due	مستحق
Next	القادم
Rent	إيجار
Subscription	اشتراك
Bill	فاتورة
Edit recurring entry	تعديل حركة متكررة
New recurring entry	حركة متكررة جديدة
Choose the next occurrence that has not already been recorded.	اختر الاستحقاق القادم الذي لم يُسجل بعد.
Name	الاسم
Payment account	حساب الدفع
Repeat	التكرار
daily	يومياً
weekly	أسبوعياً
monthly	شهرياً
yearly	سنوياً
Next due date	موعد الاستحقاق القادم
Monthly dates keep their original day: a 31st falls on the last day in shorter months.	يبقى يوم التكرار الشهري ثابتاً؛ ويتحول يوم 31 إلى آخر يوم في الأشهر الأقصر.
Pause this schedule	إيقاف هذا الجدول مؤقتاً
Save schedule	حفظ الجدول
Delete schedule	حذف الجدول
Delete this schedule?	حذف هذا الجدول؟
Recorded entries remain. Future drafts for this schedule stop.	تبقى الحركات المسجلة ويتوقف تجهيز المسودات القادمة لهذا الجدول.
For income, choose the account itself. Debit cards are only for expenses.	للدخل اختر الحساب نفسه. بطاقات الخصم مخصصة للمصروفات.
Actual amount · AED	المبلغ الفعلي · درهم
Actual date	التاريخ الفعلي
Later	لاحقاً
Record income	تسجيل الدخل
Record expense	تسجيل المصروف
Record only if this happened and is not already logged. The amount you confirm changes this account once. Future occurrences keep the schedule’s normal amount.	سجل فقط إذا حدث الدفع ولم يكن مسجلاً. يؤثر المبلغ المؤكد في الحساب مرة واحدة، وتبقى الاستحقاقات القادمة بالمبلغ المعتاد للجدول.
Already recorded · link an entry	مسجل بالفعل · ربط حركة
Skip this occurrence	تخطي هذا الاستحقاق
Skip this occurrence?	تخطي هذا الاستحقاق؟
Skip occurrence	تخطي الاستحقاق
This due date will be marked as handled without recording income or spending. The next due date will be prepared normally.	سيُعتبر هذا الاستحقاق منجزاً دون تسجيل دخل أو مصروف. سيُجهز الموعد القادم كالمعتاد.
Use Record only if the payment happened. Skip an occurrence if it was cancelled or already entered elsewhere. No background bank connection is used.	سجل فقط إذا حدث الدفع. اربط الحركة الموجودة إذا سجلتها سابقاً، أو تخطَّ الاستحقاق إذا أُلغي. لا يوجد اتصال بنكي في الخلفية.
Already recorded?	مسجل بالفعل؟
Find the existing entry	البحث عن الحركة الموجودة
Search note, amount or date	ابحث بالملاحظة أو المبلغ أو التاريخ
Existing entry	الحركة الموجودة
Choose an existing entry	اختر حركة موجودة
This is the payment for this occurrence.	هذه هي الدفعة الخاصة بهذا الاستحقاق.
Link existing entry	ربط الحركة الموجودة
Choose the payment you already recorded.	اختر الدفعة التي سجلتها سابقاً.
No matching unlinked entries. Try another search or record the payment.	لا توجد حركات مطابقة غير مرتبطة. جرّب بحثاً آخر أو سجل الدفعة.
Only unlinked entries of the same type and account are listed, closest to the due date first. Search to find older entries. If the payment was not logged, return to Review and record it.	تظهر الحركات غير المرتبطة من النوع والحساب نفسيهما، والأقرب للاستحقاق أولاً. ابحث عن الحركات الأقدم. إذا لم تسجل الدفع فعد إلى المراجعة لتسجيله.
Confirm the existing payment before linking.	أكد اختيار الدفعة الموجودة قبل ربطها.
Existing entry linked. No money recorded twice.	رُبطت الحركة الموجودة دون احتساب المال مرتين.
Linked to a recurring occurrence. This payment is counted once.	مرتبطة باستحقاق متكرر. تُحتسب هذه الدفعة مرة واحدة.
Keep a verified backup	احتفظ بنسخة احتياطية متحقق منها
Your recent changes need a backup	تغييراتك الأخيرة تحتاج نسخة احتياطية
Time to check your backup	حان وقت مراجعة النسخة الاحتياطية
Save a copy and reopen it to verify your current records.	احفظ نسخة وافتحها مجدداً للتحقق من سجلاتك الحالية.
A saved file is worth checking regularly.	من المفيد التحقق من الملف المحفوظ بانتظام.
Back up now	نسخ احتياطي الآن
Tomorrow	غداً
Gentle backup reminders	تذكيرات هادئة للنسخ الاحتياطي
Reminders appear inside Ghars. Nothing is uploaded automatically.	تظهر التذكيرات داخل غرس. لا يُرفع أي شيء تلقائياً.
Show backup reminders	إظهار تذكيرات النسخ الاحتياطي
Remind after	التذكير بعد
Or after this many changes	أو بعد هذا العدد من التغييرات
days	أيام
Save reminders	حفظ التذكيرات
A verified file must match your current records to reset the reminder. Selecting an older or different backup does not hide the need to back up new changes. Tomorrow snoozes the reminder for one day.	يجب أن تطابق النسخة المتحقق منها سجلاتك الحالية لإعادة توقيت التذكير. لا تخفي نسخة أقدم أو مختلفة الحاجة لنسخ التغييرات الجديدة. يؤجل خيار غداً التذكير ليوم واحد.
Language & reading	اللغة وحجم النص
Choose what is comfortable for you on this device.	اختر ما يناسبك على هذا الجهاز.
Language	اللغة
Text size	حجم النص
Standard	عادي
Large	كبير
Extra large	كبير جداً
Save preferences	حفظ التفضيلات
Arabic uses a right-to-left layout. Account names and your own notes are kept exactly as entered. You can also use your iPhone’s text and zoom settings.	تستخدم العربية ترتيباً من اليمين إلى اليسار. تبقى أسماء الحسابات وملاحظاتك كما أدخلتها. يمكنك أيضاً استخدام إعدادات النص والتكبير في iPhone.
English / العربية · Text size	العربية / English · حجم النص
Guided setup	الإعداد الموجّه
Welcome to Ghars	مرحباً بك في غرس
Step	الخطوة
Your name	اسمك
Your accounts & current balances	حساباتك وأرصدتك الحالية
Your usual payment account	حساب الدفع المعتاد
Your first backup	نسختك الاحتياطية الأولى
You are ready	أنت جاهز
A private space for each person. No shared family records unless you deliberately share a backup.	مساحة خاصة لكل شخص. لا تُشارك سجلات العائلة إلا إذا شاركت نسخة احتياطية بنفسك.
Enter the money you have now. You do not need to reconstruct earlier spending.	أدخل المبالغ التي تملكها الآن. لا تحتاج إلى إعادة تسجيل المصروفات القديمة.
Include money set aside for goals in the account that holds it. Do not add salary again if it is already in the current balance. A linked debit card uses its bank account’s money once.	ضمّن الأموال المخصصة للأهداف في رصيد الحساب الذي يحتفظ بها. لا تضف الراتب مرة أخرى إذا كان ضمن الرصيد الحالي. تستخدم بطاقة الخصم المرتبطة رصيد البنك مرة واحدة.
Existing accounts and entries remain unchanged. You can link debit cards from Accounts after setup.	تبقى الحسابات والحركات الموجودة كما هي. يمكنك ربط بطاقات الخصم من صفحة الحسابات بعد الإعداد.
Choose what should be selected when you log expenses.	اختر الحساب الذي يُحدد افتراضياً عند تسجيل المصروفات.
You can change the account for any expense or update this preference later.	يمكنك تغيير الحساب لأي مصروف أو تعديل هذا التفضيل لاحقاً.
Keep a copy that you can find and restore.	احتفظ بنسخة يمكنك العثور عليها واستعادتها.
Create an encrypted backup, save it in Files, then select the saved copy to verify it. Keep its password in your password manager. Sharing or downloading alone is not verification.	أنشئ نسخة احتياطية مشفرة واحفظها في تطبيق الملفات، ثم اختر النسخة المحفوظة للتحقق منها. احتفظ بكلمة مرورها في مدير كلمات المرور. المشاركة أو التنزيل وحدهما لا يعنيان التحقق.
Create my first backup	إنشاء نسختي الاحتياطية الأولى
Verify a saved copy	التحقق من نسخة محفوظة
Do this later	القيام بذلك لاحقاً
Continue setup	متابعة الإعداد
Use your own installed copy for your records.	استخدم نسختك المثبتة الخاصة لسجلاتك.
Your current records have a matching verified backup.	لديك نسخة احتياطية متحقق منها تطابق سجلاتك الحالية.
You can make your first verified backup from Settings. A gentle reminder will help.	يمكنك إنشاء نسختك الأولى والتحقق منها من الإعدادات. سيساعدك تذكير هادئ.
Log new payments as they happen. Your family can use the same app link on their own devices; each person gets separate local records.	سجل المدفوعات الجديدة عند حدوثها. يمكن لعائلتك استخدام رابط التطبيق نفسه على أجهزتهم، ولكل شخص سجلات محلية منفصلة.
Start using Ghars	البدء باستخدام غرس
Enter its current total balance. This is not new income.	أدخل إجمالي رصيده الحالي. هذا ليس دخلاً جديداً.
e.g. Everyday account	مثال: الحساب اليومي
Include salary and goal money already held here. Do not add them again as income. Use one bank account balance even if multiple debit cards use it.	ضمّن الراتب وأموال الأهداف الموجودة في الحساب. لا تضفها مرة أخرى كدخل. استخدم رصيداً واحداً للحساب البنكي حتى لو ارتبطت به عدة بطاقات خصم.
Add an account to continue.	أضف حساباً للمتابعة.
accounts	حسابات
entries	حركات
goals	أهداف
A space that feels like yours	مساحة تناسبك
Keep it simple.	ببساطة.
A few preferences. Your data, in your hands.	تفضيلات بسيطة. بياناتك بين يديك.
What should we call you?	بماذا نناديك؟
What should we call you? Your name stays on this device.	بماذا نناديك؟ يبقى اسمك على هذا الجهاز.
Save name	حفظ الاسم
Enter your name	أدخل اسمك
Name saved.	حُفظ الاسم.
A quieter palette	ألوان أكثر هدوءاً
Warm beige	بيج دافئ
Soft grey	رمادي هادئ
Night	ليلي
Show balances	إظهار الأرصدة
Hide balances	إخفاء الأرصدة
Privacy on the screen. This is not an app lock.	خصوصية على الشاشة. هذا ليس قفلاً للتطبيق.
Monthly spending limit	حد المصروفات الشهري
Optional. Set your own number.	اختياري. حدد المبلغ المناسب لك.
Yours, on this device	بياناتك على هذا الجهاز
Faster everyday tracking	متابعة يومية أسرع
Quick buttons & default payment	الأزرار السريعة والدفع الافتراضي
Choose your shortcuts and usual account.	اختر اختصاراتك وحسابك المعتاد.
Salary, rent, subscriptions and bills · review before recording.	الراتب والإيجار والاشتراكات والفواتير · مراجعة قبل التسجيل.
Set current balances and keep earlier history.	عيّن الأرصدة الحالية واحتفظ بالسجل السابق.
A little clarity	توضيحات مفيدة
How the numbers work	كيف تُحسب الأرقام
Bank accounts, debit cards, savings, and missing spending.	الحسابات البنكية وبطاقات الخصم والادخار والمصروفات المفقودة.
Explore a sample	تجربة بيانات نموذجية
Try the app without changing your money records.	جرّب التطبيق دون تغيير سجلاتك المالية.
What stays private	خصوصية بياناتك
Start again	البدء من جديد
Start from today	البدء من اليوم
Tracking options	خيارات المتابعة
Ready to track from your current balances?	هل أنت جاهز للمتابعة من أرصدتك الحالية؟
Enter what you have now. Keep your account names, investments, goals and earlier records.	أدخل ما تملكه الآن مع الاحتفاظ بأسماء الحسابات والاستثمارات والأهداف والسجلات السابقة.
I checked these balances and want Overview to track from now.	راجعت هذه الأرصدة وأريد أن تبدأ المتابعة من الآن.
Start tracking from today	بدء المتابعة من اليوم
Include all history in Overview	إظهار كل السجل في النظرة العامة
Undo start from today	التراجع عن البدء من اليوم
Include all history?	إظهار كل السجل؟
Include all history	إظهار كل السجل
Overview will include all recorded entries in each month again. Balances stay unchanged.	ستشمل النظرة العامة جميع الحركات المسجلة لكل شهر مجدداً. الأرصدة لا تتغير.
Confirm the balances before starting.	أكد الأرصدة قبل البدء.
Undo start from today?	التراجع عن البدء من اليوم؟
Restore previous records	استعادة السجلات السابقة
Reset balances & history	إعادة ضبط الأرصدة والسجل
Reset balances & history?	إعادة ضبط الأرصدة والسجل؟
Keep accounts, linked cards, and goal targets. Clear your money records.	احتفظ بالحسابات والبطاقات المرتبطة والأهداف وامسح السجل المالي.
Start fresh while keeping your accounts.	ابدأ من جديد مع الاحتفاظ بحساباتك.
Keep:	الاحتفاظ بـ:
Clear:	مسح:
Type RESET to confirm	اكتب RESET للتأكيد
Reset money records	إعادة ضبط السجل المالي
Save a backup first	حفظ نسخة احتياطية أولاً
Export a backup if you may need these records again. Reset cannot be undone inside the app. Existing backup files in Files will not be deleted.	صدّر نسخة احتياطية إذا كنت قد تحتاج هذه السجلات لاحقاً. لا يمكن التراجع عن إعادة الضبط داخل التطبيق. لا تُحذف النسخ الاحتياطية الموجودة في الملفات.
Type RESET to confirm. Nothing has been changed.	اكتب RESET للتأكيد. لم يتغير شيء.
Backup & restore	النسخ الاحتياطي والاستعادة
Keep a copy outside the app, then reopen it to verify.	احتفظ بنسخة خارج التطبيق ثم افتحها مجدداً للتحقق منها.
Export requested:	طُلب تصدير نسخة:
Backup verified:	تم التحقق من نسخة:
Never	لم يحدث بعد
Not yet	ليس بعد
Earlier export recorded · not verified	تصدير سابق مسجل · غير متحقق منه
The latest exported file was reopened and validated.	أُعيد فتح أحدث ملف مُصدّر والتحقق من سلامته.
A different or earlier saved backup was validated. The latest export is not verified.	تم التحقق من نسخة أقدم أو مختلفة. لم يُتحقق من أحدث تصدير.
Later changes need a new backup.	التغييرات اللاحقة تحتاج نسخة احتياطية جديدة.
Sharing or downloading alone does not prove a usable file was saved.	المشاركة أو التنزيل وحدهما لا يثبتان حفظ ملف صالح للاستخدام.
Create a backup	إنشاء نسخة احتياطية
Verify a saved backup	التحقق من نسخة محفوظة
Restore a backup	استعادة نسخة احتياطية
On iPhone	على iPhone
Save to Files	حفظ في الملفات
Create a backup	إنشاء نسخة احتياطية
Encrypted backups protect the saved file with your own password.	تحمي النسخة المشفرة الملف المحفوظ بكلمة مرور تختارها.
Protection	الحماية
Encrypted · recommended	مشفرة · موصى بها
Plain JSON · readable without a password	JSON غير مشفر · يُقرأ دون كلمة مرور
Backup password	كلمة مرور النسخة الاحتياطية
Repeat password	أعد إدخال كلمة المرور
Prepare backup	تجهيز النسخة الاحتياطية
Backup prepared. Save the file next.	جُهزت النسخة الاحتياطية. احفظ الملف الآن.
Save your backup	احفظ نسختك الاحتياطية
The file is prepared. It has not been saved or verified yet.	الملف جاهز. لم يُحفظ أو يُتحقق منه بعد.
Share / Save to Files	مشاركة / حفظ في الملفات
Download file	تنزيل الملف
I saved it · verify the file	حفظته · التحقق من الملف
Export requested	طُلب تصدير النسخة
Now verify the copy saved outside Ghars.	تحقق الآن من النسخة المحفوظة خارج غرس.
Choose saved file to verify	اختر الملف المحفوظ للتحقق
Save the file again	احفظ الملف مرة أخرى
Ghars handed the file to sharing or downloading. It cannot tell where you saved it. Choose the saved file below to check that it is readable.	سلّم غرس الملف للمشاركة أو التنزيل، ولا يمكنه معرفة مكان حفظه. اختر الملف المحفوظ أدناه للتأكد من إمكانية قراءته.
Restore from Files	الاستعادة من الملفات
Your existing records stay unchanged until you confirm.	تبقى سجلاتك الحالية دون تغيير حتى تؤكد الاستعادة.
Choose backup file	اختيار ملف النسخة الاحتياطية
Unlock to verify	فك التشفير للتحقق
Unlock this backup	فك تشفير هذه النسخة
Enter the password you used when creating this file.	أدخل كلمة المرور التي استخدمتها عند إنشاء الملف.
Unlock & check file	فك التشفير وفحص الملف
This decrypts the file on this device. It does not change your current records. The app-lock recovery code is not a backup password.	يُفك تشفير الملف على هذا الجهاز دون تغيير سجلاتك الحالية. رمز استرداد قفل التطبيق ليس كلمة مرور النسخة الاحتياطية.
Backup contents checked.	فُحص محتوى النسخة الاحتياطية.
Backup verified	تم التحقق من النسخة الاحتياطية
This selected file is readable and passes the backup data checks.	هذا الملف قابل للقراءة وقد اجتاز فحوصات بيانات النسخة الاحتياطية.
The password successfully decrypted the saved copy.	نجحت كلمة المرور في فك تشفير النسخة المحفوظة.
This copy is plain JSON and is not encrypted.	هذه نسخة JSON غير مشفرة.
Your money records have not been replaced. This check cannot guarantee that you will retain the file or remember its password.	لم تُستبدل سجلاتك المالية. لا يضمن هذا الفحص احتفاظك بالملف أو تذكرك لكلمة مروره.
Restore this backup?	استعادة هذه النسخة؟
This replaces current device records. A snapshot is kept so you can undo the restore.	تستبدل هذه العملية سجلات الجهاز الحالية. تُحفظ لقطة سابقة لتتمكن من التراجع عن الاستعادة.
Backup data checks passed.	اجتازت البيانات فحوصات النسخة الاحتياطية.
Replace current records with this backup.	استبدال السجلات الحالية بهذه النسخة.
Restore backup	استعادة النسخة الاحتياطية
Undo the last restore	التراجع عن آخر استعادة
Return to the snapshot kept before a restore.	العودة إلى اللقطة المحفوظة قبل الاستعادة.
Undo the last restore?	التراجع عن آخر استعادة؟
Recover previous data	استرجاع البيانات السابقة
Return to the snapshot saved immediately before your last restore. Current changes will be replaced.	العودة إلى اللقطة المحفوظة قبل آخر استعادة. ستُستبدل التغييرات الحالية.
Export entries as CSV	تصدير الحركات بصيغة CSV
For a spreadsheet or your own records.	لجدول بيانات أو لسجلاتك الخاصة.
Entries exported.	صُدّرت الحركات.
No saved backup verified yet	لم يُتحقق من نسخة محفوظة بعد
A saved backup has been verified	تم التحقق من نسخة محفوظة
Encrypted export and file verification.	تصدير مشفر والتحقق من الملف.
Reminders & app lock	التذكيرات وقفل التطبيق
Daily reminders	تذكيرات يومية
Face ID / device lock	Face ID / قفل الجهاز
Enabled on this device	مفعّل على هذا الجهاز
Set up a passkey screen lock	إعداد قفل شاشة بمفتاح مرور
Lock now	قفل الآن
Choose up to 24 times per day.	اختر حتى 24 موعداً يومياً.
Add another time	إضافة وقت آخر
Save times	حفظ الأوقات
Export these times to Calendar	تصدير هذه الأوقات إلى التقويم
Your iPhone decides whether to use Face ID or its passcode.	يحدد iPhone استخدام Face ID أو رمز دخول الجهاز.
This is a screen lock, not data encryption.	هذا قفل للشاشة، وليس تشفيراً للبيانات.
Disable app lock	تعطيل قفل التطبيق
Set up Face ID / passkey	إعداد Face ID / مفتاح المرور
Exit sample mode before changing your device lock.	اخرج من الوضع التجريبي قبل تغيير قفل الجهاز.
Save your recovery code	احفظ رمز الاسترداد
The lock is not enabled until you confirm.	لن يُفعّل القفل حتى تؤكد.
I saved my recovery code somewhere safe.	حفظت رمز الاسترداد في مكان آمن.
Enable app lock	تفعيل قفل التطبيق
App lock disabled on this device.	عُطل قفل التطبيق على هذا الجهاز.
Ghars is locked	غرس مقفل
Unlock with your device passkey. iPhone may use Face ID or its passcode.	افتحه بمفتاح مرور الجهاز. قد يستخدم iPhone Face ID أو رمز الدخول.
Unlock Ghars	فتح غرس
Use recovery code	استخدام رمز الاسترداد
Recovery code	رمز الاسترداد
Recover access	استرداد الوصول
This disables the screen lock. Your saved records stay unchanged.	يعطل هذا قفل الشاشة. تبقى سجلاتك المحفوظة دون تغيير.
Reload app	إعادة تحميل التطبيق
Unlock cancelled or unavailable. Try again, or use your recovery code.	أُلغي الفتح أو تعذر. حاول مجدداً أو استخدم رمز الاسترداد.
Your money, in your pocket.	أموالك في متناولك.
Install Ghars once, then use it offline.	ثبّت غرس مرة واحدة ثم استخدمه دون اتصال.
Add to your iPhone	إضافة إلى iPhone
Offline files are ready.	ملفات العمل دون اتصال جاهزة.
Installation and offline status.	التثبيت وحالة العمل دون اتصال.
Check for updates	التحقق من التحديثات
Updates check automatically online and apply when idle. Saved data stays.	يُتحقق من التحديثات تلقائياً عند الاتصال وتُطبق عند عدم الاستخدام. تبقى البيانات المحفوظة.
Reload update	تحميل التحديث
Update ready	التحديث جاهز
Update ready · Reload	التحديث جاهز · إعادة التحميل
Offline ready	جاهز دون اتصال
Saved on device	محفوظ على الجهاز
Saved on this device.	حُفظ على هذا الجهاز.
Install app	تثبيت التطبيق
Request persistent storage	طلب الاحتفاظ بالتخزين
Ask your browser to retain device data.	اطلب من المتصفح الاحتفاظ ببيانات الجهاز.
An update is ready. Waiting for saving or backup work to finish.	التحديث جاهز. بانتظار انتهاء الحفظ أو النسخ الاحتياطي.
An update is ready. Waiting for you to finish and clear the assistant.	التحديث جاهز. بانتظار انتهائك من المساعد ومسح محادثته.
An update is ready. Close this screen and finish any open form; it applies after 30 idle seconds.	التحديث جاهز. أغلق هذه الشاشة وأنهِ النماذج المفتوحة؛ سيُطبق بعد 30 ثانية دون استخدام.
An update is ready. Return to Overview; it applies after 30 idle seconds.	التحديث جاهز. عد إلى النظرة العامة؛ سيُطبق بعد 30 ثانية دون استخدام.
An update is ready. It applies after 30 seconds with no open form or assistant work.	التحديث جاهز. سيُطبق بعد 30 ثانية دون نماذج مفتوحة أو عمل في المساعد.
Update ready. It will apply automatically when you finish and leave the app idle.	التحديث جاهز وسيُطبق تلقائياً عند انتهائك وترك التطبيق دون استخدام.
Downloading an update. Keep the app open online.	جارٍ تنزيل تحديث. أبقِ التطبيق مفتوحاً ومتّصلاً.
Downloading an update. Keep the app open online, then check again.	جارٍ تنزيل تحديث. أبقِ التطبيق مفتوحاً ومتّصلاً ثم تحقق مجدداً.
Offline files are incomplete. Connect and check again.	ملفات العمل دون اتصال غير مكتملة. اتصل وتحقق مجدداً.
Could not check for updates. Connect to the internet and try again. Your saved records have not been changed.	تعذر التحقق من التحديثات. اتصل بالإنترنت وحاول مجدداً. لم تتغير سجلاتك المحفوظة.
Assistant / calculator	المساعد / الآلة الحاسبة
Offline assistant	مساعد دون اتصال
Minimise assistant	تصغير المساعد
Clear assistant history	مسح سجل المساعد
Ask or calculate	اسأل أو احسب
Ask or calculate…	اسأل أو احسب…
Send calculation	إرسال الحساب
Minimise to keep working. Calculations never save an entry.	صغّر المساعد لتواصل العمل. الحسابات لا تسجل حركات مالية.
Amounts are hidden. Show amounts in Settings to use the assistant.	المبالغ مخفية. أظهرها من الإعدادات لاستخدام المساعد.
You	أنت
Finish or cancel your current form, then review this request in the Assistant tab.	أنهِ النموذج الحالي أو ألغِه ثم راجع الطلب في تبويب المساعد.
Small questions. Clear answers.	أسئلة بسيطة. إجابات واضحة.
A little help, on hand.	مساعدة في متناولك.
Maths, balances, and simple entries. All offline.	حسابات وأرصدة وحركات بسيطة، دون اتصال.
Ghars assistant	مساعد غرس
Offline helper · no cloud AI	مساعد محلي · دون ذكاء اصطناعي سحابي
My balances	أرصدتي
Quick maths	حساب سريع
My goals	أهدافي
Message the offline assistant	رسالة للمساعد المحلي
Send message	إرسال الرسالة
Simple commands. Device-only data. Changes are reviewed before saving.	أوامر بسيطة وبيانات على الجهاز فقط. تُراجع التغييرات قبل الحفظ.
Try a little conversation.	جرّب سؤالاً.
Split what’s left	قسّم المتبقي
Split a bill	تقسيم فاتورة
Calculate a discount	حساب خصم
Reuse the last answer	استخدام آخر نتيجة
Check my spending limit	مراجعة حد المصروفات
Food spending	مصروفات الطعام
Last month	الشهر الماضي
Where is my money?	أين أموالي؟
This month’s spending	مصروفات هذا الشهر
How are my goals doing?	كيف تتقدم أهدافي؟
Show all commands	عرض جميع الأوامر
Show amounts to use the assistant?	إظهار المبالغ لاستخدام المساعد؟
Balances in chat would reveal numbers you’ve hidden.	ستظهر في المحادثة أرصدة أخفيتها.
Keep hidden	إبقاؤها مخفية
Show amounts	إظهار المبالغ
Entry saved on this device.	حُفظت الحركة على هذا الجهاز.
Preview · not saved	معاينة · غير محفوظة
Interactive preview · sample money · changes are not saved	معاينة تفاعلية · أموال نموذجية · التغييرات لا تُحفظ
Demo · sample amounts, not your money	وضع تجريبي · مبالغ نموذجية
Exit demo	الخروج من التجربة
Updated sample data. Your real data is unchanged.	حُدّثت البيانات النموذجية. بياناتك الفعلية لم تتغير.
Begin	ابدأ
A spending limit you choose	حد مصروفات تختاره
A simple monthly comparison, based on expenses you record.	مقارنة شهرية بسيطة حسب المصروفات المسجلة.
Monthly amount · AED	المبلغ الشهري · درهم
Save limit	حفظ الحد
Enter 0 to turn the limit off. This is your own target, not a spending recommendation.	أدخل 0 لإلغاء الحد. هذا هدف تحدده بنفسك وليس توصية بالإنفاق.
A clear picture of your money	صورة واضحة لأموالك
Where each number comes from.	مصدر كل رقم.
Got it	فهمت
Split across months	تقسيم على أشهر
Amount to move to another date · AED	المبلغ المنقول إلى تاريخ آخر · درهم
Date for this portion	تاريخ هذا الجزء
Save split	حفظ التقسيم
Move part of this entry. The rest keeps its current date and category.	انقل جزءاً من الحركة. يحتفظ الباقي بتاريخه وفئته.
Choose a date in the month it belongs to. If the date is an estimate, add a note to the resulting entry.	اختر تاريخاً في الشهر الصحيح. إذا كان تقديرياً فأضف ملاحظة للحركة الناتجة.
Give the missing money a name.	حدد نوع المبلغ غير المفسر.
Amount you can now explain · AED	المبلغ الذي يمكنك تفسيره الآن · درهم
What was it?	ما نوعه؟
When did this happen?	متى حدث ذلك؟
Choose the actual date so it counts in the right month.	اختر التاريخ الفعلي ليُحتسب في الشهر الصحيح.
Paid using	طريقة الدفع
Bank / not specified	الحساب البنكي / غير محدد
Explain this amount	تفسير هذا المبلغ
Explain part or all of this amount	تفسير جزء من المبلغ أو كله
This moves the amount out of “Unexplained” into the chosen category. It does not subtract it from your account again.	ينقل هذا المبلغ من غير مفسر إلى الفئة المختارة دون خصمه من حسابك مجدداً.
The two backup passwords do not match.	كلمتا مرور النسخة الاحتياطية غير متطابقتين.
Use a backup password of 12–1024 characters. A long, unique passphrase is best.	استخدم كلمة مرور من 12 إلى 1024 حرفاً. الأفضل عبارة طويلة وفريدة.
The password is incorrect or the backup is damaged. Your current records are unchanged.	كلمة المرور غير صحيحة أو النسخة تالفة. سجلاتك الحالية لم تتغير.
Choose a Ghars backup smaller than 35 MB.	اختر نسخة غرس أصغر من 35 ميغابايت.
This file is not a readable JSON backup. Choose the .json or older .dirhaya backup.	هذا ليس ملف نسخة JSON قابلاً للقراءة. اختر ملف .json أو ملف .dirhaya الأقدم.
This is not a Ghars backup.	هذه ليست نسخة احتياطية لغرس.
The encrypted backup is damaged.	النسخة المشفرة تالفة.
The backup contents are damaged.	محتويات النسخة تالفة.
Confirm before replacing your records.	أكد قبل استبدال سجلاتك.
Your records changed while reviewing. Choose the backup again.	تغيرت سجلاتك أثناء المراجعة. اختر النسخة مجدداً.
The change could not be saved on this device. Your previous data is unchanged. Save a backup, check device storage, and retry.	تعذر حفظ التغيير على هذا الجهاز. بياناتك السابقة لم تتغير. احفظ نسخة احتياطية وراجع مساحة الجهاز ثم حاول مجدداً.
Enter an amount with up to 2 decimal places, such as 125.50.	أدخل مبلغاً بمنزلتين عشريتين كحد أقصى، مثل 125.50.
Enter a positive amount.	أدخل مبلغاً موجباً.
Enter an amount above zero.	أدخل مبلغاً أكبر من صفر.
Invalid amount.	المبلغ غير صالح.
Choose an existing account.	اختر حساباً موجوداً.
Use today or an earlier valid date.	اختر اليوم أو تاريخاً صحيحاً أقدم.
Choose two different accounts.	اختر حسابين مختلفين.
Choose a category that matches income or spending.	اختر فئة تناسب الدخل أو المصروف.
Choose an existing default payment account.	اختر حساب دفع افتراضياً موجوداً.
Choose up to 8 different expense categories.	اختر حتى 8 فئات مصروفات مختلفة.
This entry is already linked to a recurring occurrence.	هذه الحركة مرتبطة بالفعل باستحقاق متكرر.
Choose an entry of the same type in this account.	اختر حركة من النوع نفسه في هذا الحساب.
The latest change has changed. Reopen Undo recent changes.	تغير آخر سجل. أعد فتح التراجع عن التغييرات الأخيرة.
Related records have changed. This action cannot be undone safely.	تغيرت سجلات مرتبطة. لا يمكن التراجع عن هذه العملية بأمان.
Related preferences have changed. This action cannot be undone safely.	تغيرت تفضيلات مرتبطة. لا يمكن التراجع عن هذه العملية بأمان.
This occurrence is no longer waiting for review. Refresh the list.	لم يعد هذا الاستحقاق بانتظار المراجعة. حدّث القائمة.
`);
add(`
Your money, mapped	أموالك في مكانها
Bank. Card. Cash. Clear.	البنك. البطاقة. النقد. بوضوح.
Bank & savings accounts	الحسابات المصرفية وحسابات التوفير
Cash, wallets & prepaid cards	النقد والمحافظ والبطاقات مسبقة الدفع
Cash	نقد
Cash · AED	نقد · درهم
Linked balance · AED	الرصيد المرتبط · درهم
See where it is held and which card spends it.	اعرف أين توجد أموالك وأي بطاقة تصرف منها.
No money reserved for goals	لا توجد أموال مخصصة للأهداف
Your goal money is held in:	الأموال المخصصة لهدفك موجودة في:
Make room for your future.	افسح المجال لمستقبلك.
A plan for what’s next	خطة لما هو قادم
What’s your next chapter?	ما خطوتك القادمة؟
Your next goal	هدفك القادم
A little closer, one saving at a time.	أقرب قليلاً مع كل مبلغ تدخره.
Choose a goal. Put money aside. See your progress.	اختر هدفاً وخصص له المال وتابع تقدمك.
Give it a name and a number. You can start small.	حدد اسماً ومبلغاً. يمكنك البدء بالقليل.
Goals reached	أهداف تحققت
In goals	مخصص للأهداف
New goal	هدف جديد
Create goal	إنشاء هدف
Add savings	إضافة مدخرات
Set aside	تخصيص مبلغ
Move saved money to another account	نقل المدخرات إلى حساب آخر
Why it matters · optional	لماذا يهمك · اختياري
A car	سيارة
Marriage	زواج
China trip	رحلة إلى الصين
A little more freedom	المزيد من الحرية
One step at a time	خطوة بخطوة
Make it yours	اجعله مناسباً لك
Let’s chat	لنتحدث
A quick calculation? A clearer picture?	حساب سريع؟ صورة أوضح؟
Your offline assistant is right here.	مساعدك دون إنترنت موجود هنا.
For entries, use the exact account and goal names. The helper prepares a form; it never contacts a bank.	لإضافة حركة، استخدم اسم الحساب أو الهدف كما هو. يجهز المساعد نموذجاً ولا يتصل بالبنك. أوامر إدخال الحركات النصية بالإنجليزية؛ يمكنك استخدام الأزرار العربية.
Invested	مستثمر
Spending	المصروفات
Default payment:	الدفع الافتراضي:
Any difference becomes a	يُسجل أي فرق على أنه
balance correction	تصحيح رصيد
, not salary or spending. Overview tracking begins after this setup. Earlier entries, including entries already recorded today, remain in Activity.	وليس راتباً أو مصروفاً. تبدأ متابعة النظرة العامة بعد هذا الإعداد. تبقى الحركات السابقة، بما فيها حركات اليوم المسجلة مسبقاً، في الحركة المالية.
Include goal money in each account’s balance. Do not add salary again if it is already included. Investment balances must include holdings and portfolio cash. A snapshot is kept before this change.	أدرج الأموال المخصصة للأهداف ضمن رصيد كل حساب. لا تضف الراتب مرة أخرى إن كان ضمن الرصيد. يجب أن يشمل رصيد الاستثمار الأصول والنقد الموجود فيه. تُحفظ لقطة قبل هذا التغيير.
Salary and spending are for this month. Your total also includes earlier money and investments. A balance correction is not income or spending.	الراتب والمصروفات تخص هذا الشهر. يشمل الإجمالي الأموال السابقة والاستثمارات أيضاً. تصحيح الرصيد ليس دخلاً ولا مصروفاً.
Goal savings stay inside the account you choose. They are part of your total money, and are excluded from your unreserved balance.	تبقى مدخرات الأهداف داخل الحساب الذي تختاره. وهي جزء من إجمالي أموالك وتُستبعد من الرصيد المتاح غير المخصص.
Percentages include spending and gross investment contributions. Groceries are grouped with food & drink. Unexplained amounts stay separate. Refunds are income and do not reduce these gross spending totals.	تشمل النسب المصروفات وإجمالي المبالغ المحولة للاستثمار. تُجمع البقالة مع الطعام والشراب، وتبقى المبالغ غير المفسرة منفصلة. تُسجل المبالغ المستردة كدخل ولا تُخصم من إجمالي المصروفات هنا.
Investment contributions are transfers into an account with type “Investment account”; they are not spending. Other transfers and goal reservations are excluded. The current month follows your tracking start; choose All recorded dates to include earlier entries.	مساهمات الاستثمار هي تحويلات إلى حساب استثماري وليست مصروفات. تُستبعد التحويلات الأخرى ومخصصات الأهداف. يبدأ الشهر الحالي من تاريخ بدء متابعتك؛ اختر جميع التواريخ المسجلة لعرض الحركات الأقدم.
Uses all entries matching the filters above, including entries beyond Show more. Other transfers and goal reservations are excluded.	يشمل جميع الحركات المطابقة للفلاتر، بما فيها الحركات بعد عرض المزيد. تُستبعد التحويلات الأخرى ومخصصات الأهداف.
to this due date. The existing amount and date stay unchanged. No money is added or deducted again.	بهذا الاستحقاق. يبقى المبلغ والتاريخ الأصليان دون تغيير، ولا تُضاف أموال أو تُخصم مجدداً.
Link a card	ربط بطاقة
If you load money onto this card separately, add it as a	إذا كنت تشحن هذه البطاقة بشكل منفصل، فأضفها كـ
account instead.	حساب مستقل.
After resetting, set each account’s starting balance to the money you actually have. A starting balance is not new income.	بعد إعادة الضبط، أدخل ما تملكه فعلياً كرصيد افتتاحي لكل حساب. الرصيد الافتتاحي ليس دخلاً جديداً.
account names and types, linked debit cards, goal names and targets, and your appearance preferences.	أسماء الحسابات وأنواعها، والبطاقات المرتبطة، وأسماء الأهداف ومبالغها المستهدفة، وتفضيلات المظهر.
all transactions, unexplained amounts, account balances, balance checks, saved-goal amounts, investment holdings, the spending limit, recurring schedules, expense favourites, undo history, and the previous restore and tracking snapshots.	جميع الحركات والمبالغ غير المفسرة والأرصدة ومراجعاتها ومخصصات الأهداف والأصول الاستثمارية وحد الإنفاق والجداول المتكررة والمفضلات وسجل التراجع واللقطات السابقة للاستعادة والمتابعة.
Choose a Ghars .json backup or an older .dirhaya file. All file types are selectable so older iPhone backups are not greyed out. Encrypted backups will ask for their password.	اختر نسخة غرس بصيغة .json أو نسخة أقدم بصيغة .dirhaya. يمكن اختيار جميع أنواع الملفات لتسهيل فتح النسخ القديمة على الآيفون. ستطلب النسخة المشفرة كلمة مرورها.
Choose Save to Files in the share sheet, then a folder you recognise, such as On My iPhone → Ghars Backups. Tap Save.	اختر «حفظ في الملفات» من قائمة المشاركة ثم مجلداً تعرفه، مثل «على الـ iPhone الخاص بي ← نسخ غرس». اضغط حفظ.
Find the file in Files → Browse, in the folder where you saved it. Search for “Ghars-” or “Dirhaya”. A CSV export cannot restore the app.	ابحث في «الملفات ← تصفح» داخل المجلد الذي اخترته. يمكنك البحث عن «Ghars-» أو «Dirhaya». لا يمكن استعادة التطبيق من ملف CSV.
To find it again, open Files → Browse and search “Ghars-”. Downloads may be under iCloud Drive or On My iPhone → Downloads, depending on your browser setting. Return here and verify that file.	للعثور عليه، افتح «الملفات ← تصفح» وابحث عن «Ghars-». قد يكون في iCloud Drive أو «على الـ iPhone الخاص بي ← التنزيلات» حسب إعدادات المتصفح. عد إلى هنا وتحقق من الملف.
Use a long, unique passphrase and keep it in your password manager. Ghars cannot recover a forgotten backup password. Your Face ID recovery code cannot decrypt it.	استخدم كلمة مرور طويلة وفريدة واحفظها في مدير كلمات المرور. لا يستطيع غرس استرجاع كلمة مرور النسخة إذا نسيتها. رمز استعادة قفل التطبيق لا يفك تشفيرها.
Only the exported file is encrypted. Device records are not encrypted by Ghars, and the app lock is separate.	يُشفر الملف المُصدَّر فقط. لا يشفر غرس السجلات الموجودة على الجهاز، وقفل التطبيق ميزة منفصلة.
Verification reads and checks the copy you select. It does not replace your records.	يقرأ التحقق النسخة التي تختارها ويفحصها، دون استبدال سجلاتك.
Replace this device’s data with a saved copy.	استبدال بيانات هذا الجهاز بنسخة محفوظة.
Accounts, entries, goals, and calculations stay on this device. There is no bank connection, cloud sync, analytics, or cloud assistant.	تبقى الحسابات والحركات والأهداف والحسابات الرياضية على هذا الجهاز. لا يوجد اتصال بالبنك أو مزامنة سحابية أو تحليلات أو مساعد سحابي.
Deleting the app or clearing website data can remove your records. Save backups in Files. Choose encrypted backup files to protect saved copies with a password. Device records are not encrypted by Ghars. Face ID / passkey is a screen lock, not database encryption.	قد يؤدي حذف التطبيق أو مسح بيانات الموقع إلى فقد سجلاتك. احفظ نسخاً احتياطية في الملفات واختر التشفير لحمايتها بكلمة مرور. لا يشفر غرس سجلات الجهاز. بصمة الوجه أو مفتاح المرور يقفل الشاشة ولا يشفر قاعدة البيانات.
Ghars — غرس — means planting. Small steps towards your future.	غرس: خطوات صغيرة نحو مستقبلك.
Use the Home Screen app consistently. Safari and installed-app data can be separate. Keep backups in Files before clearing data or changing devices.	استخدم نسخة الشاشة الرئيسية بانتظام. قد تكون بيانات Safari والتطبيق المثبت منفصلة. احتفظ بنسخ في الملفات قبل مسح البيانات أو تغيير الجهاز.
After installation, tracking and calculations work offline. An internet connection is needed to install or update the app.	بعد التثبيت، تعمل المتابعة والحسابات دون إنترنت. يلزم الاتصال للتثبيت أو التحديث.
iPhone Home Screen installation needs the hosted HTTPS version of the app. A downloaded HTML file cannot install the offline service worker.	للتثبيت على شاشة الآيفون الرئيسية، افتح رابط التطبيق الآمن HTTPS. لا يمكن لملف HTML منزّل تفعيل التشغيل دون إنترنت.
This file is a preview.	هذا الملف للمعاينة.
Open the app’s HTTPS address in	افتح رابط التطبيق الآمن في
Tap	اضغط
Share	مشاركة
, then	، ثم
Add to Home Screen	إضافة إلى الشاشة الرئيسية
. Keep	. أبقِ
Open as Web App	فتح كتطبيق ويب
enabled if shown.	مفعّلاً إن ظهر.
Open Ghars from its new icon. Wait for	افتح غرس من أيقونته الجديدة وانتظر ظهور
while online.	أثناء الاتصال بالإنترنت.
, then add your accounts there.	، ثم أضف حساباتك هناك.
Preparing offline access	تجهيز الاستخدام دون إنترنت
Alerts while the app is closed use your Calendar app.	تعتمد التنبيهات عند إغلاق التطبيق على التقويم.
Save your times, export the calendar file, then add its repeating events to Calendar and allow alerts. Saving here alone does not schedule a notification.	احفظ الأوقات وصدّر ملف التقويم، ثم أضف مواعيده المتكررة إلى التقويم واسمح بالتنبيهات. الحفظ هنا وحده لا يفعّل إشعارات.
The file contains only generic reminders, never balances. Calendar controls alerts and time zones. Import support varies; if iPhone Files does not offer Calendar, use a calendar app that imports .ics, or enter these same daily times in Apple Reminders.	يحتوي الملف على تذكيرات عامة دون أرصدة. يتحكم التقويم بالتنبيهات والمناطق الزمنية. إذا لم يعرض تطبيق الملفات خيار التقويم، استخدم تطبيقاً يقبل .ics أو أضف الأوقات يدوياً إلى تذكيرات Apple.
When changing or disabling times, delete the old repeating events in Calendar first. Ghars cannot change events after import.	عند تغيير الأوقات أو إيقافها، احذف المواعيد القديمة من التقويم أولاً. لا يستطيع غرس تعديلها بعد الاستيراد.
The account balance will be recalculated. You can undo this from Undo recent changes.	سيُعاد حساب رصيد الحساب. يمكنك التراجع من «التراجع عن التغييرات الأخيرة».
Use Record only if the payment happened. Link an existing entry if you already logged it, or skip a cancelled occurrence. No background bank connection is used.	سجل الحركة فقط إذا حدث الدفع. اربطها بحركة موجودة إذا سجلتها مسبقاً أو تجاوز استحقاقاً أُلغي. لا يوجد اتصال بالبنك في الخلفية.
`);
add(`
AED	درهم
Remove favourites using this account first.	احذف المفضلات التي تستخدم هذا الحساب أولاً.
Remove favourites using this card first.	احذف المفضلات التي تستخدم هذه البطاقة أولاً.
This favourite no longer exists.	لم تعد هذه المفضلة موجودة.
Favourite not found.	لم يتم العثور على المفضلة.
Keep up to 30 expense favourites.	يمكنك حفظ حتى 30 مصروفاً مفضلاً.
Invalid expense favourite.	بيانات المصروف المفضل غير صالحة.
Add an account to continue.	أضف حساباً للمتابعة.
Confirm the existing payment before linking.	أكد الحركة المسجلة قبل ربطها.
The existing payment was changed. Choose it again before linking.	تغيرت الحركة المسجلة. اخترها مجدداً قبل الربط.
`);
add(`
Account is still linked	لا يزال الحساب مرتبطاً بسجلات
This account is still used by the records below. Nothing has been deleted. A zero balance does not mean an account has no history.	لا تزال السجلات أدناه تستخدم هذا الحساب. لم يُحذف شيء. الرصيد الصفري لا يعني أن الحساب بلا سجل سابق.
Recorded entries, including transfers and balance corrections, need this account to preserve your history.	تحتاج الحركات المسجلة، بما فيها التحويلات وتصحيحات الرصيد، إلى هذا الحساب للحفاظ على سجلك.
Goals using this account	أهداف تستخدم هذا الحساب
Review investment holdings	مراجعة الأصول الاستثمارية
This account has no recorded entries, goal savings, holdings, favourites or recurring schedules.	ليس لهذا الحساب حركات مسجلة أو مدخرات أهداف أو أصول استثمارية أو مفضلات أو جداول متكررة.
Balance removed from your total:	الرصيد الذي سيُحذف من إجمالي أموالك:
You can restore this deletion from Undo recent changes.	يمكنك استرجاع الحساب من التراجع عن التغييرات الأخيرة.
Unused linked debit cards:	بطاقات الخصم المرتبطة غير المستخدمة:
Also delete these unused linked cards.	احذف هذه البطاقات المرتبطة غير المستخدمة أيضاً.
Confirm removal of the unused linked cards first.	أكد حذف البطاقات المرتبطة غير المستخدمة أولاً.
This account has recorded entries, including transfers or balance corrections. Keep it to preserve your history.	لهذا الحساب حركات مسجلة تشمل تحويلات أو تصحيحات رصيد. احتفظ به للحفاظ على سجلك.
This account holds goal savings. Move or release them before deleting it.	يحتوي هذا الحساب على مدخرات أهداف. انقلها أو حررها قبل حذفه.
This account has linked debit cards. Confirm removal of its unused cards too.	لهذا الحساب بطاقات خصم مرتبطة. أكد حذف بطاقاته غير المستخدمة أيضاً.
Linked cards changed. Reopen Delete unused account and review them again.	تغيرت البطاقات المرتبطة. أعد فتح حذف الحساب غير المستخدم وراجعها مجدداً.
The account balance changed. Reopen Delete unused account and review it again.	تغير رصيد الحساب. أعد فتح حذف الحساب غير المستخدم وراجعه مجدداً.
`);
add(`
Closed account	حساب مغلق في غرس
Closed accounts	الحسابات المغلقة
Remove from active accounts	إزالة من الحسابات النشطة
Remove from active accounts?	إزالة من الحسابات النشطة؟
Reopen account	إعادة فتح الحساب
Reopen this account?	إعادة فتح هذا الحساب؟
It returns to active accounts. Recurring schedules stay paused until you review them.	سيعود إلى الحسابات النشطة. تبقى الجداول المتكررة متوقفة حتى تراجعها.
Old records stay available. Investments keep their original funding sources.	تبقى السجلات السابقة متاحة وتحتفظ الاستثمارات بمصادر تمويلها الأصلية.
No closed accounts.	لا توجد حسابات مغلقة.
This account is hidden from active accounts. Its past transfers still show where investment money came from.	هذا الحساب مخفي من الحسابات النشطة. تبين تحويلاته السابقة مصدر الأموال المستثمرة.
Settle this account first	سوِّ رصيد هذا الحساب أولاً
Closing an account must not make money disappear. Move its remaining money to the account that actually holds it. If the same money is already counted in an investment account, correct the duplicate balance instead of adding the investment again.	يجب ألا يؤدي إغلاق الحساب إلى اختفاء أموال. انقل رصيده المتبقي إلى الحساب الذي يحتوي عليه فعلياً. إذا كانت الأموال نفسها محسوبة بالفعل في حساب استثماري، صحح الرصيد المكرر بدلاً من إضافة الاستثمار مجدداً.
Remaining balance:	الرصيد المتبقي:
Reserved for goals:	مخصص للأهداف:
This account contains investment holdings. Keep it active to retain those investments.	يحتوي هذا الحساب على أصول استثمارية. أبقه نشطاً للاحتفاظ باستثماراته.
Back to account	العودة إلى الحساب
Your separate investment accounts and their values stay unchanged. Past transfers keep this account as their source. No income, spending or unexplained money is created.	تبقى حسابات استثماراتك المنفصلة وقيمها دون تغيير. تحتفظ التحويلات السابقة بهذا الحساب كمصدر لها. لا يُضاف دخل أو مصروف أو مبلغ غير مفسر.
This account and its linked cards will leave the active lists. Its recurring schedules will be paused and its favourites hidden. This closes it only inside Ghars, not at your bank. You can reopen it from Closed accounts, or use Undo recent changes.	سيخرج هذا الحساب وبطاقاته المرتبطة من القوائم النشطة. تتوقف جداوله المتكررة وتُخفى مفضلاته. يُغلق داخل غرس فقط وليس لدى البنك. يمكنك إعادة فتحه من الحسابات المغلقة أو التراجع عن التغييرات الأخيرة.
This account is closed in Ghars. Reopen it before recording or changing money.	هذا الحساب مغلق في غرس. أعد فتحه قبل تسجيل الأموال أو تعديلها.
This account is already closed.	هذا الحساب مغلق بالفعل.
Move or correct the remaining balance before closing this account.	انقل الرصيد المتبقي أو صححه قبل إغلاق الحساب.
Move goal savings and keep investment holdings in an active account before closing.	انقل مدخرات الأهداف واحتفظ بالأصول الاستثمارية في حساب نشط قبل الإغلاق.
Closed accounts must keep a zero balance and no holdings or goal savings. Reopen the account before changing its history.	يجب أن تبقى الحسابات المغلقة برصيد صفري ودون أصول استثمارية أو مدخرات أهداف. أعد فتح الحساب قبل تعديل سجله.
Recurring entries for closed accounts must stay paused.	يجب أن تبقى الجداول المتكررة للحسابات المغلقة متوقفة.
Choose an active default payment account.	اختر حساب دفع افتراضياً نشطاً.
Account removed from active list	أزيل الحساب من القائمة النشطة
Account reopened	أعيد فتح الحساب
`);
add(`
Closed account · choose another payment account to use this favourite.	الحساب مغلق · اختر حساب دفع آخر لاستخدام هذه المفضلة.
`);
const patterns=[
 [/^“(.+)” would have a negative balance\. Check the opening balance or record missing income first\.$/,m=>'سيصبح رصيد «'+m[1]+'» سالباً. راجع الرصيد الافتتاحي أو سجل الدخل الناقص أولاً.'],
 [/^Some money in “(.+)” is reserved for goals\. Release enough goal money first\.$/,m=>'بعض أموال «'+m[1]+'» مخصصة للأهداف. حرر مبلغاً كافياً منها أولاً.'],


 [/^([+−-]?)AED ([\d,.]+)$/,m=>m[1]+'د.إ '+m[2]],
 [/^(\d+) (days|accounts)$/,m=>m[1]+' '+(m[2]==='days'?'أيام':'حسابات')],
 [/^Step (\d+) \/ 5$/,m=>'الخطوة '+m[1]+' / 5'],
 [/^(\d+) of (\d+)$/,m=>m[1]+' من '+m[2]],
 [/^of (.+?)(?: · (\d+)% saved)?$/,m=>'من '+text(m[1],'ar')+(m[2]?' · '+m[2]+'% مدخر':'')],
 [/^Uses (.+) · counted once$/,m=>'يستخدم '+m[1]+' · يُحسب مرة واحدة'],
 [/^(.+) · compare against your real account$/,m=>m[1]+' · قارنه بحسابك الفعلي'],
 [/^Includes (.+) reserved for goals\.$/,m=>'يشمل '+text(m[1],'ar')+' مخصصاً للأهداف.'],
 [/^Holdings (.+) · cash \/ unassigned (.+)$/,m=>'أصول '+text(m[1],'ar')+' · نقد / غير مخصص '+text(m[2],'ar')],
 [/^These three amounts add up to (.+)\. Of this total, (.+) is allocated to goals\. Linked cards are not added again\. Spending below is already deducted\. Upcoming bills are not deducted until recorded\.$/,m=>'مجموع هذه المبالغ الثلاثة '+text(m[1],'ar')+'. منها '+text(m[2],'ar')+' مخصص للأهداف. لا تُضاف البطاقات المرتبطة مرة أخرى. المصروفات أدناه مخصومة بالفعل، ولا تُخصم الفواتير القادمة حتى تسجيلها.'],
 [/^Hi (.+)\. I can help with quick maths and your money picture\.$/,m=>'مرحباً '+m[1]+'. أساعدك في الحسابات السريعة وفهم أموالك.'],
 [/^Try “2500 - 350”, “balance”, or “goals”\.$/,()=> 'جرّب «2500 - 350» أو «balance» أو «goals».'],

 [/^Quick expense · (.+)$/,m=>'مصروف سريع · '+text(m[1],'ar')],
 [/^(Good morning|Good afternoon|Good evening), (.+)$/,m=>text(m[1],'ar')+'، '+m[2]],
 [/^(.+)’s space$/,m=>'مساحة '+m[1]],
 [/^Across (\d+) accounts? · all in one place$/,m=>m[1]+' حسابات · كلها في مكان واحد'],
 [/^(\d+) entries?$/,m=>m[1]+' حركات'],
 [/^(\d+) recurring entr(?:y|ies) to review$/,m=>m[1]+' حركات متكررة للمراجعة'],
 [/^Review (.+)$/,m=>'مراجعة '+m[1]],
 [/^(Due|Next|Paused) (.+)$/,m=>text(m[1],'ar')+' '+m[2]],
 [/^Tracking from (.+)\. Earlier entries remain in Activity\.$/,m=>'المتابعة من '+m[1]+'. الحركات السابقة محفوظة في الحركة المالية.'],
 [/^(\d+) changes since the last matching verified backup\.$/,m=>m[1]+' تغييرات منذ آخر نسخة متحقق منها ومطابقة.'],
 [/^(\d+) schedules have an entry due\. Review the earliest occurrence of each; older missed dates are handled one at a time\.$/,m=>'يوجد '+m[1]+' جداول مستحقة. راجع أقدم استحقاق لكل جدول، واحداً في كل مرة.'],
 [/^Running version ([\d.]+)$/,m=>'الإصدار المستخدم '+m[1]],
 [/^Build (.+)$/,m=>'البناء '+m[1]],
 [/^Downloaded build (.+)$/,m=>'البناء المحمّل '+m[1]],
 [/^Your downloaded app files are ready\. Running version ([\d.]+)\.$/,m=>'ملفات التطبيق المحمّلة جاهزة. الإصدار المستخدم '+m[1]+'.'],
 [/^Version ([\d.]+) · AED only · Device saving$/,m=>'الإصدار '+m[1]+' · الدرهم فقط · حفظ على الجهاز'],
 [/^(Added|Saved|Edited|Deleted|Removed|Changed) (account|card|goal|holding|recurring)$/,m=>({'Added':'أُضيف','Saved':'حُفظ','Edited':'عُدل','Deleted':'حُذف','Removed':'أُزيل','Changed':'تغير'}[m[1]])+' '+({'account':'حساب','card':'بطاقة','goal':'هدف','holding':'استثمار','recurring':'جدول متكرر'}[m[2]])],
 [/^(.+) must be between (\d+) and (\d+) characters\.$/,m=>text(m[1],'ar')+' يجب أن يتكون من '+m[2]+' إلى '+m[3]+' حرفاً.'],
 [/^Use AED (.+) in amount field$/,m=>'استخدام '+m[1]+' درهم في خانة المبلغ'],
 [/^Link an existing (income|expense) in$/,m=>'اربط '+(m[1]==='income'?'دخلاً':'مصروفاً')+' موجوداً في'],
 [/^AED (.+)$/,m=>'د.إ '+m[1]],
 [/^(Amount|Current balance|Target|Total|Opening total|Starting balance|Actual current balance|Balance) · AED$/,m=>text(m[1],'ar')+' · درهم'],
 [/^(\d+) times saved · export alerts to Calendar$/,m=>m[1]+' أوقات محفوظة · صدّر التنبيهات إلى التقويم'],
 [/^Reminder (\d+)$/,m=>'التذكير '+m[1]],
 [/^Remove reminder (\d+)$/,m=>'إزالة التذكير '+m[1]],
 [/^Time for reminder (\d+)$/,m=>'وقت التذكير '+m[1]],
 [/^(.+) shares · updated (.+)$/,m=>m[1]+' سهم · تحديث '+m[2]],
 [/^(Cost|Gain|Loss) (.+)$/,m=>({'Cost':'التكلفة','Gain':'الربح','Loss':'الخسارة'}[m[1]])+' '+m[2]]
];
function text(value,language='en'){
 if(language!=='ar')return value;const clean=String(value).trim();if(!clean)return value;
 if(dictionary[clean])return value.replace(clean,dictionary[clean]);
 for(const [pattern,render] of patterns){const match=clean.match(pattern);if(match)return value.replace(clean,render(match))}
 if(clean.includes(' · '))return clean.split(' · ').map(piece=>text(piece,'ar')).join(' · ');
 if(clean.includes('\n'))return clean.split('\n').map(piece=>text(piece,'ar')).join('\n');
 const sentences=clean.split(/(?<=[.!?])\s+/u);if(sentences.length>1)return sentences.map(piece=>text(piece,'ar')).join(' ');
 return value;
}
function updateNode(node,language,protectedValues){const parent=node.parentElement;if(!parent||parent.closest?.('[data-user-text],[translate="no"],.message.user,.dock-message.user,code,textarea,script,style'))return;let record=originals.get(node);if(!record||node.nodeValue!==record.last)record={source:node.nodeValue,last:node.nodeValue};if(protectedValues.has(record.source.trim()))return;const next=text(record.source,language);if(node.nodeValue!==next)node.nodeValue=next;record.last=next;originals.set(node,record)}
function apply(root,language,protectedValues=new Set()){
 const doc=root?.ownerDocument;if(!doc?.createTreeWalker)return;
 for(const option of root.querySelectorAll('option:not([value])'))option.setAttribute('value',option.textContent);
 const walker=doc.createTreeWalker(root,4);let node;while((node=walker.nextNode()))updateNode(node,language,protectedValues);
 for(const element of root.querySelectorAll('[placeholder],[aria-label],[title],optgroup[label]')){
  if(element.closest('[data-user-text],[translate="no"]'))continue;let records=attributes.get(element)||{};
  for(const key of ['placeholder','aria-label','title',...(element.tagName==='OPTGROUP'?['label']:[])]){if(!element.hasAttribute(key))continue;const value=element.getAttribute(key),record=records[key];const source=record&&value===record.last?record.source:value;if(protectedValues.has(source))continue;const next=text(source,language);if(next!==value)element.setAttribute(key,next);records[key]={source,last:next}}attributes.set(element,records);
 }
}
function observe(root,language,protectedValues){if(typeof MutationObserver==='undefined'||!root)return;let observer;const run=()=>{observer.disconnect();try{apply(root,language(),protectedValues())}finally{observer.observe(root,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['placeholder','aria-label','title','label']})}};observer=new MutationObserver(run);run();return observer}
return {text,apply,observe,dictionary};
});
