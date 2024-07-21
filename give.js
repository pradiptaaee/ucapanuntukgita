const video = document.getElementById('video-bg');
const lagu = document.getElementById('lagu');
const teksbottom = document.querySelector('.teks-bottom');
const link =document.getElementById('link')

function fullLayar() {
    var elem = document.documentElement;

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
    }

}

function playlagu(){
    lagu.play()
    lagu.loop=true

}

function playvideo() {
    setTimeout(function () {
        video.style.display = 'block';
        video.style.opacity = 1;
        video.play();
        video.loop = true;
    }, 2000); 
}

document.addEventListener('DOMContentLoaded', function () {
    fullLayar()
    const pages = document.querySelectorAll('.page');
    const cover = document.querySelector('.cover');
    const btnOpen = document.getElementById('btn-open');
    let currentPage = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            if (i === index) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    }

    btnOpen.addEventListener('click', function () {
        teksbottom.style.opacity= 1;
        playlagu();
        playvideo();
        document.querySelector('.head').style.transform = 'translate(0,0)';
        cover.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            cover.style.display = 'none';
            showPage(currentPage);
            document.body.addEventListener('click', nextPage);
        }, 500); // Duration matches the transition duration in CSS
    });

    function nextPage() {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
            if (currentPage === pages.length - 1) {
                document.body.removeEventListener('click', nextPage);
                link.style.display = 'block';
                document.body.addEventListener('click', refreshPage);
            }
        }
    }

    function refreshPage() {
        setTimeout(() => {
            location.reload();
             // Refresh the browser when the last page is clicked
        }, 500); // Add a small delay for the transition
    }
});