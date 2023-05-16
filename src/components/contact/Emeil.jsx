import React from 'react'

const Emeil = () => {
  return (
    <>
    
    <form className='form__contact' name='contact' method='POST' data-netlify="true">

        
            <label className='form__label' htmlFor="name">Name</label>
            <input className='form__input' type="text" id='name' name='name' placeholder='Name'/>
        <br />

        
            <label className='form__label' htmlFor="email">Email</label>
            <input className='form__input' type="email" id='email' name='email' placeholder='Email' />
        <br />

        
            <label className='form__label' htmlFor="message">Message</label>
            <textarea className='form__text' name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
        <br />

        
        <button className='fomr__btn' type="submit">Enviar</button>

    </form>
    </>
  )
}

export default Emeil