import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carusel.css';
import { Link } from "react-router-dom";

export default class Carusel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
    };
    return (
      <div className="main-screen__content">
          <div className="main-screen__slider">
            <Slider {...settings}>
              <div>
                <div className="slide">
                  <div className="slide__image">
                    <Link to="#" >
                      <img src="https://olcha.uz/image/original/sliders/oz/xN70cAuWUDo3Per0VbjTNCzocvT8Cp96pZOJgVabzKQ2aKBQTU1YjICFSYNO.png" alt="Konditsionerlar va split tizimlar" />
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="slide">
                  <div className="slide__image">
                    <Link to="#" >
                      <img src="https://olcha.uz/image/original/sliders/oz/2siKB7ugZlykJY6MB2mTN3WZfy6M8uvH5Sf7zUe8XiVIo6JKsKbTLNdmNHFO.png" alt="Konditsionerlar va split tizimlar" />
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="slide">
                  <div className="slide__image">
                    <Link to="#" >
                      <img src="https://olcha.uz/image/original/sliders/oz/qjS4cKBPoJuAZOjTIikTzQDkLrxPEaNapwxHFjMOt7fOPZPpry0r4hoElJ2G.jpg" alt="Konditsionerlar va split tizimlar" />
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="slide">
                  <div className="slide__image">
                    <Link to="#" >
                      <img src="https://olcha.uz/image/original/sliders/oz/SvWT41slRedD22YOAqyDazSkJLSNf8AW0CgMGz5f0PNRfZDeCRhDAwF6m707.png" alt="Konditsionerlar va split tizimlar" />
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="slide">
                  <div className="slide__image">
                    <Link to="#" >
                      <img src="https://olcha.uz/image/original/sliders/oz/9jVibVPeCoIX4NNj5otLURbeLVlkmedI5Ljc4CfjvP50r8mmkpbuZOiXk97T.png" alt="Konditsionerlar va split tizimlar" />
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="slide">
                  <div className="slide__image">
                    <Link to="#" >
                      <img src="https://olcha.uz/image/original/sliders/oz/Ijkf35mnPhYkNVwIO1jCtDzmRzd5gS9cMaQKbtzWupeDiS7ZNCtLtNgxWebd.png" alt="Konditsionerlar va split tizimlar" />
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="slide">
                  <div className="slide__image">
                    <Link to="#" >
                      <img src="https://olcha.uz/image/original/sliders/oz/3MppQfBpe21jpYJAGKpu5JQ4aAYTW93en84RTYXTGTmyQ8n0J0ZzgUwbJCPJ.png" alt="Konditsionerlar va split tizimlar" />
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="slide">
                  <div className="slide__image">
                    <Link to="#" >
                      <img src="https://olcha.uz/image/original/sliders/oz/DayvoDnsG0zkBUd6TVYpu2WoLxBVna0jcNEcF7lb8e9p4qax6a8tZRuWq3K9.png" alt="Konditsionerlar va split tizimlar" />
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
    );
  }
}
