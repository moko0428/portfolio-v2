import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moko | Project',
  description: 'Moko Portfolio',
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
