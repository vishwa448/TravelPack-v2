//Travel pack signUp

async function signUp() {
    console.log("ok");

    const fname = document.getElementById("firstName").value;
    const lname = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    console.log(fname);
    console.log(lname);
    console.log(email);
    console.log(password);
    console.log(phone);

    const user = {
        firstName: fname,
        lastName: lname,
        email: email,
        password: password,
        phone: phone

    };

    const userJson = JSON.stringify(user);

    const response = await fetch(
            "/sign-up",
            {
                method: "POST",
                header: {
                    "Content-Type": "application/json"
                },
                body: userJson
            }
    );

    if (response.ok) {
        const json = await response.json();
//        console.log(json);

        if (json.status) {
            window.location = "verify-account.html"
        } else {
            console.log(json.message);
            document.getElementById("error-message").innerHTML = json.message;
        }

    } else {
        document.getElementById("error-message").innerHTML = "Registration faild. Please try again";

    }

}


