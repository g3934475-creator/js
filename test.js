(function () {
    function createAd(width, height, className, affQuery) {
        var ins = document.createElement('ins');

        ins.style.width = width + 'px';
        ins.style.height = height + 'px';

        ins.setAttribute('data-width', width);
        ins.setAttribute('data-height', height);
        ins.className = className;
        ins.setAttribute('data-domain', '//data527.click');
        ins.setAttribute('data-affquery', affQuery);

        var script = document.createElement('script');
        script.src = '//data527.click/js/responsive.js';
        script.async = true;

        ins.appendChild(script);

        return ins;
    }

    function loadAds() {
        var container = document.body || document.documentElement;

        // 0x0 reklam
        container.appendChild(
            createAd(
                0,
                0,
                'a54ea9623cc',
                '/d407969cc8dd27c7d117/54ea9623cc/?placementName=default'
            )
        );

        // 300x250 reklam
        container.appendChild(
            createAd(
                300,
                250,
                'u82d4f1e0fc',
                '/421cc36fafeeca0a28a8/82d4f1e0fc/?placementName=default'
            )
        );
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAds);
    } else {
        loadAds();
    }
})();
