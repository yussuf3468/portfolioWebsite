export interface Note {
  index: string;
  title: string;
  category: "case-study" | "essay" | "tutorial" | "field-note";
  excerpt: string;
  readTime: string;
  date: string;
  url: string;
  language?: "en" | "so";
}

// Intentionally empty. This section previously listed six notes, but three
// linked to articles by other authors (DataCamp, Kent C. Dodds, HBR) and two
// pointed at "#". The Notes section stays hidden until there is writing here
// that is actually mine — Educational.tsx renders nothing while this is empty,
// and the nav entries in Header.tsx / Footer.tsx come back at the same time.
export const notes: Note[] = [];
