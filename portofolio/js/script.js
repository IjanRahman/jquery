// event pada saat link di klik
$('.page-scroll').on('click', function(){
	//ambil isi href
	var href = $(this).attr('href');
	var elemenHref = $(href)
	console.log(elemenHref.offset().top); // untuk menuliskan sesuatu ke cobsole js di browser/Buging	
});