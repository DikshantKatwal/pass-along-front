import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Oswald } from "next/font/google";
import { Nunito } from "next/font/google";
import "./globals.css";
import Providers from "@/context/queryProvider";
import { AuthProvider } from "@/context/authContext";



const OswaldSans = Oswald({
	variable: "--font-oswald",
	weight: ["200", "300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

const MerriweatherSans = Nunito({
	variable: "--font-nunito",
	weight: ["400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Pass Along",
	description: "Pass along what you dont need",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning >
			<link rel="icon" href="/favicon.png" type="image/png" />
			<body className={` ${OswaldSans.variable} ${MerriweatherSans.variable} antialiased h-full`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Providers>
						<AuthProvider>
							{children}
						</AuthProvider>
					</Providers>
				</ThemeProvider>
			</body>
		</html>
	);
}
