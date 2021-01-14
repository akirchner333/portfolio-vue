//SPACEONAUT SPACETHOUSAND: THE SPACE SEARCH FOR THE SPACE TREE
var game = new Phaser.Game(432, 432, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render});

	//TUNING VARIABLES
	const SPEED_PLAYER = 500; //the speed of the player. 550
	const ROTATION_TREE = 120; //how fast the tree rotates
	const ROTATE_ANGLE = 45;  //how much you rotate everytime you press an arrow key
	const TIME_ROTATE = 0.1; //the pause between rotating the player

	const TIME_BUBBLE = 1;	//how many seconds the bubble stays on the screen. 0.5
	const TIME_PUSH = 0.4; //how long the pushing animation stays up for

	const TIME_END = 30; //how long the end screen stays up
	const TIME_SLEEP = 5; //how long you sleep for

	const CAMERA_SECTIONS = 20; //how many moves will it take 
	const TIME_CAMERA = 0.02; //the pause between moving the camera through each of the sections

	const STARTING_OXYGEN = 40; //this should probably stay at 40, since 40 canisters look good on the screen
	const TIME_OXYGEN = 1.2; //instead, alter how long between each cannister is removed

	const GAME_MUSIC_ON = true;

	//these are facts from the outside word, not to be tuned directly
	const blockSize = 16; //each block is 16 pixels by 16 pixels
	const roomSize = 25; //each room is 25 blocks wide;
	const roomLength = blockSize*roomSize; //maakes sense

	const WIDTH_STATION = 4; //the station is 4 rooms by 4 rooms

	//Stores what the screen is
	const SCREEN_START = 0;
	const SCREEN_GAME = 1;
	const SCREEN_WIN = 2;
	const SCREEN_LOSE = 3;
	var currentScreen;

	var background; //the tilemap for the entire game, which is big and empty
	var rooms; 	//the group of all blocks which make up all the rooms
	var player; //the player sprite
	var bubble; //the magneto bubble
	var trees; //the tree
	var zzzz;

	var cursors; //for arrow keys
	var map; //a 2D array containing what the rooms will be
	var startTime; //when the player started playing

	var rotating; //has the player rotated recently?
	var cameraMoving; //is the camera currently shifting from this room to another one?
	var pressed; //has anything been triggered by the spacebar recently?

	var playerSpeed; //the current playerSpeed

	//audio
	var musicStart;
	var musicGame;
	var musicEnd;
	var bounceSound;
	var bubbleSound;
	var jetpackSound;
	var stickSound;
	var voices;

	//text and buttons
	var startText;
	var rulesText;
	var explanation;
	var endText;
	var scoreText;

	var oxygenLeft;
	var oxygenCounters;
	var pointer;

	var qGroup;


	function preload () { 
		game.scale.pageAlignVertically = true;
		game.scale.pageAlignHorizontally = true;
		game.scale.refresh();

		//loads the rooms JSON
		game.load.json('crossroad1', 'assets/tilemap/crossroad.json');
		game.load.json('corner1', 'assets/tilemap/corner.json');
		game.load.json('troom1', 'assets/tilemap/troom.json');
		game.load.json('crossroad2', 'assets/tilemap/crossroad2.json');
		game.load.json('corner2', 'assets/tilemap/corner2.json');
		game.load.json('troom2', 'assets/tilemap/troom2.json');
		//loads the sprites that make the rooms
		game.load.spritesheet('walls', 'assets/tilemap/walls.png', 16, 16);

		//loads the big empty room;
		game.load.tilemap('background', 'assets/tilemap/empty.json', null, Phaser.Tilemap.TILED_JSON);

		//load the tileset
		game.load.image('tileImg', 'assets/tilemap/BasicTileset.png');
		game.load.image('spaceBackground', 'assets/image/space.png');
		//various important sprites
		game.load.spritesheet('player', 'assets/image/astronaut.png', 32, 32); 
		game.load.spritesheet('bubble', 'assets/image/bubble.png', 40, 40);
		game.load.image('tree', 'assets/image/tree.png');
		game.load.image('counters', 'assets/image/canister.png');
		game.load.image('pointer', 'assets/image/pointer.png');
		game.load.image('q', 'assets/image/Q.png');
		game.load.spritesheet('sleep', 'assets/image/zzzz.png', 32, 32);
		//fonts
		game.load.bitmapFont("HeavyData", "assets/font/HeavyData72/HeavyData72.png", "assets/font/HeavyData72/HeavyData72.fnt");
		game.load.bitmapFont("roboto", 'assets/font/Roboto25/font.png', 'assets/font/Roboto25/font.fnt');
		//sounds
		game.load.audio('musicGame', 'assets/sound/spaceonaut.wav');
		game.load.audio('musicStart', 'assets/sound/startMusic.wav');
		game.load.audio('musicEnd', 'assets/sound/victoryMusic.wav');
		game.load.audio('bump', 'assets/sound/clunk.wav');
		game.load.audio('bubbleActive', 'assets/sound/zap.wav');
		game.load.audio('jetpack', 'assets/sound/flames.wav');
		game.load.audio('stick', 'assets/sound/bell.wav');

		game.load.audio('voice1', 'assets/sound/Voice1.wav');
		game.load.audio('voice2', 'assets/sound/Voice2.wav');
		game.load.audio('voice3', 'assets/sound/Voice3.wav');
		game.load.audio('voice4', 'assets/sound/Voice4.wav');
		game.load.audio('voice5', 'assets/sound/Voice5.wav');
	}

	//-------------------- SCREEN FUNCTIONS -----------------------
	function create () {
		startScreen();
	}

	var startText2;

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
		startText2 = game.add.bitmapText(60, 150, 'HeavyData', 'FULL ALPHABET EDITION', 30);

		rulesText = game.add.bitmapText(60, 220, 'roboto', "A-Z to do things!\nRecover the space tree!", 25);
		rulesText.align = 'center';

		game.add.bitmapText(75, 360, 'roboto', "PRESS B TO BEGIN!", 25);

		//startButton = game.add.button(141, 340, 'startButton', gameScreen);

		if(GAME_MUSIC_ON){
			musicStart = game.add.audio('musicStart', 0.7);
			musicStart.loop = true;
			musicStart.play();
		}

	}

	function gameScreen(){
		removeAll();
		currentScreen = SCREEN_GAME;

		playerSpeed = SPEED_PLAYER;

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
		
		//creates the player
		player = game.add.sprite(120, 190, 'player');
		player.anchor.setTo(.5, .5);
		game.physics.arcade.enable(player);
		player.body.collideWorldBounds = true;
		player.body.bounce.x = 1;
		player.body.bounce.y = 1;
		player.angleInternal = 135;
		player.angle = 90;
		player.wall = false;
		game.physics.arcade.velocityFromAngle(player.angleInternal-90, playerSpeed, player.body.velocity);
		player.moveAngle = player.angleInternal-90;

		player.animations.add('moving', [0], 5, true);
		player.animations.add('grab1', [1], 5, true);
		player.animations.add('grab2', [2], 5, true)
		player.animations.add('push', [3], 5, true);
		player.animations.play('moving');

		//creates the bubble
		bubble = game.add.sprite(120, 190, 'bubble');
		game.physics.arcade.enable(bubble);
		bubble.body.collideWorldBounds = true;
		bubble.body.bounce.x = 0;
		bubble.body.bounce.y = 0;
		bubble.visible = false;

		bubble.animations.add('go', [0], 5, true);
		bubble.animations.add('stop', [1], 5, true);
		bubble.animations.play('go');

		zzzz = game.add.sprite(0, 0, 'sleep');
		zzzz.animations.add('sleep', [0, 1, 2, 3], 5, true);
		zzzz.animations.play('sleep');
		zzzz.visible = false;

		//creates the cursor keys
		cursors = game.input.keyboard.createCursorKeys();

		//builds the world
		map = createMap(WIDTH_STATION);
		loadRooms(map);

		//creates the tree
		trees = game.add.group();
		trees.enableBody = true;
		var tree = trees.create(game.world.width - 200, game.world.height-200, 'tree');
		//game.physics.arcade.enable(tree);
		tree.anchor.setTo(.5, .5);
		tree.body.angularVelocity = ROTATION_TREE; 

		qGroup = game.add.group();
		qGroup.enableBody = true;

		//starts the music
		if(GAME_MUSIC_ON){
			musicGame = game.add.audio('musicGame', 0.7);
			musicGame.loop = true;
			musicGame.play();
		}
		bounceSound = game.add.audio('bump');
		bubbleSound = game.add.audio('bubbleActive');
		jetpackSound = game.add.audio('jetpack');
		stickSound = game.add.audio('stick', 0.4);

		//Remembers when the game began
		startTime = game.time.totalElapsedSeconds();

		//sets our various booleans correctly to start
		rotating = true;
		cameraMoving = false;
		pressed = false;
		playerCollide = true;
		sleeping = false;
		mute = false;

		oxygenLeft = STARTING_OXYGEN;
		game.time.events.repeat(Phaser.Timer.SECOND*TIME_OXYGEN, STARTING_OXYGEN+1, removeOxygen, game);
		oxygenCounters = game.add.group();

		for(var i = 0; i < oxygenLeft-1; i++){
			var counter = oxygenCounters.create(10*i+10, 20, 'counters');
			counter.fixedToCamera = true;
		}

		pointer = game.add.sprite(410, 30, 'pointer');
		pointer.anchor.setTo(.5, .5);
		pointer.fixedToCamera = true;

		var voice1 = game.add.audio('voice1');
		var voice2 = game.add.audio('voice2');
		var voice3 = game.add.audio('voice3');
		var voice4 = game.add.audio('voice4');
		var voice5 = game.add.audio('voice5');
		voices = [voice1, voice2, voice3, voice4, voice5];

		addKeys();
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

		var victoryTree = game.add.sprite(100, 250, 'tree');
		game.physics.arcade.enable(victoryTree);
		victoryTree.anchor.setTo(.5, .5);
		victoryTree.body.angularVelocity = ROTATION_TREE;

		var victoryTree2 = game.add.sprite(300, 250, 'tree');
		game.physics.arcade.enable(victoryTree2);
		victoryTree2.anchor.setTo(.5, .5);
		victoryTree2.body.angularVelocity = ROTATION_TREE;

		var winningPlayer = game.add.sprite(200, 250, 'player');
		game.physics.arcade.enable(winningPlayer);
		winningPlayer.anchor.setTo(.5, .5);
		winningPlayer.body.angularVelocity = ROTATION_TREE;
		winningPlayer.animations.add('dancing', [0, 1], 5, true);
		winningPlayer.animations.play('dancing');

		scoreText = game.add.bitmapText(10, 330, 'roboto', 'YOUR TIME: ' + (game.time.totalElapsedSeconds() - startTime).toFixed(2) + " SECONDS", 25);
		game.add.bitmapText(10, 400, 'roboto', "PRESS P TO PLAY AGAIN", 25);

		game.time.events.add(Phaser.Timer.SECOND * TIME_END, startScreen, game);

		if(GAME_MUSIC_ON){
			musicEnd = game.add.audio('musicEnd', 0.7);
			musicEnd.loop = true;
			musicEnd.play();
		}
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
		losingPlayer.body.angularVelocity = ROTATION_TREE*3;
		losingPlayer.animations.add('dancing', [0, 1], 5, true);
		losingPlayer.animations.play('dancing');

		scoreText = game.add.bitmapText(100, 330, 'roboto', 'You died in space :(', 25);
		game.add.bitmapText(10, 400, 'roboto', "PRESS P TO PLAY AGAIN", 25);

		game.time.events.add(Phaser.Timer.SECOND * TIME_END, startScreen, game);

		if(GAME_MUSIC_ON){
			musicEnd = game.add.audio('musicEnd', 0.7);
			musicEnd.loop = true;
			musicEnd.play();
		}

	}

	function removeAll(){
		game.world.removeAll();
		game.time.removeAll();
		game.sound.stopAll();
		game.input.keyboard.reset();

		game.camera.x = 0;
		game.camera.y = 0;
	}

	//---------------------------- GAME CREATION FUNCTIONS ----------------------------

	//Creates a map which load room uses to build all the rooms
	//0 is corner1, 1 is corner2, 2 is crossroads1, 3 is crossroads, 4 is edge1, 5 is edge2
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
					newMap[i][j] = 4;
				}else{
					//make a middle bit
					newMap[i][j] = 2;
				}

				if(game.rnd.normal() > 0){
					newMap[i][j] += 1;
				}

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
					thisRoom = game.cache.getJSON('corner1');
					break;

					case 1:
					thisRoom = game.cache.getJSON('corner2');
					break;

					case 2:
					thisRoom = game.cache.getJSON('crossroad1');
					break;

					case 3:
					thisRoom = game.cache.getJSON('crossroad2');
					break;

					case 4:
					thisRoom = game.cache.getJSON('troom1');
					break;

					default:
					thisRoom = game.cache.getJSON('troom2');
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
		if(game.input.keyboard.isDown(Phaser.Keyboard.B)){
			gameScreen();
		}
	}

	//runs everything that might happen in loss screen
	function updateLose(){
		updateWin();
	}

	//runs everything that might happen in win screen
	function updateWin(){
		if(game.input.keyboard.isDown(Phaser.Keyboard.P)){
			gameScreen();
		}
	}

	//runs everything that happens in the game. A lot of stuff, as it happens
	function updateGame(){
		//moves and stops the player
		// if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) && !pressed){
		// 	if(!player.wall){ //if not on a wall, activate the bubble
		// 		jetpackSound.stop();
		// 		bubble.visible = true;
		// 		bubble.animations.play('go');
		// 		game.time.events.add(Phaser.Timer.SECOND * TIME_BUBBLE, removeBubble, this);
		// 		displayRotation();
		// 		bubbleSound.play();
		// 	}else{ //if on a wall, start moving
		// 		bubble.visible = false;
		// 		game.physics.arcade.velocityFromAngle(player.angleInternal-90, SPEED_PLAYER, player.body.velocity);
		// 		player.wall = false;
		// 		player.body.bounce.x = 1;
		// 		player.body.bounce.y = 1;
		// 		player.animations.play('push');
		// 		jetpackSound.play();
		// 		game.time.events.add(Phaser.Timer.SECOND * TIME_PUSH, stopPush, game);
		// 	}
		// 	pressed = true;
		// }

		// if(!game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)){
		// 	pressed = false;
		// }

		bubble.body.x = player.body.x-4;
		bubble.body.y = player.body.y-4;
		//updates the camera
		cameraUpdate();

		//handles collisions functions
		if(playerCollide){
			game.physics.arcade.collide(player, rooms, playerHitWall);
			game.physics.arcade.collide(player, trees, winScreen);
			game.physics.arcade.overlap(player, rooms, loseScreen);
		}

		//The bubble only collides with things when we're not on the wall
		if(!player.wall && bubble.visible){
			game.physics.arcade.overlap(rooms, bubble, bubbleHitWall);
			game.physics.arcade.collide(rooms, bubble, bubbleHitWall);
		}
		game.physics.arcade.collide(qGroup, rooms);
		//oxygenCounters.forEach(removeCounters);

		if(oxygenLeft < 0){
			loseScreen();
		}

		//the pointer points towards the space tree
		//I'm converting from radials to degrees by hand, like our ancestors did
		var tree = trees.getBottom();
		pointer.angle = game.physics.arcade.angleToXY(pointer, tree.body.x, tree.body.y) * (180/Math.PI);
	}

	//--------------PLAYER ROTATION FUNCTIONS-------------------------
	function rotatePlayer(angle){
		player.angleInternal += angle;
		if(player.angleInternal > 360){
			player.angleInternal -= 360;
		}else if(player.angleInternal < 0){
			player.angleInternal += 360;
		}
		rotating = false;
		displayRotation();

		game.time.events.add(Phaser.Timer.SECOND * TIME_ROTATE, switchRotation, this, rotating);
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
  	function removeBubble(){
  		if(!player.wall){
  			bubble.visible = false;
  			player.animations.play('moving');
  			player.angle = player.angleInternal - 45;
  		}
  	}

  	function bubbleHitWall(bubble1, wall){
		if(bubble.visible){
			if(!mute){
				stickSound.play();
			}

			player.body.velocity.x = 0;
			player.body.velocity.y = 0;
			player.wall = true;
			bubble.animations.play('stop');

			displayRotation();
		}
	}

	function playerHitWall(){
		if(!mute){
			bounceSound.play();
		}
	}

	function stopPush(){
		if(!bubble.visible){
			player.animations.play('moving');
		}
		jetpackSound.stop();
	}

	//--------------------- CAMERA MOVEMENT FUNCTIONS -------------------------

	function cameraUpdate(){
		//moves the camera in x coordinate when necessary
		if(player.x < game.camera.x && !cameraMoving){
			cameraMoving = true;
			for(i = 0; i < CAMERA_SECTIONS; i++){
				game.time.events.add(Phaser.Timer.SECOND * TIME_CAMERA * i, moveCameraX, this, -(game.width-32)/CAMERA_SECTIONS);
			}
			game.time.events.add(Phaser.Timer.SECOND*.5, switchMove, this);
		} else if(player.x > game.camera.x + game.width && !cameraMoving){
			cameraMoving = true;
			for(i = 0; i < 20; i++){
				game.time.events.add(Phaser.Timer.SECOND *TIME_CAMERA * i, moveCameraX, this, (game.width-32)/CAMERA_SECTIONS);
			}
			game.time.events.add(Phaser.Timer.SECOND*.5, switchMove, this);
		}

		//does the same in the y coordinate
		if(player.y < game.camera.y && !cameraMoving){
			cameraMoving = true;
			for(i = 0; i < CAMERA_SECTIONS; i++){
				game.time.events.add(Phaser.Timer.SECOND * TIME_CAMERA * i, moveCameraY, this, -(game.height-32)/CAMERA_SECTIONS);
			}
			game.time.events.add(Phaser.Timer.SECOND*.5, switchMove, this);
		} else if(player.y > game.camera.y + game.height && !cameraMoving){
			cameraMoving = true;
			for(i = 0; i < 20; i++){
				game.time.events.add(Phaser.Timer.SECOND * TIME_CAMERA * i, moveCameraY, this, (game.height-32)/20);
			}
			game.time.events.add(Phaser.Timer.SECOND*.5, switchMove, this);
		}

	}

	function switchMove(){
    	cameraMoving = !cameraMoving;
  	}

  	function moveCameraX(distance){
    	game.camera.x += distance;
  	}

  	function moveCameraY(distance){
  		game.camera.y += distance;
  	}

  	//------------------- EXTRA FUNCTIONS ---------------------
  	function removeOxygen(){
  		oxygenLeft--;
  		oxygenCounters.remove(oxygenCounters.getTop(), true);
  		//console.log(oxygenLeft + "Left!");
  	}

  	// function removeCounters(counter){
  	// 	if(counter != null){
	  // 		if(counter.number >= oxygenLeft){
	  // 			oxygenCounters.remove(counter, true);
	  // 		}
  	// 	}
  	// }

  	function render(){
  		//does nothing
  	}

  	//-----------------Control Functions------------------------

  	var keyA;
  	var keyB;
  	var keyC;
  	var keyD;
  	var keyE;
  	var keyF;
  	var keyG;
  	var keyH;
  	var keyI;
  	var keyJ;
  	var keyK;
  	var keyL;
  	var keyM;
  	var keyN;
  	var keyO;
  	var keyP;
  	var keyQ;
  	var keyR;
  	var keyS;
  	var keyT;
  	var keyU;
  	var keyV;
  	var keyW;
  	var keyX;
  	var keyY;
  	var keyZ;

  	function addKeys(){
  		//rotates left
  		keyA = game.input.keyboard.addKey(Phaser.Keyboard.A);
  		keyA.onHoldCallback = aHeld;
  		//BUBBLE
  		keyB = game.input.keyboard.addKey(Phaser.Keyboard.B);
  		keyB.onDown.add(bDown, this);
  		//CHANGE
  		keyC = game.input.keyboard.addKey(Phaser.Keyboard.C);
  		keyC.onDown.add(cDown, this);
  		//ROTATE RIGHT
  		keyD = game.input.keyboard.addKey(Phaser.Keyboard.D);
  		keyD.onHoldCallback = dHeld;
  		//EXTRA
  		keyE = game.input.keyboard.addKey(Phaser.Keyboard.E);
  		keyE.onDown.add(eDown, this);
  		//FAST
  		keyF = game.input.keyboard.addKey(Phaser.Keyboard.F);
  		keyF.onDown.add(fDown, this);
  		//GO
  		keyG = game.input.keyboard.addKey(Phaser.Keyboard.G);
  		keyG.onDown.add(gDown, this);
  		//HIDE
  		keyH = game.input.keyboard.addKey(Phaser.Keyboard.H);
  		keyH.onDown.add(hDown, this);
  		//IMMATERIAL
  		keyI = game.input.keyboard.addKey(Phaser.Keyboard.I);
  		keyI.onDown.add(iDown, this);
  		//JERK
  		keyJ = game.input.keyboard.addKey(Phaser.Keyboard.J);
  		keyJ.onDown.add(jDown, this);
  		//KILL
  		keyK = game.input.keyboard.addKey(Phaser.Keyboard.K);
  		keyK.onDown.add(loseScreen, this);
  		//LEAK
  		keyL = game.input.keyboard.addKey(Phaser.Keyboard.L);
  		keyL.onDown.add(removeOxygen, this);
  		//MUTE
  		keyM = game.input.keyboard.addKey(Phaser.Keyboard.M);
  		keyM.onDown.add(mDown, this);
  		//NOPE
  		keyN = game.input.keyboard.addKey(Phaser.Keyboard.N);
  		keyN.onDown.add(nDown, this);
  		//OXYGEN
  		keyO = game.input.keyboard.addKey(Phaser.Keyboard.O);
  		keyO.onDown.add(oDown, this);
  		//'PORT
  		keyP = game.input.keyboard.addKey(Phaser.Keyboard.P);
  		keyP.onDown.add(pDown, this);
  		//Q
  		keyQ = game.input.keyboard.addKey(Phaser.Keyboard.Q);
  		keyQ.onDown.add(qDown, this);
  		//REBUILD
  		keyR = game.input.keyboard.addKey(Phaser.Keyboard.R);
  		keyR.onDown.add(rDown, this);
  		//SLOW
  		keyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
  		keyS.onDown.add(sDown, this);
  		//TREE
  		keyT = game.input.keyboard.addKey(Phaser.Keyboard.T);
  		keyT.onDown.add(tDown, this);
  		//Uncle
  		keyU = game.input.keyboard.addKey(Phaser.Keyboard.U);
  		keyU.onDown.add(startScreen, this);
  		//Voice
  		keyV = game.input.keyboard.addKey(Phaser.Keyboard.V);
  		keyV.onDown.add(vDown, this);
  		//Win
  		keyW = game.input.keyboard.addKey(Phaser.Keyboard.W);
  		keyW.onDown.add(winScreen, this);
  		//X-Axis
  		keyX = game.input.keyboard.addKey(Phaser.Keyboard.X);
  		keyX.onDown.add(xDown);
  		//Y-Axis
  		keyY = game.input.keyboard.addKey(Phaser.Keyboard.Y);
  		keyY.onDown.add(yDown);
  		//ZZZZ
  		keyZ = game.input.keyboard.addKey(Phaser.Keyboard.Z);
  		keyZ.onDown.add(zDown);

  	}

  	//rotates the player left
  	function aHeld(){
  		if(rotating && !sleeping){
  			rotatePlayer(-ROTATE_ANGLE);
  		}
  	}

  	//activates the bubble
  	function bDown(){
		if(!player.wall && !sleeping){ //if not on a wall, activate the bubble
			jetpackSound.stop();
			bubble.visible = true;
			bubble.animations.play('go');
			game.time.events.add(Phaser.Timer.SECOND * TIME_BUBBLE, removeBubble, this);
			displayRotation();
			if(!mute){
				bubbleSound.play();
			}
		}
  	}

  	function cDown(){
  		rooms.forEach(scrambleTiles);
  	}
  	function scrambleTiles(sprite){
  		sprite.animations.add('new',[game.rnd.integerInRange(0, 11)], 5, true);
		sprite.animations.play('new');
  	}

  	function dHeld(){
  		if(rotating && !sleeping){
			rotatePlayer(ROTATE_ANGLE);
		}
  	}

  	function eDown(){
  		var newTree = trees.create(game.rnd.between(0, game.world.width), game.rnd.between(0, game.world.height), 'tree');
  		newTree.anchor.setTo(.5, .5);
		newTree.body.angularVelocity = ROTATION_TREE;
  	}

  	function fDown(){
  		playerSpeed *= 2;
  	}

  	function gDown(){
  		if(player.wall && !sleeping){
	  		bubble.visible = false;
			game.physics.arcade.velocityFromAngle(player.angleInternal-90, playerSpeed, player.body.velocity);
			player.moveAngle = player.angleInternal-90;
			player.wall = false;
			player.body.bounce.x = 1;
			player.body.bounce.y = 1;
			player.animations.play('push');
			if(!mute){
				jetpackSound.play();
			}
			game.time.events.add(Phaser.Timer.SECOND * TIME_PUSH, stopPush, game);
		}
  	}

  	function hDown(){
  		if(player.alpha != 0){
  			player.alpha = 0;
  		}else{
  			player.alpha = 1;
  		}
  	}

  	var playerCollide;

  	function iDown(){
  		playerCollide = !playerCollide;
  	}

  	function jDown(){
  		if(!sleeping){
	  		var xMove = game.rnd.between(-50, 50);
	  		var yMove = game.rnd.between(-50, 50);
	  		// if(game.rnd.between(-1, 1) < 0){
	  		// 	xMove *= -1;
	  		// }
	  		// if(game.rnd.between(-1, 1) < 0){
	  		// 	yMove *= -1;
	  		// }
	  		//console.log(xMove + ", " + yMove);
	  		player.x += xMove;
	  		player.y += yMove;
  		}
  	}

  	var mute;

  	function mDown(){
  		mute = !mute;
  		if(musicGame.isPlaying){
  			musicGame.pause();
  		}else{
  			musicGame.resume();
  		}
  	}

  	function nDown(){
  		player.body.velocity.x *= -1;
  		player.body.velocity.y *= -1;
  		//game.physics.arcade.velocityFromAngle(player.angleInternal-90, -2*player.body.velocity, player.body.velocity);
  	}

  	//can't see the new counters I'm add currently
  	//makes me sad
  	function oDown(){
  		oxygenLeft++;
  		var lastCounter = oxygenCounters.getTop();
  		var counter = oxygenCounters.create(lastCounter.x+10, 20, 'counters');
		counter.fixedToCamera = true;
  	}

  	function pDown(){
  		player.x = game.rnd.between(0, game.world.width);
  		player.y = game.rnd.between(0, game.world.height);
  	}

  	function qDown(){
  		var q = qGroup.create(player.x, player.y, 'q');
  		q.body.collideWorldBounds = true;
		q.body.bounce.x = 1;
		q.body.bounce.y = 1;
		//fly you beautiful, pointless Q!
		// game.physics.arcade.velocityFromAngle(game.rand.between(0, 360), game.rand.between(400, 600), q.body.velocity);
		game.physics.arcade.velocityFromAngle(game.rnd.between(0, 360), 700, q.body.velocity);
		//q.body.velocity.x = 100;
  	}

  	function rDown(){
  		rooms.removeAll(true);
  		map = createMap(WIDTH_STATION);
		loadRooms(map);
		//game.world.bringToTop(oxygenCounters)
		pointer.bringToTop();

		oxygenCounters.removeAll(true);
		oxygenCounters = game.add.group();

		for(var i = 0; i < oxygenLeft-1; i++){
			var counter = oxygenCounters.create(10*i+10, 20, 'counters');
			counter.fixedToCamera = true;
		}
		
  	}

  	function sDown(){
  		playerSpeed /= 2;
  	}

  	function tDown(){
  		var tree = trees.getBottom();
  		tree.x = game.rnd.between(0, game.world.width);
  		tree.y = game.rnd.between(0, game.world.height);
  	}

  	var voiceClip = 0;
  	function vDown(){
  		voices[voiceClip].play();
  		voiceClip++;
  		if(voiceClip >= 5){
  			voiceClip = 0;
  		}
  	}

  	function xDown(){
  		//console.log("Player angle: " + player.angleInternal);
  		if(!sleeping){
	  		if(player.angleInternal <= 180){
	  			player.x += 20;
	  		}else{
	  			player.x -=20;
	  		}
  		}
  	}

  	function yDown(){
  		//console.log("Player angle: " + player.angleInternal);
  		if(!sleeping){
	  		if(player.angleInternal >= 90 && player.angleInternal < 270){
	  			player.y += 20;
	  		}else{
	  			player.y -= 20;
	  		}
  		}
  	}

  	var sleeping;

  	function zDown(){
  		player.body.velocity.x = 0;
  		player.body.velocity.y = 0;
  		zzzz.bringToTop();
  		zzzz.x = player.x+player.width-10;
  		zzzz.y = player.y-player.height-10;
  		zzzz.visible = true;
  		game.time.events.add(Phaser.Timer.SECOND*TIME_SLEEP, wakeUp, this);
  		sleeping = true;
  	}
  	function wakeUp(){
  		zzzz.visible = false;
  		sleeping = false;
  		if(!player.wall){
  			game.physics.arcade.velocityFromAngle(player.moveAngle, playerSpeed, player.body.velocity);
  		}
  	}