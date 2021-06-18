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
            if (destination.index == 0) {

                var $svg = $('svg').drawsvg({
                    duration: 1000, // 한글자 그려지는 시간
                    stagger: 1000, // 다음 글자 그려지는 순서
                    easing: 'swing', // css ease-in out 등등 속성
                    reverse: false, //그려지는 순서 
                })
                $svg.drawsvg('animate');


            } else {


                var $svg = 0;

            }


            if (destination.index == 1) {


                setTimeout(function () {


                    setTimeout(function () {
                        var typingBool = false;
                        var typingIdx = 0;
                        var liIndex = 0;
                        var liLength = $(".typing-txt01>ul>li").length;

                        // 타이핑될 텍스트를 가져온다 
                        var typingTxt = $(".typing-txt01>ul>li").eq(liIndex).text();
                        //liIndex 인덱스로 구분해 한줄씩 가져옴

                        typingTxt = typingTxt.split(""); // 한글자씩 잘라 배열로만든다

                        if (typingBool == false) { // 타이핑이 진행되지 않았다면 
                            typingBool = true;
                            var tyInt = setInterval(typing, 100); // 반복동작 
                        }

                        function typing() {
                            $(".typing01 ul li").removeClass("on");
                            $(".typing01 ul li").eq(liIndex).addClass("on");
                            //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.

                            if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
                                $(".typing01 ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
                                typingIdx++;
                            } else { //한문장이끝나면
                                if (liIndex < liLength - 1) {
                                    //다음문장으로  가기위해 인덱스를 1증가
                                    liIndex++;
                                    //다음문장을 타이핑하기위한 셋팅
                                    typingIdx = 0;
                                    typingBool = false;
                                    typingTxt = $(".typing-txt01>ul>li").eq(liIndex).text();

                                    //다음문장 타이핑전 1초 쉰다
                                    clearInterval(tyInt);
                                    //타이핑종료

                                    setTimeout(function () {
                                        //1초후에 다시 타이핑 반복 시작
                                        tyInt = setInterval(typing, 100);
                                    }, 1000);
                                } else if (liIndex == liLength - 1) {

                                    //마지막 문장까지 써지면 반복종료
                                    clearInterval(tyInt);

                                    //1초후
                                    setTimeout(function () {
                                        //사용했던 변수 초기화
                                        typingBool = false;
                                        liIndex = 0;
                                        typingIdx = -0;

                                        //첫번째 문장으로 셋팅
                                        typingTxt = $(".typing-txt01>ul>li").eq(liIndex).text();
                                        //타이핑 결과 모두 지우기
                                        $(".typing01 ul li").html("")

                                    }, 1000);


                                }
                            }
                        }
                    }, 1000);
                    setTimeout(function () {
                        var typingBool = false;
                        var typingIdx = 0;
                        var liIndex = 0;
                        var liLength = $(".typing-txt02>ul>li").length;

                        // 타이핑될 텍스트를 가져온다 
                        var typingTxt = $(".typing-txt02>ul>li").eq(liIndex).text();
                        //liIndex 인덱스로 구분해 한줄씩 가져옴

                        typingTxt = typingTxt.split(""); // 한글자씩 잘라 배열로만든다

                        if (typingBool == false) { // 타이핑이 진행되지 않았다면 
                            typingBool = true;
                            var tyInt = setInterval(typing, 100); // 반복동작 
                        }

                        function typing() {
                            $(".typing02 ul li").removeClass("on");
                            $(".typing02 ul li").eq(liIndex).addClass("on");
                            //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.

                            if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
                                $(".typing02 ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
                                typingIdx++;
                            } else { //한문장이끝나면
                                if (liIndex < liLength - 1) {
                                    //다음문장으로  가기위해 인덱스를 1증가
                                    liIndex++;
                                    //다음문장을 타이핑하기위한 셋팅
                                    typingIdx = 0;
                                    typingBool = false;
                                    typingTxt = $(".typing-txt02>ul>li").eq(liIndex).text();

                                    //다음문장 타이핑전 1초 쉰다
                                    clearInterval(tyInt);
                                    //타이핑종료

                                    setTimeout(function () {
                                        //1초후에 다시 타이핑 반복 시작
                                        tyInt = setInterval(typing, 100);
                                    }, 1000);
                                } else if (liIndex == liLength - 1) {

                                    //마지막 문장까지 써지면 반복종료
                                    clearInterval(tyInt);

                                    //1초후
                                    setTimeout(function () {
                                        //사용했던 변수 초기화
                                        typingBool = false;
                                        liIndex = 0;
                                        typingIdx = -0;

                                        //첫번째 문장으로 셋팅
                                        typingTxt = $(".typing-txt02>ul>li").eq(liIndex).text();
                                        //타이핑 결과 모두 지우기
                                        $(".typing02 ul li").html("")

                                    }, 1000);


                                }
                            }
                        }
                    }, 7000);
                    setTimeout(function () {
                        var typingBool = false;
                        var typingIdx = 0;
                        var liIndex = 0;
                        var liLength = $(".typing-txt03>ul>li").length;

                        // 타이핑될 텍스트를 가져온다 
                        var typingTxt = $(".typing-txt03>ul>li").eq(liIndex).text();
                        //liIndex 인덱스로 구분해 한줄씩 가져옴

                        typingTxt = typingTxt.split(""); // 한글자씩 잘라 배열로만든다

                        if (typingBool == false) { // 타이핑이 진행되지 않았다면 
                            typingBool = true;
                            var tyInt = setInterval(typing, 100); // 반복동작 
                        }

                        function typing() {
                            $(".typing03 ul li").removeClass("on");
                            $(".typing03 ul li").eq(liIndex).addClass("on");
                            //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.

                            if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
                                $(".typing03 ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
                                typingIdx++;
                            } else { //한문장이끝나면
                                if (liIndex < liLength - 1) {
                                    //다음문장으로  가기위해 인덱스를 1증가
                                    liIndex++;
                                    //다음문장을 타이핑하기위한 셋팅
                                    typingIdx = 0;
                                    typingBool = false;
                                    typingTxt = $(".typing-txt03>ul>li").eq(liIndex).text();

                                    //다음문장 타이핑전 1초 쉰다
                                    clearInterval(tyInt);
                                    //타이핑종료

                                    setTimeout(function () {
                                        //1초후에 다시 타이핑 반복 시작
                                        tyInt = setInterval(typing, 100);
                                    }, 1000);
                                } else if (liIndex == liLength - 1) {

                                    //마지막 문장까지 써지면 반복종료
                                    clearInterval(tyInt);

                                    //1초후
                                    setTimeout(function () {
                                        //사용했던 변수 초기화
                                        typingBool = false;
                                        liIndex = 0;
                                        typingIdx = -0;

                                        //첫번째 문장으로 셋팅
                                        typingTxt = $(".typing-txt03>ul>li").eq(liIndex).text();
                                        //타이핑 결과 모두 지우기
                                        $(".typing03 ul li").html("")

                                    }, 1000);


                                }
                            }
                        }
                    }, 16500);


                }, 1000);

            } else {



            }

        },


    });



    //포트폴리오 글씨 draw svg
    //    var $svg = $('svg').drawsvg({
    //        duration: 1000, // 한글자 그려지는 시간
    //        stagger: 1000, // 다음 글자 그려지는 순서
    //        easing: 'swing', // css ease-in out 등등 속성
    //        reverse: false, //그려지는 순서 
    //    })
    //    $svg.drawsvg('animate');




    //타이핑 텍스트

    //
    //    setTimeout(function () {
    //        var typingBool = false;
    //        var typingIdx = 0;
    //        var liIndex = 0;
    //        var liLength = $(".typing-txt01>ul>li").length;
    //
    //        // 타이핑될 텍스트를 가져온다 
    //        var typingTxt = $(".typing-txt01>ul>li").eq(liIndex).text();
    //        //liIndex 인덱스로 구분해 한줄씩 가져옴
    //
    //        typingTxt = typingTxt.split(""); // 한글자씩 잘라 배열로만든다
    //
    //        if (typingBool == false) { // 타이핑이 진행되지 않았다면 
    //            typingBool = true;
    //            var tyInt = setInterval(typing, 100); // 반복동작 
    //        }
    //
    //        function typing() {
    //            $(".typing01 ul li").removeClass("on");
    //            $(".typing01 ul li").eq(liIndex).addClass("on");
    //            //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.
    //
    //            if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
    //                $(".typing01 ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
    //                typingIdx++;
    //            } else { //한문장이끝나면
    //                if (liIndex < liLength - 1) {
    //                    //다음문장으로  가기위해 인덱스를 1증가
    //                    liIndex++;
    //                    //다음문장을 타이핑하기위한 셋팅
    //                    typingIdx = 0;
    //                    typingBool = false;
    //                    typingTxt = $(".typing-txt01>ul>li").eq(liIndex).text();
    //
    //                    //다음문장 타이핑전 1초 쉰다
    //                    clearInterval(tyInt);
    //                    //타이핑종료
    //
    //                    setTimeout(function () {
    //                        //1초후에 다시 타이핑 반복 시작
    //                        tyInt = setInterval(typing, 100);
    //                    }, 1000);
    //                } else if (liIndex == liLength - 1) {
    //
    //                    //마지막 문장까지 써지면 반복종료
    //                    clearInterval(tyInt);
    //
    //                    //1초후
    //                    setTimeout(function () {
    //                        //사용했던 변수 초기화
    //                        typingBool = false;
    //                        liIndex = 0;
    //                        typingIdx = -0;
    //
    //                        //첫번째 문장으로 셋팅
    //                        typingTxt = $(".typing-txt01>ul>li").eq(liIndex).text();
    //                        //타이핑 결과 모두 지우기
    //                        $(".typing01 ul li").html("")
    //
    //                    }, 1000);
    //
    //
    //                }
    //            }
    //        }
    //    }, 1000);
    //
    //    setTimeout(function () {
    //        var typingBool = false;
    //        var typingIdx = 0;
    //        var liIndex = 0;
    //        var liLength = $(".typing-txt02>ul>li").length;
    //
    //        // 타이핑될 텍스트를 가져온다 
    //        var typingTxt = $(".typing-txt02>ul>li").eq(liIndex).text();
    //        //liIndex 인덱스로 구분해 한줄씩 가져옴
    //
    //        typingTxt = typingTxt.split(""); // 한글자씩 잘라 배열로만든다
    //
    //        if (typingBool == false) { // 타이핑이 진행되지 않았다면 
    //            typingBool = true;
    //            var tyInt = setInterval(typing, 100); // 반복동작 
    //        }
    //
    //        function typing() {
    //            $(".typing02 ul li").removeClass("on");
    //            $(".typing02 ul li").eq(liIndex).addClass("on");
    //            //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.
    //
    //            if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
    //                $(".typing02 ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
    //                typingIdx++;
    //            } else { //한문장이끝나면
    //                if (liIndex < liLength - 1) {
    //                    //다음문장으로  가기위해 인덱스를 1증가
    //                    liIndex++;
    //                    //다음문장을 타이핑하기위한 셋팅
    //                    typingIdx = 0;
    //                    typingBool = false;
    //                    typingTxt = $(".typing-txt02>ul>li").eq(liIndex).text();
    //
    //                    //다음문장 타이핑전 1초 쉰다
    //                    clearInterval(tyInt);
    //                    //타이핑종료
    //
    //                    setTimeout(function () {
    //                        //1초후에 다시 타이핑 반복 시작
    //                        tyInt = setInterval(typing, 100);
    //                    }, 1000);
    //                } else if (liIndex == liLength - 1) {
    //
    //                    //마지막 문장까지 써지면 반복종료
    //                    clearInterval(tyInt);
    //
    //                    //1초후
    //                    setTimeout(function () {
    //                        //사용했던 변수 초기화
    //                        typingBool = false;
    //                        liIndex = 0;
    //                        typingIdx = -0;
    //
    //                        //첫번째 문장으로 셋팅
    //                        typingTxt = $(".typing-txt02>ul>li").eq(liIndex).text();
    //                        //타이핑 결과 모두 지우기
    //                        $(".typing02 ul li").html("")
    //
    //                    }, 1000);
    //
    //
    //                }
    //            }
    //        }
    //    }, 7000);
    //
    //    setTimeout(function () {
    //        var typingBool = false;
    //        var typingIdx = 0;
    //        var liIndex = 0;
    //        var liLength = $(".typing-txt03>ul>li").length;
    //
    //        // 타이핑될 텍스트를 가져온다 
    //        var typingTxt = $(".typing-txt03>ul>li").eq(liIndex).text();
    //        //liIndex 인덱스로 구분해 한줄씩 가져옴
    //
    //        typingTxt = typingTxt.split(""); // 한글자씩 잘라 배열로만든다
    //
    //        if (typingBool == false) { // 타이핑이 진행되지 않았다면 
    //            typingBool = true;
    //            var tyInt = setInterval(typing, 100); // 반복동작 
    //        }
    //
    //        function typing() {
    //            $(".typing03 ul li").removeClass("on");
    //            $(".typing03 ul li").eq(liIndex).addClass("on");
    //            //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.
    //
    //            if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
    //                $(".typing03 ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
    //                typingIdx++;
    //            } else { //한문장이끝나면
    //                if (liIndex < liLength - 1) {
    //                    //다음문장으로  가기위해 인덱스를 1증가
    //                    liIndex++;
    //                    //다음문장을 타이핑하기위한 셋팅
    //                    typingIdx = 0;
    //                    typingBool = false;
    //                    typingTxt = $(".typing-txt03>ul>li").eq(liIndex).text();
    //
    //                    //다음문장 타이핑전 1초 쉰다
    //                    clearInterval(tyInt);
    //                    //타이핑종료
    //
    //                    setTimeout(function () {
    //                        //1초후에 다시 타이핑 반복 시작
    //                        tyInt = setInterval(typing, 100);
    //                    }, 1000);
    //                } else if (liIndex == liLength - 1) {
    //
    //                    //마지막 문장까지 써지면 반복종료
    //                    clearInterval(tyInt);
    //
    //                    //1초후
    //                    setTimeout(function () {
    //                        //사용했던 변수 초기화
    //                        typingBool = false;
    //                        liIndex = 0;
    //                        typingIdx = -0;
    //
    //                        //첫번째 문장으로 셋팅
    //                        typingTxt = $(".typing-txt03>ul>li").eq(liIndex).text();
    //
    //                    }, 1000);
    //
    //
    //                }
    //            }
    //        }
    //    }, 16500);









    //포트폴리오 썸네일 슬라이드
    var swiper = new Swiper(".mySwiper", {

        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    //포트폴리오 썸네일 클릭 시
    $(".portfolio-page > .contents > .txt-wrap > .thumb-wrap > .thumb > .swiper-container > .swiper-wrapper > .swiper-slide").click(function () {

        var contents = $(this).index() - 3;

        $(".portfolio-page > .contents > .main-con > .main").removeClass("on");
        $(".portfolio-page > .contents > .main-con > .main").eq(contents).addClass("on");


        $(".portfolio-page > .contents > .txt-wrap > .txt").removeClass("on");
        $(".portfolio-page > .contents > .txt-wrap > .txt").eq(contents).addClass("on");


    });

    //포트폴리오02 썸네일 클릭 시
    $(".portfolio-page02 > .contents > .txt-wrap > .thumb-wrap > .thumb > .swiper-container > .swiper-wrapper > .swiper-slide").click(function () {

        var contents = $(this).index() - 3;

        $(".portfolio-page02 > .contents > .main-con > .main").removeClass("on");
        $(".portfolio-page02 > .contents > .main-con > .main").eq(contents).addClass("on");


        $(".portfolio-page02 > .contents > .txt-wrap > .txt").removeClass("on");
        $(".portfolio-page02 > .contents > .txt-wrap > .txt").eq(contents).addClass("on");


    });


    //960시 포트폴리오 슬라이드
    var swiper = new Swiper(".portfolio", {

        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },



    });









});
