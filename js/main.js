
var $grid = $('.portfolio-items').isotope('layout');

// filter items on button click
$('.portfolio-filter').on( 'click', 'a', function(event) {
event.preventDefault();
var filterValue = $(this).attr('data-filter');
$grid.isotope({ filter: filterValue });

$('.portfolio-filter li').removeClass('active');
$(this).closest('li').addClass('active');
});
