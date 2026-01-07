const PIN_DATA = {
  1: {
    name: "Eimantas",
    bg: "https://t3.ftcdn.net/jpg/09/50/17/64/360_F_950176443_XQGPTseUunB0UMYARE4DqORCKiwD3Izl.jpg",
    asker: "https://img.freepik.com/premium-vector/vector-illustration-cartoon-cute-christmas-elf-isolated-white-background_122784-9473.jpg",
    q: "Kur teisingiausia dėti <script> tag'ą, jei nenaudoji defer ar async?",
    a: ["<head> viršuje", "Po HTML elementais, prieš </body>", "Bet kur, JS pats palauks"],
    c: 1,
    ok: "✅ Teisingai — tada DOM jau egzistuoja.",
    no: "❌ Ne — JS gali bandyti pasiekti elementus per anksti."
  },

  2: {
    name: "Ernestas",
    bg: "https://png.pngtree.com/thumb_back/fh260/background/20241124/pngtree-enchanting-holiday-season-snowy-christmas-tree-scene-image_16636663.jpg",
    asker: "https://i.pinimg.com/736x/b6/11/a4/b611a4c2a08a6149af48d6459b5bac92.jpg",
    q: "Kodėl querySelector kartais grąžina null?",
    a: ["Nes CSS neveikia", "Nes toks elementas nerastas DOM'e", "Nes JS išjungtas"],
    c: 1,
    ok: "✅ Teisingai — null reiškia, kad elemento nėra.",
    no: "❌ Ne — problema dažniausiai selektoriuje arba DOM."
  },

  3: {
    name: "Justas",
    bg: "https://www.designyourway.net/blog/wp-content/uploads/2024/04/christmas-wallpaper-from-designyourway-1200x700.jpg",
    asker: "https://static.vecteezy.com/system/resources/previews/069/115/162/non_2x/cute-cartoon-elf-on-white-background-free-vector.jpg",
    q: "Kuo addEventListener geresnis už onclick?",
    a: ["Leidžia turėti kelis event listenerius", "Veikia greičiau", "Veikia tik su CSS"],
    c: 0,
    ok: "✅ Taip — galima pridėti daugiau nei vieną listenerį.",
    no: "❌ Ne — esmė ne greityje ar CSS."
  },

  4: {
    name: "Naglis",
    bg: "https://www.designyourway.net/blog/wp-content/uploads/2024/04/christmas-wallpaper-from-designyourway-1200x700.jpg",
    asker: "https://img.freepik.com/premium-vector/3d-christmas-elf-character_1310440-667.jpg?semt=ais_hybrid&w=740&q=80",
    q: "Kas yra DOM?",
    a: ["Duomenų bazė", "HTML struktūra, kurią mato JS", "CSS failas"],
    c: 1,
    ok: "✅ Teisingai — DOM yra HTML atvaizdas JS'ui.",
    no: "❌ Ne — DOM nėra nei CSS, nei DB."
  },

  5: {
    name: "Kajus",
    bg: "https://miro.medium.com/v2/resize:fit:1400/1*t9Pwbhw-iELogKG1_PwgDw.jpeg",
    asker: "https://i.pinimg.com/736x/8b/10/26/8b1026e21e0bda74a94274838cde8b23.jpg",
    q: "Kas nutinka paspaudus vaiko elementą, jei tėvas irgi turi click?",
    a: ["Suveikia tik vaikas", "Suveikia abu (event bubbling)", "Nieko nevyksta"],
    c: 1,
    ok: "✅ Taip — event bubbling keliauja į viršų.",
    no: "❌ Ne — event'as kyla per tėvinius elementus."
  },

  6: {
    name: "Gerardas",
    bg: "https://www.designyourway.net/blog/wp-content/uploads/2024/04/christmas-wallpaper-from-designyourway-1200x700.jpg",
    asker: "https://t3.ftcdn.net/jpg/09/04/36/84/360_F_904368443_pYFwuVzf7KdNtl4tzCwYimr4kFxFDU9x.jpg",
    q: "Kam naudojamas e.preventDefault()?",
    a: ["Sustabdyti numatytą veiksmą (pvz. form submit)", "Sustabdyti JS", "Ištrinti elementą"],
    c: 0,
    ok: "✅ Teisingai — jis stabdo numatytą naršyklės veiksmą.",
    no: "❌ Ne — JS ar HTML jis netrina."
  },

  7: {
    name: "Saulius",
    bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMi_xoIz0Fn8v-H87uCpJfb5LbcfzYjCv7g&s",
    asker: "https://us.123rf.com/450wm/zrzahid/zrzahid2408/zrzahid240877590/234636128-beautiful-professional-cartoon-character-design-vector-illustration.jpg?ver=6",
    q: "Kam naudojamas localStorage?",
    a: ["Laikinai saugoti iki puslapio uždarymo", "Saugoti duomenis tarp puslapių", "Keisti CSS"],
    c: 1,
    ok: "✅ Taip — localStorage lieka net po refresh.",
    no: "❌ Ne — tai ne CSS ir ne laikina atmintis."
  },

  8: {
    name: "Oskaras",
    bg: "https://getwallpapers.com/wallpaper/full/b/a/7/839051-christmas-hd-wallpapers-1920x1080-ios.jpg",
    asker: "https://img.freepik.com/free-vector/male-elf-holding-gift-gift-box_1308-157090.jpg?semt=ais_hybrid&w=740&q=80",
    q: "Ką daro classList.toggle('active')?",
    a: ["Visada prideda klasę", "Perjungia: prideda arba nuima", "Ištrina elementą"],
    c: 1,
    ok: "✅ Teisingai — toggle perjungia būseną.",
    no: "❌ Ne — toggle nėra delete."
  },

  9: {
    name: "Armandas",
    bg: "https://img.freepik.com/premium-photo/merry-christmas-background-with-pine-trees-balls-gifts-christmas-decorations-digital-illustration_285885-813.jpg?semt=ais_hybrid&w=740&q=80",
    asker: "https://img.freepik.com/premium-vector/cute-elf-isolated-white-background-christmas-vector-illustration_1236256-616.jpg?w=360",
    q: "Kas nutinka, jei JS faile įvyksta klaida?",
    a: ["Nieko", "Kodas nuo tos vietos nustoja veikti", "HTML išnyksta"],
    c: 1,
    ok: "✅ Taip — vykdymas sustoja ties klaida.",
    no: "❌ Ne — HTML neišnyksta."
  },

  10: {
    name: "Giedrius",
    bg: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsb2ZmaWNlN19jaHJpc3RtYXNfYmFja2dyb3VuZF93aXRoX2dyZWVuX3JlZF9hbmRfZ29sZF9jb19iNTg0NGU5ZC03MjgwLTQzZjgtOGY5MS1lMzdkYjY1ZjU4YjEuanBn.jpg",
    asker: "https://img.freepik.com/premium-vector/christmas-elf-santa-claus-helper-vector-illustration-isolated-white-background_110233-4616.jpg?w=360",
    q: "Kuo skiriasi == ir === ?",
    a: ["Niekuo", "=== tikrina ir tipą", "== tikrina griežčiau"],
    c: 1,
    ok: "✅ Teisingai — === lygina ir tipą.",
    no: "❌ Ne — == nėra griežtesnis."
  },

  11: {
    name: "Simona",
    bg: "https://wallpapercat.com/w/full/c/e/5/5821528-3840x2160-desktop-hd-cute-christmas-wallpaper.jpg",
    asker: "https://img.freepik.com/premium-vector/cute-simple-cartoon-elf-girl-clip-art-white-background_1023984-51031.jpg",
    q: "Kas yra event delegation?",
    a: ["Listener ant parent elemento", "Listener ant kiekvieno vaiko", "CSS technika"],
    c: 0,
    ok: "✅ Taip — gaudai event'us per parent.",
    no: "❌ Ne — tai ne CSS."
  },

  12: {
    name: "Kalėdų Senis",
    bg: "https://m.media-amazon.com/images/I/91+5PASgjfL.jpg",
    asker: "https://img.freepik.com/free-vector/cheerful-santa-claus-cartoon-character-festive-celebrations_1308-154048.jpg?semt=ais_hybrid&w=740&q=80",
    q: "Ką daro try...catch?",
    a: ["Gaudo klaidas", "Pagreitina JS", "Pakeičia HTML"],
    c: 0,
    ok: "✅ Teisingai — skirtas klaidų valdymui.",
    no: "❌ Ne — tai ne optimizacija."
  },

  13: {
    name: "Sniego senio žmona",
    bg: "https://media.istockphoto.com/id/1678330314/photo/brown-christmas-gift-box-with-a-blank-tag-on-rustic-wooden-table.webp?b=1&s=612x612&w=0&k=20&c=QW3-mAohevIj90YKqMJRBhLxR21fGEIbAk-zSVHCqIk=",
    asker: "https://img.freepik.com/premium-vector/happy-mrs-claus-santa-s-wife-mrs-claus-vector-illustration_622487-1750.jpg",
    q: "Kam naudojamas debounce?",
    a: ["Apriboti dažnus event'us", "Padaryti animacijas", "Keisti spalvas"],
    c: 0,
    ok: "✅ Taip — pvz. search input'ams.",
    no: "❌ Ne — debounce ne animacijoms."
  },
  14: {
    name: "Rudolfas",
    bg: "https://images.pexels.com/photos/1303085/pexels-photo-1303085.jpeg?cs=srgb&dl=pexels-george-dolgikh-551816-1303085.jpg&fm=jpg",
    asker: "https://t3.ftcdn.net/jpg/00/57/70/92/360_F_57709206_VYiKJTJZRPqPeDlaMLXdE8gvHiuw8S7U.jpg",
    q: "Kodėl JSON.parse gali mesti klaidą?",
    a: ["Netinkamas JSON formatas", "Blogas CSS", "Trūksta HTML"],
    c: 0,
    ok: "✅ Teisingai — JSON turi būti valid.",
    no: "❌ Ne — CSS su JSON nesusijęs."
  },

  15: {
    name: "Elfas",
    bg: "https://img.freepik.com/free-photo/christmas-presents-flat-lay_1303-12584.jpg?semt=ais_hybrid&w=740&q=80",
    asker: "https://c8.alamy.com/comp/F1B1JJ/cartoon-christmas-elf-or-santa-christmas-helper-waving-with-both-hands-F1B1JJ.jpg",
    q: "Kada verta naudoti requestAnimationFrame?",
    a: ["JS animacijoms", "Formoms", "LocalStorage"],
    c: 0,
    ok: "✅ Taip — jis sinchronizuotas su render.",
    no: "❌ Ne — jis skirtas animacijoms."
  }
};

