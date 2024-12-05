import Home from '../../pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Authorization } from "../../pages/Аuthentication/Authorization/index";
import { Registration } from "../../pages/Аuthentication/Registration/index";
import { Services } from "../../pages/Services/Services";
import { ServicesDetail } from '../../pages/Services/ServicesDetail/index'
import {Profile} from '../../pages/Profile/profile'
import {Subscription} from '../../pages/Profile/subscription';
import {MyOrders} from '../../pages/MyOrders'

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/authorization" element={<Authorization />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/services" element={<Services />} />
            <Route path="/servicesDetail" element={<ServicesDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path='/myOrders' element={<MyOrders />} />
        </Routes>
    )
}