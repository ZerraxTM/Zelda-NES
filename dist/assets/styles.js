var e = Object.defineProperty,
  t = (t, a, s) => (
    ((t, a, s) => {
      a in t
        ? e(t, a, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: s,
          })
        : (t[a] = s)
    })(t, 'symbol' != typeof a ? a + '' : a, s),
    s
  )
!(function () {
  const e = document.createElement('link').relList
  if (!(e && e.supports && e.supports('modulepreload'))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e)
    new MutationObserver((e) => {
      for (const a of e)
        if ('childList' === a.type) {
          for (const e of a.addedNodes)
            'LINK' === e.tagName && 'modulepreload' === e.rel && t(e)
        }
    }).observe(document, {
      childList: true,
      subtree: true,
    })
  }
  function t(e) {
    if (e.ep) {
      return
    }
    e.ep = true
    const t = (function (e) {
      const t = {}
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
        'use-credentials' === e.crossorigin
          ? (t.credentials = 'include')
          : 'anonymous' === e.crossorigin
          ? (t.credentials = 'omit')
          : (t.credentials = 'same-origin'),
        t
      )
    })(e)
    fetch(e.href, t)
  }
})()
var a, s, i, l, n, d, h, r, u, o, g, w, f, c, p, m, x, G, y, b, S, k, v, I, M
class A {
  constructor() {
    t(this, 'currentFrame')
    t(this, 'isFirstFrame')
    this.currentFrame = 0
    this.isFirstFrame = true
  }
  update(e) {
    this.currentFrame += e
  }
}
class C extends A {
  constructor(e) {
    super()
    t(this, 'lastState')
    t(this, 'lastFrameState')
    t(this, 'state')
    t(this, 'nextState')
    this.lastState = null
    this.lastFrameState = null
    this.state = e
    this.nextState = null
  }
  set(e) {
    this.lastState = this.state
    this.state = e
    this.nextState = null
    this.currentFrame = 0
    this.isFirstFrame = true
  }
  setNextState(e) {
    this.nextState = e
  }
  update(e) {
    this.lastFrameState = this.state
    null !== this.nextState
      ? this.set(this.nextState)
      : (this.isFirstFrame = false)
    super.update(e)
  }
  get() {
    return this.state
  }
  getLast() {
    return this.lastState
  }
  getLastFrame() {
    return this.lastFrameState
  }
  is(e) {
    return this.state === e
  }
  isIn(...e) {
    return e.some((e) => this.is(e))
  }
  was(e) {
    return this.lastState === e
  }
  wasIn(...e) {
    return e.some((e) => this.was(e))
  }
  wasLastFrame(e) {
    return this.lastFrameState === e
  }
  wasInLastFrame(...e) {
    return e.some((e) => this.wasLastFrame(e))
  }
}
class B extends A {
  constructor(e, a) {
    super()
    t(this, 'animationStepDuration')
    t(this, 'currentAnimationStep', 1)
    t(this, 'nbAnimationStep')
    this.animationStepDuration = e
    this.nbAnimationStep = a
  }
  update(e) {
    this.currentFrame >= this.animationStepDuration
      ? ((this.currentFrame = 0),
        (this.currentAnimationStep =
          this.currentAnimationStep + 1 > this.nbAnimationStep
            ? 1
            : this.currentAnimationStep + 1),
        (this.isFirstFrame = true))
      : (this.isFirstFrame = false)
    super.update(e)
  }
}
class P {
  constructor(e) {
    t(this, 'Game')
    t(this, '_sprite')
    t(this, 'hasCollisions')
    this.Game = e
    this.hasCollisions = false
  }
  get sprite() {
    return this._sprite
  }
  set sprite(e) {
    this._sprite = e
  }
}
class R extends P {
  constructor(e) {
    super(e)
    t(this, 'sprites', [])
    t(this, 'spritesAnimation')
  }
}
class L {
  constructor(e) {
    t(this, 'Game')
    this.Game = e
  }
  get(e) {
    switch (e) {
      case 'passage':
        return new a.Passage(this.Game)
      case 'default':
        return new a.Default(this.Game)
      case 'default-dungeon':
        return new a.DefaultDungeon(this.Game)
      case 'stairs':
        return new a.Stairs(this.Game)
      case 'tree':
        return new a.Tree(this.Game)
      case 'white-tree':
        return new a.WhiteTree(this.Game)
      case 'grave':
        return new a.Grave(this.Game)
      case 'wall':
        return new a.Wall(this.Game)
      case 'wall-dungeon':
        return new a.WallDungeon(this.Game)
      case 'red-wall':
        return new a.RedWall(this.Game)
      case 'single-wall':
        return new a.SingleWall(this.Game)
      case 'single-red-wall':
        return new a.SingleRedWall(this.Game)
      case 'wall-t':
        return new a.WallTop(this.Game)
      case 'wall-tr':
        return new a.WallTopRight(this.Game)
      case 'wall-tl':
        return new a.WallTopLeft(this.Game)
      case 'wall-br':
        return new a.WallBottomRight(this.Game)
      case 'wall-bl':
        return new a.WallBottomLeft(this.Game)
      case 'white-wall':
        return new a.WhiteWall(this.Game)
      case 'white-wall-t':
        return new a.WhiteWallTop(this.Game)
      case 'white-wall-tr':
        return new a.WhiteWallTopRight(this.Game)
      case 'white-wall-tl':
        return new a.WhiteWallTopLeft(this.Game)
      case 'white-wall-br':
        return new a.WhiteWallBottomRight(this.Game)
      case 'white-wall-bl':
        return new a.WhiteWallBottomLeft(this.Game)
      case 'monument-tr':
        return new a.MonumentTopRight(this.Game)
      case 'monument-tl':
        return new a.MonumentTopLeft(this.Game)
      case 'monument-br':
        return new a.MonumentBottomRight(this.Game)
      case 'monument-bl':
        return new a.MonumentBottomLeft(this.Game)
      case 'fire':
        return new a.Fire(this.Game)
      default:
        throw 'Brick ' + e + ' not found'
    }
  }
}
!(function (e) {
  e.Passage = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/passage.png'
      )
    }
  }
  e.Default = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/default.png'
      )
    }
  }
  e.DefaultDungeon = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/default-dungeon.png'
      )
    }
  }
  e.Stairs = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/stairs.png'
      )
    }
  }
  e.Tree = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/tree.png'
      )
      this.hasCollisions = true
    }
  }
  e.WhiteTree = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/white-tree.png'
      )
      this.hasCollisions = true
    }
  }
  e.Grave = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/grave.png'
      )
      this.hasCollisions = true
    }
  }
  e.Wall = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/wall.png'
      )
      this.hasCollisions = true
    }
  }
  e.WallDungeon = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/wall-dungeon.png'
      )
      this.hasCollisions = true
    }
  }
  e.RedWall = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/red-wall.png'
      )
      this.hasCollisions = true
    }
  }
  e.SingleWall = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/single-wall.png'
      )
      this.hasCollisions = true
    }
  }
  e.SingleRedWall = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/single-red-wall.png'
      )
      this.hasCollisions = true
    }
  }
  e.WallTop = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/wall-top.png'
      )
      this.hasCollisions = true
    }
  }
  e.WallTopRight = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/wall-top-right.png'
      )
      this.hasCollisions = true
    }
  }
  e.WallTopLeft = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/wall-top-left.png'
      )
      this.hasCollisions = true
    }
  }
  e.WallBottomRight = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/wall-bottom-right.png'
      )
      this.hasCollisions = true
    }
  }
  e.WallBottomLeft = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/wall-bottom-left.png'
      )
      this.hasCollisions = true
    }
  }
  e.WhiteWall = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/white-wall.png'
      )
      this.hasCollisions = true
    }
  }
  e.WhiteWallTop = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/white-wall-top.png'
      )
      this.hasCollisions = true
    }
  }
  e.WhiteWallTopRight = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/white-wall-top-right.png'
      )
      this.hasCollisions = true
    }
  }
  e.WhiteWallTopLeft = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/white-wall-top-left.png'
      )
      this.hasCollisions = true
    }
  }
  e.WhiteWallBottomRight = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/white-wall-bottom-right.png'
      )
      this.hasCollisions = true
    }
  }
  e.WhiteWallBottomLeft = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/white-wall-bottom-left.png'
      )
      this.hasCollisions = true
    }
  }
  e.MonumentTopRight = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/monument-top-right.png'
      )
      this.hasCollisions = true
    }
  }
  e.MonumentTopLeft = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/monument-top-left.png'
      )
      this.hasCollisions = true
    }
  }
  e.MonumentBottomRight = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/monument-bottom-right.png'
      )
      this.hasCollisions = true
    }
  }
  e.MonumentBottomLeft = class extends P {
    constructor(e) {
      super(e)
      this.sprite = this.Game.AssetManager.getImage(
        './sprites/png/bricks/monument-bottom-left.png'
      )
      this.hasCollisions = true
    }
  }
  e.Fire = class extends R {
    constructor(e) {
      super(e)
      this.hasCollisions = true
      this.sprites[1] = this.Game.AssetManager.getImage(
        './sprites/png/bricks/fire1.png'
      )
      this.sprites[2] = this.Game.AssetManager.getImage(
        './sprites/png/bricks/fire2.png'
      )
      this.spritesAnimation = new B(10, 2)
    }
    get sprite() {
      let e = this.sprites[this.spritesAnimation.currentAnimationStep]
      return this.spritesAnimation.update(this.Game.dt), e
    }
  }
})(a || (a = {}))
;(function (e) {
  function t(e, t) {
    return (
      (e = Math.ceil(e)),
      (t = Math.floor(t)),
      Math.floor(Math.random() * (t - e + 1)) + e
    )
  }
  e.getIntInclusive = t
  e.getOneInt = function (e) {
    return 1 === t(1, e)
  }
})(s || (s = {}))
;(l = i || (i = {}))[(l.Up = 0)] = 'Up'
l[(l.Right = 1)] = 'Right'
l[(l.Down = 2)] = 'Down'
l[(l.Left = 3)] = 'Left'
;(function (e) {
  e.getRandom = function () {
    switch (s.getIntInclusive(1, 4)) {
      case 1:
        return e.Up
      case 2:
        return e.Right
      case 3:
        return e.Down
      case 4:
      default:
        return e.Left
    }
  }
  e.getOpposite = function (t) {
    switch (t) {
      case e.Up:
        return e.Down
      case e.Down:
        return e.Up
      case e.Left:
        return e.Right
      case e.Right:
      default:
        return e.Left
    }
  }
  e.areOpposite = function (t, a) {
    return (
      (t === e.Up && a === e.Down) ||
      (t === e.Down && a === e.Up) ||
      (t === e.Right && a === e.Left) ||
      (t === e.Left && a === e.Right)
    )
  }
  e.isVertical = function (t) {
    switch (t) {
      case e.Up:
      case e.Down:
        return true
      case e.Left:
      case e.Right:
      default:
        return false
    }
  }
  e.isHorizontal = function (t) {
    switch (t) {
      case e.Up:
      case e.Down:
        return true
      case e.Left:
      case e.Right:
      default:
        return false
    }
  }
})(i || (i = {}))
;(d = n || (n = {})).trunc = function (e, t = 0) {
  return (t = Math.trunc(t)), Math.trunc(e * 10 ** t) / 10 ** t
}
d.round = function (e, t = 0) {
  return (t = Math.trunc(t)), Math.round(e * 10 ** t) / 10 ** t
}
class O {
  constructor() {
    t(this, '_x')
    t(this, '_y')
    t(this, '_width')
    t(this, '_height')
  }
  get width() {
    return this._width
  }
  set width(e) {
    this._width = e
  }
  get height() {
    return this._height
  }
  set height(e) {
    this._height = e
  }
  get x() {
    return this._x
  }
  set x(e) {
    this._x = n.round(e, 7)
  }
  get y() {
    return this._y
  }
  set y(e) {
    this._y = n.round(e, 7)
  }
}
class D extends O {
  constructor() {
    super()
    t(this, '_dx', 0)
    t(this, '_dy', 0)
    t(this, '_direction')
    t(this, '_hitBox')
    this.hitBox = this
  }
  get dx() {
    return this._dx
  }
  set dx(e) {
    this._dx = e
  }
  get dy() {
    return this._dy
  }
  set dy(e) {
    this._dy = e
  }
  get direction() {
    return this._direction
  }
  set direction(e) {
    this._direction = e
  }
  get hitBox() {
    return this._hitBox
  }
  set hitBox(e) {
    this._hitBox = e
  }
}
class W {
  constructor({ box: e, x: a, y: s, width: i, height: l }) {
    t(this, '_Box')
    t(this, '_hitX')
    t(this, '_hitY')
    t(this, '_hitWidth')
    t(this, '_hitHeight')
    this._Box = e
    this._hitX = a
    this._hitY = s
    this._hitWidth = i
    this._hitHeight = l
  }
  get x() {
    return this._Box.x + this._hitX
  }
  set x(e) {
    this._Box.x = e - this._hitX
  }
  get y() {
    return this._Box.y + this._hitY
  }
  set y(e) {
    this._Box.y = e - this._hitY
  }
  get width() {
    return this._hitWidth
  }
  get height() {
    return this._hitHeight
  }
  get dx() {
    return this._Box.dx
  }
  set dx(e) {
    this._Box.dx = e
  }
  get dy() {
    return this._Box.dy
  }
  set dy(e) {
    this._Box.dy = e
  }
  get direction() {
    return this._Box.direction
  }
  set direction(e) {
    this._Box.direction = e
  }
}
class E {
  constructor(e) {
    t(this, 'box')
    t(this, 'halfLeftHitBox')
    t(this, 'halfRightHitBox')
    t(this, 'halfUpHitBox')
    t(this, 'halfDownHitBox')
    this.box = e
    this.halfLeftHitBox = new W({
      box: this.box,
      x: 0,
      y: 0,
      width: this.box.width / 2,
      height: this.box.height,
    })
    this.halfRightHitBox = new W({
      box: this.box,
      x: this.box.width / 2,
      y: 0,
      width: this.box.width / 2,
      height: this.box.height,
    })
    this.halfUpHitBox = new W({
      box: this.box,
      x: 0,
      y: 0,
      width: this.box.width,
      height: this.box.height / 2,
    })
    this.halfDownHitBox = new W({
      box: this.box,
      x: 0,
      y: this.box.height / 2,
      width: this.box.width,
      height: this.box.height / 2,
    })
  }
}
class H extends O {
  constructor() {
    super()
    t(this, 'Game')
    t(this, 'sprite')
    t(this, 'collisionSound')
  }
  collisionCallback() {}
}
class F extends H {
  constructor({ game: e, x: t, y: a }) {
    super()
    this.Game = e
    this.x = t
    this.y = a
    this.width = 32
    this.height = 32
    this.sprite = this.Game.AssetManager.getImage('./sprites/png/clock.png')
    this.collisionSound = this.Game.AssetManager.getSound(
      './sounds/effect/Get_Item.wav'
    )
  }
  collisionCallback() {
    this.Game.Player.getInvicibility(400)
  }
}
!(function (e) {
  function t(e, t) {
    return !(
      e.x >= t.x + t.width ||
      e.x + e.width <= t.x ||
      e.y >= t.y + t.height ||
      e.y + e.height <= t.y
    )
  }
  function a(e, a) {
    let s = {
      x: e.x,
      y: e.y,
      width: e.width,
      height: e.height,
    }
    return (
      e.dx > 0
        ? (s.width += e.dx)
        : e.dx < 0 && ((s.x -= Math.abs(e.dx)), (s.width += Math.abs(e.dx))),
      e.dy > 0
        ? (s.height += e.dy)
        : e.dy < 0 && ((s.y -= Math.abs(e.dy)), (s.height += Math.abs(e.dy))),
      t(s, a)
    )
  }
  function s(e, t) {
    return !(
      e.x + e.dx + e.width <= t.width &&
      e.x + e.dx >= 0 &&
      e.y + e.dy + e.height <= t.height &&
      e.y + e.dy >= 0
    )
  }
  function l(e, t, a) {
    switch (a) {
      case i.Up:
        if (e.y + e.dy < t) {
          return true
        }
        break
      case i.Down:
        if (e.y + e.dy + e.height > t) {
          return true
        }
        break
      case i.Left:
        if (e.x + e.dx < t) {
          return true
        }
        break
      case i.Right:
        if (e.x + e.dx + e.width > t) {
          return true
        }
    }
    return false
  }
  e.simpleBox = t
  e.simpleMovingBox = a
  e.movingBox = function (e, t) {
    return (
      !!a(e, t) &&
      (e.dx > 0 && e.x + e.width <= t.x
        ? (e.dx = t.x - (e.x + e.width))
        : e.dx < 0 && e.x >= t.x + t.width && (e.dx = t.x + t.width - e.x),
      e.dy > 0 && e.y + e.height <= t.y
        ? (e.dy = t.y - (e.y + e.height))
        : e.dy < 0 && e.y >= t.y + t.height && (e.dy = t.y + t.height - e.y),
      true)
    )
  }
  e.movingBoxs = function (e, t) {
    return !(
      e.x + e.dx >= t.x + t.width + e.dx ||
      e.x + e.dx + e.width <= t.x + e.dx ||
      e.y + e.dy >= t.y + t.height + e.dy ||
      e.y + e.dy + e.height <= t.y + e.dy
    )
  }
  e.simpleMovingBoxCanvas = s
  e.movingBoxCanvas = function (e, t) {
    return (
      !!s(e, t) &&
      (e.x + e.dx + e.width > t.width &&
        ((e.dx = 0), (e.x = t.width - e.width)),
      e.x + e.dx < 0 && ((e.dx = 0), (e.x = 0)),
      e.y + e.dy + e.height > t.height &&
        ((e.dy = 0), (e.y = t.height - e.height)),
      e.y + e.dy < 0 && ((e.dy = 0), (e.y = 0)),
      true)
    )
  }
  e.simpleMovingBoxLine = l
  e.movingBoxLine = function (e, t, a) {
    if (l(e, t, a)) {
      switch (a) {
        case i.Up:
          ;(e.y = t + 1), (e.dy = 0)
          break
        case i.Down:
          ;(e.y = t - e.height), (e.dy = 0)
          break
        case i.Left:
          ;(e.x = t + 1), (e.dx = 0)
          break
        case i.Right:
          ;(e.x = t - e.width), (e.dx = 0)
      }
      return true
    }
    return false
  }
  e.passBetweenBoxesHelper = function (t) {
    let a = false,
      s = false,
      l = false,
      n = false
    if (
      (t.Game.Viewport.loopCollision((i) => {
        e.simpleMovingBox(t.hitBox, i) &&
          (e.simpleMovingBox(t.halfHitBoxes.halfLeftHitBox, i) && (a = true),
          e.simpleMovingBox(t.halfHitBoxes.halfRightHitBox, i) && (s = true),
          e.simpleMovingBox(t.halfHitBoxes.halfUpHitBox, i) && (l = true),
          e.simpleMovingBox(t.halfHitBoxes.halfDownHitBox, i) && (n = true))
      }),
      t.direction === i.Up || t.direction === i.Down)
    ) {
      if (a && !s) {
        return (t.dx = t.speed * t.Game.dt), true
      }
      if (!a && s) {
        return (t.dx = -t.speed * t.Game.dt), true
      }
    } else {
      if (t.direction === i.Left || t.direction === i.Right) {
        if (l && !n) {
          return (t.dy = t.speed * t.Game.dt), true
        }
        if (!l && n) {
          return (t.dy = -t.speed * t.Game.dt), true
        }
      }
    }
    return false
  }
})(h || (h = {}))
class V extends H {
  constructor({ game: e, x: t, y: a }) {
    super()
    this.Game = e
    this.x = t
    this.y = a
    this.width = 24
    this.height = 24
    this.sprite = this.Game.AssetManager.getImage(
      './sprites/png/full-heart.png'
    )
    this.collisionSound = this.Game.AssetManager.getSound(
      './sounds/effect/Get_Heart.wav'
    )
  }
  collisionCallback() {
    this.Game.Player.recoverHealth(2)
  }
}
;(u = r || (r = {}))[(u.Moving = 0)] = 'Moving'
u[(u.ChangeDirection = 1)] = 'ChangeDirection'
u[(u.Wait = 2)] = 'Wait'
u[(u.Attack = 3)] = 'Attack'
u[(u.Killed = 4)] = 'Killed'
class U extends D {
  constructor(e) {
    super()
    t(this, 'Game')
    t(this, 'hp')
    t(this, 'speed')
    t(this, 'damage')
    t(this, 'isKilledAnimationFinished')
    t(this, 'hasPlayerCollision')
    t(this, 'hasViewportCollision')
    t(this, 'hasBricksCollisions')
    t(this, 'requirePassBetweenBoxHelper')
    t(this, 'spritesAnimation')
    t(this, 'killedSprites', [])
    t(this, 'invincibleObserver')
    t(this, 'invincibleDuration')
    t(this, 'invincibleAnimation')
    t(this, 'state')
    t(this, 'dieSound')
    t(this, 'hitSound')
    this.Game = e
    this.hasPlayerCollision = true
    this.hasViewportCollision = true
    this.hasBricksCollisions = true
    this.requirePassBetweenBoxHelper = false
    this.isKilledAnimationFinished = false
    this.killedSprites[1] = this.Game.AssetManager.getImage(
      './sprites/png/killed1.png'
    )
    this.killedSprites[2] = this.Game.AssetManager.getImage(
      './sprites/png/killed2.png'
    )
    this.invincibleObserver = new C(false)
    this.invincibleDuration = 25
    this.invincibleAnimation = new B(7, 2)
    this.dieSound = this.Game.AssetManager.getSound(
      './sounds/effect/Enemy_Die.wav'
    )
    this.hitSound = this.Game.AssetManager.getSound(
      './sounds/effect/Enemy_Hit.wav'
    )
  }
  aiThinking() {}
  move() {
    this.y += this.dy
    this.x += this.dx
    this.dx = 0
    this.dy = 0
  }
  draw() {}
  playerCollision() {
    this.Game.Player.takeDamage(this.damage)
  }
  viewportCollision() {}
  bricksCollision() {}
  customCollision() {}
  moveHelper() {
    return false
  }
  takeDamage(e) {
    if (!this.invincibleObserver.is(true) && !this.state.is(4)) {
      if (((this.hp -= e), this.hp <= 0)) {
        return this.dieSound.play(), void this.state.setNextState(4)
      }
      this.getInvicibility()
      this.hitSound.play()
    }
  }
  getInvicibility() {
    this.invincibleObserver.setNextState(true)
  }
  dropItem() {
    return (
      !!(this.Game.Player.hp < this.Game.Player.maxHp && s.getOneInt(3)) &&
      (this.Game.ItemManager.addItem(
        new V({
          game: this.Game,
          x: this.x + this.width / 2 - 12,
          y: this.y + this.height / 2 - 12,
        })
      ),
      true)
    )
  }
}
class _ extends U {
  constructor({ game: e, x: a, y: s }) {
    super(e)
    t(this, 'sprites')
    t(this, 'speedX')
    t(this, 'speedY')
    this.x = a
    this.y = s
    this.width = 64
    this.height = 64
    this.speed = 6
    this.direction = i.Down
    this.damage = 1
    this.hp = 1
    this.hasViewportCollision = false
    this.hasBricksCollisions = false
    this.sprites = []
    this.sprites[1] = this.Game.AssetManager.getImage(
      './sprites/png/tektite1.png'
    )
    this.sprites[2] = this.Game.AssetManager.getImage(
      './sprites/png/tektite2.png'
    )
    this.spritesAnimation = new B(20, 2)
    this.state = new C(r.Wait)
  }
  aiThinking() {
    switch (this.state.get()) {
      case r.Moving:
        this.state.isFirstFrame
          ? ((this.dy = -6),
            (this.dx = (this.dy / 2) * (s.getOneInt(2) ? -1 : 1)))
          : (this.dy = this.dy + 0.1 * this.Game.dt),
          ((this.state.currentFrame > 60 && s.getOneInt(50)) ||
            this.state.currentFrame > 100) &&
            this.state.setNextState(r.Wait)
        break
      case r.Wait:
        ;(this.dx = 0),
          (this.dy = 0),
          ((this.state.currentFrame > 30 && s.getOneInt(50)) ||
            this.state.currentFrame > 60) &&
            this.state.setNextState(r.Moving)
    }
  }
  customCollision() {
    h.movingBoxLine(this.hitBox, 0, i.Up) && (this.dy = this.dy / 2)
    h.movingBoxLine(this.hitBox, this.Game.Viewport.height, i.Down) &&
      this.state.setNextState(r.Wait)
    h.simpleMovingBoxLine(this.hitBox, 0, i.Left) && (this.dx = -this.dx)
    h.simpleMovingBoxLine(this.hitBox, this.Game.Viewport.width, i.Right) &&
      (this.dx = -this.dx)
  }
  move() {
    this.state.is(r.Killed) ||
      ((this.y += this.dy * this.Game.dt), (this.x += this.dx * this.Game.dt))
  }
  draw() {
    let e
    switch (this.state.get()) {
      case r.Moving:
        e = this.sprites[1]
        break
      case r.Wait:
        e = this.sprites[this.spritesAnimation.currentAnimationStep]
    }
    this.Game.Viewport.currentScene.drawImage({
      sprite: e,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    })
  }
}
class T extends _ {
  constructor({ game: e, x: t, y: a }) {
    super({
      game: e,
      x: t,
      y: a,
    })
    this.damage = 2
    this.sprites = []
    this.sprites[1] = this.Game.AssetManager.getImage(
      './sprites/png/blue-tektite1.png'
    )
    this.sprites[2] = this.Game.AssetManager.getImage(
      './sprites/png/blue-tektite2.png'
    )
  }
  dropItem() {
    return (
      !!super.dropItem() ||
      (!(!s.getOneInt(3) || this.Game.Player.invincibleObserver.is(true)) &&
        (this.Game.ItemManager.addItem(
          new F({
            game: this.Game,
            x: this.x + this.width / 2 - 16,
            y: this.y + this.height / 2 - 16,
          })
        ),
        true))
    )
  }
}
;(g = o || (o = {}))[(g.Moving = 0)] = 'Moving'
g[(g.ShieldBlocked = 1)] = 'ShieldBlocked'
class N extends D {
  constructor({ speed: e, direction: a }) {
    switch (
      (super(),
      t(this, 'Game'),
      t(this, 'speed'),
      t(this, 'damage'),
      t(this, 'sprites'),
      t(this, 'hasPlayerCollision'),
      t(this, 'canBeShieldBlocked'),
      t(this, 'hasEnemiesCollision'),
      t(this, 'state'),
      (this.speed = e),
      (this.direction = a),
      this.direction)
    ) {
      case i.Up:
        this.dy = -this.speed
        break
      case i.Right:
        this.dx = this.speed
        break
      case i.Down:
        this.dy = this.speed
        break
      case i.Left:
        this.dx = -this.speed
    }
    this.sprites = []
    this.state = new C(0)
  }
  playerCollisionCallback() {
    this.Game.Player.takeDamage(this.damage)
  }
  enemiesCollisionCallback(e) {
    e.takeDamage(this.damage)
  }
  deleteCallback() {}
}
class z extends N {
  constructor({ game: e, x: t, y: a, speed: s, direction: l, damage: n }) {
    super({
      speed: s,
      direction: l,
    })
    this.Game = e
    this.x = t
    this.y = a
    this.width = i.isVertical(l) ? 20 : 64
    this.height = i.isVertical(l) ? 64 : 20
    this.damage = n
    this.sprites[i.Up] = this.Game.AssetManager.getImage(
      './sprites/png/arrow-up.png'
    )
    this.sprites[i.Down] = this.Game.AssetManager.getImage(
      './sprites/png/arrow-down.png'
    )
    this.sprites[i.Right] = this.Game.AssetManager.getImage(
      './sprites/png/arrow-right.png'
    )
    this.sprites[i.Left] = this.Game.AssetManager.getImage(
      './sprites/png/arrow-left.png'
    )
    this.hasPlayerCollision = true
    this.canBeShieldBlocked = true
    this.hasEnemiesCollision = false
  }
}
class j extends U {
  constructor({ game: e, width: a, height: s }) {
    super(e)
    t(this, 'hasChangedDirection')
    t(this, 'sprites', [])
    t(this, 'halfHitBoxes')
    this.width = a
    this.height = s
    this.state = new C(r.ChangeDirection)
    this.halfHitBoxes = new E(this.hitBox)
    this.requirePassBetweenBoxHelper = true
  }
  aiThinking() {
    switch (this.state.get()) {
      case r.Moving:
        if (this.invincibleObserver.is(false)) {
          switch (this.direction) {
            case i.Down:
              this.dy = this.speed * this.Game.dt
              break
            case i.Up:
              this.dy = -this.speed * this.Game.dt
              break
            case i.Right:
              this.dx = this.speed * this.Game.dt
              break
            case i.Left:
              this.dx = -this.speed * this.Game.dt
          }
        }
        this.state.currentFrame > 50 &&
          (s.getOneInt(25)
            ? this.changeDirection()
            : s.getOneInt(25) && this.state.setNextState(r.Attack))
        break
      case r.ChangeDirection:
        this.state.currentFrame >= 15 &&
          !this.hasChangedDirection &&
          ((this.direction = i.getRandom()), (this.hasChangedDirection = true)),
          this.state.currentFrame > 30 && this.state.setNextState(r.Moving)
        break
      case r.Attack:
        this.state.isFirstFrame && this.attack(),
          this.state.currentFrame > 30 && this.state.setNextState(r.Moving)
    }
  }
  viewportCollision() {
    this.changeDirection()
  }
  bricksCollision() {
    this.changeDirection()
  }
  moveHelper() {
    return h.passBetweenBoxesHelper(this)
  }
  changeDirection() {
    this.state.setNextState(r.ChangeDirection)
    this.hasChangedDirection = false
  }
  draw() {
    this.Game.Viewport.currentScene.drawImage({
      sprite:
        this.sprites[this.direction][
          this.spritesAnimation.currentAnimationStep
        ],
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    })
  }
  attack() {}
}
class K extends j {
  constructor({ game: e, x: t, y: a, speed: s, direction: l }) {
    super({
      game: e,
      width: 64,
      height: 64,
    })
    this.x = t
    this.y = a
    this.width = 64
    this.height = 64
    this.speed = s
    this.direction = l
    this.damage = 1
    this.hp = 1
    this.sprites[i.Up] = []
    this.sprites[i.Up][1] = this.Game.AssetManager.getImage(
      './sprites/png/moblin-up1.png'
    )
    this.sprites[i.Up][2] = this.Game.AssetManager.getImage(
      './sprites/png/moblin-up2.png'
    )
    this.sprites[i.Down] = []
    this.sprites[i.Down][1] = this.Game.AssetManager.getImage(
      './sprites/png/moblin-down1.png'
    )
    this.sprites[i.Down][2] = this.Game.AssetManager.getImage(
      './sprites/png/moblin-down2.png'
    )
    this.sprites[i.Right] = []
    this.sprites[i.Right][1] = this.Game.AssetManager.getImage(
      './sprites/png/moblin-right1.png'
    )
    this.sprites[i.Right][2] = this.Game.AssetManager.getImage(
      './sprites/png/moblin-right2.png'
    )
    this.sprites[i.Left] = []
    this.sprites[i.Left][1] = this.Game.AssetManager.getImage(
      './sprites/png/moblin-left1.png'
    )
    this.sprites[i.Left][2] = this.Game.AssetManager.getImage(
      './sprites/png/moblin-left2.png'
    )
    this.spritesAnimation = new B(25 / s, 2)
  }
  attack() {
    this.Game.ProjectileManager.addProjectile(
      new z({
        game: this.Game,
        x: this.x + this.width / 2 - 12,
        y: this.y + this.height / 2 - 15,
        speed: 8,
        direction: this.direction,
        damage: this.damage,
      })
    )
  }
}
class q extends K {
  constructor({ game: e, x: t, y: a, speed: s, direction: l }) {
    super({
      game: e,
      x: t,
      y: a,
      speed: s,
      direction: l,
    })
    this.damage = 2
    this.hp = 2
    this.sprites[i.Up] = []
    this.sprites[i.Up][1] = this.Game.AssetManager.getImage(
      './sprites/png/blue-moblin-up1.png'
    )
    this.sprites[i.Up][2] = this.Game.AssetManager.getImage(
      './sprites/png/blue-moblin-up2.png'
    )
    this.sprites[i.Down] = []
    this.sprites[i.Down][1] = this.Game.AssetManager.getImage(
      './sprites/png/blue-moblin-down1.png'
    )
    this.sprites[i.Down][2] = this.Game.AssetManager.getImage(
      './sprites/png/blue-moblin-down2.png'
    )
    this.sprites[i.Right] = []
    this.sprites[i.Right][1] = this.Game.AssetManager.getImage(
      './sprites/png/blue-moblin-right1.png'
    )
    this.sprites[i.Right][2] = this.Game.AssetManager.getImage(
      './sprites/png/blue-moblin-right2.png'
    )
    this.sprites[i.Left] = []
    this.sprites[i.Left][1] = this.Game.AssetManager.getImage(
      './sprites/png/blue-moblin-left1.png'
    )
    this.sprites[i.Left][2] = this.Game.AssetManager.getImage(
      './sprites/png/blue-moblin-left2.png'
    )
  }
  dropItem() {
    return (
      !!super.dropItem() ||
      (!(!s.getOneInt(3) || this.Game.Player.invincibleObserver.is(true)) &&
        (this.Game.ItemManager.addItem(
          new F({
            game: this.Game,
            x: this.x + this.width / 2 - 16,
            y: this.y + this.height / 2 - 16,
          })
        ),
        true))
    )
  }
}
class Y extends N {
  constructor({ game: e, x: a, y: s, speed: l, direction: n, damage: d }) {
    super({
      speed: l,
      direction: n,
    })
    t(this, 'sprite')
    this.Game = e
    this.x = a
    this.y = s
    this.width = 24
    this.height = 30
    this.damage = d
    this.sprite = this.Game.AssetManager.getImage('./sprites/png/fireball.png')
    this.sprites[i.Up] = this.sprite
    this.sprites[i.Down] = this.sprite
    this.sprites[i.Right] = this.sprite
    this.sprites[i.Left] = this.sprite
    this.hasPlayerCollision = true
    this.canBeShieldBlocked = true
    this.hasEnemiesCollision = false
  }
}
class X extends j {
  constructor({ game: e, x: t, y: a, speed: s, direction: l }) {
    super({
      game: e,
      width: 64,
      height: 64,
    })
    this.x = t
    this.y = a
    this.speed = s
    this.direction = l
    this.damage = 1
    this.hp = 1
    this.sprites[i.Up] = []
    this.sprites[i.Up][1] = this.Game.AssetManager.getImage(
      './sprites/png/octorok-up1.png'
    )
    this.sprites[i.Up][2] = this.Game.AssetManager.getImage(
      './sprites/png/octorok-up2.png'
    )
    this.sprites[i.Down] = []
    this.sprites[i.Down][1] = this.Game.AssetManager.getImage(
      './sprites/png/octorok-down1.png'
    )
    this.sprites[i.Down][2] = this.Game.AssetManager.getImage(
      './sprites/png/octorok-down2.png'
    )
    this.sprites[i.Right] = []
    this.sprites[i.Right][1] = this.Game.AssetManager.getImage(
      './sprites/png/octorok-right1.png'
    )
    this.sprites[i.Right][2] = this.Game.AssetManager.getImage(
      './sprites/png/octorok-right2.png'
    )
    this.sprites[i.Left] = []
    this.sprites[i.Left][1] = this.Game.AssetManager.getImage(
      './sprites/png/octorok-left1.png'
    )
    this.sprites[i.Left][2] = this.Game.AssetManager.getImage(
      './sprites/png/octorok-left2.png'
    )
    this.spritesAnimation = new B(20 / s, 2)
  }
  attack() {
    this.Game.ProjectileManager.addProjectile(
      new Y({
        game: this.Game,
        x: this.x + this.width / 2 - 12,
        y: this.y + this.height / 2 - 15,
        speed: 8,
        direction: this.direction,
        damage: this.damage,
      })
    )
  }
}
class Q extends X {
  constructor({ game: e, x: t, y: a, speed: s, direction: l }) {
    super({
      game: e,
      x: t,
      y: a,
      speed: s,
      direction: l,
    })
    this.damage = 2
    this.hp = 2
    this.sprites[i.Up] = []
    this.sprites[i.Up][1] = this.Game.AssetManager.getImage(
      './sprites/png/blue-octorok-up1.png'
    )
    this.sprites[i.Up][2] = this.Game.AssetManager.getImage(
      './sprites/png/blue-octorok-up2.png'
    )
    this.sprites[i.Down] = []
    this.sprites[i.Down][1] = this.Game.AssetManager.getImage(
      './sprites/png/blue-octorok-down1.png'
    )
    this.sprites[i.Down][2] = this.Game.AssetManager.getImage(
      './sprites/png/blue-octorok-down2.png'
    )
    this.sprites[i.Right] = []
    this.sprites[i.Right][1] = this.Game.AssetManager.getImage(
      './sprites/png/blue-octorok-right1.png'
    )
    this.sprites[i.Right][2] = this.Game.AssetManager.getImage(
      './sprites/png/blue-octorok-right2.png'
    )
    this.sprites[i.Left] = []
    this.sprites[i.Left][1] = this.Game.AssetManager.getImage(
      './sprites/png/blue-octorok-left1.png'
    )
    this.sprites[i.Left][2] = this.Game.AssetManager.getImage(
      './sprites/png/blue-octorok-left2.png'
    )
  }
  dropItem() {
    return (
      !!super.dropItem() ||
      (!(!s.getOneInt(3) || this.Game.Player.invincibleObserver.is(true)) &&
        (this.Game.ItemManager.addItem(
          new F({
            game: this.Game,
            x: this.x + this.width / 2 - 16,
            y: this.y + this.height / 2 - 16,
          })
        ),
        true))
    )
  }
}
class J extends H {
  constructor({ game: e, x: t, y: a }) {
    super()
    this.Game = e
    this.x = t
    this.y = a
    this.width = 26
    this.height = 26
    this.sprite = this.Game.AssetManager.getImage(
      './sprites/png/heart-receptacle.png'
    )
    this.collisionSound = this.Game.AssetManager.getSound(
      './sounds/effect/Fanfare.wav'
    )
  }
  collisionCallback() {
    this.Game.Player.getImportantItem(this)
    this.Game.Player.maxHp += 2
    this.Game.Player.recoverHealth()
  }
}
class Z extends H {
  constructor({ game: e, x: t, y: a }) {
    super()
    this.Game = e
    this.x = t
    this.y = a
    this.width = 28
    this.height = 64
    this.sprite = this.Game.AssetManager.getImage('./sprites/png/sword-up.png')
    this.collisionSound = this.Game.AssetManager.getSound(
      './sounds/effect/Fanfare.wav'
    )
  }
  collisionCallback() {
    this.Game.Player.getImportantItem(this)
    this.Game.Sword.isEnabled = true
  }
}
class $ extends O {
  constructor({
    game: e,
    scene: a,
    c: s,
    r: i,
    targetWorldIndex: l,
    targetSceneC: n,
    targetSceneR: d,
  }) {
    super()
    t(this, 'Game')
    t(this, 'Scene')
    t(this, 'targetWorldIndex')
    t(this, 'targetSceneC')
    t(this, 'targetSceneR')
    this.Game = e
    this.Scene = a
    this.x = s * this.Scene.cellSize
    this.y = i * this.Scene.cellSize
    this.width = this.Scene.cellSize
    this.height = this.Scene.cellSize
    this.targetWorldIndex = l
    this.targetSceneC = n
    this.targetSceneR = d
  }
}
class ee extends O {
  constructor({ x: e, y: a, size: s, brick: i }) {
    super()
    t(this, 'brick')
    this.x = e
    this.y = a
    this.width = s
    this.height = s
    this.brick = i
  }
}
class te {
  constructor({
    game: e,
    world: a,
    c: s,
    r: i,
    music: l,
    defaultBrick: n,
    backgroundColor: d,
  }) {
    t(this, 'Game')
    t(this, 'World')
    t(this, 'cells', [])
    t(this, 'x')
    t(this, 'y')
    t(this, 'c')
    t(this, 'r')
    t(this, 'nbRow')
    t(this, 'nbCol')
    t(this, 'cellSize')
    t(this, 'enemies')
    t(this, 'passages')
    t(this, 'permanentItems')
    t(this, 'music')
    t(this, 'defaultBrick')
    t(this, 'defaultWallBrick')
    t(this, 'backgroundColor')
    this.Game = e
    this.World = a
    this.nbRow = 11
    this.nbCol = 16
    this.cellSize = 64
    this.enemies = []
    this.passages = []
    this.permanentItems = []
    this.x = 0
    this.y = 0
    this.c = s
    this.r = i
    this.music = l
    this.backgroundColor = d
    for (let t = 0; t < this.nbCol; t++) {
      this.cells[t] = []
      for (let e = 0; e < this.nbRow; e++) {
        this.cells[t][e] = new ee({
          x: this.cellSize * t,
          y: this.cellSize * e,
          size: this.cellSize,
          brick: n,
        })
      }
    }
  }
  get width() {
    return this.cellSize * this.nbCol
  }
  get height() {
    return this.cellSize * this.nbRow
  }
  get hasEnemies() {
    return this.enemies.length > 0
  }
  get hasPermanentItems() {
    return this.permanentItems.length > 0
  }
  getCell(e, t) {
    return this.cells[e][t]
  }
  loadBricks(e) {
    e.forEach((e, t) => {
      e.forEach((e, a) => {
        this.cells[a][t].brick = this.Game.BrickCollection.get(e)
      })
    })
  }
  drawImage({ sprite: e, x: t, y: a, width: s, height: i }) {
    this.Game.Viewport.drawImage({
      sprite: e,
      x: t + this.x,
      y: a + this.y,
      width: s,
      height: i,
    })
  }
  fillRect({ x: e, y: t, width: a, height: s, color: i }) {
    this.Game.Viewport.fillRect({
      x: e + this.x,
      y: t + this.y,
      width: a,
      height: s,
      color: i,
    })
  }
  upperEdgeCollision() {
    this.Game.Viewport.slideScene(i.Up)
  }
  rightEdgeCollision() {
    this.Game.Viewport.slideScene(i.Right)
  }
  bottomEdgeCollision() {
    this.Game.Viewport.slideScene(i.Down)
  }
  leftEdgeCollision() {
    this.Game.Viewport.slideScene(i.Left)
  }
}
class ae {
  constructor({
    game: e,
    nbCol: a,
    nbRow: s,
    defaultMusic: i,
    defaultBrick: l,
    defaultBackgroundColor: n,
  }) {
    t(this, 'Game')
    t(this, 'scenes', [])
    t(this, 'nbCol')
    t(this, 'nbRow')
    this.Game = e
    this.nbCol = a
    this.nbRow = s
    for (let t = 0; t < this.nbCol; t++) {
      this.scenes[t] = []
      for (let e = 0; e < this.nbRow; e++) {
        this.scenes[t][e] = new te({
          game: this.Game,
          world: this,
          c: t,
          r: e,
          music: i,
          defaultBrick: l,
          backgroundColor: n,
        })
      }
    }
  }
  loopScenes(e) {
    this.scenes.forEach((t) => {
      t.forEach((t) => {
        e(t)
      })
    })
  }
}
class se {
  constructor(e) {
    t(this, 'Game')
    t(this, 'worlds')
    t(this, 'spawnWorldIndex')
    t(this, 'spawnSceneColl')
    t(this, 'spawnSceneRow')
    t(this, 'spawnCellColl')
    t(this, 'spawnCellRow')
    this.Game = e
    this.spawnWorldIndex = 0
    this.spawnSceneColl = 1
    this.spawnSceneRow = 2
    this.spawnCellColl = 7
    this.spawnCellRow = 5.5
    this.worlds = []
    this.worlds[0] = new ae({
      game: this.Game,
      nbCol: 3,
      nbRow: 3,
      defaultMusic: this.Game.AssetManager.getSound(
        './sounds/music/overworld.mp3',
        true
      ),
      defaultBrick: this.Game.BrickCollection.get('default'),
      defaultBackgroundColor: '#ffd4aa',
    })
    this.worlds[0].scenes[0][0].loadBricks([
      [
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
      ],
      [
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
      ],
      [
        'white-wall',
        'white-wall-br',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
      ],
      [
        'white-wall',
        'default',
        'default',
        'grave',
        'default',
        'default',
        'grave',
        'default',
        'default',
        'grave',
        'default',
        'default',
        'grave',
        'default',
        'default',
        'default',
      ],
      [
        'white-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
      ],
      [
        'white-wall',
        'default',
        'default',
        'grave',
        'default',
        'default',
        'grave',
        'default',
        'default',
        'grave',
        'default',
        'default',
        'grave',
        'default',
        'default',
        'default',
      ],
      [
        'white-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
      ],
      [
        'white-wall',
        'default',
        'default',
        'grave',
        'default',
        'default',
        'grave',
        'default',
        'default',
        'default',
        'default',
        'default',
        'grave',
        'default',
        'default',
        'default',
      ],
      [
        'white-wall',
        'white-wall-tr',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
      ],
      [
        'white-wall',
        'white-wall',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'stairs',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
      ],
      [
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'stairs',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
      ],
    ])
    this.worlds[0].scenes[0][0].backgroundColor = '#747474'
    this.worlds[0].scenes[0][0].music = this.Game.AssetManager.getSound(
      './sounds/music/death_mountain.mp3',
      true
    )
    this.worlds[0].scenes[0][0].enemies = [
      new Q({
        game: this.Game,
        x: 128,
        y: 128,
        speed: 4,
        direction: s.getOneInt(2) ? i.Right : i.Down,
      }),
      new Q({
        game: this.Game,
        x: 320,
        y: 320,
        speed: 4,
        direction: s.getOneInt(2) ? i.Up : i.Down,
      }),
      new Q({
        game: this.Game,
        x: 832,
        y: 192,
        speed: 4,
        direction: s.getOneInt(2) ? i.Up : i.Down,
      }),
    ]
    this.worlds[0].scenes[1][0].loadBricks([
      [
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
      ],
      [
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
      ],
      [
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
      ],
      [
        'default',
        'default',
        'default',
        'white-tree',
        'default',
        'default',
        'white-tree',
        'default',
        'default',
        'white-tree',
        'default',
        'default',
        'white-tree',
        'default',
        'default',
        'default',
      ],
      [
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
      ],
      [
        'default',
        'default',
        'default',
        'white-tree',
        'default',
        'default',
        'white-tree',
        'default',
        'default',
        'white-tree',
        'default',
        'default',
        'white-tree',
        'default',
        'default',
        'default',
      ],
      [
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
      ],
      [
        'default',
        'default',
        'default',
        'white-tree',
        'default',
        'default',
        'white-tree',
        'default',
        'default',
        'white-tree',
        'default',
        'default',
        'white-tree',
        'default',
        'default',
        'default',
      ],
      [
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
      ],
      [
        'white-wall',
        'white-wall',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
      ],
      [
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
      ],
    ])
    this.worlds[0].scenes[1][0].backgroundColor = '#747474'
    this.worlds[0].scenes[1][0].music = this.Game.AssetManager.getSound(
      './sounds/music/death_mountain.mp3',
      true
    )
    this.worlds[0].scenes[1][0].enemies = [
      new q({
        game: this.Game,
        x: 320,
        y: 512,
        speed: 4,
        direction: i.Up,
      }),
      new q({
        game: this.Game,
        x: 512,
        y: 256,
        speed: 4,
        direction: s.getOneInt(2) ? i.Right : i.Left,
      }),
      new q({
        game: this.Game,
        x: 640,
        y: 128,
        speed: 4,
        direction: i.Down,
      }),
    ]
    this.worlds[0].scenes[2][0].loadBricks([
      [
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
      ],
      [
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'passage',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
      ],
      [
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'white-wall-bl',
        'white-wall',
        'white-wall',
      ],
      [
        'default',
        'default',
        'default',
        'monument-tl',
        'monument-tr',
        'default',
        'default',
        'white-tree',
        'default',
        'default',
        'monument-tl',
        'monument-tr',
        'default',
        'default',
        'white-wall',
        'white-wall',
      ],
      [
        'default',
        'default',
        'default',
        'monument-bl',
        'monument-br',
        'default',
        'default',
        'default',
        'default',
        'default',
        'monument-bl',
        'monument-br',
        'default',
        'default',
        'white-wall',
        'white-wall',
      ],
      [
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'white-wall',
        'white-wall',
      ],
      [
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'grave',
        'default',
        'grave',
        'default',
        'default',
        'default',
        'default',
        'default',
        'white-wall',
        'white-wall',
      ],
      [
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'white-wall',
        'white-wall',
      ],
      [
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'white-wall-tl',
        'white-wall',
        'white-wall',
      ],
      [
        'white-wall',
        'white-wall',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall-t',
        'white-wall',
        'white-wall',
        'white-wall',
      ],
      [
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
        'white-wall',
      ],
    ])
    this.worlds[0].scenes[2][0].backgroundColor = '#747474'
    this.worlds[0].scenes[2][0].music = this.Game.AssetManager.getSound(
      './sounds/music/death_mountain.mp3',
      true
    )
    this.worlds[0].scenes[2][0].passages = [
      new $({
        game: this.Game,
        scene: this.worlds[0].scenes[2][0],
        c: 7,
        r: 1,
        targetWorldIndex: 2,
        targetSceneC: 1,
        targetSceneR: 1,
      }),
    ]
    this.worlds[0].scenes[2][0].enemies = [
      new Q({
        game: this.Game,
        x: 320,
        y: 256,
        speed: 4,
        direction: i.Down,
      }),
      new Q({
        game: this.Game,
        x: 576,
        y: 384,
        speed: 4,
        direction: i.Right,
      }),
      new Q({
        game: this.Game,
        x: 768,
        y: 192,
        speed: 4,
        direction: i.Down,
      }),
      new T({
        game: this.Game,
        x: 448,
        y: 448,
      }),
    ]
    this.worlds[0].scenes[0][1].loadBricks([
      [
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'stairs',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
      ],
      [
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'stairs',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
      ],
      [
        'wall',
        'wall-br',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'wall-bl',
        'wall',
      ],
      [
        'wall',
        'default',
        'default',
        'single-red-wall',
        'single-red-wall',
        'single-red-wall',
        'single-red-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'wall-bl',
      ],
      [
        'wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'single-red-wall',
        'single-red-wall',
        'single-red-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
      ],
      [
        'wall',
        'default',
        'default',
        'single-red-wall',
        'single-red-wall',
        'single-red-wall',
        'single-red-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
      ],
      [
        'wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'single-red-wall',
        'single-red-wall',
        'single-red-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
      ],
      [
        'wall',
        'default',
        'default',
        'single-red-wall',
        'single-red-wall',
        'single-red-wall',
        'single-red-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'wall-tl',
      ],
      [
        'wall',
        'wall-tr',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'wall-tl',
        'wall',
      ],
      [
        'wall',
        'wall',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-tr',
        'default',
        'default',
        'wall-tl',
        'wall',
        'wall',
      ],
      [
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'default',
        'default',
        'wall',
        'wall',
        'wall',
      ],
    ])
    this.worlds[0].scenes[0][1].enemies = [
      new X({
        game: this.Game,
        x: 384,
        y: 256,
        speed: 3,
        direction: s.getOneInt(2) ? i.Right : i.Left,
      }),
      new X({
        game: this.Game,
        x: 256,
        y: 384,
        speed: 3,
        direction: s.getOneInt(2) ? i.Right : i.Left,
      }),
      new X({
        game: this.Game,
        x: 448,
        y: 128,
        speed: 3,
        direction: s.getOneInt(2) ? i.Up : i.Down,
      }),
      new X({
        game: this.Game,
        x: 832,
        y: 128,
        speed: 3,
        direction: i.Down,
      }),
    ]
    this.worlds[0].scenes[1][1].loadBricks([
      [
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
      ],
      [
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
      ],
      [
        'wall',
        'wall-br',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'wall-bl',
        'wall-br',
        'default',
        'default',
        'default',
        'default',
        'wall-bl',
        'wall',
      ],
      [
        'wall-br',
        'default',
        'default',
        'single-wall',
        'default',
        'single-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'single-wall',
        'default',
        'default',
        'wall-bl',
      ],
      [
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
      ],
      [
        'default',
        'default',
        'default',
        'single-wall',
        'default',
        'single-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'single-wall',
        'default',
        'default',
        'default',
      ],
      [
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
      ],
      [
        'wall-tr',
        'default',
        'default',
        'single-wall',
        'default',
        'single-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'single-wall',
        'default',
        'default',
        'wall-tl',
      ],
      [
        'wall',
        'wall-tr',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'wall-tl',
        'wall-tr',
        'default',
        'default',
        'default',
        'default',
        'wall-tl',
        'wall',
      ],
      [
        'wall',
        'wall',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'default',
        'default',
        'wall',
        'wall',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall',
        'wall',
        'wall',
      ],
      [
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'default',
        'default',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
      ],
    ])
    this.worlds[0].scenes[1][1].enemies = [
      new X({
        game: this.Game,
        x: 256,
        y: 320,
        speed: 3,
        direction: s.getOneInt(2) ? i.Up : i.Down,
      }),
      new X({
        game: this.Game,
        x: 640,
        y: 192,
        speed: 3,
        direction: s.getOneInt(2) ? i.Up : i.Down,
      }),
      new X({
        game: this.Game,
        x: 832,
        y: 448,
        speed: 3,
        direction: s.getOneInt(2) ? i.Up : i.Down,
      }),
      new X({
        game: this.Game,
        x: 768,
        y: 384,
        speed: 3,
        direction: s.getOneInt(2) ? i.Right : i.Left,
      }),
    ]
    this.worlds[0].scenes[2][1].loadBricks([
      [
        'wall',
        'wall',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
      ],
      [
        'wall',
        'wall',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
      ],
      [
        'wall',
        'wall-br',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'tree',
      ],
      [
        'wall-br',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'tree',
        'default',
        'default',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
      ],
      [
        'default',
        'default',
        'tree',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'tree',
      ],
      [
        'default',
        'default',
        'default',
        'default',
        'tree',
        'default',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
      ],
      [
        'default',
        'default',
        'tree',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'tree',
      ],
      [
        'wall-tr',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'tree',
        'default',
        'default',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
      ],
      [
        'wall',
        'wall-tr',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'tree',
      ],
      [
        'wall',
        'wall',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
      ],
      [
        'wall',
        'wall',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
      ],
    ])
    this.worlds[0].scenes[2][1].enemies = [
      new X({
        game: this.Game,
        x: 192,
        y: 256,
        speed: 3,
        direction: s.getOneInt(2) ? i.Right : i.Left,
      }),
      new X({
        game: this.Game,
        x: 320,
        y: 384,
        speed: 3,
        direction: s.getOneInt(2) ? i.Right : i.Left,
      }),
      new X({
        game: this.Game,
        x: 640,
        y: 320,
        speed: 3,
        direction: s.getOneInt(2) ? i.Up : i.Down,
      }),
      new X({
        game: this.Game,
        x: 896,
        y: 128,
        speed: 3,
        direction: s.getOneInt(2) ? i.Left : i.Down,
      }),
    ]
    this.worlds[0].scenes[0][2].loadBricks([
      [
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'default',
        'default',
        'wall',
        'wall',
        'wall',
      ],
      [
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall-br',
        'default',
        'default',
        'wall',
        'wall',
        'wall',
      ],
      [
        'wall',
        'wall-br',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'wall',
        'wall',
        'wall',
      ],
      [
        'wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'single-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'wall-bl',
        'wall',
        'wall',
      ],
      [
        'wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'single-wall',
        'default',
        'default',
        'default',
        'default',
        'wall-bl',
        'wall',
      ],
      [
        'wall',
        'default',
        'default',
        'default',
        'single-wall',
        'default',
        'default',
        'single-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
      ],
      [
        'wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'single-wall',
        'default',
        'default',
        'default',
        'default',
        'wall-tl',
        'wall-t',
      ],
      [
        'wall',
        'wall-tr',
        'default',
        'default',
        'default',
        'default',
        'default',
        'single-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'wall-tl',
        'wall',
        'wall',
      ],
      [
        'wall',
        'wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'wall',
        'wall',
        'wall',
      ],
      [
        'wall',
        'wall',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall',
        'wall',
        'wall',
      ],
      [
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
      ],
    ])
    this.worlds[0].scenes[0][2].enemies = [
      new _({
        game: this.Game,
        x: 192,
        y: 256,
      }),
      new _({
        game: this.Game,
        x: 320,
        y: 448,
      }),
      new _({
        game: this.Game,
        x: 640,
        y: 320,
      }),
    ]
    this.worlds[0].scenes[1][2].loadBricks([
      [
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'default',
        'default',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
      ],
      [
        'wall',
        'wall',
        'wall',
        'passage',
        'wall',
        'wall-br',
        'default',
        'default',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
      ],
      [
        'wall',
        'wall',
        'wall-br',
        'default',
        'default',
        'default',
        'default',
        'default',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
      ],
      [
        'wall',
        'wall-br',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'wall-bl',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
      ],
      [
        'wall-br',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'wall-bl',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
      ],
      [
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
      ],
      [
        'wall-t',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'wall-tl',
        'wall-t',
      ],
      [
        'wall',
        'wall-tr',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'wall',
        'wall',
      ],
      [
        'wall',
        'wall',
        'wall-tr',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'wall-tl',
        'wall',
        'wall',
      ],
      [
        'wall',
        'wall',
        'wall',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall-t',
        'wall',
        'wall',
        'wall',
      ],
      [
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
        'wall',
      ],
    ])
    this.worlds[0].scenes[1][2].passages = [
      new $({
        game: this.Game,
        scene: this.worlds[0].scenes[1][2],
        c: 3,
        r: 1,
        targetWorldIndex: 1,
        targetSceneC: 0,
        targetSceneR: 0,
      }),
    ]
    this.worlds[0].scenes[2][2].loadBricks([
      [
        'wall',
        'wall',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
      ],
      [
        'wall',
        'wall',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
      ],
      [
        'wall',
        'wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'tree',
      ],
      [
        'wall',
        'wall-br',
        'default',
        'default',
        'default',
        'default',
        'tree',
        'default',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
      ],
      [
        'wall-br',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'tree',
      ],
      [
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'tree',
        'default',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
      ],
      [
        'wall-t',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'tree',
      ],
      [
        'wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'tree',
        'default',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
        'default',
        'tree',
      ],
      [
        'wall',
        'wall-tr',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'tree',
      ],
      [
        'wall',
        'wall',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
      ],
      [
        'wall',
        'wall',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
        'tree',
      ],
    ])
    this.worlds[0].scenes[2][2].enemies = [
      new K({
        game: this.Game,
        x: 192,
        y: 320,
        speed: 3,
        direction: s.getOneInt(2) ? i.Up : i.Down,
      }),
      new K({
        game: this.Game,
        x: 320,
        y: 448,
        speed: 3,
        direction: s.getOneInt(2) ? i.Up : i.Down,
      }),
      new K({
        game: this.Game,
        x: 640,
        y: 320,
        speed: 3,
        direction: s.getOneInt(2) ? i.Up : i.Down,
      }),
      new K({
        game: this.Game,
        x: 768,
        y: 448,
        speed: 3,
        direction: s.getOneInt(2) ? i.Up : i.Down,
      }),
    ]
    this.worlds[1] = new ae({
      game: this.Game,
      nbCol: 1,
      nbRow: 1,
      defaultMusic: this.Game.AssetManager.getSound(
        './sounds/music/death_mountain.mp3',
        true
      ),
      defaultBrick: this.Game.BrickCollection.get('default'),
      defaultBackgroundColor: '#0f0e0b',
    })
    this.worlds[1].scenes[0][0].loadBricks([
      [
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
      ],
      [
        'red-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'red-wall',
      ],
      [
        'red-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'red-wall',
      ],
      [
        'red-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'red-wall',
      ],
      [
        'red-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'red-wall',
      ],
      [
        'red-wall',
        'default',
        'default',
        'fire',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'fire',
        'default',
        'default',
        'red-wall',
      ],
      [
        'red-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'red-wall',
      ],
      [
        'red-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'red-wall',
      ],
      [
        'red-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'red-wall',
      ],
      [
        'red-wall',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'default',
        'red-wall',
      ],
      [
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
        'default',
        'default',
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
        'red-wall',
      ],
    ])
    this.worlds[1].scenes[0][0].permanentItems = [
      new Z({
        game: this.Game,
        x: 498,
        y: 320,
      }),
    ]
    this.worlds[1].scenes[0][0].bottomEdgeCollision = function () {
      this.Game.Viewport.changeWorld(false, 0, 1, 2, 3, 1)
    }
    this.worlds[2] = new ae({
      game: this.Game,
      nbCol: 2,
      nbRow: 2,
      defaultMusic: this.Game.AssetManager.getSound(
        './sounds/music/dungeon.mp3',
        true
      ),
      defaultBrick: this.Game.BrickCollection.get('default-dungeon'),
      defaultBackgroundColor: '#078382',
    })
    this.worlds[2].scenes[0][0].loadBricks([
      [
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
      ],
    ])
    this.worlds[2].scenes[0][0].enemies = [
      new Q({
        game: this.Game,
        x: 128,
        y: 128,
        speed: 4,
        direction: s.getOneInt(2) ? i.Right : i.Down,
      }),
      new Q({
        game: this.Game,
        x: 320,
        y: 320,
        speed: 4,
        direction: s.getOneInt(2) ? i.Up : i.Down,
      }),
      new Q({
        game: this.Game,
        x: 832,
        y: 192,
        speed: 4,
        direction: s.getOneInt(2) ? i.Up : i.Down,
      }),
      new Q({
        game: this.Game,
        x: 512,
        y: 384,
        speed: 4,
        direction: s.getOneInt(2) ? i.Up : i.Down,
      }),
    ]
    this.worlds[2].scenes[1][0].loadBricks([
      [
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
      ],
    ])
    this.worlds[2].scenes[1][0].permanentItems = [
      new J({
        game: this.Game,
        x: 499,
        y: 320,
      }),
    ]
    this.worlds[2].scenes[0][1].loadBricks([
      [
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
      ],
    ])
    this.worlds[2].scenes[0][1].enemies = [
      new T({
        game: this.Game,
        x: 128,
        y: 128,
      }),
      new T({
        game: this.Game,
        x: 320,
        y: 320,
      }),
      new T({
        game: this.Game,
        x: 832,
        y: 192,
      }),
      new T({
        game: this.Game,
        x: 512,
        y: 384,
      }),
    ]
    this.worlds[2].scenes[1][1].loadBricks([
      [
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
      ],
      [
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'default-dungeon',
        'default-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
        'wall-dungeon',
      ],
    ])
    this.worlds[2].scenes[1][1].bottomEdgeCollision = function () {
      this.Game.Viewport.changeWorld(false, 0, 2, 0, 7, 1)
    }
    this.worlds[2].scenes[1][1].enemies = [
      new q({
        game: this.Game,
        x: 128,
        y: 128,
        speed: 4,
        direction: s.getOneInt(2) ? i.Right : i.Down,
      }),
      new q({
        game: this.Game,
        x: 320,
        y: 320,
        speed: 4,
        direction: s.getOneInt(2) ? i.Up : i.Down,
      }),
      new q({
        game: this.Game,
        x: 832,
        y: 192,
        speed: 4,
        direction: s.getOneInt(2) ? i.Up : i.Down,
      }),
    ]
  }
  getSpawnWorld() {
    return this.worlds[this.spawnWorldIndex]
  }
  getSpawnScene() {
    return this.worlds[this.spawnWorldIndex].scenes[this.spawnSceneColl][
      this.spawnSceneRow
    ]
  }
  loopWorlds(e) {
    this.worlds.forEach((t) => {
      e(t)
    })
  }
}
class ie {
  constructor(e) {
    t(this, 'Game')
    t(this, 'soundsToLoad', [
      './sounds/music/intro.mp3',
      './sounds/music/game_over.mp3',
      './sounds/music/ending.mp3',
      './sounds/music/overworld.mp3',
      './sounds/music/death_mountain.mp3',
      './sounds/music/dungeon.mp3',
      './sounds/effect/Enemy_Die.wav',
      './sounds/effect/Enemy_Hit.wav',
      './sounds/effect/Fanfare.wav',
      './sounds/effect/Get_Heart.wav',
      './sounds/effect/Get_Item.wav',
      './sounds/effect/Link_Die.wav',
      './sounds/effect/Link_Hurt.wav',
      './sounds/effect/Low_Health.wav',
      './sounds/effect/Shield.wav',
      './sounds/effect/Sword_Shoot.wav',
      './sounds/effect/Sword_Slash.wav',
    ])
    t(this, 'imagesToLoad', [
      './sprites/png/link-up1.png',
      './sprites/png/link-up2.png',
      './sprites/png/link-up-attack.png',
      './sprites/png/link-right1.png',
      './sprites/png/link-right2.png',
      './sprites/png/link-right-attack.png',
      './sprites/png/link-down1.png',
      './sprites/png/link-down2.png',
      './sprites/png/link-down-attack.png',
      './sprites/png/link-left1.png',
      './sprites/png/link-left2.png',
      './sprites/png/link-left-attack.png',
      './sprites/png/link-win.png',
      './sprites/png/sword-down.png',
      './sprites/png/sword-left.png',
      './sprites/png/sword-right.png',
      './sprites/png/sword-up.png',
      './sprites/png/arrow-down.png',
      './sprites/png/arrow-left.png',
      './sprites/png/arrow-right.png',
      './sprites/png/arrow-up.png',
      './sprites/png/blue-moblin-up1.png',
      './sprites/png/blue-moblin-up2.png',
      './sprites/png/blue-moblin-right1.png',
      './sprites/png/blue-moblin-right2.png',
      './sprites/png/blue-moblin-down1.png',
      './sprites/png/blue-moblin-down2.png',
      './sprites/png/blue-moblin-left1.png',
      './sprites/png/blue-moblin-left2.png',
      './sprites/png/moblin-up1.png',
      './sprites/png/moblin-up2.png',
      './sprites/png/moblin-right1.png',
      './sprites/png/moblin-right2.png',
      './sprites/png/moblin-down1.png',
      './sprites/png/moblin-down2.png',
      './sprites/png/moblin-left1.png',
      './sprites/png/moblin-left2.png',
      './sprites/png/blue-octorok-up1.png',
      './sprites/png/blue-octorok-up2.png',
      './sprites/png/blue-octorok-right1.png',
      './sprites/png/blue-octorok-right2.png',
      './sprites/png/blue-octorok-down1.png',
      './sprites/png/blue-octorok-down2.png',
      './sprites/png/blue-octorok-left1.png',
      './sprites/png/blue-octorok-left2.png',
      './sprites/png/octorok-up1.png',
      './sprites/png/octorok-up2.png',
      './sprites/png/octorok-right1.png',
      './sprites/png/octorok-right2.png',
      './sprites/png/octorok-down1.png',
      './sprites/png/octorok-down2.png',
      './sprites/png/octorok-left1.png',
      './sprites/png/octorok-left2.png',
      './sprites/png/blue-tektite1.png',
      './sprites/png/blue-tektite2.png',
      './sprites/png/tektite1.png',
      './sprites/png/tektite2.png',
      './sprites/png/killed1.png',
      './sprites/png/killed2.png',
      './sprites/png/clock.png',
      './sprites/png/fireball.png',
      './sprites/png/empty-heart.png',
      './sprites/png/full-heart.png',
      './sprites/png/half-heart.png',
      './sprites/png/heart-receptacle.png',
      './sprites/png/bricks/default.png',
      './sprites/png/bricks/default-dungeon.png',
      './sprites/png/bricks/fire1.png',
      './sprites/png/bricks/fire2.png',
      './sprites/png/bricks/grave.png',
      './sprites/png/bricks/monument-bottom-left.png',
      './sprites/png/bricks/monument-bottom-right.png',
      './sprites/png/bricks/monument-top-left.png',
      './sprites/png/bricks/monument-top-right.png',
      './sprites/png/bricks/passage.png',
      './sprites/png/bricks/red-wall.png',
      './sprites/png/bricks/single-red-wall.png',
      './sprites/png/bricks/single-wall.png',
      './sprites/png/bricks/stairs.png',
      './sprites/png/bricks/tree.png',
      './sprites/png/bricks/wall.png',
      './sprites/png/bricks/wall-bottom-left.png',
      './sprites/png/bricks/wall-bottom-right.png',
      './sprites/png/bricks/wall-dungeon.png',
      './sprites/png/bricks/wall-top.png',
      './sprites/png/bricks/wall-top-left.png',
      './sprites/png/bricks/wall-top-right.png',
      './sprites/png/bricks/white-tree.png',
      './sprites/png/bricks/white-wall.png',
      './sprites/png/bricks/white-wall-bottom-left.png',
      './sprites/png/bricks/white-wall-bottom-right.png',
      './sprites/png/bricks/white-wall-top.png',
      './sprites/png/bricks/white-wall-top-left.png',
      './sprites/png/bricks/white-wall-top-right.png',
    ])
    t(this, 'sounds')
    t(this, 'images')
    t(this, 'toLoad')
    t(this, 'loaded')
    this.Game = e
    this.toLoad = this.imagesToLoad.length + this.soundsToLoad.length
    this.loaded = 0
    this.images = []
    this.sounds = []
    this.imagesToLoad.forEach((e) => {
      let t = new Image()
      t.src = e
      this.images[e] = t
      t.addEventListener('load', () => this.loaded++, false)
    })
    this.soundsToLoad.forEach((e) => {
      let t = new Audio(e)
      this.sounds.push(e)
      t.addEventListener('canplaythrough', () => this.loaded++, false)
    })
  }
  isLoadFinished() {
    return this.toLoad === this.loaded
  }
  getImage(e) {
    return this.images[e]
  }
  getSound(e, t = false) {
    if (!this.sounds.includes(e)) {
      throw new Error("This sound hasn't been loaded")
    }
    let a = new Audio(e)
    return (a.loop = t), a
  }
}
class le {
  constructor(e) {
    t(this, 'Game')
    t(this, 'enemies', [])
    this.Game = e
    this.Game.Viewport.currentScene.hasEnemies &&
      (this.enemies = this.Game.Viewport.currentScene.enemies)
  }
  loopEnemies(e) {
    this.enemies.forEach((t) => {
      e(t)
    })
  }
  aiThinking() {
    this.loopEnemies((e) => {
      e.aiThinking()
    })
  }
  collisions() {
    this.loopEnemies((e) => {
      e.hasPlayerCollision &&
        h.movingBoxs(this.Game.Player.hitBox, e.hitBox) &&
        !e.state.is(r.Killed) &&
        e.playerCollision()
      let t = e.moveHelper()
      e.hasBricksCollisions &&
        this.Game.Viewport.loopCollision((a) => {
          h.movingBox(e.hitBox, a) && (t || e.bricksCollision())
        })
      e.customCollision()
      e.hasViewportCollision &&
        h.movingBoxCanvas(e.hitBox, this.Game.Viewport) &&
        e.viewportCollision()
    })
  }
  move() {
    this.loopEnemies((e) => {
      e.move()
    })
  }
  draw() {
    this.loopEnemies((e) => {
      e.state.is(r.Killed)
        ? e.state.currentFrame <= 10
          ? this.Game.Viewport.currentScene.drawImage({
              sprite: e.killedSprites[1],
              x: e.x,
              y: e.y,
              width: e.width,
              height: e.height,
            })
          : e.state.currentFrame <= 20
          ? this.Game.Viewport.currentScene.drawImage({
              sprite: e.killedSprites[2],
              x: e.x,
              y: e.y,
              width: e.width,
              height: e.height,
            })
          : (e.isKilledAnimationFinished = true)
        : (e.invincibleObserver.is(true)
            ? (e.invincibleAnimation.update(this.Game.dt),
              1 === e.invincibleAnimation.currentAnimationStep && e.draw())
            : e.draw(),
          this.Game.state.is(I.Run) && e.spritesAnimation.update(this.Game.dt))
    })
  }
  removeKilled(e = false) {
    this.loopEnemies((t) => {
      if (t.isKilledAnimationFinished || (e && t.state.is(r.Killed))) {
        const e = this.enemies.indexOf(t)
        e > -1 && this.enemies.splice(e, 1)
        this.Game.EnemyManager.enemies.length <= 0 &&
          this.Game.Player.increaseScore()
        t.dropItem()
      }
    })
  }
  updateObservers() {
    this.loopEnemies((e) => {
      e.state.update(this.Game.dt)
      e.invincibleObserver.update(this.Game.dt)
      e.invincibleObserver.get() &&
        e.invincibleObserver.currentFrame > e.invincibleDuration &&
        e.invincibleObserver.setNextState(false)
    })
  }
}
class ne {
  constructor(e) {
    t(this, 'Game')
    t(this, 'currentWorld')
    t(this, 'nextWorld')
    t(this, 'currentScene')
    t(this, 'nextScene')
    t(this, 'slideSceneDirection')
    t(this, 'targetCellR')
    t(this, 'targetCellC')
    t(this, 'changeWorldFromPassage')
    t(this, 'changeWorldToPassage')
    t(this, 'justReachOutPassage')
    t(this, 'x')
    t(this, 'y')
    t(this, 'slideSceneAnimationSpeed')
    t(this, 'music')
    this.Game = e
    this.currentWorld = this.Game.Map.getSpawnWorld()
    this.nextWorld = null
    this.currentScene = this.Game.Map.getSpawnScene()
    this.nextScene = null
    this.justReachOutPassage = false
    this.music = this.currentScene.music
    this.x = 0
    this.y = 0
    this.slideSceneAnimationSpeed = 10
  }
  get cellSize() {
    return this.currentScene.cellSize
  }
  get nbRow() {
    return this.currentScene.nbRow
  }
  get nbCol() {
    return this.currentScene.nbCol
  }
  get width() {
    return this.currentScene.cellSize * this.currentScene.nbCol
  }
  get height() {
    return this.currentScene.cellSize * this.currentScene.nbRow
  }
  loopCells(e, t = this.currentScene) {
    for (let a = 0; a < this.nbCol; a++) {
      for (let s = 0; s < this.nbRow; s++) {
        e(t.getCell(a, s), a, s)
      }
    }
  }
  loopCollision(e) {
    this.loopCells((t, a, s) => {
      t.brick.hasCollisions && e(t, a, s)
    })
  }
  draw() {
    this.Game.state.is(I.Run) &&
      this.Game.state.isFirstFrame &&
      this.music.play()
    this.currentScene.fillRect({
      x: 0,
      y: 0,
      width: this.currentScene.width,
      height: this.currentScene.height,
      color: this.currentScene.backgroundColor,
    })
    this.loopCells((e, t, a) => {
      this.currentScene.drawImage({
        sprite: e.brick.sprite,
        x: this.cellSize * t,
        y: this.cellSize * a,
        width: this.cellSize,
        height: this.cellSize,
      })
    })
    null !== this.nextScene &&
      (this.nextScene.fillRect({
        x: 0,
        y: 0,
        width: this.nextScene.width,
        height: this.nextScene.height,
        color: this.nextScene.backgroundColor,
      }),
      this.loopCells((e, t, a) => {
        this.nextScene.drawImage({
          sprite: e.brick.sprite,
          x: this.cellSize * t,
          y: this.cellSize * a,
          width: this.cellSize,
          height: this.cellSize,
        })
      }, this.nextScene))
  }
  collisions() {
    h.passBetweenBoxesHelper(this.Game.Player)
    this.loopCollision((e) => {
      h.movingBox(this.Game.Player.hitBox, e)
    })
    this.Game.Player.knockBackObserver.is(true) ||
      (this.currentScene.passages.forEach((e) => {
        h.simpleMovingBox(this.Game.Player.hitBox, e)
          ? this.justReachOutPassage ||
            this.changeWorld(
              true,
              e.targetWorldIndex,
              e.targetSceneC,
              e.targetSceneR
            )
          : this.justReachOutPassage && (this.justReachOutPassage = false)
      }),
      h.movingBoxLine(this.Game.Player, 0, i.Up)
        ? this.currentScene.upperEdgeCollision()
        : h.movingBoxLine(this.Game.Player, this.Game.Viewport.height, i.Down)
        ? this.currentScene.bottomEdgeCollision()
        : h.movingBoxLine(this.Game.Player, 0, i.Left)
        ? this.currentScene.leftEdgeCollision()
        : h.movingBoxLine(
            this.Game.Player,
            this.Game.Viewport.width,
            i.Right
          ) && this.currentScene.rightEdgeCollision())
  }
  slideScene(e) {
    this.slideSceneDirection = e
    let t = this.currentScene.c,
      a = this.currentScene.r,
      s = 0,
      l = 0
    switch (e) {
      case i.Left:
        s = -1
        break
      case i.Right:
        s = 1
        break
      case i.Up:
        l = -1
        break
      case i.Down:
        l = 1
    }
    if (
      !(
        t + s < 0 ||
        t + s > this.currentWorld.nbCol - 1 ||
        a + l < 0 ||
        a + l > this.currentWorld.nbRow - 1
      )
    ) {
      switch (((this.nextScene = this.currentWorld.scenes[t + s][a + l]), e)) {
        case i.Left:
          ;(this.nextScene.x = -this.width), (this.nextScene.y = 0)
          break
        case i.Right:
          ;(this.nextScene.x = this.width), (this.nextScene.y = 0)
          break
        case i.Up:
          ;(this.nextScene.y = -this.height), (this.nextScene.x = 0)
          break
        case i.Down:
          ;(this.nextScene.y = this.height), (this.nextScene.x = 0)
      }
      this.Game.Player.dx = 0
      this.Game.Player.dy = 0
      this.Game.Player.attackObserver.setNextState(false)
      this.Game.useCustomLoop(() => this.slideSceneLoop())
    }
  }
  slideSceneMove() {
    let e = this.slideSceneAnimationSpeed * this.Game.dt
    switch (this.slideSceneDirection) {
      case i.Left:
        ;(this.currentScene.x += e), (this.nextScene.x += e)
        break
      case i.Right:
        ;(this.currentScene.x -= e), (this.nextScene.x -= e)
        break
      case i.Up:
        ;(this.currentScene.y += e), (this.nextScene.y += e)
        break
      case i.Down:
        ;(this.currentScene.y -= e), (this.nextScene.y -= e)
    }
    ;((this.nextScene.y <= 0 && this.slideSceneDirection === i.Down) ||
      (this.nextScene.y >= 0 && this.slideSceneDirection === i.Up) ||
      (this.nextScene.x <= 0 && this.slideSceneDirection === i.Right) ||
      (this.nextScene.x >= 0 && this.slideSceneDirection === i.Left)) &&
      ((this.nextScene.y = 0),
      (this.nextScene.x = 0),
      this.music.src !== this.nextScene.music.src &&
        (this.music.pause(),
        (this.music.currentTime = 0),
        (this.music = this.nextScene.music),
        this.music.play()),
      (this.currentScene.permanentItems = this.Game.ItemManager.permanentItems),
      (this.currentScene = this.nextScene),
      (this.nextScene = null),
      this.Game.EnemyManager.removeKilled(true),
      (this.Game.EnemyManager = new le(this.Game)),
      this.Game.ProjectileManager.deleteAllProjectiles(),
      this.Game.ItemManager.deleteAllItems(),
      (this.Game.ItemManager.permanentItems = this.currentScene.permanentItems),
      this.Game.state.setNextState(I.Run))
  }
  slideScenePlayerMove() {
    switch (this.slideSceneDirection) {
      case i.Left:
        this.Game.Player.dx = this.slideSceneAnimationSpeed * this.Game.dt
        break
      case i.Right:
        this.Game.Player.dx = -this.slideSceneAnimationSpeed * this.Game.dt
        break
      case i.Up:
        this.Game.Player.dy = this.slideSceneAnimationSpeed * this.Game.dt
        break
      case i.Down:
        this.Game.Player.dy = -this.slideSceneAnimationSpeed * this.Game.dt
    }
    h.movingBoxCanvas(this.Game.Player, this)
    this.Game.Player.move()
  }
  slideSceneLoop() {
    this.slideSceneMove()
    this.slideScenePlayerMove()
    this.Game.drawGame()
  }
  changeWorld(e, t, a, s, i = null, l = null) {
    this.changeWorldFromPassage = e
    this.changeWorldToPassage = null !== i && null !== l
    this.targetCellC = i
    this.targetCellR = l
    this.nextWorld = this.Game.Map.worlds[t]
    this.nextScene = this.nextWorld.scenes[a][s]
    this.music.pause()
    this.music.currentTime = 0
    this.music = this.nextScene.music
    this.music.play()
    this.currentScene.permanentItems = this.Game.ItemManager.permanentItems
    this.currentWorld = this.nextWorld
    this.currentScene = this.nextScene
    this.nextWorld = null
    this.nextScene = null
    this.Game.EnemyManager.removeKilled(true)
    this.Game.EnemyManager = new le(this.Game)
    this.Game.ProjectileManager.deleteAllProjectiles()
    this.Game.ItemManager.deleteAllItems()
    this.Game.ItemManager.permanentItems = this.currentScene.permanentItems
    this.changeWorldToPassage
      ? ((this.Game.Player.x = this.targetCellC * this.currentScene.cellSize),
        (this.Game.Player.y = this.targetCellR * this.currentScene.cellSize),
        (this.targetCellC = 0),
        (this.targetCellR = 0),
        (this.justReachOutPassage = true))
      : ((this.Game.Player.x =
          (this.currentScene.nbCol * this.currentScene.cellSize) / 2 -
          this.Game.Player.width / 2),
        (this.Game.Player.y =
          (this.currentScene.nbRow - 1) * this.currentScene.cellSize))
  }
  drawImage({ sprite: e, x: t, y: a, width: s, height: i }) {
    this.Game.drawImage({
      sprite: e,
      x: t + this.x,
      y: a + this.y,
      width: s,
      height: i,
    })
  }
  fillRect({ x: e, y: t, width: a, height: s, color: i }) {
    this.Game.fillRect({
      x: e + this.x,
      y: t + this.y,
      width: a,
      height: s,
      color: i,
    })
  }
}
;(f = w || (w = {}))[(f.Visible = 0)] = 'Visible'
f[(f.Hidden = 1)] = 'Hidden'
f[(f.ShowAnimation = 2)] = 'ShowAnimation'
f[(f.HideAnimation = 3)] = 'HideAnimation'
class de {
  constructor(e) {
    t(this, 'Game')
    t(this, 'y')
    t(this, 'width')
    t(this, 'height')
    t(this, 'animationSpeed')
    t(this, 'state')
    this.Game = e
    this.y = -this.Game.Canvas.height
    this.width = this.Game.Canvas.width
    this.height = this.Game.Canvas.height
    this.animationSpeed = 12
    this.state = new C(1)
  }
  move() {
    this.state.is(2)
      ? this.y < 0
        ? ((this.y += this.Game.dt * this.animationSpeed),
          (this.Game.Viewport.y += this.Game.dt * this.animationSpeed),
          (this.Game.Hud.y += this.Game.dt * this.animationSpeed))
        : ((this.y = 0), this.state.setNextState(0))
      : this.state.is(3) &&
        (this.y > -this.height
          ? ((this.y -= this.Game.dt * this.animationSpeed),
            (this.Game.Viewport.y -= this.Game.dt * this.animationSpeed),
            (this.Game.Hud.y -= this.Game.dt * this.animationSpeed))
          : ((this.y = -this.height),
            (this.Game.Viewport.y = this.Game.Hud.height),
            (this.Game.Hud.y = 0),
            this.state.setNextState(1),
            this.Game.state.setNextState(I.Run)))
  }
  draw() {
    this.state.isIn(2, 3) && this.Game.drawGame()
    this.fillRect({
      x: 0,
      y: 0,
      width: this.width,
      height: this.height,
      color: '#000',
    })
    this.fillText({
      text: 'Inventaire',
      x: this.width / 2,
      y: this.height / 3,
      color: '#fff',
      fontSize: '24px',
      textAlign: 'center',
      textBaseline: 'middle',
    })
    this.fillText({
      text: 'Q',
      x: this.width / 2 - 10,
      y: (this.height / 3) * 2,
      color: '#fff',
      fontSize: '24px',
      textAlign: 'right',
      textBaseline: 'middle',
    })
    this.Game.Sword.isEnabled
      ? this.drawImage({
          sprite: this.Game.Sword.sprites[i.Up],
          x: this.width / 2 + 10,
          y: (this.height / 3) * 2 - this.Game.Sword.swordWidth / 2,
          width: this.Game.Sword.swordHeight,
          height: this.Game.Sword.swordWidth,
        })
      : this.fillRect({
          x: this.width / 2 + 10,
          y: (this.height / 3) * 2 - this.Game.Sword.swordWidth / 2,
          width: this.Game.Sword.swordHeight,
          height: this.Game.Sword.swordWidth,
          color: 'grey',
        })
    this.state.update(this.Game.dt)
  }
  drawImage({ sprite: e, x: t, y: a, width: s, height: i }) {
    this.Game.drawImage({
      sprite: e,
      x: t,
      y: a + this.y,
      width: s,
      height: i,
    })
  }
  fillRect({ x: e, y: t, width: a, height: s, color: i }) {
    this.Game.fillRect({
      x: e,
      y: t + this.y,
      width: a,
      height: s,
      color: i,
    })
  }
  fillText({
    text: e,
    x: t,
    y: a,
    color: s,
    fontSize: i = '16px',
    textAlign: l = 'left',
    textBaseline: n = 'alphabetic',
  }) {
    this.Game.fillText({
      text: e,
      x: t,
      y: a + this.y,
      color: s,
      fontSize: i,
      textAlign: l,
      textBaseline: n,
    })
  }
}
class he extends D {
  constructor(e) {
    super()
    t(this, 'Game')
    t(this, 'speed')
    t(this, 'movingObserver')
    t(this, 'attackObserver')
    t(this, 'diedObserver')
    t(this, 'diedAnimation')
    t(this, 'hp')
    t(this, 'maxHp')
    t(this, 'invincibleObserver')
    t(this, 'defaultInvincibleDuration')
    t(this, 'invincibleDuration')
    t(this, 'invincibleAnimation')
    t(this, 'knockBackObserver')
    t(this, 'knockBackSpeed')
    t(this, 'knockBackDuration')
    t(this, 'score')
    t(this, 'targetScore')
    t(this, 'obtainedItem')
    t(this, 'sprites', [])
    t(this, 'spritesAnimation')
    t(this, 'attackSprites', [])
    t(this, 'killedSprites', [])
    t(this, 'winSprite')
    t(this, 'halfHitBoxes')
    t(this, 'hurtSound')
    t(this, 'dieSound')
    t(this, 'lowHealthSound')
    t(this, 'fanfareSound')
    this.Game = e
    this.movingObserver = new C(false)
    this.attackObserver = new C(false)
    this.diedObserver = new C(false)
    this.diedAnimation = new B(8, 4)
    this.invincibleObserver = new C(false)
    this.defaultInvincibleDuration = 150
    this.invincibleDuration = 0
    this.knockBackObserver = new C(false)
    this.knockBackDuration = 10
    this.knockBackSpeed = 15
    this.score = 0
    this.targetScore = 0
    this.width = 64
    this.height = 64
    this.x = 0
    this.y = 0
    this.speed = 5
    this.maxHp = 6
    this.hp = this.maxHp
    this.direction = i.Up
    this.hitBox = new W({
      box: this,
      x: 0,
      y: this.height / 2,
      width: this.width,
      height: this.height / 2,
    })
    this.halfHitBoxes = new E(this.hitBox)
    this.sprites[i.Up] = []
    this.sprites[i.Up][1] = this.Game.AssetManager.getImage(
      './sprites/png/link-up1.png'
    )
    this.sprites[i.Up][2] = this.Game.AssetManager.getImage(
      './sprites/png/link-up2.png'
    )
    this.attackSprites[i.Up] = this.Game.AssetManager.getImage(
      './sprites/png/link-up-attack.png'
    )
    this.sprites[i.Right] = []
    this.sprites[i.Right][1] = this.Game.AssetManager.getImage(
      './sprites/png/link-right1.png'
    )
    this.sprites[i.Right][2] = this.Game.AssetManager.getImage(
      './sprites/png/link-right2.png'
    )
    this.attackSprites[i.Right] = this.Game.AssetManager.getImage(
      './sprites/png/link-right-attack.png'
    )
    this.sprites[i.Down] = []
    this.sprites[i.Down][1] = this.Game.AssetManager.getImage(
      './sprites/png/link-down1.png'
    )
    this.sprites[i.Down][2] = this.Game.AssetManager.getImage(
      './sprites/png/link-down2.png'
    )
    this.attackSprites[i.Down] = this.Game.AssetManager.getImage(
      './sprites/png/link-down-attack.png'
    )
    this.sprites[i.Left] = []
    this.sprites[i.Left][1] = this.Game.AssetManager.getImage(
      './sprites/png/link-left1.png'
    )
    this.sprites[i.Left][2] = this.Game.AssetManager.getImage(
      './sprites/png/link-left2.png'
    )
    this.attackSprites[i.Left] = this.Game.AssetManager.getImage(
      './sprites/png/link-left-attack.png'
    )
    this.winSprite = this.Game.AssetManager.getImage(
      './sprites/png/link-win.png'
    )
    this.killedSprites[1] = this.Game.AssetManager.getImage(
      './sprites/png/killed1.png'
    )
    this.killedSprites[2] = this.Game.AssetManager.getImage(
      './sprites/png/killed2.png'
    )
    this.spritesAnimation = new B(6, 2)
    this.invincibleAnimation = new B(5, 2)
    this.hurtSound = this.Game.AssetManager.getSound(
      './sounds/effect/Link_Hurt.wav'
    )
    this.dieSound = this.Game.AssetManager.getSound(
      './sounds/effect/Link_Die.wav'
    )
    this.lowHealthSound = this.Game.AssetManager.getSound(
      './sounds/effect/Low_Health.wav',
      true
    )
    this.fanfareSound = this.Game.AssetManager.getSound(
      './sounds/effect/Fanfare.wav'
    )
  }
  get isFullLife() {
    return this.hp === this.maxHp
  }
  draw() {
    let e = this.attackObserver.get()
      ? this.attackSprites[this.direction]
      : this.sprites[this.direction][this.spritesAnimation.currentAnimationStep]
    this.invincibleObserver.get() &&
      (this.invincibleAnimation.update(this.Game.dt),
      2 === this.invincibleAnimation.currentAnimationStep && (e = new Image()))
    this.Game.Viewport.drawImage({
      sprite: e,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    })
    this.movingObserver.is(true) &&
      !this.Game.state.is(I.Stopped) &&
      this.spritesAnimation.update(this.Game.dt)
  }
  drawWin() {
    this.Game.Viewport.drawImage({
      sprite: this.winSprite,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    })
  }
  drawGameOver() {
    if (this.diedObserver.currentFrame <= 125) {
      switch (this.diedAnimation.currentAnimationStep) {
        case 1:
          this.direction = i.Down
          break
        case 2:
          this.direction = i.Left
          break
        case 3:
          this.direction = i.Up
          break
        case 4:
          this.direction = i.Right
      }
      this.draw()
      this.diedAnimation.update(this.Game.dt)
    } else {
      if (this.diedObserver.currentFrame <= 145) {
        let e
        e =
          this.diedObserver.currentFrame <= 135
            ? this.killedSprites[1]
            : this.killedSprites[2]
        this.Game.Viewport.currentScene.drawImage({
          sprite: e,
          x: this.x,
          y: this.y,
          width: this.width,
          height: this.height,
        })
      }
    }
    this.diedObserver.update(this.Game.dt)
  }
  move() {
    this.x += this.dx
    this.y += this.dy
    this.dx = 0
    this.dy = 0
  }
  collisions() {}
  listenEvents() {
    if (this.knockBackObserver.is(true)) {
      switch (
        (this.movingObserver.setNextState(false),
        this.attackObserver.setNextState(false),
        this.direction)
      ) {
        case i.Up:
          this.dy = this.knockBackSpeed * this.Game.dt
          break
        case i.Right:
          this.dx = -this.knockBackSpeed * this.Game.dt
          break
        case i.Down:
          this.dy = -this.knockBackSpeed * this.Game.dt
          break
        case i.Left:
          this.dx = this.knockBackSpeed * this.Game.dt
      }
      h.movingBoxCanvas(this.hitBox, this.Game.Viewport)
    } else {
      this.Game.Sword.isEnabled &&
        this.attackObserver.setNextState(this.Game.EventManager.isAttackPressed)
      ;(!this.Game.EventManager.isDownPressed &&
        !this.Game.EventManager.isUpPressed) ||
      (this.Game.EventManager.isDownPressed &&
        this.Game.EventManager.isUpPressed)
        ? (!this.Game.EventManager.isRightPressed &&
            !this.Game.EventManager.isLeftPressed) ||
          (this.Game.EventManager.isRightPressed &&
            this.Game.EventManager.isLeftPressed) ||
          (this.Game.EventManager.isRightPressed
            ? (this.attackObserver.is(false) &&
                (this.dx = this.speed * this.Game.dt),
              (this.direction = i.Right))
            : this.Game.EventManager.isLeftPressed &&
              (this.attackObserver.is(false) &&
                (this.dx = -this.speed * this.Game.dt),
              (this.direction = i.Left)))
        : this.Game.EventManager.isDownPressed
        ? (this.attackObserver.is(false) &&
            (this.dy = this.speed * this.Game.dt),
          (this.direction = i.Down))
        : this.Game.EventManager.isUpPressed &&
          (this.attackObserver.is(false) &&
            (this.dy = -this.speed * this.Game.dt),
          (this.direction = i.Up))
      this.movingObserver.setNextState(0 != this.dx || 0 != this.dy)
    }
  }
  increaseScore() {
    this.score++
    this.score >= this.targetScore &&
      (this.invincibleObserver.setNextState(false),
      this.attackObserver.setNextState(false),
      this.movingObserver.setNextState(false),
      this.Game.Viewport.music.pause(),
      this.lowHealthSound.pause(),
      this.fanfareSound.play(),
      this.Game.state.setNextState(I.Win))
  }
  takeDamage(e) {
    this.invincibleObserver.get() ||
      (this.hurtSound.play(),
      this.takeKnockBack(),
      this.hp - e >= 0
        ? ((this.hp -= e), this.getInvicibility())
        : (this.hp = 0),
      this.hp <= 0
        ? (this.diedObserver.setNextState(false),
          this.invincibleObserver.setNextState(false),
          this.movingObserver.setNextState(false),
          this.attackObserver.setNextState(false),
          this.Game.Viewport.music.pause(),
          this.lowHealthSound.pause(),
          this.dieSound.play(),
          this.Game.state.setNextState(I.GameOver))
        : this.hp <= 2 && this.lowHealthSound.play())
  }
  recoverHealth(e = this.maxHp) {
    this.hp += e
    this.hp > this.maxHp && (this.hp = this.maxHp)
    this.hp > 2 &&
      (this.lowHealthSound.pause(), (this.lowHealthSound.currentTime = 0))
  }
  takeKnockBack(e = this.direction) {
    this.direction = e
    this.knockBackObserver.setNextState(true)
  }
  getInvicibility(e = this.defaultInvincibleDuration) {
    this.invincibleDuration = e
    this.invincibleObserver.setNextState(true)
  }
  getImportantItem(e) {
    this.obtainedItem = e
    this.Game.Viewport.music.pause()
    this.Game.Viewport.music.currentTime = 0
    this.Game.useCustomLoop(() => this.getImportantItemLoop())
  }
  getImportantItemDraw() {
    this.Game.Viewport.drawImage({
      sprite: this.winSprite,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    })
    this.Game.Viewport.drawImage({
      sprite: this.obtainedItem.sprite,
      x: this.x,
      y: this.y - this.obtainedItem.height,
      width: this.obtainedItem.width,
      height: this.obtainedItem.height,
    })
    this.Game.state.currentFrame > 120 &&
      (this.Game.Viewport.music.play(), this.Game.state.setNextState(I.Run))
  }
  getImportantItemLoop() {
    this.Game.drawGameWithoutPlayer()
    this.getImportantItemDraw()
  }
  updateObservers() {
    this.movingObserver.update(this.Game.dt)
    this.attackObserver.update(this.Game.dt)
    this.invincibleObserver.update(this.Game.dt)
    this.knockBackObserver.update(this.Game.dt)
    this.knockBackObserver.is(true) &&
      this.knockBackObserver.currentFrame > this.knockBackDuration &&
      this.knockBackObserver.setNextState(false)
    this.invincibleObserver.get() &&
      this.invincibleObserver.currentFrame > this.invincibleDuration &&
      this.invincibleObserver.setNextState(false)
  }
}
class re extends N {
  constructor({ game: e, x: t, y: a, speed: s, direction: l, damage: n }) {
    super({
      speed: s,
      direction: l,
    })
    this.Game = e
    this.x = t
    this.y = a
    this.width = i.isVertical(l) ? 28 : 64
    this.height = i.isVertical(l) ? 64 : 28
    this.damage = n
    this.sprites = this.Game.Sword.sprites
    this.hasPlayerCollision = false
    this.canBeShieldBlocked = false
    this.hasEnemiesCollision = true
  }
  deleteCallback() {
    this.Game.Sword.isFlying = false
  }
}
class ue extends O {
  constructor(e) {
    super()
    t(this, 'Game')
    t(this, 'swordWidth')
    t(this, 'swordHeight')
    t(this, 'swordHandleWidth')
    t(this, 'sprites', [])
    t(this, 'slashSound')
    t(this, 'flyingSound')
    t(this, 'isFlying')
    t(this, 'isEnabled')
    t(this, 'damage')
    t(this, 'hasHit')
    this.Game = e
    this.swordWidth = 64
    this.swordHeight = 28
    this.swordHandleWidth = 16
    this.sprites[i.Up] = this.Game.AssetManager.getImage(
      './sprites/png/sword-up.png'
    )
    this.sprites[i.Right] = this.Game.AssetManager.getImage(
      './sprites/png/sword-right.png'
    )
    this.sprites[i.Down] = this.Game.AssetManager.getImage(
      './sprites/png/sword-down.png'
    )
    this.sprites[i.Left] = this.Game.AssetManager.getImage(
      './sprites/png/sword-left.png'
    )
    this.slashSound = this.Game.AssetManager.getSound(
      './sounds/effect/Sword_Slash.wav'
    )
    this.flyingSound = this.Game.AssetManager.getSound(
      './sounds/effect/Sword_Shoot.wav'
    )
    this.isFlying = false
    this.isEnabled = false
    this.damage = 1
    this.hasHit = false
  }
  get direction() {
    return this.Game.Player.direction
  }
  get x() {
    switch (this.direction) {
      case i.Up:
      case i.Down:
        return (
          this.Game.Player.x + (this.Game.Player.width - this.swordHeight) / 2
        )
      case i.Left:
        return this.Game.Player.x - this.swordWidth + this.swordHandleWidth
      case i.Right:
        return (
          this.Game.Player.x + this.Game.Player.width - this.swordHandleWidth
        )
      default:
        throw new Error('Wrong Sword Direction')
    }
  }
  get y() {
    switch (this.direction) {
      case i.Up:
        return this.Game.Player.y - this.swordWidth + this.swordHandleWidth
      case i.Down:
        return (
          this.Game.Player.y + this.Game.Player.width - this.swordHandleWidth
        )
      case i.Left:
      case i.Right:
        return (
          this.Game.Player.y + (this.Game.Player.height - this.swordHeight) / 2
        )
      default:
        throw new Error('Wrong Sword Direction')
    }
  }
  get width() {
    switch (this.direction) {
      case i.Up:
      case i.Down:
        return this.swordHeight
      case i.Left:
      case i.Right:
        return this.swordWidth
      default:
        throw new Error('Wrong Sword Direction')
    }
  }
  get height() {
    switch (this.direction) {
      case i.Up:
      case i.Down:
        return this.swordWidth
      case i.Left:
      case i.Right:
        return this.swordHeight
      default:
        throw new Error('Wrong Sword Direction')
    }
  }
  draw() {
    this.isEnabled &&
      this.Game.Player.attackObserver.get() &&
      this.Game.Viewport.drawImage({
        sprite: this.sprites[this.direction],
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
      })
  }
  drawWin() {
    this.Game.Viewport.drawImage({
      sprite: this.sprites[i.Up],
      x: this.Game.Player.x,
      y: this.Game.Player.y - this.swordWidth,
      width: this.swordHeight,
      height: this.swordWidth,
    })
  }
  collisions() {
    this.isEnabled &&
      this.Game.Player.attackObserver.get() &&
      this.Game.EnemyManager.loopEnemies((e) => {
        h.simpleMovingBox(e.hitBox, this) &&
          (e.takeDamage(this.damage), (this.hasHit = true))
      })
  }
  listenEvents() {
    this.isEnabled &&
      (this.Game.Player.attackObserver.get() &&
        this.Game.Player.attackObserver.isFirstFrame &&
        (this.slashSound.play(), (this.hasHit = false)),
      this.isFlying ||
        !this.Game.Player.attackObserver.getLastFrame() ||
        this.Game.Player.attackObserver.get() ||
        this.hasHit ||
        !this.Game.Player.isFullLife ||
        (this.flyingSound.play(),
        (this.isFlying = true),
        this.Game.ProjectileManager.addProjectile(
          new re({
            game: this.Game,
            x: this.x,
            y: this.y,
            speed: 3 * this.Game.Player.speed,
            direction: this.direction,
            damage: this.damage,
          })
        )))
  }
}
class oe {
  constructor(e) {
    t(this, 'Game')
    t(this, 'projectiles')
    t(this, 'shieldSound')
    this.Game = e
    this.projectiles = []
    this.shieldSound = this.Game.AssetManager.getSound(
      './sounds/effect/Shield.wav'
    )
  }
  collisions() {
    this.loopProjectiles((e) => {
      if (!e.state.is(o.ShieldBlocked)) {
        if (
          (e.hasEnemiesCollision &&
            this.Game.EnemyManager.loopEnemies((t) => {
              h.movingBoxs(t, e.hitBox) &&
                (null !== e.enemiesCollisionCallback &&
                  e.enemiesCollisionCallback(t),
                this.deleteProjectile(e))
            }),
          e.hasPlayerCollision &&
            h.movingBoxs(this.Game.Player.hitBox, e.hitBox))
        ) {
          if (
            e.canBeShieldBlocked &&
            this.Game.Player.movingObserver.is(false) &&
            this.Game.Player.attackObserver.is(false) &&
            i.areOpposite(this.Game.Player.direction, e.direction)
          ) {
            return (
              this.shieldSound.play(),
              void e.state.setNextState(o.ShieldBlocked)
            )
          }
          null !== e.playerCollisionCallback && e.playerCollisionCallback()
          this.deleteProjectile(e)
        }
        h.movingBoxCanvas(e.hitBox, this.Game.Viewport) &&
          this.deleteProjectile(e)
      }
    })
  }
  move() {
    this.loopProjectiles((e) => {
      switch (e.state.get()) {
        case o.Moving:
          ;(e.x += e.dx * this.Game.dt), (e.y += e.dy * this.Game.dt)
          break
        case o.ShieldBlocked:
          i.isVertical(e.direction)
            ? ((e.x += (e.dy / 2) * this.Game.dt),
              (e.y -= (e.dy / 2) * this.Game.dt))
            : ((e.x -= (e.dx / 2) * this.Game.dt),
              (e.y += (e.dx / 2) * this.Game.dt))
      }
    })
  }
  draw() {
    this.loopProjectiles((e) => {
      this.Game.Viewport.currentScene.drawImage({
        sprite: e.sprites[e.direction],
        x: e.x,
        y: e.y,
        width: e.width,
        height: e.height,
      })
    })
  }
  updateObservers() {
    this.loopProjectiles((e) => {
      e.state.update(this.Game.dt)
      e.state.is(o.ShieldBlocked) &&
        e.state.currentFrame > 20 &&
        this.deleteProjectile(e)
    })
  }
  addProjectile(e) {
    this.projectiles.push(e)
  }
  deleteProjectile(e) {
    null !== e.deleteCallback && e.deleteCallback()
    this.projectiles.splice(this.projectiles.indexOf(e), 1)
  }
  deleteAllProjectiles() {
    this.loopProjectiles((e) => {
      null !== e.deleteCallback && e.deleteCallback()
    })
    this.projectiles = []
  }
  loopProjectiles(e) {
    this.projectiles.forEach((t) => {
      e(t)
    })
  }
}
class ge {
  constructor(e) {
    t(this, 'Game')
    t(this, 'items')
    t(this, 'permanentItems')
    this.Game = e
    this.items = []
    this.permanentItems = []
  }
  collisions() {
    this.loopItems((e) => {
      ;(h.simpleMovingBox(this.Game.Player, e) ||
        (this.Game.Player.attackObserver.is(true) &&
          h.simpleBox(this.Game.Sword, e))) &&
        (e.collisionCallback(), e.collisionSound.play(), this.deleteItem(e))
    })
  }
  draw() {
    this.loopItems((e) => {
      this.Game.Viewport.currentScene.drawImage({
        sprite: e.sprite,
        x: e.x,
        y: e.y,
        width: e.width,
        height: e.height,
      })
    })
  }
  addItem(e) {
    this.items.push(e)
  }
  addPermanentItem(e) {
    this.permanentItems.push(e)
  }
  deleteItem(e) {
    let t = this.items.indexOf(e),
      a = this.permanentItems.indexOf(e)
    t > -1
      ? this.items.splice(t, 1)
      : a > -1 && this.permanentItems.splice(a, 1)
  }
  deleteAllItems() {
    this.items = []
    this.permanentItems = []
  }
  loopItems(e) {
    this.items.forEach((t) => {
      e(t)
    })
    this.permanentItems.forEach((t) => {
      e(t)
    })
  }
}
class we {
  constructor(e) {
    t(this, 'Game')
    t(this, 'isRightPressed', false)
    t(this, 'isLeftPressed', false)
    t(this, 'isUpPressed', false)
    t(this, 'isDownPressed', false)
    t(this, 'isAttackPressed', false)
    t(this, 'isEnterPressed', false)
    t(this, 'currentAttackFrame', 0)
    t(this, 'attackDuration', 10)
    this.Game = e
    document.addEventListener('keydown', (e) => this.keyEvent(e, true))
    document.addEventListener('keyup', (e) => this.keyEvent(e, false))
    document.addEventListener(
      'visibilitychange',
      () => this.visibilityEvent(),
      false
    )
  }

