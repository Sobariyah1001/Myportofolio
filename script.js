// JavaScript to toggle profile images on Menu 1
const profileImages = document.querySelectorAll('.profile-image img');

let currentImageIndex = 0;

function toggleProfileImage() {
  profileImages[currentImageIndex].classList.add('hidden');

  currentImageIndex = (currentImageIndex + 1) % profileImages.length;

  profileImages[currentImageIndex].classList.remove('hidden');
}

setInterval(toggleProfileImage, 2600); // Change image every 3 seconds

// Call toggleProfileImage() to start the animation
toggleProfileImage();

// JavaScript to animate profile name on Menu 1
const profileName = document.querySelector('.profile-name');

window.addEventListener('load', () => {
  profileName.classList.add('visible');
});

// JavaScript untuk menambahkan dan menghapus kelas 'active' pada menu saat di klik
const menuLinks = document.querySelectorAll('.menu-link');

// Fungsi untuk menentukan menu aktif berdasarkan posisi scroll halaman
function setActiveMenu() {
  const scrollPosition = window.scrollY;
  const sections = document.querySelectorAll('.landing-page > div');

  // Loop melalui setiap section dan tentukan menu yang aktif
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const menuLink = menuLinks[index];

    // Periksa jika halaman berada pada bagian section yang sesuai
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Hapus kelas 'active' dari semua menu
      menuLinks.forEach(menu => {
        menu.classList.remove('active');
      });

      // Tambahkan kelas 'active' pada menu yang sesuai
      menuLink.classList.add('active');
    }
  });
}

// Panggil fungsi setActiveMenu saat halaman dimuat dan saat di-scroll
window.addEventListener('DOMContentLoaded', setActiveMenu);
window.addEventListener('scroll', setActiveMenu);

// JavaScript untuk menambahkan dan menghapus kelas 'active' pada menu saat di klik
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Ambil target ID dari atribut 'href' pada menu yang diklik
    const targetId = link.getAttribute('href');

    // Dapatkan elemen target berdasarkan ID
    const targetElement = document.querySelector(targetId);

    // Hitung posisi scroll yang diinginkan agar menu berada di paling bawah halaman
    const scrollPosition = targetElement.offsetTop + targetElement.offsetHeight - window.innerHeight;

    // Scroll ke elemen target dengan efek smooth
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });

    // Hapus kelas 'active' dari semua menu
    menuLinks.forEach(menu => {
      menu.classList.remove('active');
    });

    // Tambahkan kelas 'active' pada menu yang sedang aktif (diklik)
    link.classList.add('active');
  });
});

// Fungsi untuk menentukan menu aktif berdasarkan posisi scroll halaman
function setActiveMenu() {
  const scrollPosition = window.scrollY;
  const sections = document.querySelectorAll('.landing-page > div');

  // Loop melalui setiap section dan tentukan menu yang aktif
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const menuLink = menuLinks[index];

    // Periksa jika halaman berada pada bagian section yang sesuai
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Hapus kelas 'active' dari semua menu
      menuLinks.forEach(menu => {
        menu.classList.remove('active');
      });

      // Tambahkan kelas 'active' pada menu yang sesuai
      menuLink.classList.add('active');
    }
  });
}

// Panggil fungsi setActiveMenu saat halaman dimuat dan saat di-scroll
window.addEventListener('DOMContentLoaded', setActiveMenu);
window.addEventListener('scroll', setActiveMenu);

// Fungsi untuk mengatur animasi skill-value
function animateSkillBars(skillContainer) {
  const skillBars = skillContainer.querySelectorAll(".skill-value");
  skillBars.forEach(skill => {
    const percentage = skill.dataset.progress; // Dapatkan nilai persentase dari atribut 'data-progress'
    skill.style.setProperty('--percentage', `${percentage}%`); // Atur nilai CSS variable untuk animasi lebar
    skill.classList.add('animate'); // Tambahkan kelas 'animate' untuk memulai animasi
  });
}

// Fungsi untuk menangani peristiwa intersect pada elemen "Skills"
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillContainer = entry.target;
      skillContainer.style.opacity = "1";
      animateSkillBars(skillContainer); // Pemicu animasi untuk bar keahlian di dalam "Skills" yang muncul di layar
      observer.unobserve(skillContainer); // Hentikan observasi setelah elemen terlihat
    }
  });
}

// Inisialisasi IntersectionObserver untuk elemen "Skills"
const skillContainers = document.querySelectorAll(".skills");
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.1 // Ambang yang digunakan untuk mendeteksi elemen masuk ke dalam viewport
});

// Observasi semua elemen "Skills"
skillContainers.forEach(skillContainer => {
  observer.observe(skillContainer);
});

// JavaScript to toggle profile images on Menu 3
const projectImages = document.querySelectorAll('.project-image img');

let currentImageIndex2 = 0;

function toggleProjectImage() {
  projectImages[currentImageIndex2].classList.add('hidden');

  currentImageIndex2 = (currentImageIndex2 + 1) % projectImages.length;

  projectImages[currentImageIndex2].classList.remove('hidden');
}

setInterval(toggleProjectImage, 2600); // Change image every 3 seconds

// Call toggleProjectImage() to start the animation
toggleProjectImage();

// JavaScript to animate project name on Menu 1
const projectName = document.querySelector('.project-name');

window.addEventListener('load', () => {
  projectName.classList.add('visible');
});


