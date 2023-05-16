import React from 'react'

const Emeil = () => {
  return (
    <form className='form__contact'>
        
        <h2 className='form__title'>Contact</h2>

        <div className='form__name'>
            <label className='form__label' htmlFor="name">Name</label>
            <input className='form__input' type="text" id='name' placeholder='Name'/>
        </div>

        <div className='form__email'>
            <label className='form__label' htmlFor="email">Email</label>
            <input className='form__input' type="email" id='email' placeholder='Email' />
        </div>

        <div className='form__message'>
            <label className='form__label' htmlFor="message">Message</label>
            <textarea className='form__text' name="message" id="message" cols="30" rows="5" placeholder='Message'></textarea>
        </div>

        <input className='fomr__btn' type="sutmit" value="Enviar" />

    </form>
  )
}

export default Emeil