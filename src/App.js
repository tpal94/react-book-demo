import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as bookAction from './actions/bookAction';

class App extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     
    this.state = {
      name: ''
    }
  }

  handleChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let book = {
      name: this.state.name
    }
    this.setState({
      name: ''
    });
    this.props.createBook(book);
  }

  listView(data, index){
    return (
      <div className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {data.name}
          </li>
        </div>
        <div className="col-md-2">
          <button onClick={(e) => this.deleteBook(e, index)} className="btn btn-danger">
            Remove
          </button>
        </div>
    </div> 
    )
  }

  deleteBook(e, index){
    e.preventDefault();
    this.props.deleteBook(index);
  }

  render() {

    return(
      <div className="container">
        <hr />
        <div>
          <h3>Add Book Form</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name}/><br />
            <input type="submit" className="btn btn-success" value="ADD"/>
          </form>
          <hr />
        { <ul className="list-group">
          {this.props.books.map((book, i) => this.listView(book, i))}
        </ul> }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books
  }
};

  const mapDispatchToProps = (dispatch) => {
  return {
    createBook: book => dispatch(bookAction.createBook(book)),
    deleteBook: index =>dispatch(bookAction.deleteBook(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
