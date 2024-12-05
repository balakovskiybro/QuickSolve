
import styles from './style.module.scss'
import profile from '../../../../shared/assets/images/profile.png'
import { Link } from 'react-router-dom';

export const HeaderAuthorized = () => {
    return (
        <header className={styles.header}>
            <Link to={'/'}><h1 className={styles.header__title}>Quick<span>Solve</span></h1></Link>
            <div className={styles.header__links}>
                <Link to={'/myOrders'} className={styles.header__button}>Мои заказы</Link>
                <Link to={'/services'} className={styles.header__button} >Все услуги</Link>
                <Link to={'/profile'}><img src={profile} className={styles.header__img} alt=""  /></Link>
            </div>
        </header>
    )
}