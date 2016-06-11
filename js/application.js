(function(Reveal){
    function once(callback) {
        var count = 0;
        return function(){
            if (count++ === 0) {
                callback();
            }
        };
    }

    Reveal.addEventListener('ready', function(){
        console.log('Reveal is ready to rock');
    });

    Reveal.addEventListener('brainbow', once(function(){
        var container = document.getElementById('brainbow-container');
        var app = Elm.Main.embed(container);
    }));
})(Reveal);
