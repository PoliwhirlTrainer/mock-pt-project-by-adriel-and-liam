game.splash("Press \"A\" for stealth, \"B\" for loud")
if (controller.A.isPressed()) {
    tiles.setCurrentTilemap(tilemap`level1`)
} else if (controller.B.isPressed()) {
    tiles.setCurrentTilemap(tilemap`level2`)
}
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Austin`, SpriteKind.Player))
let Heister1 = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
