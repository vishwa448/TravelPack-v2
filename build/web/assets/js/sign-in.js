
//D:\Project\TravelPack\web\assets\js\sign-in.js
async function signIn() {
//    console.log("ok login js");

    const email = document.getElementById("email2").value;
    const password = document.getElementById("password2").value;

//    console.log(email);
//    console.log(password);

    const user = {
        email: email,
        password: password

    };

    const userJson = JSON.stringify(user);

    const response = await fetch(
            "SignIn",
            {
                method: "POST",
                header: {
                    "Content-Type": "application/json"
                },
                body: userJson
            }
    );

   
    
    if (response.ok){
        const json = await response.json();
//        console.log(json);
        
        if (json.status){
            window.location  = "verify-account.html"
        }else{
            console.log(json.message);
            document.getElementById("error-message").innerHTML = json.message;
        }
        
    }else{
            document.getElementById("error-message").innerHTML="Registration faild. Please try again";
        
    }
    
}


