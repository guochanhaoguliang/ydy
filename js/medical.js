
var pages=1;
var  dnum=1;
$.ajax({
    type: "POST",
    url:  localStorage.ycyurl+"/api/yxdt",
    success: function(data) {
        var datas=JSON.parse(data);
        console.log(datas);
        var dtarr=datas.data.ycx;
        var strs="";
        $.each(dtarr,function (i,el) {
            strs+=`<li>
                    <a href="Genetic_cloud.html?id=${el.id}">
                        <img src=${el.title_pic} alt="" class="fl">
                        <div class="list">
                            <h3>${el.title}</h3>
                            <p>${el.brief}</p>
                        </div>
                    </a>
              </li>`
        });
        $(strs).appendTo("#list");
        var hyarr=datas.data.hy;
        var hyas="";
        $.each(hyarr,function (i,el) {
            hyas+=`<li><a href="Genetic_cloud1.html?id=${el.id}" data-id=${el.id}>${el.title}</a></li>`
        });
        $(hyas).appendTo("#hya");
        $("#img").attr('src',datas.data.hytz.banner_url);
        dnum=datas.data.ycx_num;
        console.log(dnum);
        var nums="";
      for(var i=0;i<dnum;i++){
          nums+=`<span class="page" data-id=${i+1} onclick="clicknum(this)">${i+1}</span>`
      }
        $(nums).prependTo("#dtnum");
        $(".page").eq(pages-1).addClass("active").siblings().removeClass("active");
    }
});

function dty(){
    $.ajax({
        type: "POST",
        url:  localStorage.ycyurl+"/api/yxdt",
        data:{
            page:pages
        },
        success: function(data) {
            var datas=JSON.parse(data);
            console.log(datas);
            var dtarr=datas.data.ycx;
            var strs="";
            $.each(dtarr,function (i,el) {
                strs+=`<li>
                    <a href="Genetic_cloud.html?id=${el.id}">
                        <img src=${el.title_pic} alt="" class="fl">
                        <div class="list">
                            <h3>${el.title}</h3>
                            <p>${el.brief}</p>
                        </div>
                    </a>
              </li>`
            });
            $(strs).appendTo("#list");
            
        }
    });
}
function  clicknum(obj) {
    var _this=$(obj);
    _this.addClass("active").siblings().removeClass("active");
    pages=_this.attr("data-id");
    $("#list").html(" ");
    dty();
}
function  nextpage(obj) {
    var _this=$(obj);
    pages++;
    if(pages>dnum){
        return false;
    }
    $("#list").html(" ");
   $(".page").eq(pages-1).addClass("active").siblings().removeClass("active");
    dty();

    console.log($(".page").eq(pages-1));
}
var wid=$(window).width();
if(wid<=1024) {

}else{
    $(".dwgywo").hover(function () {
        $(this).find('.dw').show();
    }, function () {
        $(this).find('.dw').hide();
    });
}

$.ajax({
    type:"POST",
    url:  localStorage.ycyurl+"/api/bjzk",
    success:function(data){
        var datas=JSON.parse(data);
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