let n = 0;
function esPar(n) {
    return n % 2 === 0;
}

function factorial(n) {
    if(n < 0) {
        return null;
    }
     else if(n === 0) {
        return 1;
    }
     else {
        let resultado = 1;
        for(let i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;       
        }
    }
