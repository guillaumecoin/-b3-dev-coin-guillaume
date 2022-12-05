
import { Calculatrice } from "./calculatrice";
    
const c1 = new Calculatrice();


document.getElementById("=").onclick = function(){
    document.getElementById("output").value = c1.resultat(document.getElementById("output").value);
}

document.getElementById("1").onclick = function(){
    document.getElementById("output").value+= 1;
}
document.getElementById("2").onclick = function(){
    document.getElementById("output").value+= 2;
}
document.getElementById("3").onclick = function(){
    document.getElementById("output").value+= 3;
}
document.getElementById("4").onclick = function(){
    document.getElementById("output").value+= 4;
}
document.getElementById("5").onclick = function(){
    document.getElementById("output").value+= 5;
}
document.getElementById("6").onclick = function(){
    document.getElementById("output").value+= 6;
}
document.getElementById("7").onclick = function(){
    document.getElementById("output").value+= 7;
}
document.getElementById("8").onclick = function(){
    document.getElementById("output").value+= 8;
}
document.getElementById("9").onclick = function(){
    document.getElementById("output").value+= 9;
}
document.getElementById("0").onclick = function(){
    document.getElementById("output").value+= 0;
}

document.getElementById("+").onclick = function(){
    document.getElementById("output").value+= "+";
}

document.getElementById("-").onclick = function(){
    document.getElementById("output").value+= "-";
}

document.getElementById("*").onclick = function(){
    document.getElementById("output").value+= "*";
}
document.getElementById("/").onclick = function(){
    document.getElementById("output").value+= "/";
}
document.getElementById("%").onclick = function(){
    document.getElementById("output").value = c1.pourcentage(document.getElementById("output").value);
}
document.getElementById("c").onclick = function(){
    document.getElementById("output").value = "";
}
document.getElementById(".").onclick = function(){
    document.getElementById("output").value += ".";
}
document.getElementById("puissanceCarre").onclick = function(){
    document.getElementById("output").value = c1.puissanceCarre(document.getElementById("output").value);
}
document.getElementById("puissanceX").onclick = function(){
    document.getElementById("output").value = c1.puissanceX(document.getElementById("output").value);
}
document.getElementById("racine").onclick = function(){
    document.getElementById("output").value = c1.racine(document.getElementById("output").value);
}
