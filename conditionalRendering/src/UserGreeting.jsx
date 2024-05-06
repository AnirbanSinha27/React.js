import PropTypes from 'prop-types'

function UserGreeting(props){

    const welcome=<h2 className="welcome">Welcome {props.userName}</h2>;
    const prompt=<h2 className="prompt">Please log in to continue... </h2>;

    return(
        props.isLoggedin ? welcome : prompt
    );
}

UserGreeting.propTypes ={
    userName: PropTypes.string,
    isLoggedin: PropTypes.bool
}

UserGreeting.defaultProps= {
    userName: "Guest",
    isLoggedin: 1
}

export default UserGreeting