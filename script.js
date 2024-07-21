const img = document.getElementById("gambar")
const atas = document.getElementById("atas")
const bawah = document.getElementById("bawah")
const ctn = document.getElementById("content")
const musik = document.getElementById("musik")
const ucapan = document.getElementById("ucapan")
const btn = document.getElementById("btn")
const btn_2 = document.getElementById("btn_2")
const btn_3 = document.getElementById("btn_3")
const pesan = document.getElementById("link")
const kotak_pesan = document.getElementById("kotak-pesan")
const nm = document.getElementById("nama")
const nm_2 = document.getElementById("nama2")
const video = document.getElementById('video')
const btn_4 = document.getElementById('btn_4')

// edit data diri kalian di sini harus ada +62 diawal nomornya sebagain ganti 0, misal +62818....
const nomor_hp_yang_ngirim = "+6281374880006"
const nama_yang_ngirim = "Pangeran Diptaa"

// nama 
const nama = "Puteri Gita"

// yang ini biarin aja
let n = 0
const link_wa = `https://api.whatsapp.com/send?text=Aku udah terima ucapannya, makasih 😊 ya ${nama_yang_ngirim}&phone=${nomor_hp_yang_ngirim}`
nm.textContent = nama
nm_2.textContent = nama_yang_ngirim

// kata katanya tapi perhatiin tanda `` nya biar enggak eror
const kata = [
  `Selamat ulang tahun ya ${nama}, 🎂`,
  `Kuat selalu yaaa 💪`,
  `Selalu tersenyum, apapun yang orang lakuin ke kita ya gitaa`,
  `Jangan lupa di makan 🍰 nya, walau virtual hehe`,
  `Sekali lagi selamat HBD gita kiyowo 🙌😉`
]

function gantiGambar(a) {
  btn_4.style.display = "none"
  atas.style.height = "40%"
  bawah.style.height = "60%"
  btn.style.display = "none"
  btn_2.style.bottom = "10px"
  btn_2.style.left = "10px"
  btn_2.style.width = "30%"
  btn.textContent = "next"
  ctn.style.backgroundColor = "rgba(255,255,255, .1"
  setTimeout(()=> {
    img.src = "kue_2.png"
  }, 100)
  ucapanCetak()
}

function videoplay(){
  video.style.display='block'
  video.play()
  video.loop=true
}


function musikPlay() {
  musik.play()
  musik.loop = true

}

function exit() {
  kotak_pesan.style.display = "none"
  musikPlay()
  fullLayar()
}

function ucapanCetak() {
  ucapan.textContent = kata[n]
  btn_2.textContent = "next"
  if (n == 3) {
    btn_4.style.display= "none"
    btn_3.style.width = "50%"
    btn_3.style.bottom = "20px"
    btn_3.style.display = "block"
    btn_3.textContent = "makan"
    btn_2.style.display = "none"
  } else if (n > kata.length - 1) {
    btn_4.style.display = "none"
    btn_2.style.display = "none"
    pesan.style.display = "block"
    ucapan.style.display = "none"
    atas.style.height = "70%"
    bawah.style.height = "30%"
    ctn.style.height = "320px"
    atas.style.height = "0"
    bawah.style.height = "100%"
    ctn.style.height = "200px"
    
  }
  
  if(n == kata.length - 1){
    btn_4.style.display = "block"
    btn_2.style.display='none'
    atas.style.height = "60%"
    bawah.style.height = "40%"
    videoplay()
    img.style.display = "none"
    ctn.style.height = "400px"
  }
  n++
}
function gantipage(){
  window.location.href='give.html'
}

function hapusKue(){
  btn_2.style.display = "block"
  btn_2.textContent = "Udah -_-"
  btn_3.style.display = "none"
  img.src = "tekwondo.jpg"
  img.style.width = "200px"
}
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