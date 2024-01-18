game.splash("Press \"A\" for stealth, \"B\" for loud")
if (controller.A.isPressed()) {
    tiles.setCurrentTilemap(tilemap`level1`)
} else if (controller.B.isPressed()) {
    tiles.setCurrentTilemap(tilemap`level2`)
}
mp.setPlayerIndicatorsVisible(true)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Austin`, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`Luxembourg`, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
