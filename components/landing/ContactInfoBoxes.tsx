import { landingAsset } from "@/lib/strapi/media";
import type { ContactInfoBox } from "@/lib/strapi/types";

type Props = {
  boxes: ContactInfoBox[];
};

const DEFAULT_ICONS: Record<ContactInfoBox["type"], string> = {
  address: "flaticon-maps-and-flags",
  phone: "flaticon-phone-call-1",
  email: "flaticon-email",
};

export function ContactInfoBoxes({ boxes }: Props) {
  if (!boxes.length) return null;

  return (
    <section className="info-style1-area">
      <div
        className="layer-outer"
        style={{
          backgroundImage: `url(${landingAsset("images/pattern/thm-pattern-3.png")})`,
        }}
      ></div>
      <div className="container">
        <div className="row text-right-rtl">
          {boxes.map((box) => {
            const iconClass = box.iconClass ?? DEFAULT_ICONS[box.type];
            return (
              <div
                key={box.documentId ?? box.title}
                className="col-xl-4 col-lg-4"
              >
                <div className="single-info-box">
                  <div className="inner">
                    <div className="icon-holder">
                      <span className={iconClass}></span>
                    </div>
                    <div className="title-holder">
                      <h3>{box.title}</h3>
                      {box.link ? (
                        <p>
                          <a href={box.link}>{box.content}</a>
                        </p>
                      ) : (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: box.content.replace(/\n/g, "<br/>"),
                          }}
                        />
                      )}
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
