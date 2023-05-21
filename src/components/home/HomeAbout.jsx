import './styles/homeAbout.css'

const HomeAbout = () => {
  return (
    <div className='home-about'>

      <div className='home__about-descriction'>

        <h2>Hi!</h2>

        <div className='about'>

          <p className='about__description'>
            Mi nombre es
            <span className='description__name'> Pedro Caraballo</span>,
            un apasionado desarrollador
            <span className='description__front-end'> Front-end </span>
            y estudiante de
            <span className='description__full-stack'> full stack web.</span>
            <span className='description__objetivo'> Mi objetivo </span>
            es convertirme en un profesional integral en el mundo del desarrollo web, y actualmente estoy dedicando mis
            esfuerzos a adquirir conocimientos y habilidades en todas las áreas del stack tecnológico.
          </p>

          <p className='about__description'>
            Mi enfoque principal se encuentra en el desarrollo
            <span className='description__front-end'> Front-end</span>,
            y manejo con soltura los lenguajes de programación
            <span className='description__lenguage-html'> HTML</span>,
            <span className='description__lenguage-css'> CSS </span>
            y
            <span className='description__lenguage-javascript'> JavaScript</span>.
            Con ellos, puedo construir interfaces atractivas, funcionales y receptivas que brinden una experiencia de usuario excepcional.
            Además, tengo experiencia en el uso de React.js, una biblioteca popular que me permite crear aplicaciones web dinámicas y escalables.
          </p>

          <p className='about__description'>
            Estoy familiarizado con el uso de herramientas como GitHub,
            que utilizo para gestionar y colaborar en proyectos de manera eficiente,
            manteniendo un control de versiones efectivo y facilitando la colaboración en equipo.
          </p>

          <p className='about__description'>
            Mi sed de conocimiento me lleva a mantenerme al tanto de las últimas tendencias y
            avances en el campo del desarrollo web.
          </p>

          <p className='about__description'>
            Si buscas un desarrollador <span className='description__front-end'> Front-end</span> apasionado, motivado y con una mentalidad de aprendizaje constante,
            estaré encantado de colaborar contigo y aportar mis habilidades y perspectivas a tu equipo.
          </p>

        </div>

      </div>

      <div className='home__lenguages'>
        <i className="fa-brands fa-css3-alt lenguage"></i>
        <i className="fa-brands fa-square-js lenguage"></i>
        <i className="fa-brands fa-html5 lenguage"></i>
        <div className='icono-react'>
          <i className="fa-brands fa-react"></i>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout