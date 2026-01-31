// ===== Données du Module Automobile - Version Professionnelle =====

const autoLessons = [
    {
        id: 'auto-1',
        title: 'Le Moteur à Combustion Interne',
        icon: '🔧',
        level: 'Débutant',
        duration: '25 min',
        description: 'Comprenez le fonctionnement complet du moteur 4 temps et ses composants essentiels.',
        image: '../images/auto-engine.png',
        content: {
            intro: `Le moteur à combustion interne est le cœur de votre véhicule. Il transforme l'énergie chimique 
                    du carburant en énergie mécanique grâce à un cycle précis de 4 temps. Comprendre son fonctionnement 
                    vous permettra de mieux entretenir votre véhicule et de diagnostiquer les problèmes courants.`,
            sections: [
                {
                    title: '🔬 Principe de fonctionnement',
                    content: `Le moteur 4 temps fonctionne selon le cycle de Beau de Rochas :
                        
                        <strong>1. Admission</strong> - Le piston descend, la soupape d'admission s'ouvre, 
                        le mélange air/carburant entre dans le cylindre.
                        
                        <strong>2. Compression</strong> - Les soupapes se ferment, le piston remonte et 
                        comprime le mélange (rapport 10:1 à 12:1 pour essence).
                        
                        <strong>3. Détente (Explosion)</strong> - La bougie produit une étincelle, 
                        le mélange s'enflamme, la pression repousse le piston vers le bas.
                        
                        <strong>4. Échappement</strong> - La soupape d'échappement s'ouvre, 
                        le piston remonte et chasse les gaz brûlés.`
                },
                {
                    title: '⚙️ Composants principaux',
                    content: `<strong>Bloc moteur</strong> - Structure principale en fonte ou aluminium, 
                        contient les cylindres (diamètre 75-95mm typique).
                        
                        <strong>Culasse</strong> - Partie supérieure, contient les soupapes et l'arbre à cames.
                        
                        <strong>Pistons</strong> - Pièces mobiles avec segments d'étanchéité, 
                        reçoivent la poussée de l'explosion.
                        
                        <strong>Bielles</strong> - Transmettent le mouvement du piston au vilebrequin.
                        
                        <strong>Vilebrequin</strong> - Transforme le mouvement linéaire en rotation, 
                        tourne à 800-7000 tr/min selon le régime.
                        
                        <strong>Arbre à cames</strong> - Commande l'ouverture/fermeture des soupapes 
                        via des cames profilées.`
                },
                {
                    title: '💡 Conseils professionnels',
                    content: `⚠️ <strong>Couple de serrage culasse</strong> : Toujours respecter l'ordre 
                        et le couple spécifié (généralement 25-45 Nm + angle).
                        
                        🔧 <strong>Jeu aux soupapes</strong> : Vérifier tous les 60 000 km 
                        (0.15-0.30mm admission, 0.25-0.35mm échappement typique).
                        
                        🛢️ <strong>Huile moteur</strong> : Choisir la viscosité adaptée (5W30, 5W40) 
                        selon les préconisations constructeur.
                        
                        📊 <strong>Compression</strong> : Un cylindre sain = 10-14 bars, 
                        écart max entre cylindres = 10%.`
                }
            ]
        },
        quiz: [
            {
                question: 'Dans quel ordre se déroulent les 4 temps du cycle moteur ?',
                options: [
                    'Compression, Admission, Détente, Échappement',
                    'Admission, Compression, Détente, Échappement',
                    'Détente, Compression, Admission, Échappement',
                    'Admission, Détente, Compression, Échappement'
                ],
                correct: 1,
                explanation: 'Le cycle 4 temps suit toujours l\'ordre : Admission (entrée du mélange), Compression (montée en pression), Détente (explosion), Échappement (évacuation des gaz).'
            },
            {
                question: 'Quel est le rôle principal du vilebrequin ?',
                options: [
                    'Produire l\'étincelle',
                    'Transformer le mouvement linéaire en rotation',
                    'Commander les soupapes',
                    'Refroidir le moteur'
                ],
                correct: 1,
                explanation: 'Le vilebrequin convertit le mouvement linéaire des pistons (haut/bas) en mouvement rotatif transmis aux roues via la boîte de vitesses.'
            },
            {
                question: 'Quel rapport de compression est typique pour un moteur essence ?',
                options: [
                    '5:1 à 7:1',
                    '10:1 à 12:1',
                    '18:1 à 22:1',
                    '2:1 à 4:1'
                ],
                correct: 1,
                explanation: 'Les moteurs essence ont un rapport de compression de 10:1 à 12:1. Les diesels sont plus élevés (18:1 à 22:1) car ils n\'ont pas de bougie.'
            },
            {
                question: 'À quelle fréquence doit-on vérifier le jeu aux soupapes ?',
                options: [
                    'Tous les 10 000 km',
                    'Tous les 30 000 km',
                    'Tous les 60 000 km',
                    'Jamais, c\'est automatique'
                ],
                correct: 2,
                explanation: 'Le jeu aux soupapes se vérifie généralement tous les 60 000 km. Un mauvais réglage peut causer perte de puissance, bruit de cliquetis ou usure prématurée.'
            },
            {
                question: 'Quelle pression de compression indique un cylindre en bon état ?',
                options: [
                    '2-5 bars',
                    '5-8 bars',
                    '10-14 bars',
                    '20-25 bars'
                ],
                correct: 2,
                explanation: 'Un cylindre sain présente une compression de 10 à 14 bars. En dessous, il peut y avoir usure des segments, problème de soupapes ou joint de culasse défaillant.'
            }
        ]
    },
    {
        id: 'auto-2',
        title: 'Le Système de Freinage',
        icon: '🛑',
        level: 'Intermédiaire',
        duration: '30 min',
        description: 'Maîtrisez le fonctionnement des freins à disque et à tambour, ABS et entretien.',
        image: '../images/auto-brakes.png',
        content: {
            intro: `Le système de freinage est l'élément de sécurité le plus critique de votre véhicule. 
                    Il convertit l'énergie cinétique en chaleur pour ralentir ou arrêter le véhicule. 
                    Un bon mécanicien doit maîtriser parfaitement ce système.`,
            sections: [
                {
                    title: '🔴 Freins à disque',
                    content: `<strong>Composants :</strong>
                        - <strong>Disque</strong> : Fonte ou composite, diamètre 240-380mm, 
                          ventilé (rainuré) ou plein
                        - <strong>Étrier</strong> : Fixe ou flottant, contient les pistons hydrauliques
                        - <strong>Plaquettes</strong> : Garniture semi-métallique ou céramique, 
                          épaisseur mini 2-3mm
                        
                        <strong>Fonctionnement :</strong>
                        La pression hydraulique (50-180 bars) pousse les pistons de l'étrier, 
                        qui presse les plaquettes contre le disque en rotation.
                        
                        <strong>Température de fonctionnement :</strong> 200-400°C normal, 
                        jusqu'à 700°C en usage intensif (risque de fading).`
                },
                {
                    title: '🔵 Freins à tambour',
                    content: `Encore utilisés à l'arrière sur certains véhicules :
                        
                        - <strong>Tambour</strong> : Fonte, tourne avec la roue
                        - <strong>Mâchoires</strong> : Segments garnis qui s'écartent contre le tambour
                        - <strong>Cylindre de roue</strong> : Actionne les mâchoires hydrauliquement
                        
                        <strong>Avantages :</strong> Coût faible, bon frein de parking intégré
                        <strong>Inconvénients :</strong> Moins efficace à chaud, évacuation chaleur difficile`
                },
                {
                    title: '🖥️ Système ABS',
                    content: `<strong>Anti-lock Braking System</strong> - Empêche le blocage des roues.
                        
                        <strong>Composants :</strong>
                        - Capteurs de vitesse de roue (inductifs ou effet Hall)
                        - Calculateur ABS
                        - Groupe hydraulique avec électrovannes
                        
                        <strong>Fonctionnement :</strong>
                        Si une roue tend à bloquer, l'ABS module la pression (25 fois/seconde) 
                        pour maintenir le glissement optimal (10-15%).
                        
                        <strong>Codes erreur courants :</strong>
                        - C1095 : Capteur vitesse AV gauche
                        - C1155 : Circuit hydraulique
                        - C1234 : Calculateur défaillant`
                },
                {
                    title: '🔧 Entretien et diagnostic',
                    content: `<strong>Contrôles réguliers :</strong>
                        ✓ Épaisseur plaquettes : Mini 2-3mm (neuf = 10-12mm)
                        ✓ Épaisseur disque : Cote mini gravée sur le disque
                        ✓ Liquide de frein : DOT 4, changer tous les 2 ans
                        ✓ Flexibles : Contrôler fissures, gonflement sous pression
                        
                        <strong>Symptômes de problèmes :</strong>
                        - Pédale molle → Air dans le circuit
                        - Grincement → Plaquettes usées (témoin d'usure)
                        - Vibration → Disque voilé (voile max 0.1mm)
                        - Tire d'un côté → Étrier grippé ou fuite`
                }
            ]
        },
        quiz: [
            {
                question: 'Quelle est la pression hydraulique typique dans un circuit de freinage ?',
                options: [
                    '5-10 bars',
                    '50-180 bars',
                    '200-300 bars',
                    '500-800 bars'
                ],
                correct: 1,
                explanation: 'Le circuit de freinage fonctionne entre 50 et 180 bars selon l\'effort sur la pédale. Cette pression est multipliée par le maître-cylindre et l\'assistance.'
            },
            {
                question: 'Quelle est l\'épaisseur minimale acceptable pour une plaquette de frein ?',
                options: [
                    '0.5-1mm',
                    '2-3mm',
                    '5-6mm',
                    '8-10mm'
                ],
                correct: 1,
                explanation: 'L\'épaisseur minimale est de 2-3mm. En dessous, le témoin d\'usure (fil métallique) frotte sur le disque, créant un grincement d\'alerte.'
            },
            {
                question: 'À quelle fréquence doit-on changer le liquide de frein ?',
                options: [
                    'Tous les 6 mois',
                    'Tous les ans',
                    'Tous les 2 ans',
                    'Tous les 5 ans'
                ],
                correct: 2,
                explanation: 'Le liquide de frein est hygroscopique (absorbe l\'humidité). Après 2 ans, son point d\'ébullition baisse dangereusement, risquant le "vapor lock".'
            },
            {
                question: 'Combien de fois par seconde l\'ABS peut-il moduler la pression ?',
                options: [
                    '5 fois',
                    '10 fois',
                    '25 fois',
                    '100 fois'
                ],
                correct: 2,
                explanation: 'L\'ABS module la pression environ 25 fois par seconde grâce aux électrovannes du groupe hydraulique, maintenant un glissement optimal de 10-15%.'
            },
            {
                question: 'Quel symptôme indique un disque de frein voilé ?',
                options: [
                    'Pédale molle',
                    'Vibration au freinage',
                    'Bruit de grincement continu',
                    'Odeur de brûlé'
                ],
                correct: 1,
                explanation: 'Un disque voilé (déformation >0.1mm) provoque des vibrations dans la pédale et le volant lors du freinage, car la plaquette "saute" sur la surface irrégulière.'
            },
            {
                question: 'Quel type de liquide de frein est le plus couramment utilisé ?',
                options: [
                    'DOT 2',
                    'DOT 3',
                    'DOT 4',
                    'DOT 5.1'
                ],
                correct: 2,
                explanation: 'Le DOT 4 est le standard actuel avec un point d\'ébullition de 230°C minimum. Le DOT 5.1 offre de meilleures performances mais coûte plus cher.'
            }
        ]
    },
    {
        id: 'auto-3',
        title: 'Transmission et Boîte de Vitesses',
        icon: '⚙️',
        level: 'Intermédiaire',
        duration: '35 min',
        description: 'Découvrez le fonctionnement de l\'embrayage, boîte manuelle et automatique.',
        image: '../images/auto-transmission.png',
        content: {
            intro: `La transmission transmet la puissance du moteur aux roues motrices. Elle comprend 
                    l'embrayage (ou convertisseur), la boîte de vitesses et les arbres de transmission.
                    Chaque élément doit fonctionner en harmonie pour une conduite fluide.`,
            sections: [
                {
                    title: '🔄 L\'embrayage',
                    content: `<strong>Rôle :</strong> Permet de coupler/découpler le moteur de la boîte.
                        
                        <strong>Composants :</strong>
                        - <strong>Volant moteur</strong> : Surface d'appui, stocke l'énergie cinétique
                        - <strong>Disque d'embrayage</strong> : Garnitures à friction (Ø 200-250mm)
                        - <strong>Mécanisme (plateau)</strong> : Ressort diaphragme, presse le disque
                        - <strong>Butée</strong> : Roulement déplaçant le mécanisme
                        
                        <strong>Caractéristiques techniques :</strong>
                        - Couple transmissible : 150-400 Nm selon véhicule
                        - Durée de vie : 100 000 - 200 000 km
                        - Jeu à la pédale : 15-25mm en haut de course`
                },
                {
                    title: '🔢 Boîte de vitesses manuelle',
                    content: `<strong>Fonctionnement :</strong>
                        Trains d'engrenages à différents rapports pour adapter 
                        la vitesse/le couple moteur à la situation.
                        
                        <strong>Composants :</strong>
                        - Arbre primaire (entrée)
                        - Arbre secondaire (sortie)
                        - Pignons baladeurs et synchroniseurs
                        - Fourchettes de commande
                        
                        <strong>Rapports typiques (véhicule standard) :</strong>
                        - 1ère : 3.5:1 (couple max, vitesse min)
                        - 2ème : 2.0:1
                        - 3ème : 1.3:1
                        - 4ème : 1.0:1 (prise directe)
                        - 5ème : 0.8:1 (overdrive, économie)
                        
                        <strong>Huile :</strong> 75W-80 ou 75W-90, vidange tous les 60 000 km`
                },
                {
                    title: '🅰️ Boîte automatique',
                    content: `<strong>Types principaux :</strong>
                        
                        <strong>1. Convertisseur de couple + trains épicycloïdaux</strong>
                        - Le plus répandu, passage de rapports fluide
                        - Huile ATF (Automatic Transmission Fluid)
                        - Vidange : 60 000 - 100 000 km
                        
                        <strong>2. Boîte robotisée (BMP, EGC...)</strong>
                        - Embrayage mécanique piloté électroniquement
                        - Plus économique, moins fluide
                        
                        <strong>3. Boîte à variation continue (CVT)</strong>
                        - Courroie + poulies à diamètre variable
                        - Rapport infini, rendement optimal
                        
                        <strong>4. Double embrayage (DSG, PDK...)</strong>
                        - Deux embrayages pour passages ultra-rapides (50ms)
                        - Performance + économie`
                },
                {
                    title: '🔧 Diagnostic et entretien',
                    content: `<strong>Symptômes de problèmes d'embrayage :</strong>
                        - Patinage en côte → Disque usé
                        - Pédale dure → Butée grippée
                        - Bruit au point mort qui disparaît embrayé → Roulement de boîte
                        - Vibration au démarrage → Volant moteur bi-masse usé
                        
                        <strong>Symptômes boîte de vitesses :</strong>
                        - Craquement au passage → Synchroniseur usé
                        - Vitesse qui saute → Fourchette/câblage usé
                        - Bruit de roulement → Roulement d'arbre
                        
                        <strong>Points de contrôle :</strong>
                        ✓ Niveau d'huile (bouchon de niveau latéral)
                        ✓ Jeu de la commande de vitesses
                        ✓ État du câble/timonerie d'embrayage
                        ✓ Course de la pédale d'embrayage`
                }
            ]
        },
        quiz: [
            {
                question: 'Quelle est la durée de vie typique d\'un embrayage ?',
                options: [
                    '30 000 - 50 000 km',
                    '100 000 - 200 000 km',
                    '300 000 - 400 000 km',
                    '500 000+ km'
                ],
                correct: 1,
                explanation: 'Un embrayage bien utilisé dure 100 000 à 200 000 km. La conduite en ville, les démarrages brusques et le pied posé sur la pédale réduisent sa durée de vie.'
            },
            {
                question: 'Quel rapport de boîte est appelé "prise directe" ?',
                options: [
                    '1ère vitesse (3.5:1)',
                    '2ème vitesse (2.0:1)',
                    '4ème vitesse (1.0:1)',
                    '5ème vitesse (0.8:1)'
                ],
                correct: 2,
                explanation: 'Le rapport 1.0:1 (4ème sur une boîte 5) est la "prise directe" : l\'arbre primaire et secondaire tournent à la même vitesse, sans démultiplication.'
            },
            {
                question: 'Quel type d\'huile utilise une boîte automatique classique ?',
                options: [
                    '75W-80',
                    '5W-40',
                    'ATF (Automatic Transmission Fluid)',
                    'DOT 4'
                ],
                correct: 2,
                explanation: 'Les boîtes automatiques utilisent l\'ATF, une huile spéciale rouge qui lubrifie, transmet la puissance dans le convertisseur et actionne les embrayages internes.'
            },
            {
                question: 'Quel symptôme indique un volant moteur bi-masse usé ?',
                options: [
                    'Pédale d\'embrayage molle',
                    'Vibration au démarrage/arrêt du moteur',
                    'Bruit de sifflement en roulant',
                    'Difficulté à passer la marche arrière'
                ],
                correct: 1,
                explanation: 'Le volant bi-masse absorbe les à-coups du moteur. Quand il s\'use, il vibre fortement au démarrage et à l\'arrêt, avec parfois un bruit de cliquetis.'
            },
            {
                question: 'Quelle technologie permet des passages de vitesse en 50 millisecondes ?',
                options: [
                    'Boîte robotisée simple',
                    'CVT (variation continue)',
                    'Double embrayage (DSG/PDK)',
                    'Convertisseur de couple classique'
                ],
                correct: 2,
                explanation: 'Le double embrayage utilise deux arbres : pendant que vous roulez sur un rapport, le suivant est déjà engagé sur l\'autre arbre, permettant un passage quasi-instantané.'
            },
            {
                question: 'Quel symptôme indique un synchroniseur de boîte usé ?',
                options: [
                    'Pédale d\'embrayage qui vibre',
                    'Craquement au passage d\'une vitesse spécifique',
                    'Bruit continu en roulant',
                    'Fuite d\'huile sous le véhicule'
                ],
                correct: 1,
                explanation: 'Le synchroniseur égalise les vitesses de rotation avant l\'enclenchement. Usé, il ne synchronise plus correctement, causant un craquement au passage.'
            }
        ]
    },
    {
        id: 'auto-4',
        title: 'Système Électrique et Électronique',
        icon: '⚡',
        level: 'Avancé',
        duration: '40 min',
        description: 'Maîtrisez la batterie, l\'alternateur, le démarrage et les réseaux multiplexés.',
        image: '../images/auto-electrical.png',
        content: {
            intro: `Le système électrique moderne est le système nerveux du véhicule. De la simple batterie 
                    aux réseaux CAN complexes, il gère l'alimentation, le démarrage, l'éclairage et 
                    la communication entre les calculateurs.`,
            sections: [
                {
                    title: '🔋 Batterie',
                    content: `<strong>Caractéristiques :</strong>
                        - Tension nominale : 12V (6 éléments de 2.1V)
                        - Capacité : 40-100 Ah selon véhicule
                        - Courant de démarrage (CCA) : 400-800A
                        
                        <strong>Technologies :</strong>
                        - <strong>Plomb-acide</strong> : Standard, nécessite entretien
                        - <strong>AGM</strong> : Électrolyte absorbé, sans entretien, Start-Stop
                        - <strong>EFB</strong> : Intermédiaire, Start-Stop basique
                        
                        <strong>Tests de diagnostic :</strong>
                        - Tension repos : 12.6V (100%), 12.4V (75%), 12.2V (50%)
                        - Tension démarrage : >9.6V minimum
                        - Test de charge : Doit maintenir 10.5V sous charge
                        
                        <strong>Durée de vie :</strong> 4-6 ans en moyenne`
                },
                {
                    title: '🔄 Alternateur',
                    content: `<strong>Rôle :</strong> Produit le courant électrique et recharge la batterie.
                        
                        <strong>Caractéristiques :</strong>
                        - Tension de sortie : 13.8V - 14.4V
                        - Puissance : 80-180A selon équipements
                        - Régulateur intégré ou déporté
                        
                        <strong>Composants :</strong>
                        - <strong>Rotor</strong> : Électroaimant tournant
                        - <strong>Stator</strong> : Bobinages triphasés fixes
                        - <strong>Pont de diodes</strong> : Redresse le courant alternatif
                        - <strong>Régulateur</strong> : Maintient la tension constante
                        
                        <strong>Tests :</strong>
                        - Tension moteur tournant : 13.8-14.4V
                        - Avec charges (phares, clim) : >13.2V
                        - Ondulation : <0.5V crête à crête`
                },
                {
                    title: '⚡ Circuit de démarrage',
                    content: `<strong>Composants :</strong>
                        - <strong>Démarreur</strong> : Moteur électrique 1-2 kW
                        - <strong>Solénoïde</strong> : Relais de puissance + lanceur
                        - <strong>Pignon</strong> : S'engage sur la couronne du volant
                        
                        <strong>Consommation :</strong> 150-300A au démarrage
                        
                        <strong>Diagnostic :</strong>
                        
                        <strong>Rien ne se passe :</strong>
                        → Vérifier batterie, cosses, fusible démarreur
                        
                        <strong>Clic-clic :</strong>
                        → Batterie faible ou cosses sulfatées
                        
                        <strong>Grincement :</strong>
                        → Pignon ou couronne usée
                        
                        <strong>Tourne mais ne démarre pas :</strong>
                        → Problème allumage ou injection`
                },
                {
                    title: '🖥️ Réseaux multiplexés',
                    content: `<strong>CAN Bus (Controller Area Network) :</strong>
                        - 2 fils torsadés (CAN-H et CAN-L)
                        - Vitesses : 125 kbps (confort) à 500 kbps (moteur)
                        - Résistances de terminaison : 120Ω à chaque extrémité
                        
                        <strong>Protocoles :</strong>
                        - <strong>CAN</strong> : Standard automobile
                        - <strong>LIN</strong> : Basse vitesse, fonctions simples
                        - <strong>FlexRay</strong> : Haute vitesse, sécurité (BMW, Mercedes)
                        - <strong>MOST</strong> : Multimédia
                        
                        <strong>Diagnostic OBD-II :</strong>
                        - Prise 16 broches standardisée
                        - Codes défaut : P (moteur), B (carrosserie), C (châssis), U (réseau)
                        - Lecture avec valise ou interface ELM327
                        
                        <strong>Exemples de codes :</strong>
                        - P0300 : Ratés d'allumage aléatoires
                        - P0171 : Mélange trop pauvre
                        - P0420 : Efficacité catalyseur`
                }
            ]
        },
        quiz: [
            {
                question: 'Quelle tension doit afficher une batterie 12V complètement chargée au repos ?',
                options: [
                    '11.8V',
                    '12.0V',
                    '12.6V',
                    '13.5V'
                ],
                correct: 2,
                explanation: 'Une batterie 12V chargée à 100% affiche 12.6V au repos (2.1V par élément × 6). À 12.4V elle est à 75%, à 12.2V à 50%.'
            },
            {
                question: 'Quelle plage de tension doit produire un alternateur moteur tournant ?',
                options: [
                    '11.5V - 12.5V',
                    '12.5V - 13.5V',
                    '13.8V - 14.4V',
                    '15.0V - 16.0V'
                ],
                correct: 2,
                explanation: 'L\'alternateur doit produire 13.8 à 14.4V pour recharger la batterie. En dessous = sous-charge. Au-dessus = surcharge, risque d\'endommager la batterie.'
            },
            {
                question: 'Quelle est la résistance de terminaison standard d\'un bus CAN ?',
                options: [
                    '60Ω',
                    '120Ω',
                    '470Ω',
                    '1000Ω'
                ],
                correct: 1,
                explanation: 'Le bus CAN nécessite une résistance de 120Ω à chaque extrémité. Mesurée entre CAN-H et CAN-L, on doit trouver 60Ω (deux 120Ω en parallèle).'
            },
            {
                question: 'Que signifie le code défaut P0300 ?',
                options: [
                    'Sonde lambda défaillante',
                    'Ratés d\'allumage aléatoires',
                    'Capteur MAP hors plage',
                    'Thermostat bloqué'
                ],
                correct: 1,
                explanation: 'P0300 indique des ratés d\'allumage sur plusieurs cylindres de manière aléatoire. Les codes P0301-P0304 désignent un cylindre spécifique.'
            },
            {
                question: 'Quelle technologie de batterie est adaptée aux véhicules Start-Stop ?',
                options: [
                    'Plomb-acide classique',
                    'AGM ou EFB',
                    'Nickel-cadmium',
                    'Zinc-carbone'
                ],
                correct: 1,
                explanation: 'Les batteries AGM (Absorbent Glass Mat) et EFB (Enhanced Flooded Battery) supportent les cycles de charge/décharge fréquents du Start-Stop.'
            },
            {
                question: 'Quel courant consomme typiquement un démarreur ?',
                options: [
                    '10-30A',
                    '50-100A',
                    '150-300A',
                    '500-800A'
                ],
                correct: 2,
                explanation: 'Le démarreur consomme 150 à 300A pendant quelques secondes. C\'est pourquoi une batterie faible produit le son caractéristique "clic-clic".'
            }
        ]
    },
    {
        id: 'auto-5',
        title: 'Entretien Courant et Révision',
        icon: '🔧',
        level: 'Débutant',
        duration: '20 min',
        description: 'Apprenez les opérations d\'entretien essentielles : vidange, filtres, liquides.',
        image: '../images/auto-maintenance.png',
        content: {
            intro: `L'entretien régulier est la clé de la longévité de votre véhicule. En respectant 
                    les intervalles préconisés et en utilisant les bons produits, vous prévenez 
                    les pannes coûteuses et maintenez les performances.`,
            sections: [
                {
                    title: '🛢️ Vidange moteur',
                    content: `<strong>Fréquence :</strong> Tous les 15 000-30 000 km ou 1-2 ans
                        
                        <strong>Choix de l'huile :</strong>
                        - <strong>Viscosité</strong> : 5W-30, 5W-40, 0W-20, etc.
                        - <strong>Norme ACEA</strong> : A3/B4 (standard), C3 (FAP)
                        - <strong>Approbations</strong> : VW 504/507, MB 229.51, etc.
                        
                        <strong>Quantité typique :</strong> 4-6 litres avec filtre
                        
                        <strong>Procédure :</strong>
                        1. Moteur chaud, lever le véhicule
                        2. Retirer le bouchon de vidange (clé 13-19mm)
                        3. Laisser s'écouler 10-15 min
                        4. Remplacer le joint de bouchon
                        5. Changer le filtre à huile
                        6. Remplir par le bouchon de remplissage
                        7. Vérifier le niveau à la jauge
                        
                        <strong>Couple de serrage bouchon :</strong> 25-35 Nm`
                },
                {
                    title: '🌬️ Filtres',
                    content: `<strong>Filtre à air moteur</strong>
                        - Rôle : Filtre les poussières avant l'admission
                        - Intervalle : 30 000-60 000 km
                        - Symptôme usure : Perte de puissance, surconsommation
                        
                        <strong>Filtre à carburant</strong>
                        - Essence : Dans le réservoir, souvent à vie
                        - Diesel : 30 000-60 000 km, avec évacuation eau
                        
                        <strong>Filtre d'habitacle</strong>
                        - Rôle : Filtre l'air entrant dans l'habitacle
                        - Intervalle : 15 000-30 000 km ou 1 an
                        - Symptôme : Mauvaise ventilation, odeurs
                        
                        <strong>Filtre à huile</strong>
                        - Changé à chaque vidange
                        - Serrage : À la main + 3/4 de tour`
                },
                {
                    title: '💧 Liquides et niveaux',
                    content: `<strong>Liquide de refroidissement</strong>
                        - Type : G11 (bleu), G12 (rose), G13 (violet)
                        - Ne JAMAIS mélanger les types
                        - Remplacement : tous les 4-5 ans
                        - Contrôle : Densité (antigel -25°C à -35°C)
                        
                        <strong>Liquide de frein</strong>
                        - Type : DOT 4 (standard) ou DOT 5.1
                        - Remplacement : tous les 2 ans
                        - Niveau : Entre MIN et MAX
                        
                        <strong>Liquide de direction assistée</strong>
                        - Vérifier niveau à froid
                        - Symptôme manque : Bruit de gémissement en tournant
                        
                        <strong>Lave-glace</strong>
                        - Antigel en hiver (-20°C minimum)`
                },
                {
                    title: '📋 Carnet d\'entretien type',
                    content: `<strong>Chaque année ou 15 000 km :</strong>
                        ✓ Vidange huile + filtre
                        ✓ Contrôle niveaux
                        ✓ Contrôle pneus (usure, pression)
                        ✓ Contrôle freins
                        ✓ Contrôle éclairage
                        
                        <strong>Tous les 2 ans ou 30 000 km :</strong>
                        ✓ Filtre à air
                        ✓ Filtre habitacle
                        ✓ Liquide de frein
                        ✓ Bougies (essence)
                        
                        <strong>Tous les 60 000-120 000 km :</strong>
                        ✓ Courroie de distribution
                        ✓ Courroie accessoires
                        ✓ Liquide de refroidissement
                        ✓ Huile de boîte
                        ✓ Bougies de préchauffage (diesel)
                        
                        <strong>Attention :</strong> Toujours consulter le carnet constructeur`
                }
            ]
        },
        quiz: [
            {
                question: 'Quelle est la fréquence recommandée pour une vidange moteur ?',
                options: [
                    'Tous les 5 000 km',
                    'Tous les 15 000-30 000 km ou 1-2 ans',
                    'Tous les 50 000 km',
                    'Uniquement quand le voyant s\'allume'
                ],
                correct: 1,
                explanation: 'La fréquence de vidange varie selon le constructeur, le type d\'huile et l\'utilisation. En moyenne, 15 000 à 30 000 km ou 1 à 2 ans maximum.'
            },
            {
                question: 'Que signifie la notation "5W-30" pour une huile moteur ?',
                options: [
                    'La marque et le modèle de l\'huile',
                    'La viscosité à froid (5W) et à chaud (30)',
                    'Le volume en litres (5) et la pression (30)',
                    'L\'année de fabrication et le numéro de lot'
                ],
                correct: 1,
                explanation: '5W indique la fluidité à froid (-25°C), 30 la viscosité à 100°C. Une huile 5W est plus fluide au démarrage qu\'une 10W, facilitant la lubrification immédiate.'
            },
            {
                question: 'Pourquoi ne faut-il jamais mélanger différents types de liquide de refroidissement ?',
                options: [
                    'Ça ne change pas la couleur',
                    'Ils peuvent réagir et former un gel obstruant le circuit',
                    'C\'est juste une recommandation commerciale',
                    'Ça augmente le point d\'ébullition'
                ],
                correct: 1,
                explanation: 'Les additifs des différents liquides (G11, G12, G13) peuvent réagir entre eux, former un gel ou des précipités qui bouchent le circuit et endommagent la pompe à eau.'
            },
            {
                question: 'À quel intervalle doit-on remplacer la courroie de distribution ?',
                options: [
                    'Tous les 15 000 km',
                    'Tous les 30 000 km',
                    'Tous les 60 000-120 000 km',
                    'Jamais, elle est à vie'
                ],
                correct: 2,
                explanation: 'La courroie de distribution se remplace entre 60 000 et 120 000 km selon le constructeur. Une rupture peut causer des dégâts moteur irréparables ("moteur serré").'
            },
            {
                question: 'Quel est le couple de serrage typique d\'un bouchon de vidange ?',
                options: [
                    '5-10 Nm',
                    '25-35 Nm',
                    '80-100 Nm',
                    '150-200 Nm'
                ],
                correct: 1,
                explanation: 'Le bouchon de vidange se serre à 25-35 Nm selon les véhicules. Trop serré = risque d\'endommager le filetage du carter. Trop faible = fuite d\'huile.'
            },
            {
                question: 'Comment savoir si le filtre d\'habitacle doit être changé ?',
                options: [
                    'Le voyant s\'allume au tableau de bord',
                    'Mauvaise ventilation et/ou odeurs désagréables',
                    'La climatisation ne fonctionne plus',
                    'Le moteur surchauffe'
                ],
                correct: 1,
                explanation: 'Un filtre d\'habitacle colmaté réduit le débit d\'air de la ventilation et peut laisser passer des odeurs désagréables. Changez-le tous les 15 000-30 000 km ou 1 an.'
            }
        ]
    },
    {
        id: 'auto-6',
        title: 'Recherche de Panne & Diagnostic',
        icon: '🔍',
        level: 'Intermédiaire',
        duration: '30 min',
        description: 'Maîtrisez la méthodologie professionnelle de recherche de panne automobile.',
        image: '../images/auto-diagnostic.png',
        content: {
            intro: `Observer des symptômes et, par déduction, découvrir l'origine des défauts de fonctionnement d'un système. 
                    Cette méthodologie professionnelle vous permettra d'exploiter efficacement la documentation technique, 
                    d'élaborer des diagnostics précis et de résoudre des pannes de manière systématique.`,
            sections: [
                {
                    title: '📋 Les étapes de la recherche de panne',
                    content: `<strong>1. Collecter les informations</strong>
                        Questions pertinentes au client :
                        - Quel est le défaut constaté ?
                        - Qui a conduit, qui a touché au véhicule ?
                        - Où cela s'est produit ? Quel type de route ?
                        - Quand se produit le problème (matin, soir, pluie) ?
                        - Est-ce que cela se produit souvent ?
                        
                        <strong>2. Vérifier et confirmer le dysfonctionnement</strong>
                        
                        <strong>3. Faire les contrôles préliminaires</strong>
                        - Niveaux (carburant, huile, LDR, batterie, freins)
                        - État des courroies et durites
                        - Contacts électriques et cosses batterie
                        - Voyants défauts au tableau de bord
                        
                        <strong>4. Lister et classer les hypothèses</strong>
                        De la plus logique à la moins évidente
                        
                        <strong>5. Réaliser des essais et des mesures</strong>
                        
                        <strong>6. Éliminer la cause</strong>
                        Attention : bien éliminer la cause, sinon le défaut risque de réapparaître`
                },
                {
                    title: '💨 Indices par la fumée d\'échappement',
                    content: `La couleur de la fumée donne des indications importantes :
                        
                        <strong>Fumée blanche et humide :</strong>
                        - Normale à froid
                        - Si elle persiste moteur chaud → rupture du joint de culasse (consommation de LDR)
                        
                        <strong>Fumée bleue ou grasse :</strong>
                        - Usure des segments et des cylindres
                        - Consommation d'huile anormale
                        
                        <strong>Fumée noire :</strong>
                        - Filtre à air bouché
                        - Mélange trop riche (consommation anormale de carburant)
                        - EGR grippé`
                },
                {
                    title: '🔧 Organiser une réparation',
                    content: `<strong>S'informer :</strong>
                        - Vérifier que le défaut nécessite bien l'intervention prévue
                        - Vérifier que la revue technique correspond au véhicule
                        - Relever : méthode de réparation, valeurs constructeur, couples de serrage
                        - Vérifier que l'on possède l'outillage nécessaire
                        
                        <strong>Préparer :</strong>
                        - Dégager l'aire de travail
                        - Préparer une servante d'atelier
                        - Placer les protections (housse d'ailes, siège, tapis de sol, volant)
                        
                        <strong>Réaliser l'intervention :</strong>
                        - Nettoyer la zone d'intervention
                        - En cas de levage : placer chandelles aux points d'ancrage
                        - S'assurer de la stabilité du véhicule
                        
                        <strong>Contrôler :</strong>
                        - Serrer vis, écrous, colliers
                        - Vérifier tous les niveaux
                        - Vérifier le serrage des roues (clé dynamométrique)
                        - Essayer le véhicule
                        - Vérifier les éventuelles fuites`
                },
                {
                    title: '⚠️ Règles de base boulonnerie',
                    content: `<strong>Identifier la boulonnerie :</strong>
                        - 1 vis + 1 écrou = 1 boulon
                        - Pas normalisé : M6=1mm, M8=1.25mm, M10=1.5mm, M12=1.75mm
                        - Attention aux vis au pas à gauche (repérées par encoche)
                        
                        <strong>Desserrer :</strong>
                        - Utiliser de préférence une clé à pipe débouchée ou douille 6 pans
                        - Pour augmenter la force : poignée coulissante + tube rallonge
                        - Éviter l'usage du cliquet au desserrage (risque de détériorer la roue libre)
                        
                        <strong>Serrer :</strong>
                        - Faire prendre toutes les vis à la main avant de serrer
                        - Respecter les couples de serrage (clé dynamométrique)
                        - Couples en Newton-mètre (N.m) ou déca Newton-mètre (daN.m)
                        
                        <strong>Rendre indesserable :</strong>
                        - Écrou Nylstop, écrou à créneaux, goupille fendue
                        - Tôle frein, frein filet
                        - Toujours remplacer écrous de sécurité au démontage`
                }
            ]
        },
        quiz: [
            {
                question: 'Quelle est la première étape de la recherche de panne ?',
                options: [
                    'Démonter le moteur',
                    'Collecter les informations auprès du client',
                    'Acheter les pièces de rechange',
                    'Faire un essai routier'
                ],
                correct: 1,
                explanation: 'La collecte d\'informations auprès du client (symptômes, circonstances, historique) est fondamentale pour orienter efficacement le diagnostic.'
            },
            {
                question: 'Que peut indiquer une fumée bleue à l\'échappement ?',
                options: [
                    'Joint de culasse défaillant',
                    'Filtre à air bouché',
                    'Usure des segments et cylindres',
                    'Problème d\'allumage'
                ],
                correct: 2,
                explanation: 'Une fumée bleue ou grasse indique que l\'huile brûle dans la chambre de combustion, signe d\'usure des segments, guides de soupapes ou cylindres.'
            },
            {
                question: 'Avant de démonter une culasse, que doit-on impérativement faire ?',
                options: [
                    'Chauffer le moteur au maximum',
                    'Vidanger le circuit de refroidissement et débrancher la batterie',
                    'Retirer tous les bougies',
                    'Déposer le radiateur'
                ],
                correct: 1,
                explanation: 'On doit vidanger le circuit de refroidissement pour éviter les écoulements et débrancher la cosse négative de la batterie pour la sécurité électrique.'
            },
            {
                question: 'Pourquoi éviter le cliquet au desserrage d\'un écrou très serré ?',
                options: [
                    'C\'est trop bruyant',
                    'Risque de détériorer la roue libre intérieure',
                    'C\'est interdit par la loi',
                    'C\'est trop lent'
                ],
                correct: 1,
                explanation: 'Le cliquet contient une roue libre qui peut se détériorer sous forte contrainte. Préférer une poignée coulissante avec rallonge pour le desserrage.'
            },
            {
                question: 'Combien de points de contact (appuis) un arbre de boîte doit-il avoir ?',
                options: [
                    '2 points',
                    '4 points',
                    '6 points',
                    '1 point'
                ],
                correct: 1,
                explanation: 'Un arbre dans une boîte doit avoir 4 points de contact : 2 pour l\'arbre dans le roulement, 2 pour l\'ensemble arbre+roulement dans le carter.'
            }
        ]
    },
    {
        id: 'auto-7',
        title: 'Circuit de Refroidissement',
        icon: '🌡️',
        level: 'Intermédiaire',
        duration: '25 min',
        description: 'Contrôlez et entretenez le circuit de refroidissement moteur en professionnel.',
        image: '../images/auto-cooling.png',
        content: {
            intro: `Le circuit de refroidissement évacue les dépôts qui se forment dans les cavités du moteur et de la culasse 
                    afin d'éviter l'entartrage du moteur. Un bon entretien prévient la surchauffe et préserve le joint de culasse.`,
            sections: [
                {
                    title: '💧 Vidanger le liquide de refroidissement',
                    content: `<strong>Préparation :</strong>
                        - Rechercher dans la revue technique : schéma du circuit, position des bouchons de vidange, contenance
                        - Préparer la quantité de liquide neuf nécessaire et un bac à vidange
                        
                        <strong>Vidanger :</strong>
                        1. Attendre que la température ait diminué (et la pression)
                        2. Faire chuter la pression résiduelle en ouvrant progressivement le bouchon du vase
                        3. Ouvrir le bouchon de vidange du radiateur au-dessus d'un bac
                        4. Déposer le bouchon de vidange du bloc-moteur
                        5. Vider et nettoyer le vase d'expansion
                        
                        <strong>Remplir :</strong>
                        1. Revisser les bouchons de vidange
                        2. Ouvrir la ou les vis de purge
                        3. Remplir le vase jusqu'au repère MAXI
                        4. Mettre la commande de chauffage au MAXI`
                },
                {
                    title: '💨 Purger le circuit',
                    content: `<strong>Circuit sans vase d'expansion :</strong>
                        Laisser tourner le moteur, bouchon de radiateur ouvert, jusqu'à ouverture du thermostat 
                        (la durite supérieure devient très chaude).
                        
                        <strong>Circuit avec vase d'expansion :</strong>
                        1. Le liquide est au niveau dans le vase
                        2. Le bouchon du radiateur est fermé, celui du vase est ouvert
                        3. Placer le vase le plus haut possible si le liquide ne s'écoule pas des vis de purge
                        4. Fermer les vis de purge dès que le liquide s'écoule en jet continu (sans bulle d'air)
                        5. Démarrer le moteur à 1500 tr/min
                        6. Laisser tourner jusqu'à l'enclenchement puis l'arrêt du motoventilateur
                        7. Ramener au régime de ralenti
                        8. Arrêter et attendre le refroidissement
                        9. Ouvrir lentement le bouchon du vase pour faire chuter la pression
                        10. Contrôler et corriger le niveau
                        
                        <strong>⚠️ ATTENTION :</strong> Ne jamais ouvrir le bouchon du vase moteur chaud !`
                },
                {
                    title: '🔍 Contrôler le circuit de refroidissement',
                    content: `<strong>Contrôles moteur arrêté :</strong>
                        1. Vérifier le niveau dans le vase et la protection antigel (avec pèse antigel)
                        2. Contrôler : serrage des colliers, état des courroies/durites/radiateur
                        3. Contrôler la pompe à eau (fuite visuelle et jeu)
                        
                        <strong>Contrôler les fuites en pression :</strong>
                        - Monter l'embout du contrôleur d'étanchéité à la place du bouchon
                        - Pomper jusqu'à une pression de 0.1 bar inférieure à la pression de tarage
                        - Contrôler les fuites sur tous les éléments
                        
                        <strong>Vérifier la pression de tarage</strong> de la soupape du vase
                        
                        <strong>Contrôler le motoventilateur :</strong>
                        - Débrancher le thermocontact et relier les deux bornes
                        - Le ventilateur doit tourner (contact mis)
                        - Si véhicule multiplexé : faire un test actionneur à l'outil de diagnostic`
                },
                {
                    title: '🌡️ Diagnostic du calorstat (thermostat)',
                    content: `<strong>Calorstat bloqué fermé :</strong>
                        - La mise en relation avec le radiateur ne se fera pas
                        - Le moteur va surchauffer (risque pour le joint de culasse)
                        - Les motoventilateurs ne se déclencheront pas
                        
                        <strong>Calorstat bloqué ouvert :</strong>
                        - Le liquide circule toujours vers le radiateur
                        - Le moteur n'atteint pas sa température normale (80-90°C)
                        - Consommation et pollution en hausse
                        
                        <strong>Calorstat qui grippe :</strong>
                        - La montée en température se fait normalement
                        - Dépassement du seuil puis ouverture brutale
                        - Chute rapide de température
                        
                        <strong>Règle :</strong> Si le voyant de température entre en zone rouge 
                        alors que le liquide n'a pas circulé dans la durite supérieure → remplacer le calorstat`
                }
            ]
        },
        quiz: [
            {
                question: 'Pourquoi mettre le chauffage au maximum lors de la purge ?',
                options: [
                    'Pour réchauffer l\'habitacle',
                    'Pour que le liquide circule dans le radiateur de chauffage et purger correctement',
                    'Pour économiser de l\'énergie',
                    'Pour éviter le gel'
                ],
                correct: 1,
                explanation: 'En mettant le chauffage au maximum, on ouvre la vanne vers le radiateur de chauffage, permettant au liquide d\'y circuler et de purger cette partie du circuit.'
            },
            {
                question: 'Quelle est la température normale de fonctionnement du liquide de refroidissement ?',
                options: [
                    '40-50°C',
                    '60-70°C',
                    '80-90°C',
                    '110-120°C'
                ],
                correct: 2,
                explanation: 'La température normale de fonctionnement est de 80 à 90°C. En dessous, le moteur ne fonctionne pas de manière optimale. Au-dessus, il y a risque de surchauffe.'
            },
            {
                question: 'Que se passe-t-il si le calorstat est bloqué fermé ?',
                options: [
                    'Le moteur reste froid',
                    'Le moteur surchauffe rapidement',
                    'Le niveau baisse automatiquement',
                    'Le ventilateur tourne en permanence'
                ],
                correct: 1,
                explanation: 'Bloqué fermé, le calorstat empêche le liquide de circuler vers le radiateur. Le moteur surchauffe alors rapidement, risquant d\'endommager le joint de culasse.'
            },
            {
                question: 'Quelle pression doit-on appliquer pour un test d\'étanchéité du circuit ?',
                options: [
                    'La pression maximale du contrôleur',
                    '0.1 bar de moins que la pression de tarage de la soupape',
                    'Exactement 1 bar',
                    'La pression atmosphérique'
                ],
                correct: 1,
                explanation: 'On pompe jusqu\'à 0.1 bar inférieur à la pression de tarage de la soupape pour ne pas déclencher la soupape tout en testant l\'étanchéité effective du circuit.'
            },
            {
                question: 'Peut-on ouvrir le bouchon du vase d\'expansion moteur chaud ?',
                options: [
                    'Oui, c\'est sans danger',
                    'Non, risque de brûlure par projection de liquide sous pression',
                    'Uniquement si le niveau est bas',
                    'Uniquement avec des gants'
                ],
                correct: 1,
                explanation: 'Jamais ! Moteur chaud, le circuit est sous pression (1 à 1.4 bar). Ouvrir le bouchon provoquerait une projection de liquide bouillant causant de graves brûlures.'
            }
        ]
    },
    {
        id: 'auto-8',
        title: 'Système d\'Injection Électronique',
        icon: '⛽',
        level: 'Avancé',
        duration: '35 min',
        description: 'Contrôlez et diagnostiquez les systèmes d\'injection électronique modernes.',
        image: '../images/auto-injection.png',
        content: {
            intro: `Les systèmes d'injection électronique gèrent précisément l'alimentation en carburant et l'allumage. 
                    Maîtriser leur diagnostic est essentiel pour le technicien moderne.`,
            sections: [
                {
                    title: '⛽ Contrôle du circuit d\'alimentation',
                    content: `<strong>Rechercher dans la revue technique :</strong>
                        - Le schéma du circuit d'alimentation
                        - La pression nominale du carburant
                        - L'emplacement du filtre à carburant
                        
                        <strong>Contrôles préliminaires :</strong>
                        - Présence de carburant dans le réservoir
                        - État des durites et raccords
                        - Montée en pression de la pompe (bruit au contact)
                        
                        <strong>Mesure de pression carburant :</strong>
                        - Essence : 2.5 à 4 bars (injection multipoint)
                        - Diesel rampe commune : 200-2000 bars
                        - Utiliser un manomètre adapté`
                },
                {
                    title: '🖥️ Contrôler le système d\'injection électronique',
                    content: `<strong>Composants à contrôler :</strong>
                        
                        <strong>Capteur régime et position (PMH) :</strong>
                        - Résistance : 850 à 2450 Ω à 20°C (selon constructeur)
                        - Signal à l'oscilloscope : sinusoïde régulière
                        - Continuité des fils vers le calculateur : R = 0Ω
                        
                        <strong>Capteur de pression d'air (MAP) :</strong>
                        - Alimentation par calculateur : U = 5V
                        - Signal : À la Pa : U = 5V ; À Pa - 200mb : U = 2.2V
                        
                        <strong>Sonde de température d'eau :</strong>
                        - CTN (Coefficient de Température Négative)
                        - Froid : 2000-3000 Ω ; Chaud : 200-400 Ω
                        
                        <strong>Sonde lambda :</strong>
                        - Oscille entre 0.1V et 0.9V
                        - Fréquence d'oscillation : 1-2 Hz moteur chaud`
                },
                {
                    title: '🌿 Contrôler l\'antipollution',
                    content: `<strong>Vanne EGR (recyclage des gaz d'échappement) :</strong>
                        - Vérifier le libre mouvement
                        - Contrôler l'étanchéité
                        - Nettoyer les dépôts de suie (surtout diesel)
                        
                        <strong>Catalyseur :</strong>
                        - Température de fonctionnement : 400-800°C
                        - Contrôle sonde amont/aval : l'aval doit osciller moins que l'amont
                        - Défaut = code P0420 (efficacité catalyseur)
                        
                        <strong>Filtre à particules (FAP/DPF) :</strong>
                        - Régénération automatique tous les 300-800 km
                        - Symptôme bouché : perte de puissance, mode dégradé
                        - Régénération forcée possible avec outil de diagnostic
                        
                        <strong>AdBlue (SCR) :</strong>
                        - Solution d'urée à 32.5%
                        - Consommation : environ 1L / 1000 km
                        - Ne jamais mélanger avec le carburant !`
                },
                {
                    title: '🔧 Remplacement du filtre à carburant',
                    content: `<strong>Moteur diesel - Procédure :</strong>
                        1. Relever dans la RT : position du filtre, sens de montage
                        2. Préparer le filtre neuf et un récipient pour le vieux gasoil
                        3. Nettoyer le pourtour du filtre
                        4. Fermer le robinet d'alimentation (si présent)
                        5. Dévisser et déposer l'ancien filtre
                        6. Graisser légèrement le joint du filtre neuf
                        7. Reposer le filtre neuf et serrer à la main
                        
                        <strong>Amorçage :</strong>
                        - Actionner la pompe d'amorçage manuelle ou électrique
                        - Purger l'air du circuit (vis de purge sur le filtre)
                        - Vérifier l'absence de fuite
                        - Démarrer et contrôler au ralenti
                        
                        <strong>Fréquence :</strong> Tous les 30 000 à 60 000 km
                        
                        <strong>⚠️ Attention :</strong> Évacuer régulièrement l'eau 
                        (capteur de présence d'eau en bas du filtre)`
                }
            ]
        },
        quiz: [
            {
                question: 'Quelle est la pression typique d\'un système common rail diesel ?',
                options: [
                    '3 à 5 bars',
                    '50 à 100 bars',
                    '200 à 2000 bars',
                    '5000 à 10000 bars'
                ],
                correct: 2,
                explanation: 'Les systèmes common rail fonctionnent à très haute pression (200-2000 bars) pour atomiser finement le carburant et améliorer la combustion.'
            },
            {
                question: 'Comment se comporte une sonde de température type CTN ?',
                options: [
                    'Résistance augmente avec la température',
                    'Résistance diminue avec la température',
                    'Résistance reste constante',
                    'Résistance oscille'
                ],
                correct: 1,
                explanation: 'CTN = Coefficient de Température Négatif. La résistance diminue quand la température augmente (2000-3000Ω froid, 200-400Ω chaud).'
            },
            {
                question: 'Que signifie le code défaut P0420 ?',
                options: [
                    'Ratés d\'allumage',
                    'Sonde lambda défaillante',
                    'Efficacité du catalyseur en dessous du seuil',
                    'Pression de rampe insuffisante'
                ],
                correct: 2,
                explanation: 'P0420 indique que l\'efficacité du catalyseur est en dessous du seuil requis. La sonde aval oscille trop par rapport à l\'amont.'
            },
            {
                question: 'À quelle fréquence la sonde lambda doit-elle osciller moteur chaud ?',
                options: [
                    '0.1-0.2 Hz',
                    '1-2 Hz',
                    '10-20 Hz',
                    '100-200 Hz'
                ],
                correct: 1,
                explanation: 'Une sonde lambda correcte oscille à environ 1-2 Hz (1 à 2 cycles par seconde) entre 0.1V (mélange pauvre) et 0.9V (mélange riche) moteur chaud.'
            },
            {
                question: 'Quelle est la concentration de l\'AdBlue ?',
                options: [
                    'Urée pure 100%',
                    'Urée à 10%',
                    'Urée à 32.5%',
                    'Urée à 50%'
                ],
                correct: 2,
                explanation: 'L\'AdBlue est une solution d\'urée à 32.5% dans l\'eau déminéralisée. Cette concentration est optimale pour la réaction avec les NOx dans le catalyseur SCR.'
            },
            {
                question: 'Pourquoi doit-on évacuer régulièrement l\'eau du filtre diesel ?',
                options: [
                    'Pour économiser du carburant',
                    'Pour éviter la corrosion et le gel en hiver',
                    'Pour améliorer les performances',
                    'C\'est uniquement esthétique'
                ],
                correct: 1,
                explanation: 'L\'eau dans le gasoil cause la corrosion des injecteurs haute pression et peut geler en hiver, bloquant l\'alimentation. Le capteur d\'eau allume un voyant quand la purge est nécessaire.'
            }
        ]
    },
    {
        id: 'auto-9',
        title: 'Système de Suspension',
        icon: '🔄',
        level: 'Intermédiaire',
        duration: '30 min',
        description: 'Contrôlez et remplacez les éléments de suspension automobile.',
        image: '../images/auto-suspension.png',
        content: {
            intro: `La suspension assure le confort des passagers et le maintien du contact roue/sol. 
                    Ses éléments (amortisseurs, ressorts, triangles, rotules) s'usent et doivent être contrôlés régulièrement.`,
            sections: [
                {
                    title: '🔍 Contrôler la suspension',
                    content: `<strong>Rechercher dans la revue technique :</strong>
                        - Type de suspension avant et arrière
                        - Points de contrôle spécifiques
                        
                        <strong>Contrôle visuel :</strong>
                        - État des coupelles et butées d'amortisseurs
                        - Fuites d'huile sur les amortisseurs
                        - État des soufflets de protection
                        - Traces de chocs sur les éléments
                        
                        <strong>Contrôle fonctionnel :</strong>
                        - Test de "pompage" : appuyer sur l'aile, le véhicule doit revenir 
                          en 1 à 2 oscillations maximum
                        - Vérifier l'altitude du véhicule (asymétrie = problème)
                        
                        <strong>Contrôle des articulations :</strong>
                        - Rotules de suspension : jeu détectable main sur l'élément, véhicule levé
                        - Silentblocs : fissures, déformations, jeu
                        - Biellettes de barre stabilisatrice : jeu ou bruit de claquement`
                },
                {
                    title: '🔧 Remplacer un amortisseur arrière',
                    content: `<strong>Préparation :</strong>
                        - Lever et caler le véhicule
                        - Déposer la roue
                        - Caler l'essieu ou le bras de suspension
                        
                        <strong>Déposer :</strong>
                        1. Dévisser la fixation inférieure de l'amortisseur
                        2. Dévisser la fixation supérieure (accès intérieur ou coffre)
                        3. Comprimer éventuellement le ressort si solidaire
                        4. Dégager l'amortisseur
                        
                        <strong>Contrôler :</strong>
                        - Comparer la résistance en compression/détente avec le neuf
                        - Vérifier l'état de la tige (rayures, rouille)
                        - Contrôler butées et coupelles
                        
                        <strong>Reposer :</strong>
                        1. Mettre en place l'amortisseur neuf
                        2. Serrer les fixations aux couples préconisés
                        3. Reposer la roue et abaisser le véhicule
                        4. Contrôler le serrage final en position charge`
                },
                {
                    title: '🔧 Remplacer un amortisseur avant (jambe de force)',
                    content: `<strong>Particularité :</strong> L'amortisseur avant est souvent intégré 
                        à la jambe de force (Mac Pherson) qui supporte aussi le ressort.
                        
                        <strong>Déposer :</strong>
                        1. Lever le véhicule, déposer la roue
                        2. Débrancher le capteur ABS si présent
                        3. Déposer le flexible de frein (l'attacher pour ne pas tirer dessus)
                        4. Déposer la biellette de stabilisateur
                        5. Séparer le pivot des bras de suspension
                        6. Dévisser les fixations supérieures sous le capot
                        7. Déposer l'ensemble jambe de force + ressort
                        
                        <strong>Sur l'établi :</strong>
                        1. Comprimer le ressort avec un compresseur approprié
                        2. Dévisser l'écrou de tige d'amortisseur (clé 6 pans creux)
                        3. Déposer coupelle, butée, soufflet
                        4. Remplacer l'amortisseur et remonter dans l'ordre inverse
                        
                        <strong>⚠️ SÉCURITÉ :</strong> 
                        Un ressort comprimé stocke une énergie considérable. 
                        Toujours utiliser un compresseur de ressort homologué !`
                },
                {
                    title: '📊 Diagnostic des défaillances',
                    content: `<strong>Véhicule instable en ligne droite :</strong>
                        - Amortisseurs usés
                        - Pression de pneus inégale
                        - Géométrie déréglée
                        
                        <strong>Bruit de claquement dans un virage :</strong>
                        - Rotule de direction ou de suspension usée
                        - Biellette de barre stabilisatrice
                        - Silentbloc fissuré
                        
                        <strong>Bruits sourds sur chocs :</strong>
                        - Butées d'amortisseurs
                        - Coupelles supérieures
                        - Silentblocs de bras
                        
                        <strong>Usure anormale des pneus :</strong>
                        - Usure intérieure : carrossage négatif excessif
                        - Usure extérieure : carrossage positif
                        - Usure centrale ou bords : problème de pression
                        
                        <strong>Règle :</strong> Toujours remplacer les amortisseurs par paire (avant ou arrière)`
                }
            ]
        },
        quiz: [
            {
                question: 'Combien d\'oscillations maximum après un test de pompage sur l\'aile ?',
                options: [
                    '0 oscillation',
                    '1 à 2 oscillations',
                    '3 à 4 oscillations',
                    '5 oscillations ou plus'
                ],
                correct: 1,
                explanation: 'Un bon amortisseur stoppe le mouvement en 1 à 2 oscillations. Plus = amortisseur fatigué qui ne freine plus correctement le mouvement du ressort.'
            },
            {
                question: 'Pourquoi doit-on remplacer les amortisseurs par paire ?',
                options: [
                    'Pour faire plus de bénéfice',
                    'Pour maintenir l\'équilibre du comportement du véhicule',
                    'C\'est une obligation légale',
                    'Pour des raisons esthétiques'
                ],
                correct: 1,
                explanation: 'Des amortisseurs d\'âge différent = comportement asymétrique. La tenue de route et le freinage seraient compromis, surtout en virage ou sur sol mouillé.'
            },
            {
                question: 'Quel outil est indispensable pour le remplacement d\'une jambe de force ?',
                options: [
                    'Une clé dynamométrique',
                    'Un compresseur de ressort',
                    'Un pied à coulisse',
                    'Un comparateur'
                ],
                correct: 1,
                explanation: 'Le compresseur de ressort est obligatoire pour manipuler le ressort en toute sécurité. Un ressort comprimé stocke une énergie de plusieurs tonnes.'
            },
            {
                question: 'Que peut indiquer une usure de pneu côté intérieur ?',
                options: [
                    'Pression trop basse',
                    'Pression trop haute',
                    'Carrossage négatif excessif',
                    'Paralélisme parfait'
                ],
                correct: 2,
                explanation: 'Une usure intérieure indique un carrossage négatif excessif : les roues sont inclinées vers l\'intérieur en haut, causant une usure de l\'épaule intérieure.'
            },
            {
                question: 'Un bruit de claquement dans les virages évoque généralement :',
                options: [
                    'Un problème de batterie',
                    'Une rotule ou biellette usée',
                    'Un manque de carburant',
                    'Un problème d\'allumage'
                ],
                correct: 1,
                explanation: 'Les claquements en virage sont typiques d\'une articulation (rotule de direction ou suspension, biellette de stabilisateur) qui a pris du jeu.'
            }
        ]
    },
    {
        id: 'auto-10',
        title: 'Train Roulant & Pneumatiques',
        icon: '🛞',
        level: 'Intermédiaire',
        duration: '35 min',
        description: 'Maîtrisez les pneumatiques, la géométrie du train roulant et les roulements.',
        image: '../images/auto-wheels.png',
        content: {
            intro: `Le train roulant comprend les pneumatiques, les jantes, les roulements et la géométrie. 
                    Son bon état est essentiel pour la sécurité, le confort et la durée de vie des pneus.`,
            sections: [
                {
                    title: '🛞 Contrôler les pneumatiques',
                    content: `<strong>Rechercher sur le flanc du pneu :</strong>
                        - Dimensions : ex. 205/55 R16 91V
                        - 205 = largeur en mm
                        - 55 = rapport hauteur/largeur en %
                        - R = radial, 16 = diamètre jante en pouces
                        - 91 = indice de charge, V = indice de vitesse
                        
                        <strong>Contrôles visuels :</strong>
                        - Profondeur de sculpture : minimum légal 1.6mm (témoins d'usure)
                        - État général : coupures, hernies, corps étrangers
                        - Usure homogène ou asymétrique
                        - Date de fabrication (DOT) : pneu > 5 ans à surveiller
                        
                        <strong>Pression de gonflage :</strong>
                        - Toujours contrôler à froid
                        - Se référer à l'étiquette constructeur (portière, trappe à carburant)
                        - Augmenter de 0.2-0.3 bar si véhicule chargé
                        
                        <strong>Usures caractéristiques :</strong>
                        - Centre usé = surgonflage
                        - Bords usés = sous-gonflage
                        - Un seul bord usé = défaut de géométrie`
                },
                {
                    title: '🔧 Remplacement d\'un pneumatique',
                    content: `<strong>Démontage (machine à pneus) :</strong>
                        1. Dégonfler complètement le pneu
                        2. Décoller les talons du pneu (détalonnage)
                        3. Monter la roue sur la machine
                        4. Engager le bec démonte-pneu et faire tourner
                        5. Retirer le pneu de la jante
                        
                        <strong>Montage :</strong>
                        1. Lubrifier les talons avec du lubrifiant pneu
                        2. Positionner le sens de roulement (flèche sur le flanc)
                        3. Engager le premier talon, puis le second
                        4. Gonfler jusqu'au "claquement" de mise en place des talons
                        5. Ajuster à la pression préconisée
                        6. Monter une valve neuve si nécessaire
                        
                        <strong>Couples de serrage vis de roue (indicatifs) :</strong>
                        - M12 x 1.5 : 90-110 Nm
                        - M14 x 1.5 : 110-130 Nm
                        - Toujours serrer en croix (étoile)`
                },
                {
                    title: '⚖️ Équilibrage de roue',
                    content: `<strong>Pourquoi équilibrer ?</strong>
                        Un balourd (masse inégalement répartie) crée des vibrations :
                        - Volant qui tremble à certaines vitesses
                        - Usure prématurée des roulements et des pneus
                        - Inconfort de conduite
                        
                        <strong>Types d'équilibrage :</strong>
                        - Statique : une masse sur un seul plan
                        - Dynamique : masses sur les deux faces de la jante
                        
                        <strong>Procédure :</strong>
                        1. Nettoyer parfaitement la jante
                        2. Retirer les anciennes masses
                        3. Monter la roue sur l'équilibreuse
                        4. Lancer la mesure du balourd
                        5. Positionner les masses aux endroits indiqués
                        6. Vérifier par un nouveau lancement
                        
                        <strong>Types de masses :</strong>
                        - À frapper (acier pour jantes tôle)
                        - Adhésives (aluminium, esthétique sur jantes alu)`
                },
                {
                    title: '📐 Géométrie du train avant',
                    content: `<strong>Préparer le contrôle :</strong>
                        - Vérifier la pression des pneus
                        - Le véhicule doit être à vide (ou charge normalisée)
                        - Mettre le volant en position centrée
                        - Vérifier l'absence de jeu dans les articulations
                        
                        <strong>Angles principaux :</strong>
                        
                        <strong>Parallélisme (pincement/ouverture) :</strong>
                        - Angle entre les roues vues de dessus
                        - Réglable sur biellettes de direction
                        - Valeur typique : 0 à +2 mm (pincement)
                        
                        <strong>Carrossage :</strong>
                        - Inclinaison de la roue vue de face
                        - Réglable sur certains véhicules
                        - Valeur typique : -0.5° à +0.5°
                        
                        <strong>Chasse :</strong>
                        - Inclinaison de l'axe de pivot vue de côté
                        - Rappel du volant en ligne droite
                        - Généralement non réglable
                        
                        <strong>Symptômes de défauts :</strong>
                        - Parallélisme : usure asymétrique, véhicule qui tire
                        - Carrossage : usure sur un bord du pneu
                        - Chasse : volant qui ne revient pas`
                },
                {
                    title: '🔩 Remplacement d\'un roulement de roue',
                    content: `<strong>Symptômes de défaillance :</strong>
                        - Grondement sourd qui augmente avec la vitesse
                        - Bruit qui varie dans les virages
                        - Jeu détectable roue levée (mouvement haut/bas)
                        - Roulement chaud après roulage
                        
                        <strong>Procédure (roulement intégré au moyeu) :</strong>
                        1. Lever le véhicule, déposer la roue
                        2. Déposer l'étrier de frein (le suspendre)
                        3. Déposer le disque de frein
                        4. Dévisser l'écrou de moyeu
                        5. Déposer le capteur ABS
                        6. Dévisser les vis du porte-fusée ou du moyeu
                        7. Extraire le roulement usé (presse ou extracteur)
                        8. Nettoyer les portées
                        9. Emmancher le roulement neuf à la presse
                        10. Remonter dans l'ordre inverse
                        
                        <strong>Couples importants :</strong>
                        - Écrou de moyeu : 175-280 Nm selon véhicule
                        - Toujours utiliser un écrou neuf (auto-freiné)
                        
                        <strong>Attention :</strong> Ne jamais frapper directement sur le roulement !`
                }
            ]
        },
        quiz: [
            {
                question: 'Quelle est la profondeur minimale légale de sculpture d\'un pneu ?',
                options: [
                    '0.5 mm',
                    '1.6 mm',
                    '3 mm',
                    '5 mm'
                ],
                correct: 1,
                explanation: 'La profondeur légale minimale est de 1.6 mm. Des témoins d\'usure (petits ponts dans les rainures) indiquent quand cette limite est atteinte.'
            },
            {
                question: 'Que signifie "205/55 R16 91V" sur un pneu ?',
                options: [
                    'Date de fabrication et numéro de série',
                    'Largeur 205mm, rapport 55%, radial, jante 16\", charge 91, vitesse V',
                    'Référence constructeur interne',
                    'Pression de gonflage recommandée'
                ],
                correct: 1,
                explanation: '205=largeur en mm, 55=rapport hauteur/largeur en %, R=radial, 16=diamètre jante en pouces, 91=indice de charge, V=indice de vitesse (240 km/h max).'
            },
            {
                question: 'Pourquoi contrôler la pression des pneus à froid ?',
                options: [
                    'Par habitude',
                    'Parce que l\'air chaud est plus dense',
                    'Parce que la pression augmente avec la température et fausserait la mesure',
                    'Pour économiser de l\'air'
                ],
                correct: 2,
                explanation: 'L\'air se dilate avec la chaleur. Un pneu roulant depuis 20 minutes peut afficher 0.3 bar de plus. Le contrôle à froid donne la vraie pression de référence.'
            },
            {
                question: 'Quel symptôme indique un roulement de roue défaillant ?',
                options: [
                    'Pédale de frein molle',
                    'Grondement sourd qui varie dans les virages',
                    'Voyant moteur allumé',
                    'Consommation excessive de carburant'
                ],
                correct: 1,
                explanation: 'Un roulement usé produit un grondement sourd qui augmente avec la vitesse. Dans les virages, le bruit varie car le poids se transfère sur un côté.'
            },
            {
                question: 'Comment doit-on serrer les écrous de roue ?',
                options: [
                    'Un à un dans le sens horaire',
                    'En croix (étoile) au couple préconisé',
                    'À fond avec une barre de rallonge',
                    'À la main uniquement'
                ],
                correct: 1,
                explanation: 'Le serrage en croix (ou étoile) répartit uniformément la pression sur le disque. Le couple (90-130 Nm typique) évite le voilement et garantit la tenue.'
            },
            {
                question: 'Que contrôle le parallélisme ?',
                options: [
                    'L\'inclinaison de la roue vue de face',
                    'L\'angle entre les roues vues de dessus',
                    'La pression des pneus',
                    'L\'usure des plaquettes'
                ],
                correct: 1,
                explanation: 'Le parallélisme (ou pincement) mesure l\'angle entre les roues vues de dessus. Un mauvais réglage cause une usure asymétrique et fait tirer le véhicule.'
            }
        ]
    },
    {
        id: 'auto-11',
        title: 'Métrologie & Outillage Spécialisé',
        icon: '📏',
        level: 'Avancé',
        duration: '25 min',
        description: 'Maîtrisez les instruments de mesure professionnels en mécanique.',
        image: '../images/auto-tools.png',
        content: {
            intro: `La métrologie est l'art de la mesure précise. Un bon technicien doit savoir utiliser 
                    pied à coulisse, micromètre et comparateur pour diagnostiquer l'usure des pièces.`,
            sections: [
                {
                    title: '📏 Le pied à coulisse',
                    content: `<strong>Caractéristiques :</strong>
                        - Précision : 0.1 mm (vernier) ou 0.01 mm (digital)
                        - Capacité : 150 mm à 300 mm
                        - Mesures : extérieures, intérieures, profondeur
                        
                        <strong>Lecture du vernier :</strong>
                        1. Lire les mm entiers sur la règle principale (avant le zéro du vernier)
                        2. Chercher la graduation du vernier qui s'aligne parfaitement avec la règle
                        3. Ajouter cette valeur (dixièmes de mm) aux mm entiers
                        
                        <strong>Utilisation :</strong>
                        - Mesure extérieure : serrer doucement sur la pièce
                        - Mesure intérieure : écarter le bec intérieur
                        - Profondeur : utiliser la tige de profondeur
                        
                        <strong>Entretien :</strong>
                        - Nettoyer après usage
                        - Vérifier le zéro régulièrement
                        - Stocker dans son étui
                        
                        <strong>Applications en mécanique :</strong>
                        - Épaisseur des disques de frein
                        - Diamètre des pistons
                        - Profondeur de gorges`
                },
                {
                    title: '🔬 Le micromètre',
                    content: `<strong>Caractéristiques :</strong>
                        - Précision : 0.01 mm (1/100e de mm)
                        - Plage : généralement 25 mm (0-25, 25-50, 50-75, etc.)
                        - Principe : vis micrométrique au pas de 0.5 mm
                        
                        <strong>Lecture :</strong>
                        1. Lire les mm sur le canon (ligne horizontale)
                        2. Lire les demi-mm sous la ligne
                        3. Lire les centièmes sur le tambour gradué
                        4. Additionner les trois valeurs
                        
                        <strong>Utilisation :</strong>
                        1. Nettoyer les faces de mesure et la pièce
                        2. Fermer le micromètre sur la pièce
                        3. Tourner UNIQUEMENT avec le friction (pas le tambour)
                        4. Lire quand le friction patine (pression constante)
                        
                        <strong>Applications :</strong>
                        - Diamètre des manetons et tourillons du vilebrequin
                        - Ovalisation et conicité
                        - Épaisseur des joints`
                },
                {
                    title: '🎯 Le comparateur',
                    content: `<strong>Types :</strong>
                        - Comparateur à cadran (aiguille)
                        - Comparateur digital
                        - Course : 5 mm, 10 mm, 25 mm
                        
                        <strong>Précision :</strong>
                        - 0.01 mm par graduation
                        - 1 tour complet d'aiguille = 1 mm
                        
                        <strong>Utilisation :</strong>
                        1. Fixer le comparateur sur un support magnétique stable
                        2. Mettre en précharge (enfoncer le palpeur de 1-2 mm)
                        3. Tourner le cadran pour mettre le zéro sous l'aiguille
                        4. Déplacer la pièce ou l'outil et lire la variation
                        
                        <strong>Applications communes :</strong>
                        - Voile de disque de frein (maxi 0.1 mm)
                        - Faux-rond d'arbre (vilebrequin, arbre à cames)
                        - Dépassement des chemises
                        - Jeu axial du vilebrequin
                        - Contrôle d'alésage (avec comparateur d'alésage)`
                },
                {
                    title: '🔋 Le multimètre',
                    content: `<strong>Fonctions principales :</strong>
                        - Voltmètre : mesure la tension (V)
                        - Ampèremètre : mesure le courant (A)
                        - Ohmmètre : mesure la résistance (Ω)
                        
                        <strong>Mesures en automobile :</strong>
                        
                        <strong>Tension batterie :</strong>
                        - Repos : 12.6V (100%), 12.4V (75%), 12.2V (50%)
                        - Démarrage : >9.6V minimum
                        - Charge (moteur tournant) : 13.8-14.4V
                        
                        <strong>Résistance :</strong>
                        - Continuité fil : 0Ω (ou très faible)
                        - Résistance de bobine primaire : 0.1-1Ω
                        - Résistance de bobine secondaire : 9000-15000Ω
                        - Capteur PMH inductif : 850-2450Ω
                        
                        <strong>Contrôler un relais :</strong>
                        1. Identifier les bornes (30, 85, 86, 87)
                        2. Mesurer résistance bobine (85-86) : 50-100Ω
                        3. Mesurer contact ouvert (30-87) : infini
                        4. Alimenter la bobine : clic audible
                        5. Mesurer contact fermé : 0Ω
                        
                        <strong>⚠️ Précautions :</strong>
                        - Ne jamais mesurer l'intensité en parallèle
                        - Calibrage adapté à la mesure
                        - Couper le contact avant mesure de résistance`
                },
                {
                    title: '📋 Fiche de relevé des contrôles',
                    content: `<strong>Utilité :</strong>
                        Une fiche de relevé permet de noter et comparer ses mesures 
                        avec les valeurs constructeur de manière méthodique.
                        
                        <strong>Contenus typiques :</strong>
                        - Identification véhicule (type, immatriculation, km)
                        - Date et nom du technicien
                        - Valeurs préconisées par le constructeur
                        - Valeurs mesurées pour chaque point
                        - Diagnostic (conforme/non conforme)
                        - Actions correctives préconisées
                        
                        <strong>Points de contrôle fréquents :</strong>
                        
                        | Élément | Valeur neuve | Mini/Maxi |
                        |---------|--------------|-----------|
                        | Épaisseur disque AV | 22 mm | 20 mm |
                        | Épaisseur plaquette | 10 mm | 2 mm |
                        | Compression cylindre | 12 bar | 10 bar |
                        | Voile disque | 0 mm | 0.1 mm |
                        | Jeu soupape ADM | 0.20 mm | ±0.05 mm |
                        
                        <strong>Conseil :</strong> 
                        Photocopiez vos fiches vierges pour les réutiliser !`
                }
            ]
        },
        quiz: [
            {
                question: 'Quelle est la précision typique d\'un pied à coulisse à vernier ?',
                options: [
                    '1 mm',
                    '0.1 mm',
                    '0.001 mm',
                    '0.0001 mm'
                ],
                correct: 1,
                explanation: 'Un pied à coulisse à vernier classique a une précision de 0.1 mm (1/10e de mm). Les versions digitales atteignent 0.01 mm.'
            },
            {
                question: 'Pourquoi utiliser le friction du micromètre et non le tambour ?',
                options: [
                    'Pour aller plus vite',
                    'Pour appliquer une pression de mesure constante',
                    'Pour ne pas rayer la pièce',
                    'C\'est une question de préférence'
                ],
                correct: 1,
                explanation: 'Le friction (embout moleté au bout) patine à pression constante, garantissant une mesure reproductible. Serrer avec le tambour risque de fausser la mesure ou d\'abîmer la pièce.'
            },
            {
                question: 'Quelle est la valeur maximum de voile acceptable pour un disque de frein ?',
                options: [
                    '0.01 mm',
                    '0.1 mm',
                    '1 mm',
                    '5 mm'
                ],
                correct: 1,
                explanation: 'Le voile maximum d\'un disque de frein est généralement de 0.1 mm. Au-delà, il provoque des vibrations au freinage et doit être rectifié ou remplacé.'
            },
            {
                question: 'Quelle tension doit délivrer un alternateur moteur tournant ?',
                options: [
                    '11.5-12.5V',
                    '12.5-13.5V',
                    '13.8-14.4V',
                    '15.0-16.0V'
                ],
                correct: 2,
                explanation: 'Un alternateur sain produit 13.8 à 14.4V moteur tournant. Moins = sous-charge de la batterie. Plus = surcharge risquant d\'endommager la batterie.'
            },
            {
                question: 'Quelle résistance mesure-t-on sur un fil électrique en bon état ?',
                options: [
                    'Infini',
                    '0Ω (ou très faible)',
                    '100Ω',
                    '1000Ω'
                ],
                correct: 1,
                explanation: 'Un fil électrique sans coupure présente une résistance quasi nulle (0Ω). Une résistance infinie indique un fil coupé, une valeur intermédiaire une mauvaise connexion.'
            },
            {
                question: 'Combien vaut une graduation de comparateur ?',
                options: [
                    '1 mm',
                    '0.1 mm',
                    '0.01 mm',
                    '0.001 mm'
                ],
                correct: 2,
                explanation: 'Une graduation de comparateur standard vaut 0.01 mm (1/100e de mm). Un tour complet d\'aiguille représente 1 mm.'
            }
        ]
    }
];

