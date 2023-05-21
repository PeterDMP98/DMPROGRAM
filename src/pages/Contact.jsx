import Emeil from '../components/contact/Emeil'
import '../components/contact/styles/contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <h1 className='contact__title'>Let's talk businees</h1>

      <div className='content__contact'>

        <a className="contact__link-phone" href="tel:+573043583617" target="_blank">
          <i className="fa-solid fa-square-phone"></i>
          <a className='contact__phone'>Numero de Teleono</a>
        </a>

        <a className="contact__link-whasapp" href="https://wa.me/573043583617" target="_blank">
          <i className="fa-brands fa-square-whatsapp"></i>
          <a className='contact__whatsapp'>Whatsapp</a>
        </a>

        <Emeil />
      </div>
    </div>
  )
}

export default Contact