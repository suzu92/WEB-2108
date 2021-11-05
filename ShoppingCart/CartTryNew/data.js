class Record {
    constructor(id, name, image, price) {
        this.id = id
        this.name = name
        this.image = image
        this.price = price
    }
}

let data = [
    new Record(
        'one',
        "True Detective",
        "img/angryriver.jpg",
        199
    ),
    new Record(
        'two',
        "Jace Everett",
        "img/badthings.jpg",
        189
    ),
    new Record(
        'tree',
        "Monica Heldal",
        "img/conmancoming.jpg",
        149
    ),
    new Record(
        'four',
        "The Dead South",
        "img/goodcompany.jpg",
        179
    ),
    new Record(
        'five',
        "Blue Saraceno",
        "img/gravedigger.jpg",
        139
    ),
    new Record(
        'six',
        "Johnny Cash",
        "img/personaljesus.jpg",
        189
    ),
    new Record(
        'seven',
        "Rock Is Dead",
        "img/raisehell.jpg",
        179
    ),
    new Record(
        'eight',
        "Small Town Murders",
        "img/rosie.jpg",
        199
    )
]

function showRecord(record){
    return `
    <article id=recordsToBuy>
            <img src=${record.image} alt=${record.name} class="srcRecords" id=${record.image}>
            <p>${record.name}</p>
            <p>Price: ${record.price} kr</p>
            <button onclick="buttonBuy('${record.id}', '${record.name}', '${record.image}', '${record.price}')">
            Add To Cart
</button>
    </article> 
 `;
}

let renderRecords = [];
for (const item of data){
    renderRecords.push(showRecord(item))
}
document.getElementById('allRecords').innerHTML = renderRecords;