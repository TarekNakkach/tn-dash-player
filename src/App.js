import React, { Component } from 'react';
import RxPlayer from "rx-player";
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {player : null, videoContainer : null};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <video id="video-container" className="App-video" controls muted autoPlay loop> </video>
        </header>
      </div>     
    );
  }

  /**
   * @Description : After rendering the App divs we'll :
   * 1 - create the player instance
   * 2 - load the given video uri
   * 3 - register all needed player events
   * 
   * */
  componentDidMount() {
    this.state.videoContainer = document.getElementById("video-container");

    this.state.player = new RxPlayer({
        videoElement: this.state.videoContainer
    });

    this.loadVideo("https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd");

    this.state.player.addEventListener("playerStateChange", (playerState) => {
        console.log("player state : " + playerState);
    });
  }
  
  /**
   * @Description : loadVideo - private API to load the DASH video uri to be played
   * @params uri - the DASH video uri
   * 
   * */
  loadVideo(uri) {
    this.state.player.loadVideo({
        url: uri,
        transport: "dash",
        autoPlay: true
    });
  }

  /**
   * @Description : stopVideo - stop the video playback
   * @params container - the video container id
   * 
   * */
  stopVideo(container) {
    container.pause();
    container.currentTime = 0;
  }

  /**
   * @Description : pauseVideo - pause/play the video playback
   * @params container - the video container id
   * @params isPause - true to pause playback, false to play it again
   * 
   * */
  pauseVideo(container, isPause) {
    if (isPause === true) {
      container.pause();
    } else {
      container.play();
    }
  }

  /**
   * @Description : forwardVideo - forward the video playback
   * @params container - the video container id
   * @params duration - forward step in seconds
   * 
   * */
  forwardVideo(container, duration) {
    container.currentTime += parseInt(duration);
  }  

  /**
   * @Description : reweindVideo - reweind the video playback
   * @params container - the video container id
   * @params duration - reweind step in seconds
   * 
   * */
  reweindVideo(container, duration) {
    container.currentTime -= parseInt(duration);
  }
}

export default App;
