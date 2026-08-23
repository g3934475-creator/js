(function () {
    'use strict';

    function addScript(src, attributes) {
        var script = document.createElement('script');

        script.src = src;

        if (attributes) {
            Object.keys(attributes).forEach(function (key) {
                script.setAttribute(key, attributes[key]);
            });
        }

        document.body.appendChild(script);

        return script;
    }

    function addContainer(id, width, height) {
        var container = document.createElement('div');

        container.id = id;
        container.style.width = width + 'px';
        container.style.height = height + 'px';
        container.style.margin = '10px auto';

        document.body.appendChild(container);

        return container;
    }

    /*
     * Profitablerate
     */
    var profitContainer = addContainer(
        'container-386d9b05b9a89638faa0f1c3f813b101',
        300,
        250
    );

    var profitScript = document.createElement('script');

    profitScript.async = true;
    profitScript.setAttribute('data-cfasync', 'false');
    profitScript.src =
        'https://pl30998295.profitableratecpmnetwork.com/386d9b05b9a89638faa0f1c3f813b101/invoke.js';

    profitContainer.appendChild(profitScript);


    /*
     * HighRevenue 300x250
     */
    var ad1 = addContainer(
        'highrevenue-300x250',
        300,
        250
    );

    window.atOptions = {
        key: 'c9f2a5c9120f2e09c7bb0f50f1c1d1e5',
        format: 'iframe',
        height: 250,
        width: 300,
        params: {}
    };

    var script1 = document.createElement('script');
    script1.src =
        'https://www.highrevenueformat.com/c9f2a5c9120f2e09c7bb0f50f1c1d1e5/invoke.js';

    ad1.appendChild(script1);


    /*
     * HighRevenue 468x60
     */
    var ad2 = addContainer(
        'highrevenue-468x60',
        468,
        60
    );

    window.atOptions = {
        key: '9ed7e01359b965d70cc280115e5b9ad6',
        format: 'iframe',
        height: 60,
        width: 468,
        params: {}
    };

    var script2 = document.createElement('script');
    script2.src =
        'https://www.highrevenueformat.com/9ed7e01359b965d70cc280115e5b9ad6/invoke.js';

    ad2.appendChild(script2);


    /*
     * HighRevenue 160x300
     */
    var ad3 = addContainer(
        'highrevenue-160x300',
        160,
        300
    );

    window.atOptions = {
        key: 'fb5e5c9e415d0fc83436c918ac51249c',
        format: 'iframe',
        height: 300,
        width: 160,
        params: {}
    };

    var script3 = document.createElement('script');
    script3.src =
        'https://www.highrevenueformat.com/fb5e5c9e415d0fc83436c918ac51249c/invoke.js';

    ad3.appendChild(script3);

})();
