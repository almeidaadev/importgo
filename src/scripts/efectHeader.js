export default function efectHeader() {
    $(document).ready(function() {
        $(window).scroll(function() {
            let homeHeight = $('.home').outerHeight();
            let header = $('.container-header');
    
            ($(window).scrollTop() > homeHeight) ? 
                header.addClass('efect-header')
            :  
                header.removeClass('efect-header')
        });
    });
};