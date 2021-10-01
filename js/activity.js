$(document).ready(function(){
    $(document).bind("click",function(e){
        $(e.target).closest(".click").toggleClass("highlight");
    })
})
