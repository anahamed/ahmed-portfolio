document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById("about");
    const contactSection = document.getElementById("contact");

    const aboutLink = document.querySelector("a[href='#about']");
    const contactLink = document.querySelector("a[href='#contact']");

    function highlightSection(section) {
        document.querySelectorAll("section").forEach(sec => sec.style.backgroundColor = "#fff");

        section.style.backgroundColor = "#EAD7C0"; // بيج دافئ يناسب الصفحة
    }

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
