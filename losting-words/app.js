//心理測驗開始
$(function () {
    $("#you").click(function () {
        $("#psytest").show();
        $("#you").hide();
        $(".jumbotron").hide();
        $(".navbar-default").hide();
    });
    $("#btn").click(function () {
        var q1 = $("[name=q1]:checked").val();
        var q2 = $("[name=q2]:checked").val();
        var q3 = $("[name=q3]:checked").val();
        var q4 = $("[name=q4]:checked").val();
        var sum = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4);
        if (sum > 0 && sum <= 4) {
            $("#psytest").hide();
            $(".jumbotron").hide();
            $("#you").hide();
            $("#answer1").show();
            $(window).scrollTop(0);
            return false;
        }
        else if (sum > 4 && sum <= 8) {
            $("#psytest").hide();
            $(".jumbotron").hide();
            $("#you").hide();
            $("#answer2").show();
            $(window).scrollTop(0);
            return false;
        }
        else if (sum > 8 && sum <= 12) {
            $("#psytest").hide();
            $(".jumbotron").hide();
            $("#you").hide();
            $("#answer3").show();
            $(window).scrollTop(0);
            return false;
        }
        else {
            $("#psytest").hide();
            $(".jumbotron").hide();
            $("#you").hide();
            $("#answer4").show();
            $(window).scrollTop(0);
            return false;
        }
    });
});
//解答頁面 點選btn有動畫
//心理測驗結束
$(function () {
    $("#goTop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#goTop').fadeIn("fast");
        }
        else {
            $('#goTop').stop().fadeOut("fast");
        }
    });
});
//導覽列特效開始
//導覽列特效結束
//詩篇特效 //#note,#notewovcxfrds, #appreciation,  #appreciationwords 
$(function () {
    $("#note").mouseover(function () {
        $("#notewords").show(1000);
    });
    $("#note").click(function () {
        $("#notewords").hide(1000);
    });
    $("#appreciation").mouseover(function () {
        $("#appreciationwords").show(1000);
    });
    $("#appreciation").click(function () {
        $("#appreciationwords").hide(1000);
    });
});
$(function () {
        $("#poem1,#poem2")
    })
    //詩篇特效結束
    //$(選擇器).click(事件處理器);