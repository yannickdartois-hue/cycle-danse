/* Données du cycle de danse CA3 Seconde (Lycée G. Pompidou) : porters, procédés, focales, thèmes, contraintes,
   séances, banque, évaluation, schémas. Partagées par l'écran de cours (index.html) et l'outil complet (outils.html). */
/* ================== DONNÉES DU CYCLE DANSE CA3 — SECONDE ================== */
const DUREE = 75;

/* ---------- Règles de sécurité (affichées en S1, rappelées partout) ---------- */
const SECU = {
  tenue: ["Pieds nus ou chaussettes antidérapantes sur le tatami, jamais en chaussettes simples.", "Cheveux attachés, aucun bijou, poches vides, pas de ceinture ni de fermeture éclair contre la peau du partenaire.", "Ongles courts : on saisit avec la paume, pas avec les doigts crochetés."],
  regles: [
    "On ne porte jamais au-dessus des épaules du porteur. Au-dessus de la taille : un pareur obligatoire, les mains prêtes avant le départ.",
    "On n’appuie que sur les « piliers » : bassin, haut des cuisses, épaules (jamais sur la nuque, les reins, le ventre, une articulation pliée).",
    "Le porter se fait en 4 temps : contact, transfert du poids, poussée, freinage. Aucun à-coup.",
    "Le voltigeur annonce, le porteur décide : un mot code (« stop ») arrête tout, immédiatement, sans discussion.",
    "Le porteur garde le dos plat, les genoux fléchis, le poids du voltigeur près de son bassin.",
    "Le voltigeur reste gainé (corps « en planche ») : un corps mou est deux fois plus lourd.",
    "On redescend toujours pieds en premier, ou par une roulade, jamais sur la tête ni sur les mains bras tendus.",
    "Le « danger » est une illusion : une chute rattrapée part de 20 cm et ne dépasse jamais 45°. Ce que le public croit dangereux doit être facile pour nous.",
    "Un porter de niveau 3 ou 4 est montré au professeur avant d’entrer dans la chorégraphie."
  ],
  prises: [
    ["Prise en crochet", "Poignet contre poignet (chacun tient l’avant-bras de l’autre). La plus solide : c’est la prise par défaut."],
    ["Prise en coupe", "Paume sous le bassin, l’omoplate ou la cuisse, doigts serrés. Pour soutenir sans serrer."],
    ["Appui plat", "Le voltigeur pose une surface large (bassin, dos, avant-bras), jamais un point (genou, coude)."]
  ],
  roles: [
    ["Porteur", "Base stable (pieds écartés largeur de bassin, genoux fléchis, dos plat). Il décide du moment."],
    ["Voltigeur", "Gainé, regard fixe, il annonce ses intentions. Il ne lâche jamais son appui sans prévenir."],
    ["Pareur", "À un pas, mains ouvertes près des épaules ou du bassin du voltigeur. Il ne touche que si ça tombe."]
  ]
};

/* ---------- Répertoire des porters ----------
   niv : 1 bas, au sol ou en contrepoids · 2 à hauteur de hanche · 3 à plusieurs, en déplacement · 4 réservé (validation du professeur)
   nb : nombre d'élèves · lev : focales que le porter sert le mieux */
const NIVEAUX_P = {
  1:{nom:"Niveau 1 · au sol, en contrepoids", c:"#15803d"},
  2:{nom:"Niveau 2 · à hauteur de hanche", c:"#0e7490"},
  3:{nom:"Niveau 3 · à plusieurs, en mouvement", c:"#b45309"},
  4:{nom:"Niveau 4 · réservé, validé par le professeur", c:"#b91c1c"}
};
const PORTERS = [
 {id:"P1", nom:"Contrepoids face à face", niv:1, nb:2, lev:["emotion","danger"],
  entree:"On marche l’un vers l’autre et on se saisit en crochet au passage, sans s’arrêter.",
  porte:"Pieds contre pieds, on s’éloigne bras tendus jusqu’à ce que le poids de chacun tienne l’autre ; on descend accroupis ensemble, on remonte.",
  sortie:"Lâcher annoncé (« 3, 2, 1 ») et chacun part en roulade arrière ou en tournant.",
  secu:"Prise en crochet. Lâcher seulement accroupis, jamais debout bras tendus.",
  dyn:"Version dansée : tourner ensemble en contrepoids (toupie) avant de descendre."},
 {id:"P2", nom:"Dos à dos", niv:1, nb:2, lev:["rire","emotion"],
  entree:"On recule l’un vers l’autre sans se voir jusqu’au contact des dos.",
  porte:"Dos collés, bras croisés ou en crochet, on descend assis et on remonte en poussant l’un contre l’autre.",
  sortie:"On roule chacun sur le côté et on se relève face au public.",
  secu:"Pieds à 50 cm devant soi. On pousse avec les jambes, pas avec le dos.",
  dyn:"Version rire : on se cherche dos à dos sans jamais se trouver, puis on se « rate » une fois."},
 {id:"P3", nom:"Appui épaule", niv:1, nb:2, lev:["emotion"],
  entree:"L’un se laisse tomber de côté vers l’autre, qui avance pour recevoir.",
  porte:"Le poids passe sur l’épaule du partenaire ; on s’incline ensemble, on tourne autour du point de contact.",
  sortie:"Le porteur se retire lentement : le voltigeur rattrape son équilibre en un pas.",
  secu:"Contact épaule contre épaule ou épaule contre omoplate, jamais contre la tête.",
  dyn:"Le point de contact « roule » : épaule, dos, bras, sans jamais se perdre (contact improvisation)."},
 {id:"P4", nom:"La planche rattrapée", niv:1, nb:2, lev:["danger","emotion"],
  entree:"Le voltigeur se fige, gainé, dos au porteur.",
  porte:"Il tombe en arrière, raide ; le porteur, en fente, le rattrape aux omoplates à 20° puis le repousse debout.",
  sortie:"Repoussé, le voltigeur part en marchant comme si de rien n’était.",
  secu:"Le porteur est à 30 cm, les mains déjà levées. On commence à 20°, on ne dépasse jamais 45°.",
  dyn:"Effet danger : le porteur fait mine de partir et revient au dernier moment (seulement à 20°)."},
 {id:"P5", nom:"La table qui roule", niv:1, nb:2, lev:["spectaculaire","rire"],
  entree:"Le porteur se met à quatre pattes (la table) en un temps, comme une chute.",
  porte:"Le voltigeur roule en travers sur son dos (bassin sur le dos plat) pour passer de l’autre côté.",
  sortie:"Il arrive debout ou accroupi, la table se relève en roulant dans l’autre sens.",
  secu:"Table gainée, dos plat, mains sous les épaules. On roule sur le haut du dos, jamais sur les reins ni sur la nuque.",
  dyn:"En cascade : 3 tables en ligne, le voltigeur roule sur les trois (voir P12)."},
 {id:"P6", nom:"Porté hanche", niv:2, nb:2, lev:["emotion","spectaculaire"],
  entree:"Le voltigeur arrive en courant (2 pas) et saute de côté vers le porteur.",
  porte:"Le porteur, en fente latérale, le reçoit assis sur sa cuisse haute, une main au bassin, une au dos ; on pivote d’un quart de tour.",
  sortie:"Le voltigeur glisse au sol en déroulant, le porteur l’accompagne jusqu’au tatami.",
  secu:"Élan de 2 pas maximum. Le porteur a la cuisse horizontale avant le saut, pas après.",
  dyn:"Le quart de tour peut devenir une spirale vers le sol."},
 {id:"P7", nom:"Le sac", niv:2, nb:2, lev:["rire","emotion"],
  entree:"Dos à dos, le porteur se penche en avant en attrapant les bras du voltigeur en crochet.",
  porte:"Le voltigeur s’allonge sur son dos, face au plafond, pieds décollés ; le porteur tourne lentement.",
  sortie:"Le porteur se redresse doucement : le voltigeur repose les pieds au sol derrière lui.",
  secu:"Le bassin du voltigeur au-dessus du bassin du porteur. Le porteur fléchit les genoux, il ne se cambre pas.",
  dyn:"Version rire : le porteur « oublie » qu’il porte quelqu’un et regarde sa montre."},
 {id:"P8", nom:"Roulade sur le dos", niv:2, nb:2, lev:["spectaculaire"],
  entree:"Le porteur se penche, dos plat à hauteur de hanche, de profil au voltigeur.",
  porte:"Le voltigeur pose les mains et l’épaule, puis roule en travers par-dessus le dos du porteur.",
  sortie:"Il arrive debout de l’autre côté ; le porteur se relève dans le même temps.",
  secu:"Apprendre d’abord sur P5 (table au sol). Le voltigeur roule sur l’omoplate, menton rentré.",
  dyn:"Enchaîner deux roulades sur deux porteurs différents (trajet)."},
 {id:"P9", nom:"L’envolée à trois", niv:2, nb:3, lev:["spectaculaire","emotion"],
  entree:"Deux porteurs de part et d’autre ; le voltigeur prend leurs avant-bras en crochet.",
  porte:"Il saute, les porteurs le soulèvent à hauteur de hanche (une main au crochet, une sous l’aisselle) et avancent de 3 pas.",
  sortie:"Ils le reposent pieds en premier et les trois continuent en courant.",
  secu:"Porteurs de taille proche. Hauteur de hanche, pas plus. On repose avant de fatiguer.",
  dyn:"L’envolée peut être un « ralenti » : 3 pas en 8 temps."},
 {id:"P10", nom:"La bouteille saoule", niv:2, nb:3, lev:["danger","rire"],
  entree:"Le voltigeur se fige gainé, les bras croisés sur la poitrine, entre deux pareurs.",
  porte:"Il bascule raide en avant puis en arrière ; les pareurs le reçoivent aux épaules et le renvoient.",
  sortie:"Le dernier renvoi le remet debout et il repart, « réveillé ».",
  secu:"Pareurs à un pas, en fente, mains ouvertes. Amplitude de 20 à 30° au début.",
  dyn:"À 4 en cercle autour du voltigeur : il bascule dans toutes les directions."},
 {id:"P11", nom:"Le brancard", niv:3, nb:3, lev:["emotion","spectaculaire"],
  entree:"Le voltigeur se laisse tomber en arrière, raide ; deux porteurs le rattrapent aux épaules et aux cuisses.",
  porte:"Porté horizontal à hauteur de hanche, on se déplace ou on tourne sur place.",
  sortie:"On le repose pieds en premier (les porteurs des pieds descendent d’abord).",
  secu:"3 porteurs pour un voltigeur lourd. Prises en coupe sous les omoplates, le bassin et les cuisses.",
  dyn:"Le brancard peut devenir un berceau (voltigeur assis dans les bras croisés des porteurs)."},
 {id:"P12", nom:"La vague", niv:3, nb:4, lev:["spectaculaire"],
  entree:"Trois tables (P5) se forment en cascade, l’une après l’autre.",
  porte:"Le voltigeur roule sur les trois dos ; chaque table se relève dès qu’il est passé.",
  sortie:"Le dernier qui se relève devient voltigeur de la vague suivante.",
  secu:"Tables serrées (épaule contre bassin), toutes gainées. On roule sur le haut du dos.",
  dyn:"C’est un procédé à elle seule : cascade + répétition + transposition."},
 {id:"P13", nom:"Saut rattrapé", niv:3, nb:3, lev:["danger","spectaculaire"],
  entree:"Le voltigeur court 2 pas et saute vers deux porteurs côte à côte.",
  porte:"Ils le reçoivent dans leurs bras (un bras sous le dos, un sous les cuisses) à hauteur de taille.",
  sortie:"Reposé pieds en premier ; il repart en courant.",
  secu:"Élan de 2 pas. Porteurs genoux fléchis, bras déjà en berceau. Un pareur derrière pour les premiers essais.",
  dyn:"Effet danger : les porteurs se retournent vers le public au dernier moment… et rattrapent."},
 {id:"P14", nom:"L’avion bas", niv:3, nb:2, lev:["spectaculaire","emotion"],
  entree:"Le porteur roule au sol sur le dos en direction du voltigeur, jambes repliées.",
  porte:"Pieds du porteur sur le haut des cuisses du voltigeur, mains en crochet : il le décolle à hauteur de genoux puis de hanche.",
  sortie:"Le voltigeur repose les mains au sol et finit en roulade avant.",
  secu:"Pieds du porteur sur les crêtes iliaques (hanches), jamais sur le ventre. Un pareur sur le côté.",
  dyn:"Le porteur fait tourner le voltigeur d’un quart de tour en restant au sol."},
 {id:"P15", nom:"Porté épaule", niv:4, nb:3, lev:["spectaculaire"],
  entree:"Le porteur en fente, le voltigeur monte par sa cuisse.",
  porte:"Il s’assoit sur l’épaule, le porteur se relève en tenant les cuisses ; on tourne lentement.",
  sortie:"Le voltigeur redescend par la cuisse, accompagné par le pareur.",
  secu:"Validation du professeur. Pareur derrière, mains au bassin du voltigeur pendant toute la figure. Hauteur maximale : l’épaule.",
  dyn:"Montée et descente sans arrêt : la figure dure 8 temps, pas plus."},
 {id:"P16", nom:"L’ange", niv:4, nb:4, lev:["spectaculaire","emotion"],
  entree:"Le voltigeur prend appui sur les avant-bras de deux porteurs.",
  porte:"Ils le soulèvent à plat ventre, gainé, à hauteur de poitrine (mains sous les épaules, le bassin et les cuisses) et avancent.",
  sortie:"Ils le reposent pieds en premier, le pareur reçoit le haut du corps.",
  secu:"Validation du professeur. Trois porteurs + un pareur. Jamais plus haut que la poitrine.",
  dyn:"L’ange « vole » d’un groupe à l’autre en se faisant passer (réservé aux groupes de 5)."},
 {id:"P17", nom:"Le tourbillon", niv:4, nb:2, lev:["spectaculaire","danger"],
  entree:"Le voltigeur saute dans les bras du porteur (berceau) après un pas.",
  porte:"Le porteur pivote sur lui-même, un tour au maximum.",
  sortie:"Le voltigeur repose les pieds pendant la rotation et le duo continue en tournant.",
  secu:"Validation du professeur. Un seul tour, sans accélérer. Porteur plus grand et plus lourd que le voltigeur.",
  dyn:"Le tour peut se transposer au sol (spirale descendante)."}
];

/* ---------- Procédés de composition ----------
   fam : collectif · temps · espace · gestuel. frise : code de la frise temporelle (schéma) */
const FAMILLES_PROC = {
  col:{nom:"Entre les danseurs", c:"#a21caf"},
  tps:{nom:"Le temps", c:"#0e7490"},
  esp:{nom:"L’espace", c:"#b45309"},
  ges:{nom:"Le geste", c:"#15803d"}
};
const PROCEDES = [
 {id:"unisson", nom:"Unisson", fam:"col", def:"Tous les danseurs font la même chose, en même temps, à l’identique (même vitesse, même énergie).", porter:"Tous les duos montent le même porter sur le même temps : c’est l’effet « régiment ».", piege:"Un unisson raté se voit plus qu’un solo : compter à voix haute au début.", frise:"unisson"},
 {id:"miroir", nom:"Miroir", fam:"col", def:"Deux danseurs face à face (ou côte à côte), l’un est le reflet de l’autre : quand l’un lève le bras droit, l’autre lève le gauche.", porter:"Deux duos font le même porter en symétrie, de part et d’autre de l’axe de la scène.", piege:"Ne pas confondre avec « faire pareil » : le miroir inverse droite et gauche.", frise:"miroir"},
 {id:"cascade", nom:"Cascade", fam:"col", def:"Le même geste passe d’un danseur à l’autre, l’un après l’autre, comme la « ola » d’un stade. Chacun part quand le précédent a fini son geste.", porter:"Les porters partent l’un après l’autre : quand le premier voltigeur se pose, le deuxième décolle.", piege:"La cascade se lit si les danseurs sont alignés face au public ou en diagonale.", frise:"cascade"},
 {id:"canon", nom:"Canon", fam:"col", def:"Tous font la même phrase, mais démarrent avec un décalage régulier (4 temps, 8 temps) ; ils finissent donc les uns après les autres.", porter:"Le porter tombe à des moments différents pour chaque duo : le public voit la figure « se propager ».", piege:"Garder le même décalage jusqu’au bout : c’est la régularité qui fait le canon.", frise:"canon"},
 {id:"question", nom:"Question-réponse (riposte)", fam:"col", def:"Un danseur ou un groupe fait une phrase adressée à l’autre ; l’autre répond (riposte) sur le même mode, en l’imitant, en l’amplifiant ou en la contredisant.", porter:"Un duo montre un porter, l’autre « répond » par un porter plus haut, plus lent ou plus drôle.", piege:"On attend la fin de la question avant de répondre ; sinon c’est un unisson raté.", frise:"question"},
 {id:"accumulation", nom:"Accumulation", fam:"col", def:"Sur un unisson, les danseurs rejoignent le groupe un par un, jusqu’à ce que tous fassent la même phrase.", porter:"Un porter à 2 devient à 3, puis à 4 : chaque nouvel arrivant entre dans la figure.", piege:"Chaque arrivée doit tomber sur un temps fort (1 ou 5).", frise:"accumulation"},
 {id:"lacher", nom:"Lâcher-rattraper", fam:"col", def:"Sur un unisson, un danseur quitte le groupe pour faire autre chose, puis le rejoint là où il en est.", porter:"Le voltigeur quitte l’unisson, il est porté, puis il rattrape la phrase du groupe à sa place.", piege:"Le groupe ne s’arrête pas pendant l’absence : c’est ce qui rend le retour lisible.", frise:"lacher"},
 {id:"contrepoint", nom:"Contrepoint", fam:"col", def:"Un danseur isolé fait un solo différent pendant que le groupe fait autre chose.", porter:"Le groupe monte un porter pendant que le soliste danse au sol, loin de lui : deux histoires en même temps.", piege:"Le public doit pouvoir regarder les deux : séparer les espaces.", frise:"contrepoint"},
 {id:"contagion", nom:"Contagion", fam:"col", def:"Un mouvement apparaît chez un danseur et se propage au groupe, qui le reprend peu à peu.", porter:"Un tremblement, une chute… gagne tout le groupe et finit en porter collectif.", piege:"La contagion part d’un point précis de la scène.", frise:"cascade"},
 {id:"permutation", nom:"Permutation", fam:"ges", def:"Changer l’ordre des éléments d’une phrase : ABCD devient DBCA, BDAC… Chacun garde les mêmes gestes, l’ordre change.", porter:"Deux duos ont les mêmes figures mais pas dans le même ordre : le public les reconnaît, décalées.", piege:"Écrire l’ordre sur la fiche projet : sinon, chacun improvise.", frise:"permutation"},
 {id:"repetition", nom:"Répétition", fam:"tps", def:"Refaire un geste ou une phrase à l’identique, ou en changeant un seul paramètre (vitesse, taille, direction).", porter:"Le même porter 3 fois : la 3e fois, il rate (rire) ou il monte plus haut (spectaculaire).", piege:"Trois fois, c’est un motif ; quatre fois, c’est long.", frise:"repetition"},
 {id:"crescendo", nom:"Crescendo / décrescendo", fam:"tps", def:"Une phrase répétée de plus en plus vite (ou de plus en plus lentement).", porter:"Un porter de plus en plus lent jusqu’à l’arrêt : l’émotion monte.", piege:"Le ralenti demande plus de force que la vitesse : on le prépare.", frise:"crescendo"},
 {id:"arret", nom:"Arrêt sur image", fam:"tps", def:"Tous s’immobilisent dans une figure, puis repartent. C’est la figure d’acrosport mise au service de la danse.", porter:"La figure tenue 3 secondes devient une « photo » ; le mouvement d’entrée et de sortie compte autant que la figure.", piege:"Une immobilité vraie : regard fixe, souffle calme, pas de réajustement.", frise:"arret"},
 {id:"inversion", nom:"Inversion", fam:"ges", def:"Refaire une phrase à l’envers, de la fin vers le début, comme une vidéo rembobinée.", porter:"La sortie du porter devient l’entrée : on « déchute » vers le haut.", piege:"Choisir une phrase courte (8 temps) : à l’envers, tout est plus difficile.", frise:"inversion"},
 {id:"transposition", nom:"Transposition", fam:"ges", def:"Faire le même mouvement à un autre niveau ou avec une autre partie du corps : un tour debout devient un tour au sol.", porter:"Le porter debout est transposé au sol (même dessin, couché).", piege:"On doit reconnaître le mouvement d’origine.", frise:"repetition"},
 {id:"contraste", nom:"Contraste", fam:"esp", def:"Opposer deux qualités en même temps ou à la suite : haut/bas, vite/lent, serré/dispersé.", porter:"Un porter très lent à côté d’un duo qui court ; ou un porter haut à côté d’un danseur au sol.", piege:"Un seul contraste à la fois, sinon on ne voit rien.", frise:"contrepoint"},
 {id:"niveaux", nom:"Niveaux et trajets", fam:"esp", def:"Utiliser le sol, le niveau moyen et le haut ; dessiner des trajets lisibles (diagonale, cercle, ligne).", porter:"Le porter amène un danseur en haut pendant que les autres sont au sol : le regard du public monte.", piege:"La diagonale fond de scène → avant-scène est le trajet le plus fort.", frise:""}
];

