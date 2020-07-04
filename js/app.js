$(function(){
	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		srcrollOffset = $(window).scrollTop();

	/*fixed header*/
	checkScroll(srcrollOffset);

	$(window).on("scroll", function(){
		srcrollOffset = $(this).scrollTop();

		checkScroll(srcrollOffset);
	});

	function checkScroll(srcrollOffset) {
		if( srcrollOffset >= introH) {
			header.addClass("fixed");
		}else {
			header.removeClass("fixed");
		}
	}



/* Smooth scroll */
$("[data-scroll]").on("click", function(event){
	event.preventDefault();

	var $this = $(this),
		blockId = $this.data('scroll'),
		blockOffset = $(blockId).offset().top;

	$("nav a").removeClass("active");
	$this.addClass("active");

	$("html, body").animate({
		scrollTop: blockOffset
	}, 1000);	
});


/*Menu nav toggal*/
$("#nav-toggle").on("click",function(event){
	event.preventDefault();

	$(this).toggleClass("active");
	$("#nav").toggleClass("active");
});

/*collapse*/

$("[data-collapse]").on("click",function(event){
	event.preventDefault();

	var $this = $(this),
		blockId = $this.data('collapse');

	$this.toggleClass("active");
});


/* slider */
$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});


});


















