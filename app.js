
// update case function

function updateProductNumber(product,price,isIncreasing){

    const productInput = document.getElementById(product+'-number');
    let caseNumber = parseInt(productInput.value) ;
    
    if(isIncreasing == true){

        caseNumber = caseNumber + 1
    }
    else if( caseNumber > 0){

        caseNumber = caseNumber - 1
    }
    productInput.value = caseNumber

    // update case total

    const updatedProductPrice = document.getElementById(product+'-price');
    const casePriceNumber = parseInt(updatedProductPrice.innerText);
    const caseTotalPrice = caseNumber * price;
    updatedProductPrice.innerText = caseTotalPrice

    calculateTotal();

    
}

// calculation

function getInputValue(product){
    const productInput = document.getElementById(product+'-number');
    const productNumber = parseInt(productInput.value)
    return productNumber
}

function calculateTotal(){
   
    const phoneTotal = getInputValue('phone') * 1219
    const caseTotal = getInputValue('case') * 59
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10 ;
    const totalAmount = subTotal + taxAmount;

    // update to the html
     document.getElementById('sub-total').innerText = subTotal;
     document.getElementById('tax-amount').innerText = taxAmount;
     document.getElementById('total-price').innerText = totalAmount;

}


// handle increse decrese events for phone

//increment btn event for phone
document.getElementById('phone-plus').addEventListener('click', function(){

   const incresementNumber = updateProductNumber('phone',1219,true);   // fn call


    
 
 })

 // phone decrement

 document.getElementById('phone-minus').addEventListener('click', function(){

 
    const decrementNumber = updateProductNumber('phone',1219,false) // fn call
    
})



//incresement plus button for case

document.getElementById('case-plus').addEventListener('click', function(){

   const incresementNumber = updateProductNumber('case',59,true);   // fn call

})

// decrement minus button for case

document.getElementById('case-minus').addEventListener('click', function(){

    const decrementNumber = updateProductNumber('case',59,false) // fn call
    
})



