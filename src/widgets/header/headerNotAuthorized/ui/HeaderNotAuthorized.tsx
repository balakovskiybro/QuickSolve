import styles from './style.module.scss'
import { Link } from 'react-router-dom';

export const HeaderNotAuthorized = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>Quick<span>Solve</span></h1>
            <div>
                <Link to={'/registration'}className={styles.header__registration}>Зарегистрироваться</Link>
                <Link to={'/authorization'} className={styles.header__auth}>Войти</Link>
            </div>
        </header>
    )
}
