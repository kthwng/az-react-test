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

      </div>

    );

  }

 

}

 

ReactDOM.render( <Test />, document.getElementById('root'));

 

export default Test; 