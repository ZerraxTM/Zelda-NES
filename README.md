<p align="center"><img src="https://socialify.git.ci/ZerraxTM/Zelda-NES/image?description=1&amp;font=Jost&amp;forks=1&amp;issues=1&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Circuit%20Board&amp;pulls=1&amp;stargazers=1&amp;theme=Dark" alt="project-image"></p>

<p align="center">
  <img src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/96/external-readme-is-a-easy-to-build-a-developer-hub-that-adapts-to-the-user-logo-regular-tal-revivo.png" width="100" />
</p>
<p align="center">
    <h1 align="center">ZELDA-NES</h1>
</p>
<p align="center">
    <em><code>► INSÉRER-TEXTE-ICI</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/ZerraxTM/Zelda-NES?style=flat&color=0080ff" alt="licence">
	<img src="https://img.shields.io/github/last-commit/ZerraxTM/Zelda-NES?style=flat&logo=git&logoColor=white&color=0080ff" alt="dernier-commit">
	<img src="https://img.shields.io/github/languages/top/ZerraxTM/Zelda-NES?style=flat&color=0080ff" alt="langage-principal">
	<img src="https://img.shields.io/github/languages/count/ZerraxTM/Zelda-NES?style=flat&color=0080ff" alt="nombre-langages">
<p>
<p align="center">
		<em>Développé avec les logiciels et outils ci-dessous.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/Mocha-8D6748.svg?style=flat&logo=Mocha&logoColor=white" alt="Mocha">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=flat&logo=ts-node&logoColor=white" alt="tsnode">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Liens Rapides

> - [📂 Structure du Répertoire](#-structure-du-répertoire)
> - [🧩 Modules](#-modules)
> - [🚀 Démarrage Rapide](#-démarrage-rapide)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Exécution de Zelda-NES](#-exécution-de-zelda-nes)
>   - [🧪 Tests](#-tests)



## 📂 Structure du Répertoire

```sh
└── Zelda-NES/
    ├── LICENSE
    ├── README.md
    ├── SECURITY.md
    ├── dist
    │   ├── assets
    │   │   ├── styles.css
    │   │   └── styles.js
    │   ├── fonts
    │   │   └── nintendo-nes-font.ttf
    │   ├── index.html
    │   └── sounds
    │       ├── effect
    │       │   ├── Enemy_Die.wav
    │       │   ├── Enemy_Hit.wav
    │       │   ├── Fanfare.wav
    │       │   ├── Get_Heart.wav
    │       │   ├── Get_Item.wav
    │       │   ├── Link_Die.wav
    │       │   ├── Link_Hurt.wav
    │       │   ├── Low_Health.wav
    │       │   ├── Shield.wav
    │       │   ├── Sword_Shoot.wav
    │       │   └── Sword_Slash.wav
    │       └── music
    │           ├── death_mountain.mp3
    │           ├── dungeon.mp3
    │           ├── ending.mp3
    │           ├── game_over.mp3
    │           ├── intro.mp3
    │           └── overworld.mp3
    ├── install.bat
    ├── localhost.bat
    ├── package.json
    └── src
        ├── main.ts
        └── ts
            ├── Bricks
            │   ├── AnimatedBrick.ts
            │   ├── Brick.ts
            │   └── Bricks.ts
            ├── Components
            │   ├── AssetManager.ts
            │   ├── EnemyManager.ts
            │   ├── EventManager.ts
            │   ├── Hud.ts
            │   ├── Inventory.ts
            │   ├── ItemManager.ts
            │   ├── Panes.ts
            │   ├── Player.ts
            │   ├── ProjectileManager.ts
            │   ├── Sword.ts
            │   └── Viewport.ts
            ├── Enemies
            │   ├── BlueMoblin.ts
            │   ├── BlueOctorok.ts
            │   ├── BlueTektite.ts
            │   ├── Enemy.ts
            │   ├── Moblin.ts
            │   ├── Octorok.ts
            │   ├── SimpleMovingEnemy.ts
            │   └── Tektite.ts
            ├── Game.ts
            ├── Items
            │   ├── Clock.ts
            │   ├── Heart.ts
            │   ├── HeartReceptacle.ts
            │   ├── Item.ts
            │   └── Sword.ts
            ├── Libraries
            │   ├── Boxes.ts
            │   ├── Collisions.ts
            │   ├── Direction.ts
            │   ├── MathPlus.ts
            │   ├── Observers.ts
            │   └── Random.ts
            ├── Map
            │   ├── Cell.ts
            │   ├── Map.ts
            │   ├── Passage.ts
            │   ├── Scene.ts
            │   └── World.ts
            ├── Projectiles
            │   ├── Arrow.ts
            │   ├── Fireball.ts
            │   ├── Projectile.ts
            │   └── Sword.ts
            └── Screens
                ├── AbstractScreen.ts
                ├── GameOverScreen.ts
                ├── LoadingScreen.ts
                ├── SplashScreen.ts
                ├── StoppedScreen.ts
                └── WinScreen.ts
```
---

## 🚀 Démarrage Rapide

### ⚙️ Installation

1. Clonez le dépôt Zelda-NES :

```sh
git clone https://github.com/ZerraxTM/Zelda-NES
```

2. Accédez au répertoire du projet :

```sh
cd Zelda-NES
```

3. Installez les dépendances :

```sh
npm install
```
---
---

### 🤖 Exécution de Zelda-NES

Utilisez la commande suivante pour exécuter Zelda-NES :

```sh
npm run build && node dist/main.js
```

### 🧪 Tests

Pour exécuter les tests, lancez :

```sh
npm test
```

---






