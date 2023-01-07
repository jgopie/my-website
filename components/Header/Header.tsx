import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <Navbar variant="dark">
                <div className={styles.logoDiv}>
                    <p className={styles.logo}>JRG</p>
                </div>
                <div className={styles.buttonDiv}>
                    <Nav>
                        <Nav.Link href="/" className={styles.buttonText}>Home</Nav.Link>
                        <Nav.Link href="/portfolio" className={styles.buttonText}>Portfolio</Nav.Link>
                        <Nav.Link href="/blog" className={styles.buttonText}>Blog</Nav.Link>
                    </Nav>
                </div>
            </Navbar>
        </>
    )
}

export { Header };