// ===== Rendu dynamique des leçons =====
document.addEventListener('DOMContentLoaded', function () {
    const lessonsGrid = document.querySelector('.lessons-grid');
    if (!lessonsGrid) return;

    lessonsGrid.innerHTML = autoLessons.map((lesson, index) => `
        <article class="lesson-card" data-lesson="${lesson.id}">
            <div class="lesson-number">${String(index + 1).padStart(2, '0')}</div>
            <div class="lesson-content">
                <div class="lesson-header">
                    <span class="lesson-icon">${lesson.icon}</span>
                    <div class="lesson-meta">
                        <span class="lesson-level">${lesson.level}</span>
                        <span class="lesson-duration">⏱️ ${lesson.duration}</span>
                    </div>
                </div>
                <h3 class="lesson-title">${lesson.title}</h3>
                <p class="lesson-desc">${lesson.description}</p>
                <div class="lesson-tags">
                    <span class="tag">📚 ${lesson.content.sections.length} sections</span>
                    <span class="tag">📝 ${lesson.quiz.length} questions</span>
                </div>
            </div>
            <div class="lesson-actions">
                <button class="btn-favorite" onclick="toggleFavorite('${lesson.id}', '${lesson.title}', 'auto')" title="Ajouter aux favoris">
                    <span class="heart">🤍</span>
                </button>
                <button class="btn-start" onclick="openLesson('${lesson.id}')">
                    Commencer
                    <span class="arrow">→</span>
                </button>
            </div>
        </article>
    `).join('');

    // Mettre à jour l'état des favoris
    updateFavoriteButtons();
});

