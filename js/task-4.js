const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", hundleSubmit);


function hundleSubmit(event) {
    event.preventDefault();

    const form = event.target.elements;
    const email = form.email.value.trim();
    const password = form.password.value.trim();
       
    if (email === "" || password === "") {
        alert('All form fields must be filled in');
    } else {
        user.email = email;        
        user.password = password;
        console.log(user);
        form.reset();
    };    
}

loginForm.style.display = "flex";
loginForm.style.flexDirection = "column";
loginForm.style.maxWidth = "408px";
loginForm.style.padding = "24px";
loginForm.style.backgroundColor = "#fff";
loginForm.style.borderRadius = "8px";
loginForm.style.gap = "8px";

const button = document.querySelector("button");
button.setAttribute(`style`, `font-family: "Montserrat", Medium; line-height: 150%; letter-spacing: 0.04em; font-size: 16px;`);
button.style.borderRadius = "8px";
button.style.border = "none";
button.style.marginTop = "16px";
button.style.padding = "8px 16px";
button.style.width= "86px";
button.style.height= "40px";
button.style.color = "#fff";
button.style.backgroundColor = "#4e75ff";
button.textContent = "Log in";
button.style.cursor = "pointer";