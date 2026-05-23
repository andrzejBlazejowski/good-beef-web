const STYLES = [
  "/landing/assets/css/aos.css",
  "/landing/assets/css/bootstrap.min.css",
  "/landing/assets/css/imp.css",
  "/landing/assets/css/custom-animate.css",
  "/landing/assets/css/flaticon.css",
  "/landing/assets/css/font-awesome.min.css",
  "/landing/assets/css/owl.css",
  "/landing/assets/css/magnific-popup.css",
  "/landing/assets/css/scrollbar.css",
  "/landing/assets/css/hiddenbar.css",
  "/landing/assets/css/icomoon.css",
  "/landing/assets/css/color.css",
  "/landing/assets/css/color/theme-color.css",
  "/landing/assets/css/rtl.css",
  "/landing/assets/css/style.css",
  "/landing/assets/css/responsive.css",
] as const;

export function LandingStyles() {
  return (
    <>
      {STYLES.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/landing/assets/images/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/landing/assets/images/favicon/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/landing/assets/images/favicon/favicon-16x16.png"
        sizes="16x16"
      />
    </>
  );
}
