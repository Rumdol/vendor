import Providers from "@/components/Providers";
import '@/styles/globals.css';
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '700']
})

export const viewport  = {
	themeColor: '#673ab7',
}
export const metadata = {
    title: 'Romdul',
    description: "Perfume store for Vendor",

    manifest: "/static/manifest.json"

}
export default function RootLayout({ children }) {
    return <html lang="en-gb" className={roboto.className}>
        <Providers>
            <body>
                {children}
            </body>
        </Providers>
    </html>
}
