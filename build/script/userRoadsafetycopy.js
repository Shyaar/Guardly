// Fire-service registered numbers page
const json = localStorage.getItem('fD')
console.log(json)
const contact = JSON.parse(json)

console.log(contact)

contactCard = []

for(let i=0; i<contact.length; i++){
    if(contact[i].service === 'Road Safety'){
        contactCard.push(contact[i])
    }else{

    }
}
const RoadSafety = document.querySelector(".category")


for(let i =0; i<contactCard.length; i++){
    const address = contactCard[i].address
    const phone1 = contactCard[i].phone1
    const phone2 = contactCard[i].phone2
    console.log(address)
    console.log(phone1)
    console.log(phone2)

    RoadSafety.insertAdjacentHTML(
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
    console.log("FireService")
}






