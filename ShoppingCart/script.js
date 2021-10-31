function openMenu() {
    document.getElementById('dropdown')
        .classList.toggle('show')
}

function closeMenu() {
    document.getElementById('dropdown')
        .classList.remove('show')
}

function updateElementIdText(elementId, text) {
    document.getElementById(elementId).innerText = String(text)
}

function updateElementIdHtml(elementId, html) {
    document.getElementById(elementId).innerHTML = html
}

function generateSingleCard(cd) {
    return `
    <article class='card'>
            <h3>${cd.album}</h3>
            <img alt="bild" src="${cd.src}"/>
            <p>${cd.artist}</p>
            <p>${cd.price} kr</p>
            <button id='${cd.album}'>Buy</button>
        </article>
    `
}

function updateContent() {
    let htmlElement = ''

    for (const cd of data) {
        htmlElement += generateSingleCard(cd)
    }

    updateElementIdHtml('card-contents', htmlElement)
}

updateContent()

let myCart = [
    {
        album: 'Personal Jesus',
        quantity: '1'
    },
    {
        album: 'True Detective',
        quantity: '1'
    },
    {
        album: 'Bad Things',
        quantity: '1'
    },
    {
        album: 'Boy From The North',
        quantity: '1'
    },
    {
        album: 'Good Company',
        quantity: '1'
    },
    {
        album: 'Dark Country 3',
        quantity: '1'
    },
    {
        album: 'Rock Is Dead',
        quantity: '1'
    },
    {
        album: 'Small Town Murders',
        quantity: '1'
    },
    {
        album: 'Karma',
        quantity: '1'
    }
];

if (data[0].album === myCart[0].album){
    let num1 = data[0].price
    let num2 = myCart[0].quantity
    let product = num1 * num2
}

function itemAlreadyInCart(cd) {
    for (const item of myCart) {
        if (item.album === cd) {
            return true
        }
    }
    return false
}

function updateQuantity(cd) {
    myCart[0].quantity += 1
}

function insertItemToCart(cd) {
    myCart.push({
        album: cd,
        quantity: 1
    });
}

function cartIsEmpty() {
    return myCart.length === 0
}

console.log(myCart)

function addItemToCart(cd) {
    if (cartIsEmpty()) {
        insertItemToCart(cd);
    } else {
        if (itemAlreadyInCart(cd)) {
            updateQuantity(cd);
        } else {
            insertItemToCart(cd);
        }
    }
}

function addButtonEventListeners(elementId) {
    document.getElementById(elementId)
        .addEventListener('click', function () {
            addItemToCart(elementId)
        });
}

window.addEventListener('load', function () {
    for (const cd of data) {
        addButtonEventListeners(cd.album)
    }
})

window.addEventListener('load', function () {
    document.getElementById(data[0].album)
        .addEventListener('click', function () {
            const cd = data[0].album

            if (myCart.length === 0) {
                insertItemToCart(cd);
            } else {
                if (itemAlreadyInCart(cd)) {
                    updateQuantity(cd);
                } else {
                    insertItemToCart(cd);
                }
            }

            console.log(myCart)
        });

    document.getElementById(data[1].album)
        .addEventListener('click', function () {
            const cd = data[1].album

            if (myCart.length === 0) {
                insertItemToCart(cd);
            } else {
                if (itemAlreadyInCart(cd)) {
                    updateQuantity(cd);
                } else {
                    insertItemToCart(cd);
                }
            }
        });

    document.getElementById(data[2].album)
        .addEventListener('click', function () {
            const cd = data[2].album

            if (myCart.length === 0) {
                insertItemToCart(cd);
            } else {
                if (itemAlreadyInCart(cd)) {
                    updateQuantity(cd);
                } else {
                    insertItemToCart(cd);
                }
            }
        });
})


