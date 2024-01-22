namespace SpriteKind {
    export const Loot_Pickup_type = SpriteKind.create()
}
function SpawnLoot (LootType: string, LootValue: number, OnLoot: boolean) {
    Loot = [sprites.create(assets.image`Money_Bag`, SpriteKind.Loot_Pickup_type), sprites.create(assets.image`Bag_of_GOLD`, SpriteKind.Loot_Pickup_type), sprites.create(assets.image`Jewlery_Box`, SpriteKind.Loot_Pickup_type)]
}
controller.player2.onEvent(ControllerEvent.Connected, function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`Luxembourg`, SpriteKind.Player))
    Heister2 = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))
    tiles.placeOnTile(Heister2, tiles.getTileLocation(20, 36))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
    PLayer2Health = statusbars.create(20, 4, StatusBarKind.Health)
    PLayer2Health.setColor(9, 2)
    PLayer2Health.attachToSprite(Heister2)
    Heister2.setStayInScreen(true)
})
let Player1Health: StatusBarSprite = null
let PLayer2Health: StatusBarSprite = null
let Heister2: Sprite = null
let Loot: Sprite[] = []
scene.setBackgroundImage(assets.image`sky`)
tiles.setCurrentTilemap(tilemap`Prototype_bank_entrance`)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Austin`, SpriteKind.Player))
let Heister1 = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
tiles.placeOnTile(Heister1, tiles.getTileLocation(20, 36))
controller.moveSprite(Heister1)
scene.cameraFollowSprite(Heister1)
forever(function () {
    Player1Health = statusbars.create(20, 4, StatusBarKind.Health)
    Player1Health.setColor(9, 2)
    Player1Health.attachToSprite(Heister1)
})
