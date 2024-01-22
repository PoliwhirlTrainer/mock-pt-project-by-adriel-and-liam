namespace SpriteKind {
    export const Loot_Pickup_type = SpriteKind.create()
}
function SpawnLoot (LootType: string, LootValue: number, OnLoot: boolean) {
    Loot = [sprites.create(assets.image`Money_Bag`, SpriteKind.Loot_Pickup_type), sprites.create(assets.image`Bag_of_GOLD`, SpriteKind.Loot_Pickup_type), sprites.create(assets.image`Jewlery_Box`, SpriteKind.Loot_Pickup_type)]
}
controller.player2.onEvent(ControllerEvent.Connected, function () {
    let Heister2: Sprite = null
    controller.moveSprite(Heister2)
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    let Heister1: Sprite = null
    controller.moveSprite(Heister1)
})
let Loot: Sprite[] = []
tiles.setCurrentTilemap(tilemap`Prototype_bank_entrance`)
forever(function () {
	
})
