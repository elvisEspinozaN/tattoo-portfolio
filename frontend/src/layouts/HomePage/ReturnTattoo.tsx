import tattooImg from "../../images/tattoo-img/tattoo-img.jpg";
import "../../styles/our-tattoos.css";

export const ReturnTattoo = () => {
  return (
    <div className="hot-item col-md-4">
      <img src={tattooImg} alt="tattoo sample" className="w-100 hot-img" />
      <button className="hot-btn">Desc.</button>
    </div>
  );
};
