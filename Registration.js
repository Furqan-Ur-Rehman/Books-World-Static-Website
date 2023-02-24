function reg(){
    var fn = document.getElementById('user').value;
    var Ln = document.getElementById('UserLname').value;
    var Ue = document.getElementById('Useremail').value;
    var Upass = document.getElementById('Userpassword').value;

    var validationfn =/^[a-zA-Z ]{4,15}$/;
    var validationLn =/^[a-zA-Z ]{4,15}$/;
    var validationUe =/^[a-zA-Z0-9_]{3,}@[a-zA-Z]{3,}[.]{1}[com]{3}$/;
    var validationUpass =/^[0-9a-zA-Z0-9_!@#$%^&*.]{3,15}$/;

    if(validationfn.test(fn)){
        document.getElementById('user').style.border="";
    }

    else{
        document.getElementById('user').style.border="3px solid red";
        alert("**Only Alphabets or at least 4 characters are allowed in First Name..")
        return false;
    }


    if(validationLn.test(Ln)){
        document.getElementById('UserLname').style.border="";
        
        
    }
    else{
        document.getElementById('UserLname').style.border="3px solid red";
        alert("**Only Alphabets or at least 4 characters are allowed in Last Name..")
        return false;
    }

    
    if(validationUe.test(Ue)){
        document.getElementById('Useremail').style.border="";
        
    }
    else{
        document.getElementById('Useremail').style.border="3px solid red";
        alert("**Please Enter the Valid Email Address..")
        return false;

    }


    if(validationUpass.test(Upass)){
        document.getElementById('Userpassword').style.border="";
        alert("You have Successfully retistered! Please Login Now... ")
        window.location.href="login.html";
        
    }
    else{
        document.getElementById('Userpassword').style.border="3px solid red";
        alert("**Please Enter the Valid Password..")
        return false;

    }
}