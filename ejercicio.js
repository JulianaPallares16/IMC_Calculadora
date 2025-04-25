const bienvenida = 'Bienvenido a a la calculadora de indice de masa corporal';
const resultado = 'Su indice de masa corporal es:'
const mensaje = 'Basandonos en ese resultado su estado dentro del imc es:';
const mensaje2 = 'Algo salió mal'
const menu = 'Menú:\n1.Registrar paciente\n2.Total hombres y mujeres registrados.\n3.Promedio de edad de hombres y mujeres.\n4.Total de menores registrados\n5.Total de hombres y mujeres con sobrepeso.\n6.Paciente de más bajo peso';
alert(bienvenida);
let mujeres = 0;
let hombres = 0;
let personas = [[]];
let persona = [];
let menores = 0;
let tmujeres = 0;
let thombres = 0;
let running = true
let edadHombres = 0;
let edadMujeres = 0;
while (running){
    alert(menu);
    let opcion = prompt('Ingrese el número la opción del menú que desee');
    switch (opcion){ 
        case '1':
            let id = prompt('Ingrese su id');
            let nombre = prompt('Ingrese su nombre');
            let edad = prompt('Ingrese su edad');
            let genero = prompt("Ingrese su genero:\n 1.Hombre\n 2.Mujer");
            let peso = prompt('ingrese su peso en kg');
            let estatura = prompt ('ingrese su estatura en m');
            let imc = peso / (estatura ** 2);
            alert(`${resultado}${imc}`);
            if (imc < 18.5){
                alert(`${mensaje} peso inferior al normal`);
            } else if (imc >= 18.5 && imc <= 24.9 ){
                alert(`${mensaje} normal`);
            } else if (imc >= 25 && imc <= 29.9){
                alert(`${mensaje} Peso superior al normal`);
            } else if (imc >30){
                alert(`${mensaje} obesidad`);
            } else{
                alert(mensaje2)}
            if (genero === '1'){
                thombres +=1;
                edadHombres += edad;
            }else if (genero ==='2'){
                tmujeres +=1;
                edadMujeres += edad;
            }
            if (genero == '1' && imc >= 25){
                hombres += 1;
            }else if (genero == '2' && imc >= 25){
                mujeres +=1;
            }
            if (edad < 18){
                menores += 1;
            }
            persona.push({id, nombre, edad, genero, imc});
            personas[0].push(persona);
            console.log(personas[0]);
            break;
        case '2':
            alert(`Total de hombres registrados: ${thombres}\nTotal de mujeres registradas: ${tmujeres}`);
            break;
        case '3':
            let promedioHombresEdades = thombres > 0 ? (edadHombres / thombres) : "N/A";
            let promedioMujeresEdades = tmujeres > 0 ? (edadMujeres / tmujeres) : "N/A";
            alert(`El promedio de edad de los hombres es: ${promedioHombresEdades}
                  \nEl promedio de edad de las mujeres es: ${promedioMujeresEdades}`);
            break;
        case '4':
            alert(`El total de menores de edad registrados es de: ${menores}`);
            break;  
        case '5':
            alert(`hombres con sobrepeso: ${hombres}\n mujeres con sobrepeso: ${mujeres}`);
            break;
        case '6':
            let imcmenor = persona[0];
                for(let i=1;i<persona.length;i++)
                 if(persona[i].imc<imcmenor.imc){
                    imcmenor=persona[i];
                }
            alert(`Paciente con imc más bajo:\nID: ${imcmenor.id}\nNombre: ${imcmenor.nombre}\nEdad: ${imcmenor.edad}\nGenero: ${imcmenor.genero}\nImc: ${imcmenor.imc}`);
            break
        default:
            alert('opción no valida, adios')
            
    }
}