let Heister2: Sprite = null
let Heister1: Sprite = null
game.splash("Press \"A\" for stealth, \"B\" for loud")
if (controller.A.isPressed()) {
    Heister1 = sprites.create(assets.image`Austin`, SpriteKind.Player)
    Heister2 = sprites.create(assets.image`Luxembourg`, SpriteKind.Player)
    tiles.setCurrentTilemap(tilemap`Bank_Entrance_Outside`)
} else {
	
}
controller.moveSprite(Heister1)
controller.player2.moveSprite(Heister2)
scene.cameraFollowSprite(Heister1)
