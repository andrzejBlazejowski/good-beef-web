import { landingAsset } from "@/lib/strapi/media";
import type { StatCounter } from "@/lib/strapi/types";

type Props = {
  counters: StatCounter[];
};

export function StatCountersSection({ counters }: Props) {
  if (!counters.length) return null;

  return (
    <section className="fact-counter-style2-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="fact-counter-style2">
              <div
                className="shape1 zoom-fade wow zoomInDown"
                data-wow-duration="4000ms"
              >
                <img src={landingAsset("images/shape/shape-6.png")} alt="animowane kropki" />
              </div>
              <div
                className="shape2 zoom-fade wow zoomInDown"
                data-wow-duration="4000ms"
              >
                <img src={landingAsset("images/shape/shape-6.png")} alt="animowane kropki" />
              </div>
              <ul className="fact-counter-box-style2 clearfix">
                {counters.map((counter, index) => {
                  const delay = 100 + index * 200;
                  const animTo = counter.animationTo ?? counter.value;
                  return (
                    <li
                      key={counter.documentId ?? counter.label}
                      className="single-fact-counter wow fadeInUp text-center"
                      data-wow-delay={`${delay}ms`}
                      data-wow-duration="1500ms"
                    >
                      <div className="count-box">
                        <h2>
                          <span
                            className="timer"
                            data-from={counter.animationFrom ?? 1}
                            data-to={animTo}
                            data-speed={counter.animationSpeed ?? 5000}
                            data-refresh-interval="50"
                          >
                            {counter.value}
                          </span>
                        </h2>
                        <div className="sub-title">
                          <h5>{counter.label}</h5>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
