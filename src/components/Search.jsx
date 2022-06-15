class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: ''
    }
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput(event) {
    this.setState({inputVal: event.target.value})
    console.log('I AM INVOKING THE METHOD')
    var pointer = this;
    var debounced = _.debounce(function() { pointer.props.handleSearchInputChange(pointer.state.inputVal)}, 10000)
    debounced();
    // this.props.handleSearchInputChange(this.state.inputVal)
  }

  render() {
    var pointer = this;
    return (

  <div className="search-bar form-inline">
    <input value={this.state.inputVal} onChange={(e) => {
      this.handleSearchInput(e);
      // _.debounce((e) => {pointer.handleSearchInput(e)}, 1000)
    }} className="form-control" type="text" />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
    )
  }
  }



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
