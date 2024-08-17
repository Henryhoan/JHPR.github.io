const value_price = document.getElementById("value_price");

const range_price = document.getElementById("range_price");

range_price.oninput = function () {
    value_price.innerHTML = `$` + range_price.value;
}

const minus = document.getElementById("minus");

const plus = document.getElementById("plus");

plus.onclick = function () {
    range_price.value = Number(range_price.value) + 50;
    value_price.innerHTML = `$` + range_price.value;

}
minus.onclick = function () {
    range_price.value = Number(range_price.value) - 50;
    value_price.innerHTML = `$` + range_price.value;

}
const filterIcon = document.getElementById("filterIcon")

filterIcon.onclick = function(){
    if (filterIcon.classList.contains("fa-sliders")) {
        filterIcon.classList.remove("fa-sliders");
        filterIcon.classList.add("fa-x");
        document.getElementById("part1").style.display="block";
    }
    else {
        filterIcon.classList.remove("fa-x");
        filterIcon.classList.add("fa-sliders");
        document.getElementById("part1").style.display="none";
    }
}
const color1 = document.getElementById("color1");

color1.onclick = function () {
    if (color1.classList.contains('color')) {
        color1.innerHTML = "&#10003;";
        color1.classList.add("color_unselected");
        color1.classList.remove("color");
    }
    else {
        color1.innerHTML = "";
        color1.classList.add('color');
        color1.classList.remove('color_unselected');
    }

}
const color2 = document.getElementById("color2");

color2.onclick = function () {
    if (color2.classList.contains('color')) {
        color2.innerHTML = "&#10003;";
        color2.classList.add("color_unselected");
        color2.classList.remove("color");
    }
    else {
        color2.innerHTML = "";
        color2.classList.add('color');
        color2.classList.remove('color_unselected');
    }
}
const color3 = document.getElementById("color3");

color3.onclick = function () {
    if (color3.classList.contains('color')) {
        color3.innerHTML = "&#10003;";
        color3.classList.add("color_unselected");
        color3.classList.remove("color");
    }
    else {
        color3.innerHTML = "";
        color3.classList.add('color');
        color3.classList.remove('color_unselected');
    }
}
const color4 = document.getElementById("color4");

color4.onclick = function () {
    if (color4.classList.contains('color')) {
        color4.innerHTML = "&#10003;";
        color4.classList.add("color_unselected");
        color4.classList.remove("color");
    }
    else {
        color4.innerHTML = "";
        color4.classList.add('color');
        color4.classList.remove('color_unselected');
    }
}
const color5 = document.getElementById("color5");

color5.onclick = function () {
    if (color5.classList.contains('color')) {
        color5.innerHTML = "&#10003;";
        color5.classList.add("color_unselected");
        color5.classList.remove("color");
    }
    else {
        color5.innerHTML = "";
        color5.classList.add('color');
        color5.classList.remove('color_unselected');
    }
}
const color6 = document.getElementById("color6");

color6.onclick = function () {
    if (color6.classList.contains('color')) {
        color6.innerHTML = "&#10003;";
        color6.classList.add("color_unselected");
        color6.classList.remove("color");
    }
    else {
        color6.innerHTML = "";
        color6.classList.add('color');
        color6.classList.remove('color_unselected');
    }
}
const color7 = document.getElementById("color7");

color7.onclick = function () {
    if (color7.classList.contains('color')) {
        color7.innerHTML = "&#10003;";
        color7.classList.add("color_unselected");
        color7.classList.remove("color");
    }
    else {
        color7.innerHTML = "";
        color7.classList.add('color');
        color7.classList.remove('color_unselected');
    }
}
const color8 = document.getElementById("color8");

color8.onclick = function () {
    if (color8.classList.contains('color')) {
        color8.innerHTML = "&#10003;";
        color8.classList.add("color_unselected");
        color8.classList.remove("color");
    }
    else {
        color8.innerHTML = "";
        color8.classList.add('color');
        color8.classList.remove('color_unselected');
    }
}
const color9 = document.getElementById("color9");

color9.onclick = function () {
    if (color9.classList.contains('color')) {
        color9.innerHTML = "&#10003;";
        color9.classList.add("color_unselected");
        color9.classList.remove("color");
    }
    else {
        color9.innerHTML = "";
        color9.classList.add('color');
        color9.classList.remove('color_unselected');
    }
}
const color10 = document.getElementById("color10");

