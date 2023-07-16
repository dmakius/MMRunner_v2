var MMRunner = MMRunner || {};
MMRunner.PreloadState = {
  preload: function(){
    this.background = this.game.add.sprite(0,0, 'background');
    this.preloadText = this.game.add.bitmapText(this.game.world.centerX, 200, "marioFont", "LOADING..." ,24);
    this.preloadText.anchor.setTo(0.5);
    this.preloadBar = this.game.add.sprite(this.game.width/2, this.game.height/2, 'preloader');
    this.preloadBar.anchor.setTo(0.5, 0.5);
    this.load.setPreloadSprite(this.preloadBar);

    // this.game.load.atlas('megaman', 'assets/megaman.png', 'assets/megaman.json');
    this.game.load.atlas('megaman', 'public/MegaManRunner/assets/spritesheet.png', 'public/MegaManRunner/assets/sprites.json');
    this.game.load.image('logo', 'public/MegaManRunner/assets/megamanlogo.png');
    this.game.load.image('platform', 'public/MegaManRunner/assets/floor1.png');
    this.game.load.image('bullet', 'public/MegaManRunner/assets/bullet.jpg');
    this.game.load.image('healthBar', 'public/MegaManRunner/assets/health.png');
    this.game.load.image('platform2', 'public/MegaManRunner/assets/platform2.png');
    this.game.load.image('platform3', 'public/MegaManRunner/assets/platform3.png');
    this.game.load.image('platform4', 'public/MegaManRunner/assets/platform4.png');
    this.game.load.image('explosionParticle', 'public/MegaManRunner/assets/explosionParticle.png');
    this.game.load.spritesheet('badGuy1', 'public/MegaManRunner/assets/badGuy1.png',34,16);
    this.game.load.spritesheet('badGuy2', 'public/MegaManRunner/assets/badGuy2.png',25,30);
    this.game.load.spritesheet('explosion1' , 'public/MegaManRunner/assets/explosion2.png', 28,31);
    this.game.load.spritesheet('explosion3' , 'public/MegaManRunner/assets/explosion3.png', 16,16);
    this.game.load.spritesheet('smallHealthUp' , 'public/MegaManRunner/assets/small_health_up.png', 12,10);
    this.game.load.spritesheet('largeHealthUp' , 'public/MegaManRunner/assets/large_health_up.png', 14.5,14);

    //audio files
    this.game.load.audio('shoot', 'public/MegaManRunner/assets/audio/shoot.wav');
    this.game.load.audio('landing', 'public/MegaManRunner/assets/audio/landing.wav');
    this.game.load.audio('dead', 'public/MegaManRunner/assets/audio/dead.wav');
    this.game.load.audio('badGuyHit', 'public/MegaManRunner/assets/audio/badGuyHit.wav');
    this.game.load.audio('playerHit', 'public/MegaManRunner/assets/audio/hit.wav');
    this.game.load.audio('smallHealthUp', 'public/MegaManRunner/assets/audio/smallHealthUp.wav');
    this.game.load.audio('largeHealthUp', 'public/MegaManRunner/assets/audio/largeHealthUp.wav');
    
    this.game.load.audio('reflect', 'public/MegaManRunner/assets/audio/reflect.mp3');
    this.game.load.audio('wily', 'public/MegaManRunner/assets/audio/wily.mp3');
  },

  create: function(){
    this.game.state.start('MenuState');
  }
}
