import {Button} from "../../../ui/button/ui/Button"
import styles from './style.module.scss'

export const HeaderTabs = ({ active, onChange }: any) => {
    return (
        <section className={styles.header}>
            <Button isActive={active === 'not'} onClick={() => onChange('not')}>Не авторизован</Button>
            <Button isActive={active === 'auth'} onClick={() => onChange('auth')}>Авторизован</Button>
        </section>
    )
}