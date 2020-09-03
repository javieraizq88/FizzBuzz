// #### FIZZ BUZZ #### 
//for (var i = 1; i < 101; i++) {
//     if (i % 3 == 0 || i % 5 == 0)
//         console.log("FizzBuzz");
//     else if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }




// ##### suma de digitos de un numero ####
  let numero = 12323; 
	if(numero >= 0 && numero <= 9){
           console.log(numero);
    }
    if (numero >= 99 && numero <=99099 ){
        let millar0 = (numero % 100000)/10000;
        let millar = (numero % 10000)/1000;
        let centena = (numero % 1000)/100;
        let decena = (numero % 100)/10;
        let unidad = (numero % 10) ;
        var suma2 = parseInt(millar0 + millar + unidad + decena + centena);
        console.log(suma2);
    }
    


	
	/*if(input >= 10 && input <= 99){
		var suma = parseInt(input[0])+parseInt(input[1]);
		resultado.textContent=suma;
	}
	else{
		resultado.textContent="Solo acepto números de dos dígitos";
	}*/