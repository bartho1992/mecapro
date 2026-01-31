// ===== Diagnostic Data for All Vehicles =====

const diagnosticData = {
    // ========== AUTOMOBILE ==========
    auto: {
        name: 'Automobile',
        icon: '🚗',
        categories: [
            { id: 'moteur', name: 'Moteur', icon: '🔧' },
            { id: 'freins', name: 'Freinage', icon: '🛑' },
            { id: 'transmission', name: 'Transmission', icon: '⚙️' },
            { id: 'electrique', name: 'Électrique', icon: '⚡' },
            { id: 'suspension', name: 'Suspension', icon: '🔩' },
            { id: 'refroidissement', name: 'Refroidissement', icon: '💧' }
        ],
        symptoms: {
            moteur: [
                { id: 'm1', text: 'Le moteur ne démarre pas' },
                { id: 'm2', text: 'Le moteur cale au ralenti' },
                { id: 'm3', text: 'Perte de puissance' },
                { id: 'm4', text: 'Fumée noire à l\'échappement' },
                { id: 'm5', text: 'Fumée blanche à l\'échappement' },
                { id: 'm6', text: 'Fumée bleue à l\'échappement' },
                { id: 'm7', text: 'Bruit de cliquetis moteur' },
                { id: 'm8', text: 'Vibrations anormales' },
                { id: 'm9', text: 'Consommation excessive de carburant' },
                { id: 'm10', text: 'Voyant moteur allumé' },
                { id: 'm11', text: 'Démarrage difficile à chaud' },
                { id: 'm12', text: 'Ratés d\'allumage / à-coups' },
                { id: 'm13', text: 'Bruit de claquement distribution' },
                { id: 'm14', text: 'Odeur d\'essence dans l\'habitacle' },
                { id: 'm15', text: 'Surchauffe rapide après démarrage' }
            ],
            freins: [
                { id: 'f1', text: 'Pédale de frein molle' },
                { id: 'f2', text: 'Pédale de frein dure' },
                { id: 'f3', text: 'Bruit de grincement au freinage' },
                { id: 'f4', text: 'Vibrations au freinage' },
                { id: 'f5', text: 'Véhicule tire d\'un côté au freinage' },
                { id: 'f6', text: 'Distance de freinage allongée' },
                { id: 'f7', text: 'Voyant frein allumé' },
                { id: 'f8', text: 'Odeur de brûlé aux roues' },
                { id: 'f9', text: 'ABS qui s\'active sans raison' },
                { id: 'f10', text: 'Usure inégale des plaquettes' },
                { id: 'f11', text: 'Pédale qui vibre au freinage' },
                { id: 'f12', text: 'Niveau de liquide de frein qui baisse' }
            ],
            transmission: [
                { id: 't1', text: 'Difficulté à passer les vitesses' },
                { id: 't2', text: 'Craquement au passage des vitesses' },
                { id: 't3', text: 'Vitesse qui saute' },
                { id: 't4', text: 'Embrayage qui patine' },
                { id: 't5', text: 'Bruit de sifflement en roulant' },
                { id: 't6', text: 'Vibrations à certaines vitesses' },
                { id: 't7', text: 'Pédale d\'embrayage molle ou dure' }
            ],
            electrique: [
                { id: 'e1', text: 'Batterie à plat fréquemment' },
                { id: 'e2', text: 'Phares faibles' },
                { id: 'e3', text: 'Démarreur lent' },
                { id: 'e4', text: 'Fusibles qui grillent' },
                { id: 'e5', text: 'Tableau de bord instable' },
                { id: 'e6', text: 'Voyant batterie allumé' },
                { id: 'e7', text: 'Odeur de brûlé électrique' }
            ],
            suspension: [
                { id: 's1', text: 'Bruit de claquement sur les bosses' },
                { id: 's2', text: 'Véhicule penche d\'un côté' },
                { id: 's3', text: 'Rebonds excessifs' },
                { id: 's4', text: 'Usure inégale des pneus' },
                { id: 's5', text: 'Direction imprécise' },
                { id: 's6', text: 'Vibrations dans le volant' }
            ],
            refroidissement: [
                { id: 'r1', text: 'Surchauffe moteur' },
                { id: 'r2', text: 'Fuite de liquide de refroidissement' },
                { id: 'r3', text: 'Chauffage intérieur ne fonctionne pas' },
                { id: 'r4', text: 'Ventilateur ne se déclenche pas' },
                { id: 'r5', text: 'Niveau de liquide qui baisse' }
            ]
        },
        diagnoses: {
            'm1': [
                { cause: 'Batterie déchargée', probability: 'high', description: 'La batterie n\'a plus assez de charge pour démarrer le moteur.', solutions: ['Recharger la batterie', 'Vérifier l\'alternateur', 'Remplacer la batterie si ancienne (+5 ans)'] },
                { cause: 'Démarreur défectueux', probability: 'medium', description: 'Le démarreur ne tourne pas ou fait un bruit de clic.', solutions: ['Tester le démarreur', 'Vérifier les connexions électriques', 'Remplacer le démarreur'] }
            ],
            'm2': [
                { cause: 'Filtre à air encrassé', probability: 'high', description: 'Le moteur ne reçoit pas assez d\'air.', solutions: ['Remplacer le filtre à air', 'Nettoyer le boîtier de filtre'] },
                { cause: 'Bougies usées', probability: 'medium', description: 'Les bougies ne produisent pas une étincelle suffisante.', solutions: ['Remplacer les bougies', 'Vérifier l\'écartement des électrodes'] }
            ],
            'm3': [
                { cause: 'Filtre à carburant bouché', probability: 'high', description: 'Le carburant n\'arrive pas en quantité suffisante.', solutions: ['Remplacer le filtre à carburant', 'Vérifier la pompe à carburant'] },
                { cause: 'Injecteurs encrassés', probability: 'medium', description: 'Les injecteurs ne pulvérisent pas correctement.', solutions: ['Nettoyer les injecteurs', 'Utiliser un additif nettoyant', 'Faire un décalaminage'] }
            ],
            'm4': [
                { cause: 'Mélange trop riche', probability: 'high', description: 'Trop de carburant par rapport à l\'air.', solutions: ['Vérifier le débitmètre d\'air', 'Contrôler la sonde lambda', 'Nettoyer les injecteurs'] }
            ],
            'm5': [
                { cause: 'Joint de culasse défaillant', probability: 'high', description: 'Du liquide de refroidissement entre dans les cylindres.', solutions: ['Remplacer le joint de culasse', 'Vérifier la planéité de la culasse', 'Contrôler le niveau de liquide'] }
            ],
            'm6': [
                { cause: 'Usure des segments', probability: 'high', description: 'L\'huile moteur passe dans la chambre de combustion.', solutions: ['Révision moteur nécessaire', 'Remplacer les segments', 'Vérifier l\'état des cylindres'] }
            ],
            'f1': [
                { cause: 'Air dans le circuit de frein', probability: 'high', description: 'Présence de bulles d\'air dans le liquide de frein.', solutions: ['Purger le circuit de frein', 'Vérifier l\'étanchéité du circuit', 'Remplacer le liquide de frein'] }
            ],
            'f3': [
                { cause: 'Plaquettes usées', probability: 'high', description: 'Les plaquettes de frein sont arrivées à leur limite d\'usure.', solutions: ['Remplacer les plaquettes', 'Vérifier l\'état des disques', 'Contrôler les étriers'] }
            ],
            't4': [
                { cause: 'Disque d\'embrayage usé', probability: 'high', description: 'Le disque d\'embrayage ne transmet plus correctement la puissance.', solutions: ['Remplacer le kit d\'embrayage', 'Vérifier le volant moteur', 'Contrôler la butée'] }
            ],
            'e1': [
                { cause: 'Alternateur défectueux', probability: 'high', description: 'L\'alternateur ne recharge pas correctement la batterie.', solutions: ['Tester l\'alternateur', 'Vérifier la courroie', 'Remplacer l\'alternateur'] }
            ],
            's1': [
                { cause: 'Amortisseurs usés', probability: 'high', description: 'Les amortisseurs ne remplissent plus leur fonction.', solutions: ['Remplacer les amortisseurs', 'Vérifier les coupelles', 'Contrôler les silent-blocs'] }
            ],
            'r1': [
                { cause: 'Thermostat bloqué', probability: 'high', description: 'Le thermostat reste fermé et empêche la circulation du liquide.', solutions: ['Remplacer le thermostat', 'Vérifier le calorstat', 'Contrôler le radiateur'] }
            ],
            'm7': [
                { cause: 'Poussoirs hydrauliques usés', probability: 'high', description: 'Les poussoirs ne compensent plus le jeu de soupapes.', solutions: ['Remplacer les poussoirs', 'Vérifier la qualité de l\'huile', 'Vidanger avec huile adaptée'] },
                { cause: 'Chaîne de distribution détendue', probability: 'medium', description: 'La chaîne a pris du jeu avec l\'usure.', solutions: ['Remplacer les tendeurs', 'Vérifier les patins', 'Remplacer la chaîne si usée'] }
            ],
            'm8': [
                { cause: 'Supports moteur usés', probability: 'high', description: 'Les silent-blocs ne filtrent plus les vibrations.', solutions: ['Remplacer les supports moteur', 'Vérifier la fixation', 'Contrôler le pot d\'échappement'] }
            ],
            'm9': [
                { cause: 'Sonde lambda défectueuse', probability: 'high', description: 'Le calculateur reçoit des infos erronées sur les gaz d\'échappement.', solutions: ['Remplacer la sonde lambda', 'Vérifier le câblage', 'Faire un diagnostic OBD'] },
                { cause: 'Pression des pneus incorrecte', probability: 'medium', description: 'Des pneus sous-gonflés augmentent la consommation.', solutions: ['Vérifier et ajuster la pression', 'Contrôler l\'état des pneus'] }
            ],
            'm10': [
                { cause: 'Défaut enregistré (OBD)', probability: 'high', description: 'Un capteur ou système a détecté une anomalie.', solutions: ['Lire les codes défaut avec une valise', 'Effacer après réparation', 'Consulter un professionnel'] }
            ],
            'm11': [
                { cause: 'Injecteurs qui fuient', probability: 'high', description: 'Les injecteurs ne ferment pas correctement à chaud.', solutions: ['Tester les injecteurs', 'Nettoyer ou remplacer', 'Vérifier la pression rail'] },
                { cause: 'Capteur température défaillant', probability: 'medium', description: 'Le calculateur reçoit une mauvaise info de température.', solutions: ['Remplacer le capteur', 'Vérifier le circuit'] }
            ],
            'm12': [
                { cause: 'Bobine d\'allumage défaillante', probability: 'high', description: 'Une bobine ne produit pas assez d\'énergie.', solutions: ['Tester les bobines individuellement', 'Remplacer la bobine défaillante'] },
                { cause: 'Bougies encrassées ou usées', probability: 'medium', description: 'Les bougies ne produisent pas d\'étincelle correcte.', solutions: ['Remplacer les bougies', 'Vérifier le type adapté'] }
            ],
            'm13': [
                { cause: 'Distribution usée', probability: 'high', description: 'La courroie ou chaîne de distribution est en fin de vie.', solutions: ['Remplacer le kit distribution urgentement', 'ATTENTION : risque casse moteur'] }
            ],
            'm14': [
                { cause: 'Fuite sur rampe d\'injection', probability: 'high', description: 'Du carburant s\'échappe du circuit.', solutions: ['Vérifier les raccords', 'Remplacer les joints', 'DANGER : risque incendie'] }
            ],
            'm15': [
                { cause: 'Pompe à eau défaillante', probability: 'high', description: 'La pompe ne fait plus circuler le liquide correctement.', solutions: ['Remplacer la pompe à eau', 'Vérifier la courroie', 'Remplacer le liquide'] }
            ],
            'f2': [
                { cause: 'Servo-frein défaillant', probability: 'high', description: 'L\'assistance au freinage ne fonctionne plus.', solutions: ['Vérifier la membrane du servo', 'Contrôler le circuit de dépression', 'Remplacer le servo-frein'] }
            ],
            'f4': [
                { cause: 'Disques voilés', probability: 'high', description: 'Les disques de frein ne sont plus plans.', solutions: ['Resurfacer les disques si possible', 'Remplacer les disques', 'Vérifier les étriers'] }
            ],
            'f5': [
                { cause: 'Étrier grippé', probability: 'high', description: 'Un étrier ne se desserre pas correctement.', solutions: ['Dégriper l\'étrier', 'Remplacer les guides', 'Lubrifier les axes'] }
            ],
            'f9': [
                { cause: 'Capteur ABS défaillant', probability: 'high', description: 'Un capteur de vitesse de roue donne des infos erronées.', solutions: ['Nettoyer les capteurs', 'Vérifier le câblage', 'Remplacer le capteur défaillant'] }
            ],
            'f10': [
                { cause: 'Étrier mal fonctionnel', probability: 'high', description: 'L\'étrier ne répartit pas la pression uniformément.', solutions: ['Réviser l\'étrier', 'Remplacer les plaquettes', 'Vérifier les guides coulissants'] }
            ],
            'f11': [
                { cause: 'Disques de frein usés', probability: 'high', description: 'Les disques sont en dessous de l\'épaisseur minimum.', solutions: ['Mesurer l\'épaisseur', 'Remplacer les disques', 'Changer les plaquettes en même temps'] }
            ],
            'f12': [
                { cause: 'Fuite dans le circuit', probability: 'high', description: 'Le liquide s\'échappe quelque part dans le système.', solutions: ['Inspecter tout le circuit', 'Vérifier les flexibles', 'Remplacer le maître-cylindre si nécessaire'] }
            ]
        },
        // Diagnostic guidé
        guidedTree: {
            start: {
                question: 'Le moteur démarre-t-il ?',
                options: [
                    { text: 'Oui, il démarre', next: 'engine_runs' },
                    { text: 'Non, il ne démarre pas', next: 'no_start' }
                ]
            },
            engine_runs: {
                question: 'Comment le moteur fonctionne-t-il ?',
                options: [
                    { text: 'Normalement', next: 'check_driving' },
                    { text: 'Il cale ou hésite', next: 'stalling' },
                    { text: 'Bruit anormal', next: 'engine_noise' },
                    { text: 'Fumée à l\'échappement', next: 'smoke' }
                ]
            },
            no_start: {
                question: 'Que se passe-t-il quand vous tournez la clé ?',
                options: [
                    { text: 'Rien du tout', next: 'result_battery_dead' },
                    { text: 'Clic-clic mais ne démarre pas', next: 'result_starter' },
                    { text: 'Le moteur tourne mais ne démarre pas', next: 'cranks_no_start' }
                ]
            },
            cranks_no_start: {
                question: 'Avez-vous du carburant ?',
                options: [
                    { text: 'Oui, réservoir plein', next: 'result_fuel_system' },
                    { text: 'Je ne suis pas sûr', next: 'result_check_fuel' }
                ]
            },
            stalling: {
                question: 'Quand le moteur cale-t-il ?',
                options: [
                    { text: 'Au ralenti', next: 'result_idle_issue' },
                    { text: 'En accélérant', next: 'result_acceleration_issue' },
                    { text: 'À chaud', next: 'result_heat_issue' }
                ]
            },
            engine_noise: {
                question: 'Quel type de bruit ?',
                options: [
                    { text: 'Cliquetis métallique', next: 'result_timing_chain' },
                    { text: 'Cognement sourd', next: 'result_bearing' },
                    { text: 'Sifflement', next: 'result_belt' }
                ]
            },
            smoke: {
                question: 'De quelle couleur est la fumée ?',
                options: [
                    { text: 'Blanche', next: 'result_head_gasket' },
                    { text: 'Noire', next: 'result_rich_mixture' },
                    { text: 'Bleue', next: 'result_oil_burning' }
                ]
            },
            check_driving: {
                question: 'Avez-vous remarqué un problème en roulant ?',
                options: [
                    { text: 'Vibrations', next: 'result_wheels' },
                    { text: 'Bruit au freinage', next: 'result_brakes' },
                    { text: 'Direction imprécise', next: 'result_suspension' },
                    { text: 'Non, tout semble normal', next: 'result_ok' }
                ]
            },
            // Résultats
            result_battery_dead: {
                result: true,
                icon: '🔋',
                title: 'Batterie déchargée',
                description: 'Votre batterie est probablement déchargée ou défectueuse.',
                solutions: ['Essayez de démarrer avec des câbles', 'Faites tester la batterie', 'Vérifiez l\'état des cosses', 'Remplacez la batterie si elle a plus de 5 ans']
            },
            result_starter: {
                result: true,
                icon: '⚡',
                title: 'Problème de démarreur',
                description: 'Le démarreur ou son circuit électrique est défaillant.',
                solutions: ['Vérifiez les connexions du démarreur', 'Testez le relais de démarreur', 'Faites contrôler le démarreur', 'Remplacement si nécessaire']
            },
            result_fuel_system: {
                result: true,
                icon: '⛽',
                title: 'Système d\'alimentation',
                description: 'Le carburant n\'arrive pas correctement au moteur.',
                solutions: ['Vérifiez la pompe à carburant', 'Contrôlez le filtre à carburant', 'Vérifiez les injecteurs', 'Contrôlez le capteur de pression']
            },
            result_check_fuel: {
                result: true,
                icon: '⛽',
                title: 'Vérifiez le carburant',
                description: 'Assurez-vous d\'avoir du carburant et qu\'il arrive au moteur.',
                solutions: ['Vérifiez la jauge', 'Ajoutez du carburant', 'Écoutez la pompe à carburant', 'Consultez un mécanicien si le problème persiste']
            },
            result_idle_issue: {
                result: true,
                icon: '🔧',
                title: 'Problème de ralenti',
                description: 'Le moteur a un problème de régulation au ralenti.',
                solutions: ['Nettoyez le boîtier papillon', 'Vérifiez le capteur de ralenti', 'Contrôlez les entrées d\'air', 'Remplacez le filtre à air']
            },
            result_acceleration_issue: {
                result: true,
                icon: '🚗',
                title: 'Problème d\'accélération',
                description: 'Le système d\'alimentation ou d\'allumage est défaillant.',
                solutions: ['Remplacez les bougies', 'Vérifiez les bobines d\'allumage', 'Nettoyez les injecteurs', 'Contrôlez le débitmètre']
            },
            result_heat_issue: {
                result: true,
                icon: '🌡️',
                title: 'Problème lié à la température',
                description: 'Un composant est défaillant quand le moteur est chaud.',
                solutions: ['Vérifiez le capteur de température', 'Contrôlez le bobinage', 'Vérifiez les connecteurs', 'Faites un diagnostic électronique']
            },
            result_timing_chain: {
                result: true,
                icon: '⛓️',
                title: 'Chaîne ou courroie de distribution',
                description: 'Usure probable de la chaîne ou de la courroie de distribution.',
                solutions: ['Faites inspecter la distribution', 'Remplacement préventif recommandé', 'Vérifiez les tendeurs', 'Ne tardez pas, risque de casse moteur']
            },
            result_bearing: {
                result: true,
                icon: '⚠️',
                title: 'Problème de roulement moteur',
                description: 'Un roulement interne du moteur est probablement usé.',
                solutions: ['Arrêtez de rouler immédiatement', 'Faites remorquer le véhicule', 'Consultez un mécanicien urgentement', 'Réparation lourde probable']
            },
            result_belt: {
                result: true,
                icon: '🔄',
                title: 'Courroie accessoire',
                description: 'Une courroie d\'accessoire est usée ou mal tendue.',
                solutions: ['Inspectez les courroies', 'Vérifiez la tension', 'Remplacez si usée ou craquelée', 'Contrôlez les poulies']
            },
            result_head_gasket: {
                result: true,
                icon: '💨',
                title: 'Joint de culasse',
                description: 'Le joint de culasse est probablement défaillant.',
                solutions: ['Vérifiez le niveau de liquide', 'Faites un test de combustion', 'Remplacement du joint nécessaire', 'Ne roulez pas en cas de surchauffe']
            },
            result_rich_mixture: {
                result: true,
                icon: '⛽',
                title: 'Mélange trop riche',
                description: 'Le moteur reçoit trop de carburant.',
                solutions: ['Vérifiez le filtre à air', 'Contrôlez les injecteurs', 'Testez la sonde lambda', 'Faites un diagnostic électronique']
            },
            result_oil_burning: {
                result: true,
                icon: '🛢️',
                title: 'Consommation d\'huile',
                description: 'Le moteur brûle de l\'huile.',
                solutions: ['Vérifiez le niveau d\'huile régulièrement', 'Contrôlez les joints de queue de soupape', 'Inspectez l\'état des segments', 'Réparation possible nécessaire']
            },
            result_wheels: {
                result: true,
                icon: '🛞',
                title: 'Équilibrage ou pneus',
                description: 'Problème d\'équilibrage des roues ou usure des pneus.',
                solutions: ['Faites équilibrer les roues', 'Vérifiez l\'état des pneus', 'Contrôlez la géométrie', 'Inspectez les jantes']
            },
            result_brakes: {
                result: true,
                icon: '🛑',
                title: 'Système de freinage',
                description: 'Les plaquettes ou disques de frein sont usés.',
                solutions: ['Faites contrôler les plaquettes', 'Vérifiez l\'épaisseur des disques', 'Contrôlez le liquide de frein', 'Remplacement si nécessaire']
            },
            result_suspension: {
                result: true,
                icon: '🔩',
                title: 'Suspension ou direction',
                description: 'Un élément de suspension ou de direction est usé.',
                solutions: ['Faites contrôler les amortisseurs', 'Vérifiez les rotules', 'Inspectez les biellettes', 'Faites une géométrie']
            },
            result_ok: {
                result: true,
                icon: '✅',
                title: 'Véhicule en bon état',
                description: 'Aucun problème majeur détecté. Continuez l\'entretien régulier.',
                solutions: ['Respectez les intervalles de vidange', 'Vérifiez les niveaux régulièrement', 'Faites un contrôle annuel', 'Surveillez l\'usure des pneus']
            }
        }
    },

    // ========== MOTO ==========
    moto: {
        name: 'Moto',
        icon: '🏍️',
        categories: [
            { id: 'moteur', name: 'Moteur', icon: '🔧' },
            { id: 'freins', name: 'Freinage', icon: '🛑' },
            { id: 'transmission', name: 'Transmission', icon: '⛓️' },
            { id: 'electrique', name: 'Électrique', icon: '⚡' },
            { id: 'suspension', name: 'Suspension', icon: '🔩' }
        ],
        symptoms: {
            moteur: [
                { id: 'm1', text: 'Le moteur ne démarre pas' },
                { id: 'm2', text: 'Ralenti instable' },
                { id: 'm3', text: 'Perte de puissance' },
                { id: 'm4', text: 'Surchauffe' },
                { id: 'm5', text: 'Bruit anormal du moteur' },
                { id: 'm6', text: 'Fumée à l\'échappement' }
            ],
            freins: [
                { id: 'f1', text: 'Levier de frein mou' },
                { id: 'f2', text: 'Frein qui grince' },
                { id: 'f3', text: 'Frein qui vibre' },
                { id: 'f4', text: 'Frein qui chauffe' },
                { id: 'f5', text: 'Freinage inefficace' }
            ],
            transmission: [
                { id: 't1', text: 'Difficulté à passer les vitesses' },
                { id: 't2', text: 'Chaîne qui saute' },
                { id: 't3', text: 'Bruit de chaîne' },
                { id: 't4', text: 'Embrayage qui patine' },
                { id: 't5', text: 'Point mort difficile' }
            ],
            electrique: [
                { id: 'e1', text: 'Batterie faible' },
                { id: 'e2', text: 'Phares faibles' },
                { id: 'e3', text: 'Démarreur lent' },
                { id: 'e4', text: 'Clignotants défaillants' }
            ],
            suspension: [
                { id: 's1', text: 'Fourche qui fuit' },
                { id: 's2', text: 'Rebonds excessifs' },
                { id: 's3', text: 'Moto instable' },
                { id: 's4', text: 'Bruit dans la direction' }
            ]
        },
        diagnoses: {
            'm1': [
                { cause: 'Batterie déchargée', probability: 'high', description: 'La batterie ne fournit pas assez de courant.', solutions: ['Recharger la batterie', 'Vérifier le circuit de charge', 'Remplacer si nécessaire'] },
                { cause: 'Bougie défectueuse', probability: 'medium', description: 'La bougie ne produit pas d\'étincelle.', solutions: ['Nettoyer ou remplacer la bougie', 'Vérifier le câble de bougie'] }
            ],
            't1': [
                { cause: 'Câble d\'embrayage mal réglé', probability: 'high', description: 'Le câble d\'embrayage n\'a pas la bonne tension.', solutions: ['Régler la garde au levier', 'Lubrifier le câble', 'Remplacer si usé'] }
            ],
            's1': [
                { cause: 'Joints spi usés', probability: 'high', description: 'Les joints de fourche sont usés et laissent fuir l\'huile.', solutions: ['Remplacer les joints spi', 'Vérifier l\'état des tubes', 'Changer l\'huile de fourche'] }
            ]
        },
        guidedTree: {
            start: {
                question: 'La moto démarre-t-elle ?',
                options: [
                    { text: 'Oui', next: 'runs' },
                    { text: 'Non', next: 'no_start' }
                ]
            },
            runs: {
                question: 'Quel est le problème principal ?',
                options: [
                    { text: 'Problème de conduite', next: 'driving' },
                    { text: 'Bruit anormal', next: 'noise' },
                    { text: 'Problème de freinage', next: 'result_brakes' }
                ]
            },
            no_start: {
                question: 'Le démarreur tourne-t-il ?',
                options: [
                    { text: 'Oui mais ne démarre pas', next: 'result_ignition' },
                    { text: 'Non, rien ne se passe', next: 'result_battery' }
                ]
            },
            driving: {
                question: 'Précisez le problème :',
                options: [
                    { text: 'Moto instable', next: 'result_suspension' },
                    { text: 'Perte de puissance', next: 'result_carburation' },
                    { text: 'Vibrations', next: 'result_chain' }
                ]
            },
            noise: {
                question: 'D\'où vient le bruit ?',
                options: [
                    { text: 'Moteur', next: 'result_engine' },
                    { text: 'Transmission', next: 'result_trans_noise' }
                ]
            },
            result_battery: { result: true, icon: '🔋', title: 'Batterie ou circuit électrique', description: 'La batterie est déchargée ou le circuit électrique est défaillant.', solutions: ['Chargez la batterie', 'Vérifiez le fusible principal', 'Contrôlez le contacteur à clé'] },
            result_ignition: { result: true, icon: '⚡', title: 'Système d\'allumage', description: 'Problème d\'étincelle ou d\'alimentation.', solutions: ['Vérifiez la bougie', 'Contrôlez l\'arrivée de carburant', 'Testez la bobine'] },
            result_suspension: { result: true, icon: '🔩', title: 'Suspension', description: 'La fourche ou l\'amortisseur sont défaillants.', solutions: ['Vérifiez le niveau d\'huile de fourche', 'Contrôlez l\'amortisseur arrière', 'Vérifiez les roulements de direction'] },
            result_carburation: { result: true, icon: '⛽', title: 'Carburation/Injection', description: 'Le mélange air/carburant n\'est pas optimal.', solutions: ['Nettoyez le filtre à air', 'Vérifiez les gicleurs/injecteurs', 'Contrôlez le circuit de carburant'] },
            result_chain: { result: true, icon: '⛓️', title: 'Transmission par chaîne', description: 'La chaîne est usée ou mal tendue.', solutions: ['Tendez la chaîne', 'Graissez la chaîne', 'Remplacez si usée', 'Vérifiez les pignons'] },
            result_engine: { result: true, icon: '🔧', title: 'Bruit moteur', description: 'Un composant interne fait du bruit.', solutions: ['Vérifiez la distribution', 'Contrôlez les soupapes', 'Faites diagnostiquer par un pro'] },
            result_trans_noise: { result: true, icon: '⚙️', title: 'Transmission', description: 'Problème de boîte de vitesses ou d\'embrayage.', solutions: ['Vérifiez l\'huile de boîte', 'Contrôlez l\'embrayage', 'Vérifiez la chaîne et pignons'] },
            result_brakes: { result: true, icon: '🛑', title: 'Système de freinage', description: 'Les freins nécessitent une attention.', solutions: ['Vérifiez les plaquettes', 'Purgez le circuit', 'Contrôlez les disques'] }
        }
    },

    // ========== CAMION ==========
    camion: {
        name: 'Camion',
        icon: '🚛',
        categories: [
            { id: 'moteur', name: 'Moteur Diesel', icon: '🔧' },
            { id: 'freins', name: 'Freins pneumatiques', icon: '💨' },
            { id: 'transmission', name: 'Transmission', icon: '⚙️' },
            { id: 'electrique', name: 'Électrique 24V', icon: '⚡' },
            { id: 'pneumatique', name: 'Circuit pneumatique', icon: '🌀' }
        ],
        symptoms: {
            moteur: [
                { id: 'm1', text: 'Démarrage difficile à froid' },
                { id: 'm2', text: 'Fumée noire excessive' },
                { id: 'm3', text: 'Perte de puissance en charge' },
                { id: 'm4', text: 'Surchauffe' },
                { id: 'm5', text: 'Consommation excessive' },
                { id: 'm6', text: 'Bruit de turbo' }
            ],
            freins: [
                { id: 'f1', text: 'Pression d\'air insuffisante' },
                { id: 'f2', text: 'Freins qui chauffent' },
                { id: 'f3', text: 'Freinage déséquilibré' },
                { id: 'f4', text: 'Alarme de frein' },
                { id: 'f5', text: 'Frein de parking inefficace' }
            ],
            transmission: [
                { id: 't1', text: 'Vitesses difficiles à passer' },
                { id: 't2', text: 'Grognement de boîte' },
                { id: 't3', text: 'Vibrations à la transmission' },
                { id: 't4', text: 'Embrayage qui sent le brûlé' }
            ],
            electrique: [
                { id: 'e1', text: 'Batteries faibles' },
                { id: 'e2', text: 'Démarrage lent' },
                { id: 'e3', text: 'Voyants multiples' },
                { id: 'e4', text: 'Phares faibles' }
            ],
            pneumatique: [
                { id: 'p1', text: 'Compresseur ne charge pas' },
                { id: 'p2', text: 'Fuite d\'air audible' },
                { id: 'p3', text: 'Suspension pneumatique affaissée' },
                { id: 'p4', text: 'Portes ne fonctionnent pas' }
            ]
        },
        diagnoses: {
            'm1': [
                { cause: 'Bougies de préchauffage', probability: 'high', description: 'Les bougies de préchauffage ne chauffent pas correctement.', solutions: ['Tester les bougies', 'Vérifier le relais de préchauffage', 'Remplacer les bougies défectueuses'] }
            ],
            'm6': [
                { cause: 'Turbo défaillant', probability: 'high', description: 'Le turbocompresseur montre des signes d\'usure.', solutions: ['Vérifier les durites', 'Contrôler l\'huile du turbo', 'Révision ou remplacement du turbo'] }
            ],
            'f1': [
                { cause: 'Compresseur d\'air fatigué', probability: 'high', description: 'Le compresseur ne maintient pas la pression.', solutions: ['Vérifier le filtre du compresseur', 'Contrôler les clapets', 'Réviser ou remplacer le compresseur'] }
            ],
            'p2': [
                { cause: 'Joint ou raccord défectueux', probability: 'high', description: 'Une fuite dans le circuit pneumatique.', solutions: ['Localiser la fuite avec de l\'eau savonneuse', 'Remplacer les joints', 'Serrer les raccords'] }
            ]
        },
        guidedTree: {
            start: {
                question: 'Quel système pose problème ?',
                options: [
                    { text: 'Moteur', next: 'motor' },
                    { text: 'Freins / Air', next: 'brakes' },
                    { text: 'Électrique', next: 'result_elec' }
                ]
            },
            motor: {
                question: 'Le moteur démarre-t-il ?',
                options: [
                    { text: 'Oui mais problème', next: 'motor_runs' },
                    { text: 'Non', next: 'result_glow_plugs' }
                ]
            },
            motor_runs: {
                question: 'Quel symptôme ?',
                options: [
                    { text: 'Fumée noire', next: 'result_turbo' },
                    { text: 'Perte de puissance', next: 'result_fuel' },
                    { text: 'Surchauffe', next: 'result_cooling' }
                ]
            },
            brakes: {
                question: 'La pression d\'air monte-t-elle ?',
                options: [
                    { text: 'Oui mais lentement', next: 'result_compressor' },
                    { text: 'Non', next: 'result_compressor_dead' },
                    { text: 'Oui mais chute rapidement', next: 'result_leak' }
                ]
            },
            result_glow_plugs: { result: true, icon: '🔥', title: 'Préchauffage', description: 'Système de préchauffage défaillant.', solutions: ['Tester les bougies de préchauffage', 'Vérifier le boîtier de commande', 'Contrôler le relais'] },
            result_turbo: { result: true, icon: '💨', title: 'Turbocompresseur', description: 'Le turbo ou l\'alimentation en air est défaillant.', solutions: ['Vérifier l\'admission d\'air', 'Contrôler l\'intercooler', 'Faire diagnostiquer le turbo'] },
            result_fuel: { result: true, icon: '⛽', title: 'Alimentation carburant', description: 'Problème d\'injection ou de filtration.', solutions: ['Remplacer les filtres à carburant', 'Purger le circuit', 'Vérifier la pompe HP'] },
            result_cooling: { result: true, icon: '🌡️', title: 'Refroidissement', description: 'Circuit de refroidissement défaillant.', solutions: ['Vérifier le niveau', 'Contrôler le thermostat', 'Vérifier le ventilateur'] },
            result_compressor: { result: true, icon: '🌀', title: 'Compresseur fatigué', description: 'Le compresseur ne charge pas assez vite.', solutions: ['Vérifier le filtre d\'air du compresseur', 'Contrôler la courroie', 'Réviser le compresseur'] },
            result_compressor_dead: { result: true, icon: '❌', title: 'Compresseur HS', description: 'Le compresseur ne fonctionne plus.', solutions: ['Vérifier l\'entraînement', 'Contrôler l\'électrovanne', 'Remplacer le compresseur'] },
            result_leak: { result: true, icon: '💨', title: 'Fuite d\'air', description: 'Une fuite importante dans le circuit.', solutions: ['Chercher la fuite à l\'oreille', 'Utiliser de l\'eau savonneuse', 'Réparer les raccords défaillants'] },
            result_elec: { result: true, icon: '🔋', title: 'Circuit électrique 24V', description: 'Problème de batteries ou d\'alternateur.', solutions: ['Tester les deux batteries', 'Vérifier les connexions', 'Contrôler l\'alternateur'] }
        }
    },

    // ========== VÉLO ==========
    velo: {
        name: 'Vélo',
        icon: '🚲',
        categories: [
            { id: 'freins', name: 'Freinage', icon: '🛑' },
            { id: 'transmission', name: 'Transmission', icon: '⛓️' },
            { id: 'roues', name: 'Roues', icon: '🛞' },
            { id: 'direction', name: 'Direction', icon: '🔄' }
        ],
        symptoms: {
            freins: [
                { id: 'f1', text: 'Freins qui grincent' },
                { id: 'f2', text: 'Frein mou' },
                { id: 'f3', text: 'Frein qui frotte' },
                { id: 'f4', text: 'Freinage inefficace' }
            ],
            transmission: [
                { id: 't1', text: 'Dérailleur mal réglé' },
                { id: 't2', text: 'Chaîne qui saute' },
                { id: 't3', text: 'Pédalier qui craque' },
                { id: 't4', text: 'Vitesses qui passent mal' },
                { id: 't5', text: 'Chaîne qui grince' }
            ],
            roues: [
                { id: 'r1', text: 'Roue voilée' },
                { id: 'r2', text: 'Crevaison fréquente' },
                { id: 'r3', text: 'Jeu dans le moyeu' },
                { id: 'r4', text: 'Bruit en roulant' }
            ],
            direction: [
                { id: 'd1', text: 'Direction dure' },
                { id: 'd2', text: 'Jeu dans la direction' },
                { id: 'd3', text: 'Guidon mal aligné' }
            ]
        },
        diagnoses: {
            'f1': [
                { cause: 'Patins sales ou usés', probability: 'high', description: 'Les patins de frein sont contaminés ou usés.', solutions: ['Nettoyer les patins à l\'alcool', 'Poncer légèrement les patins', 'Remplacer si usés'] }
            ],
            't1': [
                { cause: 'Câble détendu', probability: 'high', description: 'Le câble du dérailleur n\'est plus assez tendu.', solutions: ['Retendre le câble', 'Ajuster la vis de butée', 'Remplacer le câble si effiloché'] }
            ],
            't5': [
                { cause: 'Chaîne sèche', probability: 'high', description: 'La chaîne manque de lubrification.', solutions: ['Nettoyer la chaîne', 'Appliquer un lubrifiant adapté', 'Remplacer si usée'] }
            ],
            'r1': [
                { cause: 'Rayons détendus', probability: 'high', description: 'Certains rayons ne sont plus à la bonne tension.', solutions: ['Identifier les rayons détendus', 'Tendre avec une clé à rayons', 'Faire dévoiler par un pro'] }
            ]
        },
        guidedTree: {
            start: {
                question: 'Quel élément pose problème ?',
                options: [
                    { text: 'Freins', next: 'brakes' },
                    { text: 'Transmission/Vitesses', next: 'trans' },
                    { text: 'Roues', next: 'wheels' },
                    { text: 'Direction', next: 'result_steering' }
                ]
            },
            brakes: {
                question: 'Quel type de frein ?',
                options: [
                    { text: 'V-brake / Patins', next: 'result_vbrake' },
                    { text: 'Disque mécanique', next: 'result_disc_mech' },
                    { text: 'Disque hydraulique', next: 'result_disc_hydro' }
                ]
            },
            trans: {
                question: 'Quel problème ?',
                options: [
                    { text: 'Vitesses passent mal', next: 'result_derailleur' },
                    { text: 'Chaîne saute', next: 'result_chain' },
                    { text: 'Pédalier craque', next: 'result_bb' }
                ]
            },
            wheels: {
                question: 'Que remarquez-vous ?',
                options: [
                    { text: 'Roue voilée', next: 'result_truing' },
                    { text: 'Crevaisons fréquentes', next: 'result_puncture' },
                    { text: 'Jeu dans la roue', next: 'result_hub' }
                ]
            },
            result_vbrake: { result: true, icon: '🛑', title: 'Freins V-brake', description: 'Problème de patins ou de câble.', solutions: ['Remplacez les patins usés', 'Retendez le câble', 'Alignez les patins sur la jante', 'Nettoyez les jantes'] },
            result_disc_mech: { result: true, icon: '🛑', title: 'Disque mécanique', description: 'Réglage des plaquettes nécessaire.', solutions: ['Réglez la garde au levier', 'Centrez l\'étrier', 'Remplacez les plaquettes si usées', 'Retendez le câble'] },
            result_disc_hydro: { result: true, icon: '🛑', title: 'Disque hydraulique', description: 'Circuit à purger ou plaquettes usées.', solutions: ['Purgez le circuit', 'Remplacez les plaquettes', 'Vérifiez le niveau de liquide', 'Contrôlez les durites'] },
            result_derailleur: { result: true, icon: '⚙️', title: 'Réglage dérailleur', description: 'Le dérailleur nécessite un réglage.', solutions: ['Réglez la tension du câble', 'Ajustez les butées H et L', 'Vérifiez la patte de dérailleur', 'Lubrifiez les pivots'] },
            result_chain: { result: true, icon: '⛓️', title: 'Chaîne usée', description: 'La chaîne ou les pignons sont usés.', solutions: ['Mesurez l\'usure de la chaîne', 'Remplacez la chaîne', 'Vérifiez la cassette', 'Contrôlez les plateaux'] },
            result_bb: { result: true, icon: '🔧', title: 'Boîtier de pédalier', description: 'Le boîtier de pédalier est usé ou mal serré.', solutions: ['Resserrez les manivelles', 'Vérifiez l\'état du boîtier', 'Remplacez si bruyant', 'Graissez si nécessaire'] },
            result_truing: { result: true, icon: '🛞', title: 'Dévoilage de roue', description: 'La roue nécessite un dévoilage.', solutions: ['Identifiez le voile', 'Tendez/détendez les rayons opposés', 'Faites faire par un pro si important'] },
            result_puncture: { result: true, icon: '💨', title: 'Crevaisons répétées', description: 'Cause récurrente de crevaison.', solutions: ['Vérifiez l\'intérieur du pneu', 'Cherchez épine ou verre', 'Installez un fond de jante neuf', 'Utilisez du préventif'] },
            result_hub: { result: true, icon: '⚙️', title: 'Moyeu desserré', description: 'Les roulements du moyeu ont du jeu.', solutions: ['Réglez les cônes du moyeu', 'Remplacez les roulements', 'Faites réviser le moyeu'] },
            result_steering: { result: true, icon: '🔄', title: 'Jeu de direction', description: 'Le jeu de direction nécessite un réglage.', solutions: ['Desserrez la potence', 'Réglez la compression', 'Resserrez correctement', 'Remplacez les roulements si usés'] }
        }
    },

    // ========== TRACTEUR ==========
    tracteur: {
        name: 'Tracteur',
        icon: '🚜',
        categories: [
            { id: 'moteur', name: 'Moteur Diesel', icon: '🔧' },
            { id: 'hydraulique', name: 'Hydraulique', icon: '💧' },
            { id: 'transmission', name: 'Transmission/PDF', icon: '⚙️' },
            { id: 'electrique', name: 'Électrique', icon: '⚡' }
        ],
        symptoms: {
            moteur: [
                { id: 'm1', text: 'Démarrage difficile' },
                { id: 'm2', text: 'Fumée noire' },
                { id: 'm3', text: 'Manque de puissance' },
                { id: 'm4', text: 'Surchauffe' },
                { id: 'm5', text: 'Consommation élevée' },
                { id: 'm6', text: 'Bruit anormal' }
            ],
            hydraulique: [
                { id: 'h1', text: 'Relevage lent' },
                { id: 'h2', text: 'Outil qui descend seul' },
                { id: 'h3', text: 'Bruit de pompe' },
                { id: 'h4', text: 'Huile qui chauffe' },
                { id: 'h5', text: 'Direction dure' }
            ],
            transmission: [
                { id: 't1', text: 'Vitesses dures' },
                { id: 't2', text: 'PDF qui patine' },
                { id: 't3', text: 'Bruit de transmission' },
                { id: 't4', text: 'Pont qui chauffe' }
            ],
            electrique: [
                { id: 'e1', text: 'Batterie faible' },
                { id: 'e2', text: 'Démarreur lent' },
                { id: 'e3', text: 'Voyants allumés' },
                { id: 'e4', text: 'Phares faibles' }
            ]
        },
        diagnoses: {
            'h1': [
                { cause: 'Filtre hydraulique colmaté', probability: 'high', description: 'Le filtre ne laisse plus passer assez d\'huile.', solutions: ['Remplacer le filtre hydraulique', 'Vérifier le niveau d\'huile', 'Contrôler la pompe'] }
            ],
            'h2': [
                { cause: 'Vérin ou distributeur usé', probability: 'high', description: 'Des joints internes fuient.', solutions: ['Vérifier les joints du vérin', 'Contrôler le distributeur', 'Vérifier le clapet de retenue'] }
            ],
            'm3': [
                { cause: 'Filtre à air encrassé', probability: 'high', description: 'Le moteur ne reçoit pas assez d\'air.', solutions: ['Nettoyer ou remplacer le filtre à air', 'Vérifier le pré-filtre', 'Contrôler l\'admission'] }
            ]
        },
        guidedTree: {
            start: {
                question: 'Quel système du tracteur pose problème ?',
                options: [
                    { text: 'Moteur', next: 'motor' },
                    { text: 'Hydraulique', next: 'hydro' },
                    { text: 'Transmission/PDF', next: 'trans' },
                    { text: 'Électrique', next: 'result_elec' }
                ]
            },
            motor: {
                question: 'Le moteur démarre-t-il ?',
                options: [
                    { text: 'Oui', next: 'motor_runs' },
                    { text: 'Difficilement', next: 'result_glow' },
                    { text: 'Non', next: 'result_starter' }
                ]
            },
            motor_runs: {
                question: 'Quel problème ?',
                options: [
                    { text: 'Fumée', next: 'result_smoke' },
                    { text: 'Manque de puissance', next: 'result_power' },
                    { text: 'Surchauffe', next: 'result_cooling' }
                ]
            },
            hydro: {
                question: 'Que remarquez-vous ?',
                options: [
                    { text: 'Relevage lent ou faible', next: 'result_pump' },
                    { text: 'Outil descend seul', next: 'result_cylinder' },
                    { text: 'Direction dure', next: 'result_steering_hydro' }
                ]
            },
            trans: {
                question: 'Quel problème de transmission ?',
                options: [
                    { text: 'Vitesses dures', next: 'result_gearbox' },
                    { text: 'PDF qui patine', next: 'result_pto' },
                    { text: 'Bruit anormal', next: 'result_trans_noise' }
                ]
            },
            result_glow: { result: true, icon: '🔥', title: 'Préchauffage', description: 'Le système de préchauffage est défaillant.', solutions: ['Tester les bougies de préchauffage', 'Vérifier le relais', 'Contrôler le temps de préchauffage'] },
            result_starter: { result: true, icon: '⚡', title: 'Circuit de démarrage', description: 'Problème de démarreur ou batterie.', solutions: ['Tester la batterie', 'Vérifier les câbles', 'Contrôler le démarreur'] },
            result_smoke: { result: true, icon: '💨', title: 'Combustion incomplète', description: 'Problème d\'injection ou d\'air.', solutions: ['Vérifier les injecteurs', 'Nettoyer le filtre à air', 'Contrôler le turbo'] },
            result_power: { result: true, icon: '📉', title: 'Perte de puissance', description: 'Alimentation en air ou carburant insuffisante.', solutions: ['Remplacer les filtres', 'Purger le circuit de carburant', 'Vérifier le turbo'] },
            result_cooling: { result: true, icon: '🌡️', title: 'Refroidissement', description: 'Circuit de refroidissement défaillant.', solutions: ['Nettoyer le radiateur', 'Vérifier le niveau', 'Contrôler le thermostat', 'Vérifier le ventilateur'] },
            result_pump: { result: true, icon: '💧', title: 'Pompe hydraulique', description: 'La pompe ne fournit pas assez de pression.', solutions: ['Remplacer le filtre', 'Vérifier le niveau d\'huile', 'Contrôler la pompe'] },
            result_cylinder: { result: true, icon: '🔧', title: 'Vérin ou distributeur', description: 'Fuite interne dans le circuit.', solutions: ['Vérifier les joints du vérin', 'Contrôler le distributeur', 'Vérifier les clapets anti-retour'] },
            result_steering_hydro: { result: true, icon: '🚜', title: 'Direction assistée', description: 'Problème de pompe ou vérin de direction.', solutions: ['Vérifier le niveau d\'huile', 'Contrôler la pompe', 'Vérifier le vérin'] },
            result_gearbox: { result: true, icon: '⚙️', title: 'Boîte de vitesses', description: 'Huile insuffisante ou usée.', solutions: ['Vérifier le niveau d\'huile', 'Vidanger la boîte', 'Vérifier les synchroniseurs'] },
            result_pto: { result: true, icon: '⚙️', title: 'Prise de force', description: 'Embrayage de PDF usé.', solutions: ['Vérifier le réglage de la PDF', 'Contrôler l\'embrayage', 'Vérifier l\'huile'] },
            result_trans_noise: { result: true, icon: '🔊', title: 'Bruit de transmission', description: 'Pièce d\'usure ou manque de lubrifiant.', solutions: ['Vérifier les niveaux d\'huile', 'Écouter pour localiser', 'Consulter un spécialiste'] },
            result_elec: { result: true, icon: '🔋', title: 'Circuit électrique', description: 'Batterie ou alternateur défaillant.', solutions: ['Tester la batterie', 'Vérifier l\'alternateur', 'Contrôler les connexions'] }
        }
    }
};
