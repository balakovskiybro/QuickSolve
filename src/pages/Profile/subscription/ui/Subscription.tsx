import { Layout } from '../../../../app/layout'
import styles from './style.module.scss'

export const Subscription = () => {
    return (
        <Layout>
            <section className={styles.subscr}>
                <h6>Подписки</h6>
                <div className={styles.subscr__container}>
                    <div className={styles.subscr__item}>
                        <p className='subscr__level'>Basic</p>

                        <div className={styles.subscr__info}>
                            <p className={styles.subscr__price}>Бесплатно</p>
                            <ul className={styles.subscr__list}>
                                <li className={styles.subscr__items}>Комиссия 15%</li>
                                <li className={styles.subscr__items}>Комиссия 15%</li>
                                <li className={styles.subscr__items}>Комиссия 15%</li>
                                <li className={styles.subscr__items}>Комиссия 15%</li>
                                <li className={styles.subscr__items}>Комиссия 15%</li>
                            </ul>
                            <button className={styles.subscr__button}>Активна</button>
                        </div>

                    </div>
                    <div className={styles.subscr__item}>
                        <p className="subscr__level subscr__level-grn">PRO</p>
                        <div className={styles.subscr__info}>
                            <p className={styles.subscr__price}>5000₽ / мес.</p>
                            <ul className={styles.subscr__list}>
                                <li className={styles.subscr__items}>Комиссия 10%</li>
                                <li className={styles.subscr__items}>Комиссия 10%</li>
                                <li className={styles.subscr__items}>Комиссия 10%</li>
                                <li className={styles.subscr__items}>Комиссия 10%</li>
                                <li className={styles.subscr__items}>Комиссия 10%</li>
                            </ul>
                            <button className="subscr__button green-btn">Купить</button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}