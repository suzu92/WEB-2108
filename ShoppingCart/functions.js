//gör cd synliga i html

function showCd(cd) {
    return `
    <article id=cdToBuy>
            <h3>${cd.album}</h3>
            <img alt="bild" src="${cd.src}"/>
            <p>${cd.artist}</p>
            <p>${cd.price} kr</p>
            <button onclick="btnBuy('${cd.src}', '${cd.album}', '${cd.artist}, '${cd.price})">Buy</button>
        </article>
   `;
}

//loopar ut i html
let renderCds = [];
for (const cd of data) {
    renderCds.push(showCd(cd))
}
document.getElementById('store-contents').innerHTML = renderCds

//tom korg, antal i korg, summan av korg
let myCart = [];
let totalCart = [];
let quantityCart = [];

//cd till korg
function btnBuy(src, album, artist, price) {
    let exist = updateCdToCart(id);

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

function showCds(cd) {
    return `
    <article id='allAddedCds${cd.album}'>
        <p>${cd.album}</p>
        <img alt="bild" src="${cd.src}"/>
        <p>Price: ${cd.price}</p>
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

function updateCdInCart(id) {
    let existInCart = false
    for (const item of myCart) {
        if (item.id === id) {
            item.quantity += 1
            item.totalSum = item.price * item.quantity;
            existInCart = true;
        }
    }
    return existInCart
}

function updateCdsInCartNewValue(id, newValue) {
    let sumOfCds = 0
    for (const item of myCart) {
        if (item.id === id) {
            item.quantity = newValue
            item.totalSum = item.price * item.quantity;
            sumOfCds = item.totalSum;
        }
    }
    return sumOfCds
}

function calculateSum() {
    totalCart = 0

    for (const item of myCart) {
        totalCart += parseInt(item.totalSum)
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

    for (const item of myCart) {
        quantityCart += parseInt(item.quantity)
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
