const inputTexto = document.getElementById('texto');
const botaoTransformar = document.getElementById('transformar');
const resultadoBox = document.getElementById('resultado');

botaoTransformar.addEventListener('click', () => {
  const texto = inputTexto.value;
  const modo = document.querySelector('input[name="modo"]:checked').value;

  if (!texto) {
    resultadoBox.textContent = 'Por favor, digite um texto antes de transformar.';
    resultadoBox.classList.add('erro');
    return;
  }

  resultadoBox.classList.remove('erro');
  resultadoBox.textContent = modo === 'upper' ? texto.toUpperCase() : texto.toLowerCase();
});
