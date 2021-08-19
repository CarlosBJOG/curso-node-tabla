
const fs = require('fs');
require('colors');

const crearArchivo = async (base = 5, flag = false, limite)=> {
     try{
     
        let consola = `=================Tabla del ${base}==============\n`.america;
        let salida = `=================Tabla del ${base}==============\n`;
      
        for(let i = 1; i <=limite; i++){
            salida +=`${base} x ${i} = ${(base * i)}\n`; 
            consola += `${base} ${ 'x'.cyan } ${i} ${ '='.red } ${(base * i)}\n`;
        }
            
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        let nombre = `tabla-${base}.txt creado`
        if(flag)console.log(consola);
        return nombre;

    }catch(err){
        throw err;
    }
   

    // console.log(salida);
}

module.exports = {
    crearArchivo
}