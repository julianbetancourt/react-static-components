var React = require('react');
var Income = require('./Income');
var Banner = require('./Banner');
var Stat = require('./Stat');

var Layout = React.createClass({
  render: function () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3"><Income title="$1.000.000" description="Yearly Income Goal"/></div>
          <div className="col-sm-3"><Income title="$300.000" description="Income so far"/></div>
          <div className="col-sm-3"><Income title="$700.000" description="Money needed"/></div>
          <div className="col-sm-3"><Income background="orange" title="4" description="Current Month"/></div>
        </div>

        <div className="row">
          <div className="col-sm-9"><Banner title="Youtube" headingColor="#cc181e"/></div>
          <div className="col-sm-3">
            <div className="row">
              <div className="col-sm-12"><Stat statBackground="#B2DBBF" description="New Visitors" title="1.5k"/></div>
              <div className="col-sm-12"><Stat statBackground="#70C1B3" description="Bounce Rate" title="50%"/></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-9"><Banner title="Facebook"/></div>
          <div className="col-sm-3">
            <div className="row">
              <div className="col-sm-12"><Stat statBackground="#97ab3f" description="Search" title="28%"/></div>
              <div className="col-sm-12"><Stat statBackground="#FF1654" description="Traffic" title="140.5 kb"/></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
});


module.exports = Layout;
