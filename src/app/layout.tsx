import type { Metadata } from 'next'
import './globals.css'
import { Oxanium } from 'next/font/google'

export const metadata: Metadata = {
	title: 'Dev Code',
}

const oxanium = Oxanium({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-oxanium',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${oxanium.variable}`}>
			<head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
				/>
			</head>
			<body className="bg-[#0f1216] text-gray-100 bg-[url('/background.png')] bg-no-repeat bg-top sm:bg-right-top">
				<main className="max-w-[1240] mx-auto px-5 py-8 md:py-0">
					{children}
				</main>
			</body>
		</html>
	)
}
