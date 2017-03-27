/**
 * Created by Administrator on 2016/12/15.
 */
/************************************************首页效果***************************************/
/*热门区域悬停出现 移走消失*/
$(function(){
    $(".area").mouseover(function(){
        $(".areaSelectBox").show();
    });
    $(".areaSelectBox").mouseout(function(){
        $(".areaSelectBox").hide();
    })

/*商家服务域悬停出现 移走消失*/
    $("#service").mouseover(function(){
        $(".serviceBox").show();
    });
    $("#service").mouseout(function(){
        $(".serviceBox").hide();
    })
    /*商家服务点击跳转*/
    $("#service .aTab1").click(function(){
        location.href = "windmill_product.html";
    });
    $("#service .aTab2").click(function(){
        location.href = "oxcart.html";
    })

 /*点击登录、注册*/
    $(".signIn").click(function(){
        $("#all").show();
        $(".signBox").show();
    });
    $(".signUp").click(function(){
        $(".signBox span").text("注册");
        $(".signBox #login_button").val("注册");
        $("#all").show();
        $(".signBox").show();
    });
    $(".signBox .close").click(function(){
        $(".signBox").hide();
        $("#all").hide();
        $(".signBox span").text("登录");
        $(".signBox #login_button").val("登录");
    });

    /*悬停fixedNav效果*/
    $(".fixedNav .anchor1").mouseover(function(){
        $(".fixedNav .anchor .favor").hide();
        $(".fixedNav .anchor .favor1").css("display","block");
    });
    $(".fixedNav .anchor1").mouseout(function(){
        $(".fixedNav .anchor .favor1").hide();
        $(".fixedNav .anchor .favor").css("display","block");
    });
    $(".fixedNav .anchor2").mouseover(function(){
        $(".fixedNav .anchor .consult").hide();
        $(".fixedNav .anchor .consult1").css("display","block");
    });
    $(".fixedNav .anchor2").mouseout(function(){
        $(".fixedNav .anchor .consult1").hide();
        $(".fixedNav .anchor .consult").css("display","block");
    });
    $(".fixedNav .anchor3").mouseover(function(){
        $(".fixedNav .anchor .sell").hide();
        $(".fixedNav .anchor .sell1").css("display","block");
    });
    $(".fixedNav .anchor3").mouseout(function(){
        $(".fixedNav .anchor .sell1").hide();
        $(".fixedNav .anchor .sell").css("display","block");
    });
    $(".fixedNav .anchor4").mouseover(function(){
        $(".fixedNav .anchor .feedback").hide();
        $(".fixedNav .anchor .feedback1").css("display","block");
    });
    $(".fixedNav .anchor4").mouseout(function(){
        $(".fixedNav .anchor .feedback1").hide();
        $(".fixedNav .anchor .feedback").css("display","block");
    })
    /*fixedNav点击效果*/
    $(".fixedNav .anchor1,.fixedNav .anchor2").click(function(){
        $(".signBox span").text("注册");
        $(".signBox #login_button").val("注册");
        $("#all").show();
        $(".signBox").show();
    });
    $(".fixedNav .anchor3").click(function(){
        location.href = "sellEvaluate.html";
    });
    $(".fixedNav .anchor4").click(function(){
        $(".feedbackform").show();
        $(".feedbackform .close").click(function(){
            $(".feedbackform").hide();
        });
    });

    /*品牌下拉框效果*/
    $(".nav>.left").mouseover(function(){
        $("#brandBox").show();
        $(".nav>.left").css("border-top","2px solid rgb(255,87,26)")
                        .css("border-left","2px solid rgb(255,87,26)")
                        .css("border-right","2px solid rgb(255,87,26)");
    });
    $(".nav>.left").mouseout(function(){
        $("#brandBox").hide();
        $(".nav>.left").css("border","2px solid #fff")
                        .css("border-right","2px solid rgb(217, 217, 217)");
    });
    /*车型下拉框效果*/
    $(".nav>.center").mouseover(function(){
        $("#modelBox").show();
        $(".nav>.center").css("border-top","2px solid rgb(255,87,26)")
            .css("border-left","2px solid rgb(255,87,26)")
            .css("border-right","2px solid rgb(255,87,26)");
    });
    $(".nav>.center").mouseout(function(){
        $("#modelBox").hide();
        $(".nav>.center").css("border","2px solid #fff")
            .css("border-right","2px solid rgb(217, 217, 217)");
    });

/************************************************我要买车效果***************************************/

/************************************************我要卖车效果***************************************/
   /*车型选择*/
    var dataJson = {
        "option": [{
            "id": "1",
            "name": "阿尔法罗密欧",
            "child": [{
                "id": "4",
                "name": "ALFA 156",
                "child": [{
                    "id": "12",
                    "name": "2004款 ALEA 156 2.0 AT"
                }]
            },{
                "id": "4",
                "name": "ALFA 166",
                "child": [{
                    "id": "12",
                    "name": "2004款 ALEA 166 2.0 AT"
                }]
            },{
                "id": "4",
                "name": "ALFA GT",
                "child": [{
                    "id": "12",
                    "name": "2004款 ALEA GT 3.2"
                },{
                    "id": "12",
                    "name": "2003款 ALEA GT Gtc"
                }]
            }]
        }, {
            "id": "2",
            "name": "安凯客车",
            "child": [{
                "id": "151",
                "name": "宝斯通",
                "child": [{
                    "id": "156",
                    "name": "2014款 宝斯通 3.0 VIP版"
                }, {
                    "id": "157",
                    "name": "2014款 宝斯通 3.0 高级版"
                }, {
                    "id": "158",
                    "name": "2014款 宝斯通 3.0 低配版"
                }]
            }]
        }]
    };
    var l1 = 0,
        l2 = 0;
    var cname1, cname2, cname3;
    var cid1, cid2, cid3;
    var canClick = !0;
    var canClose = !1;
    $('span', $('.iptLR')).on('click', function() {
        $('.select-box').show();
        if (canClick) {
            $('ul', $('.select-box')).html('');
            fillData();
            canClick = !1;
        }
    });
    $('span', $('.iptLR')).on("click", function() {
//			canClose ? $('.select-box').hide() : alert('请选择下级品类！');
        canClick = !0;
    });

    $('.iptLR').on('click', 'a', function() {
        $(this).parent().remove();
        $('.select-box').css({
            top: $('.iptLR').offset().top + $('.iptLR').outerHeight(true)
        });
        console.log("123")
    })

    $('ul.first', $('.select-box')).on('click', 'li', function() {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('ul.third').html('');
        fillData($(this).index());
        l1 = $(this).index();
        cname1 = $(this).text();
        cid1 = $(this).attr('val');
        canClose = !1;
        $('input.cid', $('.iptLR')).val(cid1);
        $('input.cname', $('.iptLR')).val(cname1);
    });
    $('ul.second', $('.select-box')).on('click', 'li', function() {
        $(this).addClass('selected').siblings().removeClass('selected');
        fillData(l1, $(this).index());
        l2 = $(this).index();
        cname2 = $(this).text();
        cid2 = $(this).attr('val');
        canClose = !1;
        $('input.cid', $('.iptLR')).val(cid1 + ',' + cid2);
        $('input.cname', $('.iptLR')).val(cname1 + ',' + cname2);
    });
    $('ul.third', $('.select-box')).on('click', 'li', function() {
        $(this).addClass('selected').siblings().removeClass('selected');
        cname3 = $(this).text();
        cid3 = $(this).attr('val');
        canClose = !0;
        var hasExist = !1;
        $('.iptLR').find("p").each(function() {
            if ($(this).text().split(' > ')[2] == cname3) hasExist = !0;
        })
        hasExist ? alert('所选品类已被添加！') : $('.iptLR span').text( cname1  + cname2 + cname3 );
        $('.iptLR span').css("font-size",'12px');
        $('input.cid', $('.iptLR')).val(cid1 + ',' + cid2 + ',' + cid3);
        $('input.cname', $('.iptLR')).val(cname1 + ',' + cname2 + ',' + cname3);
    });
    /*点击空白处或关闭按钮*/
    $(".close-btn").click(function(){
        $('.select-box,.select-time,.select-area,.select-color,.select-soldtime').hide();
    });
    //填充级联数据
    function fillData(l1, l2) {
        var temp_html = "";
        if (typeof(dataJson.option) != 'undefined' && arguments.length == 0) {
            $.each(dataJson.option, function(i, pro) {
                temp_html += '<li val="' + pro.id + '">' + pro.name + '</li>';
            });
        } else if (typeof(dataJson.option[l1].child) != 'undefined' && arguments.length == 1) {
            $.each(dataJson.option[l1].child, function(i, pro) {
                temp_html += '<li val="' + pro.id + '">' + pro.name + '</li>';
            });
        } else if (typeof(dataJson.option[l1].child[l2].child) != 'undefined' && arguments.length == 2) {
            $.each(dataJson.option[l1].child[l2].child, function(i, pro) {
                temp_html += '<li val="' + pro.id + '">' + pro.name + '</li>';
            });
        }
        $('.select-box ul:eq(' + arguments.length + ')').html(temp_html);
    }
   /*挑选上牌时间*/
    $('span', $('.ipts')).on('click', function() {
        $('.select-time').show();
        $('.select-year').on('click','li',function(){
            cname3 = $(this).text();
            $('.ipts span').text(cname3);
            $('.select-month').on('click','li',function(){
                cname2 = $(this).text();
                $('.ipts span').text(cname3+cname2);
            });
            $('.ipts span').css("font-size",'12px');
        })
    });
    /*挑选所在地*/
    var provinse_name = [];
    var city_name = [];
    $( ".ipta" ).click( function() {
        $(".select-area").show();
    });
    $.each( province, function( i, ele )
    {
        $( "#provinces" ).append( "<li id='" + ele.id + "'>" + ele[ 'name' ] + "</li>" );
    } );
    $( "#provinces li" ).click( function()
    {
        provinse_name = $( this ).text();
        //先清空城市
        $( "#citys" ).empty();
        var province_id = $( this ).attr( "id" );
        //遍历所有的省份匹配，与当前的省份IP相匹配
        $.each( province, function( pro_index, pro_ele )
        {
            if( pro_ele.id == province_id )
            {
                // 遍历该省份下面的所有城市
                $.each( pro_ele.city, function( city_index, city_ele )
                {
                    //console.log(city_ele.name);
                    $( "#citys" ).append( "<li id='" + city_ele.id + "'>" + city_ele.name + "</li>" )
                } );
            }
        } );
        $( ".ipta span" ).text( $( this ).text() );
        provinse_name = $( this ).text();
    });
    $( "#citys" ).on( "click", "li", function()
    {
        //将所选城市放入输入框
        city_name = $( this ).text();
        $( ".ipta span" ).text( provinse_name + city_name );
    } );

    /*挑选颜色*/
    $('span', $('.iptc')).on('click', function() {
        $('.select-color').show();
        $('.select-color ul').on('click','li',function(){
            cname3 = $(this).text();
            $('.iptc span').text(cname3);
            $('.iptc span').css("font-size",'12px');
        })
    });
    /*挑选卖车时间*/
    $('span', $('.ipth')).on('click', function() {
        $('.select-soldtime').show();
        $('.select-soldtime ul').on('click','li',function(){
            cname3 = $(this).text();
            $('.ipth span').text(cname3);
            $('.ipth span').css("font-size",'12px');
        })
    });
    /*提交卖车信息表单效果*/
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    $("#submit").click(function(){

        $(".info-send").css("display","block");
        console.log("123");

    });
    $(".info-send .close").click(function(){
        $(".info-send").css("display","none");
    });
    $("#last_submit").click(function(){
        if(!myreg.test($("#phone-num").val()))
        {
            $(".woring").show();
            return false;
        }
        else{
            $(".woring").hide();
            $(".info-send").hide();
            $("#all").show();
            $(".success-info").show();
            //location.href = "sell.html";
        }
    });
    $(".success-info button").click(function(){
        $(".success-info").hide();
        $("#all").hide();
    });
    $(".success-info .close").click(function(){
        $(".success-info").hide();
        $("#all").hide();
    });

     /*我要卖车表单 扫描二维码悬浮效果*/
    $(".paperDetail .sweep,.sellCode .sweep").mouseover(function(){
        $(".sellCode").show();
    });
    $(".paperDetail .sweep,.sellCode .sweep").mouseout(function(){
        $(".sellCode").hide();
    });
    /*点击我要卖车*/
    $(".wantSell").click(function(){
        scrollTo(0, 0);
    })
});