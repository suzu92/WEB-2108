function openMenu() {
    document.getElementById('dropdown')
        .classList.toggle('show')
}

function closeMenu() {
    document.getElementById('dropdown')
        .classList.remove('show')
}
ready()

function ready() {
    let removeCartItemButton = document.getElementsByClassName('btn-remove')
    for (let i = 0; i < removeCartItemButton.length; i++) {
        let button = removeCartItemButton[i]
        button.addEventListener('click', removeCartItem)
    }

    let quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    let addToCartButton = document.getElementsByClassName('btn-buy')
    for (let i = 0; i < addToCartButton.length; i++) {
        let button = addToCartButton[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function removeCartItem(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    let button = event.target
    let storeItem = button.parentElement.parentElement
    let title = storeItem.getElementsByClassName('item-title')[0].innerText
    let price = storeItem.getElementsByClassName('item-price')[0].innerText
    let imageSrc = storeItem.getElementsByClassName('item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}


function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    let cartItemNames = cartItems.getElementsByClassName('cart-title')
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === title) {
            alert('This item is already added to the cart')
            return
        }
    }
    cartRow.innerHTML = `
        <div class="cart-item cart-column">
            <img alt="cd" class="item-image" src="${imageSrc}" width="50" height="50">
            <span class="item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn-remove" type="button">X</button>
        </div>`
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function purchaseClicked() {
    let cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
    alert('Thank you for your purchase!')
}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cart-row')
    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        let price = parseFloat(priceElement.innerText.replace('$', ''))
        let quantity = quantityElement.value
        total += price * quantity;
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = total + 'kr'
    checkFreeShipping(total);
}

function checkFreeShipping(total) {
    if (total >= 259) {
        let freeShipping = document.getElementById('free-ship');
        freeShipping.innerHTML = "You have free shipping!"
    } else if (total === 0) {
        let freeShipping = document.getElementById('free-ship');
        freeShipping.innerText = '';
        document.querySelector('.cart-items').classList.remove('hidden');
    } else {
        let shippingNumber = 259 - total;
        let freeShipping = document.getElementById('free-ship');
        freeShipping.innerHTML = "Free shipping over 259kr (" + shippingNumber + "kr left)";
    }
}

