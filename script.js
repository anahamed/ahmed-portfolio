document.addEventListener("DOMContentLoaded", function() {
    // تحديد الأقسام
    const aboutSection = document.getElementById("about");
    const contactSection = document.getElementById("contact");

    // روابط التنقل
    const aboutLink = document.querySelector("a[href='#about']");
    const contactLink = document.querySelector("a[href='#contact']");

    // وظيفة التمييز اللوني عند النقر
    function highlightSection(section) {
        // إزالة التمييز من جميع الأقسام
        document.querySelectorAll("section").forEach(sec => sec.style.backgroundColor = "#fff");

        // تحديد اللون الجديد (بني)
        section.style.backgroundColor = "#8B5E3C"; // بني مميز يناسب التصميم
    }

    // إضافة الحدث عند النقر على الرابط
    if (aboutLink) {
        aboutLink.addEventListener("click", function(event) {
            event.preventDefault();
            highlightSection(aboutSection);
        });
    }

    if (contactLink) {
        contactLink.addEventListener("click", function(event) {
            event.preventDefault();
            highlightSection(contactSection);
        });
    }
});
