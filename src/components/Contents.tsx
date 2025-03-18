import React from 'react';
import { ProjectData } from '../types/projects';

interface Props {
  project: ProjectData;
}

const Contents = ({ project }: Props) => {
  return <div>{project?.content}</div>;
};

export default Contents;
