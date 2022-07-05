const generatep = async() => {


    var sizeofpass;
    if (document.getElementById("sizeofpa") != null) {
        sizeofpass = document.getElementById("sizeofpa").value;
    }
    var UP1 = document.getElementById("up").checked;
    var Lo1 = document.getElementById("lo").checked;
    var NU1 = document.getElementById("nu").checked;
    var SP1 = document.getElementById("sp").checked;
    // console.log(sizeofpass);
    // console.log(NU1);

    const set1 = new Set();
    const alpha = ["a", "b", "c", "x", "d", "e", "f", "g", "h", "i"];
    const alpha1 = ["j", "k", "l", "m", "n", "z", "o", "p", "q", "a"];
    const alpha2 = ["r", "s", "t", "i", "u", "v", "w", "x", "y", "z"];
    const capa = ["A", "B", "C", "D", "X", "E", "F", "G", "H", "I"];
    const capa1 = ["J", "K", "L", "M", "N", "O", "W", "P", "Q", "A"];
    const capa2 = ["R", "S", "M", "T", "U", "V", "W", "X", "Y", "Z"];
    const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const spchar = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "{"];
    const spchar2 = ["?", "/", "&", "+", "/", "*", "-", "+", "?", "%"];

    var v = [];
    var gg = [];

    function lplp(paras) {
        for (let i = 0; i < sizeofpass; i++) {
            gg = Math.floor(Math.random() * 16);
            var cc = Math.floor(Math.random() * 10);
            var temp = paras[gg];
            console.log(temp);
            let kl = temp[cc];
            // console.log(kl);
            v.push(kl);
            gg = 0;
            temp = 0;
            kl = 0;
            cc = 0;
        }

        let strss = v.toString();
        let comm = strss.replace(/,/g, '');
        document.getElementById("pass").innerHTML = `${comm}`
    }

    if (UP1 == true && Lo1 == false && NU1 == false && SP1 == false) {
        const GG = [capa1, capa2, capa, capa1, capa2, capa, capa1, capa2, capa, capa1, capa2, capa, capa, capa1, capa2, capa];
        lplp(GG);
    }

    if (UP1 == true && Lo1 == true && NU1 == true && SP1 == true) {
        const GG = [num, capa1, capa, spchar2, alpha, alpha1, spchar, alpha2, capa2, num, alpha, spchar2, capa1, alpha2, num, alpha1];
        lplp(GG);
    } else if (UP1 == false && Lo1 == false && NU1 == false && SP1 == false) {
        document.getElementById("pass").innerHTML = "Please select a option!!";
    } else if (UP1 == true && Lo1 == false && NU1 == true && SP1 == true) {
        const GG = [capa2, num, capa1, spchar2, capa, spchar, capa2, num, spchar2, capa1, num, capa2, num, capa, capa1, capa2, num];
        lplp(GG);
    } else if (UP1 == false && Lo1 == true && NU1 == true && SP1 == true) {
        const GG = [alpha2, spchar, alpha2, alpha1, num, spchar, alpha, alpha1, alpha2, num, spchar, alpha1, alpha, num, alpha1, alpha2];
        lplp(GG);
    } else if (UP1 == true && Lo1 == true && NU1 == false && SP1 == true) {
        const GG = [capa1, alpha, spchar2, capa, alpha1, spchar, capa2, alpha, spchar2, capa1, alpha2, alpha1, spchar2, capa1, alpha2, alpha1];
        lplp(GG);
    } else if (UP1 == true && Lo1 == true && NU1 == true && SP1 == false) {
        const GG = [num, capa1, capa, alpha, alpha1, alpha2, capa2, num, alpha, capa1, alpha2, num, alpha1, alpha2, num, alpha1];
        lplp(GG);
    } else if (UP1 == false && Lo1 == false && NU1 == true && SP1 == true) {
        const GG = [num, spchar, spchar, num, spchar2, num, num, spchar, spchar, num, spchar2, num, num, spchar, spchar, num];
        lplp(GG);
    } else if (UP1 == false && Lo1 == false && NU1 == false && SP1 == true) {
        const GG = [spchar2, spchar, spchar2, spchar2, spchar, spchar2, spchar2, spchar, spchar2, spchar2, spchar, spchar2, spchar2, spchar, spchar2, spchar2];
        lplp(GG);
    } else if (UP1 == false && Lo1 == true && NU1 == true && SP1 == false) {
        const GG = [num, alpha, alpha1, alpha2, num, alpha, alpha2, num, alpha1, alpha1, alpha2, num, alpha, alpha2, num, alpha1];
        lplp(GG);
    } else if (UP1 == true && Lo1 == true && NU1 == false && SP1 == false) {
        const GG = [capa1, capa, alpha, alpha1, alpha2, capa2, alpha, capa1, alpha2, alpha1, alpha2, capa2, alpha, capa1, alpha2, alpha1];
        lplp(GG);
    } else if (UP1 == false && Lo1 == true && NU1 == false && SP1 == false) {
        const GG = [alpha, alpha1, alpha2, alpha, alpha2, alpha1, alpha, alpha1, alpha2, alpha, alpha2, alpha1, alpha, alpha1, alpha2, alpha];
        lplp(GG);
    } else if (UP1 == false && Lo1 == false && NU1 == true && SP1 == false) {
        const GG = [num, num, num, num, num, num, num, num, num, num, num, num, num, num, num, num];
        lplp(GG);
    } else if (UP1 == true && Lo1 == false && NU1 == false && SP1 == true) {
        const GG = [capa1, capa, spchar2, spchar, capa2, spchar2, capa1, capa1, capa, spchar2, spchar, capa2, spchar2, capa1, spchar2, capa1];
        lplp(GG);
    } else if (UP1 == true && Lo1 == false && NU1 == true && SP1 == false) {
        const GG = [num, capa1, capa, capa2, num, capa1, num, num, capa1, capa, capa2, num, capa1, num, capa1, num];
        lplp(GG);

    } else if (UP1 == false && Lo1 == true && NU1 == false && SP1 == true) {
        const GG = [spchar2, alpha, alpha1, spchar, alpha2, alpha, alpha2, alpha1, spchar2, alpha, alpha1, spchar, spchar2, alpha, alpha1, spchar, ];
        lplp(GG);
    }
}
generatep()

let btn = document.getElementById("getpass");
btn.addEventListener("click", generatep);

const slidevalue = document.querySelector("span");
const inputslider = document.querySelector("input");
inputslider.oninput = (() => {
    let value = inputslider.value;
    slidevalue.textContent = value;
    slidevalue.style.left = (value / 0.41) + "%";
    slidevalue.classList.add("show");
});