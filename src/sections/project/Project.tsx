import React from 'react';
import { Project_Data } from '@/data/project.data';
import Title from '@/src/components/Title';
import Carousel from '@/src/components/Carousel';
import ProjectCard from './ProjectCard';
import LayoutContainer from '@/src/components/LayoutContainer';

function Project() {
  return (
    <LayoutContainer id="project">
      <Title title="PROJECT" subTitle="자세한 설명을 보기 위해 클릭해주세요!" />
      {Project_Data.length > 0 && (
        <Carousel key="project-carousel">
          {Project_Data.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Carousel>
      )}
    </LayoutContainer>
  );
}

export default Project;
