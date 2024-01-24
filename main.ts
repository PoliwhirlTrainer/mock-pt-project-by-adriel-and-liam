namespace SpriteKind {
    export const Loot_Pickup_type = SpriteKind.create()
}
function SpawnLoot (LootType: string, LootValue: number, OnLoot: boolean) {
    Loot = [sprites.create(assets.image`Money_Bag`, SpriteKind.Loot_Pickup_type), sprites.create(assets.image`Bag_of_GOLD`, SpriteKind.Loot_Pickup_type), sprites.create(assets.image`Jewlery_Box`, SpriteKind.Loot_Pickup_type)]
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    currentmap += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    currentmap += 1
})
function levels (maps: number) {
    if (maps == 0) {
        tiles.setCurrentTilemap(tilemap`Prototype_bank_entrance`)
        tiles.placeOnTile(Heister1, tiles.getTileLocation(20, 36))
    } else if (maps == 1) {
    	
    } else if (maps == 2) {
    	
    } else if (maps == 3) {
    	
    } else if (maps == 4) {
    	
    } else if (maps == 5) {
    	
    }
}
controller.player2.onEvent(ControllerEvent.Connected, function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`Medic`, SpriteKind.Player))
    Heister2 = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))
    tiles.placeOnTile(Heister2, tiles.getTileLocation(20, 36))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
})
let Player1Health: StatusBarSprite = null
let Heister2: Sprite = null
let Loot: Sprite[] = []
let Heister1: Sprite = null
scene.setBackgroundImage(assets.image`sky`)
let currentmap = 0
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Austin`, SpriteKind.Player))
Heister1 = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
controller.moveSprite(Heister1)
scene.cameraFollowSprite(Heister1)
forever(function () {
    Player1Health = statusbars.create(20, 4, StatusBarKind.Health)
    Player1Health.setColor(9, 2)
    Player1Health.attachToSprite(Heister1)
})
