const plus = document.getElementById("plus");
let x1 = Number(document.getElementById("amount").innerText);
let subtotal = Number(document.getElementById("subtotal").innerText);
plus.onclick = function () {
    x1 = x1 + 1;
    document.getElementById("amount").innerHTML = x1;
    subtotal = subtotal + 145;
    document.getElementById("subtotal").innerHTML = subtotal;
    if (code.value) {
        discountcaculator = Number(code.value);
        discountcaculator = Math.round(subtotal * (1 - (discountcaculator) / 100));
        subtotaldiscount.innerHTML = discountcaculator;
        calcuTotal = discountcaculator + 15;
        total.innerHTML = calcuTotal;
    }
    else {
        calcuTotal = subtotal + 15;
        total.innerHTML = calcuTotal;
    }
}
const minus = document.getElementById("minus");
minus.onclick = function () {
    x1 = x1 - 1;
    if (x1 < 0) {
        x1 = 0;
        subtotal = (145*0) + (180*y) + (240*z);
    }
    else { 
    document.getElementById("amount").innerHTML = x1;
    subtotal = subtotal - 145;
    document.getElementById("subtotal").innerHTML = subtotal;
    }
    if (code.value) {
        discountcaculator = Number(code.value);
        discountcaculator = Math.round(subtotal * (1 - (discountcaculator) / 100));
        subtotaldiscount.innerHTML = discountcaculator;
        calcuTotal = discountcaculator + 15;
        total.innerHTML = calcuTotal;
    }
    else {
        calcuTotal = subtotal + 15;
        total.innerHTML = calcuTotal;
    }



}

const plus2 = document.getElementById("plus2");
let y = Number(document.getElementById("amount2").innerText);
plus2.onclick = function () {
    y = y + 1;
    document.getElementById("amount2").innerHTML = y;
    subtotal = subtotal + 180;
    document.getElementById("subtotal").innerHTML = subtotal;
    if (code.value) {
        discountcaculator = Number(code.value);
        discountcaculator = Math.round(subtotal * (1 - (discountcaculator) / 100));
        subtotaldiscount.innerHTML = discountcaculator;
        calcuTotal = discountcaculator + 15;
        total.innerHTML = calcuTotal;
    }
    else {
        calcuTotal = subtotal + 15;
        total.innerHTML = calcuTotal;
    }
}
const minus2 = document.getElementById("minus2");
minus2.onclick = function () {
    y = y - 1;
    if (y < 0) {
        y = 0;
        subtotal = (145*x1) + (0*y) + (240*z);
    }
    else { 
    document.getElementById("amount2").innerHTML = y;
    subtotal = subtotal - 180;
    document.getElementById("subtotal").innerHTML = subtotal;
    }
    if (code.value) {
        discountcaculator = Number(code.value);
        discountcaculator = Math.round(subtotal * (1 - (discountcaculator) / 100));
        subtotaldiscount.innerHTML = discountcaculator;
        calcuTotal = discountcaculator + 15;
        total.innerHTML = calcuTotal;
    }
    else {
        calcuTotal = subtotal + 15;
        total.innerHTML = calcuTotal;
    }
}

const plus3 = document.getElementById("plus3");
let z = Number(document.getElementById("amount3").innerText);
plus3.onclick = function () {
    z = z + 1;
    document.getElementById("amount3").innerHTML = z;
    subtotal = subtotal + 240;
    document.getElementById("subtotal").innerHTML = subtotal;
    if (code.value) {
        discountcaculator = Number(code.value);
        discountcaculator = Math.round(subtotal * (1 - (discountcaculator) / 100));
        subtotaldiscount.innerHTML = discountcaculator;
        calcuTotal = discountcaculator + 15;
        total.innerHTML = calcuTotal;
    }
    else {
        calcuTotal = subtotal + 15;
        total.innerHTML = calcuTotal;
    }
}
const minus3 = document.getElementById("minus3");
minus3.onclick = function () {
    z = z - 1;
    if (z < 0) {
        z = 0;
        subtotal = (145*x1) + (180*y) + (0*z);
    }
    else { 
    document.getElementById("amount3").innerHTML = z;
    subtotal = subtotal - 240;
    document.getElementById("subtotal").innerHTML = subtotal;
    }
    if (code.value) {
        discountcaculator = Number(code.value);
        discountcaculator = Math.round(subtotal * (1 - (discountcaculator) / 100));
        subtotaldiscount.innerHTML = discountcaculator;
        calcuTotal = discountcaculator + 15;
        total.innerHTML = calcuTotal;
    }
    else {
        calcuTotal = subtotal + 15;
        total.innerHTML = calcuTotal;
    }
}

