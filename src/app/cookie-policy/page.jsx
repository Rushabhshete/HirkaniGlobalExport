import React from "react";

export const metadata = {
  title: "Cookie Policy | Spice Export Co.",
  description:
    "Learn how Spice Export Co. uses cookies to improve your experience and manage global export inquiries.",
};
export default function CookiePolicy() {
  return (
    <main className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>

        <div className="prose prose-orange max-w-none text-gray-600 space-y-6">
          <section>
            <p>
              This Cookie Policy explains how Spice Export Co. ("we", "us", and
              "our") uses cookies and similar technologies to recognize you when
              you visit our website. It explains what these technologies are and
              why we use them, as well as your rights to control our use of
              them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What are cookies?
            </h2>
            <p>
              Cookies are small data files that are placed on your computer or
              mobile device when you visit a website. Cookies are widely used by
              website owners in order to make their websites work, or to work
              more efficiently, as well as to provide reporting information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How we use cookies
            </h2>
            <p>
              We use first-party and third-party cookies for several reasons.
              Some cookies are required for technical reasons in order for our
              Website to operate, and we refer to these as "essential" or
              "strictly necessary" cookies.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> These are vital for the
                Website to function, such as maintaining your session when
                filling out the inquiry form.
              </li>
              <li>
                <strong>Preference Cookies:</strong> These allow our site to
                remember choices you make, such as your preferred currency (USD,
                EUR, INR) handled via our currency system.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> These help us understand how
                visitors interact with our export catalog so we can improve our
                product display.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Specific Cookies we use
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-200 text-left">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-3 border border-gray-200">Cookie Type</th>
                    <th className="p-3 border border-gray-200">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-200 font-medium">
                      Functional
                    </td>
                    <td className="p-3 border border-gray-200">
                      Stores currency preferences and session data for the
                      product filter.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200 font-medium">
                      Security
                    </td>
                    <td className="p-3 border border-gray-200">
                      Helps protect our inquiry forms from spam and unauthorized
                      submissions.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How can I control cookies?
            </h2>
            <p>
              You have the right to decide whether to accept or reject cookies.
              You can set or amend your web browser controls to accept or refuse
              cookies. If you choose to reject cookies, you may still use our
              website, though your access to some functionality and areas of our
              website (like pre-filled inquiry forms) may be restricted.
            </p>
          </section>

          <section className="bg-orange-50 p-6 rounded-xl border border-orange-100">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Updates to this Policy
            </h2>
            <p className="text-sm">
              We may update this Cookie Policy from time to time in order to
              reflect, for example, changes to the cookies we use or for other
              operational, legal, or regulatory reasons. Please re-visit this
              Cookie Policy regularly to stay informed.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
