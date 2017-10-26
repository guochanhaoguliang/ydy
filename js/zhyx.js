/**
 * Created by Administrator on 2017/10/24.
 */
$.ajax({
    type:"POST",
    url: localStorage.ycyurl+"/api/zhyxzzs",
    success:function(data){
        var datas=JSON.parse(data);
    //  杂志介绍
        var zzjs=datas.data.zzjs;
        var zzjies="";
        zzjies=`<div class="Magazine">
                        <div class="zz fl"><img src=${zzjs.zzjs_pic} alt=""></div>
                        <ul class="zzr fl">
                            <h3>${zzjs.title}</h3>
                            <li>
                                <span>主管单位:</span>
                                <span>${zzjs.zgdw}</span>
                            </li>
                            <li>
                                <span>主办单位:</span>
                                <span>${zzjs.zbdw}</span>
                            </li>
                            <li>
                                <span>国内统一刊号:</span>
                                <span>${zzjs.gntykh}</span>
                            </li>
                            <li>
                                <span>业务类型:</span>
                                <span>${zzjs.ywlx}</span>
                            </li>
                            <li>
                                <span>杂志人气:</span>
                                <span>${zzjs.zzrq}</span>
                            </li>
                            <li>
                                <span>杂志类型:</span>
                                <span>${zzjs.zzlx}</span>
                            </li>
                            <li>
                                <span>上期杂志:</span>
                                <span>${zzjs.sqzz}</span>
                            </li>
                            <li>
                                <span>下期杂志:</span>
                                <span>${zzjs.xqzz}</span>
                            </li>
                        </ul>
                    </div>
                    <p class="zajj">${zzjs.brief}</p>`;
        $(zzjies).appendTo("#zzjsa");
    // 委员名单
        var bwhmdarr=datas.data.bwhmd;
        var bwh="";
        $.each(bwhmdarr,function (i,el) {
            bwh+=` <li>
                        <img src=${el.title_pic} alt="">
                        <div class="td">
                            <span class="name">${el.author}</span>
                            <span class="job">${el.origin}</span>
                        </div>
                        <p>${el.brief}</p>
                       </li>`
        })
            $(bwh).appendTo("#bmwymd");
    //  关于我们
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


