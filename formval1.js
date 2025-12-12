function sub(){
    var uname=document.getElementById("uname").value;
    var mob=document.getElementById("mobile").value;
    var passw=document.getElementById("passw").value;
    var cnfpass=document.getElementById("cnfpass").value;

    if(uname==""|| mob==""|| cnfpass==""){
        alert("All fields are mandotory!");
        return false;
    }
    else if(mob.length<10 || mob.length>10){
        alert("Mobile number must contain only digits");
        return false;
    }
    else if(isNaN(mob)){
        alert("Mobile number must contain only digits");
        return false;
    }
    else if( passw != cnfpass){
        alert("Password does not match.");
        return false;
    }
    else{
        return true;
    }
}