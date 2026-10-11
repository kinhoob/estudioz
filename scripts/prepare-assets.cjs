// Copia e otimiza apenas mídia pública do site oficial. Sem mídia de terceiros.
const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');
const names = ['espaco-placa','espaco-amplo-p','teto-luz','camarim','q-moda','sofa-grupo-p','equipe-p'];
async function main(){
 await fs.mkdir('public/midia',{recursive:true});
 await Promise.all(names.map(async name=>{
  const response = await fetch(`https://estudioz.online/midia/${name}.jpg`);
  if(!response.ok) throw new Error(`${name}: ${response.status}`);
  const data = Buffer.from(await response.arrayBuffer());
  await sharp(data).rotate().resize({width:name==='espaco-placa'?1600:1000,withoutEnlargement:true}).webp({quality:80}).toFile(path.join('public/midia',`${name}.webp`));
 }));
 console.log('7 imagens oficiais otimizadas.');
}
main().catch(error=>{console.error(error.message);process.exitCode=1});
