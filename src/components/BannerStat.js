var React = require('react');

var BannerStat = React.createClass({
  render: function () {
    var statStyle = {
      textAlign: 'center',
      marginBottom: '0px'
    }

    return (
      <div className="list-group" style={statStyle}>
        <h4 className="list-group-item-heading">{this.props.statTitle}</h4>
        <p className="list-group-item-text">{this.props.statDescription}</p>
      </div>
    );
  }
});


module.exports = BannerStat;
