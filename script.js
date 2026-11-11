// ===== Ambil elemen yang akan dipakai =====
const themeToggle = document.getElementById("theme-toggle");
const tipBtn = document.getElementById("tip-btn");
const tipText = document.getElementById("tip-text");
const counterBtn = document.getElementById("counter-btn");
const counterEl = document.getElementById("counter");

// ===== 1. Tombol ganti tema (terang/gelap) =====
themeToggle.addEventListener("click", () => {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";

  if (isDark) {
    html.removeAttribute("data-theme");
    themeToggle.textContent = "🌙 Tema";
  } else {
    html.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️ Tema";
  }
});

// ===== 2. Tips Git acak =====
const gitTips = [
  "Commit kecil dan sering lebih baik daripada satu commit raksasa.",
  "Selalu jalankan `git status` sebelum `git add` untuk melihat apa yang berubah.",
  "Tulis pesan commit yang menjelaskan APA dan KENAPA, bukan sekadar 'update'.",
  "Branch itu murah! Buat branch baru untuk setiap fitur atau eksperimen.",
  "Jangan pernah commit password, API key, atau file rahasia.",
  "`git log --oneline` menampilkan riwayat commit dengan ringkas.",
  "Salah commit? Tenang, hampir semua hal di Git bisa diperbaiki.",
  "Push sering-sering: commit yang sudah di GitHub aman dari laptop rusak.",
  "Cek `git diff` sebelum commit untuk memastikan hanya perubahan yang kamu maksud.",
];

tipBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * gitTips.length);
  tipText.textContent = "💡 " + gitTips[randomIndex];
});

// ===== 3. Penghitung klik =====
let count = 0;

counterBtn.addEventListener("click", () => {
  count++;
  counterEl.textContent = count;
});