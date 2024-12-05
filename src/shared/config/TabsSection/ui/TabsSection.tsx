import { Button } from "../../../ui/button/ui/Button"
import styles from './style.module.scss'

export const TabsSection = ({ active, onChange }: any) => {
    return (
        <section className={styles.tabs}>
            <Button isActive={active === 'spec'} onClick={() => onChange('spec')}>Я ищу специалиста</Button>
            <Button isActive={active === 'work'} onClick={() => onChange('work')}>Я ищу работу</Button>
        </section>
    )
}