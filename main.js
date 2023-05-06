alert("Bienvenido a la calculadora de promedios");
let userName = prompt("Indique su nombre y apellido");
console.log("Usuario registrado: " + userName);

let totalSum = 0;
let gradeItem = 1;

while (gradeItem <= 3) {
    let gradeNumber = parseFloat(prompt("Indique la nota final de la evaluación"));

    if (gradeNumber >= 1 && gradeNumber <= 10) {
        totalSum += gradeNumber;
        console.log("Nota " + gradeItem + ": " + gradeNumber);
        gradeItem++;
    } else {
        alert("El valor de la nota debe estar entre 1 y 10");
    }
}

console.log("Total: " + totalSum);
let promedio = totalSum / 3;
console.log("Promedio final: " + promedio);

if (promedio >= 7) {
    alert("¡Felicitaciones " + userName + ", usted ha promocionado la materia! Su nota final es: "+promedio);
} else if (promedio >= 4) {
    alert("En esta ocasión, " + userName + ", ha aprobado la cursada, pero deberá presentarse a la instancia de finales. Su nota final es: "+promedio);
} else {
    alert(userName + ", ya que ha desaprobado la cursada, deberá recursar la materia. Su nota final es: "+promedio);
}

