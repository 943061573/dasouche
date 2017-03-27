/**
 * Created by Administrator on 2016/12/13.
 */
var i = 0;
var size = $( ".carwebs li" ).length;
var timer = setInterval( function()
{
    i++;
    if( i >= size )
    {
        i = 0;
    }
    run();
}, 3000 );
function run()
{
    $( "#slider .carwebs li" ).eq( i ).stop().fadeIn( 800 );
    $( "#slider .carwebs li" ).eq( i ).siblings().stop().fadeOut( 800 );

    $( ".list li" ).eq( i ).addClass( "active" );
    $( ".list li" ).eq( i ).siblings().removeClass( "active" );
}

//给点加点击事件
$( ".list li" ).click( function()
{
    i = $( this ).index();
    run();
} );
