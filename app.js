// ===== GADGETHUB APP.JS =====

// ---- STORAGE UTILS ----
const store = {
  get: (k, def = null) => {
    try {
      return JSON.parse(localStorage.getItem(k)) ?? def;
    } catch {
      return def;
    }
  },
  set: (k, v) => localStorage.setItem(k, JSON.stringify(v)),
};

// ---- DATA STORE ----
const savedSettings = store.get("gh_settings") || {};

const GH = {
  waNumber: savedSettings.waNumber || "6281234567890",// Ganti dengan nomor WA toko

  defaultProducts: [
    {
      id: "GH-001",
      name: "iPhone 15 Pro Max",
      brand: "Apple",
      price: 21499000,
      originalPrice: 23999000,
      discount: 10,
      image: "📱",
      images: [
        "https://via.placeholder.com/400?text=iPhone+15+Pro+Max+1",
        "https://via.placeholder.com/400?text=iPhone+15+Pro+Max+2",
      ],
      videoUrl: "https://youtu.be/M0au92yebLQ?si=ZD3_7t5dil1xqVdI",
      color: "#1a1a2e",
      status: "ready",
      stock: 5,
      specs: {
        layar: '6.7" Super Retina XDR OLED',
        prosesor: "A17 Pro Bionic",
        ram: "8GB",
        storage: "256GB",
        kamera: "48MP + 12MP + 12MP",
        baterai: "4422 mAh",
        os: "iOS 17",
        warna: "Titanium Natural",
      },
      desc: `Rasakan pengalaman smartphone masa depan dengan iPhone 15 Pro Max—desain paling premium & powerful dari Apple!

✨ Keunggulan Utama:

📱 Desain titanium premium & elegan, nyaman digenggam
⚡ Performa super cepat dengan chip A17 Pro generasi terbaru
📸 Kamera jernih & tajam dengan 3 lensa pro, hasil foto makin profesional
🔋 Baterai tahan lama, cocok untuk aktivitas seharian
🌐 Layar Super Retina XDR 6.7", super smooth & cerah, nyaman untuk gaming & streaming

💎 Cocok untuk kamu yang ingin tampil premium sekaligus butuh performa tinggi!

📦 Kondisi: Baru (Garansi Resmi)
📍 Lokasi: Jakarta, Indonesia
🚀 Stok terbatas! Buruan chat sebelum kehabisan!`,
      sales: 24,
      isNew: true,
    },
    {
      id: "GH-002",
      name: "Samsung Galaxy S24 Ultra",
      brand: "Samsung",
      price: 19999000,
      originalPrice: 19999000,
      discount: 0,
      image: "📲",
      images: ["https://via.placeholder.com/400?text=Samsung+S24+Ultra+1"],
      videoUrl: "https://youtu.be/M0au92yebLQ?si=ZD3_7t5dil1xqVdI",
      color: "#0d1b2a",
      status: "ready",
      stock: 3,
      specs: {
        layar: '6.8" Dynamic AMOLED 2X',
        prosesor: "Snapdragon 8 Gen 3",
        ram: "12GB",
        storage: "256GB",
        kamera: "200MP + 12MP + 10MP + 50MP",
        baterai: "5000 mAh",
        os: "Android 14",
        warna: "Titanium Black",
      },
      desc: `Dapatkan pengalaman flagship terbaik dengan Samsung Galaxy S24 Ultra!

✨ Keunggulan Utama:

📱 Desain simetris & premium dengan layar Dynamic AMOLED 2X
⚡ Performa maksimal dengan Snapdragon 8 Gen 3
📸 Kamera 200MP revolusioner dengan AI enhancement
🖊️ S Pen terintegrasi untuk produktivitas maksimal
🔋 Baterai 5000 mAh dengan pengisian 45W

💎 Smartphone flagship lengkap untuk profesional & content creator!

🚀 Ready Stock - Pesan sekarang juga!`,
      sales: 18,
      isNew: true,
    },
    {
      id: "GH-003",
      name: "Xiaomi 14 Ultra",
      brand: "Xiaomi",
      price: 14999000,
      originalPrice: 16999000,
      discount: 12,
      image: "🔥",
      images: ["https://via.placeholder.com/400?text=Xiaomi+14+Ultra+1"],
      videoUrl: "https://youtu.be/M0au92yebLQ?si=ZD3_7t5dil1xqVdI",
      color: "#1a0a2e",
      status: "ready",
      stock: 8,
      specs: {
        layar: '6.73" LTPO AMOLED',
        prosesor: "Snapdragon 8 Gen 3",
        ram: "16GB",
        storage: "512GB",
        kamera: "50MP Leica + 50MP + 50MP",
        baterai: "5000 mAh",
        os: "Android 14 (MIUI 15)",
        warna: "White",
      },
      desc: `Kamera profesional dengan Leica di genggaman - Xiaomi 14 Ultra!

✨ Keunggulan Utama:

📱 Desain mewah dengan layar LTPO AMOLED 6.73"
⚡ Snapdragon 8 Gen 3 untuk performa ekstrem
📸 Lensa Leica triple 50MP untuk hasil foto profesional
🔋 Baterai 5000 mAh dengan pengisian 120W Super FastCharge
🎥 Video recording 8K ultra smooth

💎 Perfect untuk fotografer & vlogger profesional!

🚀 Limited Stock - Limited Edition!`,
      sales: 31,
      isNew: false,
    },
    {
      id: "GH-004",
      name: "Google Pixel 8 Pro",
      brand: "Google",
      price: 13999000,
      originalPrice: 13999000,
      discount: 0,
      image: "🎯",
      images: ["https://via.placeholder.com/400?text=Google+Pixel+8+Pro+1"],
      videoUrl: "https://youtu.be/M0au92yebLQ?si=ZD3_7t5dil1xqVdI",
      color: "#0a1a0a",
      status: "po",
      stock: 0,
      specs: {
        layar: '6.7" LTPO OLED',
        prosesor: "Google Tensor G3",
        ram: "12GB",
        storage: "128GB",
        kamera: "50MP + 48MP + 48MP",
        baterai: "5050 mAh",
        os: "Android 14",
        warna: "Obsidian",
      },
      desc: `AI pada level berikutnya - Google Pixel 8 Pro!

✨ Keunggulan Utama:

📱 Desain premium dengan layar LTPO OLED 6.7"
🤖 Google Tensor G3 dengan AI terdepan
📸 Magic Eraser, Photo Unblur, Best Take feature unik
🎤 Call Screen & Direct My Call untuk privasi maksimal
🔋 Battery Saver hingga 72 jam standby

💎 Smartphone paling cerdas untuk kebutuhan digital modern!

🚀 Pre-Order Sekarang - Jadilah yang pertama!`,
      sales: 9,
      isNew: false,
    },
    {
      id: "GH-005",
      name: "OPPO Find X7 Ultra",
      brand: "OPPO",
      price: 16499000,
      originalPrice: 18999000,
      discount: 13,
      image: "💎",
      images: ["https://via.placeholder.com/400?text=OPPO+Find+X7+Ultra+1"],
      videoUrl: "https://youtu.be/M0au92yebLQ?si=ZD3_7t5dil1xqVdI",
      color: "#1a1000",
      status: "ready",
      stock: 4,
      specs: {
        layar: '6.82" LTPO AMOLED',
        prosesor: "Snapdragon 8 Gen 3",
        ram: "16GB",
        storage: "512GB",
        kamera: "50MP Hasselblad + 50MP + 50MP",
        baterai: "5000 mAh",
        os: "Android 14 (ColorOS 14)",
        warna: "Blue",
      },
      desc: `Fotografi ultra dengan Hasselblad - OPPO Find X7 Ultra!

✨ Keunggulan Utama:

📱 Desain ultra premium dengan layar LTPO AMOLED
📸 Triple kamera 50MP dengan lensa Hasselblad
⚡ Snapdragon 8 Gen 3 untuk gaming & multitasking
🔌 SuperVOOC 100W - Penuh hanya 30 menit!
🎥 Video stabilization teknologi terkini

💎 Untuk para profesional & enthusiast fotografi!

🚀 Garansi Resmi - Buruan Pesan!`,
      sales: 15,
      isNew: true,
    },
    {
      id: "GH-006",
      name: "Vivo X100 Pro",
      brand: "Vivo",
      price: 13499000,
      originalPrice: 14999000,
      discount: 10,
      image: "⚡",
      images: ["https://via.placeholder.com/400?text=Vivo+X100+Pro+1"],
      videoUrl: "https://youtu.be/M0au92yebLQ?si=ZD3_7t5dil1xqVdI",
      color: "#00101a",
      status: "ready",
      stock: 6,
      specs: {
        layar: '6.78" LTPO AMOLED',
        prosesor: "Dimensity 9300",
        ram: "16GB",
        storage: "256GB",
        kamera: "50MP Zeiss + 50MP + 64MP",
        baterai: "5400 mAh",
        os: "Android 14 (OriginOS 4)",
        warna: "Asteroid Black",
      },
      desc: `Performance ekstrem dengan Dimensity - Vivo X100 Pro!

✨ Keunggulan Utama:

📱 Desain terusan dengan layar LTPO AMOLED 6.78"
⚡ Dimensity 9300 - Chipset tercepat di kelasnya
📸 Kamera Zeiss triple 50MP+50MP+64MP tele
🔋 Baterai super besar 5400 mAh
🔌 Fast Charging 120W dalam 15 menit penuh
🎮 Gaming smooth 144fps guaranteed

💎 Pilihan terbaik untuk gamers & content creators!

🚀 Stock ready - Chat sekarang juga!`,
      sales: 22,
      isNew: false,
    },
  ],

  defaultSales: [
    { date: "2025-01", revenue: 45000000, orders: 12 },
    { date: "2025-02", revenue: 62000000, orders: 17 },
    { date: "2025-03", revenue: 55000000, orders: 14 },
    { date: "2025-04", revenue: 78000000, orders: 21 },
    { date: "2025-05", revenue: 91000000, orders: 25 },
    { date: "2025-06", revenue: 83000000, orders: 23 },
    { date: "2025-07", revenue: 110000000, orders: 31 },
  ],

  users: [
    {
      id: 1,
      name: "Admin GadgetHub",
      email: "admin@gadgethub.id",
      password: "admin123",
      role: "admin",
    },
    {
      id: 2,
      name: "Budi Santoso",
      email: "budi@email.com",
      password: "user123",
      role: "user",
    },
  ],

  // Runtime
  currentUser: null,
  products: [],
  sales: [],
};

