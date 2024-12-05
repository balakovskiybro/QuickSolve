import { useNavigate } from "react-router-dom";
import styles from './style.module.scss'

export const GoBack: React.FC = () => {
    const navigate = useNavigate()

    const navigateBack = () => {
        navigate(-1);
    };
    
    return (
        <button className={styles.close} onClick={navigateBack}>Назад</button>
    )
}

export default GoBack

