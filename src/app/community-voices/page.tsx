'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { getSuccessStories } from '@/utils/storage';
import { SuccessStory } from '@/data/initialData';
import { motion, AnimatePresence } from 'framer-motion';

/* Hallmark · genre: playful · macrostructure: Collage / Zine · theme: custom (pink zine)
 * sticky note testimonials on a corkboard
 */

export default function CommunityVoicesPage() {
  const { t } = useLanguage();
  const [stories, setStories] = useState<SuccessStory[]>([]);

  useEffect(() => {
    const storiesData = getSuccessStories();
    setTimeout(() => {
      setStories(storiesData);
    }, 0);
  }, []);

  // Deterministic rotation per story
  const getRotation = (id: string) => {
    const hash = id.charCodeAt(0) + id.charCodeAt(id.length - 1);
    const rotations = ['-1.5deg', '1.2deg', '-0.8deg', '1.8deg', '-1.2deg', '0.6deg'];
    return rotations[hash % rotations.length];
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pt-32 pb-12 sm:px-6 lg:px-8 flex-grow flex flex-col gap-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="font-heading text-5xl sm:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
          {t('communityVoices.title')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl font-body italic">
          {t('communityVoices.subtitle')}
        </p>
      </div>

      {/* Stories or Empty State */}
      {stories.length > 0 ? (
        <div className="zine-corkboard border-2 border-rule rounded-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {stories.map((story) => (
                <motion.div
                  key={story.id}
                  layout
                  initial={{ opacity: 0, y: 12, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: parseFloat(getRotation(story.id)) }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="zine-sticky sticky-lift p-6 sm:p-8 space-y-4 shadow-md transition-shadow"
                  style={{ transform: `rotate(${getRotation(story.id)})` }}
                >
                  <p className="text-base text-secondary-ink leading-relaxed font-body italic">
                    &quot;{story.content}&quot;
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-9 h-9 rounded-full bg-secondary-ink/10 text-secondary-ink flex items-center justify-center font-bold uppercase text-xs font-body">
                      {story.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-secondary-ink font-body">{story.author}</h4>
                      <p className="text-xs text-secondary-ink/70 mt-0.5 font-body">{story.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 max-w-md mx-auto text-center">
          <div className="zine-sticky p-6 space-y-3" style={{ transform: 'rotate(-1deg)' }}>
            <h3 className="zine-handwritten text-2xl text-secondary-ink leading-tight">
              {t('communityVoices.comingSoon')}
            </h3>
            <p className="text-secondary-ink/80 text-sm leading-relaxed font-body">
              We&apos;re gathering stories from our Discord community. Check back soon to hear from real members about their experiences.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
