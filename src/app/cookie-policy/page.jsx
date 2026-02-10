export const metadata = {
  title: "Cookie Policy |Fourzaa Global",
  description:
    "Learn howFourzaa Global uses cookies to improve your experience and manage global export inquiries.",
};

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Cookie Policy
          </h1>
          <p className="text-foreground/70">
            This Cookie Policy explains howFourzaa Global uses cookies and
            similar technologies to recognize visitors, improve website
            performance, and support export-related inquiries.
          </p>
        </header>

        {/* Content */}
        <div className="glass p-8 rounded-2xl space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              What are cookies?
            </h2>
            <p className="text-foreground/70">
              Cookies are small data files placed on your device when you visit a
              website. They are commonly used to enable website functionality,
              improve efficiency, and provide analytical insights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              How we use cookies
            </h2>
            <p className="text-foreground/70">
              We use both first-party and third-party cookies for operational,
              functional, and analytical purposes.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-foreground/70">
              <li>
                <strong className="text-foreground">
                  Essential Cookies:
                </strong>{" "}
                Required for core site functionality, such as maintaining your
                session during inquiry form submissions.
              </li>
              <li>
                <strong className="text-foreground">
                  Preference Cookies:
                </strong>{" "}
                Store selections such as preferred currency (USD, EUR, INR).
              </li>
              <li>
                <strong className="text-foreground">
                  Analytics Cookies:
                </strong>{" "}
                Help us understand visitor interactions with our product
                catalog.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              Specific cookies we use
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border border-border text-sm">
                <thead className="bg-surface">
                  <tr>
                    <th className="p-3 border border-border text-left font-semibold text-foreground">
                      Cookie Type
                    </th>
                    <th className="p-3 border border-border text-left font-semibold text-foreground">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-border text-foreground">
                      Functional
                    </td>
                    <td className="p-3 border border-border text-foreground/70">
                      Stores currency preferences and session data for product
                      filtering.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border text-foreground">
                      Security
                    </td>
                    <td className="p-3 border border-border text-foreground/70">
                      Protects inquiry forms from spam and unauthorized
                      submissions.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              How can I control cookies?
            </h2>
            <p className="text-foreground/70">
              You may control or disable cookies through your browser settings.
              Please note that disabling cookies may limit certain features,
              such as pre-filled inquiry forms or currency preferences.
            </p>
          </section>

          <section className="rounded-xl bg-accent/40 border border-border p-6">
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Updates to this Policy
            </h2>
            <p className="text-foreground/70 text-sm">
              This Cookie Policy may be updated periodically to reflect changes
              in legal requirements, operational practices, or the technologies
              we use. We encourage regular review of this page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
