'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { getSuccessStories } from '@/utils/storage';
import { SuccessStory } from '@/data/initialData';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function CommunityVoicesPage() {
  const { t } = useLanguage();
  const [stories, setStories] = useState<SuccessStory[]>([]);

  useEffect(() => {
    const storiesData = getSuccessStories();
    setTimeout(() => {
      setStories(storiesData);
    }, 0);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pt-32 pb-12 sm:px-6 lg:px-8 flex-grow flex flex-col gap-12">
      {/* Header */}
      <div className="space-y-4 text-center sm:text-left">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
          {t('communityVoices.title')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {t('communityVoices.subtitle')}
        </p>
      </div>

      {/* Stories or Empty State */}
      {stories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {stories.map((story) => (
              <motion.div
                key={story.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="border border-card-border bg-card p-6 sm:p-8 rounded-2xl shadow-sm space-y-4 hover:shadow-md transition-shadow"
              >
                <p className="text-base text-foreground leading-relaxed italic">
                  &quot;{story.content}&quot;
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold uppercase text-xs">
                    {story.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">{story.author}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{story.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="p-4 rounded-full bg-primary/10 text-primary mb-6">
            <MessageCircle className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            {t('communityVoices.comingSoon')}
          </h3>
          <p className="text-muted-foreground text-sm max-w-md">
            We&apos;re gathering stories from our Discord community. Check back soon to hear from real members about their experiences.
          </p>
        </div>
      )}
    </div>
  );
}
