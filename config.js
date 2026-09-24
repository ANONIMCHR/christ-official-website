const CONFIG = {
  brand: {
    name: "Christ Official",
    tagline: "Developer",
    faviconEmoji: "🌌"
  },
  intro: {
    lines: [
      "Hello, I'm Christ.",
      "I AM THE DEVELOPER OF FELIX TOOLS",
      "THIS IS THE OFFICIAL WEBSITE FOR INFORMATION ABOUT MY PANEL ROLE STATUS AND SOCIAL MEDIA",
      "PLEASE CHECK YOUR FELIX PANEL STATUS BELOW AND IF YOU WANT TO CONTACT ME, YOU CAN DO SO VIA WHATSAPP, INSTAGRAM, OR MY EMAIL"
    ],
    typingSpeedMs: 45,
    pauseBetweenLinesMs: 900,
    loop: true
  },
  photoBox: {
    title: "My Girl ❤",
    images: [
      "PICTURE-1",
      "PICTURE-2",
      "PICTURE-3",
      "PICTURE-4",
      "PICTURE-5"
    ],
    intervalMs: 5000
  },
  leaderboard: {
    title: "Panel Felix Tools",
    subtitle: "Live status & role",
    sources: [
      "https://raw.githubusercontent.com/ANONIMCHR/database/refs/heads/main/users.json",
      "https://raw.githubusercontent.com/ANONIMCHR/database/refs/heads/main/users2.json",
      "https://raw.githubusercontent.com/ANONIMCHR/database/refs/heads/main/users3.json",
      "https://raw.githubusercontent.com/ANONIMCHR/database/refs/heads/main/users4.json",
      "https://raw.githubusercontent.com/ANONIMCHR/database/refs/heads/main/users5.json"
    ],
    refreshMs: 30000,
    roleColors: {
      owner: "#ff2b3d",
      moderator: "#b26bff",
      member: "#3ba7ff",
      reseller: "#ffd60a"
    },
    roleLabels: {
      owner: "Owner",
      moderator: "Moderator",
      member: "Member",
      reseller: "Reseller"
    }
  },
  projects: [
    {
      name: "Gereja Presenter",
      description: "Desktop app presentasi ibadah (Electron.js) - alternatif EasyWorship yang lebih simpel. Ada manajemen lirik & playlist, Alkitab TB 66 kitab lengkap, custom font, background video/gambar, animasi teks, dual-screen live output + preview.",
      tag: "Desktop - Electron.js",
      link: "#"
    },
    {
      name: "AntiCheat Guard v1.0",
      description: "Desktop app (Electron.js) buat game Blood Strike - scan proses Windows lewat tasklist & WMIC, UI bertema galaxy, PIN unlock, force-close proses mencurigakan, sama notifikasi Windows.",
      tag: "Desktop - Electron.js",
      link: "#"
    },
    {
      name: "ApiApi",
      description: "Project Node.js yang integrasiin WhatsApp (Baileys), Telegram Bot, dan SSH jadi satu panel kontrol.",
      tag: "Backend - Node.js",
      link: "#"
    },
    {
      name: "Web Panel Management",
      description: "Panel manajemen berbasis satu file HTML - login, sinkronisasi GitHub, dan sistem role bertingkat (admin/owner/reseller) dengan tema merah-putih.",
      tag: "Web Tool",
      link: "#"
    }
  ],
  socials: {
    instagram: "https://instagram.com/christandyk_",
    whatsapp: "https://wa.me/6285811454916",
    email: "christandykakauhe4@gmail.com"
  }
};