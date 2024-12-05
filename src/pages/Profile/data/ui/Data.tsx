import { Link} from "react-router-dom"
import { FormSettings } from "../../../../features/form/formSettings"
import styles from './style.module.scss'

export const Data = () => {
    return (
        <div className={styles.sub}>
            <h6>Профиль и настройки</h6>
            <FormSettings />
            <div className={styles.sub__sub}>
                <p className={styles.sub__text}>Активная подписка: <span>Basic</span></p>
                <Link to={'/subscription'} className={styles.sub__link}>Улучшить</Link>
            </div>
            <button className="green-btn">Сохранить</button>
        </div>
    )
}