import { Navigate, useParams } from "react-router-dom";
import { getProjectBySlug } from "../lib/projects";
import { CasaHorizontePage } from "./CasaHorizontePage";
import { ProjectLandingPage } from "./ProjectLandingPage";

export function ProjectEntryPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/proyectos" replace />;
  }

  if (project.id === "casa-horizonte") {
    return <CasaHorizontePage />;
  }

  if (!project.landing) {
    return <Navigate to="/proyectos" replace />;
  }

  return <ProjectLandingPage project={project} landing={project.landing} />;
}
