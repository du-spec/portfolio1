const text_span = document.querySelector(".name")
// console.log(text_span);

const arr = ["Kamal Nayan Tripathi", "Frontend Developer"];
const type_delay = 200;
const erase_delay = 100;
const newText_delay = 2000;
let arr_index = 0;
let char_index = 0;

function type() {
    if (char_index < arr[arr_index].length) {
        text_span.textContent += arr[arr_index].charAt(char_index);
        char_index++;
        setTimeout(type, type_delay);
    }
    else {
        setTimeout(erase, newText_delay)
    }
}

function erase() {
    if (char_index > 0) {
        text_span.textContent = arr[arr_index].substring(0, char_index - 1);
        char_index--;
        setTimeout(erase, erase_delay);
    }
    else {
        arr_index++;
        if (arr_index >= arr.length) {
            arr_index = 0;
        }
        setTimeout(type, type_delay + 1100)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, newText_delay + 150);
})