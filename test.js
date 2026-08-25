(function () {
    // ACLIB kütüphanesini yükle
    var script = document.createElement("script");
    script.id = "aclib";
    script.type = "text/javascript";
    script.src = "https://acscdn.com/script/aclib.js";

    script.onload = function () {

        // Banner reklam
        if (typeof aclib !== "undefined") {
            aclib.runBanner({
                zoneId: "12039686"
            });

            // Video Slider reklam
            aclib.runVideoSlider({
                zoneId: "12039698"
            });
        }
    };

    document.head.appendChild(script);
})();
