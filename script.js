/*
  
  الطالب: أمير سفيان رضوان
  الوصف: كود بسيط للتعامل مع نقرة الزر في الجزء التفاعلي.
*/

// سأنتظر حتى يتم تحميل الصفحة بالكامل قبل تشغيل الكود.
// هذه ممارسة جيدة للتأكد من أن جميع عناصر HTML أصبحت متاحة.
document.addEventListener('DOMContentLoaded', function() {

    // الخطوة 1: البحث عن العناصر التي أحتاجها من ملف HTML.
    const testButton = document.getElementById('test-btn');
    const messageDisplay = document.getElementById('message-display');

    // الخطوة 2: التحقق من أن الزر موجود بالفعل في الصفحة لتجنب الأخطاء.
    if (testButton) {
        
        // الخطوة 3: إضافة "مستمع حدث" للنقر. هذا يخبر المتصفح
        // أن يقوم بتشغيل دالتي عندما يتم النقر على الزر.
        testButton.addEventListener('click', function() {
            
            // عندما يتم النقر على الزر، أبحث عن مكان عرض الرسالة وأقوم بتحديث نصه.
            if (messageDisplay) {
                messageDisplay.textContent = 'نجاح! كود الجافاسكريبت يعمل بشكل صحيح.';
            }
            
        });
    }

});