/* ---------- Verbes d'action (grille du lycée : au moins 4 verbes différents) ---------- */
const VERBES = ["sauter","tourner","rouler","tomber","glisser","porter","pousser","tirer","s’équilibrer","se renverser","ramper","courir","s’arrêter","se figer","s’enrouler","se déplier"];
/* ---------- Focales : l'effet recherché chez le spectateur ---------- */
const LEVIERS = [
 {id:"emotion", nom:"Émotion", c:"#a21caf", but:"Toucher le spectateur : qu’il ressente quelque chose (tendresse, tristesse, solitude, tension).",
  moyens:["Lenteur et continuité, poids abandonné dans les bras de l’autre.","Regards entre danseurs, puis vers le public.","Contact doux, mains qui retiennent.","Silence ou musique calme ; immobilités longues."],
  porters:["P1","P3","P4","P11"], piege:"Le surjeu (grimaces) casse l’émotion : c’est le corps qui parle, pas le visage."},
 {id:"rire", nom:"Rire", c:"#c2410c", but:"Surprendre, décaler : le spectateur rit parce que ça ne se passe pas comme prévu.",
  moyens:["Répétition qui « rate » la 3e fois.","Décalage volontaire : un danseur en retard, à contretemps.","Inversion des rôles : le plus petit « porte » le plus grand (illusion).","Gestes du quotidien détournés, rupture de musique."],
  porters:["P2","P5","P7","P10"], piege:"Le rire vient du timing : il faut le répéter autant qu’un unisson."},
 {id:"spectaculaire", nom:"Spectaculaire", c:"#1d4ed8", but:"Impressionner : le spectateur est épaté par la hauteur, la vitesse, le nombre.",
  moyens:["Unisson parfait de tout le groupe.","Envolées, porters en déplacement, cascades rapides.","Niveaux haut et bas en même temps.","Accumulation : de plus en plus de monde dans la figure."],
  porters:["P8","P9","P12","P13"], piege:"Le spectaculaire raté devient comique : ne montrer que ce qui réussit 4 fois sur 5."},
 {id:"danger", nom:"Danger (illusion)", c:"#b91c1c", but:"Faire frissonner : le spectateur croit que ça va tomber… et c’est rattrapé.",
  moyens:["Chute raide rattrapée au dernier moment (20 à 45°).","Lâcher-rattraper : le porteur part et revient.","Déséquilibre tenu, contraste vitesse/arrêt net.","Regard du porteur ailleurs pendant qu’il rattrape."],
  porters:["P4","P10","P13"], piege:"Le danger est une illusion : ce qui paraît risqué doit être facile et réussi à 100 % à l’entraînement."}
];

/* ---------- Thèmes et contraintes du tirage au sort (à partir de S4) ---------- */
const THEMES = [
 {t:"La chute", arg:"Tomber, être rattrapé, recommencer.", lev:"danger"},
 {t:"Le vertige", arg:"Tout bascule, rien n’est stable.", lev:"danger"},
 {t:"Les automates", arg:"Une machine parfaite qui se dérègle.", lev:"rire"},
 {t:"La tempête", arg:"Une force emporte le groupe.", lev:"spectaculaire"},
 {t:"Le rendez-vous", arg:"Deux personnes se cherchent, se trouvent, se perdent.", lev:"emotion"},
 {t:"Le clan", arg:"Un groupe soudé, un exclu qui veut entrer.", lev:"emotion"},
 {t:"L’effet domino", arg:"Un geste en entraîne un autre, jusqu’à la catastrophe.", lev:"spectaculaire"},
 {t:"Le défi", arg:"Deux camps qui se provoquent et se répondent.", lev:"spectaculaire"},
 {t:"Le monde à l’envers", arg:"Les forts sont portés, les petits portent.", lev:"rire"},
 {t:"Fragile", arg:"Quelqu’un qu’on déplace avec précaution.", lev:"emotion"},
 {t:"Apesanteur", arg:"Le poids disparaît, on flotte.", lev:"spectaculaire"},
 {t:"L’heure de pointe", arg:"La foule, le métro, chacun pour soi.", lev:"rire"},
 {t:"Le funambule", arg:"Avancer sur un fil, ne pas tomber.", lev:"danger"},
 {t:"Les marionnettes", arg:"Quelqu’un tire les ficelles… jusqu’à ce qu’elles cassent.", lev:"rire"},
 {t:"Retenir", arg:"Empêcher quelqu’un de partir.", lev:"emotion"},
 {t:"La révolte", arg:"Un groupe soumis qui se soulève.", lev:"spectaculaire"}
];
const CONTRAINTES = {
  procede:{nom:"Procédé imposé", s:"S4", l:["Unisson","Miroir","Cascade","Canon","Question-réponse (riposte)","Accumulation","Lâcher-rattraper","Contrepoint","Contagion","Répétition (3 fois, la 3e change)","Arrêt sur image","Inversion","Permutation"]},
  levier:{nom:"Focale dominante", s:"S4", l:["Émotion","Rire","Spectaculaire","Danger (illusion)"]},
  espace:{nom:"Contrainte d’espace", s:"S5", l:["Commencer en fond de scène, finir en avant-scène","Une diagonale complète","Un cercle","Trois niveaux (sol, moyen, haut) en même temps","Une ligne face au public","Être dos au public au moins une fois","Passer par les 4 coins de la scène","Un passage où tout le groupe tient dans 2 m²"]},
  porter:{nom:"Porter imposé", s:"S5", l:["Un porter entré en courant","Un porter à 3 ou plus","Un porter repris en cascade","Un porter tenu 3 s en arrêt sur image","Un porter pendant un déplacement","Deux porters en même temps sur scène"]},
  temps:{nom:"Contrainte de temps", s:"S6", l:["Commencer dans le silence","Un arrêt collectif de 4 temps","Un passage au ralenti","Une accélération (crescendo)","Finir par une immobilité de 5 s","8 temps sans musique au milieu"]}
};

/* ---------- Organisation des passages devant le public ---------- */
const PASSAGES = {
  ensemble:{nom:"Plusieurs groupes ensemble", seances:"S1, S2", txt:"La moitié ou le tiers de la classe danse en même temps sur la scène, l’autre partie regarde. Personne n’est seul devant tout le monde : on s’habitue au regard sans être exposé."},
  jumeles:{nom:"Groupes jumelés", seances:"S3 à S6", txt:"Deux groupes se montrent leur travail l’un à l’autre dans leur espace, avec une grille d’observation. Puis on change de partenaire. Un retour précis, sans toute la classe."},
  classe:{nom:"Seul devant la classe", seances:"S7, S8", txt:"Chaque groupe passe seul sur la scène, devant la classe assise côté public. C’est l’évaluation : deux passages, on garde le meilleur pour l’interprétation."}
};

/* ---------- Les 8 séances (75 min de pratique) ----------
   tl : [libellé, durée, type] — inst = information sans fiche ; ech, ex, sf, bil = une fiche chacun, dans l'ordre.
   passage : ensemble (plusieurs groupes à la fois) · jumeles (entre groupes) · classe (seul devant la classe, évaluation)
   tirage : étape du tirage au sort faite pendant la séance */
const TL_CREA = [["Installation, sécurité",4,"inst"],["Échauffement",10,"ech"],["Exercice 1",13,"ex"],["Exercice 2",15,"ex"],["Situation finale",18,"sf"],["Présentation, bilan",15,"bil"]];
const TL_EVAL = [["Installation",3,"inst"],["Échauffement autonome",10,"ech"],["Dernière répétition",15,"ex"],["Passages évalués",40,"sf"],["Bilan",7,"bil"]];

