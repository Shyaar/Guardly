// Registration page script
{
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

        return isEmpty; // Return true if any field is invalid
    }

    // Event Listeners
    regBtn.addEventListener("click", (event) => {
        if (emptyForm()) {
            event.preventDefault(); // Prevent submission if the form is invalid
            alert("Please fill in all required fields.");
        } else {
            // Create object from input
            const phone1 = regPhone[0]?.value || "";
            const phone2 = regPhone[1]?.value || "";
            const fD = [{
                service: regSS.value,
                address: regAdd.value,
                phone1: phone1,
                phone2: phone2,
            }];

            // Save fD to local storage
            localStorage.setItem('fD', JSON.stringify(fD));
            const storedCC = localStorage.getItem('fD')
            console.log(storedCC)
            const contactCard = JSON.parse(storedCC)
            // console.log(contactCard)
            // return

            // Redirect based on selected service
            if (regSS.value === "Police") {
                window.location.href = 'Police.html'; 
                console.log(contactCard)    
            } else if (regSS.value === "Road Safety") {
                window.location.href = 'Fire_service.html';
            } else if (regSS.value === "Fire Service") {
                window.location.href = 'FIRS_page.html';
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
}


//Sendi call button function

document.addEventListener(`DOMContenLoaded`, function() {
    const callButtons = document.querySelectorAll(`.call-btn`);

    callButtons.forEach(button => {
        button.addEventListener(`click`, function() {
            const phoneNumber = button.getAttribute(`data-phone`)

            window.location.href = `tel:${phoneNumber}`;
        });
    });
}) 
