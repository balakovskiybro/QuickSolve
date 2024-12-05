import {FeedbackLi} from "../../../entities/feedback"
import styles from './style.module.scss'

export const Feedback = () => {
    return(
        <section className={styles.feedback}>
            <h5>Отзывы</h5>
            <p className={styles.feedback__text}>13 986 отзывов оставили клиенты за последние 12 месяцев. Из них 13 200 — положительные.</p>
            <ul className={styles.feedback__list}>
                <FeedbackLi></FeedbackLi>
                <FeedbackLi></FeedbackLi>
                <FeedbackLi></FeedbackLi>
                <FeedbackLi></FeedbackLi>
                <FeedbackLi></FeedbackLi>
                <FeedbackLi></FeedbackLi>
            </ul>
        </section>
    )
}