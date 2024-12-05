import {GoBack} from '../../../../shared/goback'
import star from '../../../../shared/assets/images/star.png'

import styles from './style.module.scss'

export const Reviews = () => {
    return (
        <div className={styles.services}>
            <GoBack />
            <h6>Мои отзывы</h6>
            <div className={styles.services__values}>
                <div className={styles.services__choice}>
                    <p className={styles.services__name}>Отзывы</p>
                    <div className={styles.services__review}>
                        <img src={star} alt="" />
                        <p className={styles.services__average}>5,0</p>
                    </div>
                </div>
                <div className={styles.services__valuations}>
                    <div className={styles.services__value}>
                        <div>
                            <div className={styles.services__review}>
                                <img src={star} alt="" />
                                <p className={styles.services__valuation}>5</p>
                            </div>
                        </div>
                        <div className={styles.services__line}></div>
                        <div className={styles.services__how}>
                            <p>25</p>
                        </div>
                    </div>
                    <div className={styles.services__value}>
                        <div>
                            <div className={styles.services__review}>
                                <img src={star} alt="" />
                                <p className={styles.services__valuation}>4</p>
                            </div>
                        </div>
                        <div className={styles.services__line}></div>
                        <div className={styles.services__how}>
                            <p>0</p>
                        </div>
                    </div>
                    <div className={styles.services__value}>
                        <div>
                            <div className={styles.services__review}>
                                <img src={star} alt="" />
                                <p className={styles.services__valuation}>3</p>
                            </div>
                        </div>
                        <div className={styles.services__line}></div>
                        <div className={styles.services__how}>
                            <p>0</p>
                        </div>
                    </div>
                    <div className={styles.services__value}>
                        <div>
                            <div className={styles.services__review}>
                                <img src={star} alt="" />
                                <p className={styles.services__valuation}>2</p>
                            </div>
                        </div>
                        <div className={styles.services__line}></div>
                        <div className={styles.services__how}>
                            <p>0</p>
                        </div>
                    </div>
                    <div className={styles.services__value}>
                        <div>
                            <div className={styles.services__review}>
                                <img src={star} alt="" />
                                <p className={styles.services__valuation}>1</p>
                            </div>
                        </div>
                        <div className={styles.services__line}></div>
                        <div className={styles.services__how}>
                            <p>0</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className={styles.services__feedback}>
                <div className={styles.services__comment}>
                    <div className={styles.services__choice}>
                        <p className={styles.services__name}>Сергей Добронравов</p>
                        <div className={styles.services__review}>
                            <img src={star} alt="" />
                            <p className={styles.services__valuation}>5</p>
                        </div>
                    </div>
                    <button className='category__button'>Электрика</button>
                    <div className={styles.services__descr}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className={styles.services__choice}>
                        <div className={styles.services__date}>10.04.2024</div>
                        <p>Установка унитаза: <strong>5000 руб.</strong></p>
                    </div>
                </div>
                <div className={styles.services__comment}>
                    <div className={styles.services__choice}>
                        <p className={styles.services__name}>Сергей Добронравов</p>
                        <div className={styles.services__review}>
                            <img src={star} alt="" />
                            <p className={styles.services__valuation}>5</p>
                        </div>
                    </div>
                    <button className='category__button'>Электрика</button>
                    <div className={styles.services__descr}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className={styles.services__choice}>
                        <div className={styles.services__date}>10.04.2024</div>
                        <p>Установка унитаза: <strong>5000 руб.</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}