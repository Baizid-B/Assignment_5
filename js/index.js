
// noakhali-donate-btn
document.getElementById('noakhali-donate-btn').addEventListener("click", function(){

    const input_Field = document.getElementById('inputField').value;
    const myBalance = parseFloat(document.getElementById('balance').innerText);
    const noakhaliDonateBalance = parseFloat(document.getElementById('noakhali-donate-balance').innerText);

    // Convert inputValue to a number
    const numberValue = parseFloat(input_Field);


    if (!isNaN(numberValue) && numberValue >= 1 && myBalance >= 0 && input_Field <= myBalance) {
        const totalAmount = myBalance - numberValue +' BDT';
        document.getElementById('balance').innerText = totalAmount;
        const total = noakhaliDonateBalance + numberValue +' BDT';
        document.getElementById('noakhali-donate-balance').innerText = total;
        getModal();


        // add to transaction history
        const li = document.createElement('li');
        li.innerText = `${numberValue +' Taka'} is ${haddingName1.innerText} `;
        document.getElementById('history-container').appendChild(li);

        const p = document.createElement('p');
        p.innerText = new Date();
        document.getElementById('history-container').appendChild(p);

    }else {
        alert("Invalid input or insufficient balance");
    }
});
// noakhali-donate-btn