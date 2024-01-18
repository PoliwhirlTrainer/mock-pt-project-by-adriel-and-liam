game.splash("Press \"A\" for stealth, \"B\" for loud")
if (controller.A.isPressed()) {
    tiles.setCurrentTilemap(tilemap`level1`)
} else if (controller.B.isPressed()) {
    tiles.setCurrentTilemap(tilemap`level2`)
}
