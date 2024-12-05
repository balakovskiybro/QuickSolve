import {Button} from "../../../ui/button/ui/Button"
import styles from './style.module.scss'

export const ProfileTabs = ({ active, onChange }: any) => {
    return (
        <section className={styles.profile}>
            <Button isActive={active === 'data'} onClick={() => onChange('data')}>Личные данные</Button>
            <Button isActive={active === 'profile'} onClick={() => onChange('profile')}>Профиль</Button>
            <Button isActive={active === 'reviews'} onClick={() => onChange('reviews')}>Мои отзывы</Button>
        </section>
    )
}