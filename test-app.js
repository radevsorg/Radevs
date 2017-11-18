function test(){

    function scrollFunc(){
        let y = window.scrollY;
        let top = window.pageYOffset;

        let scrollTop     = $(window).scrollTop();

        let elementOffsetSrv = $('#services').offset().top;
        let distanceServices      = elementOffsetSrv - scrollTop;

        if(distanceServices <= 400 && distanceServices >= -500){
            $('.services').removeClass('appear');
        }else{
            $('.services').addClass('appear');
        }

        if(y >=  1000){
            $('.hi-icon-wrap').removeClass('hidden');
        }else{
            $('.hi-icon-wrap').addClass('hidden');
        }

    }

    $(window).scroll(scrollFunc);
}