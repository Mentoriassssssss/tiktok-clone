import Header from "../Header/header.js";
import Sidebar from "../Sidebar/sidebar.js";
import '../../css/defaultLayout/defaultLayout.css'

const defaultLayout = ({children}) => {
    return (
        <div className="deflay_container">
            <Header/>
            <div className="deflay_main">
                <Sidebar />
                <div className="deflay_main_content">{children}</div>
            </div>
        </div>
    )

}

export default defaultLayout;