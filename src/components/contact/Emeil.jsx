import './styles/email.css'
import { useNavigate } from 'react-router-dom'

const Emeil = () => {

    return (
        <form className='form__contact' action="https://formsubmit.co/peter.dmp.ca@gmail.com" method='POST'>

            <div className='form__name content-info'>
                <label className='form__label' htmlFor="name">Name</label>
                <input className='form__input' type="text" id='name' name='name' placeholder='Name' />
            </div>

            <div className='form__subject content-info'>
                <label className='form__label' htmlFor="subject">Mail Subject</label>
                <input className='form__input' type="text" id='subject' name='_subject' placeholder='Mail Subject' />
            </div>

            <div className='form__email content-info'>
                <label className='form__label' htmlFor="email">Email</label>
                <input className='form__input' type="email" id='email' name='email' placeholder='Email' />
            </div>

            <div className='form__message content-info'>
                <label className='form__label' htmlFor="message">Message</label>
                <textarea className='form__text' name="message" id="message" placeholder='Message'></textarea>
            </div>


            {/* confifuracion de form */}

            <input type="hidden" name='_next' value="https://pedrocaraballo.netlify.app/#/" />
            <input type="hidden" name='_captcha' value='false' />
            <input type="hidden" name='_template' value="box"></input>

            <button className='form__btn' type="submit">Enviar</button>


        </form>
    )
}

export default Emeil