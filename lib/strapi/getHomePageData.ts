import {
  fetchStrapiCollection,
  fetchStrapiSingle,
  sortByOrder,
} from "./fetchStrapi";
import type {
  ContactCta,
  ContactInfoBox,
  FaqItem,
  FaqSection,
  Feature,
  Footer,
  GastronomyProduct,
  GastronomySection,
  HomeAbout,
  HomePageData,
  HomePageMeta,
  InfoArticle,
  InfoSection,
  MeatCategoriesSection,
  MeatCategory,
  RecommendedProduct,
  RecommendedProductsSection,
  SiteHeader,
  SliderSlide,
  StatCounter,
} from "./types";

const published = "status=published";
const sortOrder = "sort[0]=order:asc";

function collectionQuery(populate: string, extra = ""): string {
  const parts = [populate, sortOrder, published, extra].filter(Boolean);
  return `?${parts.join("&")}`;
}

function singleQuery(populate: string): string {
  return populate ? `?${populate}` : "";
}

export async function getHomePageMeta(): Promise<HomePageMeta | null> {
  return fetchStrapiSingle<HomePageMeta>(
    "home-page-meta",
    singleQuery("populate[seo]=true")
  );
}

export async function getHomePageData(): Promise<HomePageData> {
  const [
    homePageMeta,
    siteHeader,
    sliderSlides,
    features,
    homeAbout,
    infoSection,
    infoArticles,
    recommendedProductsSection,
    recommendedProducts,
    gastronomySection,
    gastronomyProducts,
    faqSection,
    faqItems,
    meatCategoriesSection,
    meatCategories,
    statCounters,
    contactCta,
    contactInfoBoxes,
    footer,
  ] = await Promise.all([
    getHomePageMeta(),
    fetchStrapiSingle<SiteHeader>(
      "site-header",
      singleQuery("populate[logo]=true&populate[navLinks]=true")
    ),
    fetchStrapiCollection<SliderSlide>(
      "slider-slides",
      collectionQuery("populate[image]=true")
    ),
    fetchStrapiCollection<Feature>("features", collectionQuery("")),
    fetchStrapiSingle<HomeAbout>(
      "home-about",
      singleQuery("populate[mainImage]=true")
    ),
    fetchStrapiSingle<InfoSection>("info-section", ""),
    fetchStrapiCollection<InfoArticle>(
      "info-articles",
      collectionQuery("populate[image]=true")
    ),
    fetchStrapiSingle<RecommendedProductsSection>(
      "recommended-products-section",
      singleQuery("populate[moreButton]=true")
    ),
    fetchStrapiCollection<RecommendedProduct>(
      "recommended-products",
      collectionQuery("populate[image]=true&populate[lightboxImage]=true")
    ),
    fetchStrapiSingle<GastronomySection>(
      "gastronomy-section",
      singleQuery("populate[emailButton]=true&populate[phoneButton]=true")
    ),
    fetchStrapiCollection<GastronomyProduct>(
      "gastronomy-products",
      collectionQuery("populate[image]=true")
    ),
    fetchStrapiSingle<FaqSection>(
      "faq-section",
      singleQuery("populate[mainImage]=true&populate[overlayImage]=true")
    ),
    fetchStrapiCollection<FaqItem>("faq-items", collectionQuery("")),
    fetchStrapiSingle<MeatCategoriesSection>("meat-categories-section", ""),
    fetchStrapiCollection<MeatCategory>(
      "meat-categories",
      collectionQuery("populate[image]=true")
    ),
    fetchStrapiCollection<StatCounter>("stat-counters", collectionQuery("")),
    fetchStrapiSingle<ContactCta>(
      "contact-cta",
      singleQuery("populate[backgroundImage]=true")
    ),
    fetchStrapiCollection<ContactInfoBox>(
      "contact-info-boxes",
      collectionQuery("")
    ),
    fetchStrapiSingle<Footer>("footer", ""),
  ]);

  return {
    homePageMeta,
    siteHeader,
    sliderSlides: sortByOrder(sliderSlides),
    features: sortByOrder(features),
    homeAbout,
    infoSection,
    infoArticles: sortByOrder(infoArticles),
    recommendedProductsSection,
    recommendedProducts: sortByOrder(recommendedProducts),
    gastronomySection,
    gastronomyProducts: sortByOrder(gastronomyProducts),
    faqSection,
    faqItems: sortByOrder(faqItems),
    meatCategoriesSection,
    meatCategories: sortByOrder(meatCategories),
    statCounters: sortByOrder(statCounters),
    contactCta,
    contactInfoBoxes: sortByOrder(contactInfoBoxes),
    footer,
  };
}
