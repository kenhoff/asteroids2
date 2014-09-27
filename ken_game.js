
window.onload = function() {

	//require_testing = require ("./require_test.js")

	var game = new Phaser.Game("100", "100", Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

	var logo;

	function preload () {

		game.load.image('logo', 'phaser.png');
		game.physics.startSystem(Phaser.Physics.ARCADE);
		cursors = game.input.keyboard.createCursorKeys();

	}

	function create () {

		var worldSize = 500
		game.world.setBounds(0, 0, worldSize, worldSize)
		logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
		game.physics.arcade.enable(logo);

	}

	function update () {
		var cameraSpeed = 1
		
		// console.log("main game loop")
		if (cursors.left.isDown) {
			game.camera.x -= cameraSpeed
		}
		if (cursors.right.isDown) {
			game.camera.x += cameraSpeed
		}

		if (cursors.up.isDown) {
			game.camera.y -= cameraSpeed
		}
		if (cursors.down.isDown) {
			game.camera.y += cameraSpeed
		}
	}

	function render () {
		game.debug.cameraInfo(game.camera, 500, 32)
	}

};

