import '../App.css';
import React from "react";


class Text extends React.Component{
  render() {
    return(
        <h1>{this.props.title}</h1>
    )
  }
}

class Header extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          helpText:"Hello World"
      };
      this.inputClick = this.inputClick.bind(this);
  }

  render(){
    return(
        <div className={"general"}>
          <Text title={"Автосалон"}/>
          <h1>{this.state.helpText}</h1>
          <input placeholder={this.state.helpText} onClick={this.inputClick}/>
          <p>{this.state.helpText === "Hello World" ? "True" : "False"}</p>
        </div>
    )
  }

  inputClick () {
      this.setState({helpText: "Changed"});
      console.log('1');
  }
}

export default Header;
