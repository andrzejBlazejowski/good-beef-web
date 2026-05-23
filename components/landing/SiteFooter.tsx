import type { Footer } from "@/lib/strapi/types";

type Props = {
  footer: Footer;
};

export function SiteFooter({ footer }: Props) {
  const year = footer.year ?? new Date().getFullYear();
  const suffix = footer.copyrightSuffix ?? "Wszelkie prawa zastrzeżone";

  return (
    <footer className="footer-area">
      <div className="footer-bottom">
        <div className="container">
          <div className="outer-box">
            <div className="copyright-text">
              <p>
                <a href={footer.brandUrl ?? "#"} className="thm_clr1">
                  {footer.brandName}
                </a>{" "}
                &copy; {year} {suffix}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
