console.log("we dey popo")
// Fire-service registered numbers page
const json = localStorage.getItem('fD')
console.log(json)
const contact = JSON.parse(json)

console.log(contact)

contactCard = []

for(let i=0; i<contact.length; i++){
    if(contact[i].service === 'Police'){
        console.log(contact[i],"found")
        contactCard.push(contact[i])
    }else{
        console.log('not found')
    }
}
const Police = document.querySelector(".category")
console.log(Police)

for(let i =0; i<contactCard.length; i++){
    const address = contactCard[i].address
    const phone1 = contactCard[i].phone1
    const phone2 = contactCard[i].phone2
    console.log(address)
    console.log(phone1)
    console.log(phone2)

    Police.insertAdjacentHTML(
        "afterbegin",
        `<div class="flex">
            <address class="w-full">
            <p class="h-auto">Address: ${address} </p>
                <br>
                Phone 1: ${phone1} 
                <button style="margin-left: 10px;">
                    <img src="/build/images/Vector.png" alt="">
                </button><br>
                Phone 2: ${phone2} 
                <button style="margin-left: 10px;">
                    <img src="/build/images/Vector.png" alt="">
                </button>
            </address>
        </div>`
    );
    console.log("police")
}






