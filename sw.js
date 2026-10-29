/* Cycle danse : l'outil et ses PDF sont mis en cache à la 1re ouverture (Wi-Fi), puis fonctionnent sans réseau. */
const C='cycle-danse-v16';
// Toutes les applis partagent le même stockage (même adresse github.io) : on n'efface QUE les anciennes versions de CETTE appli.
const MES_CACHES=/^(?:cycle\-danse\-v)\d+$/;

// Wi-Fi faible au gymnase : si le réseau ne répond pas en 3 s, on ouvre la copie gardée sur l'appareil.
const sous3s=p=>{p.catch(()=>{});return Promise.race([p,new Promise((_,non)=>setTimeout(()=>non(new Error('réseau lent')),3000))])};
const FILES=["danse-donnees.js", "outils.html", "polices/archivo.woff2", "polices/atkinson-400.woff2", "polices/atkinson-700.woff2", "eps-design.css", "eps-outil.css", "eps-charte-v1.css", "ecran.css", "ecran.js", "aide-ecran.js", "eps-aide.js", "eps-commun.js", "./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-180.png", "icon-32.png", "icon-512.png", "img/figures-deux.jpg", "img/contrepoids.jpg", "img/elements-dynamiques.jpg", "img/echauffement-banc.jpg", "img/echauffement-banc-2.jpg", "img/grille-dimension-artistique.jpg", "img/fd-code-ab.jpg", "img/fd-code-cd.jpg", "img/fd-B1.jpg", "img/fd-B2.jpg", "img/fd-B3.jpg", "img/fd-B4.jpg", "img/fd-C1.jpg", "img/fd-C2.jpg", "img/fd-C3.jpg", "img/fd-C4.jpg", "img/fd-D1.jpg", "img/fd-D2.jpg", "img/fd-D3.jpg", "img/fd-D4.jpg", "pdf/2de-danse-figdyn.pdf", "pdf/2de-danse-S1.pdf", "pdf/2de-danse-S2.pdf", "pdf/2de-danse-S3.pdf", "pdf/2de-danse-S4.pdf", "pdf/2de-danse-S5.pdf", "pdf/2de-danse-S6.pdf", "pdf/2de-danse-S7.pdf", "pdf/2de-danse-S8.pdf", "pdf/2de-danse-banque.pdf", "pdf/2de-danse-cycle-complet.pdf", "pdf/2de-danse-echauffement.pdf", "pdf/2de-danse-evaluation.pdf", "pdf/2de-danse-porters.pdf", "pdf/2de-danse-procedes.pdf", "pdf/2de-danse-projet.pdf", "pdf/2de-danse-securite.pdf", "pdf/2de-danse-spectateur.pdf", "pdf/2de-danse-tirages.pdf"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(FILES.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>MES_CACHES.test(k)&&k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
  const net=fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r});
  e.respondWith(sous3s(net).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html')).then(r=>r||net)))});
