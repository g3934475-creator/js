(function () {
    var frame = document.createElement("div");

    frame.id = "frame";
    frame.style.cssText =
        "width:100%;margin:auto;position:relative;z-index:99998;";

    var iframe = document.createElement("iframe");

    iframe.setAttribute("data-aa", "2453181");
    iframe.src = "//acceptable.a-ads.com/2453181/?size=Adaptive";
    iframe.style.cssText =
        "border:0;padding:0;width:70%;height:auto;overflow:hidden;display:block;margin:auto;";

    frame.appendChild(iframe);

    document.body.appendChild(frame);
})();
