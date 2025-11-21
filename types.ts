
export enum AppMode {
  DASHBOARD = 'DASHBOARD',
  CREATION = 'CREATION',
  EDITOR = 'EDITOR',
  VISUAL_STUDIO = 'VISUAL_STUDIO',
  LAYOUT_LAB = 'LAYOUT_LAB',
  EXPORT = 'EXPORT',
  SETTINGS = 'SETTINGS'
}

export enum ArtStyle {
  WATERCOLOR = 'Watercolor',
  PIXAR_3D = '3D Render (Pixar Style)',
  MANGA = 'Japanese Manga',
  CORPORATE = 'Corporate Minimalist',
  CYBERPUNK = 'Cyberpunk Neon',
  VINTAGE = 'Vintage Illustration',
  PAPER_CUTOUT = 'Paper Cutout Art'
}

export enum BookTone {
  PLAYFUL = 'Playful',
  SERIOUS = 'Serious',
  INSPIRATIONAL = 'Inspirational',
  EDUCATIONAL = 'Educational',
  DRAMATIC = 'Dramatic'
}

export interface Choice {
  text: string;
  targetPageNumber: number;
}

export interface BrandProfile {
  name: string;
  guidelines: string;
  colors: string[];
  sampleText: string;
}

export interface Page {
  id: string;
  pageNumber: number;
  text: string;
  imagePrompt: string;
  imageUrl?: string; // Base64 or URL
  layoutType: 'full-bleed' | 'split-horizontal' | 'split-vertical' | 'text-only' | 'image-only';
  choices?: Choice[];
}

export interface Chapter {
  id: string;
  title: string;
  pages: Page[];
}

export interface Character {
  id: string;
  name: string;
  description: string;
  visualTraits: string;
  imageUrl?: string;
}

export interface BookProject {
  id: string;
  title: string;
  synopsis: string;
  style: ArtStyle;
  tone: BookTone;
  targetAudience: string;
  chapters: Chapter[];
  characters: Character[];
  createdAt: Date;
  isBranching: boolean;
  brandProfile?: BrandProfile;
}

export interface GenerationSettings {
  prompt: string;
  style: ArtStyle;
  tone: BookTone;
  pageCount: number; // Rough estimate
  audience: string;
  isBranching: boolean;
  brandProfile?: BrandProfile;
}

export interface VisualSettings {
  activeTab: 'character' | 'scene' | 'style';
  selectedCharacterId: string | null;
  expression: string;
  pose: string;
  costume: string;
  lighting: string;
  cameraAngle: string;
  styleA: ArtStyle;
  styleB: ArtStyle;
  mixRatio: number; // 0-100
  prompt: string;
  generatedImage: string | null;
}
