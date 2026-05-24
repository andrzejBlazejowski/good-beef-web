import { FaqAccordion } from "./FaqAccordion";
import { multilineToBr } from "@/lib/landing/format";
import { getStrapiMediaUrl, landingAsset } from "@/lib/strapi/media";
import type { FaqItem, FaqSection as FaqSectionData } from "@/lib/strapi/types";

type Props = {
  section: FaqSectionData;
  items: FaqItem[];
};

export function FaqSection({ section, items }: Props) {
  const mainImageUrl = getStrapiMediaUrl(section.mainImage);
  const overlayImageUrl = getStrapiMediaUrl(section.overlayImage);

  return (
    <section id="FAQ" className="faq-style2-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 text-right-rtl">
            <div className="faq-style1-content">
              <div className="sec-title">
                <div className="sub-title">
                  <h4 className="thm_clr1">{section.subTitle}</h4>
                  <span className="right"></span>
                </div>
                <h2 style={{ whiteSpace: "pre-line" }}>{multilineToBr(section.title)}</h2>
              </div>
              <div className="shape1">
                <img src={landingAsset("images/shape/shape-3.png")} alt="animowane żeberko" />
              </div>
              <FaqAccordion items={items} />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="faq-style1-image-box">
              <div
                className="pattern-box-bg"
                style={{
                  backgroundImage: `url(${landingAsset("images/pattern/thm-pattern-2.png")})`,
                }}
              ></div>
              <div className="shape1 paroller">
                <img src={landingAsset("images/shape/shape-4.png")} alt="animowany stek" />
              </div>
              <div className="shape2">
                <img
                  className="zoominout"
                  src={landingAsset("images/shape/shape-13.png")}
                  alt="animowane kropki"
                />
              </div>
              {mainImageUrl && (
                <div className="inner">
                  <img
                    src={mainImageUrl}
                    alt={section.mainImageAlt ?? ""}
                  />
                </div>
              )}
              {overlayImageUrl && (
                <div
                  className="overlay-image wow zoomIn"
                  data-wow-delay="100ms"
                  data-wow-duration="3500ms"
                >
                  <img
                    src={overlayImageUrl}
                    alt={section.overlayImageAlt ?? ""}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
