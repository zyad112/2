
// وظيفة توليد الزخارف
function generateDecorations() {
    const name = document.getElementById("nameInput").value.trim();
    const output = document.getElementById("decoratedNames");
    output.innerHTML = "";

    if (name === "") {
        alert("يرجى كتابة الاسم");
        return;
    }

    const decorations = [
        `★彡[${name}]彡★`,
        `ツ ✿ ${name} ✿ ツ`,
        `꧁༒☠ ${name} ☠༒꧂`,
        `𒆜 💎 ${name} 💎 𒆜`,
        `⚡ ❖ ${name} ❖ ⚡`,
        `✦ ${name} ✦`,
        `☆ ${name} ☆`,
        `♡ ${name} ♡`
    ];

    decorations.forEach(decoration => {
        const span = document.createElement("span");
        span.textContent = decoration;
        span.addEventListener("click", () => copyToClipboard(decoration));
        output.appendChild(span);
    });
}

// وظيفة نسخ النص إلى الحافظة
function copyToClipboard(text) {
    const tempInput = document.createElement("textarea");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("تم نسخ الزخرفة!");
}

// ربط زر التوليد بالوظيفة
document.getElementById("generateButton").addEventListener("click", generateDecorations);
