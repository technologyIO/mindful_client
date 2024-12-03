// layoutWithMetadata.tsx (for non-client side layout with metadata)
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mindful TMS",
  description: "Mindful TMS is a platform for task management",
  icons: {
    icon: "/icons/mindLogo.png",
  },
};

export default function LayoutWithMetadata({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" href={metadata.icons.icon} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
