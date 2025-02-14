let cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0

const cards = document.querySelectorAll('.add-to')

cards.forEach((card)=>{
    card.addEventListener('click',()=>{
        const productName = card.getAttribute('data-name')
        const productPrice = parseFloat(card.getAttribute('data-price'))


        const existingProduct = cart.find(item => item.name === productName)
        if(existingProduct){
            existingProduct.quantity += 1
        }else{
            cart.push({
                name: productName,
                price: productPrice,
                quantity: 1
            })
        }
        totalPrice += productPrice
   })
})