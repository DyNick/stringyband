import { Carousel } from "react-responsive-carousel";
import styleCarousel from "./Carousel.module.scss";
const CarouselInner = () => {
  return (
    <Carousel
    showThumbs={false}
    autoPlay={true}
    showStatus={false}
    infiniteLoop={true}
    showArrows={false}
  >
    <div>
      <img
        className={styleCarousel.carouselImage}
        alt="stringy band show"
        src="https://scontent.fiev18-1.fna.fbcdn.net/v/t1.6435-9/80735660_802251260246092_6174872205126533120_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=QDNDwWN3G04AX9KRIeF&_nc_ht=scontent.fiev18-1.fna&oh=00_AT8r241H3IgM23EzaV72bqIls3l8fy545r35GtUxbWGpQw&oe=629875C4"
      />
    </div>
    <div>
      <img
        className={styleCarousel.carouselImage}
        alt="stringy band show"
        src="https://scontent.fiev18-1.fna.fbcdn.net/v/t1.6435-9/81800371_802250806912804_3449265476385898496_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=3ocbaGd__3kAX_Yboaa&_nc_ht=scontent.fiev18-1.fna&oh=00_AT9gMl4m3htHPIGOeEQ-2MUODBABOpwdp5vzpGepi1xOhQ&oe=6298D0D4"
      />
    </div>
    <div>
      <img
        className={styleCarousel.carouselImage}
        alt="stringy band show"
        src="https://scontent.fiev18-1.fna.fbcdn.net/v/t1.6435-9/80993996_802250623579489_4294313713646698496_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=DZYglaEsIGcAX-KwhQt&tn=ucj9YcUcWx7yo_7T&_nc_ht=scontent.fiev18-1.fna&oh=00_AT_STlGW4pA_Zv6wqLGV9M2UKx4m_yHYs_4MrYOhpej9aw&oe=62983ADA"
      />
    </div>
  </Carousel>
  );
};

export default CarouselInner;
