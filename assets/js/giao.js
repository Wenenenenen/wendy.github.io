(function($) {
    $('.map').click(function(){
        layer.open({
            type: 2,
            title: '北京市实时疫情地图(累计确诊)',
            shadeClose: true,
            shade: false,
            maxmin: true, //开启最大化最小化按钮
            area: ['650px', '600px'],
            content: '../assets/page/map.html'
          });
    });
    $('.laughing').click(function(){
        newlaughing(-1);
    });
    $('.music').click(function(){
        layer.open({
          type: 2,
          title: '<font color="#ff5200">没事常来听歌叭❤</font>',
          shadeClose: true,
          offset: ['0', '0'],
          shade: false,
          maxmin: true, //开启最大化最小化按钮
          area: ['380px', '100%'],
          content: '../assets/page/Meting.html'
        });
    });
    $('.echarts').click(function(){
        layer.open({
            type: 2,
            title: '北京市实时疫情柱图(累计确诊)',
            shadeClose: true,
            shade: false,
            maxmin: true, //开启最大化最小化按钮
            area: ['650px', '600px'],
            content: '../assets/page/echarts.html'
          });
    });
    $('.code').click(function(){
        window.open('https://github.com/Wenenenenen/wenenenenen.github.io');
    });

    function newlaughing(num){
        if(num<=5){
          num++;
        }else{
          num=1;
        }
        var kide = ['迪士尼乐园里妈妈对儿子说“我们现在在世界上最快乐的地方，你别让我在这扇你”',
        '有一个小男孩非要抢他姥爷帽子戴，妈妈不让，然后男孩哭了，姥爷不忍就给了，没想到男孩带上帽子突然转头跟妈妈说“你看我带上帽子像你爹不”',
        '八戒和悟空吵架了，掂起耙子就砸了路边的一块石头，对着猴子大喊“我杀你妈”',
        '医生摸着病人的肚子问“你这里有什么感觉吗” 病人说“我感觉好像有人摸我肚子”',
        '从前有个人钓鱼，钓到了只鱿鱼。鱿鱼求他：你放了我吧，别把我烤来吃啊。 那个人说：好的，那么我来考问你几个问题吧。鱿鱼很开心说：你考吧你考吧！ 然后这人就把鱿鱼给烤了..',
        '早上我去菜市场买青菜，我问小贩：“你这菜打过农药吗？”小贩想了想说：“估计打不过。”',
        '我小时候抓了一把沙子，家人以为我长大会去搞建筑，结果我现在是一个沙雕'];
        layer.confirm(kide[num], {
          btn: ['笑了哈哈','没笑无聊'], //按钮
          closeBtn: false
        }, function(){
          layer.msg('每天都要开心呀');
        }, function(){
          newlaughing(num);
        });
    }
})(jQuery);
