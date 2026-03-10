export type Segment = 
  | "B2B"
  | "B2C"
  | "Saúde"
  | "Moda"
  | "Marketplace"
  | "Dashboard"
  | "Varejo"
  | "Automotivo"
  | "Educação";

export type ProjectStatus = "Em Produção" | "Case Real" | "MVP" | "Conceito" | "Estudo";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Platform {
  id: string;
  name: string;
  slug: string;
  icon?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  coverImage?: string;
  gallery?: string[];
  type: Category[];
  platforms: Platform[];
  stack: string[];
  segment: Segment[];
  status: ProjectStatus;
  year: number;
  role: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  searchableText?: string;
}
