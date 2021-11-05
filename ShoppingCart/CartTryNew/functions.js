class RecordsToBuy {
    constructor(id, name, image, price) {
        this.id = id
        this.name = name
        this.image = image
        this.price = price
        this.quantity = 1
        this.totalSum = price
    }
}

let myCart = []
let totalSumCart = 0
let quantityInCart = 0

function buttonBuy(id, name, image, price) {
    let exist = updateRecordsInCart(id);

    if (exist === false) {
        let newRecord = new RecordsToBuy(id, name, image, price)
        myCart.push(newRecord)
    }
    renderCart()
}

function buttonRemove(id, name, image, price) {
    let exist = updateRecordsInCart(id);

    if (exist === false) {
        let removeRecord = 0
        myCart.push(removeRecord)
    }
    renderCart()
}

function renderCart() {
    let renderCartRecords = [];
    for (const item of myCart) {
        renderCartRecords.push(showRecord(item))
    }

    document.getElementById('allAddedRecords').innerHTML = renderCartRecords

    calculateTotalSumInCart()
    calculateShipping()
    calculateTotalQuantityInCart()
}

function showRecord(record) {
    return `
    <article id="recordsToBuy${record.id}">
            <img src=${record.image} alt=${record.name} class="srcRecords" id=${record.image}>
            <p>${record.name}</p>
            <p>Pris: ${record.price} kr</p>
            <button class="btn-remove" onclick="buttonRemove('${record.id}', '${record.name}', '${record.image}', '${record.price}')">
            X</button>
            <input id="quantity${record.id}" type="number" onclick="addMore('${record.id}')" value="${record.quantity}"/>
            <p id="totalSum${record.id}">Total: ${record.totalSum}:-</p>
    </article> 
 `;
}

function showTotalSum(totalSum) {
    return `
    <article id="totalSumOfAddedRecords">
            <p>Total: ${totalSum} kr</p>
    </article> 
 `;
}

function showTotalQuantity(quantity) {
    return `
    <article id="totalQuantityOfAddedRecords">
            <p>Quantity: ${quantity}</p>
    </article> 
 `;
}

function showShippingCost(shippingText) {
    return `
    <article id="totalShippingCostOfAddedRecords">
            <p>${shippingText}</p>
    </article> 
 `;
}

function openMenu() {
    document.getElementById('dropdown')
        .classList.toggle('show')
}

function updateRecordsInCart(id) {
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

function updateRecordsInCartWithNewValue(id, newValue) {
    let totalSumOfRecords = 0
    for (const item of myCart) {
        if (item.id === id) {
            item.quantity = newValue
            item.totalSum = item.price * item.quantity;
            totalSumOfRecords = item.totalSum;
        }
    }
    return totalSumOfRecords
}

function calculateTotalSumInCart() {
    totalSumCart = 0

    for (const item of myCart) {
        totalSumCart += parseInt(item.totalSum)
    }
    document.getElementById('totalSumOfAddedRecords').innerHTML = showTotalSum(totalSumCart)
}

function calculateShipping() {
    let costToFreeFreight = 259 - totalSumCart;
    let costTest = ""

    if (costToFreeFreight <= 0) {
        costTest = "You have free shipping"
    } else {
        costTest = "You have " + costToFreeFreight + " kr left to free shipping"
    }

    document.getElementById('totalShippingOfAddedRecords').innerHTML = showShippingCost(costTest)
}

function calculateTotalQuantityInCart() {
    quantityInCart = 0

    for (const item of myCart) {
        quantityInCart += parseInt(item.quantity)
    }

    document.getElementById('totalQuantityOfAddedRecords').innerHTML = showTotalQuantity(quantityInCart)
}

function addMore(id) {
    let newValue = document.getElementById("quantity" + id).value;
    if (parseInt(newValue) <= 0) {
        for (let i = 0; i < myCart.length; i++) {
            if (myCart[i].id === id) {
                myCart.splice(i, 1);
                document.getElementById("recordsToBuy" + id).remove()
            }
        }
    } else {
        let totalSum = updateRecordsInCartWithNewValue(id, newValue)
        if (totalSum) {
            document.getElementById("totalSum" + id).innerText = "Total: " + totalSum + " kr";
        }
    }
    calculateTotalSumInCart()
    calculateShipping()
    calculateTotalQuantityInCart()
}

function buy() {
    alert('Thank you for your purchase')
}

renderCart()
