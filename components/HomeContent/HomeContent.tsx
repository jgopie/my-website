import Image from "next/image";
import profilePic from "../../public/photo.png";
import styles from "./HomeContent.module.css";
import { IconCard } from "../IconCard/IconCard";

const HomeContent = () => {
    return (
        <>
            <div className={styles.homeContent}>
                <Image
                    src={profilePic}
                    alt="Picture of the author"
                    className={styles.profilePic}
                    height={250}
                    width={250}
                />
                <div className={styles.writtenContent}>
                    <h1>Jordan Gopie</h1>
                    <h2>Freelance Developer</h2>
                    <div className={styles.paragraphContainer}>
                    <p className={styles.paragraphs}>
                        Hello and welcome to my own little space!
                        I'm a Business major who graduated from the University of the West Indies
                        in 2018. I've been programming for most of my life, but moved into doing it professionally
                        when a friend of mine needed extra hands on deck with his start-up.
                    </p>
                    <h3>
                        Tech Stack
                    </h3>
                    <p className={styles.paragraphs}>
                        Learning is my addiction. My programming journey started many years ago with Pascal,
                        before then moving on to C, C++, and finally Python. I enjoy learning about new languages,
                        technologies, and frameworks.
                    </p>
                    </div>
                    <IconCard />
                </div>
            </div>
        </>
    );

}

export { HomeContent }