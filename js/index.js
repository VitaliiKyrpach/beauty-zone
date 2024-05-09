$(function(){
    $('.btn-order').on('click',handleModal);
    $('.modal-cross').on('click', handleModal);
    $('.header-burger').on('click', handleMenu);
    $('.mob-btn-close').on('click', handleMenu);
    $('.form').on('submit',handleSubmit)
}
)

function handleModal(){
    $('.backdrop').toggleClass('is-hidden');
    $('body').toggleClass('no-scroll');
}

function handleMenu(){
   $('.mobile-menu').toggleClass('open');
    $('body').toggleClass('no-scroll')
}

function handleSubmit(e){
    e.preventDefault()
    var name = $('#customer-name').val();
    alert(`${name}, дякуємо за ваше звернення! Будь-ласка очікуйте,скоро з вами зв'яжеться оператор.`)
    $('.form')[0].reset();
}