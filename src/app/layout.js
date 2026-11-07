import "./main.scss";
import Header from "./(layout)/Header";
import Footer from "./(layout)/Footer";
import StoreProvider from "@/services/Provider";

export const metadata = {
  title: "Wemark",
  description: "Creative digital agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <StoreProvider>

          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
