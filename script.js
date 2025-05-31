document.addEventListener("DOMContentLoaded", function() {
    // تحديد الأقسام
    const aboutSection = document.getElementById("about");
    const contactSection = document.getElementById("contact");

    // روابط التنقل
    const aboutLink = document.querySelector("a[href='#about']");
    const contactLink = document.querySelector("a[href='#contact']");

    // وظيفة التمييز اللوني عند النقر
    function highlightSection(section) {
        document.querySelectorAll("section").forEach(sec => sec.style.backgroundColor = "#fff");
        section.style.backgroundColor = "#EAD7C0"; // لون بيج دافئ يناسب التصميم
    }

    // إضافة الحدث عند النقر
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

    // فتح الصورة في نافذة جديدة عند النقر
    document.querySelectorAll('.expandable-image').forEach(img => {
        img.addEventListener('click', function() {
            window.open(this.src, '_blank'); // فتح الصورة في صفحة جديدة
        });
    });
});
