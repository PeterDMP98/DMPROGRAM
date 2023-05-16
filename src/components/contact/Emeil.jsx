import React from 'react'

const Emeil = () => {
  return (
    <form className='form__contact' action="https://formsubmit.co/peter.dmp.ca@gmail.com" method='POST'>

        <div className='form__name'>
            <label className='form__label' htmlFor="name">Name</label>
            <input className='form__input' type="text" id='name' name='name' placeholder='Name'/>
        </div>

        <div className='form__email'>
            <label className='form__label' htmlFor="email">Email</label>
            <input className='form__input' type="email" id='email' name='email' placeholder='Email' />
        </div>

        <div className='form__message'>
            <label className='form__label' htmlFor="message">Message</label>
            <textarea className='form__text' name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
        </div>

        
        <button className='fomr__btn' type="submit">Enviar</button>

    </form>
  )
}

export default Emeil