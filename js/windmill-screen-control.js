/**
 * Created by Administrator on 2016/12/13.
 */
$(function(){
    $( window ).scroll( function() {

        var scrollTop = $(window).scrollTop();
        $(".box").each(function (i, e) {
            //当前的元素相对于文档的top与页面的滚动高度（scrollTop）
            if (scrollTop >= $(e).offset().top) {
                // 获取当前box的ID
                var id = $(e).attr("id");
                //通过属性选择器获取当前模块对应的菜单
                $("[screen-id=" + id + "]").addClass("active");
                $("[screen-id=" + id + "]").siblings().removeClass("active")
            }
        });
        if( scrollTop >= 600 )
        {
            $( ".screen-control" ).css( "display", "block" );

        }
        else
        {
            $( ".screen-control" ).css( "display", "none" );

        }
    });
        $( ".screen-control li" ).click( function()
        {
            var id = $( this ).attr( "screen-id" );
            var top = 0;
            if( id != "" && id != undefined )
            {
                top = $( "#" + id ).offset().top;
            }

            //$(window ).scrollTop(top);
            $( "html,body" ).animate( {
               "scrollTop": top
            }, 300 );
        } );

});