
function showResult(option) {
    var resultDiv = document.getElementById('result');
    var buttons = document.querySelectorAll('button');

    buttons.forEach(function(button) {
        button.classList.remove('clicked');
    });

    if (option === 'advertencia') {
        resultDiv.innerHTML = '<p>Você tomou advertência.</p>';
    } else if (option === 'emprestada') {
        resultDiv.innerHTML = '<p>Parabéns você conseguiu trabalhar normalmente hoje.</p>';
    }

    event.target.classList.add('clicked');
}
    

