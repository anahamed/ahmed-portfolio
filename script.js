document.addEventListener("DOMContentLoaded", function() {
    // تحديد الأقسام
    const aboutSection = document.getElementById("about");
    const contactSection = document.getElementById("contact");

    // روابط التنقل
    const aboutLink = document.querySelector("nav ul li a[href='#about']");
    const contactLink = document.querySelector("nav ul li a[href='#contact']");

    // وظيفة التمييز اللوني
    function highlightSection(section) {
        // إزالة التمييز من جميع الأقسام
        document.querySelectorAll("section").forEach(sec => sec.style.backgroundColor = "#fff");

        // تحديد اللون للقسم المختار
        section.style.backgroundColor = "#ffeaa7";
    }

    // التحقق من أن الروابط تم العثور عليها قبل إضافة الحدث
    if (aboutLink) {
        aboutLink.addEventListener("click", function(event) {
            event.preventDefault(); // منع الانتقال الفوري
            highlightSection(aboutSection);
        });
    }

    if (contactLink) {
        contactLink.addEventListener("click", function(event) {
            event.preventDefault(); // منع الانتقال الفوري
            highlightSection(contactSection);
        });
    }
});
