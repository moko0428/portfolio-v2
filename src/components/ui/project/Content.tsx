import React from 'react';
import Title from './Title';
import { ProjectData } from '@/src/types/projects';
import ProjectDesc from './ProjectDesc';

type Props = {
  project: ProjectData;
};

const Content = ({ project }: Props) => {
  return (
    <div>
      <Title
        title={project.name}
        link_github={project.github}
        link_figma={project.figma || ''}
      />
      <ProjectDesc project={project} />
    </div>
  );
};

export default Content;
