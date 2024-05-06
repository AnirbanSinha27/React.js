import profilePic from './assets/react1.jpg'

function Card(){
    return(
        <div className="card">
            <img className="cardImage" src={profilePic} alt="profile Picture" />
            <h2 className='cardTitle'>Sneha Pradhan</h2>
            <p className='cardPara'>Shubhman Gill Lover and bohot zor se maarne wali</p>
        </div>
    );
}

export default Card