// ===== Données du Module Camion - Version Professionnelle =====

const camionLessons = [
    {
        id: 'camion-1',
        title: 'Moteur Diesel Poids Lourd',
        icon: '🚛',
        level: 'Intermédiaire',
        duration: '35 min',
        description: 'Maîtrisez le fonctionnement des moteurs diesel de camion : injection, turbo, EGR.',
        content: {
            intro: `Les moteurs diesel poids lourds sont conçus pour la durabilité et le couple. 
                    Avec des cylindrées de 6 à 16 litres et des couples dépassant 2000 Nm, 
                    ils nécessitent une compréhension approfondie pour un entretien efficace.`,
            sections: [
                {
                    title: '⚙️ Caractéristiques moteur PL',
                    content: `<strong>Spécifications typiques :</strong>
                        - Cylindrée : 6L (distribution) à 16L (convoi)
                        - Puissance : 200-600 ch
                        - Couple : 800-2500 Nm à 1000-1400 tr/min
                        - Compression : 16:1 à 18:1
                        
                        <strong>Architecture :</strong>
                        - 6 cylindres en ligne (le plus courant)
                        - V8 (américain, certains européens)
                        - Bloc fonte ou CGI (fonte vermiculaire)
                        - Pistons en acier ou aluminium renforcé`
                },
                {
                    title: '💨 Système d\'injection',
                    content: `<strong>Common Rail haute pression :</strong>
                        - Pression : 1800-2500 bars
                        - Pompe haute pression à pistons radiaux
                        - Rail commun avec capteur de pression
                        - Injecteurs piézoélectriques (réponse 0.1ms)
                        
                        <strong>Phases d'injection :</strong>
                        1. <strong>Pré-injection</strong> : Prépare la combustion
                        2. <strong>Injection principale</strong> : Puissance
                        3. <strong>Post-injection</strong> : Régénération FAP
                        
                        <strong>Diagnostic :</strong>
                        - Retour injecteur : max 80 ml/min au ralenti
                        - Test d'équilibrage cylindres
                        - Pression rail à surveiller`
                },
                {
                    title: '🔄 Turbo et refroidissement',
                    content: `<strong>Turbocompresseur :</strong>
                        - Turbo à géométrie variable (VGT)
                        - Pression de suralimentation : 1.5-3 bars
                        - Vitesse rotor : jusqu'à 150 000 tr/min
                        - Refroidi par eau et huile
                        
                        <strong>Intercooler :</strong>
                        - Air-air ou air-eau
                        - Réduit température air de 150°C à 50°C
                        - Augmente densité = plus de puissance
                        
                        <strong>Circuit de refroidissement :</strong>
                        - Thermostat 80-90°C
                        - Ventilateur viscocoupleur ou électrique
                        - Échangeur huile/eau
                        - Capacité : 30-50 litres`
                },
                {
                    title: '🌱 Dépollution',
                    content: `<strong>EGR (Recirculation Gaz d'Échappement) :</strong>
                        - Réduit température de combustion
                        - Diminue NOx de 30-40%
                        - Refroidisseur EGR dédié
                        
                        <strong>FAP (Filtre à Particules) :</strong>
                        - Retient 95%+ des suies
                        - Régénération à 600°C
                        - Capteur pression différentielle
                        
                        <strong>SCR (Réduction Catalytique Sélective) :</strong>
                        - Injection d'AdBlue (urée 32.5%)
                        - Consommation : 3-5% du gasoil
                        - Réduit NOx de 80-90%
                        - Capteurs NOx amont et aval
                        
                        <strong>Normes :</strong>
                        Euro 6d : NOx < 80 mg/km, particules < 4.5 mg/km`
                }
            ]
        },
        quiz: [
            {
                question: 'Quelle pression atteint un système Common Rail moderne de poids lourd ?',
                options: ['200-500 bars', '800-1200 bars', '1800-2500 bars', '3000-4000 bars'],
                correct: 2,
                explanation: 'Les systèmes Common Rail PL atteignent 1800 à 2500 bars pour pulvériser finement le carburant et optimiser la combustion, réduisant émissions et consommation.'
            },
            {
                question: 'Quel est le rôle de l\'AdBlue dans le système SCR ?',
                options: ['Lubrifier les injecteurs', 'Réduire les NOx de 80-90%', 'Nettoyer le FAP', 'Refroidir le turbo'],
                correct: 1,
                explanation: 'L\'AdBlue (urée à 32.5%) est injectée dans l\'échappement. Elle se transforme en ammoniac qui réagit avec les NOx pour former de l\'azote et de l\'eau inoffensifs.'
            },
            {
                question: 'À quelle température se fait la régénération du FAP ?',
                options: ['200-300°C', '400-500°C', '600°C environ', '800-900°C'],
                correct: 2,
                explanation: 'La régénération du FAP brûle les suies à environ 600°C. Cette température est atteinte par post-injection qui fait monter la température des gaz d\'échappement.'
            },
            {
                question: 'Quel couple peut développer un moteur 13L de poids lourd ?',
                options: ['500-800 Nm', '1000-1500 Nm', '2000-2500 Nm', '3500-4000 Nm'],
                correct: 2,
                explanation: 'Un moteur 13L moderne développe typiquement 2000 à 2500 Nm de couple à bas régime (1000-1400 tr/min), permettant de tracter de lourdes charges.'
            },
            {
                question: 'Quelle est la consommation typique d\'AdBlue par rapport au gasoil ?',
                options: ['0.5-1%', '3-5%', '10-15%', '20-25%'],
                correct: 1,
                explanation: 'La consommation d\'AdBlue représente 3 à 5% de celle du gasoil. Pour 100L de gasoil, comptez 3 à 5L d\'AdBlue.'
            }
        ]
    },
    {
        id: 'camion-2',
        title: 'Système Pneumatique',
        icon: '💨',
        level: 'Avancé',
        duration: '40 min',
        description: 'Comprenez le circuit d\'air comprimé : compresseur, réservoirs, valves de freinage.',
        content: {
            intro: `Le système pneumatique est le cœur du freinage et des équipements auxiliaires des poids lourds. 
                    Une pression de 8-12 bars alimente les freins, la suspension, l'embrayage 
                    et divers accessoires. Sa maîtrise est essentielle pour la sécurité.`,
            sections: [
                {
                    title: '🔧 Production d\'air',
                    content: `<strong>Compresseur :</strong>
                        - Type : Piston (mono ou bicylindre)
                        - Débit : 300-600 L/min
                        - Entraînement : Pignon sur distribution
                        - Refroidissement : Air ou liquide
                        
                        <strong>Régulation :</strong>
                        - Régulateur de pression : coupe à 12 bars
                        - Soupape de décharge : évite surpression
                        - Indicateur de colmatage filtre
                        
                        <strong>Traitement de l\'air :</strong>
                        - Dessiccateur : absorbe l\'humidité
                        - Cartouche régénérable automatiquement
                        - Durée de vie : 2-3 ans ou 300 000 km`
                },
                {
                    title: '🛢️ Stockage et distribution',
                    content: `<strong>Réservoirs :</strong>
                        - Circuit 1 : Essieu avant (rouge)
                        - Circuit 2 : Essieu arrière (jaune)
                        - Circuit 3 : Remorque (bleu)
                        - Circuit 4 : Accessoires (vert)
                        - Pression nominale : 8-10 bars
                        
                        <strong>Valve 4 voies :</strong>
                        - Isole chaque circuit en cas de fuite
                        - Priorité aux circuits de freinage
                        - Pression minimale garantie par circuit
                        
                        <strong>Purge :</strong>
                        - Automatique (purgeur sous réservoir)
                        - Manuelle : vis de purge quotidienne conseillée`
                },
                {
                    title: '🛑 Freinage pneumatique',
                    content: `<strong>Valve de frein (pédale) :</strong>
                        - Double circuit de sécurité
                        - Pression proportionnelle à l'appui
                        - Signal électrique pour EBS
                        
                        <strong>Cylindres de frein :</strong>
                        - Membrane à ressort (type 24/30)
                        - Chiffre = surface en pouces²
                        - Course utile : 38-57mm
                        
                        <strong>Frein de parking :</strong>
                        - Ressorts accumulateurs
                        - Armés par pression (8 bars)
                        - Désarmés quand pression chute = sécurité
                        
                        <strong>Freinage automatique remorque :</strong>
                        - Têtes d'accouplement : rouge (alim) + jaune (commande)
                        - Rupture = freinage d'urgence remorque`
                },
                {
                    title: '⚙️ EBS et diagnostic',
                    content: `<strong>EBS (Electronic Braking System) :</strong>
                        - Modulateurs électropneumatiques
                        - Capteurs de vitesse par roue
                        - Répartition électronique de la charge
                        - Temps de réponse : 0.1s vs 0.4s pneumatique
                        
                        <strong>Fonctions intégrées :</strong>
                        - ABS : Anti-blocage
                        - ASR : Anti-patinage
                        - ESP : Stabilité
                        - Hill Holder : Aide au démarrage
                        
                        <strong>Diagnostic :</strong>
                        - Pression circuit : mini 6 bars pour démarrer
                        - Test étanchéité : chute < 0.3 bar/min
                        - Course cylindres : max constructeur
                        - Codes défaut via prise diagnostic`
                }
            ]
        },
        quiz: [
            {
                question: 'Quelle pression nominale trouve-t-on dans un circuit pneumatique PL ?',
                options: ['2-4 bars', '8-12 bars', '20-25 bars', '50-60 bars'],
                correct: 1,
                explanation: 'Le circuit pneumatique fonctionne à 8-12 bars. Le compresseur charge jusqu\'à 12 bars et le régulateur le met en décharge.'
            },
            {
                question: 'Que se passe-t-il si la pression pneumatique chute brutalement ?',
                options: ['Rien', 'Le moteur cale', 'Les freins de parking s\'enclenchent', 'La direction se bloque'],
                correct: 2,
                explanation: 'Les freins de parking fonctionnent par ressorts qui sont maintenus comprimés par la pression. Si elle chute, les ressorts se détendent et bloquent les roues = sécurité.'
            },
            {
                question: 'Quel est le rôle du dessiccateur dans le circuit d\'air ?',
                options: ['Comprimer l\'air', 'Absorber l\'humidité', 'Réguler la pression', 'Lubrifier les valves'],
                correct: 1,
                explanation: 'Le dessiccateur contient un agent absorbant (silicagel) qui capture l\'humidité de l\'air comprimé, évitant gel et corrosion du circuit.'
            },
            {
                question: 'Quelle chute de pression maximale est acceptable en 1 minute ?',
                options: ['0.3 bar', '1 bar', '2 bars', '3 bars'],
                correct: 0,
                explanation: 'Le test d\'étanchéité autorise une chute maximale de 0.3 bar par minute. Au-delà, il y a une fuite significative à localiser.'
            },
            {
                question: 'Que signifie la notation "24/30" sur un cylindre de frein ?',
                options: ['Diamètre et longueur', 'Surface membrane et ressort en pouces²', 'Pression min et max', 'Numéro de série'],
                correct: 1,
                explanation: 'Le premier chiffre (24) indique la surface de la membrane de freinage en pouces², le second (30) celle du ressort de parking. Plus grand = plus de force.'
            }
        ]
    },
    {
        id: 'camion-3',
        title: 'Boîte de Vitesses PL',
        icon: '⚙️',
        level: 'Intermédiaire',
        duration: '30 min',
        description: 'Découvrez les boîtes manuelles, automatisées et les ralentisseurs.',
        content: {
            intro: `Les boîtes de vitesses poids lourds sont conçues pour transmettre des couples 
                    énormes tout en offrant une large plage de rapports. Les systèmes automatisés 
                    modernes améliorent le confort et réduisent la consommation.`,
            sections: [
                {
                    title: '🔢 Boîtes manuelles',
                    content: `<strong>Configuration :</strong>
                        - 9 à 16 rapports
                        - Boîte principale + gamme (range) + rapide/lent (splitter)
                        - Synchroniseurs double cône
                        
                        <strong>Exemple ZF 16S :</strong>
                        - 4 rapports de base × 2 (range) × 2 (splitter) = 16
                        - Couple admissible : 2300-3000 Nm
                        - Huile : 75W-80 ou SAE40, 12-15L
                        
                        <strong>Commande :</strong>
                        - Levier H standard
                        - Range par levier auxiliaire
                        - Splitter par contacteur sur pommeau`
                },
                {
                    title: '🤖 Boîtes automatisées',
                    content: `<strong>Systèmes courants :</strong>
                        - ZF AS-Tronic, TraXon
                        - Volvo I-Shift
                        - Mercedes PowerShift
                        - Scania Opticruise
                        
                        <strong>Principe :</strong>
                        - Boîte mécanique avec actionneurs électriques/pneumatiques
                        - Embrayage piloté automatiquement
                        - Sélection de rapport par calculateur
                        
                        <strong>Avantages :</strong>
                        - Économie carburant 5-10%
                        - Confort de conduite
                        - Moins d'usure embrayage
                        - Modes : Eco, Power, Manual
                        
                        <strong>Maintenance :</strong>
                        - Vidange huile : 150 000 - 500 000 km
                        - Calibration embrayage : à chaque remplacement`
                },
                {
                    title: '🛑 Ralentisseurs',
                    content: `<strong>Ralentisseur électromagnétique (Telma) :</strong>
                        - Stator fixe avec bobines
                        - Rotor solidaire de la transmission
                        - Freinage par courants de Foucault
                        - Puissance : 200-600 kW
                        
                        <strong>Ralentisseur hydrodynamique (Voith) :</strong>
                        - Turbine dans huile sous pression
                        - Plus puissant mais plus lourd
                        - Nécessite refroidissement
                        
                        <strong>Frein moteur :</strong>
                        - Volet à l'échappement
                        - Décompresseur ouvert (Jake Brake)
                        - Efficace à haut régime
                        
                        <strong>Utilisation :</strong>
                        - Longues descentes
                        - Préserve les freins de service
                        - Niveaux 1-4 progressifs`
                },
                {
                    title: '🔧 Diagnostic et entretien',
                    content: `<strong>Points de contrôle :</strong>
                        ✓ Niveau huile (bouchon de niveau)
                        ✓ Qualité huile (couleur, odeur)
                        ✓ Joints d'étanchéité
                        ✓ Reniflard (non bouché)
                        
                        <strong>Symptômes de problèmes :</strong>
                        - Craquement = synchroniseur usé
                        - Rapport qui saute = fourchette/verrouillage
                        - Bruit de roulement = palier HS
                        - Embrayage qui patine = disque usé (auto)
                        
                        <strong>Codes défaut fréquents :</strong>
                        - Capteur position embrayage
                        - Actionneur de sélection
                        - Position neutre non détectée
                        - Pression huile basse`
                }
            ]
        },
        quiz: [
            {
                question: 'Combien de rapports offre typiquement une boîte ZF 16S ?',
                options: ['8 rapports', '12 rapports', '16 rapports', '24 rapports'],
                correct: 2,
                explanation: 'La ZF 16S offre 16 rapports : 4 de base × 2 (range haute/basse) × 2 (splitter lent/rapide). Cela optimise le régime moteur en toutes situations.'
            },
            {
                question: 'Quel avantage principal offrent les boîtes automatisées ?',
                options: ['Plus de puissance', 'Économie de 5-10% de carburant', 'Moins de rapports', 'Pas besoin d\'huile'],
                correct: 1,
                explanation: 'Les boîtes automatisées changent de rapport au moment optimal, réduisant la consommation de 5 à 10% par rapport à une conduite manuelle moyenne.'
            },
            {
                question: 'Comment fonctionne un ralentisseur Telma ?',
                options: ['Par friction', 'Par courants de Foucault', 'Par compression d\'air', 'Par huile sous pression'],
                correct: 1,
                explanation: 'Le Telma utilise les courants de Foucault : le rotor tourne dans le champ magnétique du stator, créant des courants qui s\'opposent au mouvement et dissipent l\'énergie en chaleur.'
            },
            {
                question: 'Pourquoi le ralentisseur préserve-t-il les freins de service ?',
                options: ['Il remplace les plaquettes', 'Il utilise les mêmes cylindres', 'Il dissipe l\'énergie sans user les garnitures', 'Il refroidit les disques'],
                correct: 2,
                explanation: 'Le ralentisseur freine sans contact mécanique (électromagnétique ou hydrodynamique). L\'énergie est dissipée en chaleur, préservant les garnitures de frein pour les arrêts d\'urgence.'
            },
            {
                question: 'À quelle fréquence doit-on vidanger l\'huile d\'une boîte automatisée moderne ?',
                options: ['Tous les 30 000 km', 'Tous les 80 000 km', 'Entre 150 000 et 500 000 km', 'Jamais, huile à vie'],
                correct: 2,
                explanation: 'Les boîtes automatisées modernes ont des intervalles de vidange très longs : 150 000 à 500 000 km selon constructeur, grâce à des huiles synthétiques performantes.'
            }
        ]
    },
    {
        id: 'camion-4',
        title: 'Essieux et Suspension',
        icon: '🔩',
        level: 'Intermédiaire',
        duration: '25 min',
        description: 'Apprenez le fonctionnement des essieux, ponts et suspensions pneumatiques.',
        content: {
            intro: `Les essieux et suspensions poids lourds doivent supporter des charges de 7 à 13 tonnes 
                    par essieu tout en offrant confort et stabilité. La suspension pneumatique 
                    s'est imposée pour sa polyvalence et ses avantages.`,
            sections: [
                {
                    title: '🔩 Types d\'essieux',
                    content: `<strong>Essieu directeur (avant) :</strong>
                        - Poutre rigide ou indépendant
                        - Charge : 7-8 tonnes max
                        - Fusées avec roulements coniques
                        
                        <strong>Essieu moteur :</strong>
                        - Pont avec différentiel
                        - Simple ou tandem (2 essieux)
                        - Blocage différentiel pour adhérence
                        - Rapport de pont : 2.5:1 à 4:1
                        
                        <strong>Essieu porteur :</strong>
                        - Sans transmission
                        - Relevable sur certains modèles
                        - Économie pneus quand non chargé`
                },
                {
                    title: '🌬️ Suspension pneumatique',
                    content: `<strong>Composants :</strong>
                        - Coussins d'air (boudins)
                        - Valves de nivellement
                        - Compresseur et réservoirs
                        - ECAS (contrôle électronique)
                        
                        <strong>Avantages :</strong>
                        - Hauteur de caisse constante
                        - Confort quelle que soit la charge
                        - Réglage hauteur pour quais
                        - Protection de la marchandise
                        
                        <strong>Fonctionnement :</strong>
                        - Capteurs de hauteur
                        - Électrovannes de remplissage/vidange
                        - Correction automatique
                        - Mémoires de position (route, quai)`
                },
                {
                    title: '🍃 Suspension à lames',
                    content: `<strong>Encore utilisée sur :</strong>
                        - Essieux avant (robustesse)
                        - Véhicules de chantier
                        - Camions légers
                        
                        <strong>Types :</strong>
                        - Paraboliques : 1-3 lames, plus souples
                        - Multi-lames : Traditionnel, robuste
                        
                        <strong>Entretien :</strong>
                        ✓ Graissage des articulations
                        ✓ Contrôle des silentblocs
                        ✓ Vérification des brides
                        ✓ Détection des fissures`
                },
                {
                    title: '🔧 Maintenance',
                    content: `<strong>Suspension pneumatique :</strong>
                        ✓ Contrôle étanchéité coussins
                        ✓ Test valves de nivellement
                        ✓ Vérification capteurs hauteur
                        ✓ Calibration ECAS si remplacement
                        
                        <strong>Ponts :</strong>
                        ✓ Niveau huile de pont (SAE 80W-90)
                        ✓ Vidange : 150 000 km
                        ✓ Contrôle reniflard
                        ✓ Vérification roulements
                        
                        <strong>Symptômes de problèmes :</strong>
                        - Véhicule penché = fuite coussin
                        - Bruit pont = huile ou roulement
                        - Direction lourde = géométrie
                        - Usure pneus irrégulière = parallélisme`
                }
            ]
        },
        quiz: [
            {
                question: 'Quelle charge maximale supporte généralement un essieu directeur ?',
                options: ['3-4 tonnes', '7-8 tonnes', '13 tonnes', '20 tonnes'],
                correct: 1,
                explanation: 'L\'essieu directeur (avant) supporte généralement 7 à 8 tonnes maximum. Au-delà, la direction serait trop lourde et les composants trop sollicités.'
            },
            {
                question: 'Quel est l\'avantage principal de la suspension pneumatique ?',
                options: ['Coût réduit', 'Hauteur constante quelle que soit la charge', 'Pas d\'entretien', 'Plus légère'],
                correct: 1,
                explanation: 'La suspension pneumatique maintient une hauteur de caisse constante grâce à l\'ajustement automatique de la pression. Cela garantit une tenue de route optimale et facilite les opérations de chargement.'
            },
            {
                question: 'À quelle fréquence doit-on vidanger l\'huile de pont ?',
                options: ['Tous les 30 000 km', 'Tous les 80 000 km', 'Tous les 150 000 km', 'Jamais'],
                correct: 2,
                explanation: 'L\'huile de pont se vidange généralement tous les 150 000 km. Elle lubrifie les engrenages du différentiel qui subissent des efforts importants.'
            },
            {
                question: 'Que permet le système ECAS ?',
                options: ['Contrôler le freinage', 'Gérer électroniquement la suspension', 'Surveiller la température moteur', 'Optimiser la consommation'],
                correct: 1,
                explanation: 'L\'ECAS (Electronically Controlled Air Suspension) gère automatiquement la hauteur de caisse, avec des mémoires de position pour la route et les opérations de quai.'
            },
            {
                question: 'Qu\'indique un véhicule qui penche d\'un côté ?',
                options: ['Pneu crevé', 'Fuite sur un coussin d\'air', 'Surcharge', 'Problème de direction'],
                correct: 1,
                explanation: 'Un véhicule qui penche indique généralement une fuite sur un coussin d\'air de la suspension pneumatique du côté affaissé. Le système ne peut plus compenser.'
            }
        ]
    },
    {
        id: 'camion-5',
        title: 'Électricité et Multiplexage',
        icon: '⚡',
        level: 'Avancé',
        duration: '35 min',
        description: 'Maîtrisez les circuits électriques 24V, les réseaux CAN et le diagnostic.',
        content: {
            intro: `Les poids lourds modernes sont des concentrés de technologie électronique. 
                    Avec plus de 50 calculateurs interconnectés, la maîtrise des réseaux 
                    multiplexés est devenue indispensable pour le diagnostic.`,
            sections: [
                {
                    title: '🔋 Circuit 24V',
                    content: `<strong>Configuration :</strong>
                        - 2 batteries 12V en série = 24V
                        - Capacité : 140-225 Ah par batterie
                        - CCA : 900-1400A
                        
                        <strong>Alternateur :</strong>
                        - Puissance : 80-180A (24V)
                        - Tension de charge : 27.5-29V
                        - Refroidi par air ou eau
                        
                        <strong>Démarreur :</strong>
                        - Puissance : 4-7 kW
                        - Consumption : 300-500A
                        - Réducteur intégré sur moderne
                        
                        <strong>Coupe-batterie :</strong>
                        - Obligatoire (ADR)
                        - Manuel ou électrique
                        - Coupe le circuit général`
                },
                {
                    title: '🖥️ Réseau CAN',
                    content: `<strong>Architecture typique :</strong>
                        - CAN moteur : 250-500 kbps
                        - CAN châssis : 250 kbps
                        - CAN carrosserie : 125 kbps
                        - Liaison inter-CAN : Gateway
                        
                        <strong>Calculateurs principaux :</strong>
                        - ECU moteur (injection, turbo, dépollution)
                        - TCU transmission
                        - ABS/EBS
                        - Tableau de bord (EECU)
                        - Confort / carrosserie
                        
                        <strong>Diagnostic :</strong>
                        - Mesure résistance : 60Ω entre CAN-H et CAN-L
                        - Oscilloscope : signal différentiel 2-4V
                        - Analyse trame avec outil constructeur`
                },
                {
                    title: '🔌 Connectique remorque',
                    content: `<strong>Prises normalisées :</strong>
                        - ISO 7638 : EBS remorque (7 broches)
                        - ISO 12098 : Feux (15 broches)
                        - Spirales pneumatiques : rouge + jaune
                        
                        <strong>Communication tracteur-remorque :</strong>
                        - CAN dédié pour EBS
                        - Alimentation 24V permanente
                        - Signal frein proportionnel
                        
                        <strong>Protocoles :</strong>
                        - J1939 : Standard poids lourd (SAE)
                        - FMS : Fleet Management System
                        - Télématique embarquée`
                },
                {
                    title: '🔧 Diagnostic avancé',
                    content: `<strong>Outils nécessaires :</strong>
                        - Valise constructeur (SDP3, VCADS, XENTRY...)
                        - Multimètre automobile
                        - Oscilloscope
                        - Interface J1939
                        
                        <strong>Procédures courantes :</strong>
                        - Lecture/effacement défauts
                        - Paramétrage calculateurs
                        - Mise à jour logiciels
                        - Tests actionneurs
                        
                        <strong>Codes défaut courants :</strong>
                        - SPN 100 : Pression huile moteur
                        - SPN 110 : Température refroidissement
                        - SPN 190 : Régime moteur
                        - SPN 520194 : Niveau AdBlue
                        
                        <strong>Précautions :</strong>
                        ⚠️ Toujours couper contact avant débranchement
                        ⚠️ Respecter polarité batteries
                        ⚠️ Utiliser schémas électriques à jour`
                }
            ]
        },
        quiz: [
            {
                question: 'Quelle tension utilise le circuit électrique principal d\'un poids lourd ?',
                options: ['12V', '24V', '48V', '220V'],
                correct: 1,
                explanation: 'Les poids lourds utilisent du 24V obtenu par 2 batteries 12V en série. Cette tension plus élevée permet de réduire l\'intensité et donc la section des câbles pour les mêmes puissances.'
            },
            {
                question: 'Quelle résistance doit-on mesurer entre CAN-H et CAN-L ?',
                options: ['0Ω', '60Ω', '120Ω', '1000Ω'],
                correct: 1,
                explanation: 'On doit mesurer 60Ω (deux résistances de 120Ω en parallèle aux extrémités du bus). Une valeur différente indique un problème de terminaison ou de câblage.'
            },
            {
                question: 'Quel protocole de communication est standard sur les poids lourds ?',
                options: ['OBD-II', 'J1939', 'ISO 9141', 'KWP2000'],
                correct: 1,
                explanation: 'Le J1939 (SAE) est le protocole standard pour les véhicules lourds. Il définit les trames CAN, les codes défaut (SPN) et les interfaces de diagnostic.'
            },
            {
                question: 'Que signifie le code SPN 100 ?',
                options: ['Niveau carburant', 'Pression huile moteur', 'Température air', 'Vitesse véhicule'],
                correct: 1,
                explanation: 'SPN 100 correspond à la pression d\'huile moteur dans la norme J1939. Les SPN (Suspect Parameter Number) identifient chaque paramètre surveillé.'
            },
            {
                question: 'Quelle prise assure la communication EBS entre tracteur et remorque ?',
                options: ['ISO 12098 (15 broches)', 'ISO 7638 (7 broches)', 'Prise diagnostic 16 broches', 'Spirale pneumatique'],
                correct: 1,
                explanation: 'La prise ISO 7638 à 7 broches transmet les signaux EBS (freinage électronique) et l\'alimentation dédiée entre tracteur et remorque.'
            }
        ]
    }
];