const SEANCES = [
/* ============ S1 ============ (fusion avec la séance 1 de Yannick) */
{id:"S1", titre:"Donner son poids : solos, duos et contrepoids", passage:"ensemble", tirage:"",
 obj:"Créer et montrer des solos et des duos horizontaux et verticaux, en sécurité, reliés par des déplacements à l’unisson, puis les présenter côté par côté en tenant les quatre rôles : gymnaste, chorégraphe, juge, spectateur.",
 porters:["P1","P2","P10","P19","P18"], procedes:["unisson","cascade"],
 tl:[["Installation, sécurité",3,"inst"],["Échauffement",12,"ech"],["Exercice 1",13,"ex"],["Exercice 2",14,"ex"],["Situation finale",18,"sf"],["Mini-spectacle, bilan",15,"bil"]],
 prepare:["Gymnaste : horizontal, vertical, oblique ; tenir 5 s immobile, démonter sans chute.","Chorégraphe : créer un solo et un duo, un début, une fin, des liaisons à l’unisson et en cascade.","Juge : repérer les 5 s d’immobilité, le démontage maîtrisé, l’horizontal ou le vertical.","Spectateur : silence, respect, une critique précise après le passage.","AFL2 · Premier passage devant un public, protégé : 8 élèves dansent à l’unisson en même temps."],
 install:"Former les groupes affinitaires de 3 à 5 : ils restent les mêmes jusqu’à l’évaluation. Tatamis jointifs ; la classe répartie sur les 4 côtés du tatami (environ 8 élèves par côté). Règles de sécurité des duos : les appuis du voltigeur sur les appuis du porteur (bassin, épaules, cuisses), on ne saute pas pour monter, on prévient avant de bouger, on réfléchit au sol avant de monter.",
 bilan:"Une figure tenue 5 s se juge ; une figure dansée se regarde. Dès S2, on garde l’immobilité, mais on travaille l’entrée et la sortie en mouvement.",
 fiches:[
  {titre:"Échauffement à deux, par vagues", duree:12, cat:"Échauffement", dispo:"Les 4 côtés du tatami ; par deux, puis par groupe. Une vague traverse pendant que les autres attendent sur leur côté.",
   roles:"Tous pratiquent. Par deux : A mène, B suit, on change à chaque traversée. Dans chaque groupe, on part à l’unisson ; entre les groupes, on part en cascade.",
   deroul:["Footing 3 min : A court, B le suit ; A change de déplacement toutes les 5 s (pas chassés, talons-fesses, à reculons…).","Au top : face à face, saisie aux coudes, on descend accroupis et on remonte ensemble. Au top : saut et arrêt pile, puis la même chose sans faire de bruit.","Traversées par vagues, d’un côté du tatami à l’autre : marche de l’éléphant, brouette (P19), saute-mouton (P18), roulade avant, déménageur à 3.","Articulaire et gainage (3 min) : culbuto, enroulement arrière ; poignets à deux (A à genoux, B s’appuie et pousse sur lui) ; cervicales (A pousse, B résiste) ; planches."],
   crit:"Arrêts nets et silencieux. Dans la brouette, prise au-dessus des genoux. Dans le saute-mouton, on pousse sur les mains, on ne s’assoit pas sur le dos.",
   reussite:"Chaque vague traverse à l’unisson et repart en cascade derrière la précédente.",
   moins:"Traversées en marchant ; pas de déménageur à 3.", plus:"Roulade avant à deux ; ATR contre le partenaire (pareur obligatoire).", schema:"img:figures-deux"},
  {titre:"Contrepoids à deux, à trois, à quatre", duree:13, cat:"Contact, transfert de poids", dispo:"Par deux dans son espace, puis par 3 ou 4. Groupe de 3 : un trio qui tourne. Groupe de 5 : un duo et un trio.",
   roles:"Le duo travaille. Le 3e élève pare (à un pas, mains ouvertes) et compte. Dans la bouteille saoule, deux pareurs et un voltigeur. Les rôles tournent à chaque figure.",
   deroul:["Échauffement des porters : au top, A s’allonge sur le ventre, B s’allonge sur son dos, puis on renverse la figure. Au top, A se met en boule, B s’allonge dos contre dos pour épouser la boule. Au top, A se met à 4 pattes, B s’allonge dessus.","P1 Contrepoids face à face, bras tendus : on s’assoit à deux et on remonte, puis à quatre en carré.","P2 Dos à dos : on descend et on remonte sans se tenir.","P10 Bouteille saoule à trois, de 20° à 30° ; variante bouteille à l’ATR pour les plus à l’aise, avec deux pareurs."],
   crit:"Prise en crochet ou aux poignets. Le poids passe d’un corps à l’autre progressivement. Le voltigeur reste gainé ; le porteur garde le dos plat.",
   reussite:"Chaque groupe réussit P1 à deux et à quatre, P2 et P10, chacun dans chaque rôle.",
   moins:"P10 à 15°, pareurs très proches.", plus:"P1 sur un pied ou en se tenant d’une seule main.", schema:"img:contrepoids"},
  {titre:"Solos et duos : horizontal, vertical", duree:14, cat:"Figures et liaisons", dispo:"Chacun dans son espace, puis par deux. Le côté public marqué.",
   roles:"Seul, puis par deux. Le partenaire compte les 5 secondes et dit : immobile oui ou non, chute oui ou non.",
   deroul:["Seul, en 20 s, créer un solo vertical qui tient 5 s immobile sans chuter ; puis un solo horizontal. Chercher plus difficile : moins d’appuis, plus haut, renversé, ou « ce que le voisin n’aura pas pensé à faire ».","Seul, enchaîner ses deux solos par une liaison : choisir l’ordre, la direction et le déplacement (marche, roulade, tour).","Par deux, créer un duo horizontal et un duo vertical. Démonstration des lignes d’appuis par le professeur : appuis du voltigeur sur ceux du porteur, on ne saute pas, on prévient, on cherche au sol avant de monter."],
   crit:"5 s immobiles vraies, démontage maîtrisé (on redescend par où on est monté). On cherche d’abord au sol.",
   reussite:"Chaque élève a 2 solos et chaque duo 2 duos, tenus 5 s sans chute.",
   moins:"Solos à 3 appuis ; duo au sol uniquement.", plus:"Duo avec entrée et sortie en mouvement (vers S2).", schema:"img:elements-dynamiques"},
  {titre:"Le spectacle du duo", duree:18, cat:"Situation finale", dispo:"Par deux dans l’espace du groupe. Musique lente en boucle.",
   roles:"Chaque duo crée son enchaînement ; dans un trio, le 3e pare pendant les duos et danse les liaisons. Le professeur passe valider la sécurité de chaque duo.",
   deroul:["Attendus pour chaque élève : 1 solo horizontal, 1 solo vertical, 1 duo horizontal, 1 duo vertical.","2 déplacements à l’unisson strict (même chose au même moment), qui relient les figures.","1 début et 1 fin immobiles et nets.","Répéter 3 fois sur la musique, la dernière sans parler."],
   crit:"Les figures sont faites face ou de profil au côté public. L’unisson se voit : même départ, même vitesse.",
   reussite:"L’enchaînement passe 2 fois de suite sans chute ni arrêt.",
   moins:"Un seul duo, un seul déplacement à l’unisson.", plus:"Une liaison en cascade entre deux duos du groupe.", schema:"frise:spectacle"},
  {titre:"Mini-spectacle aux quatre côtés", duree:15, cat:"Présentation et bilan", dispo:"La classe sur les 4 côtés du tatami. Un côté danse, le côté en face juge, les deux autres côtés regardent. Puis on tourne.",
   roles:"Danseurs : les duos d’un côté (environ 8 élèves) dansent en même temps. Juges : le côté en face note chaque duo vu sur 3 points (5 s, immobile, démontage maîtrisé). Spectateurs : les deux autres côtés, silencieux, commentent après.",
   deroul:["4 passages, un par côté (environ 2 min chacun avec le placement : 8 min).","Après chaque passage, les juges annoncent leurs points et un spectateur dit ce qu’il a retenu (4 min au total).","Bilan (3 min) : qu’est-ce qui change entre une figure tenue et une figure dansée ?"],
   crit:"Silence pendant le passage ; on applaudit à la fin. Le juge note ce qu’il voit, pas ce qu’il pense de l’élève.",
   reussite:"Les 4 côtés passent ; chaque duo reçoit sa note sur 3 et un commentaire.",
   moins:"Les juges notent seulement les 5 s.", plus:"Les juges disent aussi horizontal, vertical ou oblique.", schema:"scene:cotes4"}
 ]},
/* ============ S2 ============ (fusion avec la séance 2 de Yannick) */
{id:"S2", titre:"À trois : porter, unisson et cascade", passage:"ensemble", tirage:"",
 obj:"Construire un porter à 3 et des liaisons dynamiques (roue, saute-mouton, roulades), puis préparer par groupe un spectacle qui entre et sort du tatami avec des déplacements à l’unisson et en cascade.",
 porters:["P9","P10","P11","P18"], procedes:["unisson","cascade"],
 tl:[["Installation, sécurité",3,"inst"],["Échauffement",10,"ech"],["Exercice 1",13,"ex"],["Exercice 2",14,"ex"],["Situation finale",20,"sf"],["Mini-spectacle, bilan",15,"bil"]],
 prepare:["Composer (grille du lycée) : relation aux autres, au moins 1 cascade et 1 unisson, adaptés au rythme musical.","Composer : un début et une fin à l’extérieur du tatami, la première trace d’un schéma de la prestation.","Interpréter : qualité de l’unisson, maîtrise des roues et roulades, sécurité du porter à 3.","AFL3 · Juges : duos notés sur 3, unisson validé, roues ou roulades validées.","AFL2 · Deuxième passage protégé : un côté du tatami danse à la fois."],
 install:"Mêmes groupes, côtés du tatami comme en S1. Nouvelle règle : on ne « monte » plus une figure, on y entre en mouvement et on en sort en mouvement (4 temps : contact, transfert du poids, poussée, freinage). Au-dessus de la taille, un pareur, les mains prêtes avant le départ.",
 bilan:"Un unisson raté se voit plus qu’un solo raté : on compte à voix haute au début, puis on s’écoute. Une liaison dynamique (roue, roulade) relie deux figures sans temps mort.",
 videos:[["Vidéo 1 choisie par le professeur","https://www.youtube.com/watch?v=K7iq9PtHYtA"],["Vidéo 2 choisie par le professeur","https://youtu.be/wP4uIuHUats"]],
 fiches:[
  {titre:"Footing, traversées et éléments gymniques", duree:10, cat:"Échauffement", dispo:"Les 4 côtés du tatami. Chaque groupe traverse par vague.",
   roles:"Tous pratiquent. Dans chaque groupe, on part à l’unisson ; entre les groupes, on part en cascade.",
   deroul:["Footing 3 min.","Traversées par vagues, des 4 côtés : MG, TF, PC, CP… à l’unisson dans le groupe, en cascade entre les groupes.","Roue : main, main, pied, pied ; poussée de la jambe avant, le bassin passe au-dessus des mains.","Roulade avant, roulade arrière, puis ATR (contre un partenaire pareur pour ceux qui débutent)."],
   crit:"Roue dans une ligne droite, jambes tendues au-dessus. Roulade : menton rentré, on roule sur le dos rond, jamais sur la tête.",
   reussite:"Chaque vague traverse à l’unisson ; chaque élève réussit une roue et une roulade dans l’axe.",
   moins:"Roue à genoux pliés ; roulade sur plan incliné.", plus:"Roue sur une main ; enchaîner roulade avant et roulade arrière.", schema:"img:figures-deux"},
  {titre:"À deux, à trois : saute-mouton, roue, porter", duree:13, cat:"Porters", dispo:"Par groupe dans son espace. Groupe de 3 : on tourne. Groupe de 4 ou 5 : le dernier pare et compte.",
   roles:"Les rôles tournent à chaque figure : porteur, voltigeur, pareur. Le pareur est à un pas, mains ouvertes.",
   deroul:["Saute-mouton à 2, puis à 3 (le premier saute, se baisse, le suivant saute les deux) : P18.","Roue à 2 : les deux partenaires côte à côte font leur roue en même temps ; roue à 3 en cascade.","Porter à 3 : P9 L’envolée à trois, ou P10 La bouteille saoule, ou P11 Le brancard pour les groupes à l’aise.","Entrer dans le porter en mouvement (2 pas, puis le porter) et en sortir en mouvement."],
   crit:"Saute-mouton : on pousse sur les mains, on ne s’assoit pas sur le dos. Porter à 3 : les porteurs prennent à la même hauteur, le voltigeur reste gainé.",
   reussite:"Chaque groupe enchaîne un saute-mouton à 3 et réussit un porter à 3 avec chaque élève voltigeur au moins une fois.",
   moins:"Saute-mouton à 2 seulement ; P10 à 20°.", plus:"P11 en déplacement ; roue à 3 en canon.", schema:"porters:P18,P9,P10,P11"},
  {titre:"Unisson, cascade et liaisons dynamiques", duree:14, cat:"Procédés de composition", dispo:"Le groupe entier, le côté public marqué.",
   roles:"Tous dansent. Chacun à son tour sort une minute, se met côté public et dit : unisson réussi ou pas, cascade lisible ou pas.",
   deroul:["Unisson : le groupe choisit un déplacement (marche, course, déplacement gymnique) et le fait exactement en même temps, même direction, même vitesse.","Cascade : le même déplacement, chacun part quand le précédent a fini son premier temps.","Liaisons dynamiques : relier deux figures par une roue, une roulade ou un saute-mouton, sans s’arrêter entre les deux.","Variante : le miroir, deux sous-groupes face à face (droite et gauche inversées)."],
   crit:"Unisson : même départ, même vitesse, même fin. Cascade : chacun attend son tour, décalage régulier.",
   reussite:"Le regardeur valide un unisson et une cascade sur un déplacement entier.",
   moins:"Unisson sur 8 temps, en se regardant.", plus:"L’unisson sans compter à voix haute, en écoutant la musique.", schema:"proc:unisson,cascade"},
  {titre:"Préparer le spectacle du groupe", duree:20, cat:"Situation finale", dispo:"Par groupe ; le spectacle commence et finit à l’extérieur du tatami. Musique choisie par le professeur, la même pour tous.",
   roles:"Le groupe crée ensemble. Un élève est chorégraphe pendant 5 min : il regarde de face et décide d’un changement ; on tourne.",
   deroul:["Début à l’extérieur du tatami.","Au moins 1 déplacement à l’unisson, au moins 1 passage en cascade, 1 autre déplacement gymnique libre.","Au moins 2 duos, 1 trio, 1 porter à 3.","2 liaisons dynamiques à 2 ou à 3 (roue, roulade, saute-mouton).","Fin à l’extérieur du tatami.","Répéter 3 fois sur la musique, la dernière sans parler."],
   crit:"Chaque élément de la liste est visible depuis le côté des juges. Les figures sont faites face ou de profil au public.",
   reussite:"Le spectacle passe 2 fois de suite sans arrêt, avec tous les éléments de la liste.",
   moins:"Un seul duo, une seule liaison dynamique.", plus:"Un procédé en plus : répétition, accumulation, inversion ou permutation.", schema:"frise:spectacle2"},
  {titre:"Mini-spectacle et juges", duree:15, cat:"Présentation et bilan", dispo:"La classe sur les 4 côtés du tatami. Les groupes d’un côté passent ensemble ; le côté en face juge, les deux autres regardent. Puis on tourne.",
   roles:"Danseurs : les groupes d’un côté. Juges : le côté en face, chacun chargé d’une tâche (noter les duos sur 3 : 5 s, immobile, démontage maîtrisé ; valider la qualité de l’unisson ; valider la qualité des roues ou des roulades). Spectateurs : les deux autres côtés, silencieux, commentent après.",
   deroul:["4 passages, un par côté (environ 2 min chacun avec le placement : 8 min).","Les juges donnent leurs résultats et un spectateur dit ce qu’il a retenu (4 min).","Bilan (3 min) : qu’est-ce qui rend un unisson lisible ? Où place-t-on la cascade pour qu’on la voie ?"],
   crit:"Silence pendant le passage. Le juge note ce qu’il voit, sur la tâche qui lui est confiée.",
   reussite:"Les 4 côtés passent ; chaque groupe repart avec sa note des duos et un retour sur l’unisson et les liaisons.",
   moins:"Une seule tâche de juge : les duos.", plus:"Un juge de plus : la cascade.", schema:"scene:cotes4"}
 ]},
/* ============ S3 ============ */
{id:"S3", titre:"Cascade, canon et espace scénique", passage:"jumeles", tirage:"",
 obj:"Organiser les porters dans le temps (cascade, canon) et dans l’espace (orientation, trajets, niveaux) pour que le public lise la composition.",
 porters:["P5","P8","P11","P12"], procedes:["cascade","canon","niveaux"],
 tl:TL_CREA,
 prepare:["AFL1 · Composer : espace scénique (avant-scène, diagonale, niveaux) et procédés cascade et canon.","AFL3 · Premier rôle de spectateur-lecteur avec une grille, en groupes jumelés.","AFL2 · Se montrer entre groupes, sans toute la classe."],
 install:"Chaque groupe est jumelé avec un autre (G1-G2, G3-G4, G5-G6, G7-G8). Dans chaque espace, le côté public est marqué par un plot. Distribuer une grille de spectateur par groupe.",
 bilan:"L’avant-scène est l’endroit le plus fort, le fond le plus faible ; la diagonale donne de la profondeur.",
 fiches:[
  {titre:"La cascade de réveil", duree:10, cat:"Échauffement", dispo:"Par groupe, en ligne face au côté public.",
   roles:"Tous pratiquent. Le premier de la ligne propose un geste ; on change de meneur toutes les minutes.",
   deroul:["Le meneur fait un geste de mobilisation (épaules, hanches, genoux) ; les autres le reprennent l’un après l’autre, comme une ola (4 min).","Gainage en ligne : planche ventrale en cascade, chacun se pose quand le voisin est posé (2 min).","Rappel du porter à 3 ou 4 de S2, deux fois (4 min)."],
   crit:"On attend que le voisin ait fini pour partir.",
   reussite:"Une cascade de 4 gestes de suite sans « collision ».",
   moins:"Le meneur reste le même.", plus:"Cascade aller puis retour.", schema:""},
  {titre:"Cascade et canon avec un porter", duree:13, cat:"Procédés de composition", dispo:"Le groupe, en ligne ou en diagonale face au côté public.",
   roles:"Tous dansent, sauf un regardeur qui change à chaque procédé et dit ce qu’il a vu.",
   deroul:["Cascade : en ligne, chacun fait le même geste (une chute au sol, un tour) quand le voisin a fini le sien.","Cascade de porters : P5 en ligne (3 tables) ; P12 La vague si le groupe est à 4 ou 5.","Canon : la phrase de 16 temps de S2, départs décalés de 4 temps.","Canon de porters : chaque duo démarre 8 temps après le précédent, le porter « se propage »."],
   crit:"Cascade : chacun part quand le précédent finit. Canon : le décalage reste le même jusqu’au bout.",
   reussite:"Le regardeur reconnaît sans aide la cascade et le canon.",
   moins:"Cascade de gestes seulement, sans porter.", plus:"Canon à 3 départs différents.", schema:"proc:cascade,canon"},
  {titre:"La scène et le public", duree:15, cat:"Espace scénique", dispo:"Le groupe dans son espace, le jumeau n’intervient pas encore.",
   roles:"Tous dansent ; un regardeur côté public, qui change à chaque passage.",
   deroul:["La phrase de S2 faite 3 fois : au fond, dos au public ; en avant-scène, de face ; sur une diagonale fond → avant-scène. Le regardeur dit laquelle est la plus forte et pourquoi.","Niveaux : un danseur au sol, un au niveau moyen, un porté en haut, en même temps, 3 s.","Trajet : P8 Roulade sur le dos ou P11 Le brancard en avançant sur la diagonale."],
   crit:"Porters face ou de profil au public. On choisit où l’on est, on ne le subit pas.",
   reussite:"Le groupe choisit son espace (entrée, trajet, fin) et le justifie en une phrase.",
   moins:"Deux emplacements seulement : fond et avant-scène.", plus:"Les 3 niveaux pendant un déplacement.", schema:"scene:espace"},
  {titre:"Une minute : cascade, canon, trajet", duree:18, cat:"Situation finale", dispo:"Le groupe, musique commune.",
   roles:"Le groupe crée. Un chorégraphe tournant (5 min chacun) regarde de face et décide.",
   deroul:["Partir de la phrase de S2.","Ajouter une cascade (de gestes ou de porters) et un canon.","Dessiner un trajet (diagonale ou cercle) et finir en avant-scène.","Répéter 4 fois, la dernière sans parler."],
   crit:"Chaque procédé est lisible depuis le côté public.",
   reussite:"Une minute enchaînée 2 fois sans arrêt, avec cascade, canon et trajet.",
   moins:"La cascade seule.", plus:"Le canon finit par un unisson.", schema:"frise:groupe"},
  {titre:"Groupes jumelés : se montrer entre nous", duree:15, cat:"Présentation et bilan", dispo:"Dans l’espace du groupe A : le groupe B assis côté public, à 2 m. Puis on inverse.",
   roles:"Danseurs : le groupe qui passe. Spectateurs : le groupe jumeau, avec la grille (cascade ? canon ? trajet ? meilleur moment ?) ; un élève écrit, un élève donne le retour.",
   deroul:["A danse pour B (1 min). B remplit la grille et donne un point fort et un conseil (2 min).","On inverse (3 min).","Chaque groupe garde un conseil et retravaille le passage concerné (4 min).","Bilan collectif (3 min) : où est l’endroit le plus fort de la scène ? Rangement (2 min)."],
   crit:"Un retour = un point fort + un conseil précis (« le canon se perd après le porter »), pas « c’était bien ».",
   reussite:"Chaque groupe repart avec un conseil précis et l’a appliqué.",
   moins:"Grille à cocher seulement.", plus:"Le jumeau propose un changement d’espace.", schema:"scene:jumeles"}
 ]},
/* ============ S4 ============ */
{id:"S4", titre:"Les focales du spectateur et le tirage du thème", passage:"jumeles", tirage:"S4",
 obj:"Faire varier l’effet produit sur le spectateur (émotion, rire, spectaculaire, danger) avec les mêmes porters, puis tirer au sort un thème et ses contraintes pour commencer la chorégraphie.",
 porters:["P4","P6","P10","P13"], procedes:["lacher"],
 tl:TL_CREA,
 prepare:["AFL1 · Composer : un propos (le thème) et un effet choisi (la focale).","AFL1 · Interpréter : intention, énergie, regard.","AFL2 · La fiche projet commence : titre, argument, focale.","AFL3 · Spectateur : dire l’effet ressenti et ce qui l’a produit."],
 install:"Groupes jumelés comme en S3 (ou nouveaux jumeaux). Préparer l’onglet Tirage sur l’iPad et une fiche projet par groupe.",
 bilan:"Le rire est souvent la focale la plus difficile : il demande un timing aussi précis qu’un unisson.",
 fiches:[
  {titre:"Les quatre énergies", duree:10, cat:"Échauffement", dispo:"Toute la classe, puis par groupe.",
   roles:"Tous pratiquent.",
   deroul:["Marche lourde puis légère, saccadée puis continue, rapide puis au ralenti, au signal (3 min).","Gainage (2 min).","Par groupe : refaire la minute de S3 en changeant d’énergie toutes les 16 temps (5 min)."],
   crit:"On garde le même trajet, seule l’énergie change.",
   reussite:"Le groupe passe d’une énergie à l’autre sur le temps 1.",
   moins:"Deux énergies seulement (lourd et léger).", plus:"Une énergie différente par danseur, en même temps.", schema:""},
  {titre:"Un porter, quatre effets", duree:13, cat:"Interprétation, focales", dispo:"Par duo dans le groupe ; le reste du groupe regarde.",
   roles:"Un duo joue, les autres devinent la focale. On change de duo à chaque série.",
   deroul:["Chaque duo prend un porter connu (P4 ou P6).","Le jouer 4 fois en changeant seulement l’énergie, le temps et le regard. Émotion : lent, regard entre partenaires, poids abandonné. Rire : la 3e fois, ça « rate », décalage, regard étonné au public. Spectaculaire : plus vite, entrée en courant, regard fier au public. Danger : raide, rattrapé tard, le porteur regarde ailleurs.","Le groupe devine la focale et dit ce qui l’a trahi."],
   crit:"Le porter reste le même : seuls l’énergie, la vitesse et le regard changent.",
   reussite:"Le groupe devine 3 focales sur 4.",
   moins:"Deux focales seulement : émotion et rire.", plus:"Les spectateurs disent aussi ce qui a changé.", schema:"leviers"},
  {titre:"L’illusion du danger", duree:15, cat:"Porters", dispo:"Le groupe, pareurs placés avant chaque essai.",
   roles:"Voltigeur, porteur(s), pareur. Le 5e élève vérifie l’angle et le placement avant chaque essai. Les rôles tournent.",
   deroul:["P4 rattrapée tard : le porteur reste à 30 cm mais regarde ailleurs ; angle de 20° puis 30°.","P10 La bouteille saoule à 3 ou 4, voltigeur raide ; un pareur fait mine de partir et revient.","Lâcher-rattraper de contact : en contrepoids P1, l’un fait mine de lâcher une main, l’autre main tient.","P13 Saut rattrapé (niveau 3) : seulement pour les groupes qui ont réussi P9 en S2, avec un pareur."],
   crit:"Tout ce qui ressemble à une chute est préparé : porteur placé avant, angle limité, gainage.",
   reussite:"Chaque groupe a un moment de « danger » réussi 4 fois sur 4.",
   moins:"P4 face à face, à 15°.", plus:"P13 avec les porteurs qui se tournent vers le public au dernier moment.", schema:"porters:P4,P10,P13"},
  {titre:"Tirage au sort : thème, procédé, focale", duree:18, cat:"Situation finale", dispo:"Chaque groupe passe à l’iPad (onglet Tirage), puis retourne dans son espace avec sa fiche projet.",
   roles:"Un secrétaire écrit la fiche projet, un chorégraphe regarde de face, les autres dansent ; on tourne toutes les 6 min.",
   deroul:["Chaque groupe tire un thème, un procédé imposé et une focale dominante. Un joker par groupe pour tout le cycle : on peut relancer une seule case, une seule fois.","Écrire en 3 lignes : le titre, l’argument (« c’est l’histoire de… »), la focale.","Construire une esquisse d’une minute qui reprend la phrase de S3 et intègre le procédé imposé.","Répéter 3 fois."],
   crit:"Le procédé imposé et la focale doivent se voir sans explication.",
   reussite:"Une esquisse d’une minute enchaînée ; le jumeau reconnaît le procédé imposé.",
   moins:"La focale peut être celui suggéré par le thème.", plus:"La focale est contraire au thème (une « chute » drôle).", schema:"frise:debutfin"},
  {titre:"Jumelés : devine le thème", duree:15, cat:"Présentation et bilan", dispo:"Groupes jumelés, dans l’espace du groupe qui passe.",
   roles:"Danseurs : le groupe qui passe. Spectateurs : le jumeau, qui doit deviner le thème et la focale avant qu’on les lui dise.",
   deroul:["A montre son esquisse ; B devine le thème et la focale, puis donne un point fort et un conseil (3 min).","On inverse (3 min).","On retravaille avec le conseil reçu (4 min).","Bilan collectif (3 min) : quelle focale est la plus difficile à produire ? Rangement (2 min)."],
   crit:"On dit ce qu’on a ressenti et ce qui l’a produit (« j’ai eu peur quand il a lâché la main »).",
   reussite:"Le jumeau trouve la focale ; le thème est au moins approché.",
   moins:"Le jumeau choisit entre deux thèmes proposés.", plus:"Le jumeau propose un titre.", schema:"scene:jumeles"}
 ]},
/* ============ S5 ============ */
{id:"S5", titre:"Question-réponse, accumulation : écrire la chorégraphie", passage:"jumeles", tirage:"S5",
 obj:"Construire la chorégraphie complète (1 min 30 à 2 min) en début, développement et fin, avec la question-réponse, l’accumulation et les contraintes tirées.",
 porters:["P6","P9","P11","P12"], procedes:["question","accumulation","lacher","contrepoint"],
 tl:TL_CREA,
 prepare:["AFL1 · Composer : structure début, développement, fin ; au moins 3 procédés dont l’imposé.","AFL2 · Premier échauffement mené par un élève du groupe.","AFL3 · Spectateur-lecteur avec la grille complète, nouveau jumeau."],
 install:"Nouveaux jumeaux (G1-G3, G2-G4, G5-G7, G6-G8). Fiches d’échauffement autonome distribuées.",
 bilan:"Une chorégraphie se lit si l’on voit où elle commence, ce qui se développe et comment elle finit.",
 fiches:[
  {titre:"Échauffement mené par un élève", duree:10, cat:"Échauffement", dispo:"Par groupe, avec la fiche d’échauffement autonome.",
   roles:"Un élève mène, les autres suivent ; un élève coche la fiche. Le meneur change à chaque séance.",
   deroul:["Phase 1 · Marche et mobilisation (2 min).","Phase 2 · Gainage, planche raide soulevée (2 min).","Phase 3 · Contact : petite danse, contrepoids (3 min).","Phase 4 · Un porter du groupe, puis la phrase de S4 (3 min)."],
   crit:"Progressif : pas de porter avant la phase 4.",
   reussite:"7 ou 8 critères cochés sur la fiche (voir onglet Échauffements).",
   moins:"Le professeur mène les phases 1 et 2.", plus:"Le meneur adapte au thème du groupe.", schema:""},
  {titre:"Question-réponse : la riposte", duree:13, cat:"Procédés de composition", dispo:"Le groupe coupé en deux camps (2 + 2, 2 + 3 ou 1 + 2), face à face.",
   roles:"Les deux camps dansent à tour de rôle ; un regardeur côté public dit si la réponse imite, amplifie ou contredit.",
   deroul:["Le camp A pose une « question » de 8 temps (un geste, un porter) adressée à B.","B riposte en 8 temps : il imite, il amplifie (plus haut, plus grand) ou il contredit (le contraire).","Trois échanges de plus en plus courts (8, 4, 2 temps) : la riposte s’accélère.","Finir par une réponse commune, à l’unisson."],
   crit:"On attend la fin de la question pour répondre. Les deux camps se regardent pendant l’échange.",
   reussite:"3 échanges enchaînés ; le regardeur dit pour chacun : imite, amplifie ou contredit.",
   moins:"Une seule question, une seule réponse.", plus:"La riposte est un porter qui répond à un porter.", schema:"proc:question"},
  {titre:"Accumulation et lâcher-rattraper", duree:15, cat:"Procédés de composition", dispo:"Le groupe, côté public marqué.",
   roles:"Tous dansent ; un regardeur tournant.",
   deroul:["Accumulation : un danseur commence une phrase de 16 temps ; un 2e le rejoint au temps 1 suivant, puis un 3e, jusqu’à tout le groupe ; finir par un porter collectif (P11 ou P12).","Lâcher-rattraper : sur l’unisson, un danseur sort, il est porté (P6 ou P9), puis rejoint la phrase là où en est le groupe.","Contrepoint : un soliste danse au sol pendant que le groupe monte un porter."],
   crit:"Les arrivées tombent sur des temps forts. Le groupe ne s’arrête pas pendant l’absence du danseur lâché.",
   reussite:"Le danseur lâché revient au bon endroit de la phrase, 2 fois de suite.",
   moins:"Accumulation à 3 seulement.", plus:"Accumulation de porters : la figure grossit à chaque arrivée.", schema:"proc:accumulation,lacher"},
  {titre:"Tirage 2 et écriture de la chorégraphie", duree:18, cat:"Situation finale", dispo:"Le groupe, fiche projet, musique choisie.",
   roles:"Secrétaire, chorégraphe de face, danseurs ; on tourne toutes les 6 min.",
   deroul:["Tirer la contrainte d’espace et le porter imposé (onglet Tirage).","Écrire la structure sur la fiche projet : début (entrée ou présence immobile), développement (au moins 3 procédés dont l’imposé, 2 porters dont l’imposé), fin (immobilité ou sortie).","Mettre bout à bout : 1 min 30 au minimum.","Filage 2 fois."],
   crit:"Chaque partie a un rôle : le début installe, le développement fait monter l’effet, la fin le fixe.",
   reussite:"1 min 30 enchaînée avec les deux contraintes tirées.",
   moins:"1 min 15, une seule contrainte.", plus:"Un leitmotiv : un geste qui revient au début et à la fin.", schema:"frise:debutfin"},
  {titre:"Jumelés : le spectateur-lecteur", duree:15, cat:"Présentation et bilan", dispo:"Nouveaux jumeaux, dans l’espace du groupe qui passe.",
   roles:"Danseurs : le groupe qui passe. Spectateurs : le jumeau, avec la grille complète (procédés repérés, espace, focale, moment fort) ; chacun regarde un point de la grille.",
   deroul:["A danse (1 min 30) ; B remplit la grille et donne 2 retours (3 min).","On inverse (3 min).","On retravaille avec les conseils reçus (4 min).","Bilan collectif (3 min) et rangement (2 min)."],
   crit:"Chaque spectateur nomme au moins un procédé et l’endroit où il l’a vu.",
   reussite:"La grille du jumeau retrouve le procédé imposé et la focale.",
   moins:"Grille à cocher.", plus:"Le jumeau propose où placer un porter pour plus d’effet.", schema:"scene:jumeles"}
 ]},
/* ============ S6 ============ */
{id:"S6", titre:"Interpréter : présence, regard, musique — répétition générale", passage:"jumeles", tirage:"S6",
 obj:"Rendre la chorégraphie lisible et habitée (présence, regard, immobilités, calage sur la musique), finaliser la fiche projet et faire une répétition générale avec la grille d’évaluation.",
 porters:[], procedes:["arret","crescendo"],
 tl:TL_CREA,
 prepare:["AFL1 · Interpréter : engagement, regard, immobilités tenues.","AFL1 · Composer : fiche projet complète, contraintes tirées toutes intégrées.","AFL3 · Simulation de l’évaluation : le jumeau utilise la vraie grille."],
 install:"Jumeaux de S5. Grilles d’évaluation à blanc. La musique de chaque groupe prête sur l’enceinte (ou le téléphone du groupe).",
 bilan:"Ce qui fait la différence entre deux groupes de même niveau, c’est la présence : regard, immobilités, engagement jusqu’au bout.",
 fiches:[
  {titre:"Échauffement autonome", duree:10, cat:"Échauffement", dispo:"Par groupe, avec la fiche d’échauffement autonome.",
   roles:"Un nouveau meneur ; un élève coche la fiche.",
   deroul:["Les 4 phases de la fiche (marche, gainage, contact, porter du groupe).","Finir par la première minute de la chorégraphie."],
   crit:"Progressif, complet, en 10 min.",
   reussite:"7 ou 8 critères cochés.",
   moins:"Le professeur mène la phase 2.", plus:"Le meneur chronomètre et adapte.", schema:""},
  {titre:"Présence et regard", duree:13, cat:"Interprétation", dispo:"Le groupe dans son espace, côté public marqué.",
   roles:"Tous dansent ; un regardeur compte les « réajustements » (bouger un pied, toucher ses cheveux, rire).",
   deroul:["Entrée et immobilité de départ : on se place, on attend 3 s, regard au public, puis on démarre (5 fois).","Le regard qui porte : pendant un porter, le voltigeur regarde un point loin au-dessus du public ; les porteurs regardent le voltigeur ou le public, jamais le sol.","Immobilités : chaque fin de phrase tenue 3 s.","Un passage « à 50 % », puis un « à 120 % » : le regardeur dit ce qui change."],
   crit:"Le corps reste habité même à l’arrêt : regard fixe, souffle calme.",
   reussite:"Zéro réajustement sur les immobilités de début et de fin.",
   moins:"Immobilités de 2 s.", plus:"Immobilité de 5 s en fin, regard au public.", schema:""},
  {titre:"Musique et temps forts", duree:15, cat:"Composition", dispo:"Le groupe, sa musique.",
   roles:"Le chorégraphe tient la musique et compte ; les autres dansent.",
   deroul:["Tirer la contrainte de temps (onglet Tirage).","Choisir la musique définitive (ou le silence, ou un montage) ; repérer les temps forts et les changements.","Placer les porters sur les temps forts, ou à contretemps pour surprendre.","Intégrer la contrainte de temps."],
   crit:"La musique est un partenaire : on la suit ou on la contredit, mais on ne l’ignore pas.",
   reussite:"Les porters tombent là où le groupe l’a décidé, 2 fois de suite.",
   moins:"Une musique très marquée (temps forts nets).", plus:"Un passage sans musique au milieu.", schema:"proc:arret,crescendo"},
  {titre:"Répétition générale", duree:18, cat:"Situation finale", dispo:"Le groupe, sa musique, la fiche projet.",
   roles:"Tous dansent ; à chaque correction, un élève différent dit ce qu’il change.",
   deroul:["Filage complet, 2 min de corrections, filage, 2 min de corrections, filage.","Finaliser la fiche projet : titre, argument, focale, procédés (dont l’imposé), porters (dont l’imposé), contraintes d’espace et de temps, musique.","Remettre la fiche au professeur."],
   crit:"Le filage ne s’arrête jamais : on corrige après.",
   reussite:"Chorégraphie de 1 min 30 à 2 min enchaînée sans arrêt ; fiche projet complète remise.",
   moins:"1 min 15 acceptée.", plus:"Un passage les yeux du public suivis : on sait où le spectateur regarde à chaque instant.", schema:"frise:debutfin"},
  {titre:"Jumelés avec la grille d’évaluation", duree:15, cat:"Présentation et bilan", dispo:"Jumeaux de S5, dans l’espace du groupe qui passe.",
   roles:"Danseurs : le groupe qui passe. Spectateurs : le jumeau évalue avec la vraie grille (simulation) et donne 2 conseils.",
   deroul:["A danse ; B évalue et donne 2 conseils (4 min).","On inverse (4 min).","Dernier ajustement (4 min).","Bilan (3 min) : ordre de passage de S7 tiré au sort."],
   crit:"La grille sert à progresser : on dit ce qui ferait gagner un degré.",
   reussite:"Chaque groupe connaît son degré estimé et 2 choses à améliorer.",
   moins:"Le jumeau ne remplit que la partie Composer.", plus:"Le jumeau remplit aussi l’interprétation de chaque danseur.", schema:"scene:jumeles"}
 ]},
/* ============ S7 ============ */
{id:"S7", titre:"Évaluation 1 : passage devant la classe", passage:"classe", tirage:"",
 obj:"Présenter sa chorégraphie seul devant la classe, et observer un autre groupe en spectateur-lecteur.",
 porters:[], procedes:[],
 tl:TL_EVAL,
 prepare:["AFL1 · Premier passage noté (composer et interpréter).","AFL2 · Échauffement autonome observé.","AFL3 · Spectateur-lecteur : chaque élève observe un groupe désigné avec la fiche."],
 install:"Scène d’environ 8 × 6 m sur le tatami, plots aux 4 coins, côté public marqué. Classe assise face à la scène, à 2 m. Professeur côté public avec la grille (onglet Évaluation). Ordre de passage tiré en S6, affiché.",
 bilan:"Chaque groupe note 2 corrections pour le passage de S8.",
 fiches:[
  {titre:"Échauffement autonome observé", duree:10, cat:"Échauffement", dispo:"Par groupe, dans son espace, avec la fiche.",
   roles:"Un meneur ; le professeur observe pour l’AFL2.",
   deroul:["Les 4 phases de la fiche.","Finir par le porter le plus difficile de la chorégraphie, 2 fois."],
   crit:"Complet, progressif, sans aide.",
   reussite:"7 ou 8 critères cochés.",
   moins:"", plus:"", schema:""},
  {titre:"Dernière répétition", duree:15, cat:"Répétition", dispo:"Par groupe, dans son espace, avec sa musique.",
   roles:"Tous dansent ; le chorégraphe regarde de face.",
   deroul:["Filage complet, corrections, filage.","Répéter l’entrée en scène et l’immobilité de départ."],
   crit:"On ne change plus la chorégraphie : on la fixe.",
   reussite:"Deux filages sans arrêt.",
   moins:"", plus:"", schema:""},
  {titre:"Passages devant la classe", duree:40, cat:"Évaluation", dispo:"Scène de 8 × 6 m, classe assise côté public. Environ 5 min par groupe pour 8 groupes.",
   roles:"Danseurs : le groupe qui passe annonce son titre puis danse. Spectateurs-lecteurs : un autre groupe désigné remplit la fiche du groupe qui passe. Le groupe suivant se prépare en coulisse.",
   deroul:["Le groupe annonce son titre (20 s), se place, immobile ; musique.","Chorégraphie (1 min 30 à 2 min). Applaudissements.","Les spectateurs-lecteurs désignés donnent 2 retours (1 min) : un point fort, un conseil.","Changement (1 min)."],
   crit:"Silence total pendant les passages. On applaudit chaque groupe.",
   reussite:"Tous les groupes passent dans le temps.",
   moins:"", plus:"", schema:"scene:seul"},
  {titre:"Bilan : ce qu’on change pour S8", duree:7, cat:"Bilan", dispo:"Par groupe.",
   roles:"Le secrétaire écrit 2 corrections sur la fiche projet.",
   deroul:["Lire la fiche du spectateur-lecteur.","Choisir 2 corrections (une de composition, une d’interprétation)."],
   crit:"Des corrections réalisables en une répétition.",
   reussite:"2 corrections écrites par groupe.",
   moins:"", plus:"", schema:""}
 ]},
/* ============ S8 ============ */
{id:"S8", titre:"Évaluation 2 : passage final", passage:"classe", tirage:"",
 obj:"Présenter la version corrigée de sa chorégraphie devant la classe ; on garde le meilleur des deux passages pour l’interprétation.",
 porters:[], procedes:[],
 tl:TL_EVAL,
 prepare:["AFL1 · Deuxième passage : on garde le meilleur des deux pour l’interprétation ; la composition est notée sur la version finale.","AFL2 · Prise en compte des conseils de S7.","AFL3 · Spectateur-lecteur sur un autre groupe qu’en S7."],
 install:"Même scène qu’en S7. Ordre de passage inversé. Les spectateurs-lecteurs changent de groupe.",
 bilan:"Fin du cycle : chaque élève dit ce qu’il a le plus aimé produire chez le spectateur, et ce qu’il a le plus aimé voir.",
 fiches:[
  {titre:"Échauffement autonome", duree:10, cat:"Échauffement", dispo:"Par groupe, avec la fiche.",
   roles:"Un meneur qui n’a pas encore mené.",
   deroul:["Les 4 phases de la fiche.","Finir par les 2 passages corrigés depuis S7."],
   crit:"Complet, progressif, sans aide.",
   reussite:"7 ou 8 critères cochés.",
   moins:"", plus:"", schema:""},
  {titre:"Répétition des corrections", duree:15, cat:"Répétition", dispo:"Par groupe, avec sa musique.",
   roles:"Tous dansent ; le chorégraphe vérifie les 2 corrections.",
   deroul:["Travailler les 2 corrections notées en S7.","Filage complet, deux fois."],
   crit:"Les corrections sont visibles.",
   reussite:"Deux filages sans arrêt, corrections intégrées.",
   moins:"", plus:"", schema:""},
  {titre:"Passages finaux", duree:40, cat:"Évaluation", dispo:"Scène de 8 × 6 m, classe assise côté public, ordre inversé.",
   roles:"Danseurs : le groupe qui passe. Spectateurs-lecteurs : un autre groupe qu’en S7. Le groupe suivant se prépare en coulisse.",
   deroul:["Titre annoncé (20 s), immobilité de départ, musique.","Chorégraphie (1 min 30 à 2 min). Applaudissements.","Retours des spectateurs-lecteurs (1 min).","Changement (1 min)."],
   crit:"Silence total, applaudissements pour chaque groupe.",
   reussite:"Tous les groupes passent dans le temps.",
   moins:"", plus:"", schema:"scene:seul"},
  {titre:"Bilan du cycle", duree:7, cat:"Bilan", dispo:"Classe assise.",
   roles:"Chacun répond à une question.",
   deroul:["Quel effet as-tu le plus aimé produire chez le spectateur ?","Quel moment as-tu le plus aimé voir chez un autre groupe, et pourquoi ?","Auto-évaluation rapide sur la grille (interprétation)."],
   crit:"Réponses courtes et précises.",
   reussite:"Chaque élève a répondu.",
   moins:"", plus:"", schema:""}
 ]}
];

