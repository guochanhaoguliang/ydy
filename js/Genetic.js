/**
 * Created by Administrator on 2017/10/24.
 */
var urs=window.location.search;
var strs=urs.substring(1);
var silp=strs.split('&');
var res={};
for (var i=0;i<silp.length;i++){
    res[silp[i].split("=")[0]]=silp[i].split("=")[1];
}


console.log(res);
//动态详情
$.ajax({
    type: "POST",
    url: localStorage.ycyurl+"/api/yxdt_qx",
    data:{
        column_ycx_id:res.id
    },
    success: function(data) {
        var datas=JSON.parse(data);
        var datav = datas.data.ycx;
        console.log(datav);
        var strs="";
        strs=` <h3>${datav.title}</h3>
            <p class="author">
                <span>发布时间:&nbsp;</span><span>&nbsp;${datav.add_time}</span>
                <span>作者:&nbsp;</span><span>${datav.author}</span>
                <span>来源:&nbsp;</span><span>${datav.origin}</span>
            </p>${datav.details}`;
        $(strs).appendTo("#Genetic");
    }
});
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
