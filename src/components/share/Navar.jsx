import './styles/navar.css'
import { Link } from 'react-router-dom'

const Navar = ({navOpenClose, setNavOpenClose}) => {

    const hanldeOpenCloseNav = () => {
        setNavOpenClose("navOpenClose")
    }

    return (
        <div className={`nav ${navOpenClose}`}>

            <nav className='nav__content'>

                <ul className='app__list'>
                    
                    <li onClick={hanldeOpenCloseNav} className='app__item' ><Link className='app__link' to='/'>Home</Link> <div className='line__item'></div></li>
                    
                    <li onClick={hanldeOpenCloseNav} className='app__item' ><Link className='app__link' to='/portfolio'>Portfolio</Link> <div className='line__item'></div></li>
                    
                    <li onClick={hanldeOpenCloseNav} className='app__item' ><Link className='app__link' to='/contact'>Contact</Link> <div className='line__item'></div></li>
                    
                </ul>
            </nav>

            <div className='nav__social'>
                <i className="fa-brands fa-twitter social"></i>
                <i className="fa-brands fa-discord social"></i>
                <i className="fa-brands fa-facebook-f social"></i>
                <i className="fa-brands fa-behance social"></i>
            </div>

        </div>
    )
}

export default Navar