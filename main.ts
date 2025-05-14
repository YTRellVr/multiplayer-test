//set up
scene.setBackgroundColor(1)

//Players
let Player1 = sprites.create(assets.image`Player1`, SpriteKind.Player)
Player1.setScale(2, ScaleAnchor.Middle)
Player1.setStayInScreen(true)
controller.player1.moveSprite(Player1)
let Player2 = sprites.create(assets.image`Player2`, SpriteKind.Player)
Player2.setScale(2, ScaleAnchor.Middle)
Player2.setStayInScreen(true)
controller.player2.moveSprite(Player2)