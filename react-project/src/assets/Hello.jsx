
function Hello( {message, name}) {
    console.log('Hello component');
    return (
      <div>
        <h1>Hello {message}  {name} </h1>
        </div>
    );
  };

  import PropsTypes from 'prop-types';

  Hello.PropsTypes = {
    message: PropsTypes.string.isRequired,
    name: PropsTypes.string.isRequired

  };

  Hello.defaultProps = {
    name: "Guest",
    message: "Good morning"
  }

  export default Hello
  