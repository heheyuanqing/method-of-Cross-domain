function jsonp(param){
    let options = param||{},
        ohead = document.getElementsByTagName("head")[0],
        oscript = document.createElement("script"),
        url =param.url||"",
        callback=("jsonp_"+Math.random()).replace(".",""),
        json=callback;
    url = url +"?appkey="+options.appkey+"&shouji="+options.tel+"&callback="+callback;

    oscript.src=url;
    ohead.appendChild(oscript);

    window[callback] = function (json) {
        ohead.removeChild(oscript);
        window[callback] = null;
        options.success && options.success(json);
    };
}