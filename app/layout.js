
import "./globals.css";



export const metadata = {
  title: "FinStack",
  description: "Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
