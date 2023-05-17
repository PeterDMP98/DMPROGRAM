import Emeil from '../components/contact/Emeil'
import '../components/contact/styles/contact.css'

const Contact = () => {
  return (
    <div className='contact'>

      <h1 className='contact__title'>Let's talk businees</h1>

      <div class="contact__link-phone">
        <i class="fa-solid fa-square-phone"></i>
        <a className='contact__phone' href="tel:+573043583617" target="_blank">numero de teleono</a>
      </div>

      <div class="contact__link-whasapp">
        <i class="fa-brands fa-square-whatsapp"></i>
        <a className='contact__whatsapp' href="https://wa.me/573043583617" target="_blank">whatsapp</a>
      </div>

      <Emeil />
    </div>
  )
}

export default Contact