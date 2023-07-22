var Asteroids = Asteroids || {};
Asteroids.BootState = {
  init: function(){
  },

  preload: function(){
    this.game.load.image('background', 'public/Asteroids/assets/background.png');
		this.game.load.image('preloader', 'public/Asteroids/assets/preloader.png'); 
    this.game.load.image('space', 'public/Asteroids/assets/space.jpg');
  },

  create: function(){
    this.game.state.start('PreloadState');
  }
}
