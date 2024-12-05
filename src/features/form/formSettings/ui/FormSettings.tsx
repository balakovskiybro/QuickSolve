import styles from './style.module.scss'

export const FormSettings = () => {
    return (
        <form action="" className={styles.form}>
            <div className={styles.form__wrap}>
                <label htmlFor="">Ваше ФИО</label>
                <input type="text" />
                <label htmlFor="">Ваш e-mail</label>
                <input type="email" name="" id="" />
                <label htmlFor="">Ваш номер телефона</label>
                <input type="tel" name="" id="" />
                <div className={styles.card}>
                    <input type="text" name="" placeholder="Номер карты" id="" />
                    <div className={styles.card__data}>
                        <input type="text" name="" placeholder="мм/гг" id="" />
                        <input type="text" name="" placeholder="CVV" id="" />
                    </div>
                </div>
            </div>
        </form>
    )
}