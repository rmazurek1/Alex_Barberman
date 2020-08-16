AOS.init({
    duration: 2000,
    offset: 200,
})

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');


const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
}


hamburger.addEventListener('click', handleClick);

function initMap() {
    // The location of Uluru
    var uluru = {
        lat: 51.112288,
        lng: 17.013194
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15,
            center: uluru
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

}