(function () {
    'use strict';

    // AdCash ACLIB scriptini yükle
    var script = document.createElement('script');

    script.id = 'aclib';
    script.type = 'text/javascript';
    script.src = 'https://acscdn.com/script/aclib.js';

    script.onload = function () {

        // ACLIB yüklendikten sonra AutoTag'i çalıştır
        if (window.aclib && typeof window.aclib.runAutoTag === 'function') {
            window.aclib.runAutoTag({
                zoneId: 'mszori8qdo'
            });
        }

    };

    document.head.appendChild(script);

})();
