
//validation
$("#btnLogin").click(function(event) {

	//Fetch form to apply custom Bootstrap validation
	var form = $("#formLogin")
   
	if (form[0].checkValidity() === false) {
	  event.preventDefault()
	  event.stopPropagation()
	}
	
	form.addClass('was-validated');
     });
//Select radio 
$('.radio .radio-body').click(function(){
       $('.selected .fa').removeClass('');
       $('.selected ').addClass('radio-body shadow p-4');
       $('.radio-body').removeClass('selected');
       $(this).addClass('selected');
       $('.selected ').removeClass('radio-body shadow p-4');
       $('.selected ').addClass('');
});
  
//Select bank
$('.bank-logo').click(function(){
	$('.selected ').removeClass('');
	$('.selected ').addClass('');
	$('.bank-logo').removeClass('selected');
	$(this).addClass('selected');
	$('.selected ').removeClass('radio-body shadow p-4');
	$('.selected ').addClass('');
});


// dropdown
$('select').each(function(){
	var $this = $(this), numberOfOptions = $(this).children('option').length;
     
	$this.addClass('select-hidden'); 
	$this.wrap('<div class="select"></div>');
	$this.after('<div class="select-styled"></div>');
   
	var $styledSelect = $this.next('div.select-styled');
	$styledSelect.text($this.children('option').eq(0).text());
     
	var $list = $('<ul />', {
	    'class': 'select-options'
	}).insertAfter($styledSelect);
     
	for (var i = 0; i < numberOfOptions; i++) {
	    $('<li />', {
		 text: $this.children('option').eq(i).text(),
		 rel: $this.children('option').eq(i).val()
	    }).appendTo($list);
	}
     
	var $listItems = $list.children('li');
     
	$styledSelect.click(function(e) {
	    e.stopPropagation();
	    $('div.select-styled.active').not(this).each(function(){
		 $(this).removeClass('active').next('ul.select-options').hide();
	    });
	    $(this).toggleClass('active').next('ul.select-options').toggle();
	});
     
	$listItems.click(function(e) {
	    e.stopPropagation();
	    $styledSelect.text($(this).text()).removeClass('active');
	    $this.val($(this).attr('rel'));
	    $list.hide();
	    //console.log($this.val());
	});
     
	$(document).click(function() {
	    $styledSelect.removeClass('active');
	    $list.hide();
	});
   
});




$(".nav-link").click(function() {
     if (
	$(this)
	  .parent()
	  .hasClass("selected")
     ) {
	$(".nav-link").removeClass("selected");
	$(this)
	  .parent()
	  .removeClass("selected");
     } else {
	$(".nav-link").removeClass("selected");
	$(this)
	  .next(".sidebar-submenu")
	  .slideDown(200);
	$(this)
	  .parent()
	  .addClass("selected");
	$(".nav-item .show").slideDown(200)
     }
});

var item = 0;
function add_so_thich(text,id){
	
	var array = document.querySelectorAll("#so_thich_group .nav-item");
	if(id.length == 10 )
		item = id.slice(9, 10);
	else
		item = id.slice(9,11);
	$("#so_thich_group ").append('<li class="nav-item" id="so_thich'+ item +'" > <p>'+ text.text+'</p><a class="nav-link active" role="button" id="add-interests'+ item +'" data-toggle="tooltip" data-placement="bottom" href="javascript:void(0);" role="button" onclick="remove(this.id)" title="Xoá"><i class="fas fa-times-circle""></i></a></li>');
}
function remove(test){
	
	if(test.length == 14 )
		var number = test.slice(13, 14);
	else
		number = test.slice(13,15);
	$("#so_thich_group li").remove("#so_thich"+number);

	$("#add_item"+number).removeClass(" selected");
};
$("#add-interests").ready(function($){
	$('[data-toggle="tooltip"]').tooltip;
});
//map

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}