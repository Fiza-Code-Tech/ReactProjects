import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby crucifix big mood cornhole heirloom trust fund yuccie 8-bit
            edison bulb retro succulents pickled hoodie. Mustache tofu squid
            JOMO trust fund. Chambray brunch air plant butcher, microdosing
            copper mug master cleanse ennui la croix craft beer stumptown
            narwhal.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
