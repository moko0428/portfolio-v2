import Content from '@/src/components/ui/project/Content';
import {
  getFindProject,
  getAllProjects,
} from '@/src/components/service/projects';

type Props = {
  params: {
    slug: string;
  };
};

// 동적 경로를 생성하는 함수
export async function generateStaticParams() {
  const projects = await getAllProjects(); // 모든 프로젝트 데이터를 가져오는 함수
  return projects.map((project) => ({
    slug: project.path, // 각 프로젝트의 경로를 params 객체로 반환
  }));
}

// 동적 경로에 해당하는 페이지 컴포넌트
export default async function ProjectDetail({ params: { slug } }: Props) {
  const project = await getFindProject(slug);

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Content project={project} />
    </div>
  );
}
