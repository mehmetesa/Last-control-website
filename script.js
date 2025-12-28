const langBtn = document.getElementById('lang-btn');
let currentLang = 'TR';

const translations = {
    'TR': {
        navHome: 'Giriş',
        navAbout: 'Hikaye',
        heroSub: 'Karanlıkta kalan son kontrol sen misin?',
        btnTrailer: 'FRAGMANI İZLE',
        storyTitle: 'HİKAYE',
        storyDesc: 'Terk edilmiş bir araştırma tesisinde uyandığında, elinde sadece bozulmaya yüz tutmuş bir telsiz var. Sesler sana ne yapman gerektiğini söylüyor ama onlara güvenebilir misin? Last Control, Flash In\'in sunduğu en derin psikolojik gerilim deneyimi.',
        credits: 'EMEĞİ GEÇENLER'
    },
    'EN': {
        navHome: 'Home',
        navAbout: 'Story',
        heroSub: 'Are you the last control in the dark?',
        btnTrailer: 'WATCH TRAILER',
        storyTitle: 'STORY',
        storyDesc: 'When you wake up in an abandoned research facility, you only have a decaying radio in your hand. Voices tell you what to do, but can you trust them? Last Control is the deepest psychological horror experience from Flash In.',
        credits: 'CREDITS'
    }
};

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'TR' ? 'EN' : 'TR';
    langBtn.innerText = currentLang === 'TR' ? 'EN' : 'TR';
    
    document.getElementById('nav-home').innerText = translations[currentLang].navHome;
    document.getElementById('nav-about').innerText = translations[currentLang].navAbout;
    document.getElementById('hero-sub').innerText = translations[currentLang].heroSub;
    document.getElementById('btn-trailer').innerText = translations[currentLang].btnTrailer;
    document.getElementById('story-title').innerText = translations[currentLang].storyTitle;
    document.getElementById('story-desc').innerText = translations[currentLang].storyDesc;
    document.getElementById('footer-credits').innerText = translations[currentLang].credits;
});
