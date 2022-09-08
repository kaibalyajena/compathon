function rotate()
{
    var lastChild = $('.slider div:last-child').clone();

    $('.slider div').removeClass('firstSlider');

    $('.slider div:lastChild').remove();

    $('.slider').prepend(lastChild);

    $(lastChild).addClass('firstSlider');
}

window.setInterval(function()
{
    
    rotate();

},2000);
