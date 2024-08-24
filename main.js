$(document).ready(function () {

    $("form").submit(function (event) {
        event.preventDefault();

        const novaTarefa = '<li><span class="tarefa">' + $('#form-tarefa input[type="text"]').val() + '</span><div class="botao-concluida"></div></li>';            
        $('ul').append(novaTarefa);
            $('#nova-tarefa').val('');

            $('ul li.tarefa').on('click', function() {
                $(this).parent().toggleClass('botao-concluida');
                $(this).toggleClass('line-through');
            });

            $('ul li').click( function(){
                $(this).css("text-decoration","line-through");
            });
        });

        
    });
