import './styles/Proyects.css'


const Proyects = () => {
  return (
    <div className='projects'>

      <div className='projects__content'>
        
        <div className='project store-shirt'>
          <h3 className='projects__title'>Store-shirt</h3>
          <div className='content__img'>
            <img className='img__pages' src="/public/images/store/inicio.png" alt="" />
          </div>

          <p className='project__descriction'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat vero velit expedita? Sed, delectus quos. Ea dolores maxime vitae dolorum? Adipisci illum illo consequatur tempore suscipit, modi tempora totam.</p>

        </div>

        <div className='project weather-app'>

          <h3 className='projects__title'>Weater App</h3>
          <div className='content__img'>
            <video className='video' autoPlay muted controls>
              <source src="/public/images/weater-app/video-app.mp4" type="video/mp4" />
            </video>
          </div>

          <p className='project__descriction'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat vero velit expedita? Sed, delectus quos. Ea dolores maxime vitae dolorum? Adipisci illum illo consequatur tempore suscipit, modi tempora totam.</p>
        </div>

        <div className='project pokedex'>

          <h3 className='projects__title'>Pokedex</h3>

          <div className='content__img'>
            <img className='img__pages' src="/public/images/pokedex/inicio.png" alt="" />
          </div>

          <p className='project__descriction'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat vero velit expedita? Sed, delectus quos. Ea dolores maxime vitae dolorum? Adipisci illum illo consequatur tempore suscipit, modi tempora totam.</p>
        </div>

        <div className='project lucky-cookies'>
          <h3 className='projects__title'>Lucky Cookies</h3>

          <div className='content__img'>
            <img className='img__pages' src="/public/images/luky-cookies/inicio.png" alt="" />
          </div>

          <p className='project__descriction'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat vero velit expedita? Sed, delectus quos. Ea dolores maxime vitae dolorum? Adipisci illum illo consequatur tempore suscipit, modi tempora totam.</p>
        </div>

        <div className='project life-tips'>

          <h3 className='projects__title'>Life tips</h3>

          <div className='content__img'>
            <img className='img__pages' src="/public/images/life-tips/frase.png" alt="" />
          </div>

          <p className='project__descriction'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat vero velit expedita? Sed, delectus quos. Ea dolores maxime vitae dolorum? Adipisci illum illo consequatur tempore suscipit, modi tempora totam.</p>
        </div>

        <div className='project dataBase-users'>

          <h3 className='projects__title database'>Database Users</h3>

          <div className='content__img'>
            <img className='img__pages' src="/public/images/dataBase-user/usuario-creado.png" alt="" />
          </div>

          <p className='project__descriction'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat vero velit expedita? Sed, delectus quos. Ea dolores maxime vitae dolorum? Adipisci illum illo consequatur tempore suscipit, modi tempora totam.</p>
        </div>

        <div className='project locatons-rick-and-moty'>

          <h3 className='projects__title'>Locatons de Rick and Moty</h3>

          <div className='content__img'>
            <img className='img__pages' src="/public/images/locations-rick-and-morty/inicio.png" alt="" />
          </div>

          <p className='project__descriction'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat vero velit expedita? Sed, delectus quos. Ea dolores maxime vitae dolorum? Adipisci illum illo consequatur tempore suscipit, modi tempora totam.</p>
        </div>

        <div className='project e-commerce'>

          <h3 className='projects__title'>E-commerce</h3>

          <div className='content__img'>
            <img className='img__pages' src="/public/images/e-commerce/home.png" alt="" />
          </div>

          <p className='project__descriction'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste placeat vero velit expedita? Sed, delectus quos. Ea dolores maxime vitae dolorum? Adipisci illum illo consequatur tempore suscipit, modi tempora totam.</p>
        </div>
      </div>

    </div>
  )
}

export default Proyects