// ===== Fonction pour ouvrir une leçon =====
function openLesson(lessonId) {
    const lesson = autoLessons.find(l => l.id === lessonId);
    if (!lesson) return;

    const modal = document.getElementById('lessonModal');
    const modalBody = document.getElementById('lessonBody');

    modalBody.innerHTML = `
        <div class="lesson-full">
            <div class="lesson-hero">
                <img src="${lesson.image}" alt="${lesson.title}" class="lesson-image" onerror="this.style.display='none'">
                <div class="lesson-hero-content">
                    <span class="lesson-badge">${lesson.level}</span>
                    <h2>${lesson.icon} ${lesson.title}</h2>
                    <p class="lesson-intro">${lesson.content.intro}</p>
                </div>
            </div>
            
            <div class="lesson-sections">
                ${lesson.content.sections.map(section => `
                    <div class="lesson-section">
                        <h3>${section.title}</h3>
                        <div class="section-content">${section.content.replace(/\n/g, '<br>')}</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="lesson-quiz">
                <h3>📝 Quiz - Testez vos connaissances</h3>
                <p class="quiz-info">${lesson.quiz.length} questions pour valider cette leçon</p>
                <div id="quizContainer"></div>
                <button class="btn btn-primary" onclick="startQuiz('${lesson.id}')">Commencer le quiz</button>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ===== Quiz amélioré avec explications =====
let currentQuiz = null;
let currentQuestionIndex = 0;
let quizScore = 0;
let userAnswers = [];

function startQuiz(lessonId) {
    const lesson = autoLessons.find(l => l.id === lessonId);
    if (!lesson) return;

    currentQuiz = lesson.quiz;
    currentQuestionIndex = 0;
    quizScore = 0;
    userAnswers = [];

    showQuestion();
}

function showQuestion() {
    const container = document.getElementById('quizContainer');
    const question = currentQuiz[currentQuestionIndex];

    container.innerHTML = `
        <div class="quiz-question active">
            <div class="question-header">
                <span class="question-number">Question ${currentQuestionIndex + 1}/${currentQuiz.length}</span>
                <div class="question-progress">
                    <div class="progress-fill" style="width: ${((currentQuestionIndex) / currentQuiz.length) * 100}%"></div>
                </div>
            </div>
            <h4>${question.question}</h4>
            <div class="quiz-options">
                ${question.options.map((option, i) => `
                    <button class="quiz-option" onclick="selectAnswer(${i})">
                        <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                        <span class="option-text">${option}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    // Cacher le bouton "Commencer le quiz"
    const startBtn = container.parentElement.querySelector('.btn-primary');
    if (startBtn) startBtn.style.display = 'none';
}

function selectAnswer(answerIndex) {
    const question = currentQuiz[currentQuestionIndex];
    const isCorrect = answerIndex === question.correct;

    if (isCorrect) quizScore++;
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        selected: answerIndex,
        correct: question.correct,
        isCorrect: isCorrect
    });

    // Afficher le feedback
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, i) => {
        opt.disabled = true;
        if (i === question.correct) {
            opt.classList.add('correct');
        } else if (i === answerIndex && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });

    // Afficher l'explication
    const container = document.getElementById('quizContainer');
    const explanationDiv = document.createElement('div');
    explanationDiv.className = `quiz-explanation ${isCorrect ? 'correct' : 'incorrect'}`;
    explanationDiv.innerHTML = `
        <div class="explanation-header">
            ${isCorrect ? '✅ Correct !' : '❌ Incorrect'}
        </div>
        <p>${question.explanation}</p>
        <button class="btn btn-primary" onclick="nextQuestion()">
            ${currentQuestionIndex < currentQuiz.length - 1 ? 'Question suivante →' : 'Voir les résultats'}
        </button>
    `;
    container.appendChild(explanationDiv);
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex >= currentQuiz.length) {
        showResults();
    } else {
        showQuestion();
    }
}

