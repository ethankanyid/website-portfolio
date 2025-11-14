const pdfChoice = document.getElementById('pdf-choice');
const pdfFrame = document.getElementById('pdf-frame');

pdfChoice.addEventListener('change', () => {
  const selectedPDF = pdfChoice.value;
  pdfFrame.src = selectedPDF;
});
