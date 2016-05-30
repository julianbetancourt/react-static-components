var React = require('react');

var Income = React.createClass({
  render: function () {
    var incomeStyle = {
      textAlign: 'center'
    }
    if (this.props.background) {
      incomeStyle.background = this.props.background;
      incomeStyle.color = 'white';

    }

    return (
      <div className="well money-component" style={incomeStyle}>
        <div className="list-group">
          <h2 className="list-group-item-heading">{this.props.title}</h2>
          <p className="list-group-item-text">{this.props.description}</p>
        </div>
      </div>
    );
  }
});

module.exports = Income;
