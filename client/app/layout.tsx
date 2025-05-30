import type { Metadata } from "next";
import "./globals.css";
import SideMenu from "@/components/SideMenu";
import Header from "@/components/Header";
import LowerHeader from "@/components/LowerHeader";
import ContextAPI from "@/context/ContextAPI";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ContextAPI>
        <body>
          <div className="flex min-h-screen">
            <aside className="xl:w-64 z-20 box-shadow">
              <SideMenu />
            </aside>
            <main className="flex-1 w-full">
              <Header />
              <LowerHeader />
              {children}
            </main>
          </div>
        </body>
      </ContextAPI>
    </html>

  );
}
