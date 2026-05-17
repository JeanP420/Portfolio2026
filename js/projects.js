const PROJECTS = {
  digibat: {
    badge: "Bloc 1 · Gestion de projet",
    title: "Prototype de suivi de production numérique",
    level: "Force de proposition",
    description: `Développement d'un prototype applicatif visant à remplacer et améliorer le suivi de production papier existant. L'outil tourne en local, répond aux besoins concrets des opérateurs et intègre les fonctionnalités nécessaires pour éviter le recours à des outils non maîtrisés (shadow IT).`,
    actions: [
      "Analyse des besoins terrain auprès des opérateurs",
      "Conception et développement du prototype en JSX et Python, assisté par Claude",
      "Remplacement progressif du suivi papier par un outil numérique centralisé",
      "Intégration d'outils répondant aux besoins opérateurs pour limiter le shadow IT",
      "Tests en conditions réelles et ajustements itératifs"
    ],
    stack: ["JSX", "Python", "Claude (IA)", "Local"],
    highlights: ["Prototype fonctionnel déployé en local", "Besoins opérateurs couverts", "Réduction du shadow IT"]
  },

  streamlit: {
    badge: "Bloc 1 · Innovations & technologies",
    title: "Prototype Streamlit + Gemini / Claude",
    level: "Opérateur",
    description: `Développement d'un prototype d'interface IA permettant d'analyser et de visualiser les données de production. L'application Streamlit expose les données ERP et les rend interrogeables via un LLM (Gemini ou Claude selon les tests).`,
    actions: [
      "Développement d'une interface Streamlit connectée à la base ERP",
      "Intégration de l'API Gemini pour répondre à des questions en langage naturel sur les données",
      "Tests comparatifs avec l'API Claude (Anthropic)",
      "Visualisations dynamiques des indicateurs de production",
      "Présentation du prototype aux équipes et recueil de retours"
    ],
    stack: ["Python", "Streamlit", "Gemini API", "Claude API", "Pandas", "Plotly"],
    highlights: ["Questions en langage naturel sur les données", "Visualisations temps réel", "Comparatif LLM Gemini vs Claude"]
  },

  veille: {
    badge: "Bloc 1 · Veille & prospective",
    title: "Sécurité Docker / NAS & veille technologique",
    level: "Autonome",
    description: `Mise en place d'une infrastructure Docker sécurisée sur NAS local, couplée à une démarche de veille active sur les avancées IA et les bonnes pratiques de sécurité informatique.`,
    actions: [
      "Déploiement de services Docker sur NAS Synology",
      "Sécurisation des accès (VPN, pare-feu, reverse proxy)",
      "Mise en place d'outils de veille (flux RSS, newsletters tech, forums spécialisés)",
      "Suivi des publications sur l'IA générative appliquée à l'industrie",
      "Présentation mensuelle des avancées technologiques pertinentes à l'équipe"
    ],
    stack: ["Docker", "NAS Synology", "Nginx", "VPN", "RSS"],
    highlights: ["Infrastructure sécurisée en production", "Veille hebdomadaire documentée", "Partage d'expertise en équipe"]
  },

  ux: {
    badge: "Bloc 1 · Marketing / UX",
    title: "UX pour les opérateurs en atelier",
    level: "Opérateur",
    description: `Conception et amélioration des interfaces utilisées par les opérateurs directement en atelier. Prise en compte des contraintes terrain : mains occupées, environnement bruyant, utilisation en station debout.`,
    actions: [
      "Observation terrain et entretiens avec les opérateurs",
      "Identification des frictions d'usage (taille des éléments, lisibilité, navigation)",
      "Itérations de design sur les formulaires de saisie",
      "Tests utilisateurs directement en atelier",
      "Intégration des retours dans les versions suivantes"
    ],
    stack: ["Figma", "Streamlit", "UX Research", "Tests utilisateurs"],
    highlights: ["Taux d'adoption > 85%", "0 formation formelle requise", "Validé directement en conditions réelles"]
  },

  "sql-data": {
    badge: "Bloc 2 · Analyse de données",
    title: "Extraction SQL Caraoline + Python / Excel",
    level: "Autonome",
    description: `Extraction et traitement des données du logiciel ERP Caraoline via SQL, puis analyse et valorisation en Python et Excel pour affiner les chiffres de production et identifier les écarts.`,
    actions: [
      "Rédaction des requêtes SQL d'extraction sur la base Caraoline",
      "Nettoyage et transformation des données avec Pandas (Python)",
      "Création de tableaux de bord Excel automatisés (Power Query)",
      "Identification des écarts entre prévisionnel et réalisé",
      "Présentation des insights aux responsables de production"
    ],
    stack: ["SQL", "Python", "Pandas", "Excel", "Power Query", "Caraoline ERP"],
    highlights: ["Gain de précision sur les chiffres de prod", "Réduction du temps de reporting", "Données exploitées pour le pilotage"]
  },

  erp: {
    badge: "Bloc 2 · Base de données",
    title: "Requêtage & structuration de la base ERP",
    level: "Autonome",
    description: `Structuration et optimisation des requêtes sur la base de données ERP de l'entreprise pour alimenter les tableaux de bord de reporting. Documentation des schémas de données.`,
    actions: [
      "Cartographie des tables et relations de la base ERP",
      "Création de vues SQL pour simplifier le reporting",
      "Optimisation des requêtes les plus fréquentes",
      "Documentation du modèle de données",
      "Formation de l'équipe aux requêtes de base"
    ],
    stack: ["SQL", "ERP Caraoline", "MySQL", "Excel"],
    schema: `<span class="hl">COMMANDES</span>           <span class="bl">PRODUCTIONS</span>
  id_commande  ──────  id_prod
  client               id_commande
  date_cmd             id_article
  statut               qte_prevue
                       <span class="gr">qte_realisee</span>
                       <span class="yw">ecart</span>  ← calculé`,
    highlights: ["Vues SQL documentées", "Reporting automatisé", "Réduction des erreurs de requêtes"]
  },

  infra: {
    badge: "Bloc 4 · Technologie Internet",
    title: "Maintenance parc info & infrastructure Docker",
    level: "Autonome",
    description: `Gestion quotidienne du parc informatique de l'entreprise, couplée au déploiement et à la maintenance d'une infrastructure Docker et de solutions de gestion des accès.`,
    actions: [
      "Maintenance préventive et corrective du parc (postes, imprimantes, périphériques)",
      "Déploiement de services internes via Docker",
      "Mise en place d'un gestionnaire de mots de passe d'entreprise (BitWarden)",
      "Gestion des droits d'accès et des comptes",
      "Supervision et monitoring des services critiques"
    ],
    stack: ["Docker", "BitWarden", "Linux", "Windows Server", "Monitoring"],
    highlights: ["100% des services critiques containerisés", "Gestionnaire de MDP déployé pour toute l'équipe", "MTTR réduit de moitié"]
  },

  nas: {
    badge: "Bloc 4 · Réseaux",
    title: "Maintenance & amélioration de la cybersécurité réseau",
    level: "Opérateur",
    description: `Maintenance et amélioration continue de la sécurité du réseau local de l'entreprise. Participation aux audits de cybersécurité, organisation de réunions de décision et formulation de propositions concrètes à la direction.`,
    actions: [
      "Maintenance du NAS Synology (utilisateurs, droits, supervision)",
      "Participation aux audits de cybersécurité internes",
      "Organisation de réunions pour arbitrer les actions à mener",
      "Formulation de propositions d'amélioration à la direction",
      "Identification et réduction du shadow IT au sein des équipes",
      "Suivi de la mise en œuvre des décisions retenues"
    ],
    stack: ["Synology", "Audit cyber", "Supervision réseau"],
    highlights: ["Audits réguliers réalisés", "Propositions validées par la direction", "Réduction du shadow IT engagée"]
  },

  wordpress: {
    badge: "Bloc 3 · Communication WEB",
    title: "WordPress, e-commerce & fiches produits TecDoc",
    level: "Opérateur",
    description: `Maintenance du site WordPress de l'entreprise, gestion de la relation avec le prestataire e-commerce, création des formulaires de salons et mise à jour des fiches produits dans TecDoc.`,
    actions: [
      "Maintenance et mises à jour WordPress (plugins, thème, sécurité)",
      "Création et gestion de formulaires pour les salons professionnels",
      "Coordination avec le prestataire pour les évolutions e-commerce",
      "Rédaction et mise à jour des fiches produits TecDoc",
      "Optimisation de la compatibilité des références produits"
    ],
    stack: ["WordPress", "TecDoc", "HTML/CSS", "Elementor", "WooCommerce"],
    highlights: ["Site toujours à jour", "Délai de publication fiches produits divisé par 2", "0 rupture de service sur la période"]
  },

  coordination: {
    badge: "Bloc 3 · Coopération & communication",
    title: "Coordination prestataires & reporting direction",
    level: "Opérateur",
    description: `Interface entre les différents prestataires externes (ERP, e-commerce, IT) et la direction de l'entreprise. Centralisation des informations, suivi des engagements et restitution régulière des avancées sous forme de synthèses claires.`,
    actions: [
      "Point de contact entre les prestataires ERP, e-commerce et IT",
      "Suivi des engagements et relances des intervenants externes",
      "Rédaction de synthèses et comptes-rendus à destination de la direction",
      "Mise en place de réunions de suivi multi-parties prenantes",
      "Remontée des problématiques terrain et proposition de solutions"
    ],
    stack: ["Communication", "Gestion de prestataires", "Suite Office", "Reporting"],
    highlights: ["Interlocuteur unique pour plusieurs prestataires", "Reportings réguliers à la direction", "Réduction des frictions inter-parties"]
  },

  diagnostic: {
    badge: "Bloc 4 · Diagnostic & analyse des processus",
    title: "Diagnostic des frictions de production & révision PCA/PRA",
    level: "Force de proposition",
    description: `Identification des frictions existantes dans le suivi de production et analyse des besoins en matière de continuité et reprise d'activité (PCA/PRA). Travail en cours visant à fiabiliser les processus et renforcer la résilience du système d'information.`,
    actions: [
      "Identification et qualification des frictions dans le suivi de production",
      "Analyse des pratiques existantes et des points de blocage opérationnels",
      "Recensement des besoins en continuité d'activité (PCA) et reprise après sinistre (PRA)",
      "Échanges avec les parties prenantes pour prioriser les axes d'amélioration",
      "Formulation de recommandations à destination de la direction"
    ],
    stack: ["Analyse de processus", "Excel", "Entretiens terrain"],
    highlights: ["Frictions de production identifiées et documentées", "Révision PCA/PRA en cours", "Recommandations remontées à la direction"]
  },

  "digibat-collab": {
    badge: "Bloc 5 · Digibat'Project",
    title: "Stratégie de contenus collaborative — Digibat'Project",
    level: "Opérateur",
    description: `Dans le cadre du Digibat'Project, participation active à une équipe collaborative autour d'un thème commun : alimentation de posts pour les réseaux sociaux, synthèses de conférences et réalisation d'un projet ludique transversal.`,
    actions: [
      "Rédaction et publication de posts pour les réseaux sociaux",
      "Synthèse et restitution de conférences liées au thème",
      "Participation à la réalisation d'un projet collectif ludique",
      "Coordination avec les autres membres de l'équipe projet",
      "Restitution finale devant le groupe"
    ],
    stack: ["Communication digitale", "Travail en équipe", "Réseaux sociaux", "Synthèse"],
    highlights: ["Projet collaboratif multi-profils", "Livrables publiés", "Expérience de co-création"]
  },

  // ── Projets Perso ──────────────────────────────────────

  "llm-local": {
    badge: "Projet personnel · IA",
    title: "LLM en local — Modèles de langage auto-hébergés",
    level: "Passionné",
    description: `Installation et configuration de modèles de langage directement sur des PC personnels via Open Claw, sans cloud, sans abonnement. Objectif : souveraineté des données, expérimentation et performance.`,
    actions: [
      "Installation et configuration d'Open Claw sur plusieurs machines",
      "Téléchargement et test de modèles locaux : Llama 3, Mistral, Phi-3, Gemma",
      "Benchmarks comparatifs selon les usages (code, résumé, conversation)",
      "Configuration du matériel pour optimiser l'inférence (GPU, RAM)",
      "Mise en réseau local pour partager l'accès entre appareils"
    ],
    stack: ["Open Claw", "Llama 3", "Mistral", "Python", "Linux", "NVIDIA CUDA"],
    highlights: ["100% local, 0 data cloud", "Inférence GPU opérationnelle", "Plusieurs modèles testés et comparés"]
  },

  "arr-stack": {
    badge: "Projet personnel · Infra",
    title: "Stack multimédia *arr + recommandation IA",
    level: "Passionné",
    description: `Déploiement d'un serveur multimédia complet auto-hébergé sur Docker, accessible depuis internet, avec une IA (OpenWebUI) capable de recommander et télécharger automatiquement des films ou séries à la demande.`,
    actions: [
      "Mise en place de la stack *arr complète (Radarr, Sonarr, Prowlarr, Bazarr)",
      "Intégration de Jellyfin comme serveur multimédia",
      "Configuration d'un qBittorrent derrière un VPN dans Docker",
      "Exposition sécurisée via Cloudflared Tunnel + Nginx Proxy Manager",
      "Connexion d'OpenWebUI aux APIs de Radarr/Sonarr via des outils personnalisés",
      "Cas d'usage : demander à l'IA 'un film comme X mais plus drôle' → téléchargement automatique"
    ],
    stack: ["Docker", "Radarr", "Sonarr", "Prowlarr", "Jellyfin", "Nginx Proxy Manager", "Cloudflared", "OpenWebUI"],
    schema: `<span class="hl">OpenWebUI</span> ─── (API tools) ──▶ <span class="bl">Radarr / Sonarr</span>
     │                                   │
     │  "Film comme X, plus drôle"       ▼
     │                            <span class="gr">qBittorrent</span> (via VPN)
     │                                   │
     ▼                                   ▼
<span class="yw">LLM local</span>                        <span class="bl">Jellyfin</span>
(Ollama)                          (lecture finale)

Accès internet : <span class="hl">Cloudflared</span> + <span class="gr">Nginx Proxy Manager</span>`,
    highlights: ["Accessible depuis partout (HTTPS)", "Recommandation + téléchargement en 1 prompt", "Stack entièrement conteneurisée"]
  },

  openwebui: {
    badge: "Projet personnel · IA",
    title: "LM Studio & AnythingLLM — Interfaces IA locales",
    level: "Passionné",
    description: `Utilisation de LM Studio pour charger et tester des modèles locaux avec une interface graphique, couplée à AnythingLLM pour créer des espaces de travail IA avec mémoire, documents et personnalisation avancée.`,
    actions: [
      "Configuration de LM Studio pour le chargement et l'exécution de modèles locaux",
      "Création d'espaces de travail dans AnythingLLM avec injection de documents",
      "Connexion de modèles locaux et distants (OpenAI, Anthropic) selon les besoins",
      "Personnalisation des agents et des comportements selon les usages",
      "Tests comparatifs de performance entre modèles sur différentes tâches"
    ],
    stack: ["LM Studio", "AnythingLLM", "Python", "REST API"],
    highlights: ["Modèles locaux et distants centralisés", "Mémoire et documents injectés", "Agents personnalisés par usage"]
  },

  homeassistant: {
    badge: "Projet personnel · Domotique",
    title: "Home Assistant — Domotique auto-hébergée",
    level: "Passionné",
    description: `Mise en place d'un serveur Home Assistant pour centraliser et automatiser l'ensemble des appareils connectés de la maison : lumières, prises, capteurs, alarmes et médias.`,
    actions: [
      "Installation de Home Assistant OS sur machine dédiée",
      "Intégration de +20 appareils (Zigbee, Wi-Fi, Matter)",
      "Création d'automatisations avancées (présence, horaires, conditions météo)",
      "Développement de tableaux de bord personnalisés",
      "Accès externe sécurisé via Cloudflare Tunnel",
      "Intégration avec l'assistant vocal (wake word local)"
    ],
    stack: ["Home Assistant", "Zigbee2MQTT", "MQTT", "Docker", "Cloudflared", "Node-RED"],
    highlights: ["+20 appareils intégrés", "Automatisations sans cloud tiers", "100% local et privé"]
  }
};
