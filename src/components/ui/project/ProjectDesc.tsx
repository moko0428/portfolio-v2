import React from 'react';
import MarkdownViewer from '../../markdown/MarkdownViewer';
import { ProjectData } from '@/src/types/projects';

const ProjectDesc = ({ project }: { project: ProjectData }) => {
  return (
    <div>
      <MarkdownViewer content={project.content} />
    </div>
  );
};

export default ProjectDesc;
