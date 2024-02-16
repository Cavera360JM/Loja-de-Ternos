function showResult(option) {
    var resultDiv = document.getElementById('result');
    if (option === 'advertencia') {
        resultDiv.innerHTML = '<p>Você escolheu ir sem camiseta e tomar advertência.</p>';
    } else if (option === 'emprestada') {
        resultDiv.innerHTML = '<p>Você escolheu pegar emprestada com a empresa ou com algum colega de trabalho.</p>';
    }
}
