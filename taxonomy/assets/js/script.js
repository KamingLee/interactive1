$(document).ready(function(){

	$(".toggle-icon").click(function() {
	  $('.nav-container').toggleClass("pushed");
	});
	$(".m1").click(function() {
	  $('.container1').toggleClass("leftalign1");
	  $('.container2').toggleClass("leftalign1");
	});
	$(".m2").click(function() {
	  $('.bigcontainer').toggleClass("center");
      $('.container1').toggleClass("leftalign1");
	  $('.container2').toggleClass("leftalign1");
    
	});
	$(".m3").click(function() {
	  $('.bigcontainer').toggleClass("center");
	  $('.m1').toggleClass("m1after");
      $('.m2').toggleClass("m2after");
	  $('.m3').toggleClass("m3after");
	  $('.m4').toggleClass("m4after");
      $('.m5').toggleClass("m5after");
      $('.m6').toggleClass("m6after");
      $('.m7').toggleClass("m7after");
	  $('.m8').toggleClass("m8after");
	  $('.m9').toggleClass("m9after");
      $('.m10').toggleClass("m10after");
      $('.m11').toggleClass("m11after");
      $('.m12').toggleClass("m12after");
	  $('.m13').toggleClass("m13after");
	  $('.m14').toggleClass("m14after");
      $('.m15').toggleClass("m15after");
      $('.m16').toggleClass("m16after");
      $('.m17').toggleClass("m17after");
	  $('.m18').toggleClass("m18after");
	  $('.m19').toggleClass("m19after");
      $('.m20').toggleClass("m20after");
      $('.m21').toggleClass("m21after");
      $('.m22').toggleClass("m22after");
      $('.m23').toggleClass("m23after");
      $('.m24').toggleClass("m24after");
	  $('.m25').toggleClass("m25after");
	  $('.m26').toggleClass("m26after");
      $('.m27').toggleClass("m27after");
      $('.m28').toggleClass("m28after");
      $('.m29').toggleClass("m29after");
      $('.m30').toggleClass("m30after");
      $('.m31').toggleClass("m31after");
      $('.m32').toggleClass("m32after");
      $('.m33').toggleClass("m33after");
	  $('.m34').toggleClass("m34after");
	  $('.m35').toggleClass("m35after");
      $('.m36').toggleClass("m36after");
      $('.m37').toggleClass("m37after");
      $('.m38').toggleClass("m38after");
      $('.m39').toggleClass("m39after");
      $('.m40').toggleClass("m40after");
      $('.m41').toggleClass("m41after");
      $('.m42').toggleClass("m42after");
      $('.m43').toggleClass("m43after");
      $('.m44').toggleClass("m44after");
      $('.m45').toggleClass("m45after");
      $('.m46').toggleClass("m46after");
      $('.m47').toggleClass("m47after");
	  $('.m48').toggleClass("m48after");
      $('.m49').toggleClass("m49after");
      $('.m50').toggleClass("m50after");
      $('.m51').toggleClass("m51after");
      $('.m52').toggleClass("m52after");
      $('.m53').toggleClass("m53after");
      $('.m54').toggleClass("m54after");
      $('.m55').toggleClass("m55after");
      $('.m56').toggleClass("m56after");
      $('.m57').toggleClass("m57after");
      $('.m58').toggleClass("m58after");
      $('.m59').toggleClass("m59after");
  });

	var playmusic = document.getElementById("playmusic");
	var isPlaying = false;

	function togglePlay(){
			if (isPlaying) {
				playmusic.pause()	
			} else {
				playmusic.play();
			}
	};
	 playmusic.onplaying = function() {
	 	isPlaying = true;
	 }
	 playmusic.onpause = function() {
	 isPlaying = false;
	 }

	 $('.m4').click(function() {
	 	togglePlay();
	 })

	 $(".m5").click(function(){
	 	$(".ham").addClass("appear");
	 })

	 $(".ham").click(function(){
	 	$(this).removeClass("appear");
	 })


});


/*** starwars.com's Toggle Icon Animation ***/