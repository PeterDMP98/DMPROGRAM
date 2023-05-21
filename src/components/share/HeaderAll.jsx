import { Link, useLocation } from 'react-router-dom'
import './styles/HeaderAll.css'
import { useEffect, useState } from 'react'

const HeaderAll = ({ setNavOpenClose, navOpenClose }) => {

    const [color, setColor] = useState()

    const handleOpenNav = () => {
        navOpenClose ? setNavOpenClose() : setNavOpenClose("navOpenClose")
    }

    const location = useLocation();

    console.log(location.pathname);

    useEffect(() => {
        if (location.pathname.includes("portfolio")) {
            setColor("portfolio__name")
        } else if (location.pathname.includes("contact")) {
            setColor("contact__name")
        } else {
            setColor('')
        }
    }, [location.pathname])

    return (
        <header className='app__header'>

            <div className='app__logo'>
                <Link to={'/'} className='logo'> DMP </Link>
            </div>

            <div onClick={handleOpenNav} className={`app__name ${color}`}>
                <p>Pedro Caraballo</p>
            </div>
        </header>
    )
}

export default HeaderAll