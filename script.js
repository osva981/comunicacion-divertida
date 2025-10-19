function encodeText() {
    const inputText = document.getElementById('inputText').value;
    try {
        const encodedText = btoa(unescape(encodeURIComponent(inputText)));
        document.getElementById('outputText').value = encodedText;
        animateResult('outputText');
    } catch (error) {
        alert('Error al codificar el texto. Asegúrate de que no contenga caracteres especiales no compatibles.');
    }
}

function decodeText() {
    const inputText = document.getElementById('inputText').value;
    try {
        const decodedText = decodeURIComponent(escape(atob(inputText)));
        document.getElementById('outputText').value = decodedText;
        animateResult('outputText');
    } catch (error) {
        alert('Texto no válido para decodificar. Asegúrate de que sea un texto codificado en Base64.');
    }
}

function animateResult(elementId) {
    const element = document.getElementById(elementId);
    element.style.transition = 'none';
    element.style.transform = 'scale(0.95)';
    element.style.opacity = '0.5';
    setTimeout(() => {
        element.style.transition = 'all 0.3s ease';
        element.style.transform = 'scale(1)';
        element.style.opacity = '1';
    }, 50);
}