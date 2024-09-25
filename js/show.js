function showSectionById(id){
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

document.getElementById('donation-btn').addEventListener('click', function(){
    showSectionById('donation')
});

document.getElementById('history-btn').addEventListener('click', function(){
    showSectionById('history')
});