/**
 * Created by Administrator on 2017/10/24.
 */
$.ajax({
    type:"POST",
    url: localStorage.ycyurl+"/api/yhh",
    success:function(data){
        var datas=JSON.parse(data);
            // console.log(datas);
        //   海峡两岸
        var hxla=datas.data.hxla;
        var liangan="";
        liangan=` <h3><span></span>${hxla.title}</h3>${hxla.details}`;
        $(liangan).appendTo("#la");
        //遗传生殖
        var yichuansz=datas.data.ycsz;
        var shengzhi="";
        shengzhi=` <h3><span></span>${yichuansz.title}</h3>${yichuansz.details}`;
        $(shengzhi).appendTo("#ycsz");
        //委员名单
        var mingdarr=datas.data.wymd;
        console.log(mingdarr);
        var mingdans="";
        $.each(mingdarr,function (i,el) {
            mingdans+=` <li>
                            <img src=${el.title_pic} alt="">
                            <div class="td">
                                <span class="name">${el.author}</span>
                                <span class="job">${el.origin}</span>
                            </div>
                            <p>${el.brief}</p>
                        </li>`
        });
        $(mingdans).appendTo("#hmd");
        //  关于我们
        var gywo=datas.data.nav;
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


