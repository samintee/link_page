const defaults = [
    { id: 'investing', label: 'Investing', links: [
        { name: 'Sijoittaja.fi',        url: 'http://www.sijoittaja.fi/' },
        { name: 'Nordnet',              url: 'https://www.nordnet.fi/mux/web/nordnet/index.html' },
        { name: 'Inderes',              url: 'https://www.inderes.fi/' },
        { name: 'Wall Street Journal',  url: 'https://www.wsj.com/europe' },
        { name: 'Sijoitustieto.fi',     url: 'https://www.sijoitustieto.fi/' },
        { name: 'Random Walker',        url: 'http://randomwalkerblogi.blogspot.fi/' },
        { name: 'Crossing Wall Street', url: 'http://www.crossingwallstreet.com/' },
        { name: 'Investopedia',         url: 'https://www.investopedia.com/' },
        { name: 'Investing.com',        url: 'https://www.investing.com/' },
        { name: 'TradingView',          url: 'https://www.tradingview.com/' },
        { name: 'Weekend Trading (IG)', url: 'https://www.ig.com/en/weekend-trading' },
        { name: 'NinjaTrader',          url: 'https://ninjatrader.com/' },
        { name: 'Forex Factory',        url: 'https://www.forexfactory.com/' },
        { name: 'Roic.ai',              url: 'https://roic.ai/' },
        { name: 'FINVIZ',               url: 'https://finviz.com/' },
    ]},
    { id: 'sports', label: 'Sports & Betting', links: [
        { name: 'WhoScored',             url: 'http://www.whoscored.com/' },
        { name: 'Ylikerroin',            url: 'http://www.ylikerroin.com/' },
        { name: 'Sporting Life',         url: 'http://www.sportinglife.com/' },
        { name: 'Football-Data',         url: 'http://www.football-data.co.uk/' },
        { name: 'BetExplorer',           url: 'http://www.betexplorer.com/' },
        { name: 'BetTrader Evolution',   url: 'http://racingtraders.co.uk/' },
        { name: 'Bet Angel',             url: 'http://www.betangel.com/' },
        { name: 'Football.co.uk',        url: 'http://www.football.co.uk/' },
        { name: 'SoccerSTATS',           url: 'http://www.soccerstats.com/' },
        { name: 'EPL Index',             url: 'http://www.eplindex.com/' },
        { name: 'Odds Portal',           url: 'http://www.oddsportal.com/' },
        { name: 'Soccerwidow',           url: 'http://www.soccerwidow.com/' },
        { name: 'Unibet',                url: 'http://www.unibet.com/start' },
        { name: 'Veikkaus',              url: 'https://www.veikkaus.fi/fi' },
        { name: 'Betfair',               url: 'http://www.betfair.com/' },
        { name: 'Racing Post',           url: 'http://www.racingpost.com/' },
        { name: 'BETDAQ',                url: 'http://www.betdaq.com/UI/' },
        { name: 'BTFOdds',               url: 'https://www.btfodds.com/' },
        { name: 'xGscore Premium',       url: 'https://xgscore.io/premium' },
        { name: 'Understat EPL',         url: 'https://understat.com/league/EPL' },
        { name: 'FootyStats xG',         url: 'https://footystats.org/norway/eliteserien/xg' },
        { name: 'FBref',                 url: 'https://fbref.com/en/' },
        { name: 'Flashscore',            url: 'https://www.flashscore.fi/' },
        { name: "James' Blog (metrics)", url: 'http://jameswgrayson.wordpress.com/2013/10/31/which-metrics-are-the-most-repeatable-between-the-first-9-and-final-29-games-of-the-season/' },
        { name: 'Football Analytics NB', url: 'https://github.com/eddwebster/football_analytics/blob/master/notebooks/3_data_engineering/FBref%20Player%20Stats%20Data%20Engineering.ipynb' },
    ]},
    { id: 'books', label: 'Books & Libraries', links: [
        { name: 'Project Gutenberg',     url: 'https://www.gutenberg.org/' },
        { name: 'Internet Archive',      url: 'https://archive.org/' },
        { name: 'MobileRead Forums',     url: 'http://www.mobileread.com/' },
        { name: 'DRM Removal Tools',     url: 'https://apprenticealf.wordpress.com/2012/09/10/drm-removal-tools-for-ebooks/' },
        { name: 'Remove DRM (Kindle)',   url: 'http://www.geoffstratton.com/remove-drm-amazon-kindle-books' },
        { name: 'Documentary Vine',      url: 'https://documentaryvine.com/' },
    ]},
    { id: 'occult', label: 'Occult & Spirituality', links: [
        { name: 'Ixaxaar',               url: 'http://www.ixaxaar.com/' },
        { name: 'Azazelin Tähti',        url: 'https://www.azazel.fi/' },
        { name: 'Viides Askel',          url: 'https://viidesaskel.fi/' },
        { name: 'Ruusu-Risti',           url: 'http://www.ruusuristi.fi/' },
        { name: 'Sacred Texts',          url: 'http://www.sacred-texts.com/' },
        { name: 'Holotropic Breathwork',  url: 'http://www.holotropic.com/holotropic-breathwork/about-holotropic-breathwork/' },
        { name: 'Leigh Brasington',      url: 'https://leighb.com/links.htm' },
        { name: 'Luke Smith',            url: 'https://lukesmith.xyz/' },
    ]},
    { id: 'psychedelics', label: 'Psychedelics', links: [
        { name: 'Psilosybiini.info',     url: 'https://psilosybiini.info/keskustelu/index.php' },
        { name: 'Shroomery',             url: 'https://www.shroomery.org/' },
        { name: 'DMT-Nexus',             url: 'https://www.dmt-nexus.me/forum/default.aspx?g=forum' },
        { name: 'Elephantos',            url: 'https://www.elephantos.com/en/smart-shop/psychedelics' },
    ]},
    { id: 'programming', label: 'Programming', links: [
        { name: 'CommandlineFU',         url: 'https://www.commandlinefu.com/commands/browse' },
        { name: 'DevDocs',               url: 'https://devdocs.io/' },
        { name: 'W3Schools',             url: 'https://www.w3schools.com/' },
        { name: 'MDN Web Docs',          url: 'https://developer.mozilla.org/en-US/' },
        { name: 'Stack Overflow',        url: 'https://stackoverflow.com/' },
        { name: 'CodePen',               url: 'https://codepen.io/' },
        { name: 'Repl.it',               url: 'https://repl.it/site/features' },
        { name: 'LinTut',                url: 'https://lintut.com/' },
        { name: 'Practice Python',       url: 'https://www.practicepython.org/' },
        { name: 'The App Brewery',       url: 'https://www.appbrewery.co/p/web-development-course-resources/' },
        { name: 'Atom Shortcuts',        url: 'https://github.com/nwinkler/atom-keyboard-shortcuts' },
        { name: 'Google Developer',      url: 'https://me.developers.google.com/' },
        { name: 'NotebookLM',            url: 'https://notebooklm.google.com/' },
    ]},
    { id: 'design', label: 'Design & Creative', links: [
        { name: 'Color Hunt',            url: 'https://colorhunt.co/' },
        { name: 'Lorem Ipsum',           url: 'https://loremipsum.io/' },
        { name: 'Flaticon',              url: 'https://www.flaticon.com/' },
        { name: 'GIPHY',                 url: 'https://giphy.com/' },
        { name: 'Crop Circle',           url: 'https://crop-circle.imageonline.co/' },
        { name: 'Favicon.cc',            url: 'https://www.favicon.cc/' },
        { name: 'Emojipedia',            url: 'https://emojipedia.org/' },
        { name: 'CSS Font Stack',        url: 'https://www.cssfontstack.com/' },
        { name: 'Google Fonts',          url: 'https://fonts.google.com/' },
        { name: 'CSS Button Generator',  url: 'https://cssbuttongenerator.com/' },
    ]},
    { id: 'taxi', label: 'Taxi & Vehicles', links: [
        { name: 'Attracs Manage',        url: 'https://manage.attracs.com/account' },
        { name: 'Taxi Point',            url: 'https://ajooikeudet.taxipoint.fi/VisyWebSale/' },
        { name: 'Järvenpään Taksit',     url: 'http://www.jarvenpaantaksit.fi/index.html' },
        { name: 'Dini Auto',             url: 'https://diniauto.fi/' },
        { name: 'RengasCenter Riihimäki',url: 'https://rengascenter.fi/rengasliikkeet/rengascenter-riihimaki/' },
        { name: 'Nelipyörä Hyvinkää',   url: 'https://www.nelipyora.fi/yhteystiedot/nelipyora-hyvinkaa' },
        { name: 'Patenttiasennus',       url: 'https://www.patenttiasennus.fi/' },
        { name: 'TH-Autolaite',          url: 'https://www.th-autolaite.fi/' },
        { name: 'Teletiimi',             url: 'https://teletiimi.com/' },
        { name: 'Viestipaja',            url: 'https://viestipaja.fi/' },
        { name: 'Stop Rust Äänieristys', url: 'https://www.stoprust.fi/aanieristys/kahden-tahden-aanieristys' },
        { name: 'Tonifix maalaus',       url: 'http://tonifix.fi/' },
        { name: 'ŠKODA CONNECT',         url: 'https://www.skoda-connect.com/' },
    ]},
    { id: 'business', label: 'Finnish Business', links: [
        { name: 'Suomen Yrittäjät',      url: 'http://www.yrittajat.fi/fi-FI/suomenyrittajat/' },
        { name: 'PRH Perustaminen',      url: 'http://www.prh.fi/fi/kaupparekisteri/yeh/perustaminen.html' },
        { name: 'ELY-keskus',            url: 'http://www.ely-keskus.fi/' },
        { name: 'YTJ',                   url: 'https://www.ytj.fi/' },
        { name: 'Yrityskirjaamo',        url: 'http://www.yrityskirjaamo.fi/' },
        { name: 'Varma',                 url: 'https://www.varma.fi/' },
        { name: 'ETK Yhteystiedot',      url: 'http://www.etk.fi/fi/service/yhteystiedot/1571/yhteystiedot' },
        { name: 'Verohallinto',          url: 'http://www.vero.fi/fi-FI/Tietoa_Verohallinnosta/Yhteystiedot/Palvelunumerot/Verotustodistuksen_voi__tilata_automaatt(15038)' },
        { name: 'Katso kirjautuminen',   url: 'https://yritys.tunnistus.fi/uas/authn/*/view?_id=8b55d956-ff19-449a-8e8b-c943c8bd57e2&entityID=urn%3Auuid%3A065bf03e-6a2f-3309-9787-b3b683e4d403&locale=fi' },
        { name: 'Oikeusasiamies',        url: 'http://www.oikeusasiamies.fi/Resource.phx/eoa/index.htx' },
        { name: 'TVR',                   url: 'http://www.tvr.fi/fi/etusivu/' },
        { name: 'American Express FI',   url: 'https://www.americanexpress.com/fi/' },
        { name: 'Vastuu Group',          url: 'https://www.vastuugroup.fi/fi-fi/' },
        { name: 'Lähilogistiikka Intra', url: 'https://intra.lahilogistiikka.fi/' },
        { name: 'Verkkolaskut.fi',       url: 'https://www.verkkolaskut.fi/' },
        { name: 'Laskumappi',            url: 'https://snellman.laskumappi.fi/#/login' },
        { name: 'Tarjouspalvelu',        url: 'https://tarjouspalvelu.fi/Default/Index' },
        { name: 'MyNets',                url: 'https://my.nets.eu/login?language=en' },
        { name: 'Maistraatti',           url: 'http://www.maistraatti.fi/maistraatit/Etela-Suomen-laani/Helsingin-maistraatti/Helsingin-maistraatti/' },
        { name: 'Tietosuoja GDPR',       url: 'http://www.tietosuoja.fi/fi/index/euntietosuojauudistus.html' },
        { name: 'GDPR Valmistautuminen', url: 'http://www.tietosuoja.fi/material/attachments/tietosuojavaltuutettu/tietosuojavaltuutetuntoimisto/oppaat/1Em8rT7IF/Miten_valmistautua_EUn_tietosuoja-asetukseen.pdf' },
        { name: 'GDPR selkokielellä',    url: 'https://www.verkkokauppablogi.fi/tietosuoja-asetus-selkokielella.html' },
        { name: 'GDPR (Yrittäjät)',      url: 'https://www.yrittajat.fi/uutiset/568497-nain-varaudut-eun-tietosuoja-asetukseen-juristi-kertoo-mita-vahintaan-taytyy-tehda' },
    ]},
    { id: 'housing', label: 'Housing', links: [
        { name: 'Kiinteistöliitto',      url: 'https://www.kiinteistoliitto.fi/' },
        { name: 'Lopen Talo & Tili',     url: 'https://www.talotili.fi/' },
        { name: 'Isännöintiliitto',      url: 'https://www.isannointiliitto.fi/mita-on-isannointi/asuminen-taloyhtiossa/taloyhtion-kunnossapitovastuu/' },
        { name: 'Kiertokapula Loppi',    url: 'https://www.kiertokapula.fi/kiinteiston-jatehuolto/jatehuolto-kunnassasi/loppi/' },
        { name: 'Taloyhtiön tilinpäätös',url: 'https://yle.fi/aihe/artikkeli/2017/04/11/osaatko-lukea-taloyhtion-tilinpaatosta-tieda-mihin-rahasi-menevat' },
        { name: 'Palovaroittimet',       url: 'https://www.verkkouutiset.fi/a/vaarinkasityksia-palovaroittimista-taloyhtio-ei-ole-velvollinen-tarkastamaan-vuosittain/#67a7bfd5' },
    ]},
    { id: 'music', label: 'Music', links: [
        { name: 'Custom Sounds Finland', url: 'https://www.customsounds.fi/' },
        { name: 'Muusikoiden.net',       url: 'https://muusikoiden.net/keskustelu/conferences.php' },
        { name: 'Soundtools',            url: 'https://soundtools.fi/' },
    ]},
    { id: 'tech', label: 'Tech & Misc', links: [
        { name: 'Syncthing',             url: 'http://127.0.0.1:8384/' },
        { name: 'PeerTube',              url: 'https://peertube.tv/videos/overview' },
        { name: 'Head-Fi',               url: 'http://www.head-fi.org/' },
        { name: 'MacMost',               url: 'https://macmost.com/' },
        { name: 'MacRumors',             url: 'http://forums.macrumors.com/' },
        { name: 'HDQ Walls',             url: 'https://hdqwalls.com/category/games-wallpapers/2560x1440' },
        { name: 'Chessable',             url: 'https://www.chessable.com/' },
        { name: 'R Project',             url: 'https://www.r-project.org/' },
        { name: 'RStudio',               url: 'https://rstudio.com/' },
        { name: 'Best Excel Tutorial',   url: 'http://best-excel-tutorial.com/58-excel-functions/119-database-functions' },
        { name: 'Tilastotieteen sanasto',url: 'http://www.math.helsinki.fi/petrin/sanasto/tilastosanasto.html#P' },
        { name: 'Excel Hash Sign',       url: 'https://www.howtogeek.com/excel-formulas-hash-sign/' },
        { name: 'Excel Custom Formatting',url: 'https://www.howtogeek.com/microsoft-excel-custom-number-formatting-conditional-formatting/' },
        { name: 'vahtera.blog',          url: 'https://www.vahtera.blog/' },
        { name: 'Perttu Häkkinen (YLE)', url: 'http://ohjelmaopas.yle.fi/1-1792200' },
        { name: "Sami's links",          url: 'https://samintee.github.io/link_page/' },
        { name: 'PoE2 Planner',          url: 'https://maxroll.gg/poe2/planner/gq8vp00h' },
    ]},
    { id: 'health', label: 'Health & Food', links: [
        { name: 'Fat Head Pizza',        url: 'https://www.ditchthecarbs.com/fat-head-pizza/' },
        { name: 'Ditch The Carbs',       url: 'https://www.ditchthecarbs.com/' },
    ]},
];

let selectedId = defaults[0].id;

function render() {
    buildSidebar();
    buildMain();
}

function buildSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '';
    defaults.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'sidebar-item' + (cat.id === selectedId ? ' active' : '');
        btn.innerHTML = `<span class="sidebar-dot dot-${cat.id}"></span>${cat.label}`;
        btn.addEventListener('click', () => {
            selectedId = cat.id;
            render();
        });
        sidebar.appendChild(btn);
    });
}

function buildMain() {
    const main = document.getElementById('main');
    main.innerHTML = '';

    const cat = defaults.find(c => c.id === selectedId);
    if (!cat) return;

    const h2 = document.createElement('h2');
    h2.className = `main-header ${cat.id}`;
    h2.textContent = cat.label;
    main.appendChild(h2);

    const ul = document.createElement('ul');
    cat.links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = link.name;
        li.appendChild(a);
        ul.appendChild(li);
    });
    main.appendChild(ul);
}

render();
