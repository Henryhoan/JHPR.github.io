const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.menu_mobile')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

const subscribe_button = document.getElementById("subscribe_button");
let x =  document.getElementById("name").value;

subscribe_button.onclick = function() {
    let x =  document.getElementById("name").value;
    document.getElementById("email_address").style.display="none";
    document.getElementById("button").style.display="none";
    document.getElementById("thank_you").innerHTML = `Thanks ${x} for your subscribe`;
    document.getElementById("subscribe").style.display="flex";
    document.getElementById("subscribe").style.justifyContent="center";
    document.getElementById("subscribe").style.alignItems="center";
    document.getElementById("information_contact").style.paddingTop="230px";
}

const arrow_left = document.getElementById("arrow_left");
const arrow_right = document.getElementById("arrow_right");

arrow_right.onclick =function() {
    document.getElementById("name1").innerHTML ="John"
    document.getElementById("name2").innerHTML ="Bryant"
    document.getElementById("name3").innerHTML ="Soren"

}
arrow_left.onclick =function() {
    document.getElementById("name1").innerHTML ="Sarah M."
    document.getElementById("name2").innerHTML ="Alex K"
    document.getElementById("name3").innerHTML ="James L."
}

const look_up_mobile = document.getElementById("look_up_mobile");

look_up_mobile.onclick = function () {
    document.getElementById("part2_header").style.display="none";
    document.getElementById("part2_when_lookup").style.display="block";
}

const close_lookup = document.getElementById("close_lookup");

close_lookup.onclick = function () {
    document.getElementById("part2_header").style.display="flex";
    document.getElementById("part2_when_lookup").style.display="none";
}

const sign_out = document.getElementById("sign_out");

sign_out.onclick = function(){
    document.getElementById("top").style.display="block";
    document.getElementById("sign_out").style.display="none";
}

const icon_usr = document.getElementById("icon_usr");

icon_usr.onclick = function () {
    document.getElementById("sign_out").classList.toggle("sign_out");
    document.getElementById("sign_out").classList.toggle("sign_out_display");
}

