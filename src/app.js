import './common/main.sass'

export default React.createClass({
  render() {
    return (
      <div className='app'>
        <p>{this.props.location.pathname}</p>
        {this.props.children}
      </div>
    );
  }
});
