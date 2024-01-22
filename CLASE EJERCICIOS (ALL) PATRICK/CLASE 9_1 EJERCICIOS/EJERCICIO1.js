function esPrimo(n){
    var i = 2;
    while(n != 1 && n % i !=0){
      i++;
    }
    return n==i; 
  }
  
  function intervaloPrimos(n1,n2){
    for(var i = n1;i <= n2; i++){
       if(esPrimo(i)){
        console.log(i);
      }
    }
  }
  var a = parseInt(prompt("Inserte un número"));//5
  var b = parseInt(prompt("Inserte otro número"));//11
  if(a<b){
    intervaloPrimos(a,b);
  }else{
    intervaloPrimos(b,a);
  }