import {TabsSection} from "../shared/config/TabsSection"
import {SearchSpeacialist} from "../widgets/search/SearchSpecialist"
import {SearchWork} from "../widgets/search/SearchWork"
import { useState } from "react"
import { Layout } from "../app/layout"
import {Specialists} from "../widgets/specialists"
import {AllSpecialists} from "../widgets/allSpecialists"
import {HowSpecialist} from "../widgets/how/howSpecialist"
import {HowWork} from "../widgets/how/howWork"
import {Feedback} from "../widgets/feedback"

export default function Home() {
    const [tab, setTab] = useState('spec')
    return (
        <Layout>
            <main>
                <TabsSection active={tab} onChange={(current: any) => setTab(current)} />

                {tab === 'spec' && (
                    <>
                        <SearchSpeacialist />
                        <Specialists />
                        <AllSpecialists />
                        <HowSpecialist />
                        <Feedback />
                    </>
                )}

                {tab === 'work' && (
                    <>
                        <SearchWork />
                        <HowWork />
                        <Feedback />
                    </>
                )}
            </main>
        </Layout>
    )
}