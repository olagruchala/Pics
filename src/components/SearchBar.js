import React from 'react';


class SearchBar extends React.Component {
  state = { 'term': ''};

  onInputChange = (e) => {
    this.setState({
      'term': e.target.value
    })
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.whenSubmited(this.state.term)

  };

  render(){
    return(
      <div className='ui segments centered grid'>
        <form
          className="ui segment huge icon input"
          onSubmit={this.onFormSubmit}>
          <input
            placeholder="Search images..."
            className="ui segment huge icon input"
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}/>
        </form>
      </div>
    )
  }
}
export default SearchBar;
