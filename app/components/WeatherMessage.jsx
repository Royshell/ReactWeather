var React = require('react');

var WeatherMessage = ({temp, location}) => {

  return (
    <h4>It's {temp} in {location}.</h4>
  );
}

module.exports = WeatherMessage;
