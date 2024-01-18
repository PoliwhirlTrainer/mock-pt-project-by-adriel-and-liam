controller.player2.onEvent(ControllerEvent.Connected, function () {
    Heister2 = sprites.create(assets.image`Luxembourg`, SpriteKind.Player)
    controller.moveSprite(Heister2)
    splitScreen.setSplitScreenEnabled(true)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, Heister1)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.VerticalLeftHalf)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, Heister2)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.VerticalRightHalf)
})
let Heister2: Sprite = null
let Heister1: Sprite = null
game.splash("Press \"A\" for stealth, \"B\" for loud")
if (controller.A.isPressed()) {
    tiles.setCurrentTilemap(tilemap`level1`)
} else if (controller.B.isPressed()) {
    tiles.setCurrentTilemap(tilemap`level2`)
}
Heister1 = sprites.create(assets.image`Austin`, SpriteKind.Player)
Heister1 = mp.playerSelector(mp.PlayerNumber.One)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
