let form = document.getElementById('form'),
inputs = document.getElementsByTagName('input'),
theName = document.getElementById('name'),
theNumber = document.getElementById('number'),
histories = document.getElementsByClassName('histories')[0],
totalAmount = document.querySelector('#total span'),
ItemName, ItemAmount
function addNewAmount(e){
    e.preventDefault()
    ItemName = theName.value
    ItemAmount = theNumber.value
    if(ItemName === ''){
        theName.classList.add('error')
    }
    if(ItemAmount === ''){
        theNumber.classList.add('error')
    }
    if(ItemName != '' && ItemAmount != ''){
        var single_history_html = `<div class="single_history"><p>${ItemName}</p><p>৳${ItemAmount}</p></div>`
        var newTotalAmount = parseInt(totalAmount.innerText) + parseInt(ItemAmount)
        totalAmount.innerText = newTotalAmount
        histories.insertAdjacentHTML('beforeend', single_history_html)
        form.reset()
    }
}
form.addEventListener('submit', addNewAmount)
for(var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('focus', function(){
        this.classList.remove('error')
    })
}