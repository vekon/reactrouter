import React from 'react';

class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			data: [
				{
           "id":1,
           "name":"Foo",
           "age":"20"
        },
        {
           "id":2,
           "name":"Bar",
           "age":"30"
        },
        {
           "id":3,
           "name":"Baz",
           "age":"40"
        }
			]
		};

    this.updateState = this.updateState.bind(this);
    this.clearData = this.clearData.bind(this);
	}

  updateState() {
    var myArr = this.state.data;
    myArr.push({
                 "id":4,
                 "name":"Baz",
                 "age":"50"
              });
    this.setState({data:myArr});
  }

  clearData() {
    this.setState({data:[]});
  }

	render() {
		return (
			<div>
				<Header/>
        <Content dataColl = {this.state.data}/>
        <Footer addData = {this.updateState} clearData = {this.clearData}/>
			</div>
		);
	}
}

export default Home;

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.dataColl.map((person,i)=> <TableRow key={i} data={person}/>)}
        </tbody>
      </table>
    );
  }
}

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.addData}>Add</button>
        <button onClick={this.props.clearData}>Clear</button>
      </div>
    );
  }
}

