import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "@/trpc/react";
import MenuNavigation from "./_components/Navigation";
import SearchBar from "./modules/SearchBar";

export const metadata = {
  title: "Coding test",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
			<body className="max-w-[390px]">
				<SearchBar keywords=""  />
				<TRPCReactProvider>{children}</TRPCReactProvider>
				<MenuNavigation  />
      </body>
    </html>
  );
}
