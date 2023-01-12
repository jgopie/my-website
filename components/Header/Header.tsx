import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import styles from "./Header.module.css";
import Link from "next/link"

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <Navbar variant="dark">
                <div className={styles.logoDiv}>
                    <p className={styles.logo}>JRG</p>
                </div>
                <div className={styles.buttonDiv}>
                    <Nav className={styles.buttonDiv}>
                        <Link href="/" className={styles.buttonText}>Home</Link>
                        <Link href="/portfolio" className={styles.buttonText}>Portfolio</Link>
                        <Link href="/blog" className={styles.buttonText}>Blog</Link>
                    </Nav>
                </div>
            </Navbar>
        </div>
    )
}

export { Header };