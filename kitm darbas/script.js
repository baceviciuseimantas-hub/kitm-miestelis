const PIN_DATA = {
    1: {
        bg: "https://t3.ftcdn.net/jpg/09/50/17/64/360_F_950176443_XQGPTseUunB0UMYARE4DqORCKiwD3Izl.jpg",
        asker: "https://kitm.lt/sites/default/files/styles/max_325x325/public/2022-04/VLD_7757.jpg?itok=Bz11Yv3f",
        q: "Kur teisingiausia dėti <script> tag'ą, jei nenaudoji defer ar async?",
        a: [
            "<head> viršuje",
            "Po HTML elementais, prieš </body>",
            "Bet kur, JS pats palauks"
        ],
        c: 1,
        ok: "✅ Teisingai — tada DOM jau egzistuoja.",
        no: "❌ Ne — JS gali bandyti pasiekti elementus per anksti."
    },

    2: {
        bg: "https://png.pngtree.com/thumb_back/fh260/background/20241124/pngtree-enchanting-holiday-season-snowy-christmas-tree-scene-image_16636663.jpg",
        asker: "https://kitm.lt/sites/default/files/styles/max_325x325/public/2022-04/VLD_2103.jpg?itok=sb1tQ6Wq",
        q: "Kodėl querySelector kartais grąžina null?",
        a: [
            "Nes CSS neveikia",
            "Nes toks elementas nerastas DOM'e",
            "Nes JS išjungtas"
        ],
        c: 1,
        ok: "✅ Teisingai — null reiškia, kad elemento nėra.",
        no: "❌ Ne — problema dažniausiai selektoriuje arba DOM."
    },

    3: {
        bg: "https://media.gettyimages.com/id/1778042096/video/in-the-serene-forest-a-christmas-tree-stands-tall-its-branches-adorned-with-twinkling-lights.jpg?s=640x640&k=20&c=gx8Kh4J_aBWLJJfibtyXx2Jjx4RrrNNTSVahIHq6qDI=",
        asker: "https://kitm.lt/sites/default/files/styles/max_325x325/public/2022-04/VLD_7824_1.jpg?itok=ekcs2Zfq",
        q: "Kuo addEventListener geresnis už onclick?",
        a: [
            "Leidžia turėti kelis event listenerius",
            "Veikia greičiau",
            "Veikia tik su CSS"
        ],
        c: 0,
        ok: "✅ Taip — galima pridėti daugiau nei vieną listenerį.",
        no: "❌ Ne — esmė ne greityje ar CSS."
    },

    4: {
        bg: "https://www.designyourway.net/blog/wp-content/uploads/2024/04/christmas-wallpaper-from-designyourway-1200x700.jpg",
        asker: "https://kitm.lt/sites/default/files/styles/max_325x325/public/2022-04/VLD_7926_1.jpg?itok=p25XyvMR",
        q: "Kas yra DOM?",
        a: [
            "Duomenų bazė",
            "HTML struktūra, kurią mato JS",
            "CSS failas"
        ],
        c: 1,
        ok: "✅ Teisingai — DOM yra HTML atvaizdas JS'ui.",
        no: "❌ Ne — DOM nėra nei CSS, nei DB."
    },

    5: {
        bg: "https://miro.medium.com/v2/resize:fit:1400/1*t9Pwbhw-iELogKG1_PwgDw.jpeg",
        asker: "https://kitm.lt/sites/default/files/styles/max_325x325/public/2022-04/VLD_7912_2.jpg?itok=dIOgJU0f",
        q: "Kas nutinka paspaudus vaiko elementą, jei tėvas irgi turi click?",
        a: [
            "Suveikia tik vaikas",
            "Suveikia abu (event bubbling)",
            "Nieko nevyksta"
        ],
        c: 1,
        ok: "✅ Taip — event bubbling keliauja į viršų.",
        no: "❌ Ne — event'as kyla per tėvinius elementus."
    },

    6: {
        bg: "https://www.designyourway.net/blog/wp-content/uploads/2024/04/christmas-wallpaper-from-designyourway-1200x700.jpg",
        asker: "https://kitm.lt/sites/default/files/styles/max_325x325/public/2023-02/VLD_9477.jpg?itok=NvA6duin",
        q: "Kam naudojamas e.preventDefault()?",
        a: [
            "Sustabdyti numatytą veiksmą (pvz. form submit)",
            "Sustabdyti JS",
            "Ištrinti elementą"
        ],
        c: 0,
        ok: "✅ Teisingai — jis stabdo numatytą naršyklės veiksmą.",
        no: "❌ Ne — JS ar HTML jis netrina."
    },

    7: {
        bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMi_xoIz0Fn8v-H87uCpJfb5LbcfzYjCv7g&s",
        asker: "https://kitm.lt/sites/default/files/styles/max_325x325/public/2023-05/Kristina%20kvadratas.jpg?itok=fwqUTkEi",
        q: "Kam naudojamas localStorage?",
        a: [
            "Laikinai saugoti iki puslapio uždarymo",
            "Saugoti duomenis tarp puslapių",
            "Keisti CSS"
        ],
        c: 1,
        ok: "✅ Taip — localStorage lieka net po refresh.",
        no: "❌ Ne — tai ne CSS ir ne laikina atmintis."
    },

    8: {
        bg: "https://getwallpapers.com/wallpaper/full/b/a/7/839051-christmas-hd-wallpapers-1920x1080-ios.jpg",
        asker: "https://kitm.lt/sites/default/files/styles/max_325x325/public/2025-06/11.jpg?itok=6x_mHh11",
        q: "Ką daro classList.toggle('active')?",
        a: [
            "Visada prideda klasę",
            "Perjungia: prideda arba nuima",
            "Ištrina elementą"
        ],
        c: 1,
        ok: "✅ Teisingai — toggle perjungia būseną.",
        no: "❌ Ne — toggle nėra delete."
    },

    9: {
        bg: "https://img.freepik.com/premium-photo/merry-christmas-background-with-pine-trees-balls-gifts-christmas-decorations-digital-illustration_285885-813.jpg?semt=ais_hybrid&w=740&q=80",
        asker: "https://kitm.lt/sites/default/files/styles/max_325x325/public/2025-09/e863c816-d490-4a32-be49-150e6ec7227a.jpg?itok=JiczvRNp",
        q: "Kas nutinka, jei JS faile įvyksta klaida?",
        a: [
            "Nieko",
            "Kodas nuo tos vietos nustoja veikti",
            "HTML išnyksta"
        ],
        c: 1,
        ok: "✅ Taip — vykdymas sustoja ties klaida.",
        no: "❌ Ne — HTML neišnyksta."
    },

    10: {
        bg: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsb2ZmaWNlN19jaHJpc3RtYXNfYmFja2dyb3VuZF93aXRoX2dyZWVuX3JlZF9hbmRfZ29sZF9jb19iNTg0NGU5ZC03MjgwLTQzZjgtOGY5MS1lMzdkYjY1ZjU4YjEuanBn.jpg",
        asker: "https://kitm.lt/sites/default/files/2023-09/372166490_7480288638664189_3396824877740590849_n%20%281%29.jpg",
        q: "Kuo skiriasi == ir === ?",
        a: [
            "Niekuo",
            "=== tikrina ir tipą",
            "== tikrina griežčiau"
        ],
        c: 1,
        ok: "✅ Teisingai — === lygina ir tipą.",
        no: "❌ Ne — == nėra griežtesnis."
    },

    11: {
        bg: "https://wallpapercat.com/w/full/c/e/5/5821528-3840x2160-desktop-hd-cute-christmas-wallpaper.jpg",
        asker: "https://kitm.lt/sites/default/files/2025-11/1.png",
        q: "Kas yra event delegation?",
        a: [
            "Listener ant parent elemento",
            "Listener ant kiekvieno vaiko",
            "CSS technika"
        ],
        c: 0,
        ok: "✅ Taip — gaudai event'us per parent.",
        no: "❌ Ne — tai ne CSS."
    },

    12: {
        bg: "https://m.media-amazon.com/images/I/91+5PASgjfL.jpg",
        asker: "https://kitm.lt/sites/default/files/2025-11/%C5%A0achmat%C5%B3%20turnyras-12_0.jpg",
        q: "Ką daro try...catch?",
        a: [
            "Gaudo klaidas",
            "Pagreitina JS",
            "Pakeičia HTML"
        ],
        c: 0,
        ok: "✅ Teisingai — skirtas klaidų valdymui.",
        no: "❌ Ne — tai ne optimizacija."
    },

    13: {
        bg: "https://media.istockphoto.com/id/1678330314/photo/brown-christmas-gift-box-with-a-blank-tag-on-rustic-wooden-table.webp?b=1&s=612x612&w=0&k=20&c=QW3-mAohevIj90YKqMJRBhLxR21fGEIbAk-zSVHCqIk=",
        asker: "https://kitm.lt/sites/default/files/2025-01/2_1.png",
        q: "Kam naudojamas debounce?",
        a: [
            "Apriboti dažnus event'us",
            "Padaryti animacijas",
            "Keisti spalvas"
        ],
        c: 0,
        ok: "✅ Taip — pvz. search input'ams.",
        no: "❌ Ne — debounce ne animacijoms."
    },

    14: {
        bg: "https://images.pexels.com/photos/1303085/pexels-photo-1303085.jpeg?cs=srgb&dl=pexels-george-dolgikh-551816-1303085.jpg&fm=jpg",
        asker: "https://kitm.lt/sites/default/files/2023-10/KITM%20%C4%AFvaizdis-28.jpg",
        q: "Kodėl JSON.parse gali mesti klaidą?",
        a: [
            "Netinkamas JSON formatas",
            "Blogas CSS",
            "Trūksta HTML"
        ],
        c: 0,
        ok: "✅ Teisingai — JSON turi būti valid.",
        no: "❌ Ne — CSS su JSON nesusijęs."
    },

    15: {
        bg: "https://img.freepik.com/free-photo/christmas-presents-flat-lay_1303-12584.jpg?semt=ais_hybrid&w=740&q=80",
        asker: "https://kitm.lt/sites/default/files/2023-05/Italy.jpg",
        q: "Kada verta naudoti requestAnimationFrame?",
        a: [
            "JS animacijoms",
            "Formoms",
            "LocalStorage"
        ],
        c: 0,
        ok: "✅ Taip — jis sinchronizuotas su render.",
        no: "❌ Ne — jis skirtas animacijoms."
    }
}
document.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains("page-scene")) {
        initScene();
    } else if (document.body.classList.contains("page-index")) {
        initIndex();
    }
});

function initScene() {
    const id = localStorage.getItem("jsQuestion") || "1";
    const data = PIN_DATA[id];

    // backroundas
    document.body.style.background =
        `linear-gradient(rgba(255,255,255,.85), rgba(255,255,255,.85)), url('${data.bg}') center / cover no-repeat`;

    // ASKER nuotrauka
    document.getElementById("askerImg").src = data.asker;

    // klausymas
    document.getElementById("question").textContent = data.q;

    // atsakymas
    const answers = document.getElementById("answers");
    const result = document.getElementById("result");
    answers.innerHTML = "";
    result.textContent = "";

    data.a.forEach((txt, i) => {
        const btn = document.createElement("button");
        btn.className = "answerBtn";
        btn.textContent = txt;

        btn.onclick = () => {
            result.textContent = i === data.c ? "✅ Teisingai" : "❌ Neteisinga";
            result.style.color = i === data.c ? "green" : "red";
        };

        answers.appendChild(btn);
    });
}

function initIndex() {
    const pins = document.querySelectorAll(".pin");
    pins.forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id || "1";
            localStorage.setItem("jsQuestion", id);
            window.location.href = "scene.html";
        });
    });
}
