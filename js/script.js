jQuery(document).ready(function(){
    var paginationTopOffset = jQuery("ul.pagination-lg").offset().top;
    //var paginationTopOffset = jQuery("div.hul-pagination").offset().top;
    jQuery("nav#hulPagination").attr("data-offset-top",paginationTopOffset);

    //to avoid taking out the pagination from the flow
    jQuery("nav#hulPagination").wrap('<div class="nav-placeholder"></div>');
    jQuery(".nav-placeholder").height(jQuery("nav#hulPagination").outerHeight());
    
    //to avoid right jump of pagination
    var paginationLeftOffsetBigger = jQuery("ul.pagination-lg").offset().left;
    var paginationLeftOffsetSmaller = jQuery("#hulPagination").offset().left;
    paginationLeftOffset = paginationLeftOffsetBigger - paginationLeftOffsetSmaller;
   
    jQuery(window).scroll(function(){
        var scrollPosition = jQuery(window).scrollTop();
        if (scrollPosition>=paginationTopOffset){
            jQuery("#hulPagination").css("margin-left",paginationLeftOffset);
        }
        else{
            jQuery("#hulPagination").css("margin-left",0);
        }
    });
   

    

});