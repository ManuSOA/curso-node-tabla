
const fs = require('fs');

const crearArchivoTabla= async(base, listar,hasta = 10) =>{

    let salida = '';
    try{

        for(let i = 1 ; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;  
        }
        fs.writeFileSync(`./resultado/tabla-${base}.txt`, salida);

        if(listar){
            console.log('=====================');
            console.log(` tabla del: ${base}`)
            console.log('=====================');
            console.log(salida);
        }
        return `tabla-${base}.txt`;
    }catch(error){
        return error;
    }
    

}

module.exports = {
    crearArchivoTabla
}