import { splitParagraphs } from "@/lib/landing/format";
import { getStrapiMediaUrl, landingAsset } from "@/lib/strapi/media";
import type { HomeAbout } from "@/lib/strapi/types";

type Props = {
  about: HomeAbout;
};

export function AboutSection({ about }: Props) {
  const mainImageUrl =
    getStrapiMediaUrl(about.mainImage) ??
    landingAsset("images/about/krowy2_453x453.jpg");

  return (
    <section id="About" className="about-style2-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 text-right-rtl">
            <div className="about-style2-content-box">
              <div className="sec-title">
                <div className="sub-title">
                  <h4>{about.subTitle}</h4>
                  <span className="right"></span>
                </div>
                <h1>{about.heading}</h1>
              </div>
              <div className="inner-content">
                <div className="text">
                  {splitParagraphs(about.content).map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="about-style2-image-box clearfix">
              <div className="shape1">
                <img
                  src={landingAsset("images/shape/shape-5.png")}
                  alt="kawałki mięsa wystające zza zdjęcia krów"
                />
              </div>
              <div className="shape2 zoominout">
                <img src={landingAsset("images/shape/shape-12.png")} alt="animowane kropki" />
              </div>
              <div className="main-image">
                <div className="inner">
                  <img
                    src={mainImageUrl}
                    alt={about.mainImageAlt ?? ""}
                  />
                </div>
                {(about.overlayValue || about.overlayLabel) && (
                  <div className="overlay-content-box">
                    {about.overlayValue && <h2>{about.overlayValue}</h2>}
                    {about.overlayLabel && <h6>{about.overlayLabel}</h6>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
