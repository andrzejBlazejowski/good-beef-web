import { landingAsset } from "@/lib/strapi/media";
import type { Feature } from "@/lib/strapi/types";

type Props = {
  features: Feature[];
};

export function FeaturesSection({ features }: Props) {
  if (!features.length) return null;

  return (
    <section className="features-style2-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-right-rtl">
            <div className="features-style2-box">
              <div
                className="thm-pattern-bg"
                style={{
                  backgroundImage: `url(${landingAsset("images/pattern/thm-pattern-1.png")})`,
                }}
              ></div>
              <div className="shape1 float-bob-y">
                <img src={landingAsset("images/shape/shape-6.png")} alt="animowane kropki" />
              </div>
              <ul>
                {features.map((feature) => (
                  <li key={feature.documentId ?? feature.title}>
                    <div className="single-features-style2">
                      <div className="icon-holder thm_bgclr1">
                        <span className={feature.iconClass}></span>
                      </div>
                      <div className="title-holder">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
