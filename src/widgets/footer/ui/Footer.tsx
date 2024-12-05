import { Link } from 'react-router-dom'
import styles from './style.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className='container'>
                <h1 className={styles.footer__title}>Quick<span>Solve</span></h1>
                <div className={styles.footer__block}>
                    <div className={styles.footer__left}>
                        <ul className={styles.footer__list}>
                            <li>
                                <Link className={styles.footer__link} to={'/myOrders'}>Новый заказ</Link>
                            </li>
                            <li>
                                <Link to={'/services'} className={styles.footer__link}>Все услуги</Link>
                            </li>
                            <li>
                                <Link className={styles.footer__link} to={'/'}>Главная</Link>
                            </li>
                        </ul>
                        <ul className={styles.footer__auth}>
                            <li>
                                <Link to={'/authorization'}>Вход для заказчиков</Link>
                            </li>
                            <li>
                                <Link to={'/authorization'}>Вход для специалистов</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer__right}>
                        <ul className={styles.footer__connection}>
                            <li>
                                <p className={styles.footer__text}>Поддержка</p>
                            </li>
                            <li>
                                <p className={styles.footer__text}>E-mail: test@gmail.com</p>
                            </li>
                            <li>
                                <p className={styles.footer__text}>Телефон: +7 999 056 31 32 </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className={styles.footer__copyright}>© QuickSolve 2024</p>
            </div>
        </footer>
    )
}