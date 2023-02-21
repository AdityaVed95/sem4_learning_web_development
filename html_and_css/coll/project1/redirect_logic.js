let response = function () {
    alert("Redirecting You to Sign Up page ")
    window.location.href = "http://127.0.0.1:5500/html/coll/project1/sign_up_page.html";
    // with the below option you wont be able to get back to your original 
    // website, basically back button is disabled
    // window.location.replace("http://www.w3schools.com");

}

document.querySelector('.btn').addEventListener('click', response)