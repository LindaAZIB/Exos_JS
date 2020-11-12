

let answer = prompt("De quel nombre veux-tu calculer la factorielle ?");

function factorial(nbr){
    var i, nbr, f = 1;
    for(i = 1; i <= nbr; i++)
    {
      f = f * i;   // ou f *= i;
    }
    return f;
  }
  console.log(fact(nbr));