import styles from './style.module.scss'
export const Button = ({ children, isActive, ...props }: any) => {

    return <button
        {...props} className={isActive ? `${styles.button} ${styles.active}` : styles.button}>
        {children}
    </button>
}