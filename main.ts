//set up
scene.setBackgroundImage(assets.image`background`)
//Players
let Player1 = sprites.create(assets.image`Player1`, SpriteKind.Player)
Player1.setScale(1.5, ScaleAnchor.Middle)
let Player2 = sprites.create(assets.image`Player2`, SpriteKind.Player)
Player2.setScale(1.5, ScaleAnchor.Middle)

//Screen stuff
Player1.setStayInScreen(false)
Player2.setStayInScreen(false)
scene.cameraFollowSprite(Player1)
tiles.setCurrentTilemap(tilemap`level`)

//Movement p1
controller.player1.moveSprite(Player1)

//Movement p2
controller.player2.moveSprite(Player2)

