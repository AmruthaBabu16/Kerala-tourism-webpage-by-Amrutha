let email=document.getElementById("email");
let pwd=document.getElementById("pwd");
function valida()
{
    
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        alert("enter password");
        return false;
       
    }
    else {
        alert("enter a valid email address");
        return false;
    }


}
