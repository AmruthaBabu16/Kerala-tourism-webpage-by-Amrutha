let email=document.getElementById("email");
let pwd=document.getElementById("pwd");
let num=document.getElementById("num");
let name=document.getElementById("name");
let last=document.getElementById("last")
function validate()
{
    
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regex=  /^([a-z]{5,7}[0-9]{1,3}[A-Z]{1,3})$/;
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let phone=/^[a-zA-z]+$/;
    if(regexp.test(email.value)&regex.test(pwd.value)&phoneno.test(num.value)&name.value!=""){
      return true;
     
        
   }
   else{
       if(name.value==""){
           alert("First name can't be empty.");
           return false;
       }
       else if(num.value==""){
           alert("Enter a 10 digit mobile number.");
           return false;
       }
      else if(phone.test(num.value))
       {
              alert("Enter numbers only.");
               return false;
       }
       else if(num.value.length<10)
       {
           alert("Enter a phone number of size 10 digits");
           return false;
       }
      else if(email.value==""){
         alert("Enter a valid email address");
        return false;
       }
       
       else if(pwd.value==""){
        alert("Enter a password of size atleast 8 characters and must incude atleast one capital letter,samll letter and number.");
        return false;
        }
        else if(pwd.value.length<=3){
            alert("Password is not strong.Enter a password of size atleast 8 characters and must incude atleast one capital letter,samll letter and number.");
             pwd.style.border="2px solid red";
             return false;
       }
       else if(pwd.value.length<=5){
        alert("Password strength is medium.Enter a password of size atleast 8 characters and must incude atleast one capital letter,samll letter and number.");
        pwd.style.border="2px solid yellow";
        return false;
       }
        else if(pwd.value.length=8){
        alert("Password is strong but should contain atleast one capital letter,samll letter and number.");
        pwd.style.border="2px solid green";
        return false;
        }
    }
    
}