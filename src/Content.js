// import clsx from 'clsx';
import './App.css';
import { useState, useEffect } from 'react';


function Content() {
    const [avatar, setAvatar] = useState()


    useEffect(() => {
        //Clearup
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const fileAvatar = e.target.files[0]

        fileAvatar.preview = URL.createObjectURL(fileAvatar)

        setAvatar(fileAvatar)
    }

    return (
        <div>
            <input type='file' onChange={handlePreviewAvatar}></input>
            <br />
            {
                avatar && (<img style={{width: "500px", marginTop: "2rem"}} src={avatar.preview} alt='avatar'/>)
            }  
        </div> 
    );
}

export default Content;
