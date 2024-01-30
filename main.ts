namespace SpriteKind {
    export const Loot_Pickup_type = SpriteKind.create()
}
function Levels (Currentmap: number) {
    if (Currentmap == 0) {
        tiles.setCurrentTilemap(tilemap`Prototype_bank_entrance`)
        tiles.placeOnTile(Heister1, tiles.getTileLocation(20, 36))
    } else if (Currentmap == 1) {
        let list: number[] = []
        tiles.setCurrentTilemap(tilemap`bank_main_area`)
        tiles.placeOnTile(Heister1, tiles.getTileLocation(14, 29))
        poliice(list)
    } else if (Currentmap == 2) {
        tiles.setCurrentTilemap(tilemap`ATM`)
        tiles.placeOnTile(Heister1, tiles.getTileLocation(9, 20))
    } else if (Currentmap == 3) {
        tiles.setCurrentTilemap(tilemap`vault_entrance`)
        tiles.placeOnTile(Heister1, tiles.getTileLocation(0, 7))
    } else if (Currentmap == 4) {
        tiles.setCurrentTilemap(tilemap`level5`)
        tiles.placeOnTile(Heister1, tiles.getTileLocation(0, 9))
        Loot = [sprites.create(assets.image`Money_Bag`, SpriteKind.Loot_Pickup_type), sprites.create(assets.image`Bag_of_GOLD`, SpriteKind.Loot_Pickup_type), sprites.create(assets.image`Jewlery_Box`, SpriteKind.Loot_Pickup_type)]
        for (let index = 0; index < 10; index++) {
            tiles.placeOnRandomTile(Loot._pickRandom(), assets.tile`myTile33`)
        }
    } else if (Currentmap == 5) {
        tiles.setCurrentTilemap(tilemap`level39`)
        tiles.placeOnTile(Heister1, tiles.getTileLocation(0, 12))
    } else if (Currentmap == 6) {
        tiles.setCurrentTilemap(tilemap`level54`)
        tiles.placeOnTile(Heister1, tiles.getTileLocation(2, 8))
    }
}
function initialmap (map: any[]) {
    playerstartlocation = tiles.getTilesByType(assets.tile`myTile22`)[0]
    tiles.placeOnTile(Heister1, playerstartlocation)
    tiles.setTileAt(playerstartlocation, assets.tile`transparency16`)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Boomerang = sprites.create(assets.image`Boomerang`, SpriteKind.Projectile)
    Boomerang = sprites.createProjectileFromSprite(assets.image`Boomerang`, Heister1, 50, 50)
    Boomerang.follow(myEnemy, 100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    currentmap += 1
    if (nextmap()) {
        Levels(currentmap)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`endofmainarea`, function (sprite, location) {
    currentmap += 1
    if (nextmap()) {
        Levels(currentmap)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    currentmap += 1
    if (nextmap()) {
        Levels(currentmap)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`vent`, function (sprite, location) {
    currentmap += 1
    if (nextmap()) {
        Levels(currentmap)
    }
})
function poliice (Police: any[]) {
    myEnemy = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
    myEnemy.setVelocity(10, 15)
    myEnemy.follow(Heister1)
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(7, 13), assets.tile`rope_tile`)) {
        for (let index = 0; index < 5; index++) {
            tiles.placeOnRandomTile(myEnemy, assets.tile`rope_tile`)
        }
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(24, 16), assets.tile`rope_tile`)) {
        for (let index = 0; index < 5; index++) {
            tiles.placeOnRandomTile(myEnemy, assets.tile`rope_tile`)
        }
    }
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.splash("Game Over")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    currentmap += 1
    if (nextmap()) {
        Levels(currentmap)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    currentmap += 1
    if (nextmap()) {
        Levels(currentmap)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    Player1Health.value += 4
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    currentmap += 1
    if (nextmap()) {
        Levels(currentmap)
    }
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`Medic`, SpriteKind.Player))
    Heister2 = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))
    tiles.placeOnTile(Heister2, tiles.getTileLocation(20, 36))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
})
function nextmap () {
    let mapcount = 0
    return currentmap != mapcount
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(myEnemy, effects.spray, 100)
    sprites.destroy(Boomerang, effects.none, 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    currentmap += 1
    if (nextmap()) {
        Levels(currentmap)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    currentmap += 1
    if (nextmap()) {
        Levels(currentmap)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Player1Health.value += -5
})
let Heister2: Sprite = null
let myEnemy: Sprite = null
let Boomerang: Sprite = null
let playerstartlocation: tiles.Location = null
let Loot: Sprite[] = []
let Player1Health: StatusBarSprite = null
let Heister1: Sprite = null
let currentmap = 0
scene.setBackgroundImage(assets.image`sky`)
currentmap = 0
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Austin`, SpriteKind.Player))
Heister1 = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))
controller.moveSprite(Heister1)
scene.cameraFollowSprite(Heister1)
Levels(currentmap)
Player1Health = statusbars.create(20, 4, StatusBarKind.Health)
Player1Health.value = 150
Player1Health.setColor(4, 2)
Player1Health.attachToSprite(Heister1)
Player1Health.setLabel("HP")
