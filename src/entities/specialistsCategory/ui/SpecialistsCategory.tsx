import { Link } from "react-router-dom"
import spec from '../../../shared/assets/images/spec.jpg'
import styles from './style.module.scss'

export const SpecialistsCategory = () => {
    return (
        <ul className={styles.specialist__list}>
            <li>
                <Link to={'/services'} className={styles.specialist__link}><img src={spec} alt="" />Электрики</Link>
            </li>
            <li>
                <Link to={'/services'} className={styles.specialist__link}><img src={spec} alt="" />Сантехники</Link>
            </li>
            <li>
                <Link to={'/services'} className={styles.specialist__link}><img src={spec} alt="" />Отделочники</Link>
            </li>
            <li>
                <Link to={'/services'} className={styles.specialist__link}><img src={spec} alt="" />Сварщики</Link>
            </li>
            <li>
                <Link to={'/services'} className={styles.specialist__link}><img src={spec} alt="" />Сварщики</Link>
            </li>
        </ul>
    )
}