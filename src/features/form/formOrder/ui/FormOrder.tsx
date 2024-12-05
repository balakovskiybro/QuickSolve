import { Button } from '../../../../shared/ui/button';
import React, { useState } from 'react';
import styles from './style.module.scss'

interface AddOrderProps {
    onAdd: (order: Order) => void;
}

interface Order {
    work: string;
    problem: string;
    dateStart: string;
    dateEnd: string;
    summa: string;
}

export const FormOrder: React.FC<AddOrderProps> = ({ onAdd }) => {
    const [order, setOrder] = useState<Order>({
        work: '',
        problem: '',
        dateStart: '',
        dateEnd: '',
        summa: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setOrder((prevOrder) => ({
            ...prevOrder,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        onAdd(order);
        setOrder({
            work: '',
            problem: '',
            dateStart: '',
            dateEnd: '',
            summa: '',
        });
    };

    return (
        <form action="" className={styles.orders__form} onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                className={styles.orders__item}
                name="work"
                value={order.work}
                onChange={handleChange}
                placeholder="Какую работу должен выполнить специалист?"
            />
            <textarea
                className={styles.orders__item}
                name="problem"
                value={order.problem}
                onChange={handleChange}
                placeholder="Опишите свою проблему"
            />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
                    <input
                        type="text"
                        style={{ border: '1px solid black', padding: '15px', borderRadius: '20px' }}
                        name="dateStart"
                        value={order.dateStart}
                        onChange={handleChange}
                        placeholder="Дата начала работы"
                    />
                    <input
                        type="text"
                        style={{ border: '1px solid black', padding: '15px', borderRadius: '20px' }}
                        name="dateEnd"
                        value={order.dateEnd}
                        onChange={handleChange}
                        placeholder="Дата окончания работы"
                    />
                </div>
            </div>
            <input
                type="text"
                name="summa"
                value={order.summa}
                onChange={handleChange}
                className={styles.orders__item}
                placeholder="Сумма, которую вы готовы заплатить"
            />
            <div>
                <Button type="button" onClick={handleSubmit}>
                    Создать
                </Button>
            </div>

        </form>
    );
};

export default FormOrder;