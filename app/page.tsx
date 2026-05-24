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
  let data: Awaited<ReturnType<typeof getHomePageData>> | null = null;
  let errorMessage: string | null = null;

  try {
    data = await getHomePageData();
  } catch (error) {
    errorMessage =
      error instanceof Error ? error.message : "Nie udało się połączyć ze Strapi.";
  }

  if (errorMessage) {
    return <StrapiUnavailable message={errorMessage} />;
  }

  return <LandingPage data={data!} />;
}
