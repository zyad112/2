function decorateText() {
  const textInput = document.getElementById('text-input');
  const fontFamilySelect = document.getElementById('font-family');
  const fontSizeInput = document.getElementById('font-size');
  const colorInput = document.getElementById('color');
  const decorationSelect = document.getElementById('decoration');
  const resultDiv = document.getElementById('result');

  // القيم المدخلة
  const text = textInput.value.trim();
  const fontFamily = fontFamilySelect.value;
  const fontSize = `${fontSizeInput.value}px`;
  const color = colorInput.value;
  const decoration = decorationSelect.value;

  if (!text) {
    resultDiv.innerHTML = '<p style="color: red;">الرجاء إدخال نص لتزيينه</p>';
    return;
  }

  // إعداد النص المزخرف
  const styledText = document.createElement('p');
  styledText.style.fontFamily = fontFamily;
  styledText.style.fontSize = fontSize;
  styledText.style.color = color;
  styledText.className = decoration; // تطبيق الزخرفة المختارة
  styledText.textContent = text;

  resultDiv.innerHTML = ''; // تفريغ النتائج السابقة
  resultDiv.appendChild(styledText);
}