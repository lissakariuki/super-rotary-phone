var face = 1;
let side = document.getElementById("#cube")

var show = function() {
    $('side').attr('class', 'show' + face);
    if (face == 6) {
        face = 1;
    } else {
        face++;
    }
};

var timer = setInterval("show()", 600);