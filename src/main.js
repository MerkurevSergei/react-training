import React from 'react';
class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        content: Array(10).fill(<div className="cell">cell</div>)
      };
    }
    
    componentDidMount() {
      for (let i = 0; i < this.props.height; i++) {
        for (let j = 0; j < this.props.length; j++) {
          this.state.content.push(<div className="cell">cell</div>)
        }
      }     
    }  

    render() {
      return (
        <div className="main-panel">
          {this.state.content}
        </div>
      );
    }
  }

  export default Main;