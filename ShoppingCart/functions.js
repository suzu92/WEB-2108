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

