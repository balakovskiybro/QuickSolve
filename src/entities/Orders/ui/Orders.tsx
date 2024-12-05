import styles from './style.module.scss';

interface Order {
    work: string;
    dateStart: string;
    summa: string;
}

interface OrdersProps {
    orders: Order[]; // Массив заказов для отображения
}

export const Orders: React.FC<OrdersProps> = ({ orders }) => {
    return (
        <div className={styles.orders}>
            {orders.length > 0 ? (
                orders.map((order, index) => (
                    <div key={index} className={styles.orders__create}>
                        <div>
                            <h1>{order.work}</h1>
                            <p>{order.dateStart}</p>
                        </div>
                        <div>
                            <p>{order.summa} ₽</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Заказы отсутствуют</p>
            )}
        </div>
    );
};