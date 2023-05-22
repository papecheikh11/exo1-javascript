// soustraction
function soustraction() {
    // Declaration de Variables
    var num1 = parseInt (document.getElementById('n1').value) ;
    var num2= parseInt (document.getElementById('n2').value);

    // calcul
    var soustraction = num1-num2;

    // resultat
     document.getElementById('calculSous').value = soustraction;
}
// Addition
function addition() {
    // Declaration de Variables
    var num1 = parseInt (document.getElementById('n3').value) ;
    var num2= parseInt (document.getElementById('n4').value);

    // faire le calcul
    var addition = num1+num2;

    // resultat
     document.getElementById('calculAdd').value = addition;
}
// Multiplication
function multiplication() {
    // Declaration de Variables
    var num1 = parseInt (document.getElementById('n5').value) ;
    var num2= parseInt (document.getElementById('n6').value);

    // faire le calcul
    var multiplication = num1*num2;

    // resultat
     document.getElementById('calculMult').value = multiplication;
}

// Division
function division() {
    // Declaration de Variables
    var num1 = parseInt (document.getElementById('n7').value) ;
    var num2= parseInt (document.getElementById('n8').value);

    // faire le calcul
    var multiplication = num1/num2;

    // resultat
     document.getElementById('calculDiv').value = multiplication;
}