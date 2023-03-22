import PropTypes from "prop-types";

function User({name, surname, age, isLoggedIn, friends, adres}) {
    if (!isLoggedIn) {
        return <div>Giriş Yapmadınız.</div>
    }
    
    return(
        <>
            <h1>
             {isLoggedIn ?  `${name} ${surname} (${age})` : "Giriş yapmadınız"}
            </h1>
            {adres.title}
            <br />
            {adres.zip}
            <br />
            <br />
            {friends && 
            friends.map((friend, index) => (
            <div key={index}>{friend}</div>
            ))}
        </>

    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    friend: PropTypes.array,
    adres: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
})
}

User.defaultProps = {
    name: "İsimsiz",
    isLoggedIn: false,
}

export default User;