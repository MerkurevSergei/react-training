import React from 'react';
class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        content: []
      };
    }
    
    componentDidMount() {
      var rows = []
      for (let i = 0; i < this.props.height; i++) {
        var row = []
        for (let j = 0; j < this.props.length; j++) {
          row.push(<div className="cell">{i*10 + j}</div>)
        }
        rows.push(<div className="row">{row}</div>)
      }
      this.setState({content: rows})
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