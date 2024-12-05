import { Link } from 'react-router-dom';
import styles from './style.module.scss'


export const FormRegistration = () => {

    return (
        <>
            <div className={styles.form}>
                <h3 className={styles.form__title}>Quick<span>Solve</span></h3>
                <h1>Регистрация</h1>
                <form action="" id="form" method="post">
                    <div className={styles.form__wrap}>
                        <div>
                            <input type="email" name="email" placeholder="E-mail" />
                        </div>
                        <div>
                            <input type="tel" name="tel" id="" maxLength={12} placeholder="Телефон" />
                        </div>
                        <div>
                            <input type="password" name="password" id="" placeholder="Пароль" />
                        </div>
                        <div>
                            <input type="password" name="password" id="" placeholder="Повторите пароль" />
                        </div>
                        <div>
                            <select name="select" id="">
                                <option value="role" disabled selected>Выберите свою роль</option>
                                <option value="specialist">Специалист</option>
                                <option value="work">Рекрутер</option>
                            </select>
                        </div>
                    </div>
                    <Link to={'/'} className={styles.form__button}>Зарегистрироваться</Link>
                    <p className={styles.form__info}>Уже есть аккаунт?<span><Link to={'/authorization'}>Войти</Link></span></p>
                </form>
            </div>
        </>
    )
}