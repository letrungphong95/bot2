$(function(){
    $('#btn_msg').click(function(e){
        var tbody = $('#container_msg');
        e.preventDefault();
        $.ajax({
            type:'POST',
            url:'/test/',
            data:{
                text:$('#input_msg').val(),
                csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val()
            },
            success:function(data){
                tbody.append('<div class="me">' +data['user_text']+ '</div>');
                tbody.append('<div class="bot">' +data['bot_text']+ '</div>');
                $('#container_msg').animate({
                    scrollTop: $('#container_msg')[0].scrollHeight
                }, 0);
                $('#input_msg').val = '';
                $('#input_msg').val('').focus();
            }
        }); 
    });
});
