document.addEventListener('DOMContentLoaded', () => {
    const countElement = document.getElementById('count');
    let count = 0;

    // أزرار زيادة العدد وإعادة العدد إلى الصفر
    const increaseButton = document.getElementById('increase-count');
    const resetButton = document.getElementById('reset-count');
    
    increaseButton.addEventListener('click', () => {
        count++;
        countElement.textContent = count;
    });

    resetButton.addEventListener('click', () => {
        count = 0;
        countElement.textContent = count;
    });

    // قائمة الأدعية
    const duas = [
        "سبحان الله وبحمده، سبحان الله العظيم",
        "اللهم صل على محمد وآل محمد",
        "لا إله إلا الله",
        "اللهم اغفر لي ولأبوي ولأهل بيتي وللمؤمنين والمؤمنات",
        // أضف المزيد من الأدعية هنا
    ];

    let currentIndex = 0;  // لتتبع الدعاء الحالي

    // التنقل بين الأدعية عند الضغط على الأسهم
    const prevButton = document.getElementById('prev-dua');
    const nextButton = document.getElementById('next-dua');
    const duaDisplay = document.getElementById('current-dua');

    // الزر السابق
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : duas.length - 1;
        duaDisplay.textContent = duas[currentIndex];
    });

    // الزر التالي
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < duas.length - 1) ? currentIndex + 1 : 0;
        duaDisplay.textContent = duas[currentIndex];
    });

    // نافذة المشاركة
    const shareButton = document.getElementById('share');
    const modal = document.getElementById('shareModal');
    const closeModal = document.getElementById('closeModal');

    // فتح نافذة المشاركة
    shareButton.addEventListener('click', () => {
        modal.style.display = "flex";  // عرض نافذة المشاركة
    });

    // إغلاق نافذة المشاركة
    closeModal.addEventListener('click', () => {
        modal.style.display = "none";  // إخفاء نافذة المشاركة
    });

    // عند النقر خارج النافذة المنبثقة، إغلاقها
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // مشاركة عبر واتساب
    const whatsappButton = document.getElementById('whatsapp-share');
    whatsappButton.addEventListener('click', () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent("إليك هذا الموقع الرائع للتسبيح والأدعية: ");
        const whatsappUrl = `https://wa.me/?text=${text}${url}`;
        window.open(whatsappUrl, '_blank');
    });

    // نسخ رابط الموقع
    const copyLinkButton = document.getElementById('copy-link');
    copyLinkButton.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => alert('تم نسخ الرابط!'))
            .catch(err => alert('فشل في نسخ الرابط.'));
    });
});