var MMRunner = MMRunner || {};
MMRunner.BootState = {
  init: function(){
  },

  preload: function(){
  	this.game.load.bitmapFont('marioFont', 'public/MegaManRunner/assets/fonts/mario20_0.png', 'public/MegaManRunner/assets/fonts/mario20.fnt');
  	this.game.load.image('background', 'public/MegaManRunner/assets/background.jpg');
 	  this.game.load.image('preloader', 'public/MegaManRunner/assets/preloader.png');
  },

  create: function(){
    this.game.state.start('PreloadState');
  }
}
