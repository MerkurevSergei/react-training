import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  render() {
    let key = this.props.k;
    let data = this.state.data;
    return (<div className="cell color-black" key={key}>{data.get(data)}</div>);
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      data: new Map()
    };
  }

  componentDidMount() {
    this.renderBoard()
    this.fetchData()
  }

  renderBoard() {
    var rows = []
    for (let i = 0; i < this.props.height; i++) {
      var row = []
      for (let j = 0; j < this.props.length; j++) {
        let key = i * 10 + j;
        row.push(<Cell k={key} data={this.state.data} />)
      }
      rows.push(<div className="row" key={i}>{row}</div>)
    }
    this.setState({ content: rows })
  }

  fetchData() {
    const apiUrl = 'http://localhost:8080/machines';
    fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((response) => response.json())
      .then((response) => {this.updateData(response)});
  }

  updateData(response) {
    let result = new Map();
    response.forEach(el => {
      let key = (el.location.y - 1) * 10 + el.location.x - 1;
      result.set(key, el)
    }); 
    this.setState({data : result})
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