namespace SpriteKind {
    export const Loot_Pickup_type = SpriteKind.create()
}
function Pickuploot (LootType: string, LootValue: number, OnLoot: boolean) {
    Loot = [sprites.create(assets.image`Money_Bag`, SpriteKind.Loot_Pickup_type), sprites.create(assets.image`Bag_of_GOLD`, SpriteKind.Loot_Pickup_type), sprites.create(assets.image`Jewlery_Box`, SpriteKind.Loot_Pickup_type)]
}
let Loot: Sprite[] = []
game.splash("Press \"A\" for stealth, \"B\" for loud")
if (controller.A.isPressed()) {
    tiles.setCurrentTilemap(tilemap`level1`)
} else if (controller.B.isPressed()) {
    tiles.setCurrentTilemap(tilemap`level2`)
}
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Austin`, SpriteKind.Player))
let Heister1 = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`Luxembourg`, SpriteKind.Player))
let Heister2 = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
splitScreen.setSplitScreenEnabled(true)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, Heister1)
splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.VerticalLeftHalf)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, Heister2)
splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.VerticalRightHalf)
