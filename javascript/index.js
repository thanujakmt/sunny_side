
const change_image = () => {
    var screenwidth = window.innerWidth;

    if(screenwidth < 700){
        document.querySelector('.first_img').src = '/static/images/mobile/image-header.jpg';
        document.querySelector('.pic1').src = '/static/images/mobile/image-gallery-milkbottles.jpg';
        document.querySelector('.pic2').src = '/static/images/mobile/image-gallery-orange.jpg';
        document.querySelector('.pic3').src = '/static/images/mobile/image-gallery-cone.jpg';
        document.querySelector('.pic4').src = '/static/images/mobile/image-gallery-sugar-cubes.jpg';
    } else {
        document.querySelector('.first_img').src = '/static/images/desktop/image-header.jpg';
        document.querySelector('.pic1').src = '/static/images/desktop/image-gallery-milkbottles.jpg';
        document.querySelector('.pic2').src = '/static/images/desktop/image-gallery-orange.jpg';
        document.querySelector('.pic3').src = '/static/images/desktop/image-gallery-cone.jpg';
        document.querySelector('.pic4').src = '/static/images/desktop/image-gallery-sugarcubes.jpg';
    }
}
change_image()

document.getElementById('mobile_menu').style.display = 'none';
document.querySelector('.box').style.display = 'none';

var menu_btn = document.querySelector('.menu_icon');

menu_btn.addEventListener('click', () => {
    document.getElementById('mobile_menu').style.display = 'block';
    document.querySelector('.box').style.display = 'block';
});

var con = document.querySelector('.first_img');

con.addEventListener('click', () => {
    document.getElementById('mobile_menu').style.display = 'none';
    document.querySelector('.box').style.display = 'none';
});
