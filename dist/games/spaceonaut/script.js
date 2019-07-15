//SPACEONAUT SPACETHOUSAND: THE SPACE SEARCH FOR THE SPACE Crystal
var game = new Phaser.Game(432, 432, Phaser.AUTO, 'phaser', { preload: preload, create: create, update: update, render: render});
//Use this for seeing the whole map at once
//var game = new Phaser.Game(1632, 1632, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render});

	//TUNING VARIABLES
	const SPEED_PLAYER = 750; //the speed of the player. 550
	const ROTATION_CRYSTAL = 120; //how fast the Crystal rotates
	const ROTATE_ANGLE = 15;  //how much you rotate everytime you press an arrow key
	//const TIME_ROTATE = 0.00000000001; //the pause between rotating the player

	const PARTICLE_LIFESPAN = 300;
	const PARTICLE_FREQUENCY = 40;

	const COLLISION_PARTICLE_SPEED = 300;

	const TIME_PUSH = 0.4; //how long the pushing animation stays up for

	const TIME_END = 30; //how long the end screen stays up

	const CAMERA_SECTIONS = 20; //how many moves will it take 
	const TIME_CAMERA = 0.01; //the pause between moving the camera through each of the sections

	const STARTING_ENERGY = 40; //this should probably stay at 40, since 40 canisters look good on the screen
	const TIME_ENERGY = 0.5; //instead, alter how long between each cannister is removed

	const TIME_TO_END = 4; //The gap between hitting the end condition and the game ending
	const WALL_KICK = 10; //how much a player is moved per frame when they get in the wall

	//these are facts from the outside word, not to be tuned directly
	const blockSize = 16; //each block is 16 pixels by 16 pixels
	const roomSize = 25; //each room is 25 blocks wide;
	const roomLength = blockSize*roomSize; //makes sense

	const WIDTH_STATION = 4; //the station is 4 rooms by 4 rooms

	const GAME_ID = 'SPACE2';

	//Stores what the screen is
	const SCREEN_START = 0;
	const SCREEN_GAME = 1;
	const SCREEN_WIN = 2;
	const SCREEN_LOSE = 3;
	var currentScreen;

	var mute = false;

	var background; //the tilemap for the entire game, which is big and empty
	var rooms; 	//the group of all blocks which make up all the rooms
	var player; //the player sprite
	var bubble; //the magneto bubble
	var crystal; //the Crystal
	var startCrystal; //the Crystal that appears at the start

	var cursors; //for arrow keys
	var map; //a 2D array containing what the rooms will be
	var startTime; //when the player started playing

	var rotating; //has the player rotated recently?
	var cameraMoving; //is the camera currently shifting from this room to another one?
	var pressed; //has anything been triggered by the spacebar recently?
	var won; //has the player won the game?
	var lost; //has the player lost the game?
	var hitWallRecently; //have we hit a wall recently?

	//audio
	var musicStart;
	var musicGame;
	var musicEnd;
	var bounceSound;
	var bubbleSound;
	var jetpackSound;
	var stickSound;
	var energySound;

	//text and buttons
	var startText;
	var rulesText;
	var explanation;
	var startButton;
	var endText;
	var scoreText;
	var highScoreText;

	var energyLeft;
	var energyCounters;
	var pointer;

	//input keys
	var muteKey;
	var highestScore;

	//particles
	var bubbleEmitter; //handles a burst of particles when the bubble actives
	var collisionEmitter;
	var winningEmitter;

	var tweenToCrystal;

	function preload () { 
		game.stage.smoothing = false; 

		game.scale.maxWidth = 700;
		game.scale.maxHeight = 700;
		// game.scale.maxWidth = 864;
		// game.scale.maxHeight = 864;

		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.setScreenSize();
		//game.scale.setSize(864, 864);

		game.scale.pageAlignVertically = true;
		//game.scale.pageAlignHorizontally = true;
		game.scale.refresh();



		//loads the rooms JSON
		//corners
		game.load.json('corner1', 'assets/tilemap/corner.json');
		game.load.json('corner2', 'assets/tilemap/corner2.json');
		game.load.json('corner_small', 'assets/tilemap/corner_small.json');
		game.load.json('corner_claw', 'assets/tilemap/corner_claw.json');
		//middles
		game.load.json('crossroad1', 'assets/tilemap/crossroad.json');
		game.load.json('crossroad2', 'assets/tilemap/crossroad2.json');
		game.load.json('vWall', 'assets/tilemap/VerticalWall.json');
		game.load.json('hWall', 'assets/tilemap/HorizontalWall.json');
		//edges
		game.load.json('troom1', 'assets/tilemap/troom.json');
		game.load.json('troom2', 'assets/tilemap/troom2.json');
		game.load.json('edge_field', 'assets/tilemap/edge_field.json');
		game.load.json('edge_slab', 'assets/tilemap/edge_slab.json');
		//loads the sprites that make the rooms
		game.load.spritesheet('walls', 'assets/tilemap/walls.png', 16, 16);

		//loads the big empty room;
		game.load.tilemap('background', 'assets/tilemap/empty.json', null, Phaser.Tilemap.TILED_JSON);

		//load the tileset
		game.load.image('tileImg', 'assets/tilemap/BasicTileset.png');
		game.load.image('spaceBackground', 'assets/image/space.png');
		game.load.image('startButton', 'assets/image/startButton.png');
		//various important sprites
		game.load.spritesheet('player', 'assets/image/astronaut.png', 32, 32); 
		game.load.spritesheet('bubble', 'assets/image/bubble.png', 40, 40);
		game.load.image('crystal', 'assets/image/SpaceCrystal.png');
		game.load.image('counters', 'assets/image/battery.png');
		game.load.image('pointer', 'assets/image/pointer.png');
		game.load.spritesheet('window', 'assets/image/window.png', 160, 160);
		game.load.spritesheet('panel', 'assets/image/panel.png', 80, 80);
		game.load.spritesheet('landingstrip', 'assets/image/LandingStrip.png', 96, 160);
		game.load.image('particles', 'assets/image/particle.png');
		game.load.image('firework', 'assets/image/firework.png');
		//fonts
		game.load.bitmapFont("HeavyData", "assets/font/HeavyData140/HeavyData140.png", "assets/font/HeavyData140/HeavyData140.fnt");
		game.load.bitmapFont("roboto", 'assets/font/Roboto25/font.png', 'assets/font/Roboto25/font.fnt');
		//sounds
		game.load.audio('musicGame', 'assets/sound/spaceonaut.wav');
		game.load.audio('musicStart', 'assets/sound/startMusic.wav');
		game.load.audio('musicEnd', 'assets/sound/victoryMusic.wav');
		game.load.audio('bump', 'assets/sound/clunk.wav');
		game.load.audio('bubbleActive', 'assets/sound/zap.wav');
		game.load.audio('jetpack', 'assets/sound/flames.wav');
		game.load.audio('stick', 'assets/sound/bell.wav');
		game.load.audio('energyChime', 'assets/sound/energyChime.wav');
	}

	//-------------------- SCREEN FUNCTIONS -----------------------
	function create () {
		startScreen();
	}

	function startScreen(){
		currentScreen = SCREEN_START;
		removeAll();

		//creates the background image
		for(var i = 0; i < 10; i++){
			for(var j = 0; j < 10; j++){
				game.add.image(64*i, 64*j, 'spaceBackground');
			}
		}

		startText = game.add.bitmapText(10, 20, 'HeavyData', 'SPACEONAUT\nSPACETHOUSAND', 60);
		startText.align = 'center';

		// rulesText = game.add.bitmapText(60, 200, 'roboto', "Left and right to rotate!\nSpacebar to start and stop!\nRecover the space Crystal!", 25);
		// rulesText.align = 'center';

		startCrystal = game.add.sprite(-20, 250, 'crystal');
		// startCrystal.width = 124;
		// startCrystal.height = 124;
		game.physics.arcade.enable(startCrystal);
		startCrystal.anchor.setTo(.5, .5);
		startCrystal.body.angularVelocity = ROTATION_CRYSTAL;
		startCrystal.body.velocity.x = 200;

		game.add.bitmapText(75, 340, 'roboto', "PRESS SPACE TO BEGIN!", 25);

		//startButton = game.add.button(141, 340, 'startButton', gameScreen);

		musicStart = game.add.audio('musicStart');
		musicStart.loop = true;
		musicStart.play();
		if(mute){
			musicStart.pause();
		}

		muteKey = game.input.keyboard.addKey(Phaser.Keyboard.M);
  		muteKey.onDown.add(mDown, this);

	}

	function gameScreen(){
		removeAll();
		currentScreen = SCREEN_GAME;

		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.time.deltaCap = 1/60.;

		//Makes a Phaser.Tilemap object
		background = game.add.tilemap('background');
		//tells the program to draw this tilemap with tiles I called "tileImg"
		background.addTilesetImage('BasicTileset', 'tileImg');
		background.setCollisionBetween(1,100);

		//create the Background layer, which is the only layer I need
		layer = background.createLayer('Background');
		layer.resizeWorld();
		//set this to the active layer in the map for collision purposes
		background.setLayer(layer);

		//builds the world
		map = createMap(WIDTH_STATION);
		loadRooms(map);

		winningEmitter = game.add.emitter(0, 0, 500);
     	winningEmitter.makeParticles("firework");
     	winningEmitter.width = 20;
     	winningEmitter.height = 20;
     	winningEmitter.gravity = 0;
     	winningEmitter.setXSpeed(-500, 500);
     	winningEmitter.setYSpeed(-500, 500);

		//creates the Crystal
		crystal = game.add.sprite(game.world.width - 200, game.world.height-200, 'crystal');
		//Crystal = game.add.sprite(200, 250, 'Crystal');
		game.physics.arcade.enable(crystal);
		crystal.anchor.setTo(.5, .5);
		crystal.body.immovable = true;
		crystal.body.angularVelocity = ROTATION_CRYSTAL; 
		winningEmitter.x = crystal.x;
		winningEmitter.y = crystal.y;

     	bubbleEmitter = game.add.emitter(0, 0, 500);
		bubbleEmitter.makeParticles('bubble');
		bubbleEmitter.width = 0;
		bubbleEmitter.height = 0;
    	bubbleEmitter.gravity = 0;
		bubbleEmitter.setXSpeed(0, 0);
     	bubbleEmitter.setYSpeed(0, 0);
     	bubbleEmitter.start(false, PARTICLE_LIFESPAN, PARTICLE_FREQUENCY);
     	bubbleEmitter.on = false;
     	bubbleEmitter.setScale(1, 0, 1, 0, PARTICLE_LIFESPAN);
		
		//creates the player
		player = game.add.sprite(100, 200, 'player');
		player.anchor.setTo(.5, .5);
		game.physics.arcade.enable(player);
		player.body.collideWorldBounds = true;
		player.body.bounce.x = 1;
		player.body.bounce.y = 1;
		//player.body.bounce.x = 0;
		//player.body.bounce.y = 0;
		player.angleInternal = 135;
		player.angle = 90;
		player.wall = false;
		game.physics.arcade.velocityFromAngle(player.angleInternal-90, SPEED_PLAYER, player.body.velocity);
		speedStore = player.body.velocity;

		player.animations.add('moving', [0], 5, true);
		player.animations.add('grab1', [1], 5, true);
		player.animations.add('grab2', [2], 5, true)
		player.animations.add('push', [3], 5, true);
		player.animations.play('moving');

		//creates the bubble
		bubble = game.add.sprite(96, 96, 'bubble');
		game.physics.arcade.enable(bubble);
		bubble.body.collideWorldBounds = true;
		bubble.body.bounce.x = 0;
		bubble.body.bounce.y = 0;
		bubble.visible = false;

		bubble.animations.add('go', [0], 5, true);
		bubble.animations.add('stop', [1], 5, true);
		bubble.animations.play('go');

		//creates the cursor keys
		cursors = game.input.keyboard.createCursorKeys();

		//starts the music
		musicGame = game.add.audio('musicGame');
		musicGame.loop = true;
		musicGame.play();
		if(mute){
			musicGame.pause();
		}

		musicEnd = game.add.audio('musicEnd');
		musicEnd.loop = true;

		muteKey = game.input.keyboard.addKey(Phaser.Keyboard.M);
  		muteKey.onDown.add(mDown, this);
		bounceSound = game.add.audio('bump');
		bubbleSound = game.add.audio('bubbleActive');
		jetpackSound = game.add.audio('jetpack');
		stickSound = game.add.audio('stick', 0.4);
		energySound = game.add.audio('energyChime');

		//Remembers when the game began
		startTime = game.time.totalElapsedSeconds();

		//sets our various booleans correctly to start
		rotating = true;
		cameraMoving = false;
		pressed = false;
		won = false;
		lost = false;
		hitWallRecently = false;

		energyLeft = STARTING_ENERGY;
		game.time.events.loop(Phaser.Timer.SECOND*TIME_ENERGY, removeEnergy, game);

		energyCounters = game.add.group();

		for(var i = 0; i < energyLeft-1; i++){
			var counter = energyCounters.create(10*i+10, 20, 'counters');
			counter.fixedToCamera = true;
			counter.number = i;
		}

		pointer = game.add.sprite(410, 30, 'pointer');
		pointer.anchor.setTo(.5, .5);
		pointer.fixedToCamera = true;

     	collisionEmitter = game.add.emitter(0, 0, 500);
     	collisionEmitter.makeParticles('particles');
     	collisionEmitter.gravity = 0;
     	// collisionEmitter.setXSpeed(-200, 200);
     	// collisionEmitter.setYSpeed(-200, 200);

     	tweenToCrystal = game.add.tween(player);
     	tweenToCrystal.to({x: crystal.x, y: crystal.y}, 1200);
     	tweenToCrystal.onComplete.add(startRotate, game);
	}

	function winScreen(){
		currentScreen = SCREEN_WIN;
		removeAll();

		for(var i = 0; i < 10; i++){
			for(var j = 0; j < 10; j++){
				game.add.image(64*i, 64*j, 'spaceBackground');
			}
		}

		endText = game.add.bitmapText(10, 20, 'HeavyData', 'GOOD WORK\nSPACEONAUT!', 60);
		endText.align = 'center';

		var victoryCrystal = game.add.sprite(100, 250, 'crystal');
		game.physics.arcade.enable(victoryCrystal);
		victoryCrystal.anchor.setTo(.5, .5);
		victoryCrystal.body.angularVelocity = ROTATION_CRYSTAL;

		var victoryCrystal2 = game.add.sprite(300, 250, 'crystal');
		game.physics.arcade.enable(victoryCrystal2);
		victoryCrystal2.anchor.setTo(.5, .5);
		victoryCrystal2.body.angularVelocity = ROTATION_CRYSTAL;

		var winningPlayer = game.add.sprite(200, 250, 'player');
		game.physics.arcade.enable(winningPlayer);
		winningPlayer.anchor.setTo(.5, .5);
		winningPlayer.body.angularVelocity = ROTATION_CRYSTAL * -2;
		winningPlayer.animations.add('dancing', [0, 1], 5, true);
		winningPlayer.animations.play('dancing');

		var score = (game.time.totalElapsedSeconds() - startTime).toFixed(2);
		submitHS('A Spaceonaut', score);

		scoreText = game.add.bitmapText(10, 310, 'roboto', 'YOUR TIME: ' + (game.time.totalElapsedSeconds() - startTime).toFixed(2) + " SECONDS", 25);
		highScoreText = game.add.bitmapText(10, 350, 'roboto', 'FASTEST TIME: LOADING', 25);
		game.add.bitmapText(10, 390, 'roboto', "PRESS SPACE TO PLAY AGAIN", 25);

		game.time.events.add(Phaser.Timer.SECOND * TIME_END, startScreen, game);

		musicEnd = game.add.audio('musicEnd');
		musicEnd.loop = true;
		musicEnd.play();
		if(mute){
			musicEnd.pause();
		}
		muteKey = game.input.keyboard.addKey(Phaser.Keyboard.M);
  		muteKey.onDown.add(mDown, this);
	}

	function loseScreen(){
		currentScreen = SCREEN_LOSE;
		removeAll();

		game.add.bitmapText(10, 10, 'roboto', "YOU LOSE", 25);

				for(var i = 0; i < 10; i++){
			for(var j = 0; j < 10; j++){
				game.add.image(64*i, 64*j, 'spaceBackground');
			}
		}

		endText = game.add.bitmapText(10, 20, 'HeavyData', 'OH NO\nSPACEONAUT!', 60);
		endText.align = 'center';

		var losingPlayer = game.add.sprite(200, 250, 'player');
		game.physics.arcade.enable(losingPlayer);
		losingPlayer.anchor.setTo(.5, .5);
		losingPlayer.body.angularVelocity = ROTATION_CRYSTAL*3;
		losingPlayer.animations.add('dancing', [0, 1], 5, true);
		losingPlayer.animations.play('dancing');

		scoreText = game.add.bitmapText(100, 330, 'roboto', 'You died in space :(', 25);
		game.add.bitmapText(10, 370, 'roboto', "PRESS SPACE TO PLAY AGAIN", 25);

		game.time.events.add(Phaser.Timer.SECOND * TIME_END, startScreen, game);

		musicEnd = game.add.audio('musicEnd');
		musicEnd.loop = true;
		musicEnd.play();
		if(mute){
			musicEnd.pause();
		}
		muteKey = game.input.keyboard.addKey(Phaser.Keyboard.M);
  		muteKey.onDown.add(mDown, this);

	}

	function removeAll(){
		game.world.removeAll();
		game.time.removeAll();
		game.sound.stopAll();

		game.camera.x = 0;
		game.camera.y = 0;
	}

	//---------------------------- GAME CREATION FUNCTIONS ----------------------------

	//Creates a map which load room uses to build all the rooms
	//0 is corner1, 1 is corner2, 2 is corner3, 3 is corner4
	//4 is crossroads1, 5 is crossroads, 6 is vWall, 7 is hWall,
	//8 is edge1, 9 is edge2, 10 is edge3, 11 is edge4
	function createMap(rooms){
		var newMap = [];
		for(var i = 0; i < rooms; i++){
			newMap[i] = [];
			for(var j = 0; j < rooms; j++){
				if((i == 0 || i == rooms-1) && (j == 0 || j == rooms-1)){
					//make a corner
					newMap[i][j] = 0;
				}else if((i == 0 || i == rooms-1) || (j == 0 || j == rooms-1)){
					//make an edge
					newMap[i][j] = 8;
				}else{
					//make a middle bit
					newMap[i][j] = 4;
				}


				//add a random number between 0 and 4 to our map number
				// if(game.rnd.normal() > 0){
				// 	newMap[i][j] += 1;
				// }
				newMap[i][j] += game.rnd.integerInRange(0, 3);
				//console.log(i + ", " + j + " is room number " + newMap[i][j]);

				//applies rotation
				if(i != 0 && j == 0){
					newMap[i][j] += 0.1;
				}else if(i == rooms-1 && j != 0){
					newMap[i][j] += 0.2;
				}else if(i != rooms-1 && j == rooms-1){
					newMap[i][j] += 0.3;
				}
			}
		}
		return newMap;
	}

	//Takes the map from createMap and places the sprites in the game world
	function loadRooms(layout){
		rooms = game.add.group();
		rooms.enableBody = true;

		for(var i = 0; i < layout.length; i++){
			for(var j = 0; j < layout[i].length; j++){
				//pulls up the JSON for the room
				var thisRoom;
				var roomNumber =  layout[i][j] - layout[i][j]%1;
				var rotation = layout[i][j] - roomNumber;
				switch(roomNumber){
					case 0:
					//console.log("Room number is " + roomNumber + " so at " + i + ", " + j + " I am making a crowded corner");
					thisRoom = game.cache.getJSON('corner1');
					break;

					case 1:
					//console.log("Room number is " + roomNumber + " so at " + i + ", " + j + " I am making a sparse corner");
					thisRoom = game.cache.getJSON('corner2');
					break;

					case 2:
					//console.log("Room number is " + roomNumber + " so at " + i + ", " + j + " I am making a crowded corner");
					thisRoom = game.cache.getJSON('corner_claw');
					break;

					case 3:
					//console.log("Room number is " + roomNumber + " so at " + i + ", " + j + " I am making a sparse corner");
					thisRoom = game.cache.getJSON('corner_small');
					break;

					case 4:
					//console.log("Room number is " + roomNumber + " so at " + i + ", " + j + " I am making a box middle");
					thisRoom = game.cache.getJSON('crossroad1');
					break;

					case 5:
					//console.log("Room number is " + roomNumber + " so at " + i + ", " + j + " I am making a gem middle");
					thisRoom = game.cache.getJSON('crossroad2');
					break;

					case 6:
					//console.log("Room number is **" + roomNumber + "** so at " + i + ", " + j + " I am making a horizontal wall");
					thisRoom = game.cache.getJSON('hWall');
					break;

					case 7:
					//console.log("Room number is " + roomNumber + " so at " + i + ", " + j + " I am making a vertical wall");
					thisRoom = game.cache.getJSON('vWall');
					break;

					case 8:
					//console.log("Room number is " + roomNumber + " so at " + i + ", " + j + " I am making a tower edge");
					thisRoom = game.cache.getJSON('troom1');
					break;

					case 9:
					//console.log("Room number is " + roomNumber + " so at " + i + ", " + j + " I am making a slots edge");
					thisRoom = game.cache.getJSON('troom2');
					break;

					case 10:
					//console.log("Room number is " + roomNumber + " so at " + i + ", " + j + " I am making a tower edge");
					thisRoom = game.cache.getJSON('edge_field');
					break;

					case 11:
					//console.log("Room number is " + roomNumber + " so at " + i + ", " + j + " I am making a slots edge");
					thisRoom = game.cache.getJSON('edge_slab');
					break;

					default:
					console.log("loadRooms got a request for room #" + roomNumber + " which is all kinds of wrong.");
					break;
				}
				//gets the data for the collision layer.
				var building = thisRoom["layers"][0]["data"];
				var xOffset = j*roomLength+16;
				var yOffset = i*roomLength+16;
				//go through every item in the data array
				for(var k = 0; k < building.length; k++){
					//if there's a block there
					if(building[k] == 1){
						var x;
						var y;
						//I'm adding .01 to each of the markers because for some reason the extraction method isn't working
						if(rotation < 0.01){
							x = (k%25)*16;
							y = ((k-k%25)/25)*16;
						}else if(rotation <= .11){
							y = roomLength - (k%25)*16-16;
							x = ((k-k%25)/25)*16;
						}else if(rotation <= .21){
							x = roomLength - (k%25)*16-16;
							y = roomLength - ((k-k%25)/25)*16-16;
						}else if(rotation <= .31){
							y = (k%25)*16;
							x = roomLength - ((k-k%25)/25)*16-16;
						}
						var block = rooms.create(x+xOffset, y+yOffset, 'walls');
						//the blocks never move or rotate
						block.body.moves = false;
						block.body.allowRotation = false;
						block.body.immovable = true;
						block.animations.add('normal',[game.rnd.integerInRange(0, 5)], 5, true);
						block.animations.play('normal');
					}
				}

				//for one out of four blocks, add a background element
				if(game.rnd.integerInRange(0, 2) == 1){
					if(roomNumber < 4){
						var spaceWindow = game.add.sprite(112 + xOffset, 112+yOffset, 'window');
						spaceWindow.animations.add('starsTwinkle', [0, 1], 1, true);
						spaceWindow.animations.play('starsTwinkle');
					}else if(roomNumber == 5 || roomNumber == 4){
						var panel = game.add.sprite(160 + xOffset, 160+yOffset, 'panel');
						panel.animations.add('panelSwitch', [0, 1, 2, 1], 1.5, true);
						panel.animations.play('panelSwitch');
					}else if(roomNumber == 8){
						if(rotation < 0.01){
							//console.log("Building a 0.1");
							var landing = game.add.sprite(176+xOffset, yOffset, 'landingstrip');
						}else if(rotation <= .11){
							//console.log("Building a 0.11");
							var landing = game.add.sprite(xOffset, 240+yOffset, 'landingstrip');
							landing.angle = -90;
						}else if(rotation <= .21){
							//console.log("Building a 0.21");
							var landing = game.add.sprite(xOffset+240, yOffset+400, 'landingstrip');
							landing.angle = 180;
						}else if(rotation <= .31){
							//console.log("Building a 0.31");
							var landing = game.add.sprite(400+xOffset, yOffset+160, 'landingstrip');
							landing.angle = 90;
						}
						landing.animations.add('safetyLights', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
						landing.animations.play('safetyLights');
					}
				}
			}
		}
	}

	//--------------------------------- UPDATE FUNCTIONS ------------------------------
	function update(){
		switch(currentScreen){
			case SCREEN_START:
			updateStart();
			break;

			case SCREEN_GAME:
			updateGame();
			break;

			case SCREEN_WIN:
			updateWin();
			break;

			case SCREEN_LOSE:
			updateLose();
			break;

			default:
			break;
		}


	}

	//runs everything that might happen in update screen
	function updateStart(){
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
			gameScreen();
		}

		if(startCrystal.body.x > 500 || startCrystal.body.x < -150){
			startCrystal.body.velocity.x = -1*startCrystal.body.velocity.x
		}
	}

	//runs everything that might happen in loss screen
	function updateLose(){
		updateWin();
	}

	//runs everything that might happen in win screen
	function updateWin(){
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
			gameScreen();
		}
		//highScoreText.text = "FASTEST TIME " + highScores;
	}

	//runs everything that happens in the game. A lot of stuff, as it happens
	function updateGame(){
		if(!won && !lost){
			//rotates the player
			if(cursors.left.isDown && rotating){
				rotatePlayer(-ROTATE_ANGLE);
			}
			if(cursors.right.isDown && rotating){
				rotatePlayer(ROTATE_ANGLE);
			}

			//moves and stops the player
			if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) && !pressed){
				if(!player.wall && !bubble.visible){ //if not on a wall and not already bubble, activate bubble
					jetpackSound.stop();
					bubble.visible = true;
					bubble.animations.play('go');
					displayRotation();
					bubbleSound.play();
					bubbleEmitter.on = true;
				}else if(player.wall){ //if on a wall, start moving
					bubble.visible = false;
					game.physics.arcade.velocityFromAngle(player.angleInternal-90, SPEED_PLAYER, player.body.velocity);
					speedStore = player.body.velocity;
					player.wall = false;
					player.body.bounce.x = 1;
					player.body.bounce.y = 1;
					player.animations.play('push');
					jetpackSound.play();
					game.time.events.add(Phaser.Timer.SECOND * TIME_PUSH, stopPush, game);
					//removeEnergy();
				}
				pressed = true;
			}

			if(!game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)){
				pressed = false;
			}

			bubble.body.x = player.body.x-4;
			bubble.body.y = player.body.y-4;
			bubbleEmitter.x = player.body.x+player.body.width/2;
	    	bubbleEmitter.y = player.body.y+player.body.height/2;
			//if the bubble not up or we're on a wall, turn off them particles
			if((!bubble.visible || player.wall) && bubbleEmitter.on){
				bubbleEmitter.on = false;
			}
			//updates the camera
			cameraUpdate();

			//handles collisions functions
			if(!hitWallRecently){
				game.physics.arcade.collide(player, rooms, playerHitWall);
			}
			//The bubble only collides with things when we're not on the wall
			if(!player.wall && bubble.visible){
				game.physics.arcade.overlap(rooms, bubble, bubbleHitWall);
				game.physics.arcade.collide(rooms, bubble, bubbleHitWall);
			}
			game.physics.arcade.collide(player, crystal, playerHitCrystal);
			game.physics.arcade.overlap(player, rooms, playerInWall);

			energyCounters.forEach(removeCounters);

			if(energyLeft <= 0){
				lost = true;
				musicGame.stop();
				musicEnd.play();
				bubbleEmitter.destroy();
				bubble.visible = false;
				player.body.collideWorldBounds = false;
				if((player.body.velocity.x == 0 && player.body.velocity.y == 0) || player.body.velocity == 0){
					game.physics.arcade.velocityFromAngle(player.angleInternal-90, SPEED_PLAYER, player.body.velocity);
					player.body.angularVelocity = ROTATION_CRYSTAL;
				}
				speedStore = player.body.velocity;
				game.time.events.add(Phaser.Timer.SECOND * TIME_TO_END, loseScreen, game);
			}

			//the pointer points towards the space Crystal
			//I'm converting from radials to degrees by hand, like our ancestors did
			pointer.angle = game.physics.arcade.angleToXY(pointer, crystal.body.x, crystal.body.y) * (180/Math.PI);
		}else if(lost){
			player.body.angularVelocity += 5;
			cameraUpdate();
			//console.log(player.body.velocity);
			if(player.body.velocity.x == 0 && player.body.velocity.y == 0){
				//console.log("Player stopped 1. Why???");
				player.body.velocity = speedStore;
			}
			if(!player.inWorld){
				loseScreen();
			}
			// if(player.x < -40 || player.x > game.width + 40 || player.y < -40 || player.y > game.height+40){
			// 	loseScreen();
			// }
		}
	}

	//--------------PLAYER ROTATION FUNCTIONS-------------------------
	function rotatePlayer(angle){
		player.angleInternal += angle;
		if(player.angleInternal > 360){
			player.angleInternal -= 360;
		}
		//rotating = false;
		displayRotation();

		//game.time.events.add(Phaser.Timer.SECOND * TIME_ROTATE, switchRotation, this, rotating);
	}

	function switchRotation(input){
		rotating = !rotating;
	}

	function displayRotation(){
		if(!player.wall && !bubble.visible){
  			player.animations.play('moving');
  			player.angle = player.angleInternal - 45;
  		}else{
  			if(player.internalAngle % 90 == 0){
  				player.animations.play('grab2');
  				player.angle = player.angleInternal;
  			}else{
  				player.animations.play('grab1');
  				player.angle = player.angleInternal - 45;
  			}
  		}
	}

	//--------------PLAYER MOVEMENT FUNCTIONS--------------------------
  	function bubbleHitWall(bubble1, wall){
		if(bubble.visible){
			stickSound.play();

			player.body.velocity.x = 0;
			player.body.velocity.y = 0;
			player.wall = true;
			bubble.animations.play('stop');

			displayRotation();
		}
	}

	function playerHitWall(player, wall){
		//make an explosion of particles when you hit a wall
		if(wall.body.touching.up){
			collisionEmitter.x = wall.body.x+wall.width/2;
			collisionEmitter.y = wall.body.y;
			collisionEmitter.setXSpeed(-COLLISION_PARTICLE_SPEED, COLLISION_PARTICLE_SPEED);
			collisionEmitter.setYSpeed(-COLLISION_PARTICLE_SPEED, 0);
		}else if(wall.body.touching.left){
			collisionEmitter.x = wall.body.x;
			collisionEmitter.y = wall.body.y+wall.height/2;
			collisionEmitter.setXSpeed(-COLLISION_PARTICLE_SPEED, 0);
			collisionEmitter.setYSpeed(-COLLISION_PARTICLE_SPEED, COLLISION_PARTICLE_SPEED);
		}else if(wall.body.touching.down){
			collisionEmitter.x = wall.body.x+wall.width/2;
			collisionEmitter.y = wall.body.y+wall.height;
			collisionEmitter.setXSpeed(-COLLISION_PARTICLE_SPEED, COLLISION_PARTICLE_SPEED);
			collisionEmitter.setYSpeed(0, COLLISION_PARTICLE_SPEED);
		}else if(wall.body.touching.right){
			collisionEmitter.x = wall.body.x+wall.width;
			collisionEmitter.y = wall.body.y+wall.height/2;
			collisionEmitter.setXSpeed(0, COLLISION_PARTICLE_SPEED);
			collisionEmitter.setYSpeed(-COLLISION_PARTICLE_SPEED, COLLISION_PARTICLE_SPEED);
		}else{
			console.log("There is something wrong with wall.body.touching. It's not working how I want it too");
		}

		hitWallRecently = true;
		game.time.events.add(Phaser.Timer.SECOND * 0.01, revertHitWall, game);

		//Sometimes the player would just return the direction they came when they should've
		//been bouncing off in another angle. I don't know why this happens but this
		//will notice when it does and fix it.
		if((wall.body.touching.right || wall.body.touching.left) && (player.body.touching.up || player.body.touching.down)){
			//console.log("probably fucking up the bounce now");
			player.body.velocity.y *= -1;
		}

		collisionEmitter.start(true, 500, null, 20);
		bounceSound.play();
	}

	function revertHitWall(){
		hitWallRecently = false;
	}

	function revertPlayerDimensions(){
		player.width = 32;
		player.height = 32;
	}

	function stopPush(){
		if(!bubble.visible){
			player.animations.play('moving');
		}
		jetpackSound.stop();
	}

	function playerHitCrystal(){
		musicGame.stop();
		musicEnd.play();
		player.body.velocity = 0;
		//Crystal.body.enabled = false;
		bubble.visible = false;
		//player.body.enabled = false;
		//player.angularVelocity = ROTATION_Crystal * -1;
		winningEmitter.start(false, 500, 1, 0);

		tweenToCrystal.start();
		won = true;

		game.time.events.add(Phaser.Timer.SECOND * TIME_TO_END, winScreen, this)
	}

	function startRotate(){
		player.body.angularVelocity = ROTATION_CRYSTAL * -2;
	}

	//the player should not be inside walls
	function playerInWall(){
		console.log("They player is inside a wall. Bad player.")
		if(player.x < game.width/2){
			player.body.x += WALL_KICK;
		}else{
			player.body.x -= WALL_KICK;
		}
	}

	//--------------------- CAMERA MOVEMENT FUNCTIONS -------------------------

	var speedStore; //stores the player's velocity while the camera is moving

	function cameraUpdate(){
		//moves the camera in x coordinate when necessary
		if(player.x < game.camera.x && !cameraMoving){
			stopPlayer();
			cameraMoving = true;
			for(i = 0; i < CAMERA_SECTIONS; i++){
				game.time.events.add(Phaser.Timer.SECOND * TIME_CAMERA * i, moveCameraX, this, -(game.width-32)/CAMERA_SECTIONS);
			}
			game.time.events.add(Phaser.Timer.SECOND*TIME_CAMERA*20, switchMove, this);
		} else if(player.x > game.camera.x + game.width && !cameraMoving){
			stopPlayer();
			cameraMoving = true;
			for(i = 0; i < 20; i++){
				game.time.events.add(Phaser.Timer.SECOND *TIME_CAMERA * i, moveCameraX, this, (game.width-32)/CAMERA_SECTIONS);
			}
			game.time.events.add(Phaser.Timer.SECOND*TIME_CAMERA*20, switchMove, this);
		}

		//does the same in the y coordinate
		if(player.y < game.camera.y && !cameraMoving){
			stopPlayer();
			cameraMoving = true;
			for(i = 0; i < CAMERA_SECTIONS; i++){
				game.time.events.add(Phaser.Timer.SECOND * TIME_CAMERA * i, moveCameraY, this, -(game.height-32)/CAMERA_SECTIONS);
			}
			game.time.events.add(Phaser.Timer.SECOND*TIME_CAMERA*20, switchMove, this);
		} else if(player.y > game.camera.y + game.height && !cameraMoving){
			stopPlayer();
			cameraMoving = true;
			for(i = 0; i < 20; i++){
				game.time.events.add(Phaser.Timer.SECOND * TIME_CAMERA * i, moveCameraY, this, (game.height-32)/20);
			}
			game.time.events.add(Phaser.Timer.SECOND*TIME_CAMERA*20, switchMove, this);
		}

	}

	function stopPlayer(){
		speedStore = player.body.velocity;
		player.body.velocity = 0;
	}

	function switchMove(){
    	cameraMoving = !cameraMoving;
    	player.body.velocity = speedStore;
  	}

  	function moveCameraX(distance){
    	game.camera.x += distance;
  	}

  	function moveCameraY(distance){
  		game.camera.y += distance;
  	}

  	//-----------------------AUDIO FUNCTIONS------------------
  	//mutes and unmutes the music
  	function mDown(){
		mute = !mute;
		if(currentScreen == SCREEN_WIN || currentScreen == SCREEN_LOSE){
			switchMusicState(musicEnd);
		}else if(currentScreen == SCREEN_START){
			switchMusicState(musicStart);
		}else{
			switchMusicState(musicGame);
		}
	}

	function switchMusicState(music){
		if(music.isPlaying){
			music.pause();
		}else{
			music.resume();
		}
	}

	//--------------------HIGH SCORE FUNCTIONS------------------
	function submitHS(name, score){
		var hsLoader = new Phaser.Loader(game);

		if(name == null){
			name = '';
		}

		if(score == null){
			score = '';
		}

		var url = 'http://phaser.magnet.tsoa.nyu.edu/common/data/highScore.php?id=' + GAME_ID + '&name=' + name + '&score=' + (100000 - score);

		console.log(url);

		hsLoader.json('highScore', url);

		hsLoader.onLoadComplete.addOnce(doneLoading);
		hsLoader.start();
	}

	function doneLoading(){
  		console.log("DONE!");

  		var highScores = game.cache.getJSON('highScore');

	  	if(highScores != null){
		  	var hs1     = highScores[0];
		  	var splitHS = hs1.split("|");
		  	var name1   = splitHS[0];
		  	var score1  = (100000 - parseFloat(splitHS[1])).toFixed(2);

		  	// console.log(hs);
		  	console.log(name1);
		  	console.log(score1);
		  	highScoreText.text = "FASTEST TIME: " + score1 + " SECONDS";
	  	}
  	}

  	//-------------------- PARTICLE FUNCTIONS ----------------

  	//------------------- EXTRA FUNCTIONS ---------------------
  	function removeEnergy(){
  		if(bubble.visible){
  			energyLeft--;
  			energySound.play();
  		}
  	}

  	function removeCounters(counter){
  		if(counter.number >= energyLeft){
  			energyCounters.remove(counter, true);
  		}
  	}

  	function render(){
  		//does nothing
  	}
