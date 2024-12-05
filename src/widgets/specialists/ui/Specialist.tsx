import { SpecialistsCategory } from "../../../entities/specialistsCategory"
import styles from './style.module.scss'

export const Specialists = () => {
    return (
        <section className={styles.specialists}>
            <div className="container">
                <h4>Специалисты в казани</h4>
                <SpecialistsCategory />
            </div>
        </section>
    )
}