  keyEvent(e, t) {
    if (e.repeat) {
      e.preventDefault();
    } else {
      switch (e.key) {
        case 'ArrowRight':
          this.isRightPressed = t;
          break;
        case 'ArrowLeft':
          this.isLeftPressed = t;
          break;
        case 'ArrowUp':
          this.isUpPressed = t;
          break;
        case 'ArrowDown':
          this.isDownPressed = t;
          break;
        case 'Enter':
          this.isEnterPressed = t;
          break;
        case 'u':
        case 'U':
          if (!t) {
            return;
          }
          this.isAttackPressed = true;
          break;
        case 'i':
        case 'I':
          if (!t) {
            return;
          }
          this.Game.state.isIn(I.Run) && this.Game.Panes.isAnimationFinished
            ? (this.Game.state.setNextState(I.Inventory),
              this.Game.Inventory.state.set(w.ShowAnimation))
            : this.Game.state.isIn(I.Inventory) &&
              (this.Game.Inventory.state.is(w.Visible)
                ? this.Game.Inventory.state.setNextState(w.HideAnimation)
                : this.Game.Inventory.state.set(
                    this.Game.Inventory.state.is(w.ShowAnimation)
                      ? w.HideAnimation
                      : w.ShowAnimation
                  ));
          break;
        case 'p':
        case 'P':
          if (!t) {
            return;
          }
          this.Game.state.isIn(I.Run, I.Stopped) &&
            this.Game.state.setNextState(
              this.Game.state.is(I.Run) ? I.Stopped : I.Run
            );
          break;
        case 'a':
        case 'A':
          this.isLeftPressed = t;
          break;
        case 'd':
        case 'D':
          this.isRightPressed = t;
          break;
        case 'w':
        case 'W':
          this.isUpPressed = t;
          break;
        case 's':
        case 'S':
          this.isDownPressed = t;
          break;
      }
      e.preventDefault();
    }
  }
  
