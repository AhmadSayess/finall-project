import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider2 from "../../images/Slider-2.jpg";
import "./carousal.css";

export default function Carousal() {
  // const ArrowLeft = (props) => (
  //     <button
  //         {...props}
  //         className="letAr"
  //     >
  //         next
  //     </button>
  // );
  // const ArrowRight = (props) => (
  //     <button
  //         {...props}
  //         className="riAr"
  //     >
  //         prev
  //     </button>
  // );
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // prevArrow: <ArrowLeft />,
    // nextArrow: <ArrowRight />,
  };
  return (
    <div className="sliderContainer">
      <Slider className="mySlider" {...settings}>
        <section className="">
          <div className="singleSlider">
            <img src={Slider2} alt="loading" />
            <div className="contentSlider">
              <h1> You have a profession ? Share your service !</h1>
              <button className="">Be a Provider</button>
            </div>
          </div>
        </section>

        <section className="">
          <div className="singleSlider">
            <img src={Slider2} alt="loading" />
            <div className="contentSlider">
              <h1> You have a profession ? Share your service !</h1>
              <button className="">Be a Provider</button>
            </div>
          </div>
        </section>
      </Slider>
    </div>
  );
}

// import React from "react";
// import "./carousal.css";

// function Carousal() {
//   const img1 =
//     "https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg";
//   const img2 =
//     "https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg";
//   const img3 =
//     "https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg";

//   const [IMG, setIMG] = React.useState(img1);

//   const nextImg = () => {
//     if (IMG === img1) {
//       setIMG(img2);
//     } else if (IMG === img2) {
//       setIMG(img3);
//     } else if (IMG === img3) {
//       setIMG(img1);
//     }
//   };

//   setTimeout(nextImg, 3000)
//   return (
//     <React.Fragment>
//       <div className="imgC">
//         <img src={IMG} alt="img1" />
//       </div>
//       <button onClick={nextImg}>next</button>
//     </React.Fragment>
//   );
// }

// export default Carousal;
