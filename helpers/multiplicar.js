
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (multiplo = 1, hasta = 10, l = false) => { 

    let salida = '';
    let resultado = '';

    return new Promise((resolve, reject) => { 
        if (typeof multiplo === 'number') {
            
            for (let i = 1; i <= hasta; i++) {
                salida += `${multiplo} ${'x'.blue} ${i} ${'='.blue} ${multiplo * i}\n`;
                resultado += `${multiplo} ${'x'} ${i} ${'='} ${multiplo * i}\n`;
            }
            
            if (l) {
                console.log(colors.blue('============================'));
                console.log(`   ${'Tabla del:'.yellow} ${multiplo}    `);
                console.log(colors.blue('============================'));
                console.log(salida);  
            } 

            fs.writeFileSync(`./salida/tabla-${multiplo}.txt`, resultado);

            resolve(`tabla-${multiplo}.txt`);
        } else {
            reject('Error al crear el archivo!');
        }
    });
};

module.exports = {
    crearArchivo
};






