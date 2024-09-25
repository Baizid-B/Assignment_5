// quota-donate-btn
document.getElementById('quota-donate-btn').addEventListener("click", function(){

    const input_Field = document.getElementById('inputField3').value;
    const myBalance = parseFloat(document.getElementById('balance').innerText);
    const quotaDonateBalance = parseFloat(document.getElementById('quota-donate-balance').innerText);

    // Convert inputValue to a number
    const numberValue = parseFloat(input_Field);


    if (!isNaN(numberValue) && numberValue >= 1 && myBalance >= 0 && input_Field <= myBalance) {
        const totalAmount = myBalance - numberValue +' BDT';
        document.getElementById('balance').innerText = totalAmount;
        const total = quotaDonateBalance + numberValue +' BDT';
        document.getElementById('quota-donate-balance').innerText = total;

        // add to Modal
        alert("Congrates! Your donated Successfully")

        // add to transaction history
        const li = document.createElement('li');
        li.innerText = `${numberValue +' Taka'} is ${haddingName3.innerText} `;
        document.getElementById('history-container').appendChild(li);

        const p = document.createElement('p');
        p.innerText = new Date();
        document.getElementById('history-container').appendChild(p);
        
        
    }else {
        alert("Invalid input or insufficient balance");
    }
});
