namespace SpriteKind {
    export const Loot_Pickup_type = SpriteKind.create()
}
function initialmap (map: any[]) {
    mySprite = tiles.getTilesByType(assets.tile`transparency16`)[0]
}
function SpawnLoot (LootType: string, LootValue: number, OnLoot: boolean) {
    Loot = [sprites.create(assets.image`Money_Bag`, SpriteKind.Loot_Pickup_type), sprites.create(assets.image`Bag_of_GOLD`, SpriteKind.Loot_Pickup_type), sprites.create(assets.image`Jewlery_Box`, SpriteKind.Loot_Pickup_type)]
    for (let index = 0; index < 6; index++) {
        tiles.placeOnRandomTile(Loot._pickRandom(), sprites.dungeon.chestOpen)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    currentmap += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    currentmap += 1
})
function levels (maps: number) {
    if (currentmap == 0) {
        tiles.setCurrentTilemap(tilemap`Prototype_bank_entrance`)
    } else if (currentmap == 1) {
        tiles.setCurrentTilemap(tilemap`bank_main_area`)
    } else if (currentmap == 2) {
        tiles.setCurrentTilemap(tilemap`ATM`)
    } else if (maps == 3) {
        tiles.setCurrentTilemap(tilemap`vault_entrance`)
    } else if (maps == 4) {
        tiles.setCurrentTilemap(tilemap`vault_interior`)
    } else if (maps == 5) {
        tiles.setCurrentTilemap(tilemap`level39`)
    }
}
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
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark2, function (sprite, location) {
    game.gameOver(true)
})
let Player1Health: StatusBarSprite = null
let Heister2: Sprite = null
let Loot: Sprite[] = []
let mySprite: tiles.Location = null
let currentmap = 0
scene.setBackgroundImage(assets.image`sky`)
levels(currentmap)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Austin`, SpriteKind.Player))
let Heister1 = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
scene.cameraFollowSprite(Heister1)
tiles.placeOnTile(Heister1, tiles.getTileLocation(20, 36))
currentmap = 0
forever(function () {
    Player1Health = statusbars.create(20, 4, StatusBarKind.Health)
    Player1Health.setColor(9, 2)
    Player1Health.attachToSprite(Heister1)
})
