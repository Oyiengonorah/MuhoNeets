var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)

for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', function(event){
        var buttonClicked = event.target 
        buttonClicked.parentElement.parentElement.remove()
    })
}

function updateCartTotal(){
    var cartContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartContainer.getElementsByClassName('cart-rows')
    for (i=0; i<cartRows.length; i++){
        var rowNum = cartRows[i]
        var priceElement = rowNum.getElementsByClassName('cart-price')
        var quantity = rowNum.getElementsByClassName('cart-quantity-input')
        var sum = (priceElement*quantity)
    }
}
