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
