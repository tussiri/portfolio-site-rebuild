export interface Project {
  name: string;
  stack: { iconClasses: string; name: string };
  description: string;
  sourceUrl: string;
  previewUrl: string;
  featured?: boolean;
}

/*The project file defines the structure of a project.
Here, you will list the fields you’d like to use for each project.
In the src/app/core/models/project.ts file, add the lines that are highlighted. */
