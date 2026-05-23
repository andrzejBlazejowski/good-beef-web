export function StrapiUnavailable({ message }: { message: string }) {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "40rem",
        margin: "4rem auto",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1>Good Beef</h1>
      <p>{message}</p>
      <p>
        Uruchom Strapi (<code>npm run develop</code> w <code>good-beef-strapi</code>
        ), następnie odśwież stronę. Jeśli baza jest pusta, wykonaj{" "}
        <code>npm run seed:landing</code>.
      </p>
    </div>
  );
}
