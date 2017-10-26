
var pages=1;
var types=1;
var dnum=1;
getzb();
function getzb() {
    $.ajax({
        type: "POST",
        url: localStorage.ycyurl+"/api/zb",
        data:{
            page:pages,
            type:types
        },
        success: function(data) {
            var datas=JSON.parse(data);
            var dataw = datas.data.zb;
            console.log(datas);
            var zbstrs="";
            $.each(dataw,function (i,el) {
                zbstrs+=`<li class="col-md-6 col-sm-6">
                    <a href=${el.link_url}>
                    <img src=${el.title_pic} class="img">
                    <div class="jbbox">
                        <p class="pt">直播:${el.title}</p>
                        <div class="jnamebox">
                            <p class="jpname">嘉宾：${el.author}</p>
                            <p class="zbzt">未开始 | ${el.ks_time}</p>
                        </div>
                    </div>
                    </a>
                </li>`
            });
            $(zbstrs).appendTo("#list");
            dnum=datas.data.zb_num;
           // console.log(dnum);
            var nums="";
            for(var i=0;i<dnum;i++){
                nums+=`<span class="page" data-id=${i+1} onclick="clicknum(this)">${i+1}</span>`
            }
            $(nums).prependTo("#dtnum");
            $(".page").eq(0).addClass("active");
            var Wid3=$("#list").width();
            $("#list li").css("width",Wid3/2-30);
        }
    });
}
//切换播放状态
function getzbzt(obj) {
    var _this=$(obj);
    var id=_this.attr('data-id');
    _this.addClass("active").siblings().removeClass("active");
    pages=1;
    types=id;
    getzbztxr();
    console.log(dnum);
    $("#dtnum .page").remove();
    var nums="";
    for(var i=0;i<dnum;i++){
        nums+=`<span class="page" data-id=${i+1} onclick="clicknum(this)">${i+1}</span>`
    }
    $(nums).prependTo("#dtnum");
    $(".page").eq(pages-1).addClass("active").siblings().removeClass("active");
}
//切换播放状态
function getzbztxr() {
    $.ajax({
        type: "POST",
        url: localStorage.ycyurl+"/api/zb",
        async:false,
        data:{
            page:pages,
            type:types
        },
        success: function(data) {
            var datas=JSON.parse(data);
            var dataw = datas.data.zb;
            dnum=datas.data.zb_num;
            $("#list li").remove();
            //console.log(datas);
            var zbstrs="";
            if(types==1){
                $.each(dataw,function (i,el) {
                    zbstrs+=`<li class="col-md-6 col-sm-6">
                                <a href=${el.link_url}>
                                <img src=${el.title_pic} class="img">
                                <div class="jbbox">
                                    <p class="pt">直播:${el.title}</p>
                                    <div class="jnamebox">
                                        <p class="jpname">嘉宾：${el.author}</p>
                                        <p class="zbzt">未开始 | ${el.ks_time}</p>
                                    </div>
                                </div>
                                </a>
                            </li>`
                });
            }else if(types==2){
                $.each(dataw,function (i,el) {
                    zbstrs+=`<li class="col-md-6 col-sm-6">
                                     <a href=${el.link_url}>
                                        <img src=${el.title_pic} class="img">
                                        <div class="jbbox">
                                            <p class="pt">直播:${el.title}</p>
                                            <div class="jnamebox">
                                                <p class="jpname">嘉宾：${el.author}</p>
                                                <p class="zbzt zzzb"><i></i>正在直播</p>
                                        </div>
                                    </div>
                                    </a>
                                </li>`
                });
            }else {
                $.each(dataw,function (i,el) {
                    zbstrs+=`<li class="col-md-6 col-sm-6">
                                     <a href=${el.link_url}>
                                        <img src=${el.title_pic} class="img">
                                        <div class="jbbox">
                                            <p class="pt">直播:${el.title}</p>
                                            <div class="jnamebox">
                                                <p class="jpname">嘉宾：${el.author}</p>
                                                <p class="zbzt zzwc"><i></i>看回放</p>
                                        </div>
                                    </div>
                                    </a>
                                </li>`
                });
            }
            $(zbstrs).appendTo("#list");
            var Wid2=$("#list").width();
            $("#list li").css("width",Wid2/2-30);

        }
    });
}
//点击分页
function  clicknum(obj) {
    var _this=$(obj);
    pages=_this.attr("data-id");
    $("#list").html("");
    getzbztxr();
    $("#dtnum .page").remove();
    var nums="";
    for(var i=0;i<dnum;i++){
        nums+=`<span class="page" data-id=${i+1} onclick="clicknum(this)">${i+1}</span>`
    }
    $(nums).prependTo("#dtnum");
    $(".page").eq(pages-1).addClass("active").siblings().removeClass("active");
}
//点击下一页按钮
function  nextpage(obj) {
    pages++;
    if(pages>dnum){
        return false;
    }
    $("#list").html(" ");
    getzbztxr();
    $("#dtnum .page").remove();
    var nums="";
    for(var i=0;i<dnum;i++){
        nums+=`<span class="page" data-id=${i+1} onclick="clicknum(this)">${i+1}</span>`
    }
    $(nums).prependTo("#dtnum");
    $(".page").eq(pages-1).addClass("active").siblings().removeClass("active");
}
var wid=$(window).width();
var Wid1=$("#list").width();
$("#list li").css("width",Wid1/2-30);
if(wid<=1024) {

}else {
    $(".dwgywo").hover(function () {
        $(this).find('.dw').show();
    }, function () {
        $(this).find('.dw').hide();
    });
}
$(window).resize(function () {          //当浏览器大小变化时
   var Wid=$("#list").width();
   console.log(Wid)
    $("#list li").css("width",Wid/2-30)
});