const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname),out=path.resolve(root,'dist');
if(path.dirname(out)!==root||path.basename(out)!=='dist')throw new Error('Directorio de salida inválido');
fs.rmSync(out,{recursive:true,force:true});
fs.mkdirSync(out,{recursive:true});
for(const name of fs.readdirSync(root)){
 if(/\.(html|css|js)$/.test(name)||['assets','propuestas'].includes(name))fs.cpSync(path.join(root,name),path.join(out,name),{recursive:true});
}
console.log('Sitio generado en dist, sin archivos de compilaciones anteriores.');
