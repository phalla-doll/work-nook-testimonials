import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'WorkNook Testimonials',
  description: 'Trusted by creatives and leaders',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="font-satoshi antialiased text-gray-900 bg-white">
        {children}
      </body>
    </html>
  );
}
