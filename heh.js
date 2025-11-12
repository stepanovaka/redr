function verify() {
    console.log("x, y, z")
    let x = parseFloat(elementX.value);
    let y = parseFloat(elementY.value);
    let z = parseFloat(elementZ.value);
    console.log(x, y, z)

    if (x + y > z && x + z > y && y + z > x) {
        let xx = x * x;
        let yy = y * y;
        let zz = z * z;
        
        if (Math.abs(xx + yy - zz) < 0.0001 || Math.abs(xx + zz - yy) < 0.0001 || Math.abs(yy + zz - xx) < 0.0001) {
            result = "Треугольник существует и он прямоугольный";
            check = true;
        } else {
            result = "Треугольник существует, но он не прямоугольный";
            check = true;
        }
    } 
    else {
        result = "Треугольник не существует";
        check = false;
    }
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

let result;
let check;

const elementX = document.getElementById("x");
const elementY = document.getElementById("y");
const elementZ = document.getElementById("z");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)