
window.onload = function() {

	//require_testing = require ("./require_test.js")

	var game = new Phaser.Game("100", "100", Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

	var random = new Phaser.RandomDataGenerator()

	var logo;

	function preload () {

		game.load.image('ship', 'playerShip1_blue.png');
		game.load.image("star", "star1.png")
		game.physics.startSystem(Phaser.Physics.P2JS);
		cursors = game.input.keyboard.createCursorKeys();

	}

	function create () {

		var worldSize = 5000
		var starCount = 1000
		// create stars here

		for (var i = 0; i < starCount; i++) {
			game.add.sprite(random.between(0, worldSize), random.between(0, worldSize), "star")
		}
		game.world.setBounds(0, 0, worldSize, worldSize)
		ship = game.add.sprite(game.world.centerX, game.world.centerY, 'ship');
		game.physics.p2.enable(ship);
		ship.anchor.setTo(0.5, 0.5)

		game.camera.follow(ship)


	}

	function update () {
		var shipSpeed = 100
		var shipForwardSpeed = 100
		var shipRotateSpeed = 10;


		ship.body.setZeroForce()
		ship.body.angularAcceleration = 0;

		// console.log("main game loop")
		if (cursors.left.isDown) {
			ship.body.angularForce -= shipRotateSpeed
		}
		else if (cursors.right.isDown) {
			ship.body.angularForce += shipRotateSpeed
		}
		if (cursors.up.isDown) {
			ship.body.thrust(shipSpeed)
		
		}
	}

	function render () {
		game.debug.cameraInfo(game.camera, 500, 32)
	}

};

