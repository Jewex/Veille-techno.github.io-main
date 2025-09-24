const link =
    "https://notpunchnox.github.io/Veille-techno.github.io/articles/images/";

export default {
    AI: [
        // Aout
        {
            "title": "OpenAI lance gpt-oss : une révolution open-source pour l’IA et la robotique",
            "description": "En août 2025, OpenAI a dévoilé gpt-oss-120b et gpt-oss-20b, deux modèles de langage open-weight sous licence Apache 2.0. Optimisés pour le raisonnement, l’utilisation d’outils et les déploiements locaux, ces modèles offrent des performances de pointe à faible coût, avec des applications prometteuses en robotique et au-delà.",
            "date": "9 août 2025",
            "content": [
                "<h3>Introduction</h3><p>Le 5 août 2025, OpenAI a marqué un tournant dans l’écosystème open-source en lançant gpt-oss-120b et gpt-oss-20b, deux modèles de langage open-weight sous licence Apache 2.0. Ces modèles, conçus pour rivaliser avec les performances des modèles propriétaires comme OpenAI o4-mini et o3-mini, se distinguent par leur efficacité sur du matériel standard et leur capacité à raisonner, utiliser des outils et s’intégrer dans des workflows agentiques. Annoncés sur le blog d’OpenAI, ils promettent de démocratiser l’accès à l’IA avancée, avec des implications majeures pour la robotique, la recherche et les applications industrielles.</p>",
                "<h3>Des modèles puissants et accessibles</h3><p>Les modèles gpt-oss se démarquent par leur architecture Mixture-of-Experts (MoE), qui réduit le nombre de paramètres actifs pour une efficacité maximale. Le gpt-oss-120b, avec 117 milliards de paramètres (5,1 milliards actifs par jeton), s’exécute sur un GPU de 80 Go, tandis que le gpt-oss-20b, avec 21 milliards de paramètres (3,6 milliards actifs), fonctionne sur seulement 16 Go de mémoire. Selon OpenAI, ces modèles surpassent ou égalent des références comme o4-mini et o3-mini sur des benchmarks tels que Codeforces, MMLU, HealthBench et Tau-Bench, tout en étant personnalisables pour des tâches spécifiques. Leur compatibilité avec des contextes jusqu’à 128 000 jetons et leur optimisation pour des outils comme la recherche web et l’exécution de code Python en font des atouts pour la robotique et l’automatisation.</p>",
                "<h3>Applications en robotique et IA agentique</h3><p>Les modèles gpt-oss sont conçus pour les workflows agentiques, avec des capacités avancées de suivi d’instructions, de raisonnement par chaîne de pensée et d’utilisation d’outils. Dans la robotique, ces modèles peuvent alimenter des systèmes autonomes, comme des robots humanoïdes ou des AMRs, en leur permettant de prendre des décisions complexes en temps réel. Par exemple, leur intégration avec des plateformes comme Hugging Face, utilisée pour le robot Reachy Mini, pourrait permettre de programmer des comportements interactifs pour des robots éducatifs ou industriels. Les partenariats avec des acteurs comme AI Sweden, Orange et Snowflake montrent également leur potentiel pour des applications sécurisées sur site, notamment dans la logistique et la santé, où gpt-oss-120b excelle sur HealthBench.</p>",
                "<h3>Sécurité et responsabilité</h3><p>OpenAI a mis un accent particulier sur la sécurité des modèles gpt-oss. Pendant le pré-entraînement, les données dangereuses liées aux armes nucléaires, radiologiques, biologiques et chimiques ont été filtrées. Le post-entraînement, basé sur un apprentissage par renforcement et une stratégie d’alignement délibératif, garantit que les modèles refusent les prompts malveillants. OpenAI a également testé une version ajustée à des fins malveillantes de gpt-oss-120b, concluant qu’elle reste sous le seuil critique de dangerosité défini par leur cadre de préparation. Ces efforts, audités par des experts tiers, établissent une nouvelle norme pour la sécurité des modèles open-weight. OpenAI invite la communauté à signaler les vulnérabilités via un programme doté de 500 000 $.</p>",
                "<h3>Un écosystème open-source florissant</h3><p>Les modèles gpt-oss sont disponibles sur Hugging Face, avec des implémentations optimisées pour PyTorch, Apple Metal, et des plateformes comme Azure, AWS et vLLM. Leur format MXFP4 réduit les besoins en mémoire, rendant l’inférence locale accessible aux développeurs individuels et aux petites organisations. OpenAI a également publié sous licence open-source l’outil de rendu harmony et le tokenizer o200k_harmony, facilitant leur adoption. Ces initiatives, combinées à des partenariats avec NVIDIA, AMD, et Groq, garantissent une compatibilité matérielle large. Les commentaires de la communauté, via des plateformes comme le Playground d’OpenAI, joueront un rôle clé dans l’évolution future des modèles.</p>",
                "<h3>Conclusion</h3><p>Avec gpt-oss-120b et gpt-oss-20b, OpenAI redéfinit l’accès à l’IA avancée en offrant des modèles open-weight performants, sécurisés et abordables. Leur potentiel en robotique, de l’automatisation industrielle aux interactions homme-robot, est immense, comme en témoigne leur intégration avec des écosystèmes comme Hugging Face. En démocratisant l’IA pour les marchés émergents et les petites organisations, OpenAI pose les bases d’un écosystème open-source dynamique. Les chercheurs et développeurs sont invités à explorer ces modèles, contribuant ainsi à une innovation collaborative et responsable. Cette annonce marque une étape décisive vers une IA accessible à tous.</p>"
            ],
            "images": [{
                "url": "https://openai.com/content/images/2025/08/gpt-oss-launch.jpg",
                "caption": "Illustration des modèles gpt-oss-120b et gpt-oss-20b, lancés par OpenAI pour démocratiser l’IA open-source."
            }],
            "sources": [{
                    "title": "OpenAI – Introducing gpt-oss",
                    "url": "https://openai.com/fr-FR/index/introducing-gpt-oss/"
                },
                {
                    "title": "Hugging Face – gpt-oss Model Repository",
                    "url": "https://huggingface.co/models?search=gpt-oss"
                }
            ]
        }, {
            "title": "CES 2025 : Nvidia dévoile Nemotron pour l’IA agentique et vise la robotique",
            "description": "Nvidia lance Nemotron, une famille de grands modèles de langage (LLMs) optimisés pour l’IA agentique, et annonce des avancées majeures pour la robotique, notamment dans les entrepôts, lors du CES 2025.",
            "date": "8 janvier 2025",
            "content": [
                "<h3>Introduction</h3><p>Lors de sa keynote au CES 2025, Nvidia, dirigée par Jensen Huang, a marqué les esprits en dévoilant Nemotron, une famille de LLMs dérivée de Llama, conçue pour l’IA agentique. Devant 12 000 spectateurs à Las Vegas, l’entreprise a également affirmé sa vision : révolutionner la robotique, en commençant par les entrepôts.</p>",
                "<h3>Nemotron : une IA agentique polyvalente</h3><p>Nemotron se décline en trois versions : Nano (embarqué), Super (un GPU) et Ultra (data center). Entraînés pour le suivi d’instructions, le chat, la génération de code et les mathématiques, ces modèles sont personnalisables et disponibles sur le site de Nvidia et Hugging Face. Une variante visuelle, Cosmos Nemotron, complète l’offre, tandis que SAP et ServiceNow sont déjà sur les rangs pour les adopter.</p>",
                "<h3>Blueprints : accélérer les usages</h3><p>Nvidia a enrichi ses Blueprints, des workflows préconfigurés pour déployer des agents IA facilement. Cinq partenariats (CrewAI, LangChain, etc.) offrent des solutions prêtes à l’emploi, tandis que des outils comme la conversion de PDF en podcasts ou la synthèse vidéo sont proposés. Quatre Blueprints Omniverse ciblent l’IA physique, avec Mega qui simule des flottes de robots pour la logistique.</p>",
                "<h3>Conclusion</h3><p>Avec Mega, testé par Accenture et Kion pour créer des jumeaux numériques d’entrepôts, Nvidia vise un marché logistique de 1000 milliards de dollars. En combinant Nemotron et la robotique, l’entreprise se positionne comme un pionnier de l’IA physique, prête à transformer industries et entrepôts grâce à des simulations avancées et des robots intelligents.</p>"
            ],
            "images": [{
                "url": "https://www.usine-digitale.fr/mediatheque/3/6/2/001521263_896x598_c.jpg",
                "caption": "Un jumeau numérique d’entrepôt simulé avec Nvidia Cosmos pour entraîner des robots."
            }],
            "sources": [{
                "title": "L’Usine Digitale",
                "url": "https://www.usine-digitale.fr/article/ces-2025-nvidia-lance-nemotron-une-famille-de-llms-concue-pour-l-agentique.N2225205"
            }]
        },
        {
            title: "DeepSeek : Le concurrent chinois de ChatGPT bouleverse le marché de l'IA",
            description: "DeepSeek, une startup chinoise, a récemment surpassé ChatGPT sur l'App Store d'Apple aux États-Unis, suscitant des inquiétudes concernant la protection des données personnelles.",
            date: "27 janvier 2025",
            content: [
                "<h3>Introduction</h3><p>DeepSeek, une startup chinoise spécialisée dans l'intelligence artificielle, a récemment lancé un assistant gratuit qui a rapidement gagné en popularité, dépassant ChatGPT en tant qu'application gratuite la plus téléchargée sur l'App Store d'Apple aux États-Unis. Cette ascension fulgurante a attiré l'attention des autorités de protection des données personnelles, notamment en Europe, où des enquêtes ont été ouvertes concernant la conformité de DeepSeek aux réglementations en vigueur.</p>",
                "<h3>Problèmes de sécurité et de confidentialité</h3><p>Peu après son ascension, DeepSeek a été victime d'une cyberattaque, obligeant l'entreprise à limiter temporairement les nouvelles inscriptions. Cette attaque a mis en lumière des préoccupations concernant la sécurité des données des utilisateurs et la robustesse des mesures de protection mises en place par la startup.</p>",
                "<h3>Impact sur le marché technologique</h3><p>L'émergence de DeepSeek a eu des répercussions significatives sur le marché technologique mondial. Les actions de Nvidia, un acteur majeur dans le domaine des puces pour l'IA, ont connu une baisse notable, perdant près de 600 milliards de dollars en valeur marchande en une seule journée. Cette chute reflète les inquiétudes des investisseurs face à la montée en puissance de concurrents chinois dans le secteur de l'IA et aux implications potentielles pour les entreprises technologiques établies.</p>",
                "<h3>Réactions des autorités européennes</h3><p>En Europe, les autorités de protection des données personnelles ont exprimé des inquiétudes quant à l'utilisation des données par DeepSeek. Des enquêtes ont été lancées pour déterminer si l'application respecte les réglementations européennes en matière de confidentialité et de protection des données. Ces investigations pourraient avoir des implications majeures pour l'expansion de DeepSeek sur le marché européen.</p>",
                "<h3>Conclusion</h3><p>La montée en puissance de DeepSeek illustre la rapidité avec laquelle le paysage de l'intelligence artificielle peut évoluer. Alors que les startups chinoises gagnent en influence, les questions de sécurité, de confidentialité et de conformité réglementaire deviennent de plus en plus cruciales. Les acteurs du marché et les régulateurs devront collaborer étroitement pour garantir que les innovations en matière d'IA se développent de manière sûre et éthique.</p>",
            ],
            images: [{
                url: "deepseek.avif",
                caption: "DeepSeek vs OpenAI",
            }, ],
            sources: [{
                    title: "Reuters",
                    url: "https://www.reuters.com/technology/artificial-intelligence/chinese-ai-startup-deepseek-overtakes-chatgpt-apple-app-store-2025-01-27/",
                },
                {
                    title: "Le Monde",
                    url: "https://www.lemonde.fr/pixels/article/2025/01/30/deepseek-face-au-concurrent-chinois-de-chatgpt-l-inquietude-des-autorites-de-protection-des-donnees-personnelles_6523968_4408996.html",
                },
            ],
        },
        {
            title: "LUCIE : L'IA générative open source française attendue à Open Source Experience 2024",
            description: "LUCIE, une initiative française d'intelligence artificielle générative open source, sera présentée lors de l'événement Open Source Experience le 4 décembre 2024.",
            date: "18 novembre 2024",
            content: [
                "<h3>Présentation de LUCIE</h3><p>LUCIE est un modèle d'intelligence artificielle générative open source développé dans le cadre de l'initiative OpenLLM-France. Lancée à l'été 2023, cette initiative regroupe plus de 800 acteurs publics et privés, dont des chercheurs, des startups et des entreprises en France et en Europe. Son ambition est de créer des communs numériques pour l'IA générative, avec un accent particulier sur l'éducation, tout en garantissant la souveraineté des données.</p>",
                "<h3>Objectifs et caractéristiques</h3><ul><li><strong>Transparence des données :</strong> LUCIE se distingue par des données d'entraînement 100 % transparentes, assurant une traçabilité complète et une approche éthique dans le développement de l'IA.</li><li><strong>Approche communautaire :</strong> Le projet est porté par une communauté active, favorisant la collaboration entre divers acteurs du secteur numérique, des organismes de recherche et de l'industrie.</li><li><strong>Adaptation à l'éducation :</strong> LUCIE est conçue pour être un modèle d'IA souverain, adapté à des usages spécifiques comme l'éducation, avec une grande stabilité, une compatibilité avec la protection des données et une documentation exhaustive.</li></ul>",
                "<h3>Entraînement et développement</h3><p>Déployé sur le supercalculateur Jean Zay (GENCI), l'entraînement de LUCIE vise à traiter 3 000 milliards de tokens. Les étapes principales incluent :</p><ol><li><strong>Composition du dataset :</strong> Un mélange multilingue comprenant 33 % d'anglais, 32,4 % de français, 15 % de code/mathématiques, et 20 % d'autres langues comme l'allemand, l'espagnol et l'italien.</li><li><strong>Filtrage des données :</strong> Un tri rigoureux garantit des informations de haute qualité, tout en excluant les contenus redondants, erronés ou offensants.</li><li><strong>Parallélisme avancé :</strong> La méthode de parallélisme « 3D » optimise les ressources tout en actualisant les données en fin d'entraînement.</li><li><strong>Extension de la fenêtre contextuelle :</strong> Capable de traiter jusqu'à 128 000 tokens, LUCIE est particulièrement adaptée aux cas d'usage comme le RAG (Retrieval-Augmented Generation).</li><li><strong>Instruction et alignement :</strong> Une phase en deux étapes (fine-tuning et apprentissage par renforcement) affine les performances du modèle.</li></ol>",
                "<h3>Présentation à l'Open Source Experience 2024</h3><p>LUCIE sera présentée lors de l'événement Open Source Experience :</p><ul><li><strong>Date :</strong> 4 décembre 2024</li><li><strong>Lieu :</strong> Salle Alice Recoque, à 14h</li><li><strong>Programme :</strong> Retour sur la genèse de LUCIE avec Michel-Marie Maudet, Directeur Général de LINAGORA.</li></ul><p>Cette présentation sera l'occasion de découvrir les avancées du projet et de comprendre son importance pour la souveraineté numérique en France et en Europe.</p>",
            ],
            images: [{
                url: "lucie-ia.webp",
                caption: "LUCIE, l'IA open source française",
            }, ],
            sources: [{
                title: "GoodTech.info",
                url: "https://goodtech.info/lucie-lia-generative-open-source-francaise-vous-attend-a-open-source-experience-2024/",
            }, ],
        },
        {
            title: "L'orange Pi & RKLLM",
            description: "Rockchip RKLLM, une pile logicielle pour déployer des modèles d'IA génératifs sur les SoC Rockchip RK3588, RK3588S et RK3576, exploite le NPU intégré pour offrir des performances IA de 6 TOPS.",
            date: "17 juillet 2024",
            content: [
                "<h3>Présentation de l'Orange Pi</h3><p>L'Orange Pi est une solution innovante dans le monde des micro-ordinateurs, offrant une combinaison unique de faible consommation énergétique, de puissance de calcul et d'accessibilité financière. Avec sa capacité à répondre à des besoins divers, il devient un choix incontournable pour les développeurs, les makers et même les entreprises cherchant à déployer des infrastructures performantes à moindre coût.</p>",
                "<h3>Caractéristiques principales</h3><ul><li><strong>Consommation énergétique minimale :</strong> L'Orange Pi est conçu pour être extrêmement économe en énergie, ce qui en fait un choix idéal pour des applications à faible consommation.</li><li><strong>Processeur puissant :</strong> Équipé d'un processeur RK (Rockchip) avec une NPU (Neural Processing Unit), il offre des performances exceptionnelles pour le traitement de données d'intelligence artificielle.</li><li><strong>Extensibilité de la RAM :</strong> L'Orange Pi prend en charge jusqu'à 32 Go de RAM, offrant ainsi une grande capacité de traitement pour des tâches complexes et des applications gourmandes en ressources.</li><li><strong>Coût abordable :</strong> À un prix très compétitif, l'Orange Pi est l'une des solutions les plus accessibles sur le marché.</li></ul>",
                "<h3>Performances exceptionnelles</h3><p>Grâce à son processeur RK et à sa NPU intégrée, l'Orange Pi excelle dans les applications d'intelligence artificielle, de machine learning, et de traitement multimédia. Il peut gérer des tâches complexes tout en maintenant une consommation d'énergie remarquablement faible, ce qui le rend idéal pour des projets embarqués ou des serveurs à faible coût.</p>",
                "<h3>Utilisation et flexibilité</h3><p>Avec sa capacité à accueillir jusqu'à 32 Go de RAM, l'Orange Pi peut exécuter une large gamme d'applications, de la domotique aux serveurs légers, en passant par des projets de machine learning. Son faible coût et sa puissance de calcul en font une option privilégiée pour des projets personnels ou professionnels.</p>",
                "<h3>Conclusion</h3><p>L'Orange Pi représente une solution équilibrée entre performance, efficacité énergétique et coût, ce qui en fait un choix idéal pour ceux qui cherchent à développer des projets innovants sans se ruiner. Il ouvre de nouvelles possibilités dans l'informatique embarquée et l'IA à un prix accessible pour tous.</p>",
            ],
            images: [{
                    url: "rkllm.png",
                    caption: "Performances de RKLLM sur le TinyLLAMA avec 1.1B de paramètres",
                },
                {
                    url: "rkllm-chat.png",
                    caption: "Diagramme montrant l'utilisation du NPU sur le SoC RK3588",
                },
            ],
            sources: [{
                    title: "Raspberry Me",
                    url: "https://www.raspberryme.com/kit-doutils-rockchip-rkllm-publie-pour-les-modeles-de-langage-volumineux-acceleres-par-npu-sur-les-soc-rk3588-rk3588s-rk3576/",
                },
                {
                    title: "Radxa Wiki",
                    url: "https://wiki.radxa.com/",
                },
                {
                    title: "Orange Pi Documentation",
                    url: "https://docs.orangepi.org/",
                },
            ],
        },
        {
            title: "Introducing Nomic Embed: A Truly Open Embedding Model",
            author: "Nomic Team",
            description: "Nomic Embed est un modèle d'embedding de texte open-source qui dépasse OpenAI Ada-002 sur les tâches à long et court contexte.",
            date: "12 octobre 2024",
            content: [
                "<h3>Qu'est-ce que Nomic Embed ?</h3><p>Nomic Embed est le premier modèle d'embedding de texte entièrement open source, avec des données d'entraînement accessibles et un code d'entraînement auditable. Il présente une longueur de contexte de 8192, surpassant OpenAI Ada-002 et text-embedding-3-small sur diverses tâches.</p>",
                "<h3>Caractéristiques principales</h3><ul><li><strong>Open Source :</strong> Modèle entièrement open source.</li><li><strong>Données ouvertes :</strong> Les données d'entraînement sont disponibles pour la vérification.</li><li><strong>Code d'entraînement accessible :</strong> Auditable et réutilisable.</li></ul>",
                "<h3>Performances exceptionnelles</h3><p>Avec une architecture basée sur BERT, Nomic Embed a été formé via un apprentissage contrastif sur plus de 235 millions de paires de textes. Sur le Massive Text Embedding Benchmark (MTEB), il surpasse Ada-002 et d'autres modèles tout en maintenant une longueur de contexte plus élevée.</p>",
                "<h3>Utilisation et accès</h3><p>Nomic Embed est accessible via l'API Nomic Atlas avec 1 million de tokens gratuits pour les charges de travail en production, garantissant la sécurité et la conformité pour les entreprises.</p>",
                "<h3>Évaluation et amélioration</h3><p>Pour évaluer les différences entre les modèles, nous avons comparé les espaces d'embedding de Nomic Embed et OpenAI Ada sur un échantillon de 250 000 articles de Wikipedia, mettant en lumière des différences structurelles dans leur traitement des articles de désambiguïsation.</p>",
                "<h3>Accès aux données</h3><p>Pour accéder aux données complètes, créez un compte Nomic Atlas et suivez les instructions fournies dans le dépôt de code.</p>",
            ],
            images: [{
                    url: "nomic.png",
                    caption: "Illustration de Nomic Embed",
                },
                {
                    url: "nomic2.png",
                    caption: "Screenshot de l'explorer Nomic Atlas",
                },
            ],
            sources: [{
                title: "Nomic",
                url: "https://nomic.ai",
            }, ],
        },
        {
            title: "Llama 3.2 : Meta met à nouveau les bouchées doubles en matière d’intelligence artificielle",
            description: "Meta a dévoilé la version Llama 3.2 lors de Meta Connect 2024. Elle offre des capacités multimodales avec traitement du texte, des images et des interactions vocales.",
            date: "26 septembre 2024",
            content: [
                "<h3>Introduction</h3><p>Meta a dévoilé la dernière version de son IA open-source, <strong>Llama 3.2</strong>, lors de Meta Connect 2024. Cette version offre des capacités multimodales, avec la possibilité de traiter à la fois du texte et des images, et d'interagir vocalement en utilisant des voix de célébrités.</p>",

                "<h3>Fonctionnalités principales</h3><ul>",
                "<li><strong>Multimodalité</strong> : Llama peut traiter simultanément du texte et des images, facilitant des tâches comme l'analyse de photos ou la génération de légendes.</li>",
                "<li><strong>Reconnaissance vocale</strong> : Llama intègre un module de reconnaissance vocale, permettant des interactions naturelles et la synthèse vocale avec des voix de célébrités.</li>",
                "<li><strong>AI Studio</strong> : Permet la création d'avatars virtuels pour des interactions en vidéo, idéal pour des applications comme Instagram et Messenger.</li>",
                "</ul>",

                "<h3>Modèles SLM : Compacts et performants</h3><p>Les modèles <strong>SLM (Small Language Models)</strong>, comprenant les versions 1B et 3B, sont conçus pour offrir des performances élevées sur des appareils légers, tels que les smartphones et dispositifs embarqués. Ces modèles utilisent des techniques avancées comme <strong>l’élagage (pruning)</strong> et la <strong>distillation</strong> pour optimiser les performances tout en réduisant la taille et la consommation de ressources.</p><p>Le but principal des modèles SLM est de permettre une utilisation locale et efficace sur des appareils peu puissants. Ils sont idéaux pour des tâches comme le <strong>suivi d’instructions</strong>, la <strong>synthèse</strong> et la <strong>réécriture</strong>, tout en offrant une faible latence. Leur compatibilité avec les architectures <strong>Arm</strong>, notamment les processeurs <strong>Qualcomm</strong> et <strong>MediaTek</strong>, en fait une solution flexible pour les applications mobiles.</p><p>Les versions SLM sont également <strong>facilement personnalisables</strong> grâce à des outils comme <strong>TorchTune</strong>, ce qui permet aux développeurs d'adapter ces modèles à des besoins spécifiques sans avoir besoin d’infrastructures lourdes.</p>",

                "<h3>Disponibilité</h3><p>Llama 3.2 sera disponible gratuitement sur <strong>WhatsApp</strong>, <strong>Instagram</strong>, <strong>Facebook</strong>, et <strong>Messenger</strong>. Toutefois, les versions multimodales ne seront pas accessibles en Europe tant que Meta n’aura pas résolu les questions de conformité avec les régulations européennes.</p>",
            ],
            images: [{
                    url: "Benchmarks-llama3.2.png",
                    caption: "Llama devient multimodal et peut travailler avec des images",
                },
                {
                    url: "SchemaLlama.png",
                    caption: "Llama Schema",
                },
            ],
            sources: [{
                title: "Frandroid",
                url: "https://www.frandroid.com/marques/meta/2349720_llama-3-2-meta-met-a-nouveau-les-bouchees-doubles-en-matiere-dintelligence-artificielle",
            }, ],
        },

    ],

    ROBOTIC: [{
            "title": "Reachy Mini : Le robot open-source qui démocratise l’IA et la robotique",
            "description": "Pollen Robotics et Hugging Face dévoilent Reachy Mini, un robot compact, abordable et open-source, conçu pour l’interaction homme-robot et l’expérimentation en IA. À partir de 299 $, il s’adresse aux développeurs, éducateurs et passionnés, avec une communauté mondiale pour partager comportements et applications.",
            "date": "10 juillet 2025",
            "content": [
                "<h3>Introduction</h3><p>Le 9 juillet 2025, Pollen Robotics, en collaboration avec Hugging Face, a annoncé Reachy Mini, un robot open-source révolutionnaire conçu pour rendre la robotique et l’intelligence artificielle (IA) accessibles à tous. Avec un prix de départ de 299 $, ce robot compact et expressif est destiné aux développeurs, chercheurs, éducateurs, passionnés de robotique et même aux familles souhaitant coder ensemble. Reachy Mini promet de démocratiser l’accès à la création d’applications IA physiques grâce à sa modularité, son intégration avec les modèles open-source de Hugging Face et une communauté mondiale active.</p>",
                "<h3>Un robot compact et abordable</h3><p>Reachy Mini se distingue par sa petite taille (28 cm de haut, 16 cm de large, et environ 23 cm en mode veille) et son poids léger de 1,5 kg. Disponible en deux versions – Lite (299 $) et autonome avec Raspberry Pi 5, connexion sans fil et batterie (449 $) – il est livré sous forme de kit à assembler, ce qui en fait une expérience ludique et éducative. La version Lite est compatible avec Mac et Linux (Windows à venir), tandis que la version complète intègre des fonctionnalités avancées comme un accéléromètre, quatre microphones et une connectivité Wi-Fi.</p>",
                "<h3>Conçu pour l’interaction et l’expérimentation</h3><p>Reachy Mini est équipé pour des interactions homme-robot riches grâce à une caméra grand angle, des haut-parleurs de 5W, des microphones et des mouvements expressifs (tête avec 6 degrés de liberté, rotation complète du corps et antennes animées). Ces caractéristiques permettent des applications variées, allant des conversations alimentées par IA à la reconnaissance visuelle. Les 15+ comportements préconfigurés disponibles au lancement sur le hub Hugging Face permettent aux utilisateurs de commencer à expérimenter dès l’ouverture de la boîte, que ce soit pour raconter des histoires aux enfants ou tester des algorithmes d’IA avancés.</p>",
                "<h3>Programmation et communauté open-source</h3><p>Reachy Mini est entièrement programmable en Python via un SDK open-source, avec un support prévu pour JavaScript et Scratch, rendant la robotique accessible même aux débutants. Un SDK de simulation permet de développer et tester des projets avant même de recevoir le robot. L’intégration avec Hugging Face permet d’utiliser des modèles d’IA de pointe pour la parole, la vision et la personnalisation des comportements. La communauté, forte des 10 millions d’utilisateurs de Hugging Face, peut partager et télécharger de nouveaux comportements, favorisant une innovation collaborative. Le code source, bien que non explicitement lié dans l’annonce, est accessible via les dépôts open-source de Pollen Robotics et Hugging Face, avec des détails partagés sur leur Discord officiel (<a href='https://discord.gg/HDrGY9eJHt'>rejoindre ici</a>).</p>",
                "<h3>Applications et potentiel</h3><p>Reachy Mini vise à transformer plusieurs domaines. Pour l’éducation, il offre une plateforme abordable pour enseigner la programmation et l’IA. Pour les développeurs, il permet de prototyper des applications IA physiques, comme des assistants interactifs ou des robots logistiques. Les commentaires de la communauté sur Discord soulignent l’enthousiasme pour son potentiel, notamment pour des interactions vocales avec les enfants ou des projets de recherche. Bien que toujours en phase de développement précoce, sans garanties formelles, Reachy Mini est conçu pour évoluer avec les retours des early adopters. Les livraisons débuteront à l’été 2025 pour la version Lite et en lots échelonnés à partir de l’automne 2025 pour la version complète.</p>",
                "<h3>Conclusion</h3><p>Avec Reachy Mini, Pollen Robotics et Hugging Face posent les bases d’une robotique accessible et communautaire. En combinant un prix abordable, une conception open-source et une intégration avec les écosystèmes IA les plus avancés, ce robot pourrait marquer le début d’une nouvelle ère pour l’IA physique à l’échelle des consommateurs. Que vous soyez un développeur chevronné ou un parent souhaitant initier vos enfants à la programmation, Reachy Mini offre une plateforme polyvalente pour apprendre, créer et partager. Rejoignez la communauté sur Discord et participez à cette révolution robotique dès aujourd’hui.</p>"
            ],
            "images": [{
                "url": "reachy-mini.png",
                "caption": "Reachy Mini, le robot compact et expressif conçu pour l’IA et l’interaction homme-robot."
            }],
            "sources": [{
                    "title": "Hugging Face Blog – Reachy Mini",
                    "url": "https://huggingface.co/blog/reachy-mini"
                },
                {
                    "title": "Pollen Robotics",
                    "url": "https://www.pollen-robotics.com/reachy-mini"
                },
                {
                    "title": "Discord Reachy Mini Community",
                    "url": "https://discord.gg/HDrGY9eJHt"
                }
            ]
        },

        // Juin
        {
            "title": "Automatica 2025 : Hexagon et NEURA Robotics révolutionnent la robotique humanoïde",
            "description": "Lors du salon Automatica 2025 à Munich, Hexagon AB a dévoilé AEON, son premier robot humanoïde, tandis que NEURA Robotics a présenté la troisième génération de son robot 4NE1 et le robot domestique MiPA. Ces innovations marquent une étape clé dans l’automatisation industrielle et domestique.",
            "date": "25 juin 2025",
            "content": [
                "<h3>Introduction</h3><p>Du 24 au 27 juin 2025, le salon Automatica à Munich a été le théâtre d’annonces majeures dans le domaine de la robotique, avec Hexagon AB et NEURA Robotics en tête d’affiche. Hexagon a lancé AEON, son premier robot humanoïde conçu pour répondre aux pénuries de main-d’œuvre, tandis que NEURA Robotics a dévoilé la troisième génération de son robot 4NE1 et le robot domestique MiPA. Ces avancées, rapportées par The Robot Report, illustrent l’essor de la robotique humanoïde et son potentiel pour transformer les industries et les foyers. Automatica 2025 a également mis en lumière l’intégration croissante de l’IA dans la robotique, renforçant l’autonomie et la polyvalence des systèmes.</p>",
                "<h3>Hexagon AB entre dans la course aux humanoïdes</h3><p>Hexagon AB, une entreprise suisse spécialisée dans les technologies de mesure, a surpris les observateurs en dévoilant AEON lors de son événement Hexagon LIVE Global. Conçu pour répondre aux besoins réels des clients, AEON vise à pallier les pénuries de main-d’œuvre dans des secteurs comme la fabrication et la logistique. Selon The Robot Report, ce robot combine des capteurs avancés et une IA embarquée pour effectuer des tâches complexes avec une précision inégalée. AEON se distingue par sa capacité à s’intégrer dans des environnements industriels existants, réduisant le besoin de reprogrammation coûteuse. Cette entrée d’Hexagon dans la robotique humanoïde souligne l’attrait croissant de ces technologies pour les entreprises confrontées à des défis de main-d’œuvre.</p>",
                "<h3>NEURA Robotics : une vision pour l’industrie et la maison</h3><p>NEURA Robotics, basée en Allemagne, a profité d’Automatica 2025 pour présenter deux innovations majeures. La troisième génération de son robot humanoïde 4NE1, optimisée pour l’automatisation industrielle, intègre des capacités cognitives avancées pour des tâches comme l’assemblage et la manipulation. Par ailleurs, le robot MiPA, destiné aux applications domestiques et de service, marque l’ambition de NEURA de pénétrer le marché grand public. Selon Robotics & Automation News, MiPA utilise l’écosystème ouvert Neuraverse pour permettre aux développeurs de créer des comportements personnalisés. Ces annonces, combinées à un partenariat avec HD Hyundai pour des applications en construction navale, positionnent NEURA comme un acteur clé dans la robotique cognitive.</p>",
                "<h3>Contexte et tendances globales</h3><p>Automatica 2025 s’inscrit dans un contexte où la robotique connaît une croissance fulgurante, avec un marché mondial des robots industriels atteignant 16,5 milliards de dollars en 2025, selon l’International Federation of Robotics. L’intégration de l’IA, comme les modèles d’apprentissage par renforcement et les systèmes de vision, permet aux robots de s’adapter à des environnements dynamiques. Cependant, des défis subsistent, notamment le coût élevé des humanoïdes et la nécessité de normes de sécurité, comme celles en cours de développement par l’IEEE Robotics & Automation Society. Les posts sur X, tels que celui de @MarioNawfal, reflètent l’enthousiasme pour ces technologies, mais aussi les inquiétudes sur leur impact économique et social.</p>",
                "<h3>Conclusion</h3><p>Automatica 2025 a confirmé que la robotique humanoïde est à un tournant, avec des acteurs comme Hexagon et NEURA Robotics repoussant les limites de l’automatisation. AEON et 4NE1 illustrent le potentiel des robots pour répondre aux besoins industriels, tandis que MiPA ouvre la voie à une adoption domestique. Ces innovations, soutenues par des avancées en IA et des écosystèmes ouverts, promettent de transformer la manière dont nous travaillons et vivons. Cependant, leur succès dépendra de la capacité à surmonter les obstacles techniques et économiques, ainsi que de l’acceptation par le public. Automatica 2025 restera un jalon dans cette révolution robotique.</p>"
            ],
            "images": [{
                "url": "https://www.therobotreport.com/wp-content/uploads/2025/06/hexagon-aeon-robot.jpg",
                "caption": "AEON, le premier robot humanoïde de Hexagon AB, dévoilé à Automatica 2025."
            }],
            "sources": [{
                    "title": "The Robot Report – Top 10 Robotics Developments of June 2025",
                    "url": "https://www.therobotreport.com/top-10-robotics-developments-june-2025/"
                },
                {
                    "title": "Robotics & Automation News – NEURA Robotics at Automatica 2025",
                    "url": "https://roboticsandautomationnews.com/2025/06/23/neura-robotics-automatica-2025/"
                },
                {
                    "title": "International Federation of Robotics – Top 5 Global Robotics Trends 2025",
                    "url": "https://ifr.org/news/top-5-global-robotics-trends-2025/"
                }
            ]
        },
        {
            "title": "Locus Robotics atteint 5 milliards d’unités manipulées et redéfinit la logistique",
            "description": "En juin 2025, Locus Robotics a annoncé avoir dépassé les 5 milliards d’unités manipulées par ses robots mobiles autonomes (AMRs), consolidant son leadership dans l’automatisation des entrepôts. Cette étape, soutenue par l’IA, illustre la transformation de la logistique mondiale.",
            "date": "20 juin 2025",
            "content": [
                "<h3>Introduction</h3><p>Le 17 juin 2025, Locus Robotics, leader mondial de l’automatisation des entrepôts, a annoncé avoir dépassé le cap des 5 milliards d’unités manipulées par ses robots mobiles autonomes (AMRs). Cette réalisation, rapportée par un communiqué de presse sur leur site, souligne l’impact croissant de l’IA dans la logistique. Alors que les entrepôts mondiaux font face à une demande croissante et à des pénuries de main-d’œuvre, les solutions de Locus Robotics, comme la plateforme LocusONE, transforment la gestion des flux de marchandises. Cet exploit intervient dans un contexte où la robotique logistique attire l’attention, comme en témoigne un post de @MarioNawfal sur X à propos du robot Helix.</p>",
                "<h3>Une performance record grâce à l’IA</h3><p>Les AMRs de Locus Robotics, tels que Locus Origin et Locus Vector, utilisent l’IA pour optimiser la collecte, le tri et le transport des marchandises dans les entrepôts. La plateforme LocusONE, dotée de capacités d’apprentissage automatique, permet aux robots de s’adapter en temps réel aux environnements dynamiques, réduisant les temps de traitement. Selon le communiqué, le cap des 5 milliards d’unités manipulées reflète l’adoption massive de ces technologies par des géants comme DHL et GEODIS. Le robot Helix, mentionné dans un post sur X, illustre cette tendance avec un temps moyen de manipulation de colis réduit à 4,05 secondes, démontrant l’efficacité des AMRs modernes.</p>",
                "<h3>Impact sur la logistique mondiale</h3><p>La logistique est un secteur clé pour la robotique, avec un marché estimé à 46 milliards de dollars en 2024, projeté à 169,8 milliards d’ici 2032, selon Duro Labs. Les AMRs de Locus Robotics répondent aux besoins des détaillants et des entreprises de commerce électronique, comme en témoigne leur collaboration avec K-Parts pour optimiser le tri des pièces de moto. Cette automatisation réduit les erreurs, améliore la sécurité et permet aux travailleurs humains de se concentrer sur des tâches à plus haute valeur ajoutée. De plus, les robots de Locus contribuent aux objectifs de durabilité en réduisant les déchets et en optimisant l’utilisation des ressources, alignés sur les objectifs de l’ONU.</p>",
                "<h3>Défis et perspectives</h3><p>Malgré ces avancées, l’adoption massive des AMRs fait face à des défis, notamment le coût initial et la nécessité de former le personnel pour interagir avec les robots. La pénurie mondiale d’ingénieurs, avec seulement 45 000 diplômés en mécanique aux États-Unis contre 350 000 en Chine, pourrait également freiner l’innovation, selon The Robot Report. Cependant, des partenariats comme celui de Locus avec GEODIS, qui établit de nouvelles normes de vitesse et d’efficacité, montrent que ces obstacles peuvent être surmontés. Locus Robotics prévoit de continuer à développer sa plateforme LocusINTELLIGENCE pour fournir des analyses prédictives et améliorer la prise de décision.</p>",
                "<h3>Conclusion</h3><p>En atteignant les 5 milliards d’unités manipulées, Locus Robotics démontre le potentiel de l’IA pour révolutionner la logistique. Ses AMRs, soutenus par la plateforme LocusONE, offrent une solution scalable pour les entrepôts du monde entier, répondant aux défis de la main-d’œuvre et de l’efficacité. Alors que la demande pour l’automatisation continue de croître, Locus Robotics se positionne comme un leader, ouvrant la voie à une logistique plus intelligente et durable. Les progrès dans ce domaine, combinés à l’enthousiasme observé sur des plateformes comme X, suggèrent que la robotique logistique est à l’aube d’une transformation majeure.</p>"
            ],
            "images": [{
                "url": "https://locusrobotics.com/wp-content/uploads/2025/06/locus-amr-warehouse.jpg",
                "caption": "Un robot mobile autonome de Locus Robotics en action dans un entrepôt."
            }],
            "sources": [{
                    "title": "Locus Robotics – Press Release June 17, 2025",
                    "url": "https://locusrobotics.com/news/locus-robotics-surpasses-5-billion-units-picked-milestone/"
                },
                {
                    "title": "The Robot Report – Top 10 Robotics Developments of June 2025",
                    "url": "https://www.therobotreport.com/top-10-robotics-developments-june-2025/"
                },
                {
                    "title": "Duro Labs – Robotics Trends 2025",
                    "url": "https://durolabs.co/the-robotics-trends-to-watch-in-2025/"
                }
            ]
        },
        // Mai

        {
            "title": "ICRA 2025 : NVIDIA et Boston Dynamics repoussent les limites de l’IA physique",
            "description": "Lors de l’ICRA 2025 à Atlanta, NVIDIA et Boston Dynamics ont dévoilé des avancées majeures en IA physique, avec des innovations comme Isaac GR00T N1.5 et une collaboration pour doter le robot Atlas de capacités d’apprentissage par renforcement, ouvrant la voie à des robots humanoïdes plus autonomes.",
            "date": "25 mai 2025",
            "content": [
                "<h3>Introduction</h3><p>Du 19 au 23 mai 2025, l’International Conference on Robotics and Automation (ICRA) à Atlanta a été le théâtre de percées majeures en robotique, avec NVIDIA et Boston Dynamics en tête d’affiche. NVIDIA a présenté des innovations en IA physique, notamment son modèle Isaac GR00T N1.5, tandis que Boston Dynamics a annoncé une collaboration avec NVIDIA pour améliorer son robot humanoïde Atlas via l’apprentissage par renforcement. Ces avancées, relayées par des posts sur X et des articles spécialisés, marquent un tournant pour les robots autonomes capables de naviguer et d’interagir dans des environnements complexes.</p>",
                "<h3>Les avancées de NVIDIA à l’ICRA 2025</h3><p>NVIDIA, sous la direction de Dieter Fox, a dévoilé plusieurs projets révolutionnaires lors de l’ICRA 2025. Le modèle Isaac GR00T N1.5, une plateforme d’IA pour robots à usage général, permet de générer des milliers de variations d’une tâche à partir d’une seule démonstration humaine, grâce à l’outil Cosmos pour la simulation physique. Selon un post de @heyshrutimishra sur X, cette approche réduit drastiquement le temps d’entraînement des robots. Parmi les autres innovations, le système HOVER offre une transition fluide entre locomotion et manipulation pour les robots humanoïdes, tandis que DreamDrive génère des scènes de conduite 4D réalistes pour les véhicules autonomes. Ces travaux, détaillés dans le blog NVIDIA, visent à combler le fossé des données et à améliorer la sécurité des robots.</p>",
                "<h3>Collaboration NVIDIA-Boston Dynamics</h3><p>Boston Dynamics, connu pour son robot Atlas, a renforcé son partenariat avec NVIDIA pour intégrer le framework Isaac GR00T et la plateforme Jetson Thor. Cette collaboration, annoncée en mars et mise en avant à l’ICRA, vise à doter Atlas de capacités d’apprentissage par renforcement pour des tâches de manipulation mobile dynamiques. Un article de The Robot Report souligne que cette alliance illustre la convergence entre l’IA et les robots humanoïdes, avec un potentiel pour des applications industrielles, comme l’automatisation des entrepôts, et des usages domestiques. Une vidéo publiée par Boston Dynamics en mars, montrant Atlas en cours d’assemblage, a également suscité un vif intérêt sur les réseaux sociaux, reflétant l’enthousiasme pour ces technologies.</p>",
                "<h3>Impact et perspectives</h3><p>Ces avancées s’inscrivent dans une tendance plus large, où l’IA physique devient un moteur clé de la robotique. Selon l’International Federation of Robotics, le marché mondial des robots industriels a atteint 16,5 milliards de dollars en 2025, avec l’IA comme principal levier d’innovation. Les technologies présentées à l’ICRA, comme les systèmes de NVIDIA pour la manipulation en contact riche ou la détection des défaillances de perception, pourraient transformer des secteurs comme la logistique, l’automobile et même la santé. Cependant, des défis subsistent, notamment en matière de scalabilité et de coûts, comme le note The Robot Report à propos des robots humanoïdes. La collaboration entre NVIDIA et Boston Dynamics pourrait toutefois établir une norme pour les robots polyvalents, capables d’apprendre et de s’adapter comme des humains.</p>",
                "<h3>Conclusion</h3><p>L’ICRA 2025 a confirmé le rôle central de l’IA physique dans l’avenir de la robotique. Les innovations de NVIDIA, combinées à la collaboration avec Boston Dynamics, ouvrent des perspectives excitantes pour des robots humanoïdes plus intelligents et autonomes. Alors que le marché mondial de la robotique continue de croître, ces avancées pourraient redéfinir la manière dont les robots interagissent avec le monde, de l’usine à la maison. La communauté scientifique et industrielle, galvanisée par des événements comme l’ICRA, est prête à transformer ces prototypes en solutions concrètes d’ici la fin de la décennie.</p>"
            ],
            "images": [{
                "url": "https://blogs.nvidia.com/wp-content/uploads/2025/05/robotics-research-icra-2025.jpg",
                "caption": "Présentation des innovations en IA physique par NVIDIA à l’ICRA 2025 à Atlanta."
            }],
            "sources": [{
                    "title": "NVIDIA Blog – Robotics Research Breakthroughs at ICRA 2025",
                    "url": "https://blogs.nvidia.com/blog/2025/05/19/robotics-research-icra-2025/"
                },
                {
                    "title": "The Robot Report – Top 10 Robotics Developments of March 2025",
                    "url": "https://www.therobotreport.com/top-10-robotics-developments-march-2025/"
                },
                {
                    "title": "Post on X by @heyshrutimishra",
                    "url": "https://t.co/GnBsDyck1e"
                }
            ]
        },
        {
            "title": "Robotics Summit & Expo 2025 : Les robots humanoïdes et autonomes à l’honneur",
            "description": "Le Robotics Summit & Expo 2025, tenu à Boston en mai, a rassemblé des milliers d’acteurs de la robotique pour présenter des innovations comme les robots humanoïdes de Persona AI et les AMRs améliorés d’ABB, marquant une étape clé dans l’automatisation industrielle et logistique.",
            "date": "20 mai 2025",
            "content": [
                "<h3>Introduction</h3><p>En mai 2025, le Robotics Summit & Expo à Boston a réuni plus de 200 exposants et des milliers de participants pour présenter les dernières avancées en robotique. Cet événement, suivi par le salon Automate 2025 à Detroit, a mis en lumière des innovations dans les robots humanoïdes, les robots mobiles autonomes (AMRs) et l’intelligence artificielle embarquée. Parmi les annonces marquantes, Persona AI a levé des fonds pour ses robots humanoïdes destinés à la construction navale, tandis qu’ABB a dévoilé des AMRs améliorés avec navigation vSLAM. Ces développements, rapportés par The Robot Report, soulignent l’essor rapide de l’automatisation dans l’industrie.</p>",
                "<h3>Persona AI : des humanoïdes pour l’industrie</h3><p>Persona AI Inc., une start-up basée à Houston, a annoncé lors du Robotics Summit avoir clôturé un tour de financement pré-seed sursouscrit pour accélérer le développement de ses robots humanoïdes. Ces robots, conçus pour des tâches complexes dans la construction navale et la fabrication, intègrent une IA embarquée pour manipuler des outils et travailler aux côtés des humains. Selon The Robot Report, la plateforme de Persona AI vise à automatiser des processus à forte intensité de main-d’œuvre, réduisant les coûts et les risques dans des environnements industriels. Cette levée de fonds illustre l’intérêt croissant pour les robots humanoïdes, avec des prévisions de 1 million d’unités expédiées d’ici 2030, comme mentionné dans un post de @MarioNawfal sur X.</p>",
                "<h3>ABB et l’avenir des AMRs</h3><p>ABB a profité du Robotics Summit pour présenter son AMR Flexley Mover P604, équipé de la navigation vSLAM 3D et du logiciel AMR Studio. Ces améliorations, détaillées dans The Robot Report, permettent aux robots de cartographier et de naviguer dans des environnements dynamiques avec une précision accrue. Destinés à la logistique et à la fabrication, ces AMRs répondent à la demande croissante d’automatisation flexible dans les entrepôts et les usines. ABB s’inscrit ainsi dans une tendance plus large, où les robots mobiles deviennent essentiels pour optimiser les chaînes d’approvisionnement, comme en témoigne le déploiement de 1 000 robots Stretch par DHL d’ici 2030, annoncé en mars 2025.</p>",
                "<h3>Contexte et implications</h3><p>Le Robotics Summit & Expo 2025 a reflété l’accélération de l’adoption des robots dans divers secteurs. Selon l’International Federation of Robotics, les installations de robots industriels ont atteint une valeur record de 16,5 milliards de dollars en 2025, avec une forte demande dans l’automobile et la logistique. Des start-ups comme Persona AI et des leaders comme ABB montrent que l’avenir de la robotique repose sur des systèmes polyvalents et faciles à programmer. Cependant, des défis subsistent, notamment la pénurie d’ingénieurs en mécanique aux États-Unis, avec seulement 45 000 diplômés par an contre 350 000 en Chine, selon The Robot Report. Cette disparité pourrait freiner l’innovation à grande échelle si elle n’est pas adressée.</p>",
                "<h3>Conclusion</h3><p>Le Robotics Summit & Expo 2025 a mis en évidence l’essor des robots humanoïdes et autonomes, avec des acteurs comme Persona AI et ABB à l’avant-garde. Ces innovations, combinées à l’intégration croissante de l’IA, promettent de transformer les industries en automatisant des tâches complexes et en améliorant l’efficacité. Alors que la robotique continue de gagner du terrain, des événements comme le Robotics Summit jouent un rôle crucial pour connecter les innovateurs et accélérer l’adoption mondiale. L’avenir de l’automatisation semble plus proche que jamais, mais il nécessitera des efforts concertés pour surmonter les obstacles techniques et structurels.</p>"
            ],
            "images": [{
                "url": "https://www.therobotreport.com/wp-content/uploads/2025/06/robotics-summit-expo-2025.jpg",
                "caption": "Le Robotics Summit & Expo 2025 à Boston, un carrefour mondial pour les innovations en robotique."
            }],
            "sources": [{
                    "title": "The Robot Report – Top 10 Robotics Developments of May 2025",
                    "url": "https://www.therobotreport.com/top-10-robotics-developments-may-2025/"
                },
                {
                    "title": "International Federation of Robotics – Top 5 Global Robotics Trends 2025",
                    "url": "https://ifr.org/news/top-5-global-robotics-trends-2025/"
                },
                {
                    "title": "Post on X by @MarioNawfal",
                    "url": "https://t.co/raUs0GCPUx"
                }
            ]
        },
        //Avril
        {
            "title": "Hugging Face rachète Pollen Robotics pour accélérer la robotique open-source",
            "description": "En avril 2025, Hugging Face, pépite franco-américaine de l’IA, a acquis la start-up bordelaise Pollen Robotics, créatrice du robot humanoïde Reachy. Cette opération vise à renforcer l’écosystème open-source de la robotique, avec des applications prometteuses dans la recherche et l’éducation.",
            "date": "20 avril 2025",
            "content": [
                "<h3>Introduction</h3><p>Le 14 avril 2025, Hugging Face, leader dans les plateformes open-source pour l’intelligence artificielle, a annoncé l’acquisition de Pollen Robotics, une start-up bordelaise reconnue pour son robot humanoïde Reachy et le récent Reachy Mini. Cette opération, relayée par un post sur X de Hugging Face, marque une étape clé dans la démocratisation de la robotique open-source, un secteur en pleine expansion. En combinant l’expertise en IA de Hugging Face avec les innovations en robotique physique de Pollen Robotics, cette collaboration promet de transformer la recherche, l’éducation et les applications commerciales de la robotique.</p>",
                "<h3>Un mariage stratégique entre IA et robotique</h3><p>Pollen Robotics, fondée à Bordeaux, s’est fait connaître avec Reachy, un robot humanoïde conçu pour la recherche et les interactions homme-machine, et plus récemment avec Reachy Mini, un robot compact et abordable à 299 $. Hugging Face, de son côté, est une plateforme incontournable pour les modèles d’IA open-source, avec plus de 10 millions d’utilisateurs. L’acquisition, annoncée par Rémi Cadene, ancien de Tesla et responsable du projet LeRobot chez Hugging Face, vise à intégrer les capacités avancées d’IA générative aux robots physiques. Cette synergie permettra de créer des robots plus autonomes et accessibles, capables d’apprendre et de s’adapter à des tâches complexes via des modèles comme ceux disponibles sur le Hugging Face Hub.</p>",
                "<h3>Impact sur la robotique open-source</h3><p>L’un des objectifs majeurs de cette acquisition est de renforcer l’écosystème open-source de la robotique. Pollen Robotics a déjà développé LeRobot, une plateforme logicielle largement adoptée pour la programmation de robots. En s’appuyant sur la communauté de Hugging Face, les développeurs pourront désormais partager des comportements, des algorithmes et des simulations pour des robots comme Reachy Mini. Cette approche collaborative est essentielle pour accélérer l’innovation, notamment dans des domaines comme l’éducation, où Reachy Mini est utilisé pour enseigner la programmation et l’IA, et dans la recherche, où les robots humanoïdes servent à tester des modèles d’IA physique.</p>",
                "<h3>Perspectives et défis</h3><p>Cette acquisition intervient dans un contexte de compétition mondiale intense entre la Chine et les États-Unis dans la robotique, comme le souligne Le Monde. La France, bien que moins dominante, excelle dans les logiciels et les interfaces IA, et ce rachat pourrait positionner Hugging Face comme un acteur clé. Cependant, des défis subsistent, notamment en matière de financement et d’échelle face aux géants asiatiques et américains. La journaliste Sophie Fay note que ce regroupement d’innovations pourrait inspirer les entreprises françaises à investir davantage dans l’IA et la robotique pour combler leur retard. Les livraisons de Reachy Mini, prévues pour l’été 2025, seront un test crucial pour évaluer l’impact de cette collaboration.</p>",
                "<h3>Conclusion</h3><p>L’acquisition de Pollen Robotics par Hugging Face est une étape stratégique pour démocratiser la robotique open-source. En combinant les avancées en IA générative avec des robots physiques abordables et programmables, les deux entreprises ouvrent la voie à une adoption massive de la robotique dans l’éducation, la recherche et au-delà. La communauté mondiale, via des plateformes comme Discord et le Hugging Face Hub, jouera un rôle clé dans cette révolution. Ce mouvement pourrait redéfinir la place de la France dans l’écosystème mondial de la robotique, à condition de relever les défis financiers et techniques.</p>"
            ],
            "images": [{
                "url": "https://huggingface.co/blog/assets/reachy-mini/reachy-mini-image.png",
                "caption": "Reachy Mini, le robot compact de Pollen Robotics, désormais au cœur de la stratégie de Hugging Face."
            }],
            "sources": [{
                    "title": "Le Monde – Robotique Actualités",
                    "url": "https://www.lemonde.fr/robotique/"
                },
                {
                    "title": "Hugging Face annonce l’acquisition de Pollen Robotics",
                    "url": "https://t.co/9PVLP2Nq1H"
                }
            ]
        },
        {
            "title": "Kawasaki révolutionne le transport avec CORLEO, un robot-cheval à hydrogène",
            "description": "Lors de l’exposition universelle d’Osaka en avril 2025, Kawasaki a présenté CORLEO, un robot quadrupède à hydrogène capable de transporter deux personnes. Ce concept innovant, inspiré de l’agilité d’un cheval, pourrait transformer la mobilité sur terrains difficiles.",
            "date": "15 avril 2025",
            "content": [
                "<h3>Introduction</h3><p>Le 3 avril 2025, à l’occasion de l’exposition universelle d’Osaka, le fabricant japonais Kawasaki a dévoilé CORLEO, un robot quadrupède révolutionnaire propulsé à l’hydrogène. Conçu pour transporter jusqu’à deux personnes, ce « robot-cheval » combine agilité, robustesse et une approche écologique grâce à son moteur à hydrogène. Présenté comme une alternative aux véhicules traditionnels sur terrains accidentés, CORLEO a suscité un vif intérêt, comme en témoignent les publications sur X et les articles de presse.</p>",
                "<h3>Une innovation inspirée de la nature</h3><p>CORLEO, dont le nom évoque un coursier rapide, est un robot à quatre pattes capable de galoper, escalader et bondir avec une agilité comparable à celle d’un cheval. Selon L’Usine Nouvelle, ce robot est conçu pour naviguer sur des terrains difficiles, là où les véhicules à roues traditionnels échouent. Le pilote contrôle CORLEO par des mouvements corporels, similaires à ceux d’un cavalier, offrant une interface intuitive. Propulsé par un moteur à hydrogène, une technologie dans laquelle Kawasaki excelle, CORLEO se positionne comme une solution écologique pour la mobilité du futur, réduisant les émissions par rapport aux carburants fossiles.</p>",
                "<h3>Applications potentielles</h3><p>Le design de CORLEO ouvre des perspectives dans plusieurs domaines. Dans les zones rurales ou montagneuses, il pourrait servir de moyen de transport alternatif pour les personnes ou les marchandises. En contexte militaire ou de secours, sa capacité à naviguer sur des terrains accidentés en fait un outil précieux, comme le suggèrent les posts sur X. De plus, son moteur à hydrogène s’aligne avec les objectifs de durabilité de l’ONU, en réduisant l’empreinte carbone des transports. Kawasaki envisage également des applications touristiques, où CORLEO pourrait offrir une expérience unique, mêlant technologie et aventure.</p>",
                "<h3>Contexte et concurrence</h3><p>L’annonce de CORLEO intervient dans un contexte où la robotique connaît un essor fulgurant, notamment en Asie. La Chine, par exemple, a organisé un semi-marathon incluant 21 robots bipèdes à Pékin le 19 avril 2025, illustrant ses ambitions dans ce domaine. Kawasaki, avec CORLEO, se positionne comme un concurrent sérieux face aux innovations chinoises et américaines, notamment celles de Boston Dynamics, connu pour ses robots quadrupèdes comme Spot. Cependant, le coût de production et l’infrastructure nécessaire pour l’hydrogène restent des défis à relever pour une adoption à grande échelle.</p>",
                "<h3>Conclusion</h3><p>Avec CORLEO, Kawasaki repousse les limites de la robotique et de la mobilité durable. Ce robot-cheval à hydrogène, dévoilé en avril 2025, illustre comment l’innovation technologique peut s’inspirer de la nature pour répondre aux défis modernes. Bien que son adoption généralisée dépende de l’évolution des infrastructures hydrogène, CORLEO marque une avancée significative dans la robotique quadrupède et pourrait redéfinir le transport dans des environnements complexes. L’exposition universelle d’Osaka a offert une vitrine mondiale à cette technologie, et l’enthousiasme sur les réseaux sociaux laisse présager un avenir prometteur.</p>"
            ],
            "images": [{
                "url": "Kawasaki-Corleo-demo.webp",
                "caption": "CORLEO, le robot-cheval à hydrogène de Kawasaki, présenté à l’exposition universelle d’Osaka 2025."
            }],
            "sources": [{
                    "title": "L’Usine Nouvelle – Robotique Actualités",
                    "url": "https://www.usinenouvelle.com/robotique/"
                },
                {
                    "title": "Le Figaro – Kawasaki dévoile un robot-cheval",
                    "url": "https://t.co/0JrCkKhlXv"
                },
                {
                    "title": "Le Monde – Robotique Actualités",
                    "url": "https://www.lemonde.fr/robotique/"
                }
            ]
        },
        // Mars
        {
            "title": "Nomagic lève 44 millions pour ses robots IA dans les entrepôts européens",
            "description": "La start-up polonaise Nomagic sécurise 44 millions d'euros en série B pour accélérer le déploiement de ses bras robotisés dopés à l'IA dans les entrepôts à travers l'Europe.",
            "date": "10 mars 2025",
            "content": [
                "<h3>Introduction</h3><p>Nomagic, une start-up basée à Varsovie, a annoncé le 10 mars 2025 avoir bouclé une levée de fonds de 44 millions d'euros. Spécialisée dans les bras robotisés pour la logistique, elle profite de l’essor de l’intelligence artificielle pour renforcer sa présence dans les entrepôts européens.</p>",
                "<h3>Un financement stratégique</h3><p>Mené par la Banque Européenne pour la Reconstruction et le Développement (BERD), ce tour de table inclut également Khosla Ventures, Almaz Capital et une dette de la Banque Européenne d’Investissement. L’objectif est clair : équiper davantage de sites avec plus de 10 robots chacun d’ici deux ans, tout en investissant dans l’IA.</p>",
                "<h3>Une croissance impressionnante</h3><p>Avec une hausse de 220 % de son chiffre d’affaires récurrent en 2024, Nomagic a déjà séduit des clients comme Cdiscount en France, Apo.com et Asos en Allemagne. La start-up vise une croissance supplémentaire de 200 % en 2025, répondant à une demande croissante dans la mode, la pharmacie et l’alimentation.</p>",
                "<h3>Conclusion</h3><p>Nomagic se positionne comme un acteur clé de l’automatisation logistique en Europe. En s’appuyant sur ses robots et les données qu’ils génèrent, elle ambitionne de développer des modèles d’IA avancés, renforçant ainsi son avantage concurrentiel dans un marché en plein essor.</p>"
            ],
            "images": [{
                "url": "https://www.usine-digitale.fr/medias/nomagic-founders.jpg",
                "caption": "Les co-fondateurs de Nomagic : Marek Cygan, Kacper Nowicki et Tristan D’Orgeval."
            }],
            "sources": [{
                "title": "L’Usine Digitale",
                "url": "https://www.usine-digitale.fr/article/nomagic-la-start-up-qui-deploie-ses-robots-dopes-a-l-ia-dans-les-entrepots-en-europe.N2228188"
            }]
        },
        {
            "title": "Figure AI révolutionne la robotique domestique avec Helix",
            "description": "Avec son modèle Helix, Figure AI permet à ses robots humanoïdes de comprendre des commandes vocales et de manipuler des objets inconnus, ouvrant la voie à une présence dans les foyers.",
            "date": "9 mars 2025",
            "content": [
                "<h3>Introduction</h3><p>Figure AI, entreprise américaine, a dévoilé le 9 mars 2025 son modèle Helix, une IA de type vision-langage-action (VLA). Ce système permet à ses robots de répondre à des instructions en langage naturel et de manipuler des objets jamais vus auparavant.</p>",
                "<h3>Une technologie innovante</h3><p>Helix repose sur deux systèmes : un modèle de compréhension lente (7-9 Hz) et un contrôle rapide des mouvements (200 Hz). Cette architecture unique offre un contrôle précis du haut du corps des robots, y compris doigts et poignets, et permet une collaboration entre plusieurs unités.</p>",
                "<h3>Vers une application domestique</h3><p>Dans des démonstrations, deux robots équipés de Helix ont rangé des courses sur simple commande vocale. Fonctionnant sur des GPU embarqués à faible consommation, le modèle ne nécessite que 500 heures d’entraînement, le rendant viable pour un usage commercial.</p>",
                "<h3>Conclusion</h3><p>Figure AI mise sur Helix pour transformer la robotique domestique. En éliminant le besoin de formation spécifique pour chaque tâche, cette technologie pourrait bientôt rendre les robots humanoïdes indispensables dans les foyers, marquant un tournant dans leur adoption.</p>"
            ],
            "images": [{
                "url": "https://www.usine-digitale.fr/medias/helix-robot.jpg",
                "caption": "Un robot Figure AI manipulant un objet grâce au modèle Helix."
            }],
            "sources": [{
                "title": "L’Usine Digitale",
                "url": "https://www.usine-digitale.fr/article/figure-ai-progresse-dans-la-robotique-a-la-maison-avec-son-modele-helix.N2227802"
            }]
        },
        {
            "title": "Apptronik lève 350 millions pour ses robots humanoïdes en entreprise",
            "description": "La start-up américaine Apptronik sécurise 350 millions de dollars en série A pour déployer à grande échelle son robot humanoïde Apollo dans divers secteurs industriels.",
            "date": "8 mars 2025",
            "content": [
                "<h3>Introduction</h3><p>Le 8 mars 2025, Apptronik a annoncé une levée de fonds de 350 millions de dollars, portée par B Capital, Capital Factory et Google. Cette série A vise à accélérer la production et le déploiement de son robot humanoïde Apollo dans les entreprises.</p>",
                "<h3>Un robot polyvalent</h3><p>Apollo est conçu pour des tâches dans les entrepôts et usines, avec des applications prévues dans l’automobile, la logistique, et à terme, les soins aux personnes âgées. Des partenariats avec Mercedes-Benz et GXO Logistics témoignent de son potentiel immédiat.</p>",
                "<h3>Des alliances technologiques</h3><p>Forte de collaborations avec la NASA, Nvidia et Google DeepMind, Apptronik bénéficie d’un écosystème solide. Après trois ans de croissance record, elle voit 2025 comme une année clé pour scaler ses déploiements, surfant sur un marché robotique estimé à 199,94 milliards de dollars d’ici 2029.</p>",
                "<h3>Conclusion</h3><p>Apptronik s’impose comme un leader dans la robotique humanoïde pour l’entreprise. Avec ce financement, elle compte transformer les industries en automatisant des tâches variées, tout en posant les bases pour des applications futures plus larges.</p>"
            ],
            "images": [{
                "url": "https://www.usine-digitale.fr/mediatheque/4/1/9/001522914_896x598_c.jpg",
                "caption": "Le robot humanoïde Apollo d’Apptronik en action dans un entrepôt."
            }],
            "sources": [{
                "title": "L’Usine Digitale",
                "url": "https://www.usine-digitale.fr/article/apptronik-leve-350-millions-de-dollars-pour-deployer-son-robot-humanoide-en-entreprise.N2227528"
            }]
        },
        // Février

        // Janvier
        {
            title: "L'industrie boostée à l'IA avec NVIDIA Jetson",
            description: "NVIDIA Jetson est une gamme de plates-formes informatiques d'intelligence artificielle conçues pour apporter la puissance de l'IA aux systèmes embarqués et industriels. ( Nano Ordinateur )",
            date: "1 janvier 2025",
            content: [
                "<h3>Qu'est-ce que NVIDIA Jetson ?</h3><p>NVIDIA Jetson est une gamme de plates-formes informatiques d'intelligence artificielle conçues pour apporter la puissance de l'IA aux systèmes embarqués et industriels. Ces plates-formes compactes et économes en énergie sont dotées de GPU hautes performances et d'accélérateurs d'IA dédiés, permettant l'inférence d'IA en temps réel pour une large gamme d'applications, de la robotique aux véhicules autonomes en passant par les caméras intelligentes et l'IoT industriel.</p>",
                "<h3>Qu'est-ce qui différencie le NVIDIA Jetson des autres processeurs ?</h3><p>Chaque module NVIDIA Jetson est un système sur module (SoM) complet comprenant un GPU intégré, un CPU, une mémoire, une gestion de l'énergie et des interfaces à haut débit. Ces éléments sont finement ajustés pour offrir des performances d'inférence IA de premier plan tout en garantissant l'efficacité énergétique, permettant aux appareils de périphérie d'exécuter efficacement des algorithmes d'IA complexes. De plus, NVIDIA a développé un écosystème d'entraide pour le développement de l'IA sur les appareils Jetson, incluant la compatibilité avec les principaux frameworks d'IA comme TensorFlow et TensorRT de NVIDIA, ainsi que diverses bibliothèques et API pour la vision par ordinateur et l'apprentissage en profondeur.</p>",
                "<h3>NVIDIA Jetson vs GPU NVIDIA</h3><p>L'utilisation de NVIDIA Jetson n'exclut pas les GPU pour le traitement ; elle élargit plutôt les options pour les intégrateurs de systèmes et les OEM dans la personnalisation des solutions informatiques d'IA. Les GPU sont idéaux pour l'entraînement de réseaux neuronaux étendus ou l'exécution d'algorithmes d'IA complexes nécessitant une puissance de calcul élevée, tandis que Jetson est adapté aux applications d'IA en périphérie, où la faible latence, l'efficacité énergétique et la petite taille sont importantes.</p>",
                "<h3>Cas d'usage</h3><p>Les plates-formes NVIDIA Jetson sont utilisées dans divers domaines industriels, notamment :</p><ul><li><strong>Robotique :</strong> Intégration dans des robots pour des tâches de vision par ordinateur et de navigation autonome.</li><li><strong>Véhicules autonomes :</strong> Traitement en temps réel des données des capteurs pour la conduite autonome.</li><li><strong>Caméras intelligentes :</strong> Analyse vidéo en temps réel pour la surveillance et la sécurité.</li><li><strong>IoT industriel :</strong> Surveillance et contrôle des processus industriels avec des capacités d'IA avancées.</li></ul>",
            ],
            images: [{
                url: "jetson.webp",
                caption: "Exemple d'utilisation de NVIDIA Jetson dans l'industrie",
            }],
            sources: [{
                title: "Sphinx France",
                url: "https://blog.sphinxfrance.com/actualite-iiot-cybersecurite/ia/industrie-ia-nvidia-jetson/",
            }, ],
        },
        {
            title: "Robotaxi, Robovan, Optimus… : tout ce que Tesla a dévoilé pendant que vous dormiez",
            description: "Tesla a révélé ses projets d'autonomie des véhicules, notamment le Cybercab, un Robotaxi sans volant ni pédale, et le Robovan, un bus autonome futuriste.",
            date: "11 octobre 2024",
            content: [
                "<h3>Introduction</h3><p>Le 10 octobre, lors de la conférence We, Robot, Tesla a présenté ses projets d'autonomie des véhicules. Cette conférence a été l'occasion pour Elon Musk de dévoiler plusieurs innovations marquantes, dont le Cybercab, un Robotaxi révolutionnaire, ainsi que le Robovan, un bus autonome destiné à transformer la mobilité urbaine. En plus de ces véhicules, Musk a également évoqué le robot Optimus, une avancée majeure dans le domaine de la robotique.</p>",

                "<h3>Le Cybercab : l'avenir de la mobilité autonome</h3><p>Elon Musk a lancé le show avec la présentation du <strong>Cybercab</strong>, une voiture sans volant ni pédale, conçue pour une conduite entièrement autonome. Avec seulement deux sièges, le Cybercab se destine principalement aux trajets individuels ou en duo. Ce modèle, qui devrait être proposé à un prix inférieur à 30 000 $, incarne la vision de Tesla pour un avenir où les trajets en voiture sont plus flexibles et moins contraignants. Le Cybercab pourra travailler pour son propriétaire lorsqu'il n'est pas utilisé, permettant ainsi de générer des revenus supplémentaires. Musk a confirmé que la date de sortie est prévue avant 2027, bien que des spéculations suggèrent que cela pourrait être plus tardif, en raison des régulations strictes en Europe.</p>",

                "<h3>Robovan : le bus autonome</h3><p>Tesla a également révélé le <strong>Robovan</strong>, un bus autonome au design futuriste, capable de transporter jusqu'à 20 personnes. Ce véhicule est destiné à répondre aux besoins croissants de mobilité dans les zones urbaines. Bien que peu de détails aient été dévoilés, il est clair que le Robovan pourrait révolutionner le transport public en offrant un service efficace et flexible. Ce type de véhicule pourrait également réduire le nombre de voitures en circulation, contribuant ainsi à diminuer la pollution et à améliorer la qualité de l'air dans les villes.</p>",

                "<h3>Optimus : le robot évolué</h3><p>Lors de la conférence, le robot <strong>Optimus</strong> a fait une apparition marquante. Contrairement aux précédentes démonstrations, où un humain était déguisé en robot, cette fois-ci, un véritable robot a été présenté. Musk a souligné que ce robot intègre toutes les technologies développées pour les véhicules Tesla, tant au niveau logiciel que matériel. Bien qu'aucune information précise sur le prix ou l'utilisation d'Optimus n'ait été communiquée, Musk a évoqué une vision d'avenir où chacun pourrait posséder un Optimus. Les démonstrations ont été accompagnées de performances, avec des Optimus dansant sur scène, illustrant les capacités d'animation et d'interaction du robot.</p>",

                "<h3>Conclusion</h3><p>Avec ces annonces, Tesla semble solidement positionnée pour façonner l'avenir de la mobilité et de la robotique. Le Cybercab pourrait redéfinir la notion de transport personnel, tandis que le Robovan propose une solution pour les défis du transport public en milieu urbain. Optimus, quant à lui, représente une avancée significative dans l'intégration de l'intelligence artificielle et de la robotique dans la vie quotidienne. Ces innovations soulèvent également des questions importantes sur les régulations et l'acceptation sociale des véhicules autonomes et des robots dans notre société.</p>",
            ],
            images: [{
                    url: "cybercab.jpg",
                    caption: "Le Cybercab de Tesla, le Robotaxi sans volant.",
                },
                {
                    url: "robovan.jpg",
                    caption: "Le Robovan, un bus autonome futuriste.",
                },
                {
                    url: "optimus-gen.jpg",
                    caption: "Optimus, le robot évolué de Tesla.",
                },
            ],
            sources: [{
                title: "Numerama",
                url: "https://www.numerama.com/vroom/1823886-cybercab-robovan-optimus-tout-ce-que-tesla-a-devoile-pendant-que-vous-dormiez.html",
            }, ],
        },
        {
            title: "Un nouveau robot humanoïde chez Boston Dynamics",
            description: "Boston Dynamics a récemment présenté une version entièrement électrique de son robot bipède Atlas.",
            date: "30 septembre 2024",
            content: [
                "<h3>Une nouvelle version tout électrique du robot bipède Atlas</h3>",
                "<p>Boston Dynamics a récemment présenté une version entièrement électrique de son célèbre robot bipède Atlas, marquant ainsi la fin de l'ère de l’actionnement hydraulique. Cette révolution technologique permet d’offrir une plus grande amplitude de mouvements tout en simplifiant la conception.</p>",
                "<h3>Fin de l'actionnement hydraulique</h3>",
                "<p>L’une des annonces majeures de cette nouvelle version est l’abandon du système d'actionnement hydraulique, autrefois utilisé dans les modèles précédents d'Atlas.</p>",
                "<h3>Caractéristiques techniques du nouveau modèle</h3>",
                "<ul><li><strong>Amplitude de mouvement augmentée</strong> : Grâce à l’électricité, Atlas peut réaliser des mouvements plus fluides.</li><li><strong>Absence d'acrobaties</strong> : Ce nouvel Atlas ne pourra pas réaliser d'acrobaties spectaculaires.</li><li><strong>Simplification de la programmation</strong> : Le contrôle du robot est désormais plus intuitif.</li></ul>",
                "<h3>Objectif : Applications concrètes</h3>",
                "<p>Le but de Boston Dynamics est désormais de commercialiser Atlas en l'adaptant à des applications réelles.</p>",
                '<iframe width="560" height="315" src="https://www.koreus.com/embed/boston-dynamics-new-atlas"  frameborder="0" allowfullscreen></iframe><br /><a href="https://www.koreus.com/video/boston-dynamics-new-atlas.html">Le nouveau robot Atlas de Boston Dynamics</a>',
            ],
            images: [{
                url: "Atlas.jpg",
                caption: "Image du robot Atlas",
            }, ],
            sources: [{
                    title: "Boston Dynamics Officiel",
                    url: "https://bostondynamics.com/atlas",
                },
                {
                    title: "Koreus Vidéo : Atlas en action",
                    url: "https://www.koreus.com/embed/boston-dynamics-new-atlas",
                },
            ],
        },
    ],

    CYBER: [{
            "title": "Attaque NPM 2025 : Le ver Shai-Hulud infecte 500+ paquets",
            "description": "En septembre 2025, le ver auto-réplicatif Shai-Hulud compromet plus de 500 paquets NPM, volant des identifiants via un phishing ciblé, exposant les failles de l'écosystème open-source.",
            "date": "19 septembre 2025",
            "content": [
                "<h3>Introduction</h3><p>En septembre 2025, NPM, cœur du développement JavaScript, subit une attaque massive via le ver Shai-Hulud. Détectée le 15 septembre par Trend Micro, elle compromet 500 paquets après un phishing contre un mainteneur clé. Cette crise révèle la fragilité des registries open-source, avec des billions de téléchargements menacés.</p>",
                "<h3>Chronologie</h3><p>En août, l’attaque S1ngularity vole un token Nx. Le 8 septembre, un phishing piège Josh Junon, infectant 18 paquets populaires (2,6 milliards de downloads hebdomadaires). Le 14 septembre, Shai-Hulud débute via rxnt-authentication, touchant 187 paquets, incluant CrowdStrike, d’ici le 16 septembre.</p>",
                "<h3>Shai-Hulud</h3><p>Ce malware utilise TruffleHog pour voler tokens NPM, GitHub et cloud. Il se propage via des scripts post-install et workflows GitHub, modifiant package.json pour republier des versions malveillantes. OX Security identifie @ctrl/tinycolor comme vecteur initial, menaçant les pipelines CI/CD.</p>",
                "<h3>Impact</h3><p>Avec 500 paquets infectés, les développeurs risquent des fuites cloud et des accès non autorisés. Qualys note la rapidité de propagation, et Sonatype attribue un CVSS de 9.5/10, une des pires attaques JavaScript.</p>",
                "<h3>Mitigation</h3><p>Trend Micro recommande de traquer les IOCs (ex. npmjs.help). Socket conseille audits, downgrades (ex. debug@4.3.4) et rotation des credentials. Mesures : 2FA hardware, désactivation des scripts post-install, SBOM et détections runtime.</p>",
                "<h3>Conclusion</h3><p>Shai-Hulud exploite la confiance dans NPM. Avec 14 campagnes crypto en 2024 visant NPM (ReversingLabs), les audits proactifs et la vigilance sont cruciaux pour protéger l’open-source.</p>"
            ],
            "images": [{
                "url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/25/i/npm-supply-chain-attack.jpg",
                "caption": "Propagation du ver Shai-Hulud dans NPM."
            }],
            "sources": [{
                    "title": "Trend Micro",
                    "url": "https://www.trendmicro.com/en_us/research/25/i/npm-supply-chain-attack.html"
                },
                {
                    "title": "The Hacker News",
                    "url": "https://thehackernews.com/2025/09/40-npm-packages-compromised-in-supply.html"
                },
                {
                    "title": "Sonatype",
                    "url": "https://www.sonatype.com/blog/ongoing-npm-software-supply-chain-attack-exposes-new-risks"
                }
            ]
        },
        {
            "title": "DragonForce frappe Harrods et Co-op : Ransomwares en mai 2025",
            "description": "DragonForce paralyse le retail britannique en mai 2025, ciblant Harrods et Co-op avec des ransomwares, causant des pertes massives et exposant 20 millions de données clients.",
            "date": "31 mai 2025",
            "content": [
                "<h3>Introduction</h3><p>Mai 2025 voit une vague de ransomwares par DragonForce frapper Harrods, Co-op et d’autres retailers britanniques, causant des interruptions et des fuites de données. Ces attaques, suivant celle de M&S, exposent les failles des supply chains numériques.</p>",
                "<h3>Chronologie</h3><p>Le 3 mai, Harrods est paralysé via un fournisseur tiers, avec 50 millions de livres de pertes. Le 12 mai, Co-op subit une attaque, fermant des magasins et exposant 15 millions de records. Le 18 mai, Peter Green Chilled affecte Tesco et Sainsbury’s. Le NCSC alerte sur la coordination de DragonForce.</p>",
                "<h3>Tactiques</h3><p>DragonForce utilise phishing et un zero-day (CVE-2025-0456) pour déployer un ransomware basé sur Ryuk. L’IA personnalise les attaques, et un worm se propage via API. Les hackers ciblent les week-ends pour maximiser l’impact, selon SentinelOne.</p>",
                "<h3>Impact</h3><p>Les attaques coûtent des centaines de millions et érodent la confiance des clients. IT Governance note 20 millions de records exposés, risquant fraudes et phishing. Les supply chains alimentaires sont menacées, avec des impacts en cascade.</p>",
                "<h3>Réponses</h3><p>Harrods et Co-op restaurent via backups immuables, refusant la rançon. Le NCSC lance une task force avec 200 millions de livres. Secureframe recommande MFA biométrique, audits tiers et SBOM.</p>",
                "<h3>Conclusion</h3><p>DragonForce expose les failles du retail britannique. Une cybersécurité holistique, avec IA défensive et audits supply chain, est cruciale pour restaurer la confiance et éviter un chaos estival.</p>"
            ],
            "images": [{
                "url": "https://www.cm-alliance.com/wp-content/uploads/2025/06/dragonforce-ransomware-attack.jpg",
                "caption": "Attaque DragonForce sur Harrods."
            }],
            "sources": [{
                    "title": "CM-Alliance",
                    "url": "https://www.cm-alliance.com/cybersecurity-blog/may-2025-biggest-cyber-attacks-ransomware-attacks-and-data-breaches"
                },
                {
                    "title": "IT Governance",
                    "url": "https://www.itgovernance.co.uk/blog/global-data-breaches-and-cyber-attacks-in-may-2025-more-than-1-4-billion-records-breached"
                },
                {
                    "title": "CSIS",
                    "url": "https://www.csis.org/programs/strategic-technologies-program/significant-cyber-incidents"
                }
            ]
        },
        {
            "title": "Février 2025 : Qilin ransomware cible Lee Enterprises, paralysant 75 journaux locaux",
            "description": "Le groupe Qilin frappe Lee Enterprises en février 2025, chiffrant des fichiers et exfiltrant des données sensibles, causant une interruption majeure de la production médiatique aux États-Unis.",
            "date": "28 février 2025",
            "content": [
                "<h3>Introduction</h3><p>Février 2025 a été marqué par une attaque ransomware dévastatrice contre Lee Enterprises, un géant médiatique américain gérant 350 publications dans 25 États. Le groupe Qilin a revendiqué l'assaut, soulignant la vulnérabilité des secteurs de l'information face aux menaces cyber croissantes.</p>",
                "<h3>Chronologie</h3><p>L'attaque débute mi-février, avec un chiffrement rapide des fichiers critiques. Lee Enterprises confirme l'incident le 15 février, suspendant la production de 75 journaux locaux. Qilin publie des échantillons de données volées sur son site, exigeant une rançon non divulguée.</p>",
                "<h3>Tactiques</h3><p>Qilin exploite des vulnérabilités initiales via phishing, puis déploie un ransomware pour chiffrer et exfiltrer des données. SOCRadar note une double extorsion, avec focus sur les médias pour maximiser l'impact public.</p>",
                "<h3>Impact</h3><p>Interruptions de production affectent des millions de lecteurs, avec des pertes financières estimées à des millions. L'attaque expose des données sensibles, risquant fraudes et désinformation.</p>",
                "<h3>Réponses</h3><p>Lee refuse la rançon, restaure via backups. CISA alerte sur Qilin, recommandant patches et MFA. L'entreprise renforce ses défenses post-incident.</p>",
                "<h3>Conclusion</h3><p>Cette attaque illustre les risques pour les médias. Une préparation proactive, via simulations et audits, est essentielle pour contrer les ransomwares en hausse.</p>"
            ],
            "images": [{
                "url": "https://socradar.io/wp-content/uploads/2025/03/qilin-ransomware-lee-enterprises.jpg",
                "caption": "Attaque Qilin sur Lee Enterprises en février 2025."
            }],
            "sources": [{
                    "title": "SOCRadar",
                    "url": "https://socradar.io/major-cyber-attacks-in-review-february-2025/"
                },
                {
                    "title": "CSIS",
                    "url": "https://www.csis.org/programs/strategic-technologies-program/significant-cyber-incidents"
                },
                {
                    "title": "CM-Alliance",
                    "url": "https://www.cm-alliance.com/cybersecurity-blog/february-2025-major-cyber-attacks-ransomware-attacks-data-breaches"
                }
            ]
        },
        {
            "title": "Avril 2025 : Attaque ToolShell sur Microsoft SharePoint, exploitée mondialement",
            "description": "Des acteurs malveillants exploitent une vulnérabilité SharePoint en avril 2025 via ToolShell, menant à des ransomware et exfiltrations massives dans plusieurs secteurs.",
            "date": "30 avril 2025",
            "content": [
                "<h3>Introduction</h3><p>Avril 2025 est dominé par l'attaque ToolShell sur Microsoft SharePoint, une vulnérabilité zero-day permettant des accès non autorisés et des déploiements ransomware globaux.</p>",
                "<h3>Chronologie</h3><p>Début avril, Microsoft patch CVE-2025-29824, mais des exploits persistent. ToolShell, un malware custom, est détecté mi-avril, affectant des milliers de serveurs on-premise.</p>",
                "<h3>Tactiques</h3><p>Storm-2460 utilise PipeMagic pour escalader privilèges et lancer ransomware. Secureframe note une chaîne d'attaques ciblant finance et santé.</p>",
                "<h3>Impact</h3><p>Disruptions massives, avec vol de données sensibles. CRN rapporte des attaques en cours, coûtant des millions en récupération.</p>",
                "<h3>Réponses</h3><p>Microsoft urge des patches immédiats. CISA et FBI partagent IOCs, recommandant zero-trust et monitoring.</p>",
                "<h3>Conclusion</h3><p>ToolShell révèle les dangers des legacy systems. Une gestion proactive des vulnérabilités est impérative pour 2025.</p>"
            ],
            "images": [{
                "url": "https://www.crn.com/images/news/2025/ToolShell-SharePoint-Attack.jpg",
                "caption": "Attaque ToolShell sur SharePoint en avril 2025."
            }],
            "sources": [{
                    "title": "CRN",
                    "url": "https://www.crn.com/news/security/2025/10-major-cyberattacks-and-data-breaches-in-2025-so-far"
                },
                {
                    "title": "Secureframe",
                    "url": "https://secureframe.com/blog/recent-cyber-attacks"
                },
                {
                    "title": "CM-Alliance",
                    "url": "https://www.cm-alliance.com/cybersecurity-blog/april-2025-major-cyber-attacks-ransomware-attacks-and-data-breaches"
                }
            ]
        },
        {
            "title": "Avril 2025 : Scattered Spider frappe Marks & Spencer, paralysant le retail britannique",
            "description": "Scattered Spider cible M&S via social engineering en avril 2025, causant six semaines de disruptions et 300 millions de livres de pertes, révélant les risques des contractors externes.",
            "date": "30 avril 2025",
            "content": [
                "<h3>Introduction</h3><p>Avril 2025 voit Scattered Spider attaquer Marks & Spencer (M&S) pendant Pâques, via social engineering sur des contractors, interrompant les services en ligne et exposant des failles dans le retail.</p>",
                "<h3>Chronologie</h3><p>Le 18 avril, les hackers piègent un contractor par vishing, infiltrant les réseaux. Le 19 avril, le site M&S tombe, bloquant e-commerce et stocks. L'attaque dure six semaines, jusqu'au 27 mai.</p>",
                "<h3>Tactiques</h3><p>Scattered Spider excelle en ingénierie sociale, escaladant privilèges via VPN vulnérables et déployant ransomware custom. Ils exfiltrent 144 GB de données, priorisant disruption et extorsion.</p>",
                "<h3>Impact</h3><p>Perte de 300 millions de livres, exposition de données clients (noms, adresses). Effet domino sur fournisseurs, érodant la confiance et actions boursières.</p>",
                "<h3>Réponses</h3><p>M&S refuse la rançon, restaure via backups et investit 100 millions en sécurité. NCSC et ICO enquêtent, poussant zero-trust pour tiers.</p>",
                "<h3>Conclusion</h3><p>Cette attaque hybride souligne le maillon faible humain. Une défense en profondeur, avec audits contractors, est vitale pour le retail.</p>"
            ],
            "images": [{
                "url": "https://insights.integrity360.com/wp-content/uploads/2025/06/marks-spencer-cyberattack.jpg",
                "caption": "Attaque Scattered Spider sur M&S en avril 2025."
            }],
            "sources": [{
                    "title": "Integrity360",
                    "url": "https://insights.integrity360.com/5-of-the-biggest-cyber-attacks-of-2025-so-far"
                },
                {
                    "title": "CRN",
                    "url": "https://www.crn.com/news/security/2025/10-major-cyberattacks-and-data-breaches-in-2025-so-far"
                },
                {
                    "title": "Bright Defense",
                    "url": "https://www.brightdefense.com/resources/recent-data-breaches/"
                }
            ]
        },
        {
            "title": "Mars 2025 : Brèche Oracle Cloud expose 6 millions de records via vulnérabilité non divulguée",
            "description": "CloudSEK révèle une brèche majeure chez Oracle Cloud en mars 2025, avec 6 millions de records exfiltrés, impactant des clients globaux et soulignant les risques des clouds publics.",
            "date": "31 mars 2025",
            "content": [
                "<h3>Introduction</h3><p>Mars 2025 voit une brèche significative chez Oracle Cloud, découverte par CloudSEK. Cette faille non divulguée expose 6 millions de records, affectant des entreprises et gouvernements mondiaux.</p>",
                "<h3>Chronologie</h3><p>La brèche est détectée fin mars, avec exfiltration via une vulnérabilité suspectée dans l'infrastructure cloud. Oracle confirme l'incident le 28 mars, notifiant les clients impactés.</p>",
                "<h3>Tactiques</h3><p>Les attaquants exploitent une faille zero-day pour accéder aux bases de données, exfiltrant des données sensibles. CloudSEK note une exploitation stealthy, évitant les détections standards.</p>",
                "<h3>Impact</h3><p>Exposition de données clients critiques, risquant vols d'identité et espionnage. CSHub estime des coûts en millions pour Oracle en remédiations.</p>",
                "<h3>Réponses</h3><p>Oracle patch et isole les systèmes affectés. CISA émet des alertes sur les clouds, recommandant audits et chiffrement renforcé.</p>",
                "<h3>Conclusion</h3><p>Cette brèche met en lumière les failles des clouds. Une vigilance accrue et des SBOM sont cruciaux pour sécuriser les infrastructures partagées.</p>"
            ],
            "images": [{
                "url": "https://www.cshub.com/wp-content/uploads/2025/03/oracle-cloud-breach.jpg",
                "caption": "Brèche Oracle Cloud en mars 2025."
            }],
            "sources": [{
                    "title": "CSHub",
                    "url": "https://www.cshub.com/attacks/articles/cyber-attacks-data-breaches-march-2025"
                },
                {
                    "title": "CSIS",
                    "url": "https://www.csis.org/programs/strategic-technologies-program/significant-cyber-incidents"
                },
                {
                    "title": "CM-Alliance",
                    "url": "https://www.cm-alliance.com/cybersecurity-blog/biggest-cyber-attacks-ransomware-attacks-data-breaches-of-march-2025"
                }
            ]
        },
        {
            "title": "Mars 2025 : L'attaque DDoS sur X paralyse la plateforme d'Elon Musk",
            "description": "En mars 2025, X subit une série d'attaques DDoS massives, mises en pause par un groupe pro-palestinien, exposant les vulnérabilités des réseaux sociaux face aux botnets coordonnés.",
            "date": "31 mars 2025",
            "content": [
                "<h3>Introduction</h3><p>Mars 2025 a été marqué par une offensive DDoS majeure contre X, la plateforme d'Elon Musk, causant des interruptions intermittentes mondiales. Attribuée au groupe pro-palestinien Dark Storm Team, cette attaque a mobilisé un botnet massif, soulignant les risques croissants pour les infrastructures numériques critiques.</p>",
                "<h3>Chronologie de l'attaque</h3><p>Le 11 mars, X connaît des pannes répétées, avec un pic à 14h UTC. Musk accuse une 'cyberattaque massive' originaire d'Ukraine, mais Dark Storm Team revendique via Telegram, utilisant un botnet pour inonder les serveurs. L'attaque dure plusieurs heures, affectant des millions d'utilisateurs.</p>",
                "<h3>Tactiques des attaquants</h3><p>Les hackers ont déployé un botnet coordonné pour envoyer du trafic junk, surchargeant les systèmes. Selon WIRED, cette méthode, courante en DDoS, exploite des armées de bots pour submerger les cibles. Musk lie cela à des tensions géopolitiques, mais les experts pointent une évolution des tactiques pro-palestiniennes.</p>",
                "<h3>Impact</h3><p>Les interruptions ont perturbé les communications globales, avec des pertes estimées à des millions en publicité. Cela érode la confiance des utilisateurs et met en lumière les faiblesses des plateformes sociales face aux menaces étatiques ou militantes.</p>",
                "<h3>Réponses</h3><p>X renforce ses défenses avec des outils anti-DDoS, tandis que Musk appelle à une enquête fédérale. CISA émet des alertes sur les botnets, recommandant une mitigation proactive.</p>",
                "<h3>Conclusion</h3><p>Cette attaque sur X illustre l'arme numérique des conflits hybrides. Une résilience accrue, via IA et partenariats, est essentielle pour protéger les plateformes vitales.</p>"
            ],
            "images": [{
                "url": "https://www.wired.com/story/x-ddos-attack-march-2025.jpg",
                "caption": "Illustration de l'attaque DDoS sur X en mars 2025."
            }],
            "sources": [{
                    "title": "WIRED",
                    "url": "https://www.wired.com/story/x-ddos-attack-march-2025/"
                },
                {
                    "title": "CSIS",
                    "url": "https://www.csis.org/programs/strategic-technologies-program/significant-cyber-incidents"
                },
                {
                    "title": "SWK Technologies",
                    "url": "https://www.swktech.com/march-2025-cyber-news-recap/"
                }
            ]
        },
        {
            "title": "Février 2025 : La brèche PowerSchool expose 62 millions d'élèves, l'une des plus massives en éducation",
            "description": "En février 2025, PowerSchool, plateforme éducative majeure, subit une cyberattaque majeure compromettant les données de 62 millions d'élèves, incluant notes, historiques médicaux et numéros de sécurité sociale, soulignant les vulnérabilités critiques des systèmes scolaires américains.",
            "date": "28 février 2025",
            "content": [
                "<h3>Introduction</h3><p>Février 2025 a marqué un tournant sombre pour la cybersécurité dans le secteur éducatif avec la révélation d'une brèche massive chez PowerSchool, un fournisseur de logiciels scolaires utilisé par des milliers de districts aux États-Unis. Cette attaque, détectée fin janvier mais divulguée en février, a exposé les informations sensibles de près de 62 millions d'élèves, des notes scolaires aux historiques médicaux en passant par les numéros de sécurité sociale. Selon des rapports de PKWARE et CSHub, cet incident n'est que la pointe de l'iceberg d'une vague d'attaques qui a aussi touché GrubHub et DISA, avec plus de 3 millions de records volés. Ces événements soulignent l'escalade des menaces contre les infrastructures critiques, où les acteurs malveillants exploitent des vulnérabilités pour des gains financiers ou des disruptions massives. Des experts comme ceux de CM-Alliance avertissent que sans renforcement immédiat des défenses, le secteur éducatif risque de devenir un terrain de jeu pour les ransomwares et les espions étatiques.</p><p>Alors que les écoles luttent pour notifier les parents et restaurer la confiance, cette brèche rappelle les leçons de incidents passés comme celui de Change Healthcare en 2024, amplifiant les appels à une régulation plus stricte des fournisseurs tiers en éducation.</p>",
                "<h3>La brèche PowerSchool : Chronologie et ampleur de l'attaque</h3><p>L'attaque contre PowerSchool a débuté fin janvier 2025, lorsque des acteurs non identifiés ont exploité une vulnérabilité non divulguée dans les serveurs de la plateforme, un système de gestion scolaire (SIS) utilisé par plus de 45 millions d'élèves quotidiennement. Selon PKWARE, les hackers ont accédé à des bases de données non chiffrées, exfiltrant des téraoctets de données entre le 20 et le 28 janvier. La brèche a été détectée le 29 janvier grâce à des alertes d'anomalies dans les logs, menant à une enquête immédiate avec des firmes comme Mandiant.</p><p>Divulguée le 10 février, l'ampleur s'est révélée choquante : 62 millions d'élèves affectés, couvrant des districts dans 45 États américains. Les données compromises incluent non seulement des informations académiques comme les notes et les plans d'études, mais aussi des détails hautement sensibles tels que les historiques médicaux, les numéros de sécurité sociale, et même des informations sur des ordonnances de protection. CSHub rapporte que cette exposition massive risque de mener à des fraudes d'identité à grande échelle et à des discriminations basées sur des données médicales ou ethniques. PowerSchool, qui gère des opérations pour des écoles K-12 et des universités, a suspendu temporairement certains services, perturbant les inscriptions et les évaluations pour des milliers d'établissements.</p><p>Cette chronologie reflète une tendance : les attaques supply-chain, où un fournisseur unique comme PowerSchool peut compromettre des millions via une seule faille. Des sources comme Tech.co notent que l'incident suit une série de breaches éducatives, avec une hausse de 25 % des attaques sur ce secteur en 2024.</p>",
                "<h3>Les tactiques des attaquants : Exploitation de vulnérabilités et ransomware émergent</h3><p>Les attaquants, soupçonnés d'être affiliés à un groupe de ransomware comme Qilin – actif dans plusieurs incidents de février selon Xage – ont utilisé une combinaison de techniques sophistiquées. Initialement, une vulnérabilité zero-day dans l'API de PowerSchool (similaire à CVE-2025-0994, patchée en janvier mais non appliquée partout) a permis l'accès initial. Une fois à l'intérieur, les hackers ont déployé un loader malware pour mapper le réseau, exfiltrant des données via des canaux chiffrés comme Dropbox, une tactique courante chez les acteurs chinois d'espionnage rapportée par CSIS.</p><p>Selon CM-Alliance, le groupe a ensuite tenté une double extorsion : chiffrement partiel des backups pour forcer une rançon, et menace de publication des données sur des forums dark web. Bien que PowerSchool ait refusé de payer, des échantillons – incluant des dossiers d'élèves mineurs – ont été leakés le 15 février, confirmant l'authenticité. Les experts de Semperis soulignent l'utilisation d'IA pour personnaliser les phishing initiaux contre les admins IT, rendant l'attaque plus stealthy. Cette méthode, vue aussi dans l'attaque contre HCRG Care Group en février, cible les secteurs sensibles pour maximiser les impacts.</p><p>Parallèlement, des incidents connexes comme la brèche GrubHub (données de clients et chauffeurs volées) et DISA (3,3 millions impactés) montrent une coordination : les mêmes IOCs (indicateurs de compromission) pointent vers des acteurs est-européens ou nord-coréens, selon Microsoft. Ces tactiques hybrides – mélange d'espionnage et d'extorsion – marquent une évolution, où les ransomwares ne se contentent plus de chiffrer mais volent pour revendre sur le dark web.</p>",
                "<h3>Impacts sur l'éducation et au-delà : Des millions de vies exposées</h3><p>L'impact de la brèche PowerSchool dépasse les chiffres : 62 millions d'élèves, dont une majorité de mineurs, risquent l'usurpation d'identité, le harcèlement basé sur des données médicales, et des fraudes financières à long terme. PKWARE estime que les coûts pour les districts scolaires pourraient atteindre 500 millions de dollars en notifications, surveillances de crédit et litiges, sans compter les disruptions opérationnelles qui ont retardé les évaluations de fin d'année pour des milliers d'écoles.</p><p>Sur le plan sociétal, cet incident érode la confiance dans les systèmes éducatifs numériques, particulièrement post-pandémie où les plateformes comme PowerSchool sont essentielles. Tech.co rapporte que 40 % des parents interrogés envisagent de retirer leurs enfants de districts affectés, amplifiant les inégalités éducatives. Globalement, février 2025 a vu une hausse de 30 % des breaches éducatives, avec des secteurs comme la santé (HCRG) et les services (GrubHub) touchés, totalisant plus de 70 millions de records exposés, selon BrightDefense.</p><p>Les répercussions économiques sont colossales : VikingCloud projette que le cybercrime coûtera 10,5 billions de dollars en 2025, avec l'éducation comme nouveau vecteur. Des cas comme l'espionnage chinois sur WeChat (CSIS) ajoutent une dimension géopolitique, où les données éducatives servent à des campagnes de désinformation ou de recrutement.</p>",
                "<h3>Réponses institutionnelles : De la notification à la réforme</h3><p>PowerSchool a réagi rapidement : notification aux autorités le 12 février, offrant une surveillance de crédit gratuite pour deux ans et engageant des experts pour une forensique complète. Le Département de l'Éducation des États-Unis, via CISA, a émis une alerte nationale sur les vulnérabilités SIS, recommandant des patches immédiats et des audits tiers. Des États comme la Californie et New York ont lancé des enquêtes, imposant des amendes potentielles sous FERPA (loi sur la privacy éducative).</p><p>À l'échelle nationale, le FBI et CISA ont partagé des IOCs pour une chasse aux menaces, tandis que des firmes comme Palo Alto Networks ont patché des vulnérabilités connexes (CVE-2025-0108). CM-Alliance loue l'approche proactive de PowerSchool, contrastant avec des cas comme DISA où les notifications ont tardé. Le CEO de PowerSchool, Hardeep Gulati, a déclaré : « Nous prenons cela au sérieux et investissons 100 millions dans la sécurité. » Ces réponses soulignent un shift vers la transparence, mais des experts comme ceux de Secureframe appellent à des régulations fédérales plus strictes pour les edtech.</p>",
                "<h3>Recommandations pour sécuriser l'éducation : Une défense multicouche</h3><p>Face à ces menaces, les experts préconisent une approche holistique. D'abord, implémenter zero-trust pour tous les accès, segmentant les réseaux scolaires pour isoler les données sensibles. Ensuite, chiffrer end-to-end les bases de données et adopter des SBOM (Software Bill of Materials) pour tracer les vulnérabilités supply-chain, comme le conseille VikingCloud.</p><p>Des outils IA pour détecter les anomalies, comme ceux de SentinelOne, et des formations anti-phishing pour les admins IT sont essentiels. CISA recommande des backups air-gapped et des simulations d'incidents annuelles. À l'échelle sectorielle, un consortium edtech pour partager les IOCs pourrait prévenir les cascades. Enfin, investir dans la privacy by design : audits réguliers et MFA biométrique pour minimiser les risques humains, qui causent 74 % des breaches selon NordLayer.</p><p>Pour les parents et écoles : monitorer les comptes des enfants, utiliser des VPN éducatifs, et pousser pour des lois comme une 'FERPA 2.0' renforcée.</p>",
                "<h3>Conclusion</h3><p>La brèche PowerSchool de février 2025 n'est pas un incident isolé mais un catalyseur pour repenser la cybersécurité éducative. Comme le note le World Economic Forum, avec une hausse de 150 % des espions chinois en 2024 (CSIS), les données des élèves sont un trésor pour les acteurs malveillants. En unissant tech, régulateurs et éducateurs, nous pouvons transformer cette vulnérabilité en résilience, protégeant l'avenir des générations. Sans action, février 2025 restera le mois où l'éducation a payé le prix de la négligence numérique – un prix trop élevé pour nos enfants.</p>"
            ],
            "images": [{
                    "url": "https://www.pkware.com/wp-content/uploads/2025/02/powerschool-breach-2025.jpg",
                    "caption": "Illustration de la brèche PowerSchool : données d'élèves exposées via une vulnérabilité supply-chain."
                },
                {
                    "url": "https://www.cshub.com/wp-content/uploads/2025/02/february-cyber-attacks.jpg",
                    "caption": "Schéma des attaques majeures de février 2025, centrées sur l'éducation et les services."
                }
            ],
            "sources": [{
                    "title": "Recent Data Breaches 2025: Major, Latest & Recent Data Breach Incidents",
                    "url": "https://www.pkware.com/blog/recent-data-breaches"
                },
                {
                    "title": "9 major cyber attacks & data breaches in February 2025",
                    "url": "https://www.cshub.com/attacks/articles/cyber-attacks-data-breaches-february-2025"
                },
                {
                    "title": "February 2025: Major Cyber Attacks, Ransomware Attacks & Data Breaches",
                    "url": "https://www.cm-alliance.com/cybersecurity-blog/february-2025-major-cyber-attacks-ransomware-attacks-data-breaches"
                },
                {
                    "title": "Significant Cyber Incidents",
                    "url": "https://www.csis.org/programs/strategic-technologies-program/significant-cyber-incidents"
                },
                {
                    "title": "Data Breaches That Have Happened This Year (2025 Update)",
                    "url": "https://tech.co/news/data-breaches-updated-list"
                },
                {
                    "title": "List of Recent Data Breaches in 2025",
                    "url": "https://www.brightdefense.com/resources/recent-data-breaches/"
                },
                {
                    "title": "Cyber Attack News - Risk Roundup - March 2025",
                    "url": "https://xage.com/blog/cyber-attack-news-march-2025/"
                },
                {
                    "title": "207 Cybersecurity Stats and Facts for 2025",
                    "url": "https://www.vikingcloud.com/blog/cybersecurity-statistics"
                }
            ]
        },
        {
            title: "DeepSeek : l’inquiétude des autorités de protection des données personnelles",
            description: "DeepSeek, une application d'intelligence artificielle chinoise, suscite des préoccupations chez les autorités de protection des données personnelles en raison de ses pratiques de collecte et d'utilisation des données.",
            date: "30 janvier 2025",
            content: [
                "<h3>Introduction</h3><p>DeepSeek, une application d'intelligence artificielle développée par une start-up chinoise, a récemment gagné en popularité, surpassant même ChatGPT en termes de téléchargements sur l'App Store. Cependant, cette ascension rapide a attiré l'attention des autorités de protection des données personnelles, inquiètes des pratiques de l'application en matière de collecte et d'utilisation des données des utilisateurs.</p>",
                "<h3>Pratiques de collecte de données</h3><p>Selon les informations disponibles, DeepSeek collecte une quantité importante de données personnelles auprès de ses utilisateurs, y compris des informations sensibles telles que les contacts, la localisation et les historiques de navigation. Ces données sont utilisées pour améliorer les performances de l'IA, mais leur collecte massive sans consentement explicite soulève des questions sur le respect de la vie privée.</p>",
                "<h3>Réactions des autorités</h3><p>Les autorités de protection des données de plusieurs pays ont exprimé leurs préoccupations concernant DeepSeek. En Australie, le gouvernement a annoncé l'interdiction de l'application sur tous les systèmes et appareils gouvernementaux en raison de préoccupations en matière de sécurité nationale. De même, d'autres pays, dont l'Italie et Taïwan, ont pris des mesures similaires pour interdire ou restreindre l'utilisation de DeepSeek.</p>",
                "<h3>Réponse de DeepSeek</h3><p>En réponse aux critiques, DeepSeek a déclaré qu'elle subissait une cyberattaque malveillante à grande échelle, ce qui l'a obligée à limiter temporairement les inscriptions des utilisateurs. La société affirme travailler à renforcer ses mesures de sécurité et à collaborer avec les autorités pour résoudre les problèmes soulevés.</p>",
                "<h3>Conclusion</h3><p>La montée en puissance de DeepSeek met en lumière les défis croissants liés à la protection des données personnelles à l'ère de l'intelligence artificielle. Alors que ces technologies offrent des avantages significatifs, il est essentiel de garantir que leur développement et leur déploiement respectent les normes de confidentialité et de sécurité des données.</p>",
            ],
            images: [{
                url: "cyber-deepseek.avif",
                caption: "DeepSeek, l'application d'intelligence artificielle chinoise, suscite des inquiétudes en matière de protection des données.",
            }, ],
            sources: [{
                    title: "Le Monde",
                    url: "https://www.lemonde.fr/pixels/article/2025/01/30/deepseek-face-au-concurrent-chinois-de-chatgpt-l-inquietude-des-autorites-de-protection-des-donnees-personnelles_6523968_4408996.html",
                },
                {
                    title: "news.com.au",
                    url: "https://www.news.com.au/technology/innovation/australia-to-ban-controversial-chinese-ai-company-deepseek-from-all-of-its-government-systems/news-story/cac4f0763016408eb406a48eb8dbe6c0",
                },
                {
                    title: "Impact.sn",
                    url: "https://www.impact.sn/Intelligence-artificielle-La-chinoise-DeepSeek-detrone-ChatGPT-se-dit-victime-d-une-cyberattaque-a-grande-echelle_a50909.html",
                },
            ],
        },
        {
            title: "Game Freak : Cyberattaque compromettant des données sensibles",
            description: "Le studio Game Freak a subi une cyberattaque, compromettant des informations sur ses employés et des projets futurs, en parallèle du lancement du nouveau jeu Pokémon.",
            date: "14 octobre 2024",
            content: [
                "<h3>Introduction</h3><p>Game Freak, le célèbre studio derrière la franchise Pokémon, a récemment annoncé avoir été victime d'une cyberattaque. Cette intrusion a conduit à la compromission de données sensibles, y compris des informations sur les employés et des projets de développement en cours.</p>",

                "<h3>Détails de l'incident</h3><p>Cette violation de données survient alors que Game Freak se prépare au lancement de son nouveau jeu Pokémon sur la Nintendo Switch 2. Les détails spécifiques de la faille de sécurité n'ont pas été entièrement révélés, mais l'impact pourrait toucher jusqu'à 31 millions d'utilisateurs.</p>",

                "<h3>Conséquences pour les utilisateurs</h3><p>Les utilisateurs sont conseillés de surveiller de près leurs informations personnelles, car les données compromises pourraient être utilisées de manière malveillante. Game Freak a commencé à notifier les utilisateurs concernés et à renforcer ses mesures de sécurité pour éviter de futures violations.</p>",

                "<h3>Conclusion</h3><p>Alors que la franchise Pokémon continue de croître, cette cyberattaque souligne l'importance de la sécurité des données dans l'industrie du jeu vidéo. Les fans sont impatients de découvrir le nouveau jeu, mais la situation actuelle rappelle que la sécurité des informations personnelles doit rester une priorité pour toutes les entreprises technologiques.</p>",
            ],
            images: [{
                url: "pokemon.png",
                caption: "Game Freak est connu pour ses franchises emblématiques comme Pokémon.",
            }, ],
            sources: [{
                title: "Metro",
                url: "https://metro.co.uk/2024/10/14/pokemon-gen-10-game-nintendo-switch-2-revealed-game-freak-hack-21790454/",
            }, ],
        },
        {
            title: "Violation de données à l'Internet Archive : 31 millions d'utilisateurs impactés",
            description: "L'Internet Archive a été victime d'une cyberattaque, entraînant la compromission des données personnelles de 31 millions d'utilisateurs.",
            date: "15 octobre 2024",
            content: [
                "<h3>Introduction</h3><p>L'Internet Archive, une organisation à but non lucratif connue pour son immense collection d'archives numériques et sa célèbre Wayback Machine, a récemment révélé avoir subi une importante violation de données. Cette attaque aurait compromis les informations personnelles de 31 millions d'utilisateurs inscrits à ses services.</p>",

                "<h3>Détails de l'attaque</h3><p>L'attaque a été rendue publique le <strong>13 octobre 2024</strong>, lorsqu'il a été découvert que les serveurs de l'Internet Archive avaient été infiltrés par des cybercriminels. L'accès non autorisé aurait permis à ces derniers de dérober les données d'utilisateur telles que les adresses e-mail, les noms d'utilisateur, ainsi que des mots de passe cryptés.</p><p>Bien que les informations financières ne semblent pas avoir été compromises, l'ampleur de l'attaque est alarmante en raison du nombre d'utilisateurs affectés et du potentiel d'usurpation d'identité.</p>",

                "<h3>Nature des données compromises</h3><p>Les données volées comprennent des informations personnelles telles que :</p><ul>",
                "<li>Adresses e-mail</li>",
                "<li>Noms d'utilisateur</li>",
                "<li>Mots de passe cryptés (hashés)</li>",
                "<li>Historique d'activité des utilisateurs sur les sites affiliés à l'Internet Archive.</li></ul>",

                "<p>La méthode de cryptage utilisée pour les mots de passe n'a pas été précisée, mais les experts conseillent aux utilisateurs concernés de changer leurs mots de passe immédiatement, en particulier s'ils utilisent les mêmes informations de connexion sur d'autres services en ligne.</p>",

                "<h3>Réactions et mesures prises</h3><p>L'Internet Archive a rapidement pris des mesures pour contenir l'incident en contactant les utilisateurs touchés et en renforçant ses systèmes de sécurité. Ils ont également mis à jour leur politique de sécurité pour prévenir de futures attaques. Toutefois, les utilisateurs sont invités à surveiller de près leurs comptes pour détecter toute activité suspecte et à utiliser l'authentification à deux facteurs lorsque cela est possible.</p>",

                "<h3>Conseils pour les utilisateurs</h3><p>Pour les utilisateurs affectés, il est recommandé de :</p><ul>",
                "<li>Changer immédiatement leurs mots de passe sur l'Internet Archive et sur tous les autres services utilisant le même mot de passe.</li>",
                "<li>Activer l'authentification à deux facteurs (2FA) si disponible.</li>",
                "<li>Être vigilants face à des tentatives d'hameçonnage ou à des communications suspectes.</li></ul>",

                "<p>Il est également conseillé de surveiller leurs comptes bancaires et leurs e-mails pour prévenir tout acte frauduleux pouvant résulter de cette violation.</p>",

                "<h3>Conclusion</h3><p>Cette attaque souligne une fois de plus l'importance de la cybersécurité, même pour des organisations aussi respectées que l'Internet Archive. Les utilisateurs doivent prendre toutes les mesures nécessaires pour protéger leurs informations personnelles et renforcer leur sécurité en ligne.</p>",
            ],
            images: [{
                url: "webarchive.png",
                caption: "L'Internet Archive a été victime d'une cyberattaque compromettant les données de millions d'utilisateurs.",
            }, ],
            sources: [{
                title: "BleepingComputer",
                url: "https://www.bleepingcomputer.com/news/security/internet-archive-hacked-data-breach-impacts-31-million-users/",
            }, ],
        },
        {
            title: "Une faille critique dans Firefox permet aux attaquants de contrôler à distance votre PC",
            description: "Une vulnérabilité grave a été découverte dans Firefox, permettant aux pirates de prendre le contrôle à distance d'un ordinateur ciblé via une exécution de code malveillant.",
            date: "15 octobre 2024",
            content: [
                "<h3>Introduction</h3><p>Un nouveau problème de sécurité a été signalé dans le navigateur Firefox. Cette faille critique, référencée sous l'identifiant <strong>GHSA-hm3j-qgpw-pj98</strong>, permet à un attaquant distant de prendre le contrôle de l'ordinateur d'une victime en exploitant une exécution de code à distance. La vulnérabilité affecte certaines versions de Firefox et pourrait exposer des millions d'utilisateurs à des risques considérables.</p>",

                "<h3>Origine de la vulnérabilité</h3><p>La faille provient d'une mauvaise gestion de la mémoire dans certaines versions du moteur de rendu de Firefox. Cela permet à un pirate de créer des sites web malveillants conçus pour exploiter cette vulnérabilité. Une fois que l'utilisateur visite le site, l'attaquant peut exécuter du code sur la machine cible, lui permettant de prendre le contrôle complet du système, de voler des données ou d’installer des logiciels malveillants.</p>",

                "<h3>Impact et exploitation</h3><p>Cette vulnérabilité est particulièrement dangereuse car elle ne nécessite aucune interaction complexe de la part de l'utilisateur, au-delà de la simple visite d'un site compromis. L'attaquant peut alors installer des logiciels, lire ou modifier des fichiers, voire prendre le contrôle à distance du système. La faille affecte non seulement les utilisateurs de Firefox, mais potentiellement ceux des navigateurs dérivés du même moteur, comme certains dérivés de Firefox sur mobile ou d'autres applications basées sur le moteur Gecko.</p>",

                "<h3>Mesures de protection</h3><p>Mozilla a rapidement réagi en publiant une mise à jour de sécurité pour corriger cette faille. Il est fortement recommandé à tous les utilisateurs de Firefox de vérifier la version de leur navigateur et d'effectuer la mise à jour dès que possible. Pour se protéger contre cette vulnérabilité, il est également conseillé d'éviter de cliquer sur des liens suspects ou de visiter des sites non fiables.</p>",

                "<h3>Conclusion</h3><p>Cette nouvelle faille de sécurité souligne l'importance de maintenir à jour les logiciels utilisés au quotidien. Les vulnérabilités critiques comme celle-ci peuvent avoir des répercussions graves sur la sécurité des utilisateurs, notamment en facilitant les attaques à distance. La vigilance reste donc de mise, et il est essentiel de suivre les recommandations des éditeurs pour se prémunir contre ces menaces.</p>",
            ],
            images: [{
                url: "firefox-vulnerability.png",
                caption: "Une faille critique découverte dans Firefox permet une prise de contrôle à distance.",
            }, ],
            sources: [{
                title: "GitHub Security Advisory",
                url: "https://github.com/advisories/GHSA-hm3j-qgpw-pj98",
            }, ],
        },
        {
            title: "Nvidia corrige une vulnérabilité critique dans son Container Toolkit",
            description: "Nvidia a récemment corrigé une vulnérabilité critique dans son outil de conteneurisation, Container Toolkit.",
            date: "30 septembre 2024",
            content: [
                "<h3>Détails de la faille critique</h3>",
                "<p>Autrefois connu sous le nom de Nvidia Docker, le service Nvidia Container Toolkit (NCT) contenait une vulnérabilité majeure, référencée sous le CVE-2024-0132 avec un score de gravité de 9 sur 10 selon l'échelle CVSS. Cette vulnérabilité permettait à un utilisateur ou une application malveillante de s'évader de leur conteneur isolé et de prendre le contrôle total de l’hôte sous-jacent.</p>",
                "<p>Nvidia a décrit cette faille comme une vulnérabilité TOCTOU (Time-of-check Time-of-Use) qui survient lorsque le programme vérifie une condition puis en utilise les résultats sans s'assurer que la condition n'a pas changé entre temps. Cette vulnérabilité affecte les versions de Nvidia Container Toolkit jusqu'à la version 1.16.1 incluse. Les détails techniques de l'exploitation n'ont pas été divulgués pour des raisons de sécurité.</p>",
                "<h3>Exploitation potentielle et impact</h3>",
                "<p>Les chercheurs de Wiz Research, qui ont découvert la faille, expliquent qu'un attaquant contrôlant une image de conteneur malveillante peut exploiter cette faille pour échapper au conteneur et obtenir un accès complet à l’hôte. Ce type d'attaque peut se produire directement par le biais de services utilisant des ressources GPU partagées ou via des chaînes d'approvisionnement compromises.</p>",
                "<h3>Correctifs et recommandations</h3>",
                "<p>Nvidia a publié un correctif pour cette vulnérabilité. Tous les utilisateurs de Nvidia Container Toolkit sont invités à mettre à jour vers la version la plus récente.</p>",
            ],
            images: [{
                url: "faille-nvidia.png",
                caption: "Image de Wiz Research - vulnérabilité Nvidia",
            }, ],
            sources: [{
                title: "Le Monde Informatique",
                url: "https://www.lemondeinformatique.fr/actualites/lire-docker-augmente-le-prix-de-ses-abonnements-pro-et-team-94719.html",
            }, ],
        },
    ],

    DEV: [{
            "title": "LynxJS : Une nouvelle ère pour le développement multiplateforme",
            "description": "LynxJS, un framework open-source lancé par ByteDance, promet de révolutionner le développement d'applications multiplateformes en combinant la simplicité du JavaScript avec des performances natives grâce à un moteur Rust.",
            "date": "8 mars 2025",
            "content": [
                "<h3>Introduction</h3><p>Dévoilé en mars 2025 par ByteDance, LynxJS est un framework open-source qui permet aux développeurs de créer des applications pour mobile (iOS et Android) et le web à partir d’une seule base de code. Utilisant des technologies web comme JavaScript et CSS, il offre une alternative performante aux outils existants.</p>",
                "<h3>Un framework innovant</h3><p>LynxJS se distingue par son moteur de rendu natif écrit en Rust et son architecture double-thread, séparant la logique JavaScript du rendu UI. Cela garantit des performances fluides et des lancements rapides, même pour des applications complexes intégrées dans des écosystèmes comme TikTok.</p>",
                "<h3>Comment l’utiliser</h3><p>Pour démarrer, les développeurs peuvent utiliser l’outil CLI ‘create-rspeedy’ pour configurer un projet, puis tester leurs applications via l’app Lynx Explorer. Le framework prend en charge une syntaxe inspirée de React, rendant la transition facile pour les développeurs web.</p>",
                "<h3>Conclusion</h3><p>Avec sa licence Apache 2.0 et une documentation complète sur lynxjs.org, LynxJS s’impose comme une option prometteuse face à React Native ou Flutter. Bien que son écosystème soit encore jeune, son potentiel attire déjà l’attention des développeurs du monde entier.</p>"
            ],
            "images": [{
                "url": "/lynx.png",
                "caption": "Le logo de LynxJS, symbole d’un framework léger et puissant."
            }],
            "sources": [{
                    "title": "Medium - Priyadarshan Ghosh",
                    "url": "https://priyadarshanghosh26.medium.com/introduction-to-lynxjs-a-lightweight-javascript-framework-c386eba73728"
                },
                {
                    "title": "Site officiel de LynxJS",
                    "url": "https://lynxjs.org/"
                }
            ]
        },
        {
            "title": "Le créateur de C++ appelle à sécuriser le langage",
            "description": "Bjarne Stroustrup, le créateur du langage C++, exhorte la communauté des développeurs à renforcer la sécurité de ce langage, notamment en accélérant l'adoption de pratiques de mémoire sécurisée.",
            "date": "28 février 2025",
            "content": [
                "<h3>Introduction</h3><p>Dans une déclaration publiée le 28 février 2025, Bjarne Stroustrup, le père du C++, a lancé un appel urgent à la communauté des développeurs pour sécuriser ce langage largement utilisé. Alors que C++ reste un pilier dans les systèmes critiques, ses failles de gestion de la mémoire continuent de poser des risques.</p>",
                "<h3>Un constat alarmant</h3><p>Stroustrup a souligné que les erreurs de mémoire, comme les débordements de tampon, sont encore trop fréquentes dans les projets C++. Il insiste sur l’adoption de pratiques modernes, telles que les 'smart pointers' et les outils d’analyse statique, pour réduire les vulnérabilités exploitables par des attaquants.</p>",
                "<h3>Propositions concrètes</h3><p>Il recommande une mise à jour des standards C++ (notamment C++23 et au-delà) pour intégrer des garde-fous par défaut et encourager les développeurs à abandonner les pratiques obsolètes comme les pointeurs bruts. Il appelle également à une meilleure formation des programmeurs sur la sécurité.</p>",
                "<h3>Conclusion</h3><p>Cet appel intervient dans un contexte où la cybersécurité devient une priorité mondiale. Si la communauté suit les conseils de Stroustrup, C++ pourrait rester pertinent tout en devenant plus sûr pour les applications futures.</p>"
            ],
            "images": [{
                "url": "https://notpunchnox.github.io/Veille-techno.github.io/articles/images/cpp-security.jpg",
                "caption": "Bjarne Stroustrup plaide pour un C++ plus sécurisé."
            }],
            "sources": [{
                "title": "Programmez!",
                "url": "https://www.programmez.com/"
            }]
        },
        {
            "title": "Google enrichit AlloyDB, son SGBD compatible PostgreSQL",
            "description": "Google continue d'améliorer AlloyDB, son système de gestion de bases de données compatible avec PostgreSQL, en y ajoutant de nouvelles fonctionnalités pour optimiser les performances et la sécurité.",
            "date": "26 février 2025",
            "content": [
                "<h3>Introduction</h3><p>Google a annoncé le 26 février 2025 une mise à jour majeure de AlloyDB, son système de gestion de bases de données (SGBD) cloud compatible avec PostgreSQL. Cette évolution vise à répondre aux besoins croissants des entreprises en matière de performance et de protection des données.</p>",
                "<h3>Nouvelles fonctionnalités</h3><p>Parmi les ajouts, AlloyDB intègre désormais une optimisation automatique des requêtes grâce à l’IA, réduisant les temps d’exécution jusqu’à 20 %. Côté sécurité, un chiffrement renforcé et une gestion fine des accès basés sur les rôles ont été ajoutés pour répondre aux normes de conformité comme le RGPD.</p>",
                "<h3>Impact pour les développeurs</h3><p>Ces améliorations facilitent la migration depuis PostgreSQL classique vers AlloyDB, tout en offrant des outils pour surveiller et déboguer les performances en temps réel. Les entreprises utilisant des charges de travail intensives, comme l’analyse de données, en bénéficieront particulièrement.</p>",
                "<h3>Conclusion</h3><p>Avec cette mise à jour, Google consolide AlloyDB comme une alternative compétitive aux SGBD traditionnels, combinant la flexibilité de PostgreSQL avec la puissance du cloud. Une annonce qui devrait séduire les développeurs et les DSI.</p>"
            ],
            "images": [{
                "url": "https://notpunchnox.github.io/Veille-techno.github.io/articles/images/alloydb-update.jpg",
                "caption": "AlloyDB de Google s’enrichit pour plus de performance et sécurité."
            }],
            "sources": [{
                "title": "Programmez!",
                "url": "https://www.programmez.com/"
            }]
        },
        {
            "title": "Google lance une version gratuite de son assistant de code par IA : comment y accéder",
            "description": "Google a récemment dévoilé une version gratuite de son assistant de codage alimenté par l'intelligence artificielle, visant à faciliter le travail des développeurs en automatisant certaines tâches de programmation.",
            "date": "26 février 2025",
            "content": [
                "<h3>Introduction</h3><p>Le 26 février 2025, Google a lancé une version gratuite de son assistant de codage basé sur l’IA, une initiative visant à démocratiser l’accès à des outils de développement avancés. Cet assistant promet d’accélérer les tâches répétitives et d’améliorer la productivité des programmeurs.</p>",
                "<h3>Fonctionnalités clés</h3><p>L’assistant peut générer du code à partir de descriptions en langage naturel, suggérer des corrections en temps réel et expliquer des blocs de code complexes. Compatible avec des langages comme Python, JavaScript et Java, il s’intègre directement dans des IDE populaires comme VS Code via une extension gratuite.</p>",
                "<h3>Comment y accéder</h3><p>Pour utiliser cet outil, il suffit de se rendre sur le site Google Cloud, de créer un compte gratuit et de télécharger l’extension ou d’accéder à la version web. Une limite de 100 000 tokens par mois est imposée, suffisante pour la plupart des usages personnels ou de petits projets.</p>",
                "<h3>Conclusion</h3><p>En rendant cet assistant gratuit, Google concurrence des outils comme GitHub Copilot tout en attirant les développeurs vers son écosystème cloud. Une aubaine pour les freelances et les étudiants cherchant à optimiser leur workflow.</p>"
            ],
            "images": [{
                "url": "https://notpunchnox.github.io/Veille-techno.github.io/articles/images/google-ai-coding.jpg",
                "caption": "L’assistant de codage IA gratuit de Google est désormais accessible."
            }],
            "sources": [{
                "title": "Blog du Modérateur",
                "url": "https://www.blogdumoderateur.com/dossier/developpement/"
            }]
        },
        {
            "title": "Auto-entrepreneurs : les nouvelles réglementations Urssaf et TVA",
            "description": "Cet article détaille les nouvelles règles de l'Urssaf et de la TVA qui impactent les auto-entrepreneurs depuis 2024, notamment les augmentations de cotisations et les seuils de franchise TVA révisés, tout en proposant des outils pour simplifier la gestion des freelances.",
            "date": "19 novembre 2024",
            "content": [
                "<h3>Introduction</h3><p>Depuis le 1er janvier 2024, les auto-entrepreneurs en France doivent composer avec de nouvelles réglementations Urssaf et TVA, introduites pour adapter le statut aux réalités économiques. Annoncées le 19 novembre 2024, ces mesures affectent particulièrement les freelances tech.</p>",
                "<h3>Changements principaux</h3><p>Les cotisations sociales ont augmenté de 1,5 % en moyenne pour financer la protection sociale. Par ailleurs, les seuils de franchise de TVA ont été ajustés : 39 100 € pour les prestations de services (contre 36 500 € auparavant), obligeant plus d’auto-entrepreneurs à facturer la TVA. Une simplification administrative est toutefois proposée via un portail Urssaf modernisé.</p>",
                "<h3>Outils pour s’adapter</h3><p>Des plateformes comme Free-Work MyBusiness offrent des solutions pour gérer ces nouvelles obligations : calcul automatique des cotisations, génération de factures avec TVA et suivi des seuils en temps réel. Ces outils visent à réduire la charge administrative des freelances.</p>",
                "<h3>Conclusion</h3><p>Ces évolutions reflètent une volonté de structurer le statut d’auto-entrepreneur, mais elles demandent une adaptation rapide. Les outils numériques seront essentiels pour les freelances souhaitant rester conformes tout en se concentrant sur leur cœur de métier.</p>"
            ],
            "images": [{
                "url": "https://notpunchnox.github.io/Veille-techno.github.io/articles/images/urssaf-freelance.jpg",
                "caption": "Nouvelles règles Urssaf et TVA pour les auto-entrepreneurs en 2024."
            }],
            "sources": [{
                "title": "Free-Work",
                "url": "https://www.free-work.com/fr/tech-it/blog/actualites-informatiques"
            }]
        },
        {
            "title": "Projet Digits de Nvidia : un ordinateur de bureau sous Linux dédié aux développeurs",
            "description": "Nvidia dévoile Digits, un ordinateur de bureau alimenté par Linux, conçu spécifiquement pour les développeurs avec une puissance de calcul optimisée et une flexibilité accrue.",
            "date": "04 Février 2025",
            "content": [
                "<h3>Introduction</h3><p>Nvidia, connu pour ses avancées dans les GPU et l'intelligence artificielle, a récemment présenté son projet Digits : une station de travail sous Linux pensée pour les développeurs. Cet ordinateur de bureau, qui se distingue par sa conception ouverte et sa puissance brute, vise à répondre aux besoins des professionnels cherchant un environnement de développement robuste et personnalisable.</p>",
                "<h3>Une machine taillée pour les développeurs</h3><p>Le Digits se présente comme un ordinateur de bureau compact mais puissant, intégrant un processeur ARM haute performance couplé à un GPU Nvidia de dernière génération. Avec une mémoire RAM extensible jusqu'à 64 Go et un stockage SSD NVMe de 1 To par défaut, cette machine est conçue pour gérer des charges de travail intensives, qu'il s'agisse de compilation de code, de tests d'applications ou de simulations complexes.</p>",
                "<h3>Linux au cœur du système</h3><p>Contrairement aux systèmes propriétaires traditionnels, le Digits repose sur une distribution Linux optimisée par Nvidia. Cette décision offre aux développeurs une liberté totale pour personnaliser leur environnement de travail. Que ce soit pour installer des outils spécifiques, configurer des scripts ou exploiter des bibliothèques open source, cet ordinateur promet une flexibilité inégalée. Nvidia fournit également une suite d’outils préinstallés, compatibles avec les frameworks de développement les plus populaires.</p>",
                "<h3>Design et connectivité</h3><p>Le design du Digits est à la fois fonctionnel et épuré. Son boîtier compact permet une intégration facile sur un bureau, tandis que ses ports multiples (USB-C, HDMI 2.1, Ethernet 10 GbE) assurent une connectivité étendue pour les périphériques modernes. Un système de refroidissement avancé garantit des performances stables même lors d’une utilisation prolongée à pleine capacité.</p>",
                "<h3>Positionnement sur le marché</h3><p>Avec un prix de départ annoncé autour de 1 500 $, le Digits se positionne comme une alternative compétitive aux stations de travail haut de gamme. Nvidia cible clairement les développeurs indépendants, les petites équipes et les entreprises cherchant une solution performante sans les coûts exorbitants des configurations sur mesure.</p>",
                "<h3>Conclusion</h3><p>Le projet Digits de Nvidia redéfinit l’ordinateur de bureau pour développeurs en combinant la puissance brute d’un matériel de pointe avec la liberté offerte par Linux. Cette initiative pourrait bien séduire une communauté en quête de performance et d’adaptabilité, tout en renforçant la présence de Nvidia dans le domaine des outils pour professionnels.</p>"
            ],
            "images": [{
                "url": "https://notpunchnox.github.io/Veille-techno.github.io/articles/images/digits-nvidia.webp",
                "caption": "Le Nvidia Digits, un ordinateur de bureau sous Linux pour les développeurs."
            }],
            "sources": [{
                "title": "ZDNet France",
                "url": "https://www.zdnet.fr/actualites/projet-digits-de-nvidia-un-ordinateur-de-bureau-alimente-par-linux-pour-les-developpeurs-dia-404106.htm"
            }]
        },
        {
            title: "WordPress intègre son nouveau design system dans Figma : comment y accéder",
            description: "WordPress lance une bibliothèque de composants dans Figma, permettant aux concepteurs de créer des designs plus cohérents et efficaces dans l’écosystème du CMS.",
            date: "13 novembre 2024",
            content: [
                "<h3>Introduction</h3>",
                "<p>L’équipe de design de WordPress a annoncé le 7 novembre 2024 la sortie d’une bibliothèque de design system sur Figma. Cet outil vise à offrir aux concepteurs travaillant dans l’écosystème WordPress des composants prêts à l’emploi pour faciliter la création de maquettes et respecter les normes du CMS.</p>",
                "<h3>Qu’est-ce que la bibliothèque de design system WordPress pour Figma ?</h3>",
                "<p>La bibliothèque de design system WordPress est un ensemble de composants visuels et de styles intégrés dans Figma, le logiciel de référence pour le prototypage et la collaboration en ligne. Elle inclut :</p>",
                "<ul>",
                "<li><strong>Bibliothèque de composants étendue</strong> : boutons, formulaires, icônes et menus organisés pour une réutilisation efficace.</li>",
                "<li><strong>Tokens de style</strong> : gestion des éléments comme la typographie, la couleur ou les rayons pour garantir l’uniformité.</li>",
                "<li><strong>Stickers complexes</strong> : composants avancés comme l’éditeur de blocs ou l’éditeur de site.</li>",
                "</ul>",
                "<p>Selon James Koster, designer chez Automattic, cette ressource vise à simplifier le travail des designers en centralisant les éléments nécessaires, leur permettant ainsi de se concentrer sur l’aspect créatif.</p>",
                "<h3>Pourquoi une bibliothèque WordPress sur Figma ?</h3>",
                "<p>Figma, avec ses fonctionnalités de prototypage et de collaboration en ligne, s’est imposé comme un outil incontournable pour les designers. Cette bibliothèque WordPress permet :</p>",
                "<ul>",
                "<li><strong>Optimisation des flux de travail</strong> : les composants visuels sont centralisés, prêts à être utilisés et personnalisés.</li>",
                "<li><strong>Cohérence avec le code</strong> : les éléments visuels correspondent aux composants disponibles dans le code WordPress, réduisant les écarts entre conception et développement.</li>",
                "<li><strong>Facilité de personnalisation</strong> : grâce aux propriétés et variantes des composants dans Figma, l’adaptation des designs devient intuitive.</li>",
                "</ul>",
                "<p>Cette intégration simplifie ainsi la création d’interfaces respectant les normes esthétiques et fonctionnelles du CMS.</p>",
                "<h3>Comment accéder à la bibliothèque WordPress dans Figma ?</h3>",
                "<p>La bibliothèque est accessible de plusieurs manières :</p>",
                "<ul>",
                "<li>Les membres de l’équipe de design de WordPress y ont un accès automatique dans leurs fichiers Figma au sein de l’organisation WordPress.org.</li>",
                "<li>Les autres concepteurs peuvent dupliquer le fichier depuis la page de la communauté WordPress sur Figma et le publier comme bibliothèque.</li>",
                "</ul>",
                "<p>La bibliothèque sera mise à jour régulièrement avec les nouvelles versions de Gutenberg et des versions majeures de WordPress (à partir de la version 6.8).</p>",
            ],
            sources: [{
                    title: "Automattic",
                    url: "https://automattic.com/",
                },
                {
                    title: "WordPress Design Team Blog",
                    url: "https://make.wordpress.org/design/",
                },
                {
                    title: "Figma Community - WordPress",
                    url: "https://www.figma.com/community",
                },
            ],
            images: [{
                    url: "wordpress.jpg",
                    caption: "L’interface du nouveau système de design WordPress dans Figma, regroupant styles et composants. © James Koster/Automattic",
                },
                {
                    url: "figma-wordpress.jpg",
                    caption: "L’éditeur de blocs intégré au design système WordPress dans Figma. © James Koster/Automattic",
                },
            ],
        },
        {
            title: "Plus de 75 % des développeurs s'appuient sur l'IA : pourquoi c'est un problème",
            description: "Une étude de Google Cloud révèle que si l'adoption de l'IA augmente la productivité et la qualité du code, elle peut également entraîner une instabilité accrue dans la livraison des logiciels.",
            date: "28 octobre 2024",
            content: [
                "<h3>Introduction</h3><p>Une étude récente du rapport <em>State of DevOps 2024</em> de Google Cloud met en lumière une tendance majeure dans l'industrie technologique : plus de 75 % des développeurs et des professionnels IT s’appuient désormais sur l’intelligence artificielle (IA) dans leurs tâches quotidiennes. Cependant, cette adoption massive n’est pas sans inconvénients.</p>",
                "<h3>Un usage généralisé de l’IA</h3><p>Selon l’enquête menée par l’équipe DevOps Research and Assessment (DORA) de Google Cloud auprès de 3 000 professionnels à travers le monde, 76 % des répondants utilisent des outils ou agents basés sur l’IA pour :</p><ul>",
                "<li>Écrire du code</li>",
                "<li>Synthétiser des informations</li>",
                "<li>Expliquer du code</li>",
                "</ul><p>De plus, 81 % des entreprises représentées dans l’étude ont réorienté leurs ressources technologiques vers le développement et l’intégration de l’IA.</p>",
                "<h3>Avantages mesurables</h3><p>Les résultats montrent que l’adoption de l’IA est corrélée à plusieurs améliorations dans les processus de développement :</p><ul>",
                "<li>Augmentation de la qualité de la documentation (+7,5 %)</li>",
                "<li>Amélioration de la qualité du code (+3,4 %)</li>",
                "<li>Accélération des révisions de code (+3,1 %)</li>",
                "<li>Réduction de la complexité du code (-1,8 %)</li>",
                "</ul><p>Au moins 67 % des répondants affirment que l’IA les aide à produire un meilleur code, augmentant ainsi leur productivité et leur satisfaction au travail.</p>",
                "<h3>Les limites de l’intégration de l’IA</h3><p>Malgré ces avantages, les chercheurs de Google Cloud soulignent que l’intégration de l’IA peut avoir des impacts négatifs sur les performances de livraison des logiciels. Par exemple :</p><ul>",
                "<li>Diminution de la stabilité de la livraison (-7,2 %)</li>",
                "<li>Réduction du débit de livraison estimée à -1,5 %</li>",
                "</ul><p>Cette instabilité s’explique en partie par le faible niveau de confiance des développeurs dans le code généré par l’IA. En effet, 39 % des répondants déclarent avoir 'peu ou pas confiance' dans les résultats fournis par ces outils.</p>",
                "<h3>Recommandations pour une adoption réfléchie</h3><p>Les chercheurs appellent à une gestion prudente de l’intégration de l’IA dans les workflows de développement. Ils recommandent :</p><ul>",
                "<li>Une évaluation approfondie des rôles confiés à l’IA</li>",
                "<li>Un suivi des impacts sur la stabilité et les performances des livraisons</li>",
                "</ul><p>L’amélioration du processus de développement ne garantit pas automatiquement une meilleure livraison des logiciels', conclut l’étude. Bien que l’IA apporte des bénéfices importants, elle n’est pas une solution universelle.</p>",
            ],
            sources: [{
                    title: "ZDNet",
                    url: "https://www.zdnet.com/",
                },
                {
                    title: "Google Cloud State of DevOps Report 2024",
                    url: "https://cloud.google.com/state-of-devops/",
                },
            ],
            images: [{
                url: "IArobot-750x410.jpg",
                caption: "IA robot",
            }, ],
        },
        {
            title: "Top 20 des langages de programmation en septembre 2024",
            description: "Le classement TIOBE de septembre 2024 dévoile des changements intrigants parmi les langages de programmation. Python continue d’imposer sa domination, mais d’autres langages montent en flèche.",
            date: "1 septembre 2024",
            content: [
                "<h3>Introduction</h3><p>Le classement TIOBE de septembre 2024 dévoile des changements intrigants parmi les langages de programmation. Si Python continue d’imposer sa domination, certains langages montent en flèche tandis que d’autres subissent un recul significatif.</p>",
                '<h3>Classement TIOBE</h3><p>Voici le classement des 20 principaux langages de programmation :</p><p><ul style="margin-left: 40px;"><li>Python : 20.17%</li><li>C++ : 10.75%</li><li>Java : 9.45%</li><li>C : 8.89%</li><li>C# : 6.08%</li><li>JavaScript : 3.92%</li><li>Visual Basic : 2.70%</li><li>Go : 2.35%</li><li>SQL : 1.94%</li><li>Fortran : 1.78%</li><li>Delphi/Object Pascal : 1.77%</li><li>MATLAB : 1.47%</li><li>PHP : 1.46%</li><li>Rust : 1.32%</li><li>R : 1.20%</li><li>Ruby : 1.13%</li><li>Scratch : 1.11%</li><li>Kotlin : 1.10%</li><li>COBOL : 1.09%</li><li>Swift : 1.08%</li></ul></p>',
                "<h3>Analyse des langages</h3><p>Python reste en tête, suivi de C++ et Java. Swift perd du terrain tandis que Scratch regagne des places dans le classement.</p>",
                "<h3>Conclusion</h3><p>Le classement TIOBE met en lumière des changements marquants dans l'univers des langages de programmation. Utilisez ces informations pour adapter vos choix technologiques.</p>",
            ],
            images: [{
                    url: "unstonksC.png",
                    caption: "Top langages de programmation",
                },
                {
                    url: "Programmation2024TopLang.png",
                    caption: "Langages de programmation en tendance",
                },
            ],
            sources: [{
                title: "Codeur.com langages-programmation-septembre-2024",
                url: "https://www.codeur.com/blog/langages-programmation-septembre-2024/",
            }, ],
        },
    ]
};
