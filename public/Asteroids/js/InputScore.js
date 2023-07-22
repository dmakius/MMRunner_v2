var Asteroids = Asteroids || {};
Asteroids.InputScoreState = {

  create: function(){   
    if(mobileGame){
      $('.modal').css("display","block");
      $('#modal-score').text(Asteroids.GlobalsScore);
    }

    // this.getScores();

    //create score for game just played
    this.newScore = new Object();;
    this.newScore.score = Asteroids.GlobalsScore;
   

    this.background = this.game.add.tileSprite(0, 0, 700, 500, 'space');
    this.background.autoScroll(-100, 0);


    this.game.title = this.game.add.bitmapText(this.game.world.centerX, 50, "newFont", "INPUT SCORE" , 24);
    this.game.title.anchor.setTo(0.5);
    this.game.title2 = this.game.add.bitmapText(this.game.world.centerX-150, this.game.world.centerY, "newFont", "Name: " , 24);
    this.game.title2 = this.game.add.bitmapText(this.game.world.centerX-150, this.game.world.centerY + 50, "newFont", "Score: "+  this.newScore.score , 24);


    this.username =  this.game.add.bitmapText(this.game.world.centerX-10, this.game.world.centerY, "newFont", "" , 18);
    var username = this.username;
    
    this.game.input.keyboard.onPressCallback = function (letter, t, k) {
      username.setText(username.text += letter);
    };


    this.continueSign = this.game.add.bitmapText(this.game.world.centerX, 400, "newFont", "Press SPACEBAR/Start to Continue", 18);
    this.continueSign.anchor.setTo(0.5);

    this.delete = this.game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE);
    this.start = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
  
   
  },

  update:function(){
    if(mobileGame == false){
      if(this.delete.isDown){
        this.deleteLetter();
      }
      if(this.username.text != "" && this.start.isDown ){
        console.log("Add score function starting");
        // this.addScore(this.username.text,this.newScore.score);
        // this.saveScore(this.username.text, this.newScore.score);
        this.game.state.start('ScoreState');
    }
   }else{
    if(this.username.text != "" && startGame ){
      console.log("Add score function starting");
      this.addScore(this.username.text, this.newScore.score);
    //   this.saveScore(this.username.text, this.newScore.score);
      this.game.state.start('ScoreState');
   }
  }
},
  saveScore: function(username, score){
    $.ajax({
      type: "POST",
      url: '/Score/Create',
      data:{
        name: username,
        score: score
      },
      success: function(response){
          console.log(response);
      } 
    });
  },

  addScore: function(username, score){
    // Asteroids.GameState.highScores.push({
    //   _id:"blank",
    //   name: username,
    //   score: score});
  },

  deleteLetter: function(){
    this.username.text = "";
  },

  getScores: function(){
    $.ajax({
      type: "GET",
      url: '/Score',
      async: false,
      success: function(response){
        console.log(response);
        Asteroids.GameState.highScores = response;
      }
      });
  },
 
}