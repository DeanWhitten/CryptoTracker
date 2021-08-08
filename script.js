
//array that holds the coins & their data
let cryptoCoin = [];

//coinCard constructor
function coinCard (cRank, cName, cPrice, cId){
    this.cRank = rank;
    this.cName = name;
    this.cPrice = price;
    this.cID = id;
};

//adds coin to cryptoCoin array
function addData(dataRank, dataName, dataPrice, dataPercentChange){
    coinCard.cRank = dataRank;
    coinCard.cName = dataName;
    coinCard.cPrice = dataPrice;
    coinCard.cId = cryptoCoin.length;
    coinCard.cPercent = dataPercentChange;

    cryptoCoin.push([coinCard.cRank, coinCard.cName, coinCard.cPrice, cryptoCoin.id, dataPercentChange]);

    buildCard(coinCard.cRank, coinCard.cName, coinCard.cPrice, cryptoCoin.id, dataPercentChange);
}


console.log(cryptoCoin); //test line

function buildCard(bRank, bName, bPrice, bId, bPercent){
    let coinObject = document.createElement("div");
    coinObject.setAttribute('id', 'card' );


    const newRank = document.createElement('h5');
    const newName = document.createElement('h4');
    const newPrice = document.createElement('h6');

    const insertRank = document.createTextNode(cryptoCoin[bRank-1][0]);
    const insertName = document.createTextNode(cryptoCoin [bRank-1][1]);
    const insertPrice = document.createTextNode(cryptoCoin[bRank-1][2]);

    newRank.setAttribute('id', 'rank');
    newName.setAttribute('id', 'name');
    newPrice.setAttribute('id', 'price');


    newRank.appendChild(insertRank);
    newName.appendChild(insertName);
    newPrice.appendChild(insertPrice);

    coinObject.appendChild(newRank);
    coinObject.appendChild(newName);
    coinObject.appendChild(newPrice);

    const container =document.getElementById("container");
    container.appendChild(coinObject);

    //parses string to float
    let percent = parseFloat(bPercent);
    console.log(percent);


//changes background color based on negative or positive precentage changes hourly
    if (percent > - 0.00 ){
        coinObject.style.backgroundColor = "#57B931"; //green
    } else{
        coinObject.style.backgroundColor = "#D31512"; //red
    }
}


function loadData(){
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://api.coinlore.net/api/tickers/', true)

    request.onload = function () {
// Begin accessing JSON data here
        var data = JSON.parse(this.response)
        data = data.data;

        data.forEach((coin) => {
            if(coin.rank <=20 ){
                // Log each coin
                console.log("Name: ", coin.name, "  Price:", coin.price_usd, "  Rank:", coin.rank , coin.percent_change_1h);//added coin % change
                addData(coin.rank, coin.name, coin.price_usd, coin.percent_change_1h);
            }

        })
    }
// Send request
    request.send();
}


//Keeps the data live update

//window.setInterval(updateData, 1000);

loadData();