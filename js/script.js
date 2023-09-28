$(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $("#js_overlay").toggleClass('on');//オーバーレイのonクラスを付与
});

$("#g-nav-list a").click(function () {//ナビゲーションのリンクがクリックされたら
    $("#js_overlay").removeClass('on');//#js_overlay自体のonを除去し
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

$("#js_overlay").click(function () {//オーバーレイがクリックされたら
    $(this).removeClass('on');//#js_overlay自体のonを除去し
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
});
