// ===== Données du Module Moto - Version Professionnelle =====

const motoLessons = [
    {
        id: 'moto-1',
        title: 'Moteurs 2 Temps et 4 Temps',
        icon: '🏍️',
        level: 'Débutant',
        duration: '25 min',
        description: 'Comprenez les différences fondamentales entre les moteurs 2T et 4T et leurs applications.',
        content: {
            intro: `Le choix entre moteur 2 temps et 4 temps définit le caractère de votre moto. 
                    Comprendre leurs différences vous permettra de mieux entretenir votre machine 
                    et de diagnostiquer les problèmes spécifiques à chaque type.`,
            sections: [
                {
                    title: '🔄 Moteur 2 Temps',
                    content: `<strong>Principe :</strong> Un cycle complet en 2 courses de piston (1 tour de vilebrequin).
                        
                        <strong>Caractéristiques :</strong>
                        - <strong>Admission</strong> : Par le carter sous le piston (aspiration naturelle)
                        - <strong>Lubrification</strong> : Huile mélangée à l'essence (2-4%) ou graissage séparé
                        - <strong>Puissance spécifique</strong> : Supérieure (explosion à chaque tour)
                        
                        <strong>Composants clés :</strong>
                        - Lumières d'admission, transfert et échappement
                        - Piston avec segments spécifiques
                        - Pipe d'admission avec clapet ou boisseau
                        
                        <strong>Avantages :</strong> Léger, puissant, simple (pas de soupapes)
                        <strong>Inconvénients :</strong> Consommation élevée, pollution, entretien fréquent`
                },
                {
                    title: '⚙️ Moteur 4 Temps',
                    content: `<strong>Principe :</strong> Un cycle complet en 4 courses de piston (2 tours de vilebrequin).
                        
                        <strong>Les 4 temps :</strong>
                        1. <strong>Admission</strong> : Soupape ouverte, mélange aspiré
                        2. <strong>Compression</strong> : Soupapes fermées, piston monte
                        3. <strong>Détente</strong> : Explosion, piston repoussé
                        4. <strong>Échappement</strong> : Gaz brûlés expulsés
                        
                        <strong>Composants clés :</strong>
                        - Culasse avec soupapes (2, 3 ou 4 par cylindre)
                        - Arbre à cames (simple ou double ACT)
                        - Distribution par chaîne, courroie ou pignons
                        - Carter d'huile séparé
                        
                        <strong>Avantages :</strong> Économique, propre, couple élevé, longévité
                        <strong>Inconvénients :</strong> Plus lourd, complexe, moins de puissance/poids`
                },
                {
                    title: '📊 Tableau comparatif',
                    content: `<strong>Puissance spécifique :</strong>
                        - 2T : 150-200 ch/litre (course)
                        - 4T : 100-150 ch/litre (sport)
                        
                        <strong>Couple :</strong>
                        - 2T : Pic de puissance haut, creux en bas
                        - 4T : Couple linéaire, utilisable à bas régime
                        
                        <strong>Entretien typique :</strong>
                        - 2T : Piston/segments 50-100h, huile à chaque plein
                        - 4T : Vidange 5000km, distribution 20-40000km
                        
                        <strong>Applications modernes :</strong>
                        - 2T : Compétition, enduro, scooters 50cc
                        - 4T : Route, trail, sport, tourisme`
                },
                {
                    title: '🔧 Entretien spécifique',
                    content: `<strong>Moteur 2 Temps :</strong>
                        ✓ Contrôler l'état des lumières (décalaminage)
                        ✓ Vérifier jeu piston (0.05-0.08mm neuf)
                        ✓ Inspecter les clapets d'admission
                        ✓ Nettoyer le pot d'échappement (bourrage carbone)
                        ✓ Respecter le ratio huile/essence
                        
                        <strong>Moteur 4 Temps :</strong>
                        ✓ Vidange régulière (5000-10000km)
                        ✓ Réglage jeu aux soupapes (admission: 0.10mm, échap: 0.15mm)
                        ✓ Tension chaîne de distribution
                        ✓ Contrôle tendeur de chaîne
                        ✓ Nettoyage filtre à air`
                }
            ]
        },
        quiz: [
            {
                question: 'Combien de tours de vilebrequin faut-il pour un cycle complet en 2 temps ?',
                options: [
                    '0.5 tour',
                    '1 tour',
                    '2 tours',
                    '4 tours'
                ],
                correct: 1,
                explanation: 'Le moteur 2 temps réalise un cycle complet (admission, compression, détente, échappement) en seulement 1 tour de vilebrequin, contre 2 tours pour le 4 temps.'
            },
            {
                question: 'Comment est lubrifiée la partie supérieure d\'un moteur 2 temps ?',
                options: [
                    'Par un carter d\'huile séparé',
                    'Par huile mélangée à l\'essence',
                    'Par injection d\'huile sous pression',
                    'Pas de lubrification nécessaire'
                ],
                correct: 1,
                explanation: 'Le 2 temps est lubrifiée par de l\'huile mélangée à l\'essence (2-4%). Le mélange passe par le carter et lubrifie les pièces avant de brûler dans le cylindre.'
            },
            {
                question: 'Quel avantage principal le moteur 4 temps a-t-il sur le 2 temps ?',
                options: [
                    'Plus de puissance',
                    'Plus léger',
                    'Plus économique et moins polluant',
                    'Entretien moins fréquent seulement'
                ],
                correct: 2,
                explanation: 'Le 4 temps est plus économique (consommation réduite de 30-40%) et moins polluant car il ne brûle pas d\'huile et permet un meilleur contrôle de la combustion.'
            },
            {
                question: 'À quelle fréquence doit-on vérifier le jeu aux soupapes sur une moto 4T ?',
                options: [
                    'Tous les 1 000 km',
                    'Tous les 6 000-12 000 km',
                    'Tous les 30 000 km',
                    'Jamais sur les moteurs modernes'
                ],
                correct: 1,
                explanation: 'Le jeu aux soupapes se contrôle généralement tous les 6 000 à 12 000 km selon le constructeur. Un mauvais jeu affecte les performances et peut endommager la culasse.'
            },
            {
                question: 'Quelle est la puissance spécifique typique d\'un moteur 2T de compétition ?',
                options: [
                    '50-80 ch/litre',
                    '100-120 ch/litre',
                    '150-200 ch/litre',
                    '250-300 ch/litre'
                ],
                correct: 2,
                explanation: 'Les moteurs 2T de compétition atteignent 150 à 200 ch/litre grâce à une explosion à chaque tour et un meilleur rapport puissance/poids.'
            }
        ]
    },
    {
        id: 'moto-2',
        title: 'Système d\'Embrayage Moto',
        icon: '⚙️',
        level: 'Intermédiaire',
        duration: '30 min',
        description: 'Maîtrisez le fonctionnement de l\'embrayage multidisque à bain d\'huile.',
        content: {
            intro: `L'embrayage moto est généralement multidisque et fonctionne dans l'huile moteur. 
                    Cette conception compacte permet de transmettre des couples importants malgré 
                    un encombrement réduit. Son réglage et son entretien sont essentiels pour 
                    une conduite fluide.`,
            sections: [
                {
                    title: '🔩 Structure de l\'embrayage',
                    content: `<strong>Composants principaux :</strong>
                        
                        - <strong>Noix d'embrayage</strong> : Entraînée par le moteur (pignons primaires)
                        - <strong>Cloche d'embrayage</strong> : Liée à la boîte de vitesses
                        - <strong>Disques garnis</strong> : 6-10 disques, garnitures liège/kevlar/carbone
                        - <strong>Disques lisses</strong> : Acier, alternés avec les garnis
                        - <strong>Ressorts de pression</strong> : 4-6 ressorts ou diaphragme
                        - <strong>Plateau de pression</strong> : Comprime la pile de disques
                        
                        <strong>Fonctionnement :</strong>
                        Embrayé = disques serrés = transmission du couple
                        Débrayé = disques libres = roue libre`
                },
                {
                    title: '🛢️ Bain d\'huile',
                    content: `<strong>Avantages du bain d'huile :</strong>
                        - Refroidissement continu des disques
                        - Usure réduite
                        - Fonctionnement progressif
                        - Tolérance aux sollicitations extrêmes
                        
                        <strong>Attention huile :</strong>
                        ⚠️ Ne JAMAIS utiliser d'huile voiture avec modificateurs de friction
                        ⚠️ Préférer les huiles spéciales moto (JASO MA/MA2)
                        
                        <strong>Symptômes huile inadaptée :</strong>
                        - Embrayage qui patine
                        - Bruit de claquement au débrayage
                        - Accroches au passage des vitesses`
                },
                {
                    title: '🔧 Réglage et entretien',
                    content: `<strong>Réglage de la garde :</strong>
                        - Garde au levier : 10-15mm (jeu avant action)
                        - Réglage par vis sur le levier + contreécrou
                        - Ou par tendeur sur le câble côté moteur
                        
                        <strong>Contrôles réguliers :</strong>
                        ✓ Jeu au levier (trop = patinage, pas assez = traînée)
                        ✓ État du câble (effilochage, friction)
                        ✓ Niveau d'huile si commande hydraulique
                        ✓ Usure des disques (épaisseur mini constructeur)
                        
                        <strong>Embrayage hydraulique :</strong>
                        - Purge tous les 2 ans (liquide DOT 4)
                        - Joints de maître-cylindre et récepteur`
                },
                {
                    title: '⚠️ Diagnostic des pannes',
                    content: `<strong>L'embrayage patine :</strong>
                        → Câble trop tendu (pas de jeu)
                        → Disques garnis usés
                        → Ressorts fatigués
                        → Huile inadaptée
                        
                        <strong>L'embrayage broute :</strong>
                        → Disques voilés ou gondolés
                        → Rainures dans la cloche
                        → Ressorts inégaux
                        
                        <strong>L'embrayage traîne (vitesses dures à passer) :</strong>
                        → Câble trop détendu
                        → Disques collés (longue immobilisation)
                        → Niveau d'huile trop élevé
                        
                        <strong>Bruit de claquement au démarrage :</strong>
                        → Jeu dans la noix d'embrayage
                        → Silent-blocs d'amortisseur usés`
                }
            ]
        },
        quiz: [
            {
                question: 'Combien de disques garnis trouve-t-on typiquement dans un embrayage moto ?',
                options: [
                    '1-2 disques',
                    '3-4 disques',
                    '6-10 disques',
                    '15-20 disques'
                ],
                correct: 2,
                explanation: 'Un embrayage moto contient généralement 6 à 10 disques garnis, alternés avec autant de disques lisses en acier, pour transmettre le couple dans un espace réduit.'
            },
            {
                question: 'Pourquoi ne faut-il pas utiliser d\'huile voiture dans une moto ?',
                options: [
                    'Elle est trop visqueuse',
                    'Ses additifs font patiner l\'embrayage',
                    'Elle n\'est pas assez résistante',
                    'Elle coûte moins cher'
                ],
                correct: 1,
                explanation: 'Les huiles voiture contiennent des modificateurs de friction qui réduisent le frottement. Sur un embrayage à bain d\'huile, cela fait patiner les disques.'
            },
            {
                question: 'Quelle est la garde typique au levier d\'embrayage ?',
                options: [
                    '2-5 mm',
                    '10-15 mm',
                    '25-30 mm',
                    '40-50 mm'
                ],
                correct: 1,
                explanation: 'La garde (jeu avant que l\'embrayage n\'agisse) doit être de 10 à 15 mm. Trop de jeu = patinage, pas assez = embrayage qui traîne.'
            },
            {
                question: 'Quel symptôme indique des disques d\'embrayage usés ?',
                options: [
                    'Bruit métallique constant',
                    'Patinage à l\'accélération',
                    'Pédale dure',
                    'Fuite d\'huile'
                ],
                correct: 1,
                explanation: 'Des disques usés ne transmettent plus efficacement le couple : le moteur monte en régime mais la moto n\'accélère pas proportionnellement, surtout en charge.'
            },
            {
                question: 'Quelle norme d\'huile est adaptée aux embrayages moto à bain d\'huile ?',
                options: [
                    'ACEA C3',
                    'API SN',
                    'JASO MA ou MA2',
                    'DOT 4'
                ],
                correct: 2,
                explanation: 'Les huiles JASO MA et MA2 sont spécifiquement formulées pour les embrayages moto : elles n\'ont pas de modificateurs de friction et garantissent une bonne transmission du couple.'
            }
        ]
    },
    {
        id: 'moto-3',
        title: 'Suspension et Amortissement',
        icon: '🔧',
        level: 'Intermédiaire',
        duration: '35 min',
        description: 'Apprenez le fonctionnement et le réglage des fourches et amortisseurs.',
        content: {
            intro: `La suspension est cruciale pour le confort, la tenue de route et la sécurité. 
                    Comprendre son fonctionnement vous permettra d'optimiser les réglages selon 
                    votre utilisation et de diagnostiquer les problèmes.`,
            sections: [
                {
                    title: '🔽 Fourche télescopique',
                    content: `<strong>Types principaux :</strong>
                        - <strong>Fourche conventionnelle</strong> : Tubes plongeurs en haut
                        - <strong>Fourche inversée (USD)</strong> : Tubes en bas, plus rigide
                        
                        <strong>Composants :</strong>
                        - <strong>Tubes</strong> : Acier chromé ou traitement DLC
                        - <strong>Cartouches</strong> : Système hydraulique interne
                        - <strong>Ressorts</strong> : Progressifs ou linéaires (8-12 kg/mm)
                        - <strong>Joints spy</strong> : Étanchéité entre tubes
                        - <strong>Caches poussière</strong> : Protection des joints
                        
                        <strong>Fonctionnement :</strong>
                        Compression = huile traverse circuits calibrés = résistance
                        Détente = retour contrôlé par circuits différents`
                },
                {
                    title: '🔼 Amortisseur arrière',
                    content: `<strong>Types :</strong>
                        - <strong>Mono-amortisseur</strong> : Central, avec biellettes
                        - <strong>Double amortisseur</strong> : Motos classiques
                        
                        <strong>Composants :</strong>
                        - <strong>Corps</strong> : Réservoir d'huile et gaz
                        - <strong>Piston</strong> : Lamelles de compression/détente
                        - <strong>Tige</strong> : Chromée ou nitrurée
                        - <strong>Ressort</strong> : Hélicoïdal, tarage 50-100 kg/mm
                        - <strong>Réservoir déporté</strong> : Sur hautes performances
                        
                        <strong>Système Pro-Link / Uni-Trak :</strong>
                        Biellettes créant une progressivité dans le débattement`
                },
                {
                    title: '⚙️ Réglages',
                    content: `<strong>Précharge ressort :</strong>
                        - Ajuste le SAG (enfoncement statique)
                        - SAG avant : 25-30% du débattement
                        - SAG arrière : 30-35% du débattement
                        - Réglage par bagues ou molettes
                        
                        <strong>Compression :</strong>
                        - Haute vitesse : Trous, nids de poule
                        - Basse vitesse : Transfert de charge, freinages
                        - Plus fermé = plus ferme, moins de talonnage
                        
                        <strong>Détente (rebond) :</strong>
                        - Contrôle la vitesse de retour
                        - Trop rapide = moto qui sautille
                        - Trop lent = "packing", s'enfonce progressivement
                        
                        <strong>Règle de base :</strong>
                        Toujours régler la détente en premier, puis la compression`
                },
                {
                    title: '🔧 Entretien et diagnostic',
                    content: `<strong>Entretien fourche :</strong>
                        ✓ Changement huile : tous les 10-20 000 km
                        ✓ Joints spy : dès apparition de fuites
                        ✓ Viscosité huile : 5W à 15W selon constructeur
                        ✓ Niveau d'huile : critique, mesuré tube comprimé
                        
                        <strong>Entretien amortisseur :</strong>
                        ✓ Révision : tous les 20-30 000 km
                        ✓ Contrôle étanchéité tige
                        ✓ Vérification état ressort
                        
                        <strong>Symptômes de problèmes :</strong>
                        - Fuite huile sur tube = joint spy à changer
                        - Bruit de cognement = niveau huile trop bas
                        - Moto qui plonge au freinage = compression trop souple
                        - Rebonds incontrôlés = amortissement HS`
                }
            ]
        },
        quiz: [
            {
                question: 'Quel est l\'avantage principal d\'une fourche inversée (USD) ?',
                options: [
                    'Plus légère',
                    'Plus rigide et meilleure tenue de route',
                    'Moins chère à produire',
                    'Plus facile à entretenir'
                ],
                correct: 1,
                explanation: 'La fourche inversée place les tubes de gros diamètre en bas, près de la roue. Cela augmente considérablement la rigidité en torsion et améliore la précision de pilotage.'
            },
            {
                question: 'Quel est le SAG recommandé pour la suspension arrière ?',
                options: [
                    '10-15% du débattement',
                    '20-25% du débattement',
                    '30-35% du débattement',
                    '50% du débattement'
                ],
                correct: 2,
                explanation: 'Le SAG arrière (enfoncement sous le poids du pilote) doit être de 30-35% du débattement total. Cela permet à la suspension de travailler dans sa plage optimale.'
            },
            {
                question: 'Quel symptôme indique une détente trop rapide ?',
                options: [
                    'La moto s\'enfonce progressivement',
                    'La moto sautille et perd l\'adhérence',
                    'La fourche fuit',
                    'La direction vibre'
                ],
                correct: 1,
                explanation: 'Une détente trop rapide fait rebondir la moto de façon incontrôlée : la roue perd le contact avec le sol, réduisant l\'adhérence et le contrôle.'
            },
            {
                question: 'À quelle fréquence doit-on changer l\'huile de fourche ?',
                options: [
                    'Tous les 2 000 km',
                    'Tous les 10-20 000 km',
                    'Tous les 50 000 km',
                    'Jamais, c\'est du lubrifiant à vie'
                ],
                correct: 1,
                explanation: 'L\'huile de fourche se dégrade avec le temps et la chaleur. Un changement tous les 10 000 à 20 000 km maintient un amortissement optimal.'
            },
            {
                question: 'Quel réglage doit-on ajuster en premier sur une suspension ?',
                options: [
                    'La précharge',
                    'La compression haute vitesse',
                    'La détente (rebond)',
                    'La compression basse vitesse'
                ],
                correct: 2,
                explanation: 'On règle d\'abord la détente car elle influence directement la compression. Une détente mal réglée fausse tous les autres réglages.'
            }
        ]
    },
    {
        id: 'moto-4',
        title: 'Transmission Secondaire',
        icon: '⛓️',
        level: 'Débutant',
        duration: '20 min',
        description: 'Maîtrisez l\'entretien de la chaîne, du pignon et de la couronne.',
        content: {
            intro: `La transmission secondaire transfère la puissance de la boîte à la roue arrière. 
                    La chaîne reste la solution la plus répandue pour son efficacité et son faible coût, 
                    mais nécessite un entretien régulier.`,
            sections: [
                {
                    title: '⛓️ Types de transmission',
                    content: `<strong>Chaîne :</strong>
                        - Le plus courant, 95% des motos
                        - Types : O-ring, X-ring, Z-ring (joints torique)
                        - Pas : 520, 525, 530 (largeur en pouces)
                        - Rendement : 97-98%
                        
                        <strong>Courroie :</strong>
                        - Harley-Davidson, BMW, scooters
                        - Silencieuse, sans entretien
                        - Moins de puissance transmise
                        
                        <strong>Cardan :</strong>
                        - BMW, Moto Guzzi, tourisme
                        - Sans entretien (vidange rare)
                        - Plus lourd, perte de 3-5%`
                },
                {
                    title: '🔩 Composants chaîne',
                    content: `<strong>La chaîne :</strong>
                        - Maillons intérieurs : axes + rouleaux
                        - Maillons extérieurs : plaques latérales
                        - Joints O/X-ring : conservent la graisse interne
                        - Attache rapide ou rivetée
                        
                        <strong>Pignon de sortie de boîte :</strong>
                        - Acier traité, 13-17 dents typique
                        - Plus petit = accélération, moins de vitesse max
                        
                        <strong>Couronne :</strong>
                        - Acier ou aluminium (alu = plus léger mais s'use plus vite)
                        - 38-52 dents selon moto
                        - Plus grande = plus d'accélération
                        
                        <strong>Démultiplication :</strong>
                        Rapport = Couronne / Pignon (ex: 45/15 = 3.0)`
                },
                {
                    title: '🔧 Entretien',
                    content: `<strong>Graissage :</strong>
                        ✓ Tous les 500-1000 km ou après la pluie
                        ✓ Chaîne propre et tiède
                        ✓ Graisse spéciale moto (pas WD-40 seul)
                        ✓ Appliquer sur l'intérieur, côté joints
                        
                        <strong>Tension :</strong>
                        ✓ Contrôler tous les 1000 km
                        ✓ Jeu typique : 25-35mm au point le plus tendu
                        ✓ Mesurer avec moto sur béquille latérale
                        ✓ Vérifier alignement après réglage
                        
                        <strong>Durée de vie :</strong>
                        - Chaîne : 20 000 - 40 000 km
                        - Pignon/couronne : 2 jeux de chaînes
                        - Toujours changer le kit complet ensemble`
                },
                {
                    title: '⚠️ Diagnostic',
                    content: `<strong>Signes d'usure chaîne :</strong>
                        - Allongement > 3% (vérifier avec jauge)
                        - Points durs (maillons grippés)
                        - Jeu latéral excessif
                        - Rouille sur les axes
                        
                        <strong>Signes d'usure pignon/couronne :</strong>
                        - Dents en "requin" (asymétriques)
                        - Dents cassées ou fissurées
                        - Usure en vague sur la couronne
                        
                        <strong>Conséquences usure :</strong>
                        - Bruit de claquement
                        - Secousses à l'accélération
                        - Risque de rupture = chute
                        
                        <strong>⚠️ JAMAIS :</strong>
                        - Chaîne neuve sur pignon/couronne usés
                        - Surtension = usure prématurée
                        - Sous-tension = risque de déraillement`
                }
            ]
        },
        quiz: [
            {
                question: 'Quel type de chaîne offre la meilleure durée de vie ?',
                options: [
                    'Chaîne standard sans joints',
                    'Chaîne O-ring',
                    'Chaîne X-ring ou Z-ring',
                    'Toutes ont la même durée'
                ],
                correct: 2,
                explanation: 'Les chaînes X-ring et Z-ring ont des joints plus performants qui conservent mieux la graisse interne et résistent mieux à l\'écrasement, offrant une durée de vie supérieure.'
            },
            {
                question: 'Quel est le jeu de chaîne typique recommandé ?',
                options: [
                    '5-10 mm',
                    '25-35 mm',
                    '50-60 mm',
                    '0 mm (tendue au maximum)'
                ],
                correct: 1,
                explanation: 'Le jeu de chaîne doit être de 25 à 35 mm au point le plus tendu. Une chaîne trop tendue s\'use prématurément et endommage les roulements de sortie de boîte.'
            },
            {
                question: 'À quelle fréquence doit-on graisser la chaîne ?',
                options: [
                    'Une fois par an',
                    'Tous les 5 000 km',
                    'Tous les 500-1 000 km ou après la pluie',
                    'Jamais sur les chaînes O-ring'
                ],
                correct: 2,
                explanation: 'La chaîne doit être graissée tous les 500 à 1 000 km et systématiquement après avoir roulé sous la pluie. La graisse externe protège les joints et les plaques.'
            },
            {
                question: 'Pourquoi doit-on toujours changer le kit chaîne complet ?',
                options: [
                    'Pour des raisons commerciales',
                    'Car l\'usure de l\'un accélère celle de l\'autre',
                    'Car c\'est moins cher',
                    'Ce n\'est pas obligatoire'
                ],
                correct: 1,
                explanation: 'Une chaîne neuve sur un pignon usé (ou inversement) s\'use très rapidement car les profils ne correspondent plus. Le jeu entre les éléments accélère l\'usure de tous.'
            },
            {
                question: 'Quel est l\'effet d\'un pignon de sortie plus petit ?',
                options: [
                    'Plus de vitesse de pointe',
                    'Plus d\'accélération, moins de vitesse max',
                    'Aucun effet sur les performances',
                    'Réduction de la consommation'
                ],
                correct: 1,
                explanation: 'Un pignon plus petit augmente la démultiplication finale : la moto accélère plus fort mais le régime moteur est plus élevé à vitesse équivalente, réduisant la vitesse max.'
            }
        ]
    },
    {
        id: 'moto-5',
        title: 'Système de Freinage Moto',
        icon: '🛑',
        level: 'Avancé',
        duration: '30 min',
        description: 'Maîtrisez les freins à disque, ABS moto et techniques de purge.',
        content: {
            intro: `Le freinage moto est critique car il doit gérer le transfert de masse et éviter 
                    le blocage des roues. Les systèmes modernes (ABS, freinage combiné) améliorent 
                    la sécurité, mais la maîtrise des fondamentaux reste essentielle.`,
            sections: [
                {
                    title: '🔴 Freins à disque moto',
                    content: `<strong>Configuration typique :</strong>
                        - Avant : Double disque 300-330mm, étriers 4-6 pistons
                        - Arrière : Simple disque 220-260mm, étrier 1-2 pistons
                        
                        <strong>Types d'étriers :</strong>
                        - <strong>Étrier flottant</strong> : 1-2 pistons d'un côté
                        - <strong>Étrier fixe</strong> : Pistons des deux côtés (standard sport)
                        - <strong>Montage radial</strong> : Vis parallèles au disque, plus rigide
                        
                        <strong>Disques :</strong>
                        - Pleins ou flottants (fixés par rivets)
                        - Perforés : évacuation eau et gaz
                        - Épaisseur neuf : 4.5-6mm, mini : 4-5mm
                        
                        <strong>Plaquettes :</strong>
                        - Organiques : Mordant doux, usage route
                        - Frittées : Hautes performances, résistent à chaud`
                },
                {
                    title: '💧 Circuit hydraulique',
                    content: `<strong>Composants :</strong>
                        - <strong>Maître-cylindre</strong> : Piston actionné par le levier
                        - <strong>Durites</strong> : Caoutchouc (origine) ou tressées avia
                        - <strong>Étriers</strong> : Pistons poussant les plaquettes
                        
                        <strong>Purge du circuit :</strong>
                        1. Remplir le réservoir de liquide neuf
                        2. Connecter tuyau sur vis de purge
                        3. Pomper le levier, maintenir
                        4. Ouvrir la vis, liquide + bulles sortent
                        5. Refermer, relâcher le levier
                        6. Répéter jusqu'à liquide clair sans bulles
                        
                        <strong>Liquide de frein :</strong>
                        - DOT 4 (230°C à sec) ou DOT 5.1 (260°C)
                        - Changer tous les 2 ans
                        - ⚠️ Corrosif pour peinture et plastiques`
                },
                {
                    title: '🖥️ ABS et systèmes avancés',
                    content: `<strong>ABS moto :</strong>
                        - Capteurs de vitesse sur chaque roue
                        - Modulateur hydraulique
                        - Calculateur dédié
                        - Modulation 15-25 fois/seconde
                        
                        <strong>Modes (sportives modernes) :</strong>
                        - <strong>Rain</strong> : Intervention précoce
                        - <strong>Road</strong> : Équilibre confort/perf
                        - <strong>Track</strong> : Intervention tardive
                        - <strong>Off</strong> : Désactivable (circuit)
                        
                        <strong>Freinage combiné (CBS) :</strong>
                        Le frein arrière active aussi partiellement l'avant
                        Répartition automatique de la pression
                        
                        <strong>Cornering ABS :</strong>
                        Tient compte de l'angle d'inclinaison
                        Évite le blocage en courbe`
                },
                {
                    title: '🔧 Entretien et contrôles',
                    content: `<strong>Contrôles réguliers :</strong>
                        ✓ Niveau de liquide (fenêtre ou jauge)
                        ✓ Couleur du liquide (clair = OK, foncé = à changer)
                        ✓ Épaisseur des plaquettes (mini 1.5-2mm)
                        ✓ Épaisseur des disques (cote gravée)
                        ✓ État des durites (craquelures, usure)
                        
                        <strong>Symptômes de problèmes :</strong>
                        - Levier spongieux = Air dans le circuit
                        - Levier qui vient au guidon = Fuite ou usure
                        - Grincement = Plaquettes usées ou vitrifiées
                        - Vibration = Disque voilé (voile max 0.15mm)
                        - Pompage = Disque épais variable
                        
                        <strong>Points chauds :</strong>
                        - Pistons d'étrier grippés (nettoyage/graisse silicone)
                        - Vis de purge bloquée (dégrippant, patience)
                        - Joint de maître-cylindre (cause levier mou)`
                }
            ]
        },
        quiz: [
            {
                question: 'Quelle configuration de freins trouve-t-on généralement sur une sportive ?',
                options: [
                    'Simple disque avant et arrière',
                    'Double disque avant, simple arrière',
                    'Triple disque avant, double arrière',
                    'Freins à tambour avant et arrière'
                ],
                correct: 1,
                explanation: 'Les motos sportives ont typiquement un double disque de 300-330mm à l\'avant (où se fait 70% du freinage) et un simple disque de 220-260mm à l\'arrière.'
            },
            {
                question: 'Quel avantage offrent les durites tressées aviation ?',
                options: [
                    'Coût réduit',
                    'Feeling plus ferme et précis au levier',
                    'Pas besoin de purger',
                    'Compatibilité avec tous les liquides'
                ],
                correct: 1,
                explanation: 'Les durites tressées ne se déforment pas sous pression comme le caoutchouc. Toute la pression est transmise aux étriers, offrant un feeling plus ferme et précis.'
            },
            {
                question: 'Combien de fois par seconde l\'ABS moto module-t-il la pression ?',
                options: [
                    '5-10 fois',
                    '15-25 fois',
                    '50-100 fois',
                    '200+ fois'
                ],
                correct: 1,
                explanation: 'L\'ABS moto module la pression 15 à 25 fois par seconde. C\'est moins rapide que l\'ABS auto car les effets gyroscopiques et le transfert de masse sont différents.'
            },
            {
                question: 'Qu\'est-ce que le "Cornering ABS" ?',
                options: [
                    'ABS pour les virages serrés uniquement',
                    'ABS qui tient compte de l\'angle d\'inclinaison',
                    'ABS désactivé en virage',
                    'ABS pour la piste uniquement'
                ],
                correct: 1,
                explanation: 'Le Cornering ABS utilise une centrale inertielle pour détecter l\'angle d\'inclinaison et adapter l\'intervention. Freiner fort moto penchée ne provoque plus de perte de contrôle.'
            },
            {
                question: 'Quel symptôme indique la présence d\'air dans le circuit de freinage ?',
                options: [
                    'Levier qui vibre',
                    'Levier spongieux, course longue',
                    'Levier très dur',
                    'Bruit de sifflement'
                ],
                correct: 1,
                explanation: 'L\'air est compressible contrairement au liquide. Sa présence rend le levier spongieux : on comprime d\'abord l\'air avant de pousser le liquide et les pistons.'
            },
            {
                question: 'Quelle épaisseur minimale est généralement acceptable pour des plaquettes de frein moto ?',
                options: [
                    '0.5 mm',
                    '1.5-2 mm',
                    '3-4 mm',
                    '5 mm'
                ],
                correct: 1,
                explanation: 'L\'épaisseur minimale des plaquettes moto est généralement de 1.5 à 2mm. En dessous, le support métallique risque de toucher le disque, causant des dégâts importants.'
            }
        ]
    }
];

