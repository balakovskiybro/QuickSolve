import { AllSpecialistLi } from '../../../entities/allSpecialists'
import styles from './style.module.scss'

export const AllSpecialists = () => {
    return (
        <section className={styles.specialist}>
            <div className="container">
                <h4>Все специалисты в Казани</h4>
                <ul className={styles.specialist__all}>
                    <AllSpecialistLi />
                    <AllSpecialistLi />
                    <AllSpecialistLi />
                    <AllSpecialistLi />
                    <AllSpecialistLi />
                    <AllSpecialistLi />
                    <AllSpecialistLi />
                    <AllSpecialistLi />
                    <AllSpecialistLi />
                </ul>
            </div>
        </section>
    )
}