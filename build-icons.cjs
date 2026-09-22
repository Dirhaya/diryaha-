const {execFileSync}=require('node:child_process'),path=require('node:path');
execFileSync(process.env.CODEX_PRIMARY_RUNTIME_PYTHON||'python3',[path.join(__dirname,'build-icons.py')],{stdio:'inherit'});
