import create from '../../../../shared/assets/images/create.png'
import wait from '../../../../shared/assets/images/wait.png'
import choose from '../../../../shared/assets/images/choose.png'
import styles from './style.module.scss'

export const HowSpecialist = () => {
    return (
        <section className="how container">
            <h5>Как это работает?</h5>
            <div className={styles.how__wrapper}>
                <div className={styles.how__block}>
                    <div className={styles.how__top}>
                        <div className={styles.how__img}>
                            <img src={create} alt="" />
                        </div>
                        <p className={styles.how__num}>1.</p>
                    </div>
                    <div>
                        <p className={styles.how__subtitle}>Создайте заказ</p>
                        <p className={styles.how__text}>
                            Мы зададим все важные вопросы, чтобы вам было проще описать задачу.
                        </p>
                    </div>

                </div>
                <div className={styles.how__block}>
                    <div className={styles.how__top}>
                        <div className={styles.how__img}>
                            <img src={wait} alt="" />
                        </div>
                        <p className={styles.how__num}>2.</p>
                    </div>
                    <div>
                        <p className={styles.how__subtitle}>Ожидайте отклика специалиста</p>
                        <p className={styles.how__text}>
                            Мы зададим все важные вопросы, чтобы вам было проще описать задачу.
                        </p>
                    </div>

                </div>
                <div className={styles.how__block}>
                    <div className={styles.how__top}>
                        <div className={styles.how__img}>
                            <img src={choose} alt="" />
                        </div>
                        <p className={styles.how__num}>3.</p>
                    </div>
                    <p className={styles.how__subtitle}>Выберите подходящего</p>
                    <p className={styles.how__text}>
                        Мы зададим все важные вопросы, чтобы вам было проще описать задачу.
                    </p>
                </div>
            </div>
        </section>
    )
}