import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mollinedo Software Solutions | Web Design, Chatbots & SEO",
  description:
    "Custom websites, intelligent chatbots, and SEO optimization for businesses in Miami, Charlotte, and beyond. Mollinedo Software Solutions helps your brand grow with modern, high-performance digital solutions. | Diseño web, chatbots inteligentes y optimización SEO para empresas en Miami, Charlotte y todo el mundo.",
  keywords: [
    // English keywords
    "web design",
    "web development",
    "SEO optimization",
    "chatbots",
    "custom websites",
    "responsive design",
    "Google indexing",
    "business website design",
    "website optimization",
    "Mollinedo Software Solutions",
    "Miami web design",
    "Charlotte web development",
    "website builder",
    "freelance web developer",
    "digital marketing",
    "online visibility",
    // Spanish keywords
    "diseño web",
    "desarrollo web",
    "chatbot inteligente",
    "optimización SEO",
    "posicionamiento web",
    "diseñador web en Miami",
    "desarrollador web en Charlotte",
    "sitios web personalizados",
    "marketing digital",
    "Mollinedo Software Solutions"
  ],
  authors: [{ name: "Alejandro Morales Mollinedo" }],
  creator: "Alejandro Morales Mollinedo",
  publisher: "Mollinedo Software Solutions",
  metadataBase: new URL("https://mollinedosoftwaresolutions.vercel.app"),
  openGraph: {
    url: "https://mollinedosoftwaresolutions.vercel.app",
    images: [
      {
        url: "https://mollinedosoftwaresolutions.vercel.app/assets/logo.png",
        width: 800,
        height: 800,
        alt: "Mollinedo Software Solutions Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* LocalBusiness structured data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://mollinedosoftwaresolutions.vercel.app/#localbusiness",
              name: "Mollinedo Software Solutions",
              url: "https://mollinedosoftwaresolutions.vercel.app",
              logo: "https://mollinedosoftwaresolutions.vercel.app/assets/logo.png",
              image: "https://mollinedosoftwaresolutions.vercel.app/assets/logo.png",
              description:
                "Professional web design, chatbot integration, and SEO optimization for businesses in Miami, Charlotte, and worldwide. | Diseño web, chatbots y SEO para empresas en Miami, Charlotte y todo el mundo.",
              telephone: "+1-786-576-8083",
              email: "mollinedosoftwaresolutions@gmail.com",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Miami",
                addressRegion: "FL",
                addressCountry: "US",
              },
              areaServed: [
                "Miami, FL",
                "Charlotte, NC",
                "United States",
                "Worldwide",
              ],
              sameAs: [
                "https://linkedin.com",
                "https://github.com/mollinedosoftwaresolutions",
              ],
            }),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}