color10.onclick = function () {
    if (color10.classList.contains('color')) {
        color10.innerHTML = "&#10003;";
        color10.classList.add("color_unselected");
        color10.classList.remove("color");
    }
    else {
        color10.innerHTML = "";
        color10.classList.add('color');
        color10.classList.remove('color_unselected');
    }
}

const close_list = document.getElementById("close_list");
// const open_list = document.getElementById("open_list");

close_list.onclick = function () {
    if (close_list.classList.contains('fa-chevron-up')) {
        close_list.classList.add('fa-chevron-down');
        close_list.classList.remove('fa-chevron-up');
        document.getElementById("list_of_cloths").style.display = "none";
    }
    else {
        close_list.classList.remove('fa-chevron-down');
        close_list.classList.add('fa-chevron-up');
        document.getElementById("list_of_cloths").style.display = "block";
    }


}
const close_list2 = document.getElementById("close_list2");
close_list2.onclick = function () {
    if (close_list2.classList.contains('fa-chevron-up')) {
        close_list2.classList.add('fa-chevron-down');
        close_list2.classList.remove('fa-chevron-up');
        document.getElementById("set_price").style.display = "none";
        value_price.innerHTML = "";
    }
    else {
        close_list2.classList.remove('fa-chevron-down');
        close_list2.classList.add('fa-chevron-up');
        document.getElementById("set_price").style.display = "inline";
        value_price.innerHTML = value_price.innerHTML = `$` + range_price.value;;
    }

}


const close_list3 = document.getElementById("close_list3");
close_list3.onclick = function () {
    if (close_list3.classList.contains('fa-chevron-up')) {
        close_list3.classList.add('fa-chevron-down');
        close_list3.classList.remove('fa-chevron-up');
        document.getElementById("list_of_color").style.display = "none";
    }
    else {
        close_list3.classList.remove('fa-chevron-down');
        close_list3.classList.add('fa-chevron-up');
        document.getElementById("list_of_color").style.display = "flex";
    }
}

const close_list4 = document.getElementById("close_list4");
close_list4.onclick = function () {
    if (close_list4.classList.contains('fa-chevron-up')) {
        close_list4.classList.add('fa-chevron-down');
        close_list4.classList.remove('fa-chevron-up');
        document.getElementById("list_of_size").style.display = "none";
    }
    else {
        close_list4.classList.remove('fa-chevron-down');
        close_list4.classList.add('fa-chevron-up');
        document.getElementById("list_of_size").style.display = "flex";
    }
}

const close_list5 = document.getElementById("close_list5");

close_list5.onclick = function () {
    if (close_list5.classList.contains('fa-chevron-up')) {
        close_list5.classList.add('fa-chevron-down');
        close_list5.classList.remove('fa-chevron-up');
        document.getElementById("list_of_style").style.display = "none";
    }

    else {
        close_list5.classList.remove('fa-chevron-down');
        close_list5.classList.add('fa-chevron-up');
        document.getElementById("list_of_style").style.display = "block";
    }
}

const size1 = document.getElementById("size1");

size1.onclick = function () {
    size1.classList.toggle('size');
    size1.classList.toggle('size_unselected');
}
const size2 = document.getElementById("size2");

size2.onclick = function () {
    size2.classList.toggle('size_unselected');
    size2.classList.toggle('size');
}
const size3 = document.getElementById("size3");

size3.onclick = function () {
    size3.classList.toggle('size');
    size3.classList.toggle('size_unselected');
}
const size4 = document.getElementById("size4");

size4.onclick = function () {
    size4.classList.toggle('size');
    size4.classList.toggle('size_unselected');
}
const size5 = document.getElementById("size5");

size5.onclick = function () {
    size5.classList.toggle('size');
    size5.classList.toggle('size_unselected');
}
const size6 = document.getElementById("size6");

size6.onclick = function () {
    size6.classList.toggle('size');
    size6.classList.toggle('size_unselected');
}
const size7 = document.getElementById("size7");

size7.onclick = function () {
    size7.classList.toggle('size');
    size7.classList.toggle('size_unselected');
}
const size8 = document.getElementById("size8");

size8.onclick = function () {
    size8.classList.toggle('size');
    size8.classList.toggle('size_unselected');
}


const size9 = document.getElementById("size9");

size9.onclick = function () {
    size9.classList.toggle('size');
    size9.classList.toggle('size_unselected');
}

const reset = document.getElementById("reset");