  visibilityEvent() {
    document.hidden &&
      this.Game.state.is(I.Run) &&
      (this.Game.state.setNextState(I.Stopped), (this.Game.lastTime = null))
  }
  newFrame() {
    if (this.isAttackPressed) {
      return (
        (this.currentAttackFrame += this.Game.dt),
        void (
          this.currentAttackFrame >= this.attackDuration &&
          (this.isAttackPressed = false)
        )
      )
    }
    this.currentAttackFrame = 0
  }
}
class fe {
  constructor(e) {
    t(this, 'Game')
    t(this, 'x')
    t(this, 'y')
    t(this, 'height')
    t(this, 'width')
    t(this, 'emptyHeartSprite')
    t(this, 'halfHeartSprite')
    t(this, 'fullHeartSprite')
    t(this, 'currentSceneAnimation')
    this.Game = e
    this.x = 0
    this.y = 0
    this.height = 64
    this.emptyHeartSprite = this.Game.AssetManager.getImage(
      './sprites/png/empty-heart.png'
    )
    this.halfHeartSprite = this.Game.AssetManager.getImage(
      './sprites/png/half-heart.png'
    )
    this.fullHeartSprite = this.Game.AssetManager.getImage(
      './sprites/png/full-heart.png'
    )
    this.currentSceneAnimation = new B(25, 2)
  }
  draw() {
    this.fillRect({
      x: 0,
      y: 0,
      width: this.width,
      height: this.height,
      color: '#000',
    })
    this.drawHearts()
    this.drawMap()
    this.drawScore()
  }
  drawHearts() {
    for (let e = 1; e <= this.Game.Player.maxHp / 2; e++) {
      this.drawImage({
        sprite: this.emptyHeartSprite,
        x: 24 * e + 8 * e,
        y: this.height / 2 - 12,
        width: 24,
        height: 24,
      })
    }
    for (let e = 1; e <= this.Game.Player.hp / 2; e++) {
      this.drawImage({
        sprite: this.fullHeartSprite,
        x: 24 * e + 8 * e,
        y: this.height / 2 - 12,
        width: 24,
        height: 24,
      })
    }
    this.Game.Player.hp % 2 == 1 &&
      this.drawImage({
        sprite: this.halfHeartSprite,
        x:
          24 * (this.Game.Player.hp / 2 + 1) +
          8 * (this.Game.Player.hp / 2 - 1),
        y: this.height / 2 - 12,
        width: 24,
        height: 24,
      })
  }
  drawMap() {
    let e =
        (this.height - this.Game.Viewport.currentWorld.nbRow - 1) /
        this.Game.Viewport.currentWorld.nbRow,
      t = (e * this.Game.Viewport.width) / this.Game.Viewport.height,
      a =
        (this.width -
          t * this.Game.Viewport.currentWorld.nbCol +
          this.Game.Viewport.currentWorld.nbCol -
          1) /
        2
    this.Game.Viewport.currentWorld.loopScenes((s) => {
      let i = '#00a230'
      s.hasPermanentItems ? (i = '#e2d64a') : s.hasEnemies && (i = '#d11c0d')
      this.fillRect({
        x: a + t * s.c + 2 * s.c,
        y: e * s.r + 2 * s.r,
        width: t,
        height: e,
        color: i,
      })
    })
    this.Game.state.isIn(I.Run) &&
      (1 === this.currentSceneAnimation.currentAnimationStep &&
        this.fillRect({
          x:
            a +
            t * this.Game.Viewport.currentScene.c +
            2 * this.Game.Viewport.currentScene.c,
          y:
            e * this.Game.Viewport.currentScene.r +
            2 * this.Game.Viewport.currentScene.r,
          width: t,
          height: e,
          color: 'rgba(0, 0, 0, 0.3)',
        }),
      this.currentSceneAnimation.update(this.Game.dt))
  }
  drawScore() {
    this.fillText({
      text:
        ' SCORE: ' +
        this.Game.Player.score +
        '/' +
        this.Game.Player.targetScore,
      x: this.width - this.height / 2,
      y: this.height / 2,
      color: '#fff',
      textAlign: 'right',
      textBaseline: 'middle',
    })
  }
  drawImage({ sprite: e, x: t, y: a, width: s, height: i }) {
    this.Game.drawImage({
      sprite: e,
      x: t + this.x,
      y: a + this.y,
      width: s,
      height: i,
    })
  }
  fillRect({ x: e, y: t, width: a, height: s, color: i }) {
    this.Game.fillRect({
      x: e + this.x,
      y: t + this.y,
      width: a,
      height: s,
      color: i,
    })
  }
  fillText({
    text: e,
    x: t,
    y: a,
    color: s,
    fontSize: i = '16px',
    textAlign: l = 'left',
    textBaseline: n = 'alphabetic',
  }) {
    this.Game.fillText({
      text: e,
      x: t + this.x,
      y: a + this.y,
      color: s,
      fontSize: i,
      textAlign: l,
      textBaseline: n,
    })
  }
}
class ce {
  constructor(e) {
    t(this, 'Game')
    t(this, 'speed')
    t(this, 'position')
    this.Game = e
    this.speed = 8
    this.position = 0
  }
  get isAnimationFinished() {
    return this.position > this.Game.Canvas.width / 2
  }
  reset() {
    this.position = 0
  }
  drawOpen() {
    this.Game.fillRect({
      x: -this.position,
      y: 0,
      width: this.Game.Canvas.width / 2,
      height: this.Game.Canvas.height,
      color: '#000',
    })
    this.Game.fillRect({
      x: this.Game.Canvas.width / 2 + this.position,
      y: 0,
      width: this.Game.Canvas.width / 2,
      height: this.Game.Canvas.height,
      color: '#000',
    })
    this.position += this.speed * this.Game.dt
  }
  drawClose() {
    this.Game.fillRect({
      x: -this.Game.Canvas.width / 2 + this.position,
      y: 0,
      width: this.Game.Canvas.width / 2,
      height: this.Game.Canvas.height,
      color: '#000',
    })
    this.Game.fillRect({
      x: this.Game.Canvas.width - this.position,
      y: 0,
      width: this.Game.Canvas.width / 2,
      height: this.Game.Canvas.height,
      color: '#000',
    })
    this.position += this.speed * this.Game.dt
  }
}
class pe {
  constructor({
    game: e,
    state: a,
    backgroundColor: s,
    title: i,
    titleFontSize: l = '24px',
    titleColor: n = '#fff',
    message: d,
    blinkingMessage: h = true,
    showMessageAfter: r = 0,
  }) {
    t(this, 'Game')
    t(this, 'title')
    t(this, 'titleFontSize')
    t(this, 'titleColor')
    t(this, 'message')
    t(this, 'blinkingMessage')
    t(this, 'showMessageAfter')
    t(this, 'backgroundColor')
    t(this, 'state')
    t(this, 'messageAnimation')
    this.Game = e
    this.title = i
    this.titleFontSize = l
    this.titleColor = n
    this.message = d
    this.blinkingMessage = h
    this.showMessageAfter = r
    this.backgroundColor = s
    this.state = a
    this.messageAnimation = new B(50, 2)
  }
  draw() {
    this.Game.fillRect({
      x: 0,
      y: 0,
      width: this.Game.Canvas.width,
      height: this.Game.Canvas.height,
      color: this.backgroundColor,
    })
    this.Game.fillText({
      text: this.title,
      x: this.Game.Canvas.width / 2,
      y: this.Game.Canvas.height / 3,
      color: this.titleColor,
      fontSize: this.titleFontSize,
      textAlign: 'center',
      textBaseline: 'middle',
    })
    ;(!this.blinkingMessage ||
      (this.state.currentFrame > this.showMessageAfter &&
        1 === this.messageAnimation.currentAnimationStep)) &&
      this.Game.fillText({
        text: this.message,
        x: this.Game.Canvas.width / 2,
        y: (this.Game.Canvas.height / 3) * 2,
        color: '#fff',
        fontSize: '16px',
        textAlign: 'center',
        textBaseline: 'middle',
      })
    this.blinkingMessage &&
      this.state.currentFrame > this.showMessageAfter &&
      this.messageAnimation.update(this.Game.dt)
  }
  updateObservers() {
    this.state.update(this.Game.dt)
  }
};(p = c || (c = {}))[(p.BlackScreen = 0)] = 'BlackScreen'

