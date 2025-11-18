import { OrderProvider } from '@/lib/context/OrderContext';
import './globals.css';
import LayoutContent from '@/components/LayoutContent';

export const metadata = {
  title: "IJ Stitches | We Clothe The World",
  description:
    "Expert tailoring services since 2003. Custom clothing and professional stitching for all your fashion needs.",
  icons: {
    icon: "/ij-logo.png",
    shortcut: "/ij-logo.png",
    apple: "/ij-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <OrderProvider>
          <LayoutContent>{children}</LayoutContent>
        </OrderProvider>
      </body>
    </html>
  );
}