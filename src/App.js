import React from 'react';
import { connect } from 'react-redux';

import { addName, removeName } from './actions';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input: 'the Input',
    };
  }

  handleChangeInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addName() {
    this.props.addName(this.state.input);
  }

  removeName(index, e) {
    e.preventDefault();
    this.props.removeName(index);
  }

  render() {
    let { input } = this.state;
    let { names } = this.props;

    return (
      <div>
        <div>
          <h1>Test-React-Redux</h1>
          <h4>This input field contains value of an immutable state property. That means it cannot be changed</h4>
          <input type="text" value={input} name='input' onChange={this.handleChangeInput.bind(this)} />
          <button type="submit" onClick={this.addName.bind(this)} >Add</button>
        </div>
        <div>
          <h3>List of Names</h3>
          <ul>
            { names.map((name, index) => {
              return (
                <li key={index} >{name} &nbsp;&nbsp;<a href="" onClick={this.removeName.bind(this, index)} ><i className="fa fa-trash" ></i></a></li>
              );
            }) }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    names: state.get('nameList')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addName: (payload) => dispatch(addName(payload)),
    removeName: (payload) => dispatch(removeName(payload)),
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
