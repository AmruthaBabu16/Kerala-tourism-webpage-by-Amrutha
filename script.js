let email=document.getElementById("email");
let pwd=document.getElementById("pwd");
let no=document.getElementById("no");
function validate(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        alert("valid email format");
        email.style.color=green;
        return true;
    }
else {
   alert("invaid email format");
    return false ; 
}