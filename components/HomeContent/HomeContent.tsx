import Image from "next/image";
import profilePic from "../../public/photo.png";

const HomeContent = () => {
    return (
        <>
        <Image src={profilePic} alt="Picture of the author"/>
        </>
    );

}

export {HomeContent}