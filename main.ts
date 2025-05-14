//set up
forever(function() {
    mp.allPlayers()

})
scene.setBackgroundImage(assets.image`background`)
//Players
let Player1 = sprites.create(assets.image`Player1`, SpriteKind.Player)
Player1.setScale(1.5, ScaleAnchor.Middle)
Player1.setStayInScreen(false)
let Player2 = sprites.create(assets.image`Player2`, SpriteKind.Player)
Player2.setScale(1.5, ScaleAnchor.Middle)
Player2.setStayInScreen(false)

//Screen stuff
scene.cameraFollowSprite(Player1)
tiles.setCurrentTilemap(tilemap`level`)

//Movement p1
controller.player1.moveSprite(Player1)

//Movement p2
controller.player2.moveSprite(Player2)
