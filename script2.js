document.addEventListener("DOMContentLoaded", function() {
    // التحقق من اسم الصفحة لتحديد التنفيذ
    const currentPage = window.location.pathname.split("/").pop(); 

    if (currentPage === "project1.html" || currentPage === "project2.html") {
        console.log("📌 يعمل على الصفحة:", currentPage);

        // فتح الصورة في نافذة جديدة عند النقر عليها
        document.querySelectorAll('.project-images img').forEach(img => {
            img.addEventListener('click', function() {
                window.open(this.src, '_blank'); // فتح الصورة في صفحة جديدة
            });
        });

        // تغيير لون الخلفية عند النقر على العنوان
        document.querySelector("h1").addEventListener("click", function() {
            document.body.style.backgroundColor = "#f0e5cf"; // تغيير اللون عند النقر على العنوان
        });
    }
});