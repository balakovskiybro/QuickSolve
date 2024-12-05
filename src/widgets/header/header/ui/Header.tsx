import { useState } from "react"
import { HeaderNotAuthorized } from "../../headerNotAuthorized/index"
import {HeaderTabs} from "../../../../shared/config/HeaderTabs"
import { HeaderAuthorized } from "../../headerAuthorized/index"


export const Header = () => {
    const [tab, setTab] = useState('auth')

    return (
        <>
            <HeaderTabs active={tab} onChange={(current: any) => setTab(current)} />

            {tab === 'not' && (<HeaderNotAuthorized />)}
            {tab === 'auth' && (<HeaderAuthorized />)}
        </>
    )
}