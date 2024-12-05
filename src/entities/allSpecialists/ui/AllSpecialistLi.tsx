import { Link } from "react-router-dom"
import styles from './style.module.scss'

export const AllSpecialistLi = () => {
    return (
        <>
            <li  >
                <button className={styles.specialist__link}><Link to={'/services'}>Электрики</Link></button>
                
            </li>
        </>
    )
}