import { useState } from "react"
import { Layout } from "../../../../app/layout"
import { Data } from "../../data"
import { ProfileHome } from "../../profileHome"
import { Reviews } from "../../reviews"
import { ProfileTabs } from "../../../../shared/config/ProfileTabs"
import styles from './style.module.scss'

export const Profile = () => {
    const [tab, setTab] = useState('profile')
    return (
        <Layout>
            <div className={styles.profile__container}>
                {tab === 'data' && (<Data />)}
                {tab === 'profile' && (<ProfileHome />)}
                {tab === 'reviews' && (<Reviews />)}

                <ProfileTabs active={tab} onChange={(current: any) => setTab(current)} />
            </div>
        </Layout>
    )
}