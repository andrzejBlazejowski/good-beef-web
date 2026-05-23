import { getStrapiMediaUrl } from "@/lib/strapi/media";
import type { InfoArticle, InfoSection as InfoSectionData } from "@/lib/strapi/types";

type Props = {
  section: InfoSectionData;
  articles: InfoArticle[];
};

export function InfoSection({ section, articles }: Props) {
  return (
    <section id="Info" className="blog-style2-area">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <span className="left"></span>
            <h4>{section.subTitle}</h4>
            <span className="right"></span>
          </div>
          <h2>{section.title}</h2>
        </div>
        <div className="row text-right-rtl">
          {articles.map((article) => {
            const imageUrl = getStrapiMediaUrl(article.image);
            return (
              <div key={article.documentId ?? article.title} className="col-xl-6 col-lg-6">
                <div
                  className="single-blog-style1 style1instyle2 wow fadeInUp"
                  data-wow-duration="1500ms"
                >
                  {imageUrl && (
                    <div className="img-holder">
                      <div className="inner">
                        <img src={imageUrl} alt={article.imageAlt ?? article.title} />
                      </div>
                    </div>
                  )}
                  <div className="text-holder">
                    <h3 className="blog-title">{article.title}</h3>
                    <div className="text">
                      <p>{article.content}</p>
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
