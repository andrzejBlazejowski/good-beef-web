import { LandingPage } from "@/components/landing/LandingPage";
import { StrapiUnavailable } from "@/components/landing/StrapiUnavailable";
import { getHomePageData, getHomePageMeta } from "@/lib/strapi/getHomePageData";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const meta = await getHomePageMeta();
    if (!meta) {
      return { title: "Good Beef" };
    }
    return {
      title: meta.pageTitle,
      description: meta.metaDescription,
    };
  } catch {
    return { title: "Good Beef" };
  }
}

export default async function Home() {
  try {
    const data = await getHomePageData();
    return <LandingPage data={data} />;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Nie udało się połączyć ze Strapi.";
    return <StrapiUnavailable message={message} />;
  }
}
