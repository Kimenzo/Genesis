
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import CreationCanvas from './components/CreationCanvas';
import SmartEditor from './components/SmartEditor';
import VisualStudio from './components/VisualStudio';
import SettingsPanel from './components/SettingsPanel';
import { AppMode, BookProject, GenerationSettings } from './types';
import { generateBookStructure } from './services/geminiService';

const App: React.FC = () => {
  const [currentMode, setCurrentMode] = useState<AppMode>(AppMode.DASHBOARD);
  const [currentProject, setCurrentProject] = useState<BookProject | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateProject = async (settings: GenerationSettings) => {
    setIsGenerating(true);
    try {
      const structure = await generateBookStructure(settings);
      
      const newProject: BookProject = {
        id: crypto.randomUUID(),
        title: structure.title || "Untitled Masterpiece",
        synopsis: structure.synopsis || "",
        style: settings.style,
        tone: settings.tone,
        targetAudience: settings.audience,
        isBranching: settings.isBranching,
        brandProfile: settings.brandProfile,
        chapters: (structure.chapters || []).map(c => ({
            id: crypto.randomUUID(),
            title: c.title || "Chapter",
            pages: (c.pages || []).map((p: any) => ({
                id: crypto.randomUUID(),
                pageNumber: p.pageNumber,
                text: p.text,
                imagePrompt: p.imagePrompt,
                layoutType: p.layoutType || 'text-only',
                choices: p.choices || []
            }))
        })),
        characters: (structure.characters || []).map((c: any) => ({
            id: crypto.randomUUID(),
            name: c.name,
            description: c.description,
            visualTraits: c.visualTraits
        })),
        createdAt: new Date()
      };

      setCurrentProject(newProject);
      setCurrentMode(AppMode.EDITOR);
    } catch (error) {
      console.error("Generation failed", error);
      alert("Failed to generate project. Please check your API key or try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const renderContent = () => {
    switch (currentMode) {
      case AppMode.CREATION:
      case AppMode.DASHBOARD:
        return (
          <CreationCanvas 
            onGenerate={handleGenerateProject} 
            isGenerating={isGenerating} 
          />
        );
      case AppMode.EDITOR:
        if (!currentProject) return <CreationCanvas onGenerate={handleGenerateProject} isGenerating={isGenerating} />;
        return (
          <SmartEditor 
            project={currentProject} 
            onUpdateProject={setCurrentProject} 
          />
        );
      case AppMode.VISUAL_STUDIO:
        return (
            <VisualStudio project={currentProject} />
        );
      case AppMode.SETTINGS:
        return (
            <SettingsPanel />
        );
      case AppMode.EXPORT:
        return (
            <div className="flex flex-col items-center justify-center h-[80vh] text-center p-8 animate-fadeIn">
                <div className="w-24 h-24 bg-peach-soft rounded-full flex items-center justify-center mb-6 shadow-glow">
                    <span className="text-4xl">📤</span>
                </div>
                <h2 className="text-3xl font-heading font-bold text-charcoal-soft mb-2">Export Nexus</h2>
                <p className="text-cocoa-light max-w-md font-body">
                   Your masterpiece is almost ready for the world. Export to PDF, ePub, or interactive HTML5 soon.
                </p>
            </div>
        );
      default:
        return <CreationCanvas onGenerate={handleGenerateProject} isGenerating={isGenerating} />;
    }
  };

  return (
    <div className="min-h-screen bg-cream-base text-charcoal-soft font-body selection:bg-coral-burst/30 selection:text-charcoal-soft">
      <Navigation currentMode={currentMode} setMode={setCurrentMode} />
      <main className="pt-[80px] relative transition-all duration-300">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
