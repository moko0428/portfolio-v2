import { StaticImageData } from 'next/image';

export interface ProjectsProps {
  id: number;
  title: string;
  coverMain: StaticImageData;
  descriptionShort: string;
  teamName: string;
  progressPeriod: string;
  member: string;
  link: string;
  tech: string[];
  features: string[];
  description: {
    title: string;
    list: {
      title: string;
      cover: string;
      desc: string[];
    }[];
  }[];
}
