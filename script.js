document.addEventListener("DOMContentLoaded", function() {
    // تحديد العناصر الخاصة بالأقسام
    const aboutSection = document.getElementById("about");
    const contactSection = document.getElementById("contact");

    // تحديد العناصر الخاصة بالأزرار أو الروابط
    const aboutLink = document.querySelector("a[href='#about']");
    const contactLink = document.querySelector("a[href='#contact']");

    // وظيفة تغيير اللون عند النقر على الرابط
    function highlightSection(section) {
        // إعادة تعيين اللون لجميع الأقسام
        aboutSection.style.backgroundColor = "#fff";
        contactSection.style.backgroundColor = "#fff";

        // تحديد اللون للقسم المطلوب
        section.style.backgroundColor = "#ffeaa7"; // لون مميز
    }

    // إضافة حدث النقر لكل رابط
    aboutLink.addEventListener("click", function() {
        highlightSection(aboutSection);
    });

    contactLink.addEventListener("click", function() {
        highlightSection(contactSection);
    });
});
