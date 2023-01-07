import pythonIcon from "../../public/Icons/python-svgrepo-com.svg";
import javascriptIcon from "../../public/Icons/js-svgrepo-com.svg";
import typescriptIcon from "../../public/Icons/typescript-svgrepo-com.svg";
import reactIcon from "../../public/Icons/react-svgrepo-com.svg";
import nextIcon from "../../public/Icons/next-js-svgrepo-com.svg";
import viteIcon from "../../public/Icons/vite-svgrepo-com.svg";
import Image from "next/image";
import styles from "./IconCard.module.css";

const IconCard = () => {
    return (
        <div className={styles.card}>
            <a href="https://www.python.org/">
                        <Image 
                            src={pythonIcon} 
                            alt="Python"
                            height={50}
                            width={50}
                        />
                    </a>
                    <a href="https://www.javascript.com/">
                        <Image
                            src={javascriptIcon}
                            alt="Javascript"
                            height={50}
                            width={50}
                        />
                    </a>
                    <a href="https://www.typescriptlang.org/">
                        <Image
                            src={typescriptIcon}
                            alt="Typescript"
                            height={50}
                            width={50}
                        />
                    </a>
                    <a href="https://reactjs.org/">
                        <Image
                            src={reactIcon}
                            alt="React"
                            height={50}
                            width={50}
                        />
                    </a>
                    <a href="https://nextjs.org/">
                        <Image
                            src={nextIcon}
                            alt="Next js"
                            height={50}
                            width={50}
                        />
                    </a>
                    <a href="https://vitejs.dev/">
                        <Image
                            src={viteIcon}
                            alt="Vite"
                            height={50}
                            width={50}
                        />
                    </a>
        </div>
    );
}

export {IconCard}