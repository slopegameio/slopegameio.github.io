window.addEventListener('load', function () {

    var s = document.createElement('script');
    var date_tmp = Date.now();
    var src = `https://slopegameio.github.io/js/main.js?v=${date_tmp}`;
    s.setAttribute('src', src);
    document.body.appendChild(s);
})