var React = require('react');

var Stat = React.createClass({
  render: function () {
    var statBackground = {

    }
    var statStyle = {
      textAlign: 'center'
    }
    if (this.props.statBackground) {
      statBackground.background = this.props.statBackground;
      statBackground.borderColor = this.props.statBackground;
      statStyle.borderColor = this.props.statBackground;
    }
    return (
      <div className="stat panel panel-primary" style={statStyle}>
        <div className="panel-heading" style={statBackground}>
          <div className="list-group">
            <p className="list-group-item-text">{this.props.description}</p>
            <h4 className="list-group-item-heading">{this.props.title}</h4>
          </div>
        </div>
        <div className="panel-body"></div>
      </div>
    );
  }
});

module.exports = Stat;
