import { getStrapiMediaUrl, landingAsset } from "@/lib/strapi/media";
import type { NavLink, SiteHeader as SiteHeaderData } from "@/lib/strapi/types";

type Props = {
  header: SiteHeaderData;
};

function sortedNav(links?: NavLink[]) {
  return [...(links ?? [])].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function SiteHeader({ header }: Props) {
  const logoUrl = getStrapiMediaUrl(header.logo) ?? landingAsset("images/resources/logo_xxs.png");
  const logoAlt = header.logoAlt ?? "Logo good beef";
  const navLinks = sortedNav(header.navLinks);

  return (
    <header className="main-header main-header-style-two">
      <div className="header-top-style2">
        <div className="container-fluid">
          <div className="outer-box clearfix">
            <div className="header-top-right pull-left">
              <div className="header-contact-info-1">
                <ul>
                  {header.mapLinkUrl && (
                    <li>
                      <span className="icon-maps-and-flags"></span>
                      <a
                        href={header.mapLinkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {header.mapLinkLabel ?? "Pokaż na mapie"}
                      </a>
                    </li>
                  )}
                  {header.email && (
                    <li>
                      <span className="icon-opened"></span>
                      <a href={`mailto:${header.email}`}>{header.email}</a>
                    </li>
                  )}
                  {header.phoneNumber && (
                    <li>
                      <span className="icon-phone"></span>
                      {header.phonePrefix ?? "Zadzwoń do nas:"}{" "}
                      <a href={`tel:${header.phoneNumber.replace(/\s/g, "")}`}>
                        {header.phoneNumber}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-style2">
        <div className="container-fluid">
          <div className="outer-box clearfix">
            <div className="header-style2-left clearfix pull-left">
              <div className="logo">
                <a href="/">
                  <img src={logoUrl} alt={logoAlt} title="" />
                </a>
              </div>
            </div>
            <div className="header-style2-middle clearfix pull-left">
              <div className="nav-outer clearfix">
                <div className="mobile-nav-toggler">
                  <div className="inner">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </div>
                </div>
                <nav className="main-menu style2 navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      {navLinks.map((link) => (
                        <li key={`${link.href}-${link.label}`}>
                          <a
                            href={link.href}
                            {...(link.openInNewTab
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky-header">
        <div className="container">
          <div className="clearfix">
            <div className="logo float-left">
              <a href="/" className="img-responsive">
                <img src={logoUrl} alt={logoAlt} title="" />
              </a>
            </div>
            <div className="right-col float-right">
              <nav className="main-menu clearfix"></nav>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn">
          <span className="icon flaticon-multiply"></span>
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <a href="/">
              <img src={logoUrl} alt={logoAlt} title="" />
            </a>
          </div>
          <div className="menu-outer"></div>
        </nav>
      </div>
    </header>
  );
}
