$(document).ready(function(){
    $('#btn_mostrar').click(function(){
        $.ajax({
            type:'POST',
            url: './control/control.php',
            data:{
                'saludo':'Hola mundo'
            },
            success: function(resultado){
                console.log(resultado);
                $('#mostrar_saludo').text(resultado);
            }
        
        });
    });
});