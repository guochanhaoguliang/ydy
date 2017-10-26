/**
 * Created by Administrator on 2017/10/24.
 */
$.ajax({
    type:"POST",
   url:localStorage.ycyurl+"/api/ycy",
    success:function(data){
        var datas=JSON.parse(data);
        // console.log(datas);
        //公司介绍
        var gsjs = datas.data.gsjs;
        var gsjss="";
        gsjss=` <h3><span></span>${gsjs.title}</h3>${gsjs.details}`;
        $(gsjss).appendTo("#jsgs");
    // 平台优势
        var ptys = datas.data.ptys;
        var ysh="";
        ysh=`<h3><span></span>${ptys.title}</h3>${ptys.details}`;
        $(ysh).appendTo("#ptys");
    //    用户
        var ptyh=datas.data.ptyh;
        var ptyhs="";
        ptyhs=`<h3><span></span>${ptyh.title}</h3>${ptyh.details}`;
        $(ptyhs).appendTo("#ptyhu");

    //  关于我们
        var gywo=datas.data.nav;
        // console.log(gywo);
        $("#women").html('<span></span>'+gywo.n4);
        $("#ycy").html(gywo.n4_1);
        $("#zh").html(gywo.n4_2);
        $("#wyh").html(gywo.n4_3);
        $("#yjy").html(gywo.n4_4);
        $("#ycy1").html(gywo.n4_1);
        $("#zh1").html(gywo.n4_2);
        $("#wyh1").html(gywo.n4_3);
        $("#yjy1").html(gywo.n4_4);
    //会议
        var ycyhy=datas.data.hy;
        var hyas="";
        $.each(ycyhy,function (i,el) {
            hyas+=`<li><a href="Genetic_cloud1.html?id=${el.id}" data-id=${el.id}>${el.title}</a></li>`
        });
        $(hyas).appendTo("#hya");

    }
});
var wid=$(window).width();
if(wid<=1024) {

}else{
    $(".dwgywo").hover(function () {
        $(this).find('.dw').show();
    }, function () {
        $(this).find('.dw').hide();
    });
}

