const title = 'Snippets';

export const metadata = {
  title,
  openGraph: {
    images: [`/api/og?title=${title}`],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
