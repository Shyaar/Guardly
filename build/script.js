//Registration page script
{
const regBtn = document.querySelector(".regBtn");
const regSS = document.querySelector(".RegServiceSelect");
const regAdd = document.querySelector(".RegAddress");
const regPhone = document.querySelector(".RegPhone")
const regAddNo = document.querySelector(".RegAddNo")
const form = document.querySelector(".form")


//Event Listeners

regBtn.addEventListener("click",()=>{
    if(regSS.value = "Police"){

    }else if(regSS.value = "Road Safety"){
        window.localStorage.href = 'landing.html'

    }else if(regSS.value = "Fire Service"){
        
    }
})

regSS.addEventListener("input",()=>{
    console.log(regSS.value)
})

regAdd.addEventListener("input",()=>{
    console.log(regAdd.value)
})

regPhone.addEventListener("input",()=>{
    phone = regPhone.value
    console.log(regPhone.value)

    if(phone.length > 10){
        alert("Phone number cannot exceed 10 degits. PLEASE CHECK NUMBER!!")
    }
})

regAddNo.addEventListener("click", () => {
    form.insertAdjacentHTML('beforeend', `
        <label class="w-full" for="Address">Phone Number</label>
        <input class="RegPhone px-4 py-2 border-[2px] rounded-[12px] w-full" type="number">
    `);
});
}

//Landing page
{

}

