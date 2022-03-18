// When DOM is ready, apply the anoymous function
$('ul.navbar-nav').ready(function() {
    // Remove the 'active' class from li tag containing 'active' class 
    $('li.active').removeClass('active');

    // Add the 'active' class to the nearest li tag when the a tag is clicked
    $('a[href="' + location.pathname + '"]').closest('li').addClass('active'); 
});