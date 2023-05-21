import './styles/Proyects.css'


const Proyects = () => {
  return (
    <div className='projects'>

      <div className='projects__content'>

        {/* store-shirt */}
        <div className='project store-shirt'>

          <h3 className='projects__title'>Store-shirt</h3>

          <div className='content__img'>
            <img className='img__pages' src="/images/store/inicio.png" alt="" />
          </div>

          <p className='project__descriction'>
            <span>
              Es una tienda virtual para venta de camisas la cual cuenta con:
              <ul>
                <li>Carrito de compra</li>
                <li>Filtros</li>
                <li>Interfas dinamica</li>
              </ul></span>
            <span>Se encuentra diseñada con HTML, CSS, y Javascript.</span>
          </p>

        </div>

        <div className='project weather-app'>

          <h3 className='projects__title'>Weater App</h3>

          <div className='content__img'>

            <video className='video' autoPlay muted controls>
              <source src="/images/weater-app/video-app.mp4" type="video/mp4" />
            </video>
          </div>

          <p className='project__descriction'>
            <span>Aplicacion que realiza la lectura del clima deacuerdoa su hubicacion, con un fondo que cambia deacuerdo al clima.</span>
            <span>Esta diseñada con HTML, CSS, Javacript, React Fontawesome y con la API llamada Open Weather Map.</span>
          </p>
        </div>

        <div className='project pokedex'>

          <h3 className='projects__title'>Pokedex</h3>

          <div className='content__img'>
            <img className='img__pages' src="/images/pokedex/inicio.png" alt="" />
          </div>

          <p className='project__descriction'>
            <span>Aplicacion donde podras encontrar todos los pokemons que existen,
              donde al darle click en la tarjeta podras ver la informacion del pokemon.
            </span>
            <span>
              Esta diseñada con HTML, CSS, Javacript, React y Fontawesome.
            </span>
          </p>
        </div>

        <div className='project lucky-cookies'>
          <h3 className='projects__title'>Lucky Cookies</h3>

          <div className='content__img'>
            <img className='img__pages' src="/images/luky-cookies/inicio.png" alt="" />
          </div>

          <p className='project__descriction'>
            <span>Aplicacion que te dice tu suerte como las galletas fortuna.</span>
            <span>Esta diseñada con HTML, CSS, Javacript, React y Fontawesome.</span>
          </p>
        </div>

        <div className='project dataBase-users'>

          <h3 className='projects__title database'>Database Users</h3>

          <div className='content__img'>
            <img className='img__pages' src="/images/dataBase-user/usuario-creado.png" alt="" />
          </div>

          <p className='project__descriction'>
            <span>Aplicacion para guardar usuarios en una base datos.</span>
            <span>Esta diseñada con HTML, CSS, Javacript, React y Fontawesome.</span>
          </p>
        </div>

        <div className='project locatons-rick-and-moty'>

          <h3 className='projects__title'>Locatons de Rick and Moty</h3>

          <div className='content__img'>
            <img className='img__pages' src="/images/locations-rick-and-morty/inicio.png" alt="" />
          </div>

          <p className='project__descriction'>
            <span>Aplicacion para tener informacion por hubicacion de todos los personajes de rick and morty.</span>
            <span>Esta diseñada con HTML, CSS, Javacript, React y Fontawesome.</span>
          </p>
        </div>

        <div className='project e-commerce'>

          <h3 className='projects__title'>E-commerce</h3>

          <div className='content__img'>
            <img className='img__pages' src="/images/e-commerce/home.png" alt="" />
          </div>

          <p className='project__descriction'>
            <span>
              Aplicación e-commerce de productos electrónicos para simular una tienda online donde se hace login para poder hacer las compras de los productos.
              cuenta con:
              <ul>
                <li>home: donde se observan todos los productos</li>
                <li>producto espesico</li>
                <li>filtro por precio y categoria</li>
                <li>Register</li>
                <li>Login</li>
                <li>Carrito de compras, para comprar debe estar logiado</li>
                <li>Purchases, para enetrar tienen que estar logiado</li>
              </ul>
            </span>

            <span>Esta diseñada con HTML, CSS, Javacript, React y Fontawesome.</span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Proyects