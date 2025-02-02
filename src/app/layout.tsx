import type { Metadata } from "next";
import { League_Spartan, Antonio } from "next/font/google";
import "@/styles/globals.css";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });
const antonio = Antonio({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Planets Fact",
    default: "Planets Fact | Frontend Mentor Coding Challenge",
  },
  description:
    "Discover fascinating facts about our solar system and beyond. Explore detailed planet guides, astronomical phenomena, and the latest space discoveries at Planets Fact.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} ${antonio.className}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
