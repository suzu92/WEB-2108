class Cd {
    constructor(src, album, artist, price) {
        this.src = src
        this.album = album
        this.artist = artist
        this.price = price
    }
}

let data = [
    new Cd(
        './img/personaljesus.jpg',
        'Personal Jesus',
        'Johnny Cash',
        159
    ),
    new Cd(
        './img/angryriver.jpg',
        'True Detective',
        'Various Artists',
        169
    ),
    new Cd(
        './img/badthings.jpg',
        'Bad Things',
        'Jace Everett',
        169
    ),
    new Cd(
        './img/conmancoming.jpg',
        'Boy From The North',
        'Monica Heldal',
        179
    ),
    new Cd(
        './img/goodcompany.jpg',
        'Good Company',
        'The Dead South',
        189
    ),
    new Cd(
        './img/gravedigger.jpg',
        'Dark Country 3',
        'Blues Saraceno',
        159
    ),
    new Cd(
        './img/raisehell.jpg',
        'Rock Is Dead',
        'Dorothy',
        169
    ),
    new Cd(
        './img/rosie.jpg',
        'Small Town Murders',
        'Various Artists',
        179
    ),
    new Cd(
        './img/trouble.jpg',
        'Karma',
        'Bellstop',
        179
    )
]

//gör cd synliga i html

function showCd(cd) {
    return `
    <article id=cdToBuy>
            <h3>${cd.album}</h3>
            <img alt="bild" src="${cd.src}"/>
            <p>${cd.artist}</p>
            <p>${cd.price} kr</p>
            <button class="btn-buy" onclick="btnBuy('${cd.src}', '${cd.album}', '${cd.artist}, '${cd.price})">Buy</button>
        </article>
   `;
}

//loopar ut i html
let renderCd = [];
for (const cd of data) {
    renderCd.push(showCd(cd))
}
document.getElementById('store-contents').innerHTML = renderCd;
