function login(){
    var em = document.getElementById('user').value;
    var up = document.getElementById('Userpassword').value;
    var exp=/^[a-zA-Z0-9_]{3,}@[a-zA-Z]{5,}[.]{1}[com]{3}$/;
    var pass=/^[a-zA-Z0-9_!@#$%^&*().<>/?]{3,10}$/;
    
    
    if(exp.test(em)){
        // window.location.href="Book world.html";
        // document.getElementById('Email').innerHTML="";
        document.getElementById('user').style.borderColor="";
        
    }
    else{
        document.getElementById('user').style.borderColor="red";
        alert("***Please Enter the Correct Email e.g.(furqanrehman878@gmail.com)..")
        return false;
    }
    
    if(pass.test(up)){
        // document.getElementById('upass').innerHTML="";
        document.getElementById('Userpassword').style.borderColor="";
        window.location.href="Book world.html";
        return false;
    }

    else{
        alert("***Also Enter the Correct Password, then login..")
        document.getElementById('Userpassword').style.borderColor="red";
        return false;     
    }
}