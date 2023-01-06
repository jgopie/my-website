import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <>
            <Navbar variant="dark" sticky="top">
                <div className={styles.logoDiv}>
                    <p className={styles.logo}>JRG</p>
                </div>
                <div className={styles.buttonDiv}>
                    <Nav>
                        <Nav.Link href="#home" className={styles.buttonText}>Home</Nav.Link>
                        <Nav.Link href="#home" className={styles.buttonText}>Portfolio</Nav.Link>
                        <Nav.Link href="#home" className={styles.buttonText}>Blog</Nav.Link>
                    </Nav>
                </div>
            </Navbar>
        </>
    )
}

export { Header };