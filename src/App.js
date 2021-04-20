import React, { Component } from 'react';
import RxPlayer from "rx-player";
import './App.css';
import ChannelUrl from './data/channels.json';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {videoContainer : null, player : null};
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

  componentDidMount() {
    var vContainer = document.getElementById("video-container");
    this.setVContainer(vContainer);
  }

  setVContainer = (value) => {
    this.setState({ videoContainer: value}, this.onUpdateVContainer);
  };

  onUpdateVContainer = () => {
    const { videoContainer } = this.state;

    var playerInst = new RxPlayer({
        videoElement: videoContainer
    });

    this.setPlayerInst(playerInst);
  };

  setPlayerInst = (value) => {
    this.setState({ player: value}, this.onUpdatePlayerInst);
  };

  onUpdatePlayerInst = () => {
    const { player } = this.state;

    console.log(" channel name : " + ChannelUrl.map((data) => { return data.name }));

    player.loadVideo({
        url: ChannelUrl.map((data) => { return data.url }),
        transport: ChannelUrl.map((data) => { return data.transport }),
        autoPlay: ChannelUrl.map((data) => { return data.autoPlay })
    });

    player.addEventListener("playerStateChange", (playerState) => {
        console.log("player state : " + playerState);
    });
  };

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
