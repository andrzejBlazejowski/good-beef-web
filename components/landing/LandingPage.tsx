import type { HomePageData } from "@/lib/strapi/types";
import { AboutSection } from "./AboutSection";
import { ContactCta } from "./ContactCta";
import { ContactInfoBoxes } from "./ContactInfoBoxes";
import { FaqSection } from "./FaqSection";
import { FeaturesSection } from "./FeaturesSection";
import { GastronomySection } from "./GastronomySection";
import { HeroSlider } from "./HeroSlider";
import { InfoSection } from "./InfoSection";
import { LandingScripts } from "./LandingScripts";
import { MeatCategoriesSection } from "./MeatCategoriesSection";
import { RecommendedProductsSection } from "./RecommendedProductsSection";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { StatCountersSection } from "./StatCountersSection";

type Props = {
  data: HomePageData;
};

export function LandingPage({ data }: Props) {
  const gaId = data.homePageMeta?.googleAnalyticsId;

  return (
    <>
      <div className="boxed_wrapper ltr">
        {data.siteHeader && <SiteHeader header={data.siteHeader} />}
        <HeroSlider slides={data.sliderSlides} />
        <FeaturesSection features={data.features} />
        {data.homeAbout && <AboutSection about={data.homeAbout} />}
        {data.infoSection && (
          <InfoSection section={data.infoSection} articles={data.infoArticles} />
        )}
        {data.recommendedProductsSection && (
          <RecommendedProductsSection
            section={data.recommendedProductsSection}
            products={data.recommendedProducts}
          />
        )}
        {data.gastronomySection && (
          <GastronomySection
            section={data.gastronomySection}
            products={data.gastronomyProducts}
          />
        )}
        {data.faqSection && (
          <FaqSection section={data.faqSection} items={data.faqItems} />
        )}
        {data.meatCategoriesSection && (
          <MeatCategoriesSection
            section={data.meatCategoriesSection}
            categories={data.meatCategories}
          />
        )}
        <StatCountersSection counters={data.statCounters} />
        {data.contactCta && <ContactCta cta={data.contactCta} />}
        <ContactInfoBoxes boxes={data.contactInfoBoxes} />
        {data.footer && <SiteFooter footer={data.footer} />}

        <button
          className="scroll-top scroll-to-target thm_bgclr1"
          data-target="html"
          type="button"
        >
          <span className="fa fa-angle-up"></span>
        </button>
      </div>
      <LandingScripts googleAnalyticsId={gaId} />
    </>
  );
}