/* =====================================================
   Page init
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains("page-index")) initIndex();
  if (document.body.classList.contains("page-scene")) initScene();
});

function initIndex() {
  document.querySelectorAll(".pin").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id || "1";
      localStorage.setItem("jsQuestion", id);
      window.location.href = "scene.html";
    });
  });
}

function initScene() {
  const id = localStorage.getItem("jsQuestion") || "1";
  const data = PIN_DATA[id] || PIN_DATA[1];

  // Background (per-pin)
  document.body.style.background =
    `linear-gradient(rgba(255,255,255,.85), rgba(255,255,255,.85)), url('${data.bg}') center / cover no-repeat`;

  // asker nuotrauka
  const img = document.getElementById("askerImg");
  if (img) img.src = data.asker;

  // vardai
  const nameEl = document.getElementById("askerName");
  if (nameEl) nameEl.textContent = data.name || "Klausėjas";

  // klsausymai
  const qEl = document.getElementById("question");
  if (qEl) qEl.textContent = data.q;

  // atsakymai
  const answers = document.getElementById("answers");
  const result = document.getElementById("result");
  if (!answers || !result) return;

  answers.innerHTML = "";
  result.textContent = "";
  result.style.color = "";

  data.a.forEach((txt, i) => {
    const btn = document.createElement("button");
    btn.className = "answerBtn";
    btn.textContent = txt;

    btn.addEventListener("click", () => {
      const ok = i === data.c;
      result.textContent = ok ? (data.ok || "✅ Teisingai!") : (data.no || "❌ Neteisinga");
      result.style.color = ok ? "#2f9e44" : "#e03131";
    });

    answers.appendChild(btn);
  });
}