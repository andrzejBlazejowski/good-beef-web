export type StrapiMedia = {
  url?: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
};

export type NavLink = {
  label: string;
  href: string;
  openInNewTab?: boolean;
  order?: number;
};

export type CtaButton = {
  label: string;
  href: string;
  openInNewTab?: boolean;
};

export type HomePageMeta = {
  pageTitle: string;
  metaDescription: string;
  googleAnalyticsId?: string | null;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  } | null;
};

export type SiteHeader = {
  logo?: StrapiMedia | null;
  logoAlt?: string | null;
  mapLinkLabel?: string | null;
  mapLinkUrl?: string | null;
  email?: string | null;
  phonePrefix?: string | null;
  phoneNumber?: string | null;
  navLinks?: NavLink[];
};

export type SliderSlide = {
  documentId?: string;
  title: string;
  image?: StrapiMedia | null;
  order?: number;
};

export type Feature = {
  documentId?: string;
  iconClass: string;
  title: string;
  description: string;
  order?: number;
};

export type HomeAbout = {
  subTitle: string;
  heading: string;
  content: string;
  mainImage?: StrapiMedia | null;
  mainImageAlt?: string | null;
  overlayValue?: string | null;
  overlayLabel?: string | null;
};

export type InfoSection = {
  subTitle: string;
  title: string;
};

export type InfoArticle = {
  documentId?: string;
  title: string;
  content: string;
  image?: StrapiMedia | null;
  imageAlt?: string | null;
  order?: number;
};

export type RecommendedProductsSection = {
  subTitle: string;
  title: string;
  description?: string | null;
  moreButton?: CtaButton | null;
};

export type RecommendedProduct = {
  documentId?: string;
  title: string;
  priceLabel: string;
  image?: StrapiMedia | null;
  imageAlt?: string | null;
  shopUrl: string;
  lightboxImage?: StrapiMedia | null;
  buyButtonLabel?: string | null;
  showBuyButton?: boolean | null;
  order?: number;
};

export type GastronomySection = {
  subTitle: string;
  title: string;
  description?: string | null;
  emailButton?: CtaButton | null;
  phoneButton?: CtaButton | null;
};

export type GastronomyProduct = {
  documentId?: string;
  title: string;
  priceLabel: string;
  image?: StrapiMedia | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
  order?: number;
};

export type FaqSection = {
  subTitle: string;
  title: string;
  mainImage?: StrapiMedia | null;
  mainImageAlt?: string | null;
  overlayImage?: StrapiMedia | null;
  overlayImageAlt?: string | null;
};

export type FaqItem = {
  documentId?: string;
  question: string;
  answer: string;
  defaultOpen?: boolean | null;
  order?: number;
};

export type MeatCategoriesSection = {
  subTitle: string;
  title: string;
};

export type MeatCategory = {
  documentId?: string;
  title: string;
  subtitle?: string | null;
  link?: string | null;
  image?: StrapiMedia | null;
  imageAlt?: string | null;
  order?: number;
};

export type StatCounter = {
  documentId?: string;
  value: number;
  label: string;
  animationFrom?: number | null;
  animationTo?: number | null;
  animationSpeed?: number | null;
  order?: number;
};

export type ContactCta = {
  title: string;
  phoneNumber: string;
  phoneLink?: string | null;
  backgroundImage?: StrapiMedia | null;
};

export type ContactInfoBox = {
  documentId?: string;
  type: "address" | "phone" | "email";
  title: string;
  content: string;
  link?: string | null;
  iconClass?: string | null;
  order?: number;
};

export type Footer = {
  brandName: string;
  brandUrl?: string | null;
  copyrightSuffix?: string | null;
  year?: number | null;
};

export type HomePageData = {
  homePageMeta: HomePageMeta | null;
  siteHeader: SiteHeader | null;
  sliderSlides: SliderSlide[];
  features: Feature[];
  homeAbout: HomeAbout | null;
  infoSection: InfoSection | null;
  infoArticles: InfoArticle[];
  recommendedProductsSection: RecommendedProductsSection | null;
  recommendedProducts: RecommendedProduct[];
  gastronomySection: GastronomySection | null;
  gastronomyProducts: GastronomyProduct[];
  faqSection: FaqSection | null;
  faqItems: FaqItem[];
  meatCategoriesSection: MeatCategoriesSection | null;
  meatCategories: MeatCategory[];
  statCounters: StatCounter[];
  contactCta: ContactCta | null;
  contactInfoBoxes: ContactInfoBox[];
  footer: Footer | null;
};
