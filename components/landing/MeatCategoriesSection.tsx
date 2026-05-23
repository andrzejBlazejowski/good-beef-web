import { getStrapiMediaUrl, landingAsset } from "@/lib/strapi/media";
import type {
  MeatCategoriesSection as SectionData,
  MeatCategory,
} from "@/lib/strapi/types";

type Props = {
  section: SectionData;
  categories: MeatCategory[];
};

export function MeatCategoriesSection({ section, categories }: Props) {
  return (
    <section id="products" className="team-style2-area">
      <div className="shape1">
        <img src={landingAsset("images/shape/shape-3.png")} alt="animowane żeberko" />
      </div>
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <span className="left"></span>
            <h4 className="thm_clr1">{section.subTitle}</h4>
            <span className="right"></span>
          </div>
          <h2>{section.title}</h2>
        </div>
        <div className="row text-right-rtl">
          <div className="col-xl-12">
            <div className="team-style1-content">
              <div className="row">
                {categories.map((category) => {
                  const imageUrl = getStrapiMediaUrl(category.image);
                  return (
                    <div
                      key={category.documentId ?? category.title}
                      className="col-xl-4 col-lg-4 col-md-12"
                    >
                      <div className="single-team-item style1instyle2">
                        {imageUrl && (
                          <div className="img-holder">
                            <div className="inner">
                              <img
                                src={imageUrl}
                                alt={category.imageAlt ?? category.title}
                              />
                            </div>
                          </div>
                        )}
                        <div className="title-holder">
                          <h3>
                            <a href={category.link ?? "#"}>{category.title}</a>
                          </h3>
                          {category.subtitle && (
                            <p className="thm_clr1">{category.subtitle}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
