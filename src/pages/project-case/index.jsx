import React from "react";
import { ProjectCaseHeader } from "./components/ProjectCaseHeader";
import { Projects } from "./components/Projects";
import { BlogPostHeader } from "./components/BlogPostHeader";
import { BlogPostContent } from "./components/BlogPostContent";
import { Testimonials } from "./components/Testimonial";
import { CallToAction } from "./components/CallToAction";

export default function ProjectCases() {
  return (
    <div>
      <ProjectCaseHeader />
      <Projects />
      <BlogPostHeader />
      <BlogPostContent />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
