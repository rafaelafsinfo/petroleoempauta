import {Link} from 'react-router-dom'
import styles from './LinkButton.module.css'



function LinkButton({to,text,img}){
    return(
        <Link to={to}>
            <img src={img} alt={text} className={styles.img}></img>
        </Link>
    )
}

export default LinkButton