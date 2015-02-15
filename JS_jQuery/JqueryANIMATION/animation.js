
$(document).ready(function() {
setTimeout("animation()",1900);
});
function animation(){
kite();
cloud();
signup();

$("#kite").animate({top: '55px' }, {queue:false, duration:1000, easing:'easeOutBounce'});
$("#cloud").animate({top: '70px' }, {queue:false, duration:1400, easing:'easeOutBounce'});
$("#tweet").animate({right: '0px' }, {queue:false, duration:1800, easing:'easeOutBounce'});
$("#sign-up").animate({opacity:"1"},1600);
}
function cloud(){
$("#cloud").animate({opacity:"1"},2000).animate({opacity:"1"},2000);
$("#cloud").animate({left:"-=10px"},1000).animate({left:"+=10px"}, 1000);
$("#cloud").animate({right:"-=10px"},1000).animate({right:"+=10px"}, 1000);
setTimeout("cloud()",9000);
}
function signup(){
$("#sign-up").animate({top:"-=1px"},100).animate({top:"+=1px"},100);
$("#sign-up").animate({top:"-=1px"},100).animate({top:"+=1px"},100);
$("#sign-up").animate({top:"-=1px"},100).animate({top:"+=1px"},100);
setTimeout("signup()",10000);
}
function kite(){
$("#kite").animate({opacity:"1"},4000).animate({opacity:"1"},4000);
$("#kite").animate({top:"-=3px"},500).animate({top:"+=3px"}, 500);
$("#kite").animate({left:"-=3px"},500).animate({left:"+=3px"}, 500);
setTimeout("kite()",9000);
}
