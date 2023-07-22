var Asteroids = Asteroids || {};
Asteroids.ScoreState = {
  preload: function(){
    startGame = false;
    // this.sortScores();
  },
  
  create: function(){
    // this.highScores = Asteroids.GameState.highScores;

    this.background = this.game.add.tileSprite(0, 0, 700, 500, 'space');
    this.start = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    this.game.title = this.game.add.bitmapText(this.game.world.centerX, 30, "newFont", "High Scores" , 36);
    this.game.title.anchor.setTo(0.5);

    this.highScores = [{"player": "Hashem", "score":"613000"},
    {"player":"The Rebbe", "score":'77000'}, 
    {"player":"HaMidinah","score":'19480'}, 
    {"player":"Ha Olam", "score":"5773"}, 
    {"player":"Satan", "score":"6660"}, 
    {"player":"The Bar Mitzvah Boy", "score":"1300"},
    {"player":"The Hertz Chumash", "score":"586"}] 

    for(var x = 0; x < this.highScores.length; x++){
      this.playerName = this.game.add.bitmapText(50, (x* 50) +100, "newFont", this.highScores[x].player,18);
      this.playerScores = this.game.add.bitmapText(550, (x* 50) +100, "newFont", this.highScores[x].score,18);

      if(this.start.isDown){
        this.game.state.start('MenuState');
        }
    }
     
    this.continueSign = this.game.add.bitmapText(this.game.world.centerX, 475, "newFont", "Press SPACEBAR/Start to Continue", 18);
    this.continueSign.anchor.setTo(0.5);
    this.start = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  },
  

  update:function(){
    this.background.autoScroll(-100, 0);
    if(mobileGame){
      if(startGame){
        this.game.state.start('MenuState');
      }
    }else{
      if(this.start.isDown){
        this.game.state.start('MenuState');
      }
    }
   
  },

  sortScores: function(){
    var scores = Asteroids.GameState.highScores;
    for(var x = 0; x < Asteroids.GameState.highScores.length; x++){
      for(var y= 0; y < Asteroids.GameState.highScores.length; y++){
        if(scores[x].score > scores[y].score){
          var temp = scores[x];
          scores[x] = scores[y];
          scores[y] = temp;
        } 
      }
    }
    Asteroids.GameState.highScores = scores;
  }
}