// ---- INIT ----
function initApp() {
  // Load products & sales
  GH.products = store.get("gh_products", GH.defaultProducts);
  GH.sales = store.get("gh_sales", GH.defaultSales);
  GH.users = store.get("gh_users", GH.users);

  // Restore session
  const saved = store.get("gh_user");
  if (saved) GH.currentUser = saved;

  updateNavAuth();

  // Navbar scroll
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    });
  }

  // Close dropdowns on outside click
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".user-avatar-wrap")) {
      document
        .querySelectorAll(".user-dropdown")
        .forEach((d) => d.classList.remove("open"));
    }
  });
}

// ---- FORMAT ----
function formatRp(n) {
  return "Rp " + Number(n).toLocaleString("id-ID");
}

function formatMonth(str) {
  const [y, m] = str.split("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agt",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];
  return months[parseInt(m) - 1] + " " + y;
}

// ---- AUTH ----
function updateNavAuth() {
  const loginBtn = document.getElementById("nav-login-btn");
  const userWrap = document.getElementById("nav-user-wrap");
  const userInitial = document.getElementById("nav-user-initial");
  const userName = document.getElementById("nav-user-name");

  if (GH.currentUser) {
    if (loginBtn) loginBtn.style.display = "none";
    if (userWrap) userWrap.style.display = "flex";
    if (userInitial)
      userInitial.textContent = GH.currentUser.name[0].toUpperCase();
    if (userName) userName.textContent = GH.currentUser.name.split(" ")[0];
  } else {
    if (loginBtn) loginBtn.style.display = "";
    if (userWrap) userWrap.style.display = "none";
  }
}

