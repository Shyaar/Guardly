// Registration page script
    const regBtn = document.querySelector(".regBtn");
    const regSS = document.querySelector(".RegServiceSelect");
    const ParasError = document.querySelector(".ParasError");
    const regAdd = document.querySelector(".RegAddress");
    const addError = document.querySelector(".addError");
    const regPhone = document.querySelectorAll(".RegPhone");
    const phoneError = document.querySelectorAll(".PhoneError");
    const form = document.querySelector(".form");
    

    // Hide error messages initially
    ParasError.style.display = "none";
    addError.style.display = "none";
    phoneError.forEach((phoneError) => {
        phoneError.style.display = "none";
    });

    // Check if the form is empty
    function emptyForm() {
        let isEmpty = false;

        if (regSS.value === "") {
            isEmpty = true;
            ParasError.style.display = "block";
        } else {
            ParasError.style.display = "none";
        }

        if (regAdd.value === "") {
            isEmpty = true;
            addError.style.display = "block";
        } else {
            addError.style.display = "none";
        }

        regPhone.forEach((phoneInput, index) => {
            if (phoneInput.value === "" || phoneInput.value.length !== 11) {
                isEmpty = true;
                phoneError[index].style.display = "block";
            } else {
                phoneError[index].style.display = "none";
            }
        });

        return isEmpty;
    }

    // Event Listeners
    regBtn.addEventListener("click", (event) => {
        if (emptyForm()) {
            event.preventDefault(); 
            alert("Please fill in all required fields.");
        } else {
    // Create object from input
    const phone1 = regPhone[0]?.value || "";
    const phone2 = regPhone[1]?.value || "";
    const fD = {
    service: regSS.value,
    address: regAdd.value,
    phone1: phone1,
    phone2: phone2,
};

// set data to local storage. avoid replacement
let existingFD = JSON.parse(localStorage.getItem('fD')) || [];
existingFD.push(fD);
localStorage.setItem('fD', JSON.stringify(existingFD));

// Get the stored data
const json = localStorage.getItem('fD');
console.log(json);
const storedData = JSON.parse(json);
console.log(storedData);

// Redirect based on the selected service
if (regSS.value === "Police") {
    window.location.href = 'Reg Num Police.html';  
    console.log(regSS);
} else if (regSS.value === "Road Safety") {
    window.location.href = 'Reg Num Road safety.html';
    console.log('Road Safety:');
} else if (regSS.value === "Fire Service") {
    window.location.href = 'Reg Num fire Service.html';
    console.log('Fire Service:');
}
        }
    });

    // Individual field validation
    regSS.addEventListener("blur", () => {
        if (regSS.value === "") {
            ParasError.style.display = "block"; 
        } else {
            ParasError.style.display = "none";
        }
    });

    regAdd.addEventListener("blur", () => {
        if (regAdd.value === "") {
            addError.style.display = "block"; 
        } else {
            addError.style.display = "none";
        }
    });

    regPhone.forEach((phoneInput, index) => {
        phoneInput.addEventListener("blur", () => {
            const phone = phoneInput.value;
            if (phone === "" || phone.length !== 11) {
                phoneError[index].style.display = "block";
            } else {
                phoneError[index].style.display = "none";
            }
        }
    );
    });


