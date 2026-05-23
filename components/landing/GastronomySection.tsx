import { multilineToBr } from "@/lib/landing/format";
import { getStrapiMediaUrl, landingAsset } from "@/lib/strapi/media";
import type {
  GastronomyProduct,
  GastronomySection as SectionData,
} from "@/lib/strapi/types";

type Props = {
  section: SectionData;
  products: GastronomyProduct[];
};

function productImageUrl(product: GastronomyProduct): string | undefined {
  return getStrapiMediaUrl(product.image) ?? product.imageUrl ?? undefined;
}

export function GastronomySection({ section, products }: Props) {
  return (
    <section id="ForRestaurants" className="product-style2-area">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <span className="left"></span>
            <h4 className="thm_clr1">{section.subTitle}</h4>
            <span className="right"></span>
          </div>
          <h2 style={{ whiteSpace: "pre-line" }}>{multilineToBr(section.title)}</h2>
          {section.description && <p>{section.description}</p>}
        </div>
        <div className="row text-right-rtl">
          <div className="col-xl-12">
            <div className="product-content-box">
              <div className="shape1 zoominout">
                <img src={landingAsset("images/shape/shape-6.png")} alt="animowane kropki" />
              </div>
              <div className="shape2 float-bob-y">
                <img src={landingAsset("images/shape/shape-9.png")} alt="animowane kiełbaski" />
              </div>
              <div className="shape3 wow slideInRight" data-wow-duration="4000ms">
                <img
                  className="paroller"
                  src={landingAsset("images/shape/shape-10.png")}
                  alt="animowana szynka"
                />
              </div>
              <div className="row">
                {products.map((product) => {
                  const imageUrl = productImageUrl(product);
                  return (
                    <div
                      key={product.documentId ?? product.title}
                      className="col-xl-3 col-lg-6 col-md-6 col-sm-12"
                    >
                      <div
                        className="single-product-item style1instyle2 wow fadeInUp animated"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                      >
                        {imageUrl && (
                          <div className="img-holder">
                            <img
                              src={imageUrl}
                              alt={product.imageAlt ?? product.title}
                            />
                          </div>
                        )}
                        <div className="title-holder">
                          <h4 className="product-title">{product.title}</h4>
                          <div className="rate-box">
                            <p>{product.priceLabel}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row">
                {section.emailButton?.href && (
                  <div className="col-xl-6">
                    <div className="product-style1-button text-center">
                      <a className="btn-one" href={section.emailButton.href}>
                        <span className="txt">{section.emailButton.label}</span>
                      </a>
                    </div>
                  </div>
                )}
                {section.phoneButton?.href && (
                  <div className="col-xl-6">
                    <div className="product-style1-button text-center">
                      <a className="btn-one" href={section.phoneButton.href}>
                        <span className="txt">{section.phoneButton.label}</span>
                      </a>
                    </div>
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
