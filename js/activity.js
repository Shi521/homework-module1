$(document).ready(function(){
    $('td').click(function(){
        var content = $(this).text();
        var columIndex = $(this).index();
        var columTitle = $('th:eq(' + columIndex + ')').text();
         
        
        if (content !="Not Available"){
            $(this).toggleClass('highlight');
       
        if($(this).hasClass('highlight')){
            $('#displaySelected').css('visibility','visible');
            $('#displaySelected').css('margin-top','2em');
            $('#result').append('<p>'+content+' at '+ columTitle +'</p>');
        } else{
            $('#result p:contains('+content+')').remove();
            
            if($('#result').has('p').length == false) {
                $('#displaySelected').css('visiblity','hidden');
                $('#displaySelected').css('margin-top','0');
            }
        }
    }
    });
});

