import tattooImg from "../../images/tattoo-img/tattoo-img.jpg";

export const ReturnTattooCarousel = () => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
      <div className="text-center">
        <img src={tattooImg} alt="tattoo sample" className="w-100" />
      </div>
    </div>
  );
};
