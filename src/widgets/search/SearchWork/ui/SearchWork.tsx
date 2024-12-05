import work from '../../../../shared/assets/images/work.png'
import styles from './style.module.scss'

export const SearchWork = () => {
    return (
        <section className={styles.search}>
            <div className='search__container container'>
                <div>
                    <h2>Найдите работу с гарантий безопасной сделки</h2>
                    <div className={styles.search__search}>
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
                <img src={work} className={styles.search__img} alt="" />
            </div>
        </section>
    )
}