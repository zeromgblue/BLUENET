    function setLanguage(lang) {
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll("[data-th]");

    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
    }

    // ค่าเริ่มต้นภาษาไทย
    setLanguage("th");
