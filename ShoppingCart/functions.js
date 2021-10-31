class CdToBuy {
    constructor(src, album, artist, price) {
        this.src = src
        this.album = album
        this.artist = artist
        this.price = price
        this.quantity = 1
        this.totalSum = price
    }
}

//tom korg, antal i korg, summan av korg
let myCart = [];
let totalCart = [];
let quantityCart = [];

//cd till korg
function btnBuy(src, album, artist, price) {
    let exist = updateCdToCart();

    if (exist === false) {
        let newCd = new CdToBuy(src, album, artist, price)
        myCart.push(newCd)
    }
    renderCart()
}

function renderCart() {
    let renderCartCd = [];
    for (const cd of data) {
        renderCartCd.push(showCd(cd))
    }
    document.getElementById('allAddedCds').innerHTML = renderCartCd

    calculateSum()
    calculateQuantity()
    calculateShipping()
}

function showCd(cd) {
    return `
    <article id='allAddedCds${cd.album}'>
        <p>${cd.album}</p>
        <img alt="bild" src="${cd.src}"/>
        <p>Price: ${cd.price}</p>
        <input id="quantity${cd.id}" type="number" onclick="addMore('${cd.id}')" value="${cd.quantity}">
        <p id='totalSum${cd.album}'>Total: ${cd.totalSum} kr</p>
    </article>
        `;
}

function showTotalSum(totalSum) {
    return `
    <article id='sumOfCds'>
         <p>Total: ${totalSum}kr</p>
    </article>
    `;
}

function showTotalQuantity(quantity) {
    return `
    <article id='quantityOfCds'>
         <p>Quantity: ${quantity}</p>
    </article>
    `;
}

function showShippingCost(shippingText) {
    return `
    <article id='shippingOfCds'>
         <p>${shippingText}</p>
    </article>
    `;
}

function openMenu() {
    document.getElementById('dropdown')
        .classList.toggle('show')
}

function closeMenu() {
    document.getElementById('dropdown')
        .classList.remove('show')
}

function updateCdToCart(id) {
    let existInCart = false
    for (const cd of myCart) {
        if (cd.id === id) {
            cd.quantity += 1
            cd.totalSum = cd.price * cd.quantity;
            existInCart = true;
        }
    }
    return existInCart
}

function updateCdsInCartNewValue(id, newValue) {
    let sumOfCds = 0
    for (const cd of myCart) {
        if (cd.id === id) {
            cd.quantity = newValue
            cd.totalSum = cd.price * cd.quantity;
            sumOfCds = cd.totalSum;
        }
    }
    return sumOfCds
}

function calculateSum() {
    totalCart = 0

    for (const cd of myCart) {
        totalCart += parseInt(cd.totalSum)
    }
    document.getElementById('sumOfCds').innerHTML = showTotalSum(totalCart)
}

function calculateShipping() {
    let costToFreeFreight = 259 - totalCart;
    let costTest = ""

    if (costToFreeFreight <= 0) {
        costTest = 'You have free shipping!'
    } else {
        costTest = 'You have' + costToFreeFreight + 'left to free shipping'
    }
    document.getElementById('shippingOfCds').innerHTML = showShippingCost(costTest)
}

function calculateQuantity() {
    quantityCart = 0

    for (const cd of myCart) {
        quantityCart += parseInt(cd.quantity)
    }
    document.getElementById('quantityOfCds').innerHTML = showTotalQuantity(quantityCart)
}

function addMore(id) {
    let newValue = document.getElementById('quantity' + id).value;
    if (parseInt(newValue) <= 0) {
        for (let i = 0; i < myCart.length; i++) {
            if (myCart[i].id === id) {
                myCart.splice(i, 1);
                document.getElementById('cdToBuy' + id).remove()
            }
        }
    }
    else {
        let totalSum = updateCdsInCartNewValue(id, newValue)
        if(!!totalSum) {
            document.getElementById('totalSum' + id).innerText = 'Total:' + totalSum + 'kr';
        }
    }
    calculateSum()
    calculateQuantity()
    calculateShipping()
}

renderCart()
