document.getElementById('buyNow1').addEventListener('click', function(){
    const priceTxt = document.getElementById('Price1');
    const priceStr = priceTxt.innerText;
    const Price = parseFloat(priceStr);

    const totalTxt = document.getElementById('total');
    const totalStr = totalTxt.innerText;
    const total = parseFloat(totalStr);
    

    const totalPrice = total + Price;
    totalTxt.innerText = totalPrice;
    // console.log(totalPrice);
    const list  = document.getElementById('list');
    const li = document.createElement('li');
    li.innerText = "Pink Flower: " + Price;
    list.appendChild(li);
})
document.getElementById('buyNow2').addEventListener('click', function(){
    const priceTxt = document.getElementById('Price2');
    const priceStr = priceTxt.innerText;
    const Price = parseFloat(priceStr);

    const totalTxt = document.getElementById('total');
    const totalStr = totalTxt.innerText;
    const total = parseFloat(totalStr);
    

    const totalPrice = total + Price;
    totalTxt.innerText = totalPrice;
    // console.log(totalPrice);
    const list  = document.getElementById('list');
    const li = document.createElement('li');
    li.innerText = "Red Flower: " + Price;
    list.appendChild(li);
})
document.getElementById('buyNow3').addEventListener('click', function(){
    const priceTxt = document.getElementById('Price3');
    const priceStr = priceTxt.innerText;
    const Price = parseFloat(priceStr);

    const totalTxt = document.getElementById('total');
    const totalStr = totalTxt.innerText;
    const total = parseFloat(totalStr);
    

    const totalPrice = total + Price;
    totalTxt.innerText = totalPrice;
    // console.log(totalPrice);
    const list  = document.getElementById('list');
    const li = document.createElement('li');
    li.innerText = "Yellow Flower: " + Price;
    list.appendChild(li);
})