import PropsTypes from 'prop-proptypes';

export default function Contact(props) {
    return(
        <div>
            <h2>{props.email} {props.phone}</h2>
            <p>Send me a message!</p>
        </div>
    );
}

Contact.prototype = {
    email: PropsTypes.string.isRequired,
    phone: PropsTypes.string.isRequired
}