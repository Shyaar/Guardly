console.log("we dey here")
// police registered numbers page
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
const policeCard = document.querySelector("#contactCards")
console.log(policeCard)
for(let i =0; i<contactCard.length; i++){
    const address = contactCard[i].address
    const phone1 = contactCard[i].phone1
    const phone2 = contactCard[i].phone2
    console.log(address)
    console.log(phone1)
    console.log(phone2)

    policeCard.insertAdjacentHTML(
        "afterbegin",
        `<div class="flex">
            <address class="w-full">
                Address: ${address} <br>
                Phone 1: ${phone1} 
                <button style="margin-left: 10px;">
                    <img src="/build/images/Vector.png" alt="">
                </button><br>
                Phone 2: ${phone2} 
                <button style="margin-left: 10px;">
                    <img src="/build/images/Vector.png" alt="">
                </button>
            </address>
            <section class="flex flex-col items-center place-content-center ml-6">
                <button class="Edtbtn bg-blue-700 border border-blue-600 px-4 py-1 text-white my-1 w-full rounded-md">Edit</button>
                <button class="Delbtn bg-red-700 border border-red-600 px-4 py-1 text-white my-1 rounded-md">Delete</button>
            </section>
        </div>`
    );
}