function showResults() {
    const container = document.getElementById('quizContainer');
    const percentage = Math.round((quizScore / currentQuiz.length) * 100);

    let message, emoji;
    if (percentage >= 80) {
        message = 'Excellent ! Vous maîtrisez ce sujet !';
        emoji = '🏆';
    } else if (percentage >= 60) {
        message = 'Bien ! Quelques révisions recommandées.';
        emoji = '👍';
    } else {
        message = 'Continuez à apprendre, vous progressez !';
        emoji = '📚';
    }

    container.innerHTML = `
        <div class="quiz-results">
            <div class="results-header">
                <span class="results-emoji">${emoji}</span>
                <h3>Résultats du Quiz</h3>
            </div>
            <div class="results-score">
                <div class="score-circle">
                    <span class="score-number">${quizScore}</span>
                    <span class="score-total">/${currentQuiz.length}</span>
                </div>
                <div class="score-percentage">${percentage}%</div>
            </div>
            <p class="results-message">${message}</p>
            <div class="results-actions">
                <button class="btn btn-secondary" onclick="startQuiz('${currentQuiz[0].id ? currentQuiz[0].id.split('-')[0] + '-' + currentQuiz[0].id.split('-')[1] : 'auto-1'}')">
                    🔄 Refaire le quiz
                </button>
                <button class="btn btn-primary" onclick="closeLesson()">
                    ✓ Terminer
                </button>
            </div>
        </div>
    `;

    // Marquer la leçon comme complétée
    markLessonComplete();
}

function markLessonComplete() {
    // Sauvegarder la progression
    const progress = JSON.parse(localStorage.getItem('mecapro_progress') || '{}');
    if (!progress.auto) progress.auto = { completed: [] };

    const lessonId = currentQuiz[0] ? `auto-${currentQuestionIndex}` : 'auto-1';
    if (!progress.auto.completed.includes(lessonId)) {
        progress.auto.completed.push(lessonId);
    }

    localStorage.setItem('mecapro_progress', JSON.stringify(progress));
}

function closeLesson() {
    const modal = document.getElementById('lessonModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Fermer avec Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLesson();
});
