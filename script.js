const password = document.getElementById("password");
const strengthFill = document.getElementById("strengthFill");
const strengthText = document.getElementById("strength-text");

password.addEventListener("input", function () {

    let value = password.value;

    let checks = {
        length: value.length >= 8,
        upper: /[A-Z]/.test(value),
        lower: /[a-z]/.test(value),
        number: /[0-9]/.test(value),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(value)
    };

    let score = 0;

    for (let key in checks) {
        let item = document.getElementById(key);

        if (checks[key]) {
            item.classList.add("valid");
            item.classList.remove("invalid");
            score++;
        } else {
            item.classList.add("invalid");
            item.classList.remove("valid");
        }
    }

    if (score <= 2) {
        strengthFill.style.width = "33%";
        strengthFill.style.backgroundColor = "red";
        strengthText.textContent = "Strength: Weak";
    }
    else if (score <= 4) {
        strengthFill.style.width = "66%";
        strengthFill.style.backgroundColor = "orange";
        strengthText.textContent = "Strength: Medium";
    }
    else {
        strengthFill.style.width = "100%";
        strengthFill.style.backgroundColor = "green";
        strengthText.textContent = "Strength: Strong";
    }
});