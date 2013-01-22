
(function($) {

    // var   
    // //DOM element
    // video = document.querySelector('video'),
    // canvas = document.getElementById('result'),
    // ctx = canvas.getContext('2d'),

    // //tag
    // num = 1,
    // isPicked,

    // //cash data
    // imgData = {},
    // formData = null,
    // localMediaStream = null;

    // function onFailSoHard(e) {
    //     console.log('Reeeejected!', e);
    //     alert('call camera failed!');
    // }
    // function callCam () {
    //     navigator.webkitGetUserMedia({video: true}, function(stream) {
    //         video.src = window.webkitURL.createObjectURL(stream); 
    //         localMediaStream = stream;    
    //     },onFailSoHard);
    // }  
    // function closeCam() {
    //   localMediaStream.stop();
    // }          
    // function snapshot() {
    //    // set the canvas to the dimensions of the video
    //     if (localMediaStream) {
    //         isPicked = true;
    //         canvas.width = video.clientWidth;
    //         canvas.height = video.clientHeight;             
    //         ctx.drawImage(video, 0, 0);
    //     }
    //    // don't think this stuff is necessary and it's throwing an error
    //    //document.getElementById("huhu").src = canvas.toDataURL('image/webp');
    // }
    // function getImage(data) {
    //     var img = new Image();
    //     img.src = data;
    //     $(img).appendTo('.collect');
    // }
    // function getFormData() {
    //     var sexValue,
    //         age = $('#age'),sex = $('.basicInfo form .checkbox'),
    //         weight = $('#weight'),height = $('#height'),
    //         email = $('#email'), password = $('#password');

    //     $.each(sex,function(i) {
    //       if (sex[i].checked) {
    //           sexValue = sex[i].value;
    //       }
    //     })    
            
    //     formData = {
    //       age:      age.val(),
    //       sex:      sexValue,
    //       weight:   weight.val(),
    //       height:   height.val(),
    //       email:    email.val(),
    //       password: password.val(),
    //     };    
    // }
    // function fillFormData() {
    //     var $age = $('.age-check'),$sex = $('.sex-check'),
    //         $weight = $('.weight-check'),$height = $('.height-check'),
    //         $email = $('.email-check'),$password = $('.password-check');

    //     if (formData === null) {
    //         getFormData();
    //     }

    //     $age.text(formData.age);
    //     $sex.text(formData.sex);
    //     $weight.text(formData.weight);
    //     $height.text(formData.height);
    //     $email.text(formData.email);
    //     $password.text(formData.password);    
    // }
    // function setCounter() {
    //     var timer,
    //         num = 5,
    //         $counter = $('#counter');

    //     function count() {
    //       num -=1;
    //       $counter.empty().text(num);
    //       if (num === 0) {
    //         snapshot();
    //         clearTimeout(timer);
    //         $counter.fadeOut();
    //       }
    //     }

    //     $counter.text(num).css({display:"block"});
    //     timer = setInterval(count,1000);  
    // }
    // function saveImage(num) {
    //     var url = canvas.toDataURL('image/png');
    //     imgData["img-"+num] = url;
    //     getImage(url);
    // }
    // function clearSnapshot() {
    //     ctx.clearRect(0,0,canvas.width,canvas.height);
    // } 
    // function upload(data,i) {

    //     var b64 = data.data.substring(22); 
    //     console.log(b64)
        
    //     $.ajax({ url: "/upload", data: { data: b64, name: i.toString() }, success: function () 
    //         { 
    //         //alert('OK'); 
    //         } 
    //     }); 
    // }

    console.log($('.wToBasic'));

    //here comes jQuery button event
    $('.wToBasic').on('click',function() {
        $.ajax({
            url: "/basicInfo",
            success: function(data) {
                $('.welcome').removeClass('welcome').addClass('basicInfo').empty().append(data).fadeIn();
            }
        });
        
        return false;
    });
    
    // $('.cToBasic').on('click',function() {
    //     $('.conformation').fadeOut();
    //     $('.basicInfo').fadeIn();
    // });
    // $('.cToPick').on('click',function() {
    //     $('.conformation').fadeOut();
    //     $('#snapshot').add('#nextStep').add('#rePick').css({display:'inline-block'});

    //     //tips
    //     $('.tips').css({display: 'block'});
    //     $('.tips .tip-1').css({display:'block'});
    //     $('.tips').fadeIn();

    //     //mask
    //     $('#mask').removeClass().addClass('mask-one mask');

    //     $('.pickup').fadeIn();

    //     setTimeout(callCam,800);
    // });

    // //pickup botton
    // $('#snapshot').on('click',setCounter);
    // $('#nextStep').on('click',function() {
    //     var str;
    //     if (isPicked === true) {
    //         saveImage(num);
    //         num += 1;
    //         clearSnapshot();
    //         isPicked = false;

    //         //mask
    //         $('#mask').removeClass().addClass('mask mask-'+num);

    //         //tips
    //         str = '.tip-'+num;
    //         $('.tips p').css({display:'none'});
    //         $(str).fadeIn();
    //         console.log(str);
    //         console.log($(str));

    //         if (num == 3) {
    //             $('#nextStep').css({display:'none'});
    //             $('#finish').fadeIn();
    //         }
    //     } else {
    //         alert('please finish step ' + num + ' first!');
    //     }            
    // });
    // $('#rePick').on('click',clearSnapshot);
    // $('#finish').on('click',function() {
    //     if( isPicked === true) {
    //         saveImage(num);
    //         closeCam();
    //         clearSnapshot();
    //         $('#snapshot').add('#rePick').add('#finish').add('.tips').css({display:'none'});
    //         $('#upload').fadeIn();

    //         $('.congratulation').css({display:'block'}).appendTo('#mask');
    //     } else {
    //         alert('please finish step 3 first!');
    //     }
    // });
    // $('#upload').on('click',function(){
    //     for (n=0;n<imgData.length;n++) {
    //         var imgName = "uploadImage"+n;
    //         upload(imgData[n],imgName);
    //     }
    // });  
}(jQuery));
 