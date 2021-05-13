$(document).ready(function(){
// ----------------mobile media start----------------

let menuOpen = false;
$(document).on('click','.menu-btn',function(){
    if(!menuOpen){
        $('.menu-btn').addClass('open');
        menuOpen = true;
        $('.header-nav').css('display','flex');
        $('body').css('overflow','hidden')
    }else{
        $('.menu-btn').removeClass('open');
        menuOpen = false;
        $('.header-nav').css('display','none');
        $('body').css('overflow','auto')
    }
})

// ----------------mobile media end---------------- 


// -------------------loader--------------------
    $('document').ready(function(e) {
        setTimeout(() => {
            $(".loader").fadeOut("slow");
        }, 500);
       }); 

// ----------------------pagination------------------

   if( window.matchMedia('(max-width: 450px)').matches){
       $("#tab").pagination({
       items:1,
       contents: 'card-box',
       previous: 'Previous',
       next: 'Next',
       position: 'bottom',
       });
   }else if(window.matchMedia('(max-width: 768px)').matches){
       $("#tab").pagination({
       items:2,
       contents: 'card-box',
       previous: 'Previous',
       next: 'Next',
       position: 'bottom',
       });
   }else{
       $("#tab").pagination({
       items:3,
       contents: 'card-box',
       previous: 'Previous',
       next: 'Next',
       position: 'bottom',
       });
   }

// ----------------------------send email-------------------------

function hide (){
    $('.alert').addClass('hide');
    $('.alert').removeClass('show');
}

function show (){
    $('.alert').removeClass('hide');
    $('.alert').addClass('show');
    $('.alert').addClass('showAlert');
}

function empty(){
    $('#name').val('');
    $('#email').val('');
    $('#subject').val('');
    $('#text-message').val('');
}
 

   $(document).on('submit','.message-form',function(e){
       e.preventDefault();
       var name,email,sub,text;
       name = $('#name').val();
       email = $('#email').val();
       subject = $('#subject').val();
       text = $('#text-message').val();
       if(name.length > 2 && text.length > 5 && subject.length > 3 && email.length > 7  ){
            $('.alert-text').html('Message was sent ');
            $('.alert').css({'background':'#2c2c','border-left':'5px solid #07af07'});
            show();
            empty();
            setTimeout(hide,3000);
       }else{
            $('.alert-text').html('Something is wrong');
            $('.alert').css({'background':'#d81818','border-left':'5px solid rgb(197 10 10)'});
            show();
            setTimeout(hide,3000);
       }
   })
//    -----------------------close btn start ---------------------
   $(document).on('click','#close-btn',() => {
       $('.alert').addClass('hide');
       $('.alert').removeClass('show');
   })
//    -----------------------close btn end --------------------- 
})


