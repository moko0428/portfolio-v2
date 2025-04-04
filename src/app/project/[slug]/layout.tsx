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
  return <div className="w-full pt-20">{children}</div>;
}