/* ---------- Échauffement autonome de groupe (S5 à S8) ---------- */
const ECHAUFF = {
  phases:[
   ["1 · Se mettre en route","Marche dans l’espace, changements de vitesse, arrêts sur signal ; mobilisation chevilles, genoux, hanches, épaules, nuque.","2 min"],
   ["2 · Gainer","Planches ventrale, dorsale, latérales ; « corps en planche » soulevé par les pieds.","2 min"],
   ["3 · Entrer en contact","Petite danse (point de contact qui roule), contrepoids P1, dos à dos P2.","3 min"],
   ["4 · Porter","Un porter du groupe (le plus simple), puis le plus difficile ; un passage de la chorégraphie.","3 min"]
  ],
  checks:["Commence par du déplacement, sans porter","Mobilise chevilles, genoux, hanches, épaules et nuque","Fait au moins 3 gainages différents","Passe par le contact à deux avant les porters","Porter simple avant le porter difficile","Pareurs placés dès le premier porter","Tous les élèves du groupe passent voltigeur ou porteur","Tient en 10 min"],
  regle:"7 ou 8 critères cochés : le groupe est prêt. 5 ou 6 : refaire la phase manquante. 4 ou moins : reprendre l’échauffement guidé avec le professeur."
};

/* ---------- Banque de situations (4 par catégorie) ---------- */
const BANQUE = [
 {cat:"Contact et transfert de poids", items:[
  {t:"La petite danse", niv:"N1", rem:"Remplace : l’échauffement de contact", txt:"Par deux, un point de contact qui roule d’une partie du corps à l’autre sans jamais se perdre. Variante : en marchant, les yeux fermés pour celui qui suit."},
  {t:"Le cercle en contrepoids", niv:"N1", rem:"Remplace : P1 à deux", txt:"À 4 ou 5 en cercle, prises en crochet, tous se penchent en arrière en même temps puis descendent accroupis. Celui qui lâche fait tomber le cercle : on apprend à tenir ensemble."},
  {t:"L’aveugle guidé", niv:"N2", rem:"Remplace : le travail du regard", txt:"Un élève les yeux fermés est guidé par le contact d’une main ; le guide l’emmène vers un partenaire qui le reçoit en appui épaule (P3)."},
  {t:"Tomber vers quelqu’un", niv:"N2", rem:"Remplace : P4 trop difficile", txt:"Le voltigeur choisit un porteur dans le groupe, le regarde et se laisse tomber vers lui (face à face, 15°) ; le porteur avance et reçoit. Puis de côté, puis de dos (20°)."}
 ]},
 {cat:"Porters", items:[
  {t:"Le relais de porters", niv:"N2", rem:"Remplace : l’exercice 1 de S2", txt:"Le voltigeur est porté (P6) par un premier porteur, reposé, et repart immédiatement vers un deuxième porteur (P9 ou P7) : trois porters sans arrêt."},
  {t:"Porter en traversée", niv:"N3", rem:"Remplace : le trajet de S3", txt:"Traverser toute la scène sur la diagonale en enchaînant P5, P8 et P11 : le voltigeur ne touche jamais le sol plus de 2 pas."},
  {t:"Le duel de porters", niv:"N3", rem:"Remplace : la riposte de S5", txt:"Deux duos face à face : l’un montre un porter, l’autre doit répondre par un porter plus haut, plus lent ou plus drôle. Trois échanges."},
  {t:"Porter les yeux fermés", niv:"N2", rem:"Remplace : l’illusion du danger", txt:"P1 ou P3 avec le voltigeur les yeux fermés, porteur qui parle (« je suis là ») puis qui se tait. Seulement au niveau 1, jamais au-dessus du bassin."}
 ]},
 {cat:"Procédés de composition", items:[
  {t:"La dictée", niv:"N1", rem:"Remplace : l’exercice 2 de S2 ou S3", txt:"Le professeur annonce un procédé (« canon ! », « miroir ! », « cascade ! ») ; le groupe l’applique tout de suite à sa phrase, sans s’arrêter de danser."},
  {t:"Le chef d’orchestre", niv:"N2", rem:"Remplace : le chorégraphe tournant", txt:"Un élève se place face au groupe et dirige par gestes : départs en canon, arrêts, reprises à l’unisson. On change de chef toutes les 2 min."},
  {t:"La phrase en kit", niv:"N2", rem:"Remplace : l’accumulation de S5", txt:"Addition : geste A, puis A + B, puis A + B + C. Soustraction : on retire un geste à chaque reprise. Le porter est le dernier geste ajouté."},
  {t:"Le rembobinage", niv:"N3", rem:"Remplace : la répétition simple", txt:"Inversion : refaire 8 temps de la chorégraphie à l’envers, porter compris (on « déchute » vers le haut), comme une vidéo rembobinée."}
 ]},
 {cat:"Espace scénique", items:[
  {t:"Le photographe", niv:"N1", rem:"Remplace : le regardeur", txt:"Un élève côté public dit « clic » quand il voit la plus belle image ; le groupe s’immobilise et regarde où chacun est. On garde cette image comme arrêt sur image."},
  {t:"Les 9 cases", niv:"N1", rem:"Remplace : la scène et le public", txt:"La scène est découpée en 9 cases. Le même porter dans 3 cases différentes : le groupe classe les cases de la plus forte à la plus faible."},
  {t:"Changer de façade", niv:"N2", rem:"Remplace : le travail d’orientation", txt:"La chorégraphie est refaite en changeant le côté public (on tourne d’un quart de tour) : qu’est-ce qui ne se voit plus ?"},
  {t:"Serré, dispersé", niv:"N2", rem:"Remplace : la contrainte d’espace", txt:"Alterner 8 temps tous serrés dans 2 m², puis 8 temps dispersés aux 4 coins : le contraste se lit immédiatement."}
 ]},
 {cat:"Interprétation et focales", items:[
  {t:"La boucle qui rate", niv:"N1", rem:"Remplace : la focale rire", txt:"Un geste ou un porter répété 3 fois à l’identique ; la 3e fois, un danseur « rate » volontairement (retard, mauvais côté). Le rire vient du timing."},
  {t:"Le ralenti", niv:"N2", rem:"Remplace : la focale émotion", txt:"Un porter exécuté en 16 temps au lieu de 4. Il demande plus de force et de gainage : on le prépare."},
  {t:"Le regard-laser", niv:"N1", rem:"Remplace : présence et regard", txt:"Chaque danseur choisit un spectateur et le regarde pendant toute l’immobilité de départ. Puis on change de spectateur à chaque fin de phrase."},
  {t:"50 %, 120 %", niv:"N2", rem:"Remplace : l’engagement", txt:"La même minute dansée « à 50 % » puis « à 120 % » : amplitude, énergie, regard. Le groupe décide où il doit être à 120 %."}
 ]},
 {cat:"Spectateur et chorégraphe", items:[
  {t:"Le spectateur-lecteur", niv:"N1", rem:"Remplace : les retours oraux", txt:"Avec la grille : procédés vus, espace, focale, moment fort, un conseil. Un élève par point de la grille."},
  {t:"La critique en 3 mots", niv:"N1", rem:"Remplace : le bilan oral", txt:"Après un passage, chaque spectateur écrit 3 mots (un effet ressenti, un procédé, un conseil) sur un papier remis au groupe."},
  {t:"Le chorégraphe invité", niv:"N2", rem:"Remplace : le retour du jumeau", txt:"Un élève d’un autre groupe change un seul détail de la chorégraphie (un regard, une orientation, un moment) ; le groupe garde ou refuse, en justifiant."},
  {t:"Deviner le titre", niv:"N2", rem:"Remplace : devine le thème", txt:"Le jumeau propose un titre après avoir vu la chorégraphie ; on compare avec le vrai titre : le propos est-il lisible ?"}
 ]}
];

