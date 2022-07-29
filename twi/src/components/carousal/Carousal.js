import React from "react";
import "./carousal.css";

function Carousal() {
  const img1 =
    "https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg";
  const img2 =
    "https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg";
  const img3 =
    "https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg";

  const [IMG, setIMG] = React.useState(img1);

  const nextImg = () => {
    if (IMG === img1) {
      setIMG(img2);
    } else if (IMG === img2) {
      setIMG(img3);
    } else if (IMG === img3) {
      setIMG(img1);
    }
  };

  setTimeout(nextImg, 3000)
  return (
    <React.Fragment>
      <div className="imgC">
        <img src={IMG} alt="img1" />
      </div>
      <button onClick={nextImg}>next</button>
    </React.Fragment>
  );
}

export default Carousal;
