function keyboard(){
    $.post('https://raw.githubusercontent.com/abdheshnayak/virtualKeyboard/master/data', function(data) {
        $("#keyboard").html(data);
      });
}