function ProfilePic(){
    const imgUrl='./src/assets/yes.jpg';

    const handleClickPic=(e)=>{
        e.target.style.display="none";
    }

    return(
        <img onClick={(e)=>handleClickPic(e)}className="profilePic" src={imgUrl} alt="#" />
    );

}

export default ProfilePic