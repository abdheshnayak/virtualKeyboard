function keyboard(){
    $.post('https://kamla.com.np/app/vkb/data', function(data) {
        $("#keyboard").html(data);
      });
}