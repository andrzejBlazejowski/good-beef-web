import { getStrapiMediaUrl, landingAsset } from "@/lib/strapi/media";
import type { ContactCta as ContactCtaData } from "@/lib/strapi/types";

type Props = {
  cta: ContactCtaData;
};

export function ContactCta({ cta }: Props) {
  const bgUrl =
    getStrapiMediaUrl(cta.backgroundImage) ??
    landingAsset("images/parallax-background/steki_wolowe_1920_400.jpg");
  const phoneHref = cta.phoneLink ?? `tel:${cta.phoneNumber.replace(/\s/g, "")}`;

  return (
    <section
      id="contact"
      className="slogan-area style2"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="container">
        <div className="slogan-content-box text-right-rtl">
          <div className="title-box">
            <h2 style={{ whiteSpace: "pre-line" }}>
              {cta.title.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 ? <br /> : null}
                </span>
              ))}
            </h2>
          </div>
          <div className="button-box">
            <a className="btn-one" href={phoneHref}>
              <span className="flaticon-phone-call-1 icon_phn txt"></span>
              <span className="txt">{cta.phoneNumber}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
