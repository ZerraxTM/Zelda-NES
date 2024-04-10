<p align="center"><img src="https://socialify.git.ci/ZerraxTM/Zelda-NES/image?description=1&amp;font=Jost&amp;forks=1&amp;issues=1&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Circuit%20Board&amp;pulls=1&amp;stargazers=1&amp;theme=Dark" alt="project-image"></p>

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






