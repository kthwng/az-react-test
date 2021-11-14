import React from "react"

import ReactDOM from "react-dom"

 

class Test extends React.Component{

  constructor(props){

    super(props);

    this.state = {buttonToggle: true};

    this.whenClicked = this.whenClicked.bind(this);

  }

 

whenClicked() { this.setState ( prevState => ({

    buttonToggle: !prevState.buttonToggle

}));

} 

 

  render(){ 

    return(

      <div className="say-hello">

      <center>

      <h1>say hello!</h1>

      <br />

      <button onClick={this.whenClicked}>

       {this.state.buttonToggle ? 'hi!' : 'hello!'}

      </button>

      </center>

      <br /> 

      <div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/645796100?h=3b5d629a3d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="yt5s.com-French CanCan ! Animation.mp4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

      <br /> 

      <script id="22fa801b-032c-f0df-2aec-0b982c8f4682-vod-6c32300c-d386-7b25-9b68-d3d60a2ecf3f" width="100%" height="100%" src="https://player.dacast.com/js/player.js?contentId=22fa801b-032c-f0df-2aec-0b982c8f4682-vod-6c32300c-d386-7b25-9b68-d3d60a2ecf3f"  class="dacast-video"></script>

      </div>

    );

  }

 

}

 

ReactDOM.render( <Test />, document.getElementById('root'));

 

export default Test; 