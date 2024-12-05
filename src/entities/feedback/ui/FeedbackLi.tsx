import face from '../../../shared/assets/images/Alex.jpg'
import star from '../../../shared/assets/images/star.png'
import styles from './style.module.scss'

export const FeedbackLi = () => {
    return (
        <>
            <li>
                <div className={styles.feedback__block}>
                    <div className={styles.feedback__top}>
                        <img src={face} alt="" className={styles.feedback__img} />
                        <div className={styles.feedback__review}>
                            <p className={styles.feedback__name}>Сергей Прусикин</p>
                            <div className={styles.feedback__star}>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                        </div>
                        <p className={styles.feedback__date}>12.05.2024</p>
                    </div>
                    <p className={styles.feedback__comment}>Все отлично. Работа выполнена очень качественно, спасибо большое Александру</p>
                    <div className="category">
                        <button className='category__button'>Сантехника</button>
                        <button className='category__button'>Электрика</button>
                    </div>
                </div>
            </li>
        </>
    )
}