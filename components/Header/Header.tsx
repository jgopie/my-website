import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import styles from "./Header.module.css";
import Link from "next/link"

const Header = () => {
    return (
        <>
            <Navbar variant="dark">
                <div className={styles.logoDiv}>
                    <p className={styles.logo}>JRG</p>
                </div>
                <div className={styles.buttonDiv}>
                    <Nav>
                        <Link href="/" className={styles.buttonText}>Home</Link>
                        <Link href="/portfolio" className={styles.buttonText}>Portfolio</Link>
                        <Link href="/blog" className={styles.buttonText}>Blog</Link>
                    </Nav>
                </div>
            </Navbar>
        </>
    )
}

export { Header };