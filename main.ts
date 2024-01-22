namespace SpriteKind {
    export const Loot_Pickup_type = SpriteKind.create()
}
function SpawnLoot (LootType: string, LootValue: number, OnLoot: boolean) {
	
}
controller.player2.onEvent(ControllerEvent.Connected, function () {
    let Heister2: Sprite = null
    controller.moveSprite(Heister2)
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    let Heister1: Sprite = null
    controller.moveSprite(Heister1)
})
tiles.setCurrentTilemap(tilemap`Prototype_bank_entrance`)
forever(function () {
	
})
