document.addEventListener("DOMContentLoaded", function() {
    // تحديد الأقسام
    const aboutSection = document.getElementById("about");
    const contactSection = document.getElementById("contact");

    // روابط التنقل
    const aboutLink = document.querySelector("a[href='#about']");
    const contactLink = document.querySelector("a[href='#contact']");

    // وظيفة التمييز اللوني
    function highlightSection(section) {
        // إعادة تعيين الألوان
        aboutSection.style.backgroundColor = "#fff";
        contactSection.style.backgroundColor = "#fff";

        // تحديد لون جديد للقسم المختار
        section.style.backgroundColor = "#ffeaa7"; // لون مميز
    }

    // إضافة الحدث عند النقر
    aboutLink.addEventListener("click", function() {
        highlightSection(aboutSection);
    });

    contactLink.addEventListener("click", function() {
        highlightSection(contactSection);
    });
});
