import { Link } from 'react-router-dom'
import styles from './style.module.scss'

export const FormAuthorization = () => {
    return (
        <div className={styles.form}>
            <form action="" id="form" method="post">
                <h3 className={styles.form__title}>Quick<span>Solve</span></h3>
                <h1>Авторизация</h1>
                <div className={styles.form__wrap}>
                    <div>
                        <input type="email" name="email" placeholder="E-mail" />
                    </div>
                    <div>
                        <input type="password" name="password" id="" placeholder="Пароль" />
                    </div>
                </div>
                <Link className={styles.form__button} to={'/'}>Войти</Link>
                <div className={styles.form__info}>
                    <p>Нет аккаунта?<span><Link to={'/registration'}>Зарегистрироваться</Link></span></p>
                    <p>Забыли пароль?<span><Link to={'/'}>Восстановить</Link></span></p>
                </div>
            </form>
        </div>
    )
}