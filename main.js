alert("Bienvenido a la calculadora de promedios");
let userName = prompt("Indique su nombre y apellido");
console.log("Usuario registrado: " + userName);

let totalSum = 0;
let gradeItem = 1;

while (gradeItem <= 3) {
    let gradeNumber = parseFloat(prompt("Indique la nota final de la evaluación (en caso de referir nota con decimales utilizar el punto en vez de la coma, ejemplo 7.5)"));

    if (gradeNumber >= 1 && gradeNumber <= 10) {
        totalSum += gradeNumber;
        console.log("Nota " + gradeItem + ": " + gradeNumber);
        gradeItem++;
    } else {
        alert("El valor de la nota debe estar entre 1 y 10, por favor utiliza el punto (.) para declarar decimales. Ejemplo, 7.5");
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

