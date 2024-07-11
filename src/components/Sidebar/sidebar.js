import '../../css/defaultLayout/sidebar/sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar_container">
            <div className='sidebar_navbar'>
                <ul className='sidebar_navbar_itemsList'>
                    <li>For you</li>
                    <li>Explore</li>
                    <li>Following</li>
                    <li>Friends</li>
                    <li>Live</li>
                    <li>Profile</li>
                </ul>
            </div>
            <div className='sidebar_following'>
                <p className='sidebar_following_title'>Following accounts</p>
                <ul className='sidebar_following_accountList'>
                    <li>User 1</li>
                    <li>User 1</li>
                    <li>User 1</li>
                    <li>User 1</li>
                    <li>User 1</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;