
import { Layout } from '../../../../app/layout';
import { ServicesLi } from '../../ServicesLi/index'
import styles from './style.module.scss'


export const Services = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h4>Услуги специалистов в Казани</h4>
                <ServicesLi />
                <ServicesLi />
            </div>
        </Layout>

    )
}