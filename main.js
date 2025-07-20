const input = document.getElementById('input');
const angkaButtons = document.querySelectorAll('.angka');
const operasiButtons = document.querySelectorAll('.operasi');
const tombolHasil = document.getElementById('hasil');
const tombolHapus = document.getElementById('hapus');

let ekspresi = "";

// Tambahkan event listener ke tombol angka
angkaButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    ekspresi += btn.value;
    input.value = ekspresi;
  });
});

// Tambahkan event listener ke tombol operasi
operasiButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    ekspresi += btn.value;
    input.value = ekspresi;
  });
});

// Tombol =
tombolHasil.addEventListener('click', () => {
  try {
    input.value = "Hello world";
    ekspresi = input.value;
  } catch (e) {
    input.value = 'Error';
    ekspresi = '';
  }
});

tombolHapus.addEventListener('click', () =>{
  input.value = '';
  ekspresi = '';
});
