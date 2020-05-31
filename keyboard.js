function keyboard(){
    $.post('https://kamla.com.np/app/vkb/data.php', function(data) {
        $("#keyboard").html(data);
      });
}