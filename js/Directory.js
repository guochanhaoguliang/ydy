/**
 * Created by Administrator on 2017/10/24.
 */
var pages=1;
var mln=1;
$.ajax({
    type:"POST",
   url: localStorage.ycyurl+"/api/zjml",
    data:{
        page:pages
    },
    success:function(data){
        var datas=JSON.parse(data);
        var mlarr=datas.data.zj;
        var mls="";
        $.each(mlarr,function (i,el) {
            mls+=`<li data-id=${el.id}>
                    <div class="img fl"><img src=${el.title_pic} alt=""></div>
                    <div class="contentz fl">
                        <h3>${el.author}</h3>
                        <p>${el.origin}</p>
                        <p>${el.brief}</p>
                    </div>
                </li>`
        })
        $(mls).appendTo("#zjml");
        mln=datas.data.zj_num;
        console.log(mln);
        var mlnu="";
        for(var i=0;i<mln;i++){
            mlnu+=`<span class="page" data-id=${i+1} onclick="clicknum(this)">${i+1}</span>`;
        }
        $(mlnu).prependTo("#mlnum");
        $(".page").eq(pages-1).addClass("active").siblings().removeClass("active");
    }
});

function  ml(){
    $.ajax({
        type:"POST",
        url: localStorage.ycyurl+"/api/zjml",
        data:{
            page:pages
        },
        success:function(data){
            var datas=JSON.parse(data);
            var mlarr=datas.data.zj;
            var mls="";
            $.each(mlarr,function (i,el) {
                mls+=`<li data-id=${el.id}>
                    <div class="img fl"><img src=${el.title_pic} alt=""></div>
                    <div class="contentz fl">
                        <h3>${el.author}</h3>
                        <p>${el.origin}</p>
                        <p>${el.brief}</p>
                    </div>
                </li>`
            })
            $(mls).appendTo("#zjml");
        }
    })
}

function  clicknum(obj) {
    var _this=$(obj);
    _this.addClass("active").siblings().removeClass("active");
    pages=_this.attr("data-id");
    $("#zjml").html(" ");
    ml();
}
function  nextpage(obj) {
    var _this=$(obj);
    pages++;
    if(pages>mln){
        return false;
    }
    $("#zjml").html(" ");
    $(".page").eq(pages-1).addClass("active").siblings().removeClass("active");
    ml();
}

$.ajax({
    type:"POST",
    url: localStorage.ycyurl+"/api/bjzk",
    success:function(data){
        var datas=JSON.parse(data);
        var gywo=datas.data.nav;
        // console.log(gywo);
        $("#women").html('<span></span>'+gywo.n4);
        $("#ycy").html(gywo.n4_1);
        $("#zh").html(gywo.n4_2);
        $("#wyh").html(gywo.n4_3);
        $("#yjy").html(gywo.n4_4);
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