/* ---------- Différenciation ---------- */
const DIFF = [
 {cas:"Groupe qui a peur du contact ou des porters", reponse:["Rester au niveau 1 (P1 à P5), porters au sol ou en contrepoids.","Contact par l’intermédiaire d’un objet au début (bâton, foulard tenu à deux).","Le danger devient « illusion de chute » sans porter : se laisser tomber au sol en roulant.","Ne jamais imposer un partenaire : groupes affinitaires."]},
 {cas:"Groupe très à l’aise (gym, cirque, danse)", reponse:["Niveau 3, puis 4 après validation du professeur (P15 à P17).","Contrainte supplémentaire : la sortie d’un porter est l’entrée du suivant.","Deux procédés en même temps (canon et contrepoint).","Exiger la focale la plus difficile pour eux (souvent l’émotion)."]},
 {cas:"Élève qui ne peut pas porter (dispense partielle, douleur)", reponse:["Voltigeur seulement sur des porters de niveau 1, ou danseur au sol en contrepoint.","Rôle de chorégraphe principal : il regarde de face et décide.","Il reste dans l’évaluation : composer, interpréter les phrases sans porter, spectateur-lecteur."]},
 {cas:"Différences de taille et de poids", reponse:["Le porteur est le plus lourd ou le plus grand, quel que soit le sexe.","Le « monde à l’envers » (le petit porte le grand) se joue en illusion : le grand porte son poids lui-même.","Porters à 3 pour un voltigeur lourd."]},
 {cas:"Pudeur, contact difficile entre filles et garçons", reponse:["Les prises se font sur les piliers (bassin, cuisses, épaules), jamais ailleurs : on le dit dès S1.","Groupes affinitaires, mixité non imposée.","Prise en crochet (avant-bras) par défaut."]},
 {cas:"Groupe de 3 seulement", reponse:["Porters à 2 avec un pareur, ou à 3 (P9, P10, P11).","Cascade et canon à 3, question-réponse à 1 contre 2.","Le contrepoint est très lisible à 3 : un soliste contre un duo."]},
 {cas:"Groupe qui n’avance pas en création", reponse:["Banque : « La dictée », « La phrase en kit ».","Le professeur impose la structure (début, développement, fin) et le groupe remplit les cases.","Réduire à 1 min 15 avec deux procédés bien faits."]}
];

/* ---------- Évaluation (/20) ---------- */
const EVAL = {
 afl1:[
  {el:"Composer · Procédés chorégraphiques", qui:"groupe", pts:2, rep:["Moins de 4 verbes d’action, aucun procédé : 0","4 verbes différents ou 1 procédé : 1","Au moins 4 verbes différents et au moins 1 procédé (répétition, accumulation, inversion, permutation) : 2"]},
  {el:"Composer · Espace", qui:"groupe", pts:2, rep:["Ni schéma ni orientation au public : 0","Schéma de la prestation ou orientation au public : 1","Schéma de la prestation et orientation au public (directions, trajets, niveaux) : 2"]},
  {el:"Composer · Relation aux autres", qui:"groupe", pts:2, rep:["Ni cascade ni unisson lisible : 0","1 cascade ou 1 unisson, ou adaptation au rythme musical : 1","Au moins 1 séquence en cascade et 1 unisson, adaptés au rythme musical : 2"]},
  {el:"Interpréter · Engagement et présence", qui:"élève", pts:2, rep:["Regard au sol, gestes réduits, rires : 0,5","Engagement par moments : 1","Présence continue, regard au public : 1,5","Présence forte, immobilités tenues, effet assumé : 2"]},
  {el:"Interpréter · Ses 4 figures, dans au moins 2 rôles", qui:"élève", pts:2, rep:["Mise en danger, ou moins de 2 figures réussies : 0","2 ou 3 figures réussies, ou un seul rôle tenu : 1","4 figures réussies dans 2 rôles (porteur, voltigeur, pareur), quelques hésitations : 1,5","4 figures dans 2 rôles, fluides, gainées, entrées et sorties en mouvement : 2"]},
  {el:"Interpréter · Relation aux partenaires et au temps", qui:"élève", pts:2, rep:["Décalé, sans regard aux partenaires : 0,5","Synchronisé par moments : 1","Unissons justes, départs ensemble : 1,5","Écoute du groupe et de la musique, précision constante : 2"]}
 ],
 afl2:{titre:"Se préparer et s’engager pour s’exprimer devant un public", pts:4, deg:[["Subit",0.5,"Échauffement suivi sans le mener, fiche projet vide, passages évités."],["Exécute",1.5,"Participe aux passages, fiche projet partielle, conseils peu repris."],["Prépare",3,"Échauffement autonome complet, fiche projet tenue, conseils repris d’une séance à l’autre."],["Anticipe",4,"Mène l’échauffement, fait évoluer la chorégraphie à partir des retours, répète ce qui doit l’être."]]},
 afl3:{titre:"Choisir et assumer les rôles (spectateur-lecteur, pareur, chorégraphe)", pts:4, deg:[["Absent",0.5,"Jugement global (« c’était bien »), pareur distrait."],["Témoin",1.5,"Repère un élément (un porter, un moment), pare quand on le lui demande."],["Lecteur",3,"Nomme les procédés et la focale, pare sans qu’on le lui rappelle."],["Conseiller",4,"Donne un conseil précis qui fait progresser l’autre groupe ; chorégraphe force de proposition."]]},
 lien:[
  ["Procédés chorégraphiques (verbes, procédés)","S2, S3 (cascade, canon), S4 à S6 (tirage), S5 (accumulation)"],
  ["Espace (schéma, orientation)","S1 et S2 (côté public), S3 (scène et public), S5 (structure, schéma)"],
  ["Relation aux autres (cascade, unisson, rythme)","S1 et S2 (unisson, cascade), S3 (canon), S6 (musique)"],
  ["Engagement et présence","S4 (focales), S6 (présence, regard)"],
  ["Ses 4 figures dans au moins 2 rôles","S1 et S2 (rôles qui tournent), S3 à S6 (fiche projet : qui fait quoi), règles affichées dès S1"],
  ["Relation aux partenaires et au temps","S2 (unisson), S3 (canon), S6 (musique)"],
  ["AFL2 · Se préparer","S1 à S6 (passages), S5 à S8 (échauffement autonome), fiche projet S4 à S6"],
  ["AFL3 · Rôles","S1 (pareur), S3 à S6 (jumelés), S7 et S8 (spectateur-lecteur)"]
 ],
 regle:"Composer reprend la grille « dimension artistique » de l’équipe EPS du lycée (6 points). Deux passages (S7 et S8). Composer : noté sur la version finale (S8). Interpréter : on garde le meilleur des deux passages. AFL2 et AFL3 : notés sur tout le cycle."
};

/* ---------- Sources ---------- */
const SOURCES = [
 ["Programme d’EPS du lycée général et technologique (enseignement commun)","BO spécial n° 1 du 22 janvier 2019 : CA3 et attendus de fin de lycée.",""],
 ["Fiche d’épreuve CA3 danse (EPPCS), académie de Grenoble, 2024","Composer et interpréter : éléments notés, repères de degrés, organisation d’un passage devant des spectateurs.","https://eps-pedagogie.web.ac-grenoble.fr/sites/default/files/media-fichiers/2024-04/2024_fca_eppcs_danse.pdf"],
 ["Danse bac pro, académie de Lyon, 2021","Chorégraphie collective de 3 à 5 élèves, 1 min 30 à 2 min 30, titre et argument, spectateurs-lecteurs.","https://eps.enseigne.ac-lyon.fr/spip/IMG/pdf/danse-bacpro-n4-2021.pdf"],
 ["Les procédés de composition, académie d’Orléans-Tours","Définitions de l’unisson, du canon, de la cascade, de la question-réponse, de l’accumulation, du lâcher-rattraper…","https://pedagogie.ac-orleans-tours.fr/documents/docx/les_procedes_de_composition.docx"],
 ["Aborder l’activité en sécurité (acrosport), académie de Grenoble","Rythme du porter en 4 temps, piliers, rôles de porteur, voltigeur et pareur.","https://eps-pedagogie.web.ac-grenoble.fr/sites/default/files/media-d7/media-fichiers/2019-07/aborder_l_activite_en_securite-2.pdf"],
 ["Stage académique danse, académie de Nantes, 2010","Relations entre danseurs (contact, porter, unisson, miroir, cascade) et procédés.","https://pedagogie.ac-nantes.fr/medias/fichier/stageacadnantesfev2010_1269205096630.pdf"],
 ["Projet de cycle acrosport, collège (D. Santelli)","Figures statiques et dynamiques, liaisons, enchaînement entrée-figure-liaison-figure-sortie.","http://danysantelli.free.fr/chamontin/EPS/APA/ACROSPORT/acrosport.htm"],
 ["Kinogrammes de figures dynamiques (P. Messin)","Animations de figures dynamiques d’acrosport. Non lu ici (site fermé aux robots) : à consulter pour enrichir le répertoire.","http://patrick.messin.free.fr/acrospor/pages/kinogrammes_animations/toutes_les_animations_dynamique1.htm"],
 ["Rapport de stage FPC acrosport (P. Messin), académie de Dijon, 2024","Non lu ici (site fermé aux robots) : à consulter.","https://eps.wp.ac-dijon.fr/wp-content/uploads/sites/20/2024/12/stage_fpc_acrosport_rapport_messin_p-2.pdf"],
 ["Acrosport, figures dynamiques (blog bjerome)","Non lu ici (site fermé aux robots) : à consulter.","https://bjerome.eklablog.com/acrosport-figures-dynamiques-a149202848"]
];

/* ================== SCHÉMAS ================== */
const escD = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const porterById = id => PORTERS.find(p => p.id === id);
const procById = id => PROCEDES.find(p => p.id === id);

/* Styles des schémas, injectés une fois (servent à l'écran de cours et à l'outil complet) */
(function(){
  if(typeof document === "undefined" || document.getElementById("danse-sch")) return;
  const s = document.createElement("style"); s.id = "danse-sch";
  s.textContent = `
.dz{background:#fff;color:#1c2128;border-radius:14px;padding:10px;font-family:"Atkinson","Segoe UI",Roboto,Arial,sans-serif}
.dz svg{display:block;width:100%;height:auto;max-width:560px;margin:0 auto}
.dz .cap{font-size:max(13px,var(--fs-min,15px));color:#5b6470;margin:6px 2px 0;text-align:center}
.dz-t{font:700 13px "Atkinson",Arial,sans-serif;fill:#1c2128}
.dz-s{font:400 11.5px "Atkinson",Arial,sans-serif;fill:#5b6470}
.dz-w{font:700 12px "Atkinson",Arial,sans-serif;fill:#fff}
.dz-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:8px}
.dz-pc{border:1.5px solid #dde2e8;border-radius:12px;overflow:hidden;background:#fff;break-inside:avoid}
.dz-pc h5{margin:0;padding:6px 10px;color:#fff;font:700 15px "Archivo","Arial Narrow",Arial,sans-serif;display:flex;justify-content:space-between;gap:6px}
.dz-pc h5 small{font:600 12.5px "Atkinson",Arial,sans-serif;opacity:.95;white-space:nowrap}
.dz-img{margin:0}.dz-img img{display:block;width:100%;height:auto;border-radius:8px}
.dz-k{padding:6px 6px 0}.dz-k svg{max-width:100%}
.dz-pc ol{margin:0;padding:6px 10px 4px 10px;list-style:none;display:grid;gap:4px}
.dz-pc li{font-size:max(13.5px,var(--fs-min,15px));line-height:1.3}
.dz-pc li b{display:inline-block;min-width:54px;color:#5b6470;font-size:max(12px,var(--fs-min,15px));text-transform:uppercase;letter-spacing:.03em}
.dz-pc p{margin:0;padding:4px 10px 8px;font-size:max(13px,var(--fs-min,15px));color:#8a1c1c}
.dz-fr{display:flex;gap:4px;align-items:stretch;flex-wrap:nowrap;overflow:hidden}
.dz-fr div{flex:1 1 0;min-width:0;border-radius:8px;padding:6px 6px;color:#fff;font-size:max(12.5px,var(--fs-min,15px));line-height:1.2;display:flex;flex-direction:column;justify-content:center}
.dz-fr div b{font:700 max(13px,var(--fs-min,15px)) "Archivo","Arial Narrow",Arial,sans-serif}
.dz-fr div small{opacity:.9;font-size:max(11.5px,var(--fs-min,15px))}
.dz-fr .im{background:#5b6470}.dz-fr .mv{background:#a21caf}.dz-fr .po{background:#701a75}.dz-fr .li{background:#0e7490}.dz-fr .pr{background:#b45309}
.dz-lv{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px}
.dz-lv div{border-radius:12px;padding:8px 10px;color:#fff}
.dz-lv div b{font:700 17px "Archivo","Arial Narrow",Arial,sans-serif;display:block}
.dz-lv div span{font-size:max(13.5px,var(--fs-min,15px));line-height:1.3;display:block;margin-top:2px}
@media (max-width:520px){.dz-fr{flex-wrap:wrap}.dz-fr div{flex:1 1 40%}}
@media print{.dz{padding:4px}.dz svg{max-width:400px}.dz-pc,.dz-fr div,.dz-lv div,.dz-pc h5{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
`;
  (document.head || document.documentElement).appendChild(s);
})();

/* Tatami : les espaces de travail */
function svgTatami(){
  let s = `<svg viewBox="0 0 360 262" role="img" aria-label="Tatami découpé en 8 espaces de groupe">`;
  s += `<rect x="8" y="8" width="344" height="196" rx="6" fill="#dfe9d8" stroke="#9fb39a" stroke-width="1.5"/>`;
  for(let x = 8 + 43; x < 352; x += 43) s += `<line x1="${x}" y1="8" x2="${x}" y2="204" stroke="#c9d6c3" stroke-width="1"/>`;
  for(let y = 8 + 49; y < 204; y += 49) s += `<line x1="8" y1="${y}" x2="352" y2="${y}" stroke="#c9d6c3" stroke-width="1"/>`;
  for(let r = 0; r < 2; r++) for(let c = 0; c < 4; c++){
    const x = 16 + c*84, y = 16 + r*94, n = r*4 + c + 1;
    s += `<rect x="${x}" y="${y}" width="76" height="84" rx="6" fill="#fff" fill-opacity=".55" stroke="#a21caf" stroke-width="1.5" stroke-dasharray="5 3"/>`;
    [[x,y],[x+76,y],[x,y+84],[x+76,y+84]].forEach(p => s += `<circle cx="${p[0]}" cy="${p[1]}" r="3.5" fill="#e8590c"/>`);
    s += `<text x="${x+38}" y="${y+38}" text-anchor="middle" class="dz-t" style="font-size:16px">G${n}</text>`;
    s += `<rect x="${x+14}" y="${y+64}" width="48" height="4" rx="2" fill="#1c2128"/><text x="${x+38}" y="${y+58}" text-anchor="middle" class="dz-s">public</text>`;
  }
  s += `<rect x="8" y="214" width="344" height="40" rx="8" fill="#f3f5f8"/>`;
  for(let i = 0; i < 18; i++) s += `<circle cx="${24 + i*18.5}" cy="234" r="5" fill="#94a3b8"/>`;
  s += `<text x="180" y="250" text-anchor="middle" class="dz-s">bancs ou sacs hors tatami</text></svg>`;
  return `<div class="dz">${s}<p class="cap">Un espace d’environ 3 × 4 m par groupe, 4 plots, un côté public marqué (trait noir). À adapter à la surface réelle des tatamis.</p></div>`;
}

