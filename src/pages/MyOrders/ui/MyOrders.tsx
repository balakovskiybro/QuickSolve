import { useState } from 'react';
import { Layout } from '../../../app/layout';
import { Orders } from '../../../entities/Orders';
import styles from './style.module.scss';
import { Button } from '../../../shared/ui/button';
import { Modal } from '../../../components/Modal/Modal';
import { FormOrder } from '../../../features/form/formOrder';



interface Order {
    work: string;
    dateStart: string;
    summa: string;
}

export const MyOrders = () => {
    const [modal, setModal] = useState(false)
    const [orders, setOrders] = useState<Order[]>([
        {
            work: 'Ремонт санузла',
            dateStart: '10.12.2024',
            summa: '10000',
        },
    ]);

    const addOrder = (order: Order) => {
        // Добавление нового заказа
        setOrders((prevOrders) => [...prevOrders, order]);
    };

    return (
        <Layout>
            <section className={styles.orders}>
                <h1>Мои заказы</h1>
                <div className={styles.orders__create} >
                    <Button onClick={() => setModal(true)}>+ Создать заказ</Button>
                </div>
                <Modal open={modal}>
                    <Button onClick={() => setModal(false)}>Закрыть</Button>
                    <FormOrder onAdd={(order) => {
                        addOrder(order);
                        setModal(false); // Закрываем модальное окно
                    }} />
                </Modal>
                <Orders orders={orders} />
            </section>
        </Layout>
    );
}