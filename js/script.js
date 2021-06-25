$(document).ready(function () {


    $('#fullpage').fullpage({
        //options here
        responsiveWidth: 961,
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', 'lastPage', 'footer'],
        // sectionsColor: ['#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['HOME', 'ABOUT ME-01', 'ABOUT ME-02', 'PORTFOLIO-WEB', 'PORTFOLIO-VISUAL', 'CONNACT', 'FOOTER'],
        responsiveWidth: 961,
        afterLoad: function (origin, destination, direction) {
            var loadedSection = this;

            //색인 사용


            if (destination.index == 2) {

                $(".skill01").addClass("skill");
                $(".skill02").addClass("skill");
                $(".skill03").addClass("skill2");
                $(".skill04").addClass("skill3");
                $(".skill05").addClass("skill4");

            } else {
                $(".skill01").removeClass("skill");
                $(".skill02").removeClass("skill");
                $(".skill03").removeClass("skill2");
                $(".skill04").removeClass("skill3");
                $(".skill05").removeClass("skill4");
            }

        },


    });




    //타이핑 텍스트 960이하        

    var typingWrap = false;
    var typingIndex = 0;
    var liIndex = 0;
    var liLength = $(".typing-txt01>ul>li").length;

    var typingText = $(".typing-txt01>ul>li").eq(liIndex).text();

    typingText = typingText.split("");

    if (typingWrap == false) {
        typingWrap = true;
        var typingInt = setInterval(typing, 100); //반복
    }

    function typing() {
        $(".typing01 ul li").removeClass("on");
        $(".typing01 ul li").eq(liIndex).addClass("on");
        //커서 효과. 현재 타이핑되는 문장에만 효과가 나타난다.

        if (typingIndex < typingText.length) {
            $(".typing01 ul li").eq(liIndex).append(typingText[typingIndex]);
            //이것만 쓰면 첫글자만 반복해서 나오므로
            typingIndex++; //꼭 ++를 써준다. 첫문장 완성!'안녕하세요'
        } else {
            if (liIndex < liLength - 1) {
                liIndex++;

                typingIndex = 0;
                typingWrap = false;
                typingText = $(".typing-txt01>ul>li").eq(liIndex).text();

                clearInterval(typingInt);

                setTimeout(function () {
                    typingInt = setInterval(typing, 100);
                }, 1000);
            } else if (liIndex == liLength - 1) {
                clearInterval(typingInt);

                setTimeout(function () {
                    typingWrap = false;
                    liIndex = 0;
                    typingIndex = -0;

                    typingText = $(".typing-txt01>ul>li").eq(liIndex).text();

                }, 1000);
            }
        }
    }









    //웹 포트폴리오 슬라이드
    var swiper = new Swiper(".mySwiper", {

        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });





    //포폴 이미지 클릭시    
    $(".portfolio-page02 > .contents > .main-con > .main-box > .main01").click(function () {
        $(".img-pop-wrap").addClass("pop");
        $(".img-pop-wrap > .img-pop > .box01").addClass("pop");
    });
    $(".portfolio-page02 > .contents > .main-con > .main-box > .main02").click(function () {
        $(".img-pop-wrap").addClass("pop");
        $(".img-pop-wrap > .img-pop > .box02").addClass("pop");
    });
    $(".portfolio-page02 > .contents > .main-con > .main-box > .main03").click(function () {
        $(".img-pop-wrap").addClass("pop");
        $(".img-pop-wrap > .img-pop > .box03").addClass("pop");
    });
    $(".portfolio-page02 > .contents > .main-con > .main-box > .main04").click(function () {
        $(".img-pop-wrap").addClass("pop");
        $(".img-pop-wrap > .img-pop > .box04").addClass("pop");
    });
    $(".portfolio-page02 > .contents > .main-con > .main-box > .main05").click(function () {
        $(".img-pop-wrap").addClass("pop");
        $(".img-pop-wrap > .img-pop > .box05").addClass("pop");
    });
    $(".portfolio-page02 > .contents > .main-con > .main-box > .main06").click(function () {
        $(".img-pop-wrap").addClass("pop");
        $(".img-pop-wrap > .img-pop > .box06").addClass("pop");
    });
    $(".portfolio-page02 > .contents > .main-con > .main-box > .main07").click(function () {
        $(".img-pop-wrap").addClass("pop");
        $(".img-pop-wrap > .img-pop > .box07").addClass("pop");
    });
    $(".portfolio-page02 > .contents > .main-con > .main-box > .main08").click(function () {
        $(".img-pop-wrap").addClass("pop");
        $(".img-pop-wrap > .img-pop > .box08").addClass("pop");
    });



    $(".img-pop-wrap").click(function () {

        $(".img-pop-wrap").removeClass("pop");
        $(".img-pop-wrap > .img-pop > .img-box").removeClass("pop");

    });






    //960시 웹 포트폴리오 슬라이드
    var swiper = new Swiper(".web-portfolio", {

        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        keyboard: true,
        autoplay: true,
        speed: 500,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },



    });


    //960시 시각 포트폴리오 슬라이드
    var swiper = new Swiper(".portfolio", {

        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        keyboard: true,
        autoplay: true,
        speed: 500,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },



    });




    //모바일 메뉴 토글

    $("header > .mobile-gnb").click(function () {
        $("header > .mobile-gnb").toggleClass("active");



    });









});
