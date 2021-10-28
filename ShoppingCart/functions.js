//gör cd synliga i html

function showCd(cd){
    return `
    <article id='cdToBuy'>
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
let totalSum = [];
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