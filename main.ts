namespace SpriteKind {
    export const Object = SpriteKind.create()
    export const Fire = SpriteKind.create()
    export const Bed = SpriteKind.create()
    export const HOLYCHICKENUGGET = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fire, function (sprite, otherSprite) {
    Catplayer.sayText("Ouch, that burns!", 2000, false)
    scene.cameraShake(4, 2000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gamestarted == false) {
        gamestarted = true
        music.stopAllSounds()
        music.play(music.createSong(assets.song`one of two songs`), music.PlaybackMode.LoopingInBackground)
        tiles.setCurrentTilemap(tilemap`midday`)
        Catplayer = sprites.create(assets.image`Player sprite cat`, SpriteKind.Player)
        Catplayer.setPosition(46, 58)
        Catplayer.setStayInScreen(true)
        Stick = sprites.create(assets.image`Stick`, SpriteKind.Food)
        Stick.setPosition(randint(0, 50), randint(0, 50))
        Stick.setStayInScreen(true)
        Oak_tree = sprites.create(assets.image`Oak tree`, SpriteKind.Object)
        Oak_tree.setPosition(144, 55)
        Oak_tree.setStayInScreen(true)
        Log = sprites.create(assets.image`log`, SpriteKind.Object)
        Log.setStayInScreen(true)
        Log.setPosition(126, 85)
        Campfire = sprites.create(assets.image`normal campfire`, SpriteKind.Fire)
        Campfire.setStayInScreen(true)
        Campfire.setPosition(37, 42)
        Tree = sprites.create(assets.image`Pine`, SpriteKind.Object)
        Tree.setPosition(20, 98)
        Tree.setStayInScreen(true)
        Canopy_bed = sprites.create(assets.image`Canopy bed`, SpriteKind.Bed)
        Canopy_bed.setPosition(80, 24)
        info.setLife(3)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bed, function (sprite, otherSprite) {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`copie`), music.PlaybackMode.LoopingInBackground)
    if (Math.percentChance(50)) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`one of two songs`), music.PlaybackMode.LoopingInBackground)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Catplayer,
    assets.animation`Cat run left`,
    100,
    false
    )
})
info.onScore(60, function () {
    if (true) {
        DUCK = sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b c . . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            b d d d b b d 5 5 5 4 4 4 4 4 b 
            b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
            b d c 5 5 5 5 d 5 5 5 5 5 b . . 
            c d d c d 5 5 b 5 5 5 5 5 5 b . 
            c b d d c c b 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, SpriteKind.Enemy)
        music.stopAllSounds()
        music.play(music.createSong(assets.song`slow drum 4`), music.PlaybackMode.LoopingInBackground)
        tiles.setCurrentTilemap(tilemap`Nightime but tilemap`)
        game.splash("RUN FROM THE DUCK")
        DUCK.follow(Catplayer, 33)
        DUCK.setPosition(2, 2)
    }
    info.startCountdown(20)
})
info.onCountdownEnd(function () {
    sprites.destroy(DUCK)
    music.stopAllSounds()
    music.play(music.createSong(assets.song`one of two songs 1`), music.PlaybackMode.LoopingInBackground)
    if (true) {
        tiles.setCurrentTilemap(tilemap`midday`)
        sprites.destroy(DUCK)
        music.stopAllSounds()
        music.play(music.createSong(assets.song`one of two songs`), music.PlaybackMode.LoopingInBackground)
    }
})
info.onScore(10, function () {
    game.splash("This the entire game.", "It get interesting later...")
})
info.onScore(100, function () {
    scene.setBackgroundImage(assets.image`End screen`)
    music.stopAllSounds()
    music.play(music.createSong(assets.song`copie`), music.PlaybackMode.LoopingInBackground)
    sprites.destroy(Catplayer)
    sprites.destroy(Stick)
    sprites.destroy(Oak_tree)
    sprites.destroy(Log)
    sprites.destroy(Campfire)
    sprites.destroy(Tree)
    sprites.destroy(Canopy_bed)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Catplayer,
    assets.animation`cat run right`,
    100,
    false
    )
})
info.onScore(80, function () {
    if (true) {
        DUCK = sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b c . . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            b d d d b b d 5 5 5 4 4 4 4 4 b 
            b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
            b d c 5 5 5 5 d 5 5 5 5 5 b . . 
            c d d c d 5 5 b 5 5 5 5 5 5 b . 
            c b d d c c b 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, SpriteKind.Enemy)
        DUCK.setVelocity(50, 50)
        music.stopAllSounds()
        music.play(music.createSong(assets.song`slow drum 2`), music.PlaybackMode.LoopingInBackground)
        tiles.setCurrentTilemap(tilemap`Nightime but tilemap`)
        game.splash("RUN FROM THE DUCK")
        DUCK.follow(Catplayer, 33)
    }
    info.startCountdown(20)
})
info.onLifeZero(function () {
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    if (true) {
        Stick.setPosition(randint(0, 160), randint(0, 120))
    }
})
info.onScore(20, function () {
    if (true) {
        DUCK = sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b c . . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            b d d d b b d 5 5 5 4 4 4 4 4 b 
            b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
            b d c 5 5 5 5 d 5 5 5 5 5 b . . 
            c d d c d 5 5 b 5 5 5 5 5 5 b . 
            c b d d c c b 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, SpriteKind.Enemy)
        music.stopAllSounds()
        music.play(music.createSong(assets.song`slow drum 3`), music.PlaybackMode.LoopingInBackground)
        game.splash("RUN FROM THE DUCK")
        tiles.setCurrentTilemap(tilemap`Nightime but tilemap`)
        DUCK.follow(Catplayer, 33)
        DUCK.setPosition(2, 2)
    }
    info.startCountdown(20)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Object, function (sprite, otherSprite) {
    Catplayer.sayText("Ouch, That hurt!", 2000, false)
})
info.onScore(40, function () {
    if (true) {
        DUCK = sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b c . . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            b d d d b b d 5 5 5 4 4 4 4 4 b 
            b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
            b d c 5 5 5 5 d 5 5 5 5 5 b . . 
            c d d c d 5 5 b 5 5 5 5 5 5 b . 
            c b d d c c b 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, SpriteKind.Enemy)
        music.stopAllSounds()
        music.play(music.createSong(assets.song`Slow drum`), music.PlaybackMode.LoopingInBackground)
        tiles.setCurrentTilemap(tilemap`Nightime but tilemap`)
        game.splash("RUN FROM THE DUCK")
        DUCK.follow(Catplayer, 33)
        DUCK.setPosition(2, 2)
    }
    info.startCountdown(20)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    DUCK.setPosition(2, 2)
})
let DUCK: Sprite = null
let Canopy_bed: Sprite = null
let Tree: Sprite = null
let Campfire: Sprite = null
let Log: Sprite = null
let Oak_tree: Sprite = null
let Stick: Sprite = null
let Catplayer: Sprite = null
let gamestarted = false
scene.setBackgroundImage(assets.image`Title screen`)
music.play(music.createSong(assets.song`title screen theme 1`), music.PlaybackMode.LoopingInBackground)
gamestarted = false
game.onUpdateInterval(100, function () {
    controller.moveSprite(Catplayer)
})
