import specialist from '../../../../shared/assets/images/specialist.png'
import styles from './style.module.scss'

export const SearchSpeacialist = () => {
    return (
        <section className={styles.search}>
            <div className='search__container container'>
                <img src={specialist} className={styles.search__img} alt="" />
                <div>
                    <h2>Найдите профессионального специалиста</h2>
                    <div className={styles.search__search}>
                        <input type="text" placeholder='Специалист или услуга' />
                        <button className={styles.search__button}>Найти</button>
                    </div>
                    <div className={styles.search__stat}>
                        <div className={styles.search__descr}>
                            <p className={styles.search__num}>14 000</p>
                            <p className={styles.search__text}>
                                Специалистов уже зарегистрированы на сервисе
                            </p>
                        </div>
                        <div className={styles.search__descr}>
                            <p className={styles.search__num}>1 839</p>
                            <p className={styles.search__text}>
                                Успешно проведенных заказов
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}