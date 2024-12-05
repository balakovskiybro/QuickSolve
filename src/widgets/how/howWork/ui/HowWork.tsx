import create from '../../../../shared/assets/images/create.png'
import wait from '../../../../shared/assets/images/wait.png'
import choose from '../../../../shared/assets/images/choose.png'
import styles from './style.module.scss'

export const HowWork = () => {
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
                        <p className={styles.how__subtitle}>Откликнитесь на заказ</p>
                        <p className={styles.how__text}>
                            Перейдите на страницу поиска заказов и выберите подходящий под ваши компетенции заказ, после чего оставьте отклик.
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
                        <p className={styles.how__subtitle}>Ожидайте подверждения</p>
                        <p className={styles.how__text}>
                            Если вы подходите клиенту, он выберет вас.
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
                    <p className={styles.how__subtitle}>Приступайте к работе</p>
                    <p className={styles.how__text}>
                        После того, как клиент выберет вас, вы сможете с ним связаться и обговорить подробности.
                    </p>
                </div>
            </div>
        </section>
    )
}