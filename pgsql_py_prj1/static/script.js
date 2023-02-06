'use strict'

const response = function () {
    alert("Initiating JSON request")
    let xmlhttp = new XMLHttpRequest();
    let url = "http://192.168.29.14:8080/student_marks_json";
    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            let myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(arr) {
        console.log(arr);
        document.querySelector('.student_json_div').innerHTML += arr
    }

}

document.querySelector('.my_button').addEventListener('click', response)
