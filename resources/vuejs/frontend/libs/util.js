let util = {};

util.title = function (title) {
    title = title ? title : '微商城';
    window.document.title = title;
    let ua = navigator.userAgent;
    if (/\bMicroMessenger\/([\d\.]+)/.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
        var i = document.createElement('iframe');
        i.src = '/favicon.ico';
        i.style.display = 'none';
        i.onload = function () {
            setTimeout(function () {
                i.remove();
            }, 9);
        };
        document.body.appendChild(i);
    }
};

util.alert = function (content) {
    window.alert(content);
};

export default util;