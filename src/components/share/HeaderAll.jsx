import { Link } from 'react-router-dom'
import './styles/HeaderAll.css'

const HeaderAll = ({setNavOpenClose, navOpenClose}) => {

    const handleOpenNav = () => {
        navOpenClose ? setNavOpenClose() : setNavOpenClose("navOpenClose")
        console.log("click");
    }
    return (
        <header className='app__header'>
            
            <div className='app__logo'>
                <Link to={'/'} className='logo'> DMP </Link>
            </div>

            <div onClick={handleOpenNav} className='app__name'>
                <p>Pedro Caraballo</p>
            </div>
        </header>
    )
}

export default HeaderAll