function login(email, password) {
  const user = GH.users.find(
    (u) => u.email === email && u.password === password,
  );
  if (!user) return false;
  GH.currentUser = user;
  store.set("gh_user", user);
  updateNavAuth();
  return user;
}

function logout() {
  GH.currentUser = null;
  localStorage.removeItem("gh_user");
  updateNavAuth();
  toast("Berhasil logout", "success");
  setTimeout(() => (location.href = "index.html"), 800);
}

function requireAuth(role = null) {
  if (!GH.currentUser) {
    toast("Silakan login terlebih dahulu", "error");
    openLoginModal();
    return false;
  }
  if (role && GH.currentUser.role !== role) {
    toast("Akses tidak diizinkan", "error");
    return false;
  }
  return true;
}

// ---- MODALS ----
function openModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function openLoginModal() {
  openModal("modal-login");
}

// ---- TOAST ----
function toast(msg, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const icons = { success: "✅", error: "❌", info: "ℹ️", warning: "⚠️" };
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  el.innerHTML = `<span class="toast-icon">${icons[type] || "💬"}</span><span>${msg}</span>`;
  container.appendChild(el);
  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transition = "opacity 0.3s";
    setTimeout(() => el.remove(), 300);
  }, 3000);
}

// ---- WHATSAPP ORDER ----
function buildWAMessage(product, user = null) {
  const price = product.discount > 0 ? product.price : product.price;
  let msg = `Halo GadgetHub! 👋\n\nSaya ingin memesan produk berikut:\n\n`;
  msg += `📱 *${product.name}*\n`;
  msg += `🔖 Kode Produk: *${product.id}*\n`;
  msg += `💰 Harga: *${formatRp(price)}*\n`;
  if (product.discount > 0) msg += `🏷️ Diskon: ${product.discount}%\n`;
  msg += `📦 Status: ${product.status === "ready" ? "Ready Stock" : "Pre-Order"}\n`;
  if (user)
    msg += `\n👤 Nama Pemesan: *${user.name}*\n📧 Email: ${user.email}\n`;
  msg += `\nMohon konfirmasi ketersediaan dan detail pengiriman. Terima kasih!`;
  return msg;
}

