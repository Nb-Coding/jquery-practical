//carousel - slick
$(function() {
    $('.carousel').slick({
        fade: true,
        speed: 1000,
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 4500,
        arrows: false,
    });
});

//マウスカーソルが重なったとき、不透明度の変更をする
$('#menu a').hover(
    function() {
        //this- 自身
        $(this).animate({'opacity': 0.5}, 200);
    },
    function() {
        $(this).animate({'opacity': 1}, 200);
    }
);

//Top_btn
$(window).scroll(function() {
    //スクロール量 > 100
    if($(this).scrollTop() > 100) {
        $('#page-top').fadeIn();
    } else {
        $('#page-top').fadeOut();
    }
});

//スクロールを滑らかにする リンク'a[href^="#"]'のもの
$('a[href^="#"]').click(function() {
    const speed = 600;
    const href=$(this).attr('href');
    let target = $(href == "#" || href == "" ? 'html' : href); //hrefの値が"#"だったらhtml、そうじゃなければ'href'
    let position = target.offset().top;
    //位置、速度、liner(等速) or swing(変速) 
    $('body,html').animate({scrollTop:position},speed,'swing');

    return false;
}); 

//sectionのフェードイン
$(window).scroll(function() {
    const  scrollAmount = $(window).scrollTop();    //スクロールした量
    const windowHeight = $(window).height();        //windowの高さ

    $('section').each(function() {
        const position = $(this).offset().top;      //現在地
        if (scrollAmount > position - windowHeight +100) {
            $(this).addClass('fade-in');
        }
    });
});

//モーダル
/*  attr()メソッドを使い、クリックされた画像のsrc属性の値を取得する
    attr()メソッドを使い、モーダルの画像部分（img要素）のsrc属性に取得した値を追加する*/
$('#works img').click(function() {
    const imgSrc = $(this).attr('src');
    const imgAlt = $(this).attr('alt');
    $('.modalImg').attr({
        src: imgSrc,
        alt: imgAlt,
    });
    $('.modal').fadeIn();
});

//modal - 閉じるボタン
$('.closeBtn').click(function() {
    $('.modal').fadeOut();
});