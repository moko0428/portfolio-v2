import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moko | Project',
  description: 'Moko Portfolio',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
