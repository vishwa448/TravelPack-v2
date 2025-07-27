

async function signIn() {
    console.log("ok");

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

//    console.log(email);
//    console.log(password);

    const user = {
        email: email,
        password: password

    };

    const userJson = JSON.stringify(user);

    const response = await fetch(
            "signin",
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
            document.getElementById("message").innerHTML = json.message;
        }
        
    }else{
            document.getElementById("message").innerHTML="Registration faild. Please try again";
        
    }
    
}


