
$.ajax({
    type: "POST",
    url: localStorage.ycyurl+"/api/foot",
    success: function(data) {
        var datas=JSON.parse(data);
        var foo=datas.data.foot;
        console.log(foo);
        $("#fycdt").html(foo.n1);
        $("#fdt").html(foo.n1_1);
        $("#fhy").html(foo.n1_2);
        $("#fzjml").html(foo.n2);
        $("#fml").html(foo.n2_1);

        $("#fzbpx").html(foo.n3);
        $("#fzb").html(foo.n3_1);
        $("#fgy").html(foo.n4);
        $("#fycy").html(foo.n4_1);
        $("#fzhyx").html(foo.n4_2);
        $("#fhyh").html(foo.n4_3);
        $("#fbj").html(foo.n4_4);


    }
});