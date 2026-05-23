import { multilineToBr } from "@/lib/landing/format";
import { getStrapiMediaUrl, landingAsset } from "@/lib/strapi/media";
import type {
  RecommendedProduct,
  RecommendedProductsSection as SectionData,
} from "@/lib/strapi/types";

type Props = {
  section: SectionData;
  products: RecommendedProduct[];
};

export function RecommendedProductsSection({ section, products }: Props) {
  return (
    <section id="prices" className="product-style2-area">
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
                  const imageUrl = getStrapiMediaUrl(product.image);
                  const lightboxUrl =
                    getStrapiMediaUrl(product.lightboxImage) ??
                    landingAsset("images/shop/shop-2.jpg");
                  const showBuy = product.showBuyButton !== false;
                  const buyLabel = product.buyButtonLabel ?? "Kup teraz";

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
                            <img src={imageUrl} alt={product.imageAlt ?? product.title} />
                            <div className="overlay-style-one">
                              <div className="box">
                                <div className="content">
                                  <div className="zoom-button">
                                    <a
                                      className="lightbox-image"
                                      data-fancybox="gallery"
                                      href={lightboxUrl}
                                    >
                                      <span className="icon-magnifiying-glass"></span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="title-holder">
                          <h4 className="product-title">
                            <a href={product.shopUrl}>{product.title}</a>
                          </h4>
                          <div className="rate-box">
                            <p>{product.priceLabel}</p>
                          </div>
                          {showBuy && (
                            <div className="button-box">
                              <div className="cart-button">
                                <a className="btn-one" href={product.shopUrl}>
                                  <span className="txt">{buyLabel}</span>
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {section.moreButton?.href && (
                <div className="row">
                  <div className="col-xl-12">
                    <div className="product-style1-button text-center">
                      <a
                        className="btn-one"
                        href={section.moreButton.href}
                        {...(section.moreButton.openInNewTab
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        <span className="txt">{section.moreButton.label}</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
