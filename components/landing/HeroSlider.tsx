import { multilineToBr } from "@/lib/landing/format";
import { getStrapiMediaUrl } from "@/lib/strapi/media";
import type { SliderSlide } from "@/lib/strapi/types";

type Props = {
  slides: SliderSlide[];
};

export function HeroSlider({ slides }: Props) {
  if (!slides.length) return null;

  return (
    <section className="main-slider style2">
      <div className="slider-box">
        <div className="banner-carousel owl-theme owl-carousel">
          {slides.map((slide) => {
            const imageUrl = getStrapiMediaUrl(slide.image);
            return (
              <div
                key={slide.documentId ?? slide.title}
                className="slide"
              >
                {imageUrl && (
                  <div
                    className="image-layer"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                  ></div>
                )}
                <div className="auto-container">
                  <div className="content text-center">
                    <div className="big-title">
                      <h2>{multilineToBr(slide.title)}</h2>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
