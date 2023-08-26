import {Link} from 'react-router-dom' 
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logo.png'

function Navbar(){
    return(
        <nav class={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="petroleo em pauta"/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/bibliografia">Referencias</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/integrantes">Integrantes</Link>
                    </li>
                </ul>
            </Container>m
        </nav>
    )
}

export default Navbar