// ===== Rendu dynamique des leçons =====
document.addEventListener('DOMContentLoaded', function () {
    const lessonsGrid = document.querySelector('.lessons-grid');
    if (!lessonsGrid) return;

    lessonsGrid.innerHTML = camionLessons.map((lesson, index) => `
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
                <button class="btn-favorite" onclick="toggleFavorite('${lesson.id}', '${lesson.title}', 'camion')"><span class="heart">🤍</span></button>
                <button class="btn-start" onclick="openLesson('${lesson.id}')">Commencer <span class="arrow">→</span></button>
            </div>
        </article>
    `).join('');
});

function openLesson(lessonId) {
    const lesson = camionLessons.find(l => l.id === lessonId);
    if (!lesson) return;

    const modal = document.getElementById('lessonModal');
    const modalBody = document.getElementById('lessonBody');

    modalBody.innerHTML = `
        <div class="lesson-full">
            <div class="lesson-hero">
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
                <h3>📝 Quiz</h3>
                <p class="quiz-info">${lesson.quiz.length} questions</p>
                <div id="quizContainer"></div>
                <button class="btn btn-primary" onclick="startQuiz('${lesson.id}')">Commencer le quiz</button>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

let currentQuiz = null, currentQuestionIndex = 0, quizScore = 0;

function startQuiz(lessonId) {
    const lesson = camionLessons.find(l => l.id === lessonId);
    if (!lesson) return;
    currentQuiz = lesson.quiz;
    currentQuestionIndex = 0;
    quizScore = 0;
    showQuestion();
}

function showQuestion() {
    const container = document.getElementById('quizContainer');
    const question = currentQuiz[currentQuestionIndex];
    container.innerHTML = `
        <div class="quiz-question active">
            <div class="question-header">
                <span class="question-number">Question ${currentQuestionIndex + 1}/${currentQuiz.length}</span>
            </div>
            <h4>${question.question}</h4>
            <div class="quiz-options">
                ${question.options.map((opt, i) => `
                    <button class="quiz-option" onclick="selectAnswer(${i})">
                        <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                        <span class="option-text">${opt}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    const startBtn = container.parentElement.querySelector('.btn-primary');
    if (startBtn) startBtn.style.display = 'none';
}

function selectAnswer(idx) {
    const q = currentQuiz[currentQuestionIndex];
    const isCorrect = idx === q.correct;
    if (isCorrect) quizScore++;

    document.querySelectorAll('.quiz-option').forEach((opt, i) => {
        opt.disabled = true;
        if (i === q.correct) opt.classList.add('correct');
        else if (i === idx && !isCorrect) opt.classList.add('incorrect');
    });

    const container = document.getElementById('quizContainer');
    const div = document.createElement('div');
    div.className = `quiz-explanation ${isCorrect ? 'correct' : 'incorrect'}`;
    div.innerHTML = `
        <div class="explanation-header">${isCorrect ? '✅ Correct !' : '❌ Incorrect'}</div>
        <p>${q.explanation}</p>
        <button class="btn btn-primary" onclick="nextQuestion()">${currentQuestionIndex < currentQuiz.length - 1 ? 'Suivant →' : 'Résultats'}</button>
    `;
    container.appendChild(div);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= currentQuiz.length) {
        const pct = Math.round((quizScore / currentQuiz.length) * 100);
        document.getElementById('quizContainer').innerHTML = `
            <div class="quiz-results">
                <span class="results-emoji">${pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📚'}</span>
                <h3>Score: ${quizScore}/${currentQuiz.length} (${pct}%)</h3>
                <button class="btn btn-primary" onclick="closeLesson()">Terminer</button>
            </div>
        `;
    } else showQuestion();
}

function closeLesson() {
    document.getElementById('lessonModal').classList.remove('active');
    document.body.style.overflow = '';
}
