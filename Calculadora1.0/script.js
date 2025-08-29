    function calcular() {
        let num1 = document.getElementById("Numero1");
        let num2 = document.getElementById("Numero2");
        Eleccion = document.getElementById("Eleccion");
        switch (Eleccion.value) {
            case "+":
            result = parseFloat(num1.value) + parseFloat(num2.value);
                break;   
            case "-":
            result = num1.value - num2.value;
                break;
            case "*":
            result = num1.value * num2.value;
                break;
            case "/":
            result = num1.value / num2.value;     
                break;
        }
        res = document.getElementById("Resultado");
        res.innerHTML = result;
    }    
