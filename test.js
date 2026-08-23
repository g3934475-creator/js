(function () {

    // ==============================
    // 1. Profitablerate CPM
    // ==============================

    var profitContainer = document.createElement('div');
    profitContainer.id = 'container-386d9b05b9a89638faa0f1c3f813b101';

    document.body.appendChild(profitContainer);

    var profitScript = document.createElement('script');
    profitScript.async = true;
    profitScript.setAttribute('data-cfasync', 'false');
    profitScript.src =
        'https://pl30998295.profitableratecpmnetwork.com/386d9b05b9a89638faa0f1c3f813b101/invoke.js';

    profitContainer.parentNode.insertBefore(
        profitScript,
        profitContainer
    );


    // ==============================
    // HighRevenue reklamları
    // ==============================

    var ads = [
        {
            key: 'c9f2a5c9120f2e09c7bb0f50f1c1d1e5',
            width: 300,
            height: 250
        },
        {
            key: '9ed7e01359b965d70cc280115e5b9ad6',
            width: 468,
            height: 60
        },
        {
            key: 'fb5e5c9e415d0fc83436c918ac51249c',
            width: 160,
            height: 300
        }
    ];


    function loadAd(index) {

        if (index >= ads.length) {
            return;
        }

        var ad = ads[index];

        // Reklam alanı
        var container = document.createElement('div');

        container.style.width = ad.width + 'px';
        container.style.height = ad.height + 'px';
        container.style.margin = '10px auto';

        document.body.appendChild(container);


        // atOptions
        window.atOptions = {
            'key': ad.key,
            'format': 'iframe',
            'height': ad.height,
            'width': ad.width,
            'params': {}
        };


        // invoke.js
        var script = document.createElement('script');

        script.src =
            'https://www.highrevenueformat.com/' +
            ad.key +
            '/invoke.js';

        script.onload = function () {
            loadAd(index + 1);
        };

        script.onerror = function () {
            loadAd(index + 1);
        };

        container.appendChild(script);
    }


    loadAd(0);

})();
