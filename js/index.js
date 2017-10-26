var HomePage = $('.HomePage');
HomePage.height($(window).height());
var wid=$(window).width();
var url="https://portal.dr-r.cn:8080";
localStorage.ycyurl=url;
//nav
if(wid<=1024){

}else {
    var footer = $('.footer');
    footer.hover(function () {
        $(this).addClass("active");
        $(this).find('.dw').show();
    },function () {
        $(this).removeClass("active");
        $(this).find('.dw').hide();
    });
}

//index ajax
$.ajax({
    type: "POST",
    url: localStorage.ycyurl+"/api/index",
    success: function(data) {
        var datas=JSON.parse(data);
        console.log(datas);
        $("#yx").html(datas.data.nav.n1);
        $("#zj").html(datas.data.nav.n2);
        $("#zb").html(datas.data.nav.n3);
        $("#gy").html(datas.data.nav.n4);
        $("#ycy").html(datas.data.nav.n4_1);
        $("#zz").html(datas.data.nav.n4_2);
        $("#wyh").html(datas.data.nav.n4_3);
        $("#yjy").html(datas.data.nav.n4_4);
    }
});
$(window).resize(function () {          //当浏览器大小变化时
    HomePage.height($(window).height());
});