function orderViaWA(productId) {
  const product = GH.products.find((p) => p.id === productId);
  if (!product) return;

  if (!GH.currentUser) {
    // Store pending order
    sessionStorage.setItem("gh_pending_order", productId);
    toast("Login dulu untuk memesan", "info");
    openLoginModal();
    return;
  }

  const msg = buildWAMessage(product, GH.currentUser);
  const url = `https://wa.me/${GH.waNumber}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");

  // Add to sales stats (simulate)
  addSaleRecord(product);
}

function addSaleRecord(product) {
  const now = new Date();
  const key = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  const existing = GH.sales.find((s) => s.date === key);
  if (existing) {
    existing.revenue += product.price;
    existing.orders += 1;
  } else {
    GH.sales.push({ date: key, revenue: product.price, orders: 1 });
  }

  // Update product sales count
  const p = GH.products.find((p) => p.id === product.id);
  if (p) p.sales = (p.sales || 0) + 1;

  store.set("gh_sales", GH.sales);
  store.set("gh_products", GH.products);
}

// ---- PRODUCTS CRUD (Admin) ----
function saveProducts() {
  store.set("gh_products", GH.products);
}

function addProduct(data) {
  const newProd = {
    id: "GH-" + String(GH.products.length + 1).padStart(3, "0"),
    name: data.name,
    brand: data.brand,
    price: parseInt(data.price),
    originalPrice: parseInt(data.originalPrice || data.price),
    discount: parseInt(data.discount || 0),
    image: data.image || "📱",
    images: data.images || [data.image || "📱"],
    videoUrl: data.videoUrl || "",
    color: "#1a1a24",
    status: data.status || "ready",
    stock: parseInt(data.stock || 0),
    specs: {
      layar: data.layar || "-",
      prosesor: data.prosesor || "-",
      ram: data.ram || "-",
      storage: data.storage || "-",
      kamera: data.kamera || "-",
      baterai: data.baterai || "-",
      os: data.os || "-",
      warna: data.warna || "-",
    },
    desc: data.desc || "",
    sales: 0,
    isNew: true,
  };
  GH.products.unshift(newProd);
  saveProducts();
  return newProd;
}

function updateProduct(id, data) {
  const idx = GH.products.findIndex((p) => p.id === id);
  if (idx === -1) return;
  GH.products[idx] = { ...GH.products[idx], ...data };
  saveProducts();
}

function deleteProduct(id) {
  GH.products = GH.products.filter((p) => p.id !== id);
  saveProducts();
}

// ---- SHARED MODAL CLOSE ----
document.addEventListener("DOMContentLoaded", () => {
  initApp();

  // Close modals on backdrop click
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });

  // ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document
        .querySelectorAll(".modal-overlay.open")
        .forEach((m) => closeModal(m.id));
    }
  });

  // Login form
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value;
      const user = login(email, password);
      if (user) {
        closeModal("modal-login");
        toast(`Selamat datang, ${user.name.split(" ")[0]}! 👋`, "success");

        // Check pending order
        const pending = sessionStorage.getItem("gh_pending_order");
        if (pending) {
          sessionStorage.removeItem("gh_pending_order");
          setTimeout(() => orderViaWA(pending), 500);
        }

        // Redirect admin
        if (user.role === "admin" && !location.pathname.includes("admin")) {
          setTimeout(() => (location.href = "admin.html"), 1000);
        } else {
          setTimeout(() => location.reload(), 500);
        }
      } else {
        toast("Email atau password salah", "error");
      }
    });
  }

  // Register form
  const regForm = document.getElementById("register-form");
  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("reg-name").value.trim();
      const email = document.getElementById("reg-email").value.trim();
      const password = document.getElementById("reg-password").value;
      if (GH.users.find((u) => u.email === email)) {
        toast("Email sudah terdaftar", "error");
        return;
      }
      const newUser = { id: Date.now(), name, email, password, role: "user" };
      GH.users.push(newUser);
      store.set("gh_users", GH.users);
      login(email, password);
      closeModal("modal-login");
      toast(
        `Akun berhasil dibuat! Selamat datang, ${name.split(" ")[0]} 🎉`,
        "success",
      );
      setTimeout(() => location.reload(), 500);
    });
  }
});
