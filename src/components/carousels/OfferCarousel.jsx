import { Carousel } from "react-responsive-carousel";

const OfferCarousel = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
        >
            <div>
                <img src="../../../public/images/Fashion/Offer-Slider/Goat-Sale.png" />
            </div>
            <div>
                <img src="../../../public/images/Fashion/Offer-Slider/Rakshabandhan-Special-Offer.png" />
            </div>
            <div>
                <img src="../../../public/images/Fashion/Offer-Slider/Nexr-Gen-Offer.png" />
            </div>
            <div>
                <img src="../../../public/images/Fashion/Offer-Slider/Spoyl-Brand-Offer.png" />
            </div>
            <div>
                <img src="../../../public/images/Fashion/Offer-Slider/Cloths-Offer.png" />
            </div>
            <div>
                <img src="../../../public/images/Fashion/Offer-Slider/Brand-Offer.png" />
            </div>
            <div>
                <img src="../../../public/images/Fashion/Offer-Slider/T-Shirt-Offer.png" />
            </div>
            <div>
                <img src="../../../public/images/Fashion/Offer-Slider/Travel-Offre.png" />
            </div>
        </Carousel>
    )
}

export default OfferCarousel;