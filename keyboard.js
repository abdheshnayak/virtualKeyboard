function keyboard(){
    $.post('data', function(data) {
        $("#keyboard").html(data);
      });
}