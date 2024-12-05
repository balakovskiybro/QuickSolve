import face from '../../../../shared/assets/images/Alex.jpg'
import star from '../../../../shared/assets/images/star.png'
import check from '../../../../shared/assets/images/check.png'
import certification from '../../../../shared/assets/images/certification.png'
import works1 from '../../../../shared/assets/images/works1.png'
import works2 from '../../../../shared/assets/images/works2.png'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'


export const ServicesLi = () => {
    return (
        <div className={styles.services__wrapper}>
            <img src={face} alt="" />
            <div className={styles.services__info}>
                <p className={styles.services__name}>Шевцов Алексей Дмитриевич</p>
                <div className={styles.services__reviews}>
                    <div className={styles.services__review}>
                        <img src={star} alt="" />
                        <p>5,0 (25)</p>
                    </div>
                    <p>В сети</p>
                </div>
                <div className="category">
                    <button className='category__button'>Сантехника</button>
                    <button className='category__button'>Электрика</button>
                </div>
                <div className={styles.services__check}>
                    <img src={check} alt="" />
                    <p>Проверенный специалист</p>
                </div>
                <div className={styles.services__check}>
                    <img src={certification} alt="" />
                    <p>Специалист с сертификацией</p>
                </div>
                <div className={styles.services__works}>
                    <img src={works1} alt="" />
                    <img src={works2} alt="" />
                </div>
                <div className={styles.services__descr}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className={styles.services__skills}>
                    <p className={styles.services__all}>Образование и опыт</p>
                    <p>МГУ (2004-2009)</p>
                    <Link to={'/servicesDetail'} className={styles.services__button}>Смотреть все...</Link>
                </div>
                <div className={styles.services__skills}>
                    <p className={styles.services__all}>Услуги и цены</p>
                    <p>Установка унитаза: <strong>5000 руб.</strong></p>
                    <p>Проведение электричества: <strong>10000 руб.</strong></p>
                    <Link to={'/servicesDetail'} className={styles.services__button}>Смотреть все...</Link>
                </div>
            </div>
            <div className={styles.services__write}>
                <button className="green-btn">Написать</button>
            </div>
        </div>
    )
}