/* Scène et public */
function svgPublic(y, n, w, x0){ let s = ""; for(let r = 0; r < 2; r++) for(let i = 0; i < n; i++) s += `<circle cx="${x0 + i*(w/(n-1))}" cy="${y + r*16}" r="5.5" fill="#94a3b8"/>`; return s; }
function svgScene(mode){
  let s = `<svg viewBox="0 0 360 290" role="img" aria-label="Organisation du passage">`;
  const tat = `<rect x="8" y="8" width="344" height="196" rx="6" fill="#dfe9d8" stroke="#9fb39a" stroke-width="1.5"/>`;
  const dancer = (x,y,c) => `<circle cx="${x}" cy="${y}" r="7" fill="${c||"#a21caf"}" stroke="#fff" stroke-width="1.5"/>`;
  const label = (x,y,t,cls) => `<text x="${x}" y="${y}" text-anchor="middle" class="${cls||"dz-t"}">${t}</text>`;
  let cap = "";
  if(mode === "vagues3" || mode === "vagues2"){
    const n = mode === "vagues3" ? 3 : 2, w = 328/n;
    s += tat + `<rect x="16" y="96" width="328" height="100" rx="6" fill="#fff" fill-opacity=".7" stroke="#a21caf" stroke-width="2"/>`;
    s += label(180, 60, "Groupes en attente (assis au fond)", "dz-s");
    for(let i = 0; i < 9; i++) s += dancer(60 + i*30, 78, "#cbd5e1");
    for(let g = 0; g < n; g++){
      const x = 16 + g*w;
      if(g) s += `<line x1="${x}" y1="100" x2="${x}" y2="192" stroke="#a21caf" stroke-dasharray="4 3"/>`;
      s += label(x + w/2, 116, "G" + (g+1));
      const pos = [[-22,-6],[-6,8],[12,-4],[26,10]];
      pos.forEach(p => s += dancer(x + w/2 + p[0], 156 + p[1]));
    }
    s += `<rect x="8" y="214" width="344" height="62" rx="8" fill="#f3f5f8"/>` + svgPublic(232, 14, 300, 30);
    s += label(180, 272, "le reste de la classe, assis côté public", "dz-s");
    cap = n === 3 ? "S1 · 3 vagues (G1-G3, G4-G6, G7-G8) : chaque duo danse dans son coin de scène, en même temps que les autres." : "S2 · 4 vagues de 2 groupes, chacun sur sa moitié de scène.";
  } else if(mode === "cotes4"){
    s += `<rect x="90" y="46" width="180" height="170" rx="6" fill="#dfe9d8" stroke="#9fb39a" stroke-width="1.5"/>`;
    [[130,150],[160,170],[200,150],[230,170],[140,110],[180,120],[220,110],[190,90]].forEach(p => s += dancer(p[0], p[1]));
    for(let i = 0; i < 8; i++) s += dancer(104 + i*22, 30, "#0e7490");
    for(let i = 0; i < 7; i++){ s += dancer(68, 64 + i*22, "#94a3b8"); s += dancer(292, 64 + i*22, "#94a3b8"); }
    s += label(180, 16, "JUGES : 5 s · immobile · démontage (sur 3)", "dz-t");
    s += label(180, 236, "le côté qui danse (environ 8 élèves) est entré sur le tatami", "dz-s");
    s += `<text x="40" y="140" text-anchor="middle" class="dz-s" transform="rotate(-90 40 140)">spectateurs</text><text x="320" y="140" text-anchor="middle" class="dz-s" transform="rotate(90 320 140)">spectateurs</text>`;
    s += `<path d="M180 262 m-40 0 a40 14 0 1 0 80 0 a40 14 0 1 0 -80 0" fill="none" stroke="#1c2128" stroke-width="1.6"/>` + label(180, 286, "puis on tourne : chaque côté danse, juge, regarde", "dz-s");
    cap = "S1 et S2 · Mini-spectacle aux quatre côtés du tatami : un côté danse à l’unisson, le côté en face juge, les deux autres regardent en silence.";
  } else if(mode === "jumeles"){
    s += tat;
    [[16,"A","danse"],[188,"B","regarde"]].forEach(([x,g,r], k) => {
      s += `<rect x="${x}" y="20" width="156" height="120" rx="6" fill="#fff" fill-opacity=".7" stroke="#a21caf" stroke-width="1.5" stroke-dasharray="5 3"/>`;
      s += label(x + 78, 40, (k ? "C" : "A") + " danse");
    });
    [[60,80],[88,96],[116,78],[96,64]].forEach(p => s += dancer(p[0], p[1]));
    s += `<rect x="30" y="150" width="128" height="4" rx="2" fill="#1c2128"/>`;
    for(let i = 0; i < 4; i++) s += dancer(48 + i*30, 172, "#0e7490");
    s += label(94, 196, "B regarde, grille en main", "dz-s");
    [[232,80],[260,96],[288,78],[268,64]].forEach(p => s += dancer(p[0], p[1], "#b45309"));
    s += `<rect x="202" y="150" width="128" height="4" rx="2" fill="#1c2128"/>`;
    for(let i = 0; i < 4; i++) s += dancer(220 + i*30, 172, "#64748b");
    s += label(266, 196, "D regarde C", "dz-s");
    s += `<path d="M60 238 C 120 214, 240 214, 300 238" fill="none" stroke="#1c2128" stroke-width="2" marker-end="url(#fl)"/>`;
    s += `<defs><marker id="fl" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#1c2128"/></marker></defs>`;
    s += label(180, 262, "puis on inverse : B danse pour A, D pour C", "dz-t");
    cap = "S3 à S6 · Deux groupes jumelés se montrent leur travail dans leur espace. Toute la classe le fait en même temps, sans spectateurs extérieurs.";
  } else if(mode === "seul"){
    s += tat + `<rect x="40" y="40" width="210" height="150" rx="4" fill="#fff" stroke="#a21caf" stroke-width="2.5"/>`;
    [[40,40],[250,40],[40,190],[250,190]].forEach(p => s += `<circle cx="${p[0]}" cy="${p[1]}" r="4.5" fill="#e8590c"/>`);
    s += label(145, 60, "Scène ≈ 8 × 6 m");
    [[110,120],[140,104],[170,124],[150,146],[120,150]].forEach(p => s += dancer(p[0], p[1]));
    s += `<rect x="266" y="40" width="78" height="150" rx="6" fill="#fff" fill-opacity=".5" stroke="#94a3b8" stroke-dasharray="4 3"/>`;
    s += label(305, 62, "coulisse", "dz-s");
    for(let i = 0; i < 4; i++) s += dancer(305, 86 + i*22, "#cbd5e1");
    s += label(305, 176, "suivant", "dz-s");
    s += `<rect x="8" y="214" width="344" height="62" rx="8" fill="#f3f5f8"/>` + svgPublic(230, 12, 240, 30);
    s += `<rect x="20" y="222" width="120" height="16" rx="8" fill="none" stroke="#0e7490" stroke-width="2"/>`;
    s += `<rect x="300" y="244" width="40" height="24" rx="6" fill="#334155"/>` + label(320, 261, "Prof", "dz-w");
    s += label(160, 284, "spectateurs-lecteurs (cerclés) · classe côté public", "dz-s");
    cap = "S7 et S8 · Chaque groupe passe seul. Un autre groupe est désigné spectateur-lecteur. Le professeur note depuis le côté public.";
  } else if(mode === "espace"){
    s = `<svg viewBox="0 0 360 290" role="img" aria-label="Les zones de la scène">`;
    const X = [40, 133, 226], Y = [30, 100, 170], nomsY = ["Fond de scène","Milieu","Avant-scène"], nomsX = ["côté gauche","centre","côté droit"];
    const force = [[1,1,1],[2,3,2],[3,4,3]];
    const col = ["#f1f5f9","#e9d5ef","#d8a6df","#b45fbe"];
    for(let r = 0; r < 3; r++) for(let c = 0; c < 3; c++){
      const f = force[r][c];
      s += `<rect x="${X[c]}" y="${Y[r]}" width="93" height="70" fill="${col[f-1]}" stroke="#fff" stroke-width="2"/>`;
    }
    for(let r = 0; r < 3; r++) s += `<text x="34" y="${Y[r]+40}" text-anchor="end" class="dz-s" transform="rotate(0)">${["fond","milieu","avant"][r]}</text>`;
    nomsX.forEach((n,c) => s += label(X[c] + 46, 22, n, "dz-s"));
    s += `<text x="179.5" y="${Y[2]+44}" text-anchor="middle" class="dz-w" style="font-size:13px">★ point fort</text>`;
    s += `<path d="M58 44 L 300 226" stroke="#1c2128" stroke-width="2.5" stroke-dasharray="7 4" marker-end="url(#fl2)"/>`;
    s += `<defs><marker id="fl2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#1c2128"/></marker></defs>`;
    s += label(268, 96, "diagonale", "dz-t");
    s += `<rect x="40" y="250" width="279" height="6" rx="3" fill="#1c2128"/>` + label(180, 276, "PUBLIC", "dz-t");
    cap = "Plus la case est foncée, plus elle est forte pour le public. La diagonale fond → avant-scène est le trajet le plus lisible. Gauche et droite sont vues du public.";
  }
  return `<div class="dz">${s}</svg><p class="cap">${cap}</p></div>`;
}

/* Frises temporelles des procédés : une ligne par danseur, le temps de gauche à droite */
const PROC_DESSIN = {
  unisson:{T:16, l:[[[0,16,"a"]],[[0,16,"a"]],[[0,16,"a"]],[[0,16,"a"]]], txt:"tous en même temps"},
  miroir:{T:16, l:[[[0,16,"a",">"]],[[0,16,"b","<"]]], txt:"le reflet : droite ↔ gauche"},
  cascade:{T:16, l:[[[0,3,"a"]],[[3,6,"a"]],[[6,9,"a"]],[[9,12,"a"]]], txt:"chacun part quand le précédent finit"},
  canon:{T:24, l:[[[0,12,"a"]],[[4,16,"a"]],[[8,20,"a"]],[[12,24,"a"]]], txt:"même phrase, décalage régulier de 4 temps"},
  question:{T:16, l:[[[0,4,"a"],[8,10,"a"],[12,16,"c"]],[[0,4,"a"],[8,10,"a"],[12,16,"c"]],[[4,8,"b"],[10,12,"b"],[12,16,"c"]],[[4,8,"b"],[10,12,"b"],[12,16,"c"]]], txt:"A questionne, B riposte, puis tous ensemble"},
  accumulation:{T:16, l:[[[0,16,"a"]],[[4,16,"a"]],[[8,16,"a"]],[[12,16,"a"]]], txt:"on rejoint le groupe un par un"},
  lacher:{T:16, l:[[[0,16,"a"]],[[0,16,"a"]],[[0,4,"a"],[4,10,"p"],[10,16,"a"]],[[0,16,"a"]]], txt:"un danseur sort (porté), puis rattrape la phrase"},
  contrepoint:{T:16, l:[[[0,16,"a"]],[[0,16,"a"]],[[0,16,"a"]],[[0,16,"b"]]], txt:"un soliste fait autre chose que le groupe"},
  repetition:{T:16, l:[[[0,5,"a"],[5,10,"a"],[10,15,"b"]]], txt:"3 fois : la 3e change (plus haut, ou ça rate)"},
  crescendo:{T:16, l:[[[0,6,"a"],[6,10,"a"],[10,12.5,"a"],[12.5,14,"a"]]], txt:"la même phrase, de plus en plus vite"},
  arret:{T:16, l:[[[0,7,"a"],[7,11,"i"],[11,16,"a"]],[[0,7,"a"],[7,11,"i"],[11,16,"a"]],[[0,7,"a"],[7,11,"i"],[11,16,"a"]]], txt:"tous figés dans la figure, puis on repart"},
  permutation:{T:16, l:[[[0,4,"a"],[4,8,"b"],[8,12,"c"],[12,16,"p"]],[[0,4,"p"],[4,8,"b"],[8,12,"c"],[12,16,"a"]],[[0,4,"b"],[4,8,"p"],[8,12,"a"],[12,16,"c"]]], txt:"les mêmes éléments A B C D, dans un autre ordre"},
  inversion:{T:16, l:[[[0,8,"a",">"],[8,16,"b","<"]]], txt:"la phrase, puis la même à l’envers"}
};
const PROC_COUL = {a:"#a21caf", b:"#0e7490", c:"#701a75", p:"#b45309", i:"#94a3b8"};
function svgProc(id){
  const d = PROC_DESSIN[id], P = procById(id); if(!d || !P) return "";
  const n = d.l.length, Y0 = 40, H = Y0 + n*24 + 22, x0 = 34, W = 316, u = W / d.T;
  let s = `<svg viewBox="0 0 360 ${H}" role="img" aria-label="${escD(P.nom)}">`;
  s += `<text x="4" y="15" class="dz-t" style="font-size:14px">${escD(P.nom)}</text><text x="4" y="31" class="dz-s">${escD(d.txt)}</text>`;
  for(let t = 0; t <= d.T; t += 4){ const x = x0 + t*u; s += `<line x1="${x}" y1="${Y0-4}" x2="${x}" y2="${Y0 + n*24}" stroke="#e2e8f0"/><text x="${x}" y="${H-6}" text-anchor="middle" class="dz-s">${t}</text>`; }
  d.l.forEach((row, i) => {
    const y = Y0 + i*24;
    s += `<text x="${x0-6}" y="${y+15}" text-anchor="end" class="dz-s">D${i+1}</text>`;
    row.forEach(([a,b,k,ar]) => {
      const x = x0 + a*u + 1, w = Math.max(3, (b-a)*u - 2);
      s += `<rect x="${x}" y="${y+3}" width="${w}" height="17" rx="4" fill="${PROC_COUL[k]}"/>`;
      if(ar) s += `<text x="${x + w/2}" y="${y+16}" text-anchor="middle" class="dz-w">${ar === ">" ? "→ → →" : "← ← ←"}</text>`;
      if(k === "p" && w > 30) s += `<text x="${x + w/2}" y="${y+16}" text-anchor="middle" class="dz-w">porté</text>`;
      if(k === "i" && w > 30) s += `<text x="${x + w/2}" y="${y+16}" text-anchor="middle" class="dz-w">figé</text>`;
    });
  });
  return s + `</svg>`;
}
function procedesHTML(ids){
  const L = ids.map(svgProc).filter(Boolean);
  return L.length ? `<div class="dz">${L.join("")}<p class="cap">Une ligne par danseur (D1, D2…), le temps en temps musicaux de gauche à droite.</p></div>` : "";
}

/* Cartes de porters */
function porterCarte(p){
  const c = NIVEAUX_P[p.niv].c;
  return `<article class="dz-pc"><h5 style="background:${c}"><span>${p.id} · ${escD(p.nom)}</span><small>${p.nb} élèves · niv. ${p.niv}</small></h5>
  ${typeof svgKino === "function" ? `<div class="dz-k">${svgKino(p.id)}</div>` : ""}<ol><li><b>Entrée</b> ${escD(p.entree)}</li><li><b>Porté</b> ${escD(p.porte)}</li><li><b>Sortie</b> ${escD(p.sortie)}</li></ol><p>⚠ ${escD(p.secu)}</p></article>`;
}
function portersHTML(ids){ return `<div class="dz"><div class="dz-grid">${ids.map(porterById).filter(Boolean).map(porterCarte).join("")}</div>${typeof KINO_LEG === "string" ? KINO_LEG : ""}</div>`; }

/* Frises de construction */
const FRISES = {
  entree:{cap:"Un porter dansé : on ne voit pas la préparation. Les 4 temps du porter se font sans arrêt entre l’arrivée et le départ.", b:[["mv","Arriver","en mouvement"],["po","1 · Contact",""],["po","2 · Transfert","du poids"],["po","3 · Poussée",""],["po","4 · Freinage",""],["mv","Repartir","en mouvement"]]},
  phrase:{cap:"Phrase à deux de 32 temps (4 × 8).", b:[["im","Immobile","4 t"],["mv","Entrée","4 t"],["po","Porter 1","6 t"],["li","Liaison","4 t"],["po","Porter 2","6 t"],["mv","Sortie","4 t"],["im","Immobile","4 t"]]},
  spectacle:{cap:"S1 · Attendus pour chaque élève : 2 solos, 2 duos, 2 déplacements à l’unisson strict, un début et une fin.", b:[["im","Début","immobile"],["li","Solo H","5 s"],["mv","Unisson","déplacement"],["li","Solo V","5 s"],["po","Duo H","5 s"],["mv","Unisson","déplacement"],["po","Duo V","5 s"],["im","Fin","immobile"]]},
  spectacle2:{cap:"S2 · Le spectacle du groupe : il commence et finit à l’extérieur du tatami.", b:[["im","Début","hors tatami"],["mv","Unisson","déplacement"],["po","Duos","au moins 2"],["li","Liaison","roue, roulade"],["mv","Cascade","déplacement"],["po","Trio","porter à 3"],["li","Liaison","dynamique"],["im","Fin","hors tatami"]]},
  groupe:{cap:"Phrase de groupe : chaque case est lisible depuis le côté public.", b:[["im","Immobile","départ"],["mv","Entrée","unisson"],["po","Porter","à 3 ou 4"],["li","Miroir","ou cascade"],["po","2e porter","unisson ou canon"],["im","Fin","immobile 3 s"]]},
  debutfin:{cap:"La chorégraphie : 1 min 30 à 2 min. Au moins 3 procédés dont l’imposé, 2 porters dont l’imposé, les contraintes tirées.", b:[["im","DÉBUT","installer · 15 s"],["mv","DÉVELOPPEMENT","procédés, porters · 1 à 1 min 30"],["pr","Moment fort","la focale au maximum"],["im","FIN","fixer · immobilité 5 s"]]}
};
function friseHTML(k){ const F = FRISES[k]; if(!F) return ""; return `<div class="dz"><div class="dz-fr">${F.b.map(x => `<div class="${x[0]}"><b>${escD(x[1])}</b>${x[2] ? `<small>${escD(x[2])}</small>` : ""}</div>`).join("")}</div><p class="cap">${escD(F.cap)}</p></div>`; }
function leviersHTML(){ return `<div class="dz"><div class="dz-lv">${LEVIERS.map(l => `<div style="background:${l.c}"><b>${escD(l.nom)}</b><span>${escD(l.but)}</span><span>→ ${escD(l.moyens[0])}</span></div>`).join("")}</div><p class="cap">Un même porter, quatre effets : on change l’énergie, la vitesse et le regard, pas la figure.</p></div>`; }

const PLANCHES = {
  "figures-deux":"Figures à deux et à trois : brouettes, saute-moutons, roulades, descentes en contrepoids, bouteille saoule.",
  "contrepoids":"Échauffement : bouteille saoule, descente accroupie en contrepoids, appui et repoussé gainé.",
  "elements-dynamiques":"Exemples d’éléments dynamiques (fiche n° 5).",
  "echauffement-banc":"Échauffement à deux sur le banc (exercices 1 à 7).",
  "echauffement-banc-2":"Échauffement à deux (exercices 8 à 12) et appuis faciaux.",
  "grille-dimension-artistique":"Grille de l’équipe EPS du lycée Pompidou : dimension artistique en acrosport Seconde, 6 points."
};
function imgHTML(n){ if(!PLANCHES[n]) return ""; return `<figure class="dz dz-img"><img src="img/${n}.jpg" alt="${escD(PLANCHES[n])}" loading="lazy"><figcaption class="cap">${escD(PLANCHES[n])} Planche du document de séance du professeur.</figcaption></figure>`; }
function schema(spec){
  if(!spec) return "";
  const i = spec.indexOf(":"), t = i < 0 ? spec : spec.slice(0, i), a = i < 0 ? "" : spec.slice(i + 1);
  if(t === "tatami") return svgTatami();
  if(t === "scene") return svgScene(a);
  if(t === "proc") return procedesHTML(a.split(","));
  if(t === "porters") return portersHTML(a.split(","));
  if(t === "frise") return friseHTML(a);
  if(t === "leviers") return leviersHTML();
  if(t === "img") return imgHTML(a);
  return "";
}

