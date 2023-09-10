/* 
Una de las diferencias entre las funciones regulares y las de felcha es que la función de flecha tiene una cantidad 
definida de parámetros, e incluso se puede acceder a otros parametros así no estén especificados, esto para la función regular.

Flecha Sin propio this: Usa contexto léxico =/= Regular Tienen su propio this.
*/

// Segundo punto del challenge #1

/* La explicación para estas funciones radica en que establecemos inicialmente una variable y le asignamos
un nùmero, posteriormente a la función le pasamos esa variable y después procedemos a crear un condicional
que nos compruebe si el residuo  de dicho división del número con el 2 es igual a '0', ya que en teoría si el residuo es 0
el nùmero es par y es impar de darse lo contrario.
*/

const numero= 2;

function ParOImpar(numero) {
    if (numero % 2 === 0) {
      return "Par";
    } else {
      return "Impar";
    }
  }
  
 console.log(ParOImpar(numero)); 



const numero1= 1;

const verificarNumero2= (numero1)=>{

    if (numero1 % 2 === 0) {
        return "Par";
      } else {
        return "Impar";
      }
    }

  
verificarNumero2(1)
console.log(verificarNumero2(numero1))



