var React = require('react');
var BannerStat = require('./BannerStat');

var Banner = React.createClass({
  render: function () {
    var headingStyle = {
      textAlign: 'center',
      padding: '30px 15px'
    }
    var bodyStyle = {
      padding: '10px '
    }
    var bannerStyle = {
      marginTop: 20
    }

    if(this.props.headingColor) {
      headingStyle.backgroundColor = this.props.headingColor;
      headingStyle.borderColor = this.props.headingColor;
      bannerStyle.borderColor = this.props.headingColor;
    }
    return (
      <div className="banner-component panel panel-primary" style={bannerStyle}>
        <div className="panel-heading" style={headingStyle}>
          <h3>{this.props.title}</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-4">
              <BannerStat statTitle="15080" statDescription="Views" />
            </div>
            <div className="col-sm-4">
              <BannerStat statTitle="12000" statDescription="Likes" />
            </div>
            <div className="col-sm-4">
              <BannerStat statTitle="5100" statDescription="Comments" />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Banner;