/* ================== FIGURES DYNAMIQUES DE NORMANDIE, EN VERSION DANSÉE ================== */
PORTERS.push(
 {id:"P18", nom:"Saute-mouton dansé", niv:2, nb:2, lev:["spectaculaire","rire"], src:"normandie",
  entree:"Le porteur se plie en avant, dos plat, mains sur les genoux ; le voltigeur arrive en courant.",
  porte:"Le voltigeur pose les mains sur le haut du dos (bassin et épaules) et passe jambes écartées par-dessus.",
  sortie:"Il se réceptionne genoux fléchis et se baisse à son tour : le porteur saute par-dessus lui (relais).",
  secu:"Porteur gainé, tête rentrée. Le voltigeur pousse sur les mains, il ne s’assoit jamais sur le dos.",
  dyn:"En canon à 4 : chacun saute puis devient l’obstacle du suivant."},
 {id:"P19", nom:"La brouette", niv:1, nb:2, lev:["rire","spectaculaire"], src:"normandie",
  entree:"Le voltigeur pose les mains au sol en avançant ; le porteur attrape ses jambes au-dessus des genoux.",
  porte:"Le voltigeur avance sur les mains, corps gainé ; le porteur suit à son rythme.",
  sortie:"Le porteur repose les jambes une par une ; le voltigeur finit en roulade avant ou se relève.",
  secu:"Prise au-dessus des genoux, jamais aux chevilles. Le porteur suit, il ne pousse pas.",
  dyn:"La brouette change de direction sur un temps fort, ou s’arrête net (arrêt sur image)."},
 {id:"P20", nom:"Saut aidé à la taille", niv:2, nb:2, lev:["spectaculaire","emotion"], src:"normandie",
  entree:"Le porteur se place derrière, mains en coupe sur les hanches du voltigeur ; flexion ensemble.",
  porte:"Le voltigeur saute en extension, le porteur accompagne la poussée vers le haut, bras tendus à hauteur de poitrine.",
  sortie:"Le porteur freine la descente ; réception genoux fléchis, et le duo repart en tournant.",
  secu:"Le porteur ne lâche pas les hanches. Il pousse vers le haut, jamais vers l’avant.",
  dyn:"Trois sauts de plus en plus hauts (crescendo), le 3e au ralenti à la descente."},
 {id:"P21", nom:"La chaise à deux porteurs", niv:3, nb:3, lev:["emotion","spectaculaire"], src:"normandie",
  entree:"Les deux porteurs se font une prise carrée (mains croisées) et se baissent ; le voltigeur s’assoit, bras sur leurs épaules.",
  porte:"Ils se redressent ensemble et déplacent le voltigeur assis, à hauteur de taille.",
  sortie:"Ils fléchissent et le voltigeur se pose pieds au sol, puis les trois repartent.",
  secu:"Prise carrée vérifiée avant de s’asseoir. On ne lance pas le voltigeur en l’air en Seconde : on le porte.",
  dyn:"La chaise traverse la scène en diagonale pendant que les autres dansent au sol (contraste)."},
 {id:"P22", nom:"Le franchissement", niv:2, nb:3, lev:["spectaculaire"], src:"normandie",
  entree:"Deux porteurs forment un obstacle : l’un en table (P5), l’autre à genoux à côté.",
  porte:"Le voltigeur franchit l’obstacle en prenant appui sur les dos et les épaules, sans s’arrêter.",
  sortie:"Il retombe pieds en premier et devient obstacle à son tour.",
  secu:"Appuis sur le bassin et les épaules seulement, jamais sur la tête ni sur la nuque. Obstacle bas.",
  dyn:"En cascade : l’obstacle se reforme plus loin, le franchissement devient un trajet."}
);

/* Où voir ces porters en photo et en vidéo (ressources académiques, consultées en ligne) */
const VOIR = {
  boguta:["Diaporama « Les portés en danse » (G. Boguta, académie de Rouen) : photos et vidéos au ralenti","http://www2.ac-lyon.fr/enseigne/eps/IMG/pptx/diaporamaportes.pptx"],
  normandie:["Construction de figures dynamiques (académie de Normandie)","https://eps.ac-normandie.fr/IMG/pdf/4_acrosport_construction_figures_dynamiques.pdf"]
};
SOURCES.splice(1, 0,
 ["Séance 1 d’acrosport en Seconde (Y. Dartois)","Échauffement à deux, renforcement, contrepoids, solos et duos horizontaux et verticaux, mini-spectacle aux quatre côtés ; planches de manuels incluses dans le document.",""],
 ["Les portés en danse, diaporama de G. Boguta (académie de Rouen)","Portés classés par niveaux, photos et vidéos en vitesse normale et au ralenti, critères et sécurité. Fichier PowerPoint d’environ 180 Mo.","http://www2.ac-lyon.fr/enseigne/eps/IMG/pptx/diaporamaportes.pptx"],
 ["Construction de figures dynamiques, académie de Normandie","Saute-mouton, brouette, saut aidé, chaise à deux porteurs, franchissement… repris ici en version dansée (P18 à P22).","https://eps.ac-normandie.fr/IMG/pdf/4_acrosport_construction_figures_dynamiques.pdf"]
);

/* ================== KINOGRAMMES ==================
   Un personnage = {r: rôle (p porteur, v voltigeur, a pareur), x, y : position du bassin,
   t : direction du tronc (degrés : 0 droite, -90 haut, 90 bas, 180 gauche),
   a : [bras 1 : haut, bas, bras 2 : haut, bas], l : [jambe 1 : cuisse, tibia, jambe 2 : cuisse, tibia], s : échelle}.
   Chaque porter a 3 images : entrée, porté, sortie. f : flèches [x1,y1,x2,y2]. */
const KINO_COUL = {p:"#0e7490", v:"#a21caf", a:"#94a3b8"};
const KST = (r, x, o) => Object.assign({r, x, y:58, t:-90, a:[95,92,85,88], l:[92,90,88,90]}, o || {});
const KMIR = f => Object.assign({}, f, {x:120 - f.x, t:180 - f.t, a:f.a.map(v => 180 - v), l:f.l.map(v => 180 - v)});
const KF = (...fr) => fr;
const KINO = {
 P1: KF(
  {g:[KST("p",34,{t:-86,a:[-15,-5,20,30],l:[70,95,110,95]}), KMIR(KST("v",34,{t:-86,a:[-15,-5,20,30],l:[70,95,110,95]}))], f:[[40,12,50,12],[80,12,70,12]]},
  {g:[{r:"p",x:44,y:62,t:-115,a:[0,0,6,2],l:[60,100,72,100]}, KMIR({r:"v",x:44,y:62,t:-115,a:[0,0,6,2],l:[60,100,72,100]})]},
  {g:[{r:"p",x:40,y:84,t:-135,a:[170,150,160,130],l:[-35,100,-25,95]}, KMIR({r:"v",x:40,y:84,t:-135,a:[170,150,160,130],l:[-35,100,-25,95]})], f:[[30,52,14,60],[90,52,106,60]]}),
 P2: KF(
  {g:[KST("p",42,{t:-92}), KMIR(KST("v",42,{t:-92}))], f:[[30,14,44,14],[90,14,76,14]]},
  {g:[{r:"p",x:53,y:80,t:-84,a:[120,30,130,20],l:[180,95,175,95]}, KMIR({r:"v",x:53,y:80,t:-84,a:[120,30,130,20],l:[180,95,175,95]})]},
  {g:[KST("p",30,{a:[175,180,175,185]}), KST("v",90,{a:[5,0,5,-5]})]}),
 P3: KF(
  {g:[KST("v",40,{t:-72,a:[80,85,70,80],l:[100,95,95,95]}), KST("p",82,{t:-95,a:[160,170,170,180],l:[100,95,70,95]})], f:[[50,14,66,22]]},
  {g:[{r:"v",x:42,y:62,t:-56,a:[70,90,60,85],l:[112,105,104,100]}, {r:"p",x:72,y:60,t:-104,a:[200,170,150,160],l:[115,95,70,95]}]},
  {g:[KST("v",46,{l:[70,95,95,90]}), KST("p",90)], f:[[78,14,96,14]]}),
 P4: KF(
  {g:[KST("p",32,{t:-85,a:[-30,-50,-20,-40],l:[60,95,120,95]}), KST("v",56,{a:[40,170,50,160]})]},
  {g:[{r:"p",x:26,y:62,t:-80,a:[0,-10,10,0],l:[70,95,115,95]}, {r:"v",x:47,y:62,t:-110,a:[40,170,50,160],l:[70,70,70,70]}], f:[[64,26,54,34]]},
  {g:[KST("p",28,{a:[-20,-40,-10,-30]}), KST("v",84,{t:-86,l:[70,95,110,95]})], f:[[66,14,86,14]]}),
 P5: KF(
  {g:[{r:"p",x:70,y:79,t:180,a:[90,90,90,90],l:[90,0,90,0]}, KST("v",24,{t:-86,l:[70,95,110,95]})], f:[[32,14,46,20]]},
  {g:[{r:"p",x:70,y:79,t:180,a:[90,90,90,90],l:[90,0,90,0]}, {r:"v",x:64,y:66,t:185,a:[-120,-100,-110,-90],l:[-60,60,-70,50]}], f:[[40,40,80,40]]},
  {g:[{r:"p",x:52,y:80,t:-90,a:[95,90,85,90],l:[90,0,90,0]}, KST("v",100)]}),
 P6: KF(
  {g:[KST("v",26,{t:-80,a:[-30,-20,200,150],l:[60,110,125,80]}), {r:"p",x:72,y:74,t:-95,a:[150,170,140,160],l:[165,90,40,40]}], f:[[36,14,52,24]]},
  {g:[{r:"p",x:72,y:74,t:-95,a:[190,170,150,160],l:[165,90,40,40]}, {r:"v",x:58,y:68,t:-100,a:[-10,10,200,190],l:[170,100,160,105]}]},
  {g:[{r:"p",x:72,y:60,t:-112,a:[150,120,140,110],l:[95,90,80,95]}, {r:"v",x:38,y:94,t:-100,a:[60,80,120,100],l:[178,182,172,185]}]}),
 P7: KF(
  {g:[KST("p",52,{t:-106,a:[-60,-40,-70,-50]}), KST("v",68,{t:-84,a:[-120,-140,-110,-130]})]},
  {g:[{r:"p",x:62,y:62,t:-168,a:[-150,-170,-160,-175],l:[100,85,70,95]}, {r:"v",x:66,y:52,t:-168,a:[200,180,190,170],l:[30,90,40,95]}], f:[[30,20,40,10]]},
  {g:[KST("p",44,{t:-92}), KMIR(KST("v",44,{t:-92}))]}),
 P8: KF(
  {g:[{r:"p",x:72,y:56,t:180,a:[100,80,95,85],l:[95,90,85,90]}, KST("v",24,{t:-80,a:[-10,10,0,20]})]},
  {g:[{r:"p",x:72,y:56,t:180,a:[100,80,95,85],l:[95,90,85,90]}, {r:"v",x:62,y:36,t:165,a:[100,120,90,110],l:[-100,30,-80,40]}], f:[[40,22,90,22]]},
  {g:[KST("p",56), KST("v",100,{a:[-40,-60,-20,-40]})]}),
 P9: KF(
  {g:[KST("p",20,{a:[-10,0,95,90]}), KST("v",60,{a:[180,180,0,0]}), KST("p",100,{a:[95,90,190,180]})]},
  {g:[{r:"p",x:22,y:62,t:-92,a:[-20,-30,-10,-30],l:[80,100,100,80]}, {r:"v",x:60,y:44,t:-90,a:[180,175,0,5],l:[110,70,70,110]}, {r:"p",x:98,y:62,t:-88,a:[200,210,190,210],l:[100,80,80,100]}], f:[[60,100,60,84]]},
  {g:[KST("p",20), KST("v",60,{a:[-120,-100,-60,-80]}), KST("p",100)]}),
 P10: KF(
  {g:[KST("a",36,{t:-88,a:[-20,-30,-10,-20],l:[70,95,110,95]}), KST("v",60,{a:[40,170,50,160]}), KMIR(KST("a",36,{t:-88,a:[-20,-30,-10,-20],l:[70,95,110,95]}))]},
  {g:[KST("a",30,{t:-88,a:[-20,-30,-10,-20],l:[70,95,110,95]}), {r:"v",x:78,y:63,t:-65,a:[40,170,50,160],l:[115,115,115,115]}, {r:"a",x:100,y:62,t:-100,a:[195,185,185,180],l:[70,95,115,95]}], f:[[66,20,82,26]]},
  {g:[{r:"a",x:20,y:62,t:-80,a:[-15,-5,-5,5],l:[65,95,110,95]}, {r:"v",x:42,y:63,t:-115,a:[40,170,50,160],l:[65,65,65,65]}, KST("a",96,{t:-88,a:[200,190,190,200],l:[70,95,110,95]})], f:[[54,20,38,26]]}),
 P11: KF(
  {g:[KST("p",24,{t:-85,a:[-30,-50,-20,-40],l:[60,95,120,95]}), KST("p",44,{t:-85,a:[-20,-10,-30,-20],l:[60,95,120,95]}), {r:"v",x:66,y:62,t:-110,a:[40,170,50,160],l:[70,70,70,70]}]},
  {g:[KST("p",36,{a:[80,40,70,30]}), KST("p",84,{a:[100,140,110,150]}), {r:"v",x:62,y:50,t:180,a:[0,0,5,0],l:[0,0,2,0]}], f:[[40,96,80,96]]},
  {g:[KST("p",28,{a:[30,0,20,-10]}), {r:"v",x:70,y:60,t:-120,a:[40,170,50,160],l:[60,60,60,60]}, KST("p",100,{t:-100,a:[150,120,160,130],l:[80,95,105,95]})]}),
 P12: KF(
  {g:[{r:"p",x:28,y:88,t:180,a:[90,90,90,90],l:[90,0,90,0],s:.6}, {r:"p",x:64,y:84,t:-120,a:[100,95,95,95],l:[90,0,90,0],s:.6}, KST("p",98,{y:76,s:.6}), KST("v",8,{y:76,s:.6,t:-80,l:[70,95,110,95]})]},
  {g:[{r:"p",x:28,y:88,t:180,a:[90,90,90,90],l:[90,0,90,0],s:.6}, {r:"p",x:64,y:88,t:180,a:[90,90,90,90],l:[90,0,90,0],s:.6}, {r:"p",x:100,y:88,t:180,a:[90,90,90,90],l:[90,0,90,0],s:.6}, {r:"v",x:56,y:72,t:165,a:[100,120,90,110],l:[-100,30,-80,40],s:.6}], f:[[20,40,104,40]]},
  {g:[KST("p",14,{y:76,s:.6}), KST("p",46,{y:76,s:.6}), {r:"p",x:84,y:84,t:-120,a:[100,95,95,95],l:[90,0,90,0],s:.6}, KST("v",112,{y:76,s:.6,a:[-60,-80,-50,-70]})]}),
 P13: KF(
  {g:[KST("v",26,{t:-72,a:[-30,-20,200,150],l:[55,110,130,80]}), KST("p",78,{t:-95,a:[160,200,150,200],l:[100,95,70,95]}), KST("p",96,{t:-95,a:[160,200,150,200],l:[100,95,70,95]})], f:[[36,14,56,22]]},
  {g:[KST("p",74,{t:-96,a:[150,210,140,200],l:[105,90,75,95]}), KST("p",92,{t:-96,a:[150,210,140,200],l:[105,90,75,95]}), {r:"v",x:72,y:62,t:-160,a:[-30,10,200,220],l:[-15,30,-5,40]}]},
  {g:[KST("p",78), KST("p",98), KST("v",26,{t:-96,a:[20,30,160,150],l:[110,85,70,95]})], f:[[50,14,32,14]]}),
 P14: KF(
  {g:[{r:"p",x:56,y:96,t:180,a:[-90,-80,-100,-90],l:[-90,-20,-80,-30]}, KST("v",96,{a:[100,110,80,70]})]},
  {g:[{r:"p",x:62,y:96,t:180,a:[-65,-45,-75,-55],l:[-82,-95,-78,-100]}, {r:"v",x:64,y:50,t:180,a:[95,80,90,75],l:[2,0,-2,0]}, KST("a",104,{t:-95,a:[200,190,190,180],l:[100,95,80,95]})]},
  {g:[{r:"p",x:62,y:96,t:180,a:[-90,-80,-100,-90],l:[-90,-40,-80,-50]}, {r:"v",x:36,y:78,t:120,a:[100,90,80,90],l:[-60,20,-50,30]}], f:[[54,60,30,66]]}),
 P15: KF(
  {g:[{r:"p",x:56,y:76,t:-90,a:[0,-30,10,-20],l:[10,90,120,120]}, {r:"v",x:88,y:58,t:-92,a:[200,180,-150,-120],l:[160,95,95,90]}, KST("a",104,{t:-95,a:[200,-150,190,-140],l:[100,95,80,95]})]},
  {g:[KST("p",56,{y:70,s:.8,a:[-60,-120,-80,-60]}), {r:"v",x:58,y:46,t:-90,a:[150,120,30,60],l:[0,90,10,95],s:.8}, KST("a",24,{y:70,s:.8,t:-80,a:[-40,-30,-30,-20],l:[70,95,110,95]})], f:[[90,96,90,80]]},
  {g:[{r:"p",x:56,y:76,t:-90,a:[0,-30,10,-20],l:[10,90,120,120]}, {r:"v",x:88,y:62,t:-92,a:[200,180,-150,-120],l:[95,90,170,100]}, KST("a",104,{t:-95,a:[200,-150,190,-140],l:[100,95,80,95]})], f:[[98,30,98,46]]}),
 P16: KF(
  {g:[KST("p",40,{a:[-20,-10,-10,0]}), KST("p",74,{a:[-20,-10,-10,0]}), {r:"v",x:86,y:52,t:-140,a:[200,190,190,180],l:[80,90,95,90]}]},
  {g:[KST("p",36,{a:[-5,0,5,0]}), KST("p",64,{a:[-5,0,5,0]}), KST("p",90,{a:[-5,0,5,0]}), {r:"v",x:66,y:44,t:180,a:[180,180,175,180],l:[0,0,2,0],s:.9}], f:[[30,104,90,104]]},
  {g:[KST("p",30,{a:[-20,0,-10,10]}), {r:"v",x:62,y:58,t:-110,a:[30,0,20,-10],l:[80,90,95,90]}, KST("a",94,{t:-100,a:[190,180,180,170],l:[100,95,80,95]})]}),
 P17: KF(
  {g:[KST("v",30,{t:-80,a:[-20,0,200,180],l:[60,110,125,80]}), KST("p",80,{t:-96,a:[160,200,150,200],l:[100,95,75,95]})], f:[[40,14,58,24]]},
  {g:[KST("p",64,{t:-92,a:[150,210,140,200],l:[100,90,80,90]}), {r:"v",x:62,y:56,t:-165,a:[-40,-10,-60,-30],l:[-10,30,0,40]}], f:[[30,90,90,90]]},
  {g:[KST("p",72,{t:-92,a:[170,160,180,170]}), KST("v",44,{a:[-20,-10,10,0]})], f:[[50,96,30,100]]}),
 P18: KF(
  {g:[{r:"p",x:76,y:58,t:180,a:[95,80,100,85],l:[95,90,85,90]}, KST("v",24,{t:-80,a:[-10,10,200,170],l:[60,110,125,80]})], f:[[34,14,50,22]]},
  {g:[{r:"p",x:76,y:58,t:180,a:[95,80,100,85],l:[95,90,85,90]}, {r:"v",x:66,y:46,t:-100,a:[110,100,80,90],l:[-10,10,170,190]}], f:[[44,20,90,20]]},
  {g:[KST("p",48,{y:80,t:180,a:[95,80,100,85],l:[95,0,85,0],s:.8}), KST("v",104,{y:64,a:[120,140,60,40],l:[70,110,110,70]})]}),
 P19: KF(
  {g:[{r:"v",x:62,y:64,t:150,a:[100,95,110,100],l:[70,95,110,95]}, KST("p",90,{t:-100,a:[150,140,160,150],l:[100,95,80,95]})]},
  {g:[{r:"v",x:66,y:62,t:165,a:[100,95,80,90],l:[2,0,-4,0]}, {r:"p",x:100,y:58,t:-100,a:[150,170,140,160],l:[100,95,80,95]}], f:[[40,96,20,96]]},
  {g:[{r:"v",x:34,y:72,t:120,a:[100,90,80,90],l:[-60,20,-50,30]}, KST("p",84)], f:[[46,62,26,66]]}),
 P20: KF(
  {g:[{r:"v",x:56,y:68,t:-80,a:[100,60,110,70],l:[30,110,35,115]}, {r:"p",x:36,y:68,t:-75,a:[10,0,20,10],l:[40,110,50,115]}]},
  {g:[{r:"v",x:62,y:46,t:-90,a:[-110,-100,-70,-80],l:[95,92,85,88]}, KST("p",40,{t:-85,a:[-15,-35,-5,-25]})], f:[[80,96,80,74]]},
  {g:[{r:"v",x:62,y:68,t:-80,a:[150,190,30,-10],l:[30,110,35,115]}, {r:"p",x:40,y:68,t:-75,a:[10,0,20,10],l:[40,110,50,115]}], f:[[78,40,98,40]]}),
 P21: KF(
  {g:[{r:"p",x:36,y:74,t:-80,a:[40,10,30,0],l:[30,110,40,115]}, {r:"p",x:84,y:74,t:-100,a:[140,170,150,180],l:[150,70,140,65]}, {r:"v",x:60,y:66,t:-95,a:[-160,-170,-20,-10],l:[5,95,15,100]}]},
  {g:[KST("p",34,{a:[40,0,30,-10]}), KST("p",86,{a:[140,180,150,190]}), {r:"v",x:60,y:52,t:-95,a:[-160,-170,-20,-10],l:[0,90,170,90]}], f:[[40,100,80,100]]},
  {g:[KST("p",30), KST("v",60,{a:[180,180,0,0]}), KST("p",90)]}),
 P22: KF(
  {g:[{r:"p",x:62,y:79,t:180,a:[90,90,90,90],l:[90,0,90,0]}, {r:"p",x:96,y:80,t:-90,a:[95,90,85,90],l:[90,0,90,0]}, KST("v",18,{t:-80,l:[60,110,125,80]})], f:[[28,14,44,22]]},
  {g:[{r:"p",x:62,y:79,t:180,a:[90,90,90,90],l:[90,0,90,0]}, {r:"p",x:96,y:80,t:-90,a:[95,90,85,90],l:[90,0,90,0]}, {r:"v",x:60,y:40,t:150,a:[100,90,80,90],l:[-30,20,-10,30]}], f:[[30,30,110,30]]},
  {g:[KST("p",40), {r:"p",x:70,y:80,t:-90,a:[95,90,85,90],l:[90,0,90,0]}, KST("v",98)]})
};
const KL = {torse:24, cou:9, bras:13, avbras:12, cuisse:21, tibia:22};
function kinoFig(f){
  f = Object.assign({a:[95,92,85,88], l:[92,90,88,90]}, f);
  const s = f.s || 1, c = KINO_COUL[f.r], rad = d => d * Math.PI / 180;
  const pt = (o, ang, L) => [o[0] + Math.cos(rad(ang)) * L * s, o[1] + Math.sin(rad(ang)) * L * s];
  const hip = [f.x, f.y], sh = pt(hip, f.t, KL.torse), head = pt(sh, f.t, KL.cou);
  const seg = (a, b, w) => `<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}" stroke="${c}" stroke-width="${(w*s).toFixed(1)}" stroke-linecap="round"/>`;
  let o = seg(hip, sh, 8.5);
  [[0,1],[2,3]].forEach(([u, b]) => { const e = pt(sh, f.a[u], KL.bras), m = pt(e, f.a[b], KL.avbras); o += seg(sh, e, 5.5) + seg(e, m, 5); });
  [[0,1],[2,3]].forEach(([u, b]) => { const k = pt(hip, f.l[u], KL.cuisse), p = pt(k, f.l[b], KL.tibia); o += seg(hip, k, 6.5) + seg(k, p, 5.5); });
  return o + `<circle cx="${head[0].toFixed(1)}" cy="${head[1].toFixed(1)}" r="${(6.5*s).toFixed(1)}" fill="${c}"/>`;
}
function svgKino(id){
  const F = KINO[id]; if(!F) return "";
  const ordre = {p:0, a:1, v:2}, noms = ["Entrée","Porté","Sortie"];
  let s = `<svg viewBox="0 0 372 132" role="img" aria-label="Kinogramme ${escD(id)} : entrée, porté, sortie"><defs><marker id="kf-${id}" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#1c2128"/></marker></defs>`;
  F.forEach((fr, i) => {
    const x0 = i * 126;
    s += `<g transform="translate(${x0},0)"><rect x="0" y="0" width="120" height="110" rx="8" fill="#f6f7f9"/><line x1="6" y1="103.5" x2="114" y2="103.5" stroke="#c9ced6" stroke-width="2"/>`;
    s += `<g transform="translate(0,1)">${fr.g.slice().sort((a, b) => ordre[a.r] - ordre[b.r]).map(kinoFig).join("")}</g>`;
    (fr.f || []).forEach(a => s += `<line x1="${a[0]}" y1="${a[1]}" x2="${a[2]}" y2="${a[3]}" stroke="#1c2128" stroke-width="1.6" marker-end="url(#kf-${id})"/>`);
    s += `<text x="60" y="126" text-anchor="middle" class="dz-t">${i + 1}. ${noms[i]}</text></g>`;
  });
  return s + `</svg>`;
}
const KINO_LEG = `<p class="cap"><span style="color:${KINO_COUL.p};font-weight:700">● porteur</span> · <span style="color:${KINO_COUL.v};font-weight:700">● voltigeur</span> · <span style="color:#64748b;font-weight:700">● pareur</span></p>`;

