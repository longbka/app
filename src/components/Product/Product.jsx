import "./Product.scss";
import { useState } from "react";
import Lightbox from "react-image-lightbox"; //thu vien slide hinh anh
import sneaker1 from "../../assets/images/sneaker1.jpg";
import sneaker2 from "../../assets/images/sneaker2.jpg";
import sneaker3 from "../../assets/images/sneaker3.jpg";
import sneaker4 from "../../assets/images/sneaker4.jpg";
const Product = () => {
  const [currentUpImg, setCurrentUpImg] = useState(sneaker1);
  const [isOpen, setIsOpen] = useState(false);
  const images = [sneaker1, sneaker2, sneaker3, sneaker4];
  const [photoIndex, setPhotoIndex] = useState(0);
  const handleClickPreviewImg = () => {
    let index = images.findIndex((item) => item === currentUpImg);
    setPhotoIndex(index);
    setIsOpen(true);
  };
  return (
    <div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
      <div className="product-container">
        <div className="content-left">
          <div className="img-up">
            <img
              src={currentUpImg}
              alt="for sell"
              onClick={() => handleClickPreviewImg()}
            />
          </div>
          <div className="img-down">
            <div className="img-small">
              <img
                alt="for sell"
                src={sneaker1}
                onClick={() => setCurrentUpImg(sneaker1)}
                className={currentUpImg === sneaker1 ? "active" : ""}
              />
            </div>
            <div className="img-small">
              <img
                alt="for sell"
                src={sneaker2}
                onClick={() => setCurrentUpImg(sneaker2)}
                className={currentUpImg === sneaker2 ? "active" : ""}
              />
            </div>
            <div className="img-small">
              <img
                alt="for sell"
                src={sneaker3}
                onClick={() => setCurrentUpImg(sneaker3)}
                className={currentUpImg === sneaker3 ? "active" : ""}
              />
            </div>
            <div className="img-small">
              <img
                alt="for sell"
                src={sneaker4}
                onClick={() => setCurrentUpImg(sneaker4)}
                className={currentUpImg === sneaker4 ? "active" : ""}
              />
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="title">Giày chạy bộ nam New Balance</div>
          <div className="price">3.695.000</div>
          <div className="size">Size: 40</div>
          <div className="action">
            <label>Số lượng</label>
            <input type="number" placeholder={0} min="0" className="quantity" />
            <button className="buy">Chọn mua</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
