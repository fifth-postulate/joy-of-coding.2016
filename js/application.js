/* globals Reveal: false, document: false, Elm: false */
(function(Reveal){
    'use strict';

    function once(callback) {
        var count = 0;
        return function(){
            if (count++ === 0) {
                callback();
            }
        };
    }

    Reveal.addEventListener('brainbow', once(function(){
        var container = document.getElementById('brainbow-container');
        Elm.Main.embed(container);
    }));
})(Reveal);