const trash = document.getElementById("trash");

trash.onclick = function () {
    document.getElementById("product1").style.display = "none";
    document.getElementById("line1").style.display = "none";
    if (code.value) {
        discountcaculator = Number(code.value);
        discountcaculator = Math.round((subtotal - (x1 * 145)) * (1 - (discountcaculator) / 100));
        subtotaldiscount.innerHTML = discountcaculator;
        calcuTotal = discountcaculator + 15;
        total.innerHTML = calcuTotal;
        subtotal = subtotal - (x1 * 145);
        document.getElementById("subtotal").innerHTML = subtotal;
        calcuTotal = subtotal + 15;
        total.innerHTML = calcuTotal;
    }
    else {
        subtotal = subtotal - (x1 * 145);
        document.getElementById("subtotal").innerHTML = subtotal;
        calcuTotal = subtotal + 15;
        total.innerHTML = calcuTotal;
    }
}
const trash2 = document.getElementById("trash2");

trash2.onclick = function () {
    document.getElementById("product2").style.display = "none";
    document.getElementById("line2").style.display = "none";
    if (code.value) {
        discountcaculator = Number(code.value);
        discountcaculator = Math.round((subtotal - (y * 180)) * (1 - (discountcaculator) / 100));
        subtotaldiscount.innerHTML = discountcaculator;
        calcuTotal = discountcaculator + 15;
        total.innerHTML = calcuTotal;
        subtotal = subtotal - (y * 180);
        document.getElementById("subtotal").innerHTML = subtotal;
        calcuTotal = subtotal + 15;
        total.innerHTML = calcuTotal;
    }
    else {
        subtotal = subtotal - (y * 180);
        document.getElementById("subtotal").innerHTML = subtotal;
        calcuTotal = subtotal + 15;
        total.innerHTML = calcuTotal;
    }
}
const trash3 = document.getElementById("trash3");

trash3.onclick = function () {
    document.getElementById("product3").style.display = "none";
    document.getElementById("line2").style.display = "none";
    document.getElementById("product").style.border = "none";
    if (code.value) {
        discountcaculator = Number(code.value);
        discountcaculator = Math.round((subtotal - (z * 240)) * (1 - (discountcaculator) / 100));
        subtotaldiscount.innerHTML = discountcaculator;
        calcuTotal = discountcaculator + 15;
        total.innerHTML = calcuTotal;
        subtotal = subtotal - (z * 240);
        document.getElementById("subtotal").innerHTML = subtotal;
        calcuTotal = subtotal + 15;
        total.innerHTML = calcuTotal;
    }
    else {
        subtotal = subtotal - (z * 240);
        document.getElementById("subtotal").innerHTML = subtotal;
        calcuTotal = subtotal + 15;
        total.innerHTML = calcuTotal;
    }
}

const code = document.getElementById("code");
const applycode = document.getElementById("applycode");
const discount = document.getElementById("discount");
let discountprice;
let discountcaculator;
const total = document.getElementById("total");
let calcuTotal;
const subtotaldiscount = document.getElementById("subtotaldiscount");

applycode.onclick = function () {
    if (code.value == "") {
        discount.innerHTML = `Discount`
        subtotaldiscount.innerHTML = 0;
        calcuTotal = subtotal + 15;
        total.innerHTML = calcuTotal;
    }
    else {
        discountprice = code.value;
        discount.innerHTML = `Discount (-${discountprice}%)`
        discountcaculator = Number(code.value);
        discountcaculator = Math.round(subtotal * (1 - (discountcaculator) / 100));
        subtotaldiscount.innerHTML = discountcaculator;
        calcuTotal = discountcaculator + 15;
        total.innerHTML = calcuTotal;
    }
}

const checkout = document.getElementById("checkout");

checkout.onclick = function(){
    document.getElementById("main_part2").style.display="none";
    document.getElementById("thank_you_shopping").style.display="block";
    document.getElementById("thank_you_shopping").innerHTML = "Thank you for shopping";
}