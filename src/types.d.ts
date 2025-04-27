export interface Project {
  title: string;
  description: string;
  imageURL: string;
  featured: boolean;
  demoLink: string | null;
  sourceLink: string | null;
  tags: string[];
}
