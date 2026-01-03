
import React from 'react';
import { Beaker, ShieldCheck, Microscope, Database, FileText, FlaskConical, ClipboardCheck, Zap } from 'lucide-react';
import { Experience, Skill, Education } from './types';

export const EXPERIENCES: Experience[] = [
  {
    company: "Incepta Pharmaceuticals Ltd.",
    role: "Senior Officer, Quality Control",
    period: "June 2024 – Present",
    isFDA: true,
    highlights: [
      "Lead method validation for Assay, Dissolution, and Impurity profiling per ICH and USP standards.",
      "Collaborate with R&D, QC, and regulatory teams to ensure smooth method transfer.",
      "Conduct routine analysis of Raw Materials, Intermediates, Stability Study and Finished Samples.",
      "Support QA by maintaining audit-ready documentation and deviation handling."
    ]
  },
  {
    company: "Renata Limited",
    role: "Senior Officer, Quality Control",
    period: "April 2019 – June 2024",
    isFDA: true,
    highlights: [
      "Conducted QC analysis of Raw Materials, In-process, core, and Finished products using HPLC, UV, AA & Dissolution Tester.",
      "Prepared and reviewed analytical worksheets, SOPs, COAs, and specifications.",
      "Supported new product launches (e.g., Furoclav Syrup) through method troubleshooting and documentation.",
      "Investigated OOS, OOT, LIR, and chromatographic deviations, ensuring compliance during audits.",
      "Mentored and trained new QC staff and interns on SOPs, GLP, and Instruments."
    ]
  }
];

export const TECHNICAL_SKILLS: Skill[] = [
  { name: "HPLC (Waters/Shimadzu)", icon: "Microscope", category: "Technical" },
  { name: "FTIR/ATR", icon: "Zap", category: "Technical" },
  { name: "KF Titrator", icon: "Beaker", category: "Technical" },
  { name: "UV-Visible Spectro", icon: "FlaskConical", category: "Technical" },
  { name: "TOC & Biofuge", icon: "Database", category: "Technical" },
  { name: "Dissolution Tester", icon: "FlaskConical", category: "Technical" }
];

export const COMPLIANCE_SKILLS: Skill[] = [
  { name: "GMP (cGMP)", icon: "ShieldCheck", category: "Compliance" },
  { name: "GLP", icon: "ClipboardCheck", category: "Compliance" },
  { name: "GDP", icon: "FileText", category: "Compliance" },
  { name: "ALCOA+", icon: "ShieldCheck", category: "Compliance" },
  { name: "ICH & USP", icon: "ClipboardCheck", category: "Compliance" },
  { name: "Method Validation", icon: "Database", category: "Compliance" }
];

export const EDUCATION: Education[] = [
  {
    degree: "M.Sc. in Applied Chemistry & Chemical Engineering",
    institution: "University of Rajshahi",
    year: "2019",
    thesis: "Estimation of heavy metal concentrations in poultry meat, bone and other parts of its body in Rajshahi city and adjacent areas."
  },
  {
    degree: "B.Sc. in Applied Chemistry & Chemical Engineering",
    institution: "University of Rajshahi",
    year: "2016",
    project: "Causes of Diabetes and Survey of Drugs in the Treatment of Diabetes."
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Microscope: <Microscope className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Beaker: <Beaker className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  FlaskConical: <FlaskConical className="w-6 h-6" />,
  ClipboardCheck: <ClipboardCheck className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />
};
