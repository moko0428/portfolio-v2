import { StaticImageData } from 'next/image';

export type ProjectProps = {
  id: number;
  screen: StaticImageData;
  title: string;
  description: string;
  member: string;
  tech: string[];
};

// Pro
export type Project = {
  name: string;
  image: string;
  github: string;
  figma?: string;
  url?: string;
  description: string;
  skills: string[];
  path: string;
  isTeam: boolean;
};

export type ProjectData = Project & {
  content: string;
};
