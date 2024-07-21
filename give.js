const video = document.getElementById('video-bg');
const lagu = document.getElementById('lagu');
const teksbottom = document.querySelector('.teks-bottom');
const link =document.getElementById('link')




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
    fullLayar();
    const pages = document.querySelectorAll('.page');
    const cover = document.querySelector('.cover');
    const btnOpen = document.getElementById('btn-open');
    const link = document.getElementById('link'); // Pastikan Anda memiliki elemen dengan ID 'link'
    let currentPage = 0;

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
        teksbottom.style.opacity = 1;
        playlagu();
        playvideo();
        document.querySelector('.head').style.transform = 'translate(0,0)';
        cover.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            cover.style.display = 'none';
            showPage(currentPage);
            document.body.addEventListener('click', nextPage);
        }, 1000); // Duration matches the transition duration in CSS
    });

    function nextPage() {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
            if (currentPage === pages.length - 1) {
                document.body.removeEventListener('click', nextPage);
                link.style.display = 'block'; // Show the link when reaching the last page
                document.body.addEventListener('click', refreshPage);
            }
        }
    }

    function refreshPage() {
        setTimeout(() => {
            location.reload(); // Refresh the browser when the last page is clicked
        }, 500); // Add a small delay for the transition
    }

    // Cobalah masuk ke mode layar penuh saat halaman dimuat
    document.addEventListener('click', function initFullscreen() {
        fullLayar();
        document.removeEventListener('click', initFullscreen);
    });
});
