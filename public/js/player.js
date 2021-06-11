function Player(context){
    this.context = context;
    this.sounds = {};
    this.gainNode = context.createGain();

    self = this;

    this.load = function load(url) {
      var request = new XMLHttpRequest();

      request.open('GET', url, true);
      request.responseType = 'arraybuffer';
      request.onload = function(){
        context.decodeAudioData( request.response,
                                 function(buffer){ self.sounds[url] = buffer; },
                                 function(error){ console.log(error) } );
      }

      request.send();
    }

  this.play = function(url, time) {
    var source = context.createBufferSource();
    source.buffer = this.sounds[url];
    source.connect(this.gainNode);
    this.gainNode.connect(context.destination);

    source.start(time);
  }

  this.playSexSequence = function(){
    time = this.context.currentTime;
    this.play('sounds/sex01.mp3', time);
  }

  this.playForestSequence = function(){
    time = this.context.currentTime;
    this.play('sounds/forest.mp3', time);
  }

  this.playLake = function(){
    time = this.context.currentTime;
    this.play('sounds/lake.mp3', time);
  }

  this.playCameraShoot = function(){
    time = this.context.currentTime;
    this.play('sounds/camera-shutter-click-01.mp3', time);
  }

  this.playSoundLand = function(){
    time = this.context.currentTime;
    this.play('sounds/laptop_granja.mp3', time);
  }

  this.playSaturn = function(){
    time = this.context.currentTime;
    this.play('sounds/saturn.mp3', time);
  }

  this.playSiren = function(){
    time = this.context.currentTime;
    this.play('sounds/siren.mp3', time);
  }
}
