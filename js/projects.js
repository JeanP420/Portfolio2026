const PROJECTS = {
  digibat: {
    badge: "Bloc 1 · Gestion de projet",
    title: "DIGIBAT/PROJECT — Suivi de production numérique",
    level: "Autonome",
    description: `Dans le cadre de l'entreprise, j'ai piloté le développement d'un outil numérique de suivi de production venant remplacer entièrement les supports papier. Le projet couvre la saisie des temps, le chiffrage des opérations et la traçabilité des lots.`,
    actions: [
      "Analyse des besoins terrain avec les opérateurs et chefs d'atelier",
      "Conception de l'interface adaptée aux contraintes de l'atelier (UX mobile-first)",
      "Remplacement des feuilles de suivi papier par un formulaire numérique centralisé",
      "Intégration du chiffrage automatique des opérations",
      "Déploiement et formation des équipes"
    ],
    stack: ["Python", "Streamlit", "SQL", "ERP", "Docker"],
    highlights: ["Réduction des erreurs de saisie", "Gain de temps estimé : -40%", "Données exploitables en temps réel"]
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
    badge: "Bloc 3 · Technologie Internet",
    title: "Maintenance parc info & infrastructure Docker",
    level: "Autonome",
    description: `Gestion quotidienne du parc informatique de l'entreprise, couplée au déploiement et à la maintenance d'une infrastructure Docker et de solutions de gestion des accès.`,
    actions: [
      "Maintenance préventive et corrective du parc (postes, imprimantes, périphériques)",
      "Déploiement de services internes via Docker",
      "Mise en place d'un gestionnaire de mots de passe d'entreprise (Vaultwarden)",
      "Gestion des droits d'accès et des comptes",
      "Supervision et monitoring des services critiques"
    ],
    stack: ["Docker", "Vaultwarden", "Linux", "Windows Server", "Monitoring"],
    highlights: ["100% des services critiques containerisés", "Gestionnaire de MDP déployé pour toute l'équipe", "MTTR réduit de moitié"]
  },

  nas: {
    badge: "Bloc 3 · Réseaux",
    title: "Configuration & sécurisation du réseau local (NAS)",
    level: "Autonome",
    description: `Mise en place d'une infrastructure réseau locale sécurisée autour d'un NAS professionnel, incluant segmentation, sauvegardes et accès distant sécurisé.`,
    actions: [
      "Configuration du NAS Synology (RAID, utilisateurs, quotas)",
      "Segmentation réseau (VLAN pour IoT, serveurs, postes)",
      "Mise en place des sauvegardes automatisées (3-2-1)",
      "Configuration du VPN pour accès distant sécurisé",
      "Mise en place des alertes et logs de sécurité"
    ],
    stack: ["Synology", "VPN", "VLAN", "Firewall", "Docker"],
    highlights: ["Zéro incident de sécurité depuis le déploiement", "Sauvegardes automatiques quotidiennes", "Accès distant sécurisé opérationnel"]
  },

  wordpress: {
    badge: "Bloc 4 · Communication WEB",
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

  diagnostic: {
    badge: "Bloc 4 · Diagnostic organisationnel",
    title: "Diagnostic des pertes de temps administratives",
    level: "Force de proposition",
    description: `Réalisation d'un diagnostic complet des frictions organisationnelles en production : identification des tâches chronophages, des doublons de saisie et des points de blocage liés aux outils numériques.`,
    actions: [
      "Observation et chronométrage des tâches administratives en production",
      "Entretiens semi-directifs avec les opérateurs et responsables",
      "Cartographie des flux d'information et identification des ruptures",
      "Quantification des pertes de temps (en heures/semaine/personne)",
      "Proposition de solutions et priorisation par impact/effort"
    ],
    stack: ["Analyse de processus", "Value Stream Mapping", "Excel", "Entretiens terrain"],
    highlights: ["~3h/semaine de pertes identifiées par opérateur", "5 irritants majeurs documentés", "Plan d'action validé par la direction"]
  },

  // ── Projets Perso ──────────────────────────────────────

  "llm-local": {
    badge: "Projet personnel · IA",
    title: "LLM en local — Modèles de langage auto-hébergés",
    level: "Passionné",
    description: `Installation et configuration de modèles de langage larges directement sur des PC personnels, sans cloud, sans abonnement. Objectif : souveraineté des données, expérimentation et performance.`,
    actions: [
      "Installation d'Ollama sur plusieurs machines (Linux, Windows)",
      "Téléchargement et test de modèles locaux : Llama 3, Mistral, Phi-3, Gemma",
      "Benchmarks comparatifs selon les usages (code, résumé, conversation)",
      "Configuration du matériel pour optimiser l'inférence (GPU, RAM)",
      "Mise en réseau local pour partager l'accès entre appareils"
    ],
    stack: ["Ollama", "Llama 3", "Mistral", "Python", "Linux", "NVIDIA CUDA"],
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
    title: "OpenWebUI — Interface IA unifiée",
    level: "Passionné",
    description: `Déploiement et configuration d'OpenWebUI pour centraliser l'accès à tous les modèles (locaux via Ollama et distants via API). Personnalisation des agents, des outils et des workflows.`,
    actions: [
      "Installation d'OpenWebUI sur Docker avec connexion Ollama",
      "Ajout des APIs distantes (OpenAI, Anthropic, Gemini) en parallèle",
      "Création d'agents personnalisés pour des usages spécifiques",
      "Développement d'outils personnalisés (Python) pour intégrer Radarr/Sonarr",
      "Configuration des pipelines et des filtres de contenu",
      "Mise en place du contrôle d'accès multi-utilisateurs"
    ],
    stack: ["OpenWebUI", "Ollama", "Docker", "Python", "REST API", "Nginx"],
    highlights: ["Tous les LLM depuis une seule interface", "Agents personnalisés opérationnels", "Multi-utilisateurs avec droits différenciés"]
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