class me extends pe {
  constructor(e) {
    super({
      game: e,
      state: new C(0),
      backgroundColor: '#000',
      title: 'ZELDA - NES',
      titleFontSize: '40px',
      titleColor: '#ebd834',
      message: 'Appuie sur ENTER pour commencer.',
      showMessageAfter: 150,
    })
    t(this, 'music')
    this.music = this.Game.AssetManager.getSound(
      './sounds/music/intro.mp3',
      true
    )
  }
  draw() {
    switch (this.state.get()) {
      case 0:
        this.state.isFirstFrame && this.music.play(),
          super.draw(),
          this.state.currentFrame > this.showMessageAfter &&
            this.Game.EventManager.isEnterPressed &&
            (this.music.pause(), this.Game.state.setNextState(I.Run))
    }
    super.updateObservers()
  }
}
;(x = m || (m = {}))[(x.PlayerAnimation = 0)] = 'PlayerAnimation'
x[(x.HideGame = 1)] = 'HideGame'
x[(x.BlackScreen = 2)] = 'BlackScreen'
class xe extends pe {
  constructor(e) {
    super({
      game: e,
      state: new C(0),
      backgroundColor: '#060404',
      title: 'PERDU...',
      message: 'Appuie sur ENTER pour recommencer.',
      showMessageAfter: 150,
    })
    t(this, 'music')
    this.music = this.Game.AssetManager.getSound(
      './sounds/music/game_over.mp3',
      true
    )
  }
  draw() {
    switch (this.state.get()) {
      case 0:
        this.Game.Viewport.draw(),
          this.Game.EnemyManager.draw(),
          this.Game.Hud.draw(),
          this.Game.Player.drawGameOver(),
          this.Game.Player.diedObserver.currentFrame > 145 &&
            this.state.setNextState(1)
        break
      case 1:
        this.state.isFirstFrame && this.Game.Panes.reset(),
          this.Game.Viewport.draw(),
          this.Game.Hud.draw(),
          this.Game.Panes.drawClose(),
          this.Game.Panes.isAnimationFinished && this.state.setNextState(2)
        break
      case 2:
        this.state.isFirstFrame && this.music.play(),
          this.Game.EventManager.isEnterPressed &&
            (this.music.pause(), this.Game.restart()),
          super.draw()
    }
    super.updateObservers()
  }
}
;(y = G || (G = {}))[(y.PlayerAnimation = 0)] = 'PlayerAnimation'
y[(y.HideGame = 1)] = 'HideGame'
y[(y.BlackScreen = 2)] = 'BlackScreen'
class Ge extends pe {
  constructor(e) {
    super({
      game: e,
      state: new C(0),
      backgroundColor: '#000',
      title: 'GG MON REUF',
      message: 'Apuie sur ENTER pour rejouer.',
      showMessageAfter: 150,
    })
    t(this, 'music')
    t(this, 'killedSprites', [])
    this.music = this.Game.AssetManager.getSound(
      './sounds/music/ending.mp3',
      true
    )
    this.killedSprites[1] = this.Game.AssetManager.getImage(
      './sprites/png/killed1.png'
    )
    this.killedSprites[2] = this.Game.AssetManager.getImage(
      './sprites/png/killed2.png'
    )
  }
  draw() {
    switch (this.state.get()) {
      case 0:
        this.Game.Viewport.draw(),
          this.Game.EnemyManager.draw(),
          this.Game.Sword.drawWin(),
          this.Game.Player.drawWin(),
          this.Game.Hud.draw(),
          this.state.currentFrame > 120 && this.state.setNextState(1)
        break
      case 1:
        this.state.isFirstFrame && this.Game.Panes.reset(),
          this.Game.Viewport.draw(),
          this.Game.EnemyManager.draw(),
          this.Game.Sword.drawWin(),
          this.Game.Player.drawWin(),
          this.Game.Hud.draw(),
          this.Game.Panes.drawClose(),
          this.Game.Panes.isAnimationFinished && this.state.setNextState(2)
        break
      case 2:
        this.state.isFirstFrame && this.music.play(),
          this.Game.EventManager.isEnterPressed &&
            (this.music.pause(), this.Game.restart()),
          super.draw()
    }
    super.updateObservers()
  }
}
;(S = b || (b = {}))[(S.BlackScreen = 0)] = 'BlackScreen'
class ye extends pe {
  constructor(e) {
    super({
      game: e,
      state: new C(0),
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      title: 'PAUSE',
      message: 'Appuie sur P pour continuer.',
    })
  }
  draw() {
    switch (this.state.get()) {
      case 0:
        super.draw()
    }
    super.updateObservers()
  }
}
;(v = k || (k = {}))[(v.BlackScreen = 0)] = 'BlackScreen'
class be extends pe {
  constructor(e) {
    super({
      game: e,
      state: new C(0),
      backgroundColor: '#000',
      title: 'CHARGEMENT...',
      message: '',
      blinkingMessage: false,
    })
    t(this, 'music')
  }
  draw() {
    this.message =
      Math.trunc(
        (100 * this.Game.AssetManager.loaded) / this.Game.AssetManager.toLoad
      ) + '%'
    super.draw()
    super.updateObservers()
    this.Game.AssetManager.isLoadFinished() &&
      this.Game.state.setNextState(I.Splash)
  }
}
;(M = I || (I = {}))[(M.Loading = 0)] = 'Loading'
M[(M.Splash = 1)] = 'Splash'
M[(M.Run = 2)] = 'Run'
M[(M.Inventory = 3)] = 'Inventory'
M[(M.Stopped = 4)] = 'Stopped'
M[(M.CustomLoop = 5)] = 'CustomLoop'
M[(M.GameOver = 6)] = 'GameOver'
M[(M.Win = 7)] = 'Win'
class Se {
  constructor(e) {
    t(this, 'Canvas')
    t(this, 'ctx')
    t(this, 'lastTime')
    t(this, 'dt')
    t(this, 'AssetManager')
    t(this, 'BrickCollection')
    t(this, 'Map')
    t(this, 'Viewport')
    t(this, 'Player')
    t(this, 'Sword')
    t(this, 'EnemyManager')
    t(this, 'ProjectileManager')
    t(this, 'ItemManager')
    t(this, 'EventManager')
    t(this, 'Hud')
    t(this, 'Panes')
    t(this, 'LoadingScreen')
    t(this, 'SplashScreen')
    t(this, 'GameOverScreen')
    t(this, 'WinScreen')
    t(this, 'StoppedScreen')
    t(this, 'Inventory')
    t(this, 'state')
    t(this, 'customLoop')
    this.Canvas = e
    this.ctx = this.Canvas.getContext('2d')
    this.init()
  }
  init() {
    this.AssetManager = new ie(this)
    this.EventManager = new we(this)
    this.BrickCollection = new L(this)
    this.Map = new se(this)
    this.Viewport = new ne(this)
    this.Player = new he(this)
    this.Sword = new ue(this)
    this.EnemyManager = new le(this)
    this.ProjectileManager = new oe(this)
    this.ItemManager = new ge(this)
    this.Hud = new fe(this)
    this.Panes = new ce(this)
    this.LoadingScreen = new be(this)
    this.SplashScreen = new me(this)
    this.GameOverScreen = new xe(this)
    this.WinScreen = new Ge(this)
    this.StoppedScreen = new ye(this)
    this.Viewport.y = this.Hud.height
    this.Hud.width = this.Viewport.width
    this.Canvas.width = this.Viewport.width
    this.Canvas.height = this.Viewport.height + this.Hud.height
    this.Inventory = new de(this)
    this.Player.x = this.Viewport.cellSize * this.Map.spawnCellColl
    this.Player.y = this.Viewport.cellSize * this.Map.spawnCellRow
    this.Map.loopWorlds((e) => {
      e.loopScenes((e) => {
        e.hasEnemies && this.Player.targetScore++
      })
    })
    this.state = new C(0)
    this.lastTime = null
    this.dt = null
  }
  restart() {
    this.init()
  }
  run() {
    window.requestAnimationFrame((e) => this.loop(e))
  }
  deltaCalculation(e) {
    null === this.lastTime
      ? (this.dt = 1)
      : (this.dt = (e - this.lastTime) / 16.666666666666668)
    this.lastTime = e
  }
  loop(e) {
    switch (
      (window.requestAnimationFrame((e) => this.loop(e)),
      this.deltaCalculation(e),
      this.ctx.clearRect(0, 0, this.Canvas.width, this.Canvas.height),
      this.state.get())
    ) {
      case 0:
        this.loadingLoop()
        break
      case 1:
        this.splashLoop()
        break
      case 2:
        this.runLoop()
        break
      case 3:
        this.inventoryLoop()
        break
      case 4:
        this.stoppedLoop()
        break
      case 6:
        this.gameOverLoop()
        break
      case 7:
        this.winLoop()
        break
      case 5:
        this.customLoop()
    }
    this.state.update(this.dt)
  }
  runLoop() {
    if (!this.Panes.isAnimationFinished) {
      return this.drawGame(), void this.Panes.drawOpen()
    }
    this.Player.listenEvents()
    this.Sword.listenEvents()
    this.EnemyManager.aiThinking()
    this.Sword.collisions()
    this.Player.collisions()
    this.ItemManager.collisions()
    this.EnemyManager.collisions()
    this.ProjectileManager.collisions()
    this.Viewport.collisions()
    this.Player.move()
    this.EnemyManager.move()
    this.ProjectileManager.move()
    this.drawGame()
    this.EnemyManager.removeKilled()
    this.Player.updateObservers()
    this.EnemyManager.updateObservers()
    this.ProjectileManager.updateObservers()
    this.EventManager.newFrame()
  }
  inventoryLoop() {
    this.Inventory.move()
    this.Inventory.draw()
  }
  stoppedLoop() {
    this.drawGame()
    this.StoppedScreen.draw()
  }
  loadingLoop() {
    this.LoadingScreen.draw()
  }
  splashLoop() {
    this.SplashScreen.draw()
  }
  gameOverLoop() {
    this.GameOverScreen.draw()
  }
  useCustomLoop(e) {
    this.state.setNextState(5)
    this.customLoop = e
  }
  winLoop() {
    console.log('winLoop')
    document.dispatchEvent(new Event('win'))
    this.WinScreen.draw()
  }
  drawGame() {
    this.Viewport.draw()
    this.EnemyManager.draw()
    this.Sword.draw()
    this.ItemManager.draw()
    this.ProjectileManager.draw()
    this.Player.draw()
    this.Hud.draw()
  }
  drawGameWithoutPlayer() {
    this.Viewport.draw()
    this.EnemyManager.draw()
    this.Sword.draw()
    this.ItemManager.draw()
    this.ProjectileManager.draw()
    this.Hud.draw()
  }
  drawImage({ sprite: e, x: t, y: a, width: s, height: i }) {
    this.ctx.beginPath()
    this.ctx.imageSmoothingEnabled = false
    this.ctx.drawImage(e, t, a, s, i)
    this.ctx.closePath()
  }
  fillRect({ x: e, y: t, width: a, height: s, color: i }) {
    this.ctx.beginPath()
    this.ctx.fillStyle = i
    this.ctx.fillRect(e, t, a, s)
    this.ctx.closePath()
  }
  fillText({
    text: e,
    x: t,
    y: a,
    color: s,
    fontSize: i = '16px',
    textAlign: l = 'left',
    textBaseline: n = 'alphabetic',
  }) {
    this.ctx.beginPath()
    this.ctx.font = i + ' NES-font'
    this.ctx.fillStyle = s
    this.ctx.textAlign = l
    this.ctx.textBaseline = n
    this.ctx.fillText(e, t, a)
    this.ctx.closePath()
  }
}
let ke = document.getElementById('startButton'),
  ve = document.getElementById('help'),
  Ie = document.getElementById('canvas')
ke.addEventListener('click', () => {
  ve.style.display = 'block'
  Ie.style.display = 'block'
  new Se(Ie).run()
  ke.remove()
})
