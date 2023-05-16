import './styles/homeAbout.css'

const HomeAbout = () => {
  return (
    <div className='home-about'>

      <h2>Hi!</h2>

      <div className='home__about-descriction'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ad dignissimos vitae voluptatum nostrum reiciendis modi atque et est officiis nulla cupiditate accusantium cum porro, necessitatibus ducimus praesentium delectus enim temporibus.
        </p>

      </div>

      <div className='home__lenguages'>
        <i className="fa-brands fa-css3-alt lenguage"></i>
        <i class="fa-brands fa-square-js lenguage"></i>
        <i class="fa-brands fa-html5 lenguage"></i>
        <i class="fa-brands fa-react lenguage"></i>
      </div>
    </div>
  )
}

export default HomeAbout