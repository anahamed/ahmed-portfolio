document.addEventListener("DOMContentLoaded", function() {
    console.log("الموقع جاهز للعمل!");

    // تأثير تمرير سلس عند الضغط على الروابط
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });
});