/* ================== CODE DES FIGURES DYNAMIQUES (FPC acrosport, E. Courtelarre) ==================
   Fiches détaillées : critères de réalisation et conduites typiques, pour enseigner et pour les juges.
   risque : "" · "atr" (passage à l'ATR, avec aide au début) · "rot" (rotation arrière : réservé) */
const FIGDYN = [
 {id:"B1", nom:"Trio renversement avant", nb:3, risque:"atr",
  p:["Bras au niveau de la ligne des épaules du voltigeur et juste au-dessus de ses genoux","Au déséquilibre, action des bras vers le haut et l’arrière pour placer V à l’horizontale","Déposer les mains de V au sol, lâcher la prise aux épaules et attraper ses jambes","Se déplacer pour renverser V en ATR et accompagner sa roulade avant"],
  v:["Au contact des bras des porteurs, se laisser déséquilibrer vers l’avant, corps gainé et aligné","Regarder ses mains et pousser sur les bras pendant le passage en ATR","Rentrer le menton et arrondir le dos pour rouler"],
  cp:["Buste rond et penché, jambes tendues","Reste loin de V","Attend V bras à l’horizontale","Action des bras absente ou vers le haut","Reste statique"],
  cv:["Se laisse tomber avant le contact","Corps relâché","Plie les bras et roule dès que les mains touchent le sol"]},
 {id:"B2", nom:"Trio renversement arrière", nb:3, risque:"atr",
  p:["Bras au niveau des aisselles de V et juste au-dessus de ses genoux","Serrer V contre soi","Au déséquilibre, action des bras vers le haut et l’avant pour placer V à l’horizontale","Se déplacer pour renverser V en ATR et déposer ses mains au sol","Laisser V descendre de l’ATR sans lâcher la prise"],
  v:["Au signal des porteurs, se laisser déséquilibrer vers l’arrière, corps gainé et aligné","Regarder son nombril jusqu’à l’horizontale","Au renversement, regarder ses mains et pousser sur les bras au contact du sol","Une fois aligné en ATR, descendre une jambe après l’autre pour finir en fente avant"],
  cp:["Buste rond et penché, jambes tendues","Reste loin de V","Descend le bras placé aux aisselles pour renverser V","Reste statique"],
  cv:["Cherche le sol du regard dès le début","Corps relâché (pont)","Laisse partir les épaules en avant quand les mains touchent le sol"]},
 {id:"B3", nom:"Duo renversement avant, porteur au sol", nb:2, risque:"atr",
  p:["Pieds en V sur le bassin de V, mains sur ses poignets (pouces vers l’intérieur)","Déséquilibrer V en pliant les genoux vers la poitrine et les bras pour amener ses mains derrière sa tête","Quand V décolle, pousser sur ses jambes vers le haut et l’arrière pour le renverser"],
  v:["Se laisser déséquilibrer vers l’avant, corps gainé","Après le décollage, envoyer ses talons vers le haut et l’arrière","Regarder ses mains et pousser sur les bras pendant le passage en ATR","Rentrer le menton et arrondir le dos pour rouler"],
  cp:["Pieds parallèles","Mains à l’envers sur les poignets de V","Pousse sur ses jambes avant le déséquilibre ou dans le sens opposé au déplacement de V","Envoie ses bras tendus"],
  cv:["Saute sur le porteur","Corps relâché","Action des talons absente","Plie les bras et roule dès que les mains touchent le sol"]},
 {id:"B4", nom:"Duo renversement avant, porteur debout", nb:2, risque:"atr",
  p:["De dos à V, mains sur ses poignets (pouces vers l’intérieur)","Plier les jambes dos droit pour amener son bassin sous celui de V","Pousser sur ses jambes en envoyant les fesses en arrière (regard devant)","Se pencher en avant bassin haut et amener les mains de V au sol pour le renverser"],
  v:["Se laisser déséquilibrer vers l’avant, corps gainé","Après le décollage, envoyer les talons vers le haut et l’arrière","Regarder ses mains et pousser sur les bras pendant le passage en ATR","Rentrer le menton et arrondir le dos pour rouler"],
  cp:["Garde son bassin au niveau de celui de V","Se penche en avant dos rond, jambes tendues","Plie les jambes mais se penche avant de pousser","Se laisse déséquilibrer en arrière au décollage de V"],
  cv:["Saute sur le porteur","Corps relâché","Action des talons absente","Plie les bras et roule dès que les mains touchent le sol"]},
 {id:"C1", nom:"Trio redressement de l’ATR, porteurs debout", nb:3, risque:"atr",
  p:["Les deux porteurs se placent en V","La main extérieure au couple de porteurs se place en crochet à l’épaule","L’avant-bras intérieur se place au niveau des reins de V","Au déséquilibre, pousser vers le haut avec le crochet et pivoter ses épaules vers l’autre porteur","Garder la main à l’épaule pour contrôler l’arrivée de V"],
  v:["Monter à l’ATR (avec ou sans aide), mains au niveau du pied avant des porteurs","Se laisser déséquilibrer en « tombé dos »"],
  cp:["Se trompe de main dans ses prises","Reste face à V et le fait passer au-dessus de l’épaule au lieu de l’avant-bras","Attend que V soit à la verticale pour se placer","Se penche en avant dos rond pour se placer"],
  cv:["Corps relâché","Se met en boule au redressement","Cherche à se redresser tout seul","S’accroche à ses porteurs au redressement"]},
 {id:"C2", nom:"Trio redressement de l’ATR, porteurs à genou", nb:3, risque:"atr",
  p:["Les deux porteurs à genou côte à côte (genou intérieur au sol)","Main extérieure en crochet à l’épaule, main intérieure au niveau des reins de V","À la montée en ATR, se pencher légèrement en avant dos droit, épaule au niveau des reins de V","Au déséquilibre, pousser vers le haut avec le crochet, amener l’autre main à son épaule et pousser sur la jambe avant pour se redresser"],
  v:["Monter à l’ATR (avec ou sans aide), mains au niveau du pied avant des porteurs","Se laisser déséquilibrer en « tombé dos »"],
  cp:["Se trompe de main dans ses prises","Tourne ses épaules vers l’autre porteur au renversement","Attend que V soit à la verticale pour se placer","Se penche en avant dos rond pour se placer"],
  cv:["Corps relâché","Se met en boule au redressement","Cherche à se redresser tout seul","S’accroche à ses porteurs au redressement"]},
 {id:"C3", nom:"Duo « salto arrière »", nb:2, risque:"rot",
  p:["De dos à V, mains sur ses poignets (pouces vers l’intérieur)","Plier les jambes dos droit, bassin sous celui de V","Pousser sur ses jambes en envoyant les fesses en arrière (regard devant)","Se pencher en avant bassin haut ; à la rotation de V, remonter les mains pour l’aider à se redresser"],
  v:["Se laisser déséquilibrer vers l’arrière, corps gainé","À l’horizontale, grouper","Chercher à regarder le porteur quand les pieds vont vers le sol"],
  cp:["Garde son bassin au niveau de celui de V et tire sur les bras","Se penche en avant dos rond, jambes tendues","Plie les jambes mais se penche avant de pousser","Laisse descendre ses mains vers le sol"],
  cv:["Corps relâché","Groupe trop tôt","Cherche à regarder le sol sur le côté","Attitude passive à la réception"]},
 {id:"C4", nom:"Trio « croix »", nb:3, risque:"",
  p:["Main côté V à l’aisselle, l’autre au poignet, pouces vers l’avant","Les porteurs comptent : 1, prêts ; 2, ils fléchissent ; 3, ils poussent jambes et bras et se rapprochent de V pour aligner main-épaule-bassin-pied","Regard devant, épaules alignées avec V"],
  v:["À 2 : plier les jambes","À 3 : sauter vers le haut en appuyant vers le bas dans ses épaules","Regarder devant"],
  cp:["Mains pouces vers soi","Serre ses doigts sur le bras de V","Pousse vers l’avant","Pousse seulement avec les bras et creuse le dos","Poussée des jambes et des bras trop faible"],
  cv:["Poussée des jambes trop faible","Saute vers l’avant","N’appuie pas dans ses épaules","Regarde par terre et se penche en avant"]},
 {id:"D1", nom:"Trio renversement puis redressement de l’ATR", nb:3, risque:"atr",
  p:["Renverser V pour amener ses mains au sol (comme B1)","Déposer ses mains au sol, lâcher la prise haute et placer l’avant-bras au niveau des reins","Accompagner V en « tombé dos » avec la prise aux jambes en se déplaçant","Dès que la verticale est dépassée, crochet à l’épaule et pousser vers le haut pour le redresser","Garder la main à l’épaule pour contrôler l’arrivée ; laisser V descendre sans lâcher"],
  v:["Au contact des bras des porteurs, se laisser déséquilibrer vers l’avant, corps gainé et aligné","Regarder ses mains et pousser sur les bras pendant le passage en ATR","Garder le corps aligné et gainé pendant le redressement"],
  cp:["Change de prise en maintenant V en ATR","Renverse V à la force des bras sans se déplacer","Place l’avant-bras aux jambes au lieu des reins","Accroche le bras de V au lieu du crochet à l’épaule"],
  cv:["Se laisse tomber avant le contact","Corps relâché","Se met en boule au redressement","Cherche à se redresser tout seul","S’accroche à ses porteurs au redressement"]},
 {id:"D2", nom:"Duo redressement de l’ATR, porteur à genou", nb:2, risque:"atr",
  p:["Un genou au sol","À la montée en ATR : main côté genou devant en crochet à l’épaule ; se pencher légèrement dos droit, épaule au niveau des reins de V, le bras entoure sa taille","Au déséquilibre : pousser vers le haut avec le crochet, pousser sur la jambe avant pour se redresser, garder haut le coude côté genou au sol"],
  v:["Monter à l’ATR (avec ou sans aide), mains de chaque côté du genou au sol du porteur","Se laisser déséquilibrer en « tombé dos »"],
  cp:["Se trompe de main dans ses prises","Attend que V soit à la verticale pour se placer","Se penche en avant dos rond pour se placer","Baisse le coude côté genou au sol : V chute sur le côté"],
  cv:["Monte son ATR sur le côté du porteur au lieu d’en face","Corps relâché","Se met en boule au redressement","Cherche à se redresser tout seul"]},
 {id:"D3", nom:"Duo « flip arrière »", nb:2, risque:"rot",
  p:["Allongé sur le dos, jambes groupées, bras tendus vers le haut","Au contact des omoplates de V avec ses mains, pousser sur les jambes vers le haut et l’arrière","Accompagner légèrement avec les bras"],
  v:["Se placer dos au porteur, pieds près de ses fesses","S’asseoir sur ses pieds, bras le long du corps, puis s’allonger en arrière","Au contact des omoplates, envoyer les bras en arrière en regardant ses mains","Au renversement à l’ATR, regarder ses mains et pousser sur les bras au contact du sol"],
  cp:["Pousse avant le contact des omoplates","Pousse dans le sens opposé au déplacement de V","Envoie ses bras trop loin derrière"],
  cv:["Se place loin des fesses du porteur","Envoie ses bras trop tôt","Se met en boule au renversement","Cherche à regarder le sol sur le côté","Laisse partir les épaules en avant quand les mains touchent le sol"]},
 {id:"D4", nom:"Trio « salto arrière » prise carrée", nb:5, risque:"rot",
  p:["P1 et P2 face à face en prise carrée ; P3 et P4 une main à l’épaule, une main au bassin","Quand V se penche en arrière, P1 et P2 montent les mains vers le haut pour le pousser","À la poussée, P3 et P4 gardent la main à l’épaule et poussent le bassin vers le haut et l’arrière","P3 et P4 se déplacent pour accompagner V sans lâcher l’épaule"],
  v:["S’asseoir sur la prise carrée, mains sur le sommet de la tête de P1 et P2","Au signal, se pencher en arrière","À la poussée, envoyer les bras vers le haut","Regarder la zone de réception puis devant"],
  cp:["P1 et P2 poussent vers l’arrière","P3 et P4 perdent l’équilibre car ils ne se déplacent pas","P3 et P4 lâchent leur prise à l’épaule"],
  cv:["N’ose pas se pencher en arrière","Cherche à regarder le sol sur le côté","Cherche à s’accrocher à ses porteurs","Attitude passive à la réception"]}
];
SOURCES.splice(1, 0, ["Code des figures dynamiques (FPC acrosport, E. Courtelarre)","Code de niveaux A à D et 12 fiches détaillées : prises, critères de réalisation et conduites typiques du porteur et du voltigeur.",""]);
