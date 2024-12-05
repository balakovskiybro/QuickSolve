import { Footer } from "../../widgets/footer";
import {Header} from "../../widgets/header/header";

interface LayoutProps {
    children: React.ReactNode
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="wrapper">
            <Header />

            {children}

            <Footer />
        </div>
    )
}