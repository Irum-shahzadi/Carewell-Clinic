import { Gloock, Golos_Text } from "next/font/google";
import "./globals.css";

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const golosText = Golos_Text({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Carewell Clinic — Compassionate Care. Better Health.",
  description:
    "Carewell Clinic offers personalized, patient-centered healthcare with experienced professionals and modern facilities. Book an appointment today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${gloock.variable} ${golosText.variable}`}>
      <body>{children}</body>
    </html>
  );
}
