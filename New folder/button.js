function changeColor(button) {
    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function(btn){
        if (btn === button) {
            btn.style.backgroundColor = 'violet';
        }
        else {
            btn.style.backgroundColor = '';
        }
    });
}