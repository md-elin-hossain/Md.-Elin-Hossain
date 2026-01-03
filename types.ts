
export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  isFDA: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Technical' | 'Compliance';
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  thesis?: string;
  project?: string;
}
