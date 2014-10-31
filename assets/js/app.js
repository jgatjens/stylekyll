(function (window, document) {
    /**
     * Get the SVG symbols and plug them into the DOM for <use>.
     * Defer until DOMContentLoaded, because it is an enhancement.
     */
    window.addEventListener('DOMContentLoaded', function (event) {
        var xhr = new XMLHttpRequest();

        var url = window.location,
            svg_path = '/';

        if (url.pathname.indexOf('hangar-cafebritt') === 1) {
          svg_path = '/stylekyll/';
        }



        xhr.open('GET', svg_path + 'assets/svg/symbols.svg?chache=' + new Date().getTime(), true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var resultEl = document.createElement('div');
                resultEl.style.display = 'none';
                resultEl.innerHTML = xhr.responseText;
                document.body.appendChild(resultEl);
            }
        };
        xhr.send();
    });
})(window, document);