// ===== Rendu dynamique des leçons =====
document.addEventListener('DOMContentLoaded', function () {
    const lessonsGrid = document.querySelector('.lessons-grid');
    if (!lessonsGrid) return;

    lessonsGrid.innerHTML = motoLessons.map((lesson, index) => `
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
                <button class="btn-favorite" onclick="toggleFavorite('${lesson.id}', '${lesson.title}', 'moto')" title="Ajouter aux favoris">
                    <span class="heart">🤍</span>
                </button>
                <button class="btn-start" onclick="openLesson('${lesson.id}')">
                    Commencer
                    <span class="arrow">→</span>
                </button>
            </div>
        </article>
    `).join('');

    updateFavoriteButtons();
});

// ===== Fonction pour ouvrir une leçon =====
function openLesson(lessonId) {
    const lesson = motoLessons.find(l => l.id === lessonId);
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

// Variables quiz
let currentQuiz = null;
let currentQuestionIndex = 0;
let quizScore = 0;
let userAnswers = [];

function startQuiz(lessonId) {
    const lesson = motoLessons.find(l => l.id === lessonId);
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

    const startBtn = container.parentElement.querySelector('.btn-primary');
    if (startBtn) startBtn.style.display = 'none';
}

function selectAnswer(answerIndex) {
    const question = currentQuiz[currentQuestionIndex];
    const isCorrect = answerIndex === question.correct;

    if (isCorrect) quizScore++;
    userAnswers.push({ questionIndex: currentQuestionIndex, selected: answerIndex, correct: question.correct, isCorrect });

    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, i) => {
        opt.disabled = true;
        if (i === question.correct) opt.classList.add('correct');
        else if (i === answerIndex && !isCorrect) opt.classList.add('incorrect');
    });

    const container = document.getElementById('quizContainer');
    const explanationDiv = document.createElement('div');
    explanationDiv.className = `quiz-explanation ${isCorrect ? 'correct' : 'incorrect'}`;
    explanationDiv.innerHTML = `
        <div class="explanation-header">${isCorrect ? '✅ Correct !' : '❌ Incorrect'}</div>
        <p>${question.explanation}</p>
        <button class="btn btn-primary" onclick="nextQuestion()">
            ${currentQuestionIndex < currentQuiz.length - 1 ? 'Question suivante →' : 'Voir les résultats'}
        </button>
    `;
    container.appendChild(explanationDiv);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= currentQuiz.length) showResults();
    else showQuestion();
}

function showResults() {
    const container = document.getElementById('quizContainer');
    const percentage = Math.round((quizScore / currentQuiz.length) * 100);

    let message, emoji;
    if (percentage >= 80) { message = 'Excellent ! Vous maîtrisez ce sujet !'; emoji = '🏆'; }
    else if (percentage >= 60) { message = 'Bien ! Quelques révisions recommandées.'; emoji = '👍'; }
    else { message = 'Continuez à apprendre, vous progressez !'; emoji = '📚'; }

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
                <button class="btn btn-secondary" onclick="location.reload()">🔄 Refaire le quiz</button>
                <button class="btn btn-primary" onclick="closeLesson()">✓ Terminer</button>
            </div>
        </div>
    `;
}

function closeLesson() {
    const modal = document.getElementById('lessonModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLesson();
});
