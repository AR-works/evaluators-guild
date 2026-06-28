'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { getSuccessStories, saveSuccessStory } from '@/utils/storage';
import { SuccessStory } from '@/data/initialData';
import { Send, CheckCircle2, Award, Tag, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function SuccessStoriesPage() {
  const { t } = useLanguage();
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('All');
  
  // Form states
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('Job Referral');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const storiesData = getSuccessStories();
    setTimeout(() => {
      setStories(storiesData);
    }, 0);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !role || !content) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newStory: SuccessStory = {
        id: `story-${Date.now()}`,
        author,
        role,
        content,
        tag,
        date: new Date().toISOString().split('T')[0]
      };

      const updatedStories = saveSuccessStory(newStory);
      setStories(updatedStories);
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Clear inputs
      setAuthor('');
      setRole('');
      setContent('');
      
      // Celebrate
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });

      // Clear success notification
      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
    }, 800);
  };

  // Get unique tags for filtering
  const tags = ['All', 'Job Referral', 'Interview Prep', 'Mentorship', 'General'];

  const filteredStories = selectedTag === 'All'
    ? stories
    : stories.filter((s) => s.tag.toLowerCase() === selectedTag.toLowerCase());

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex-grow flex flex-col gap-16">
      {/* Header */}
      <div className="space-y-4 text-center sm:text-left">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
          {t('successStories.title')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {t('successStories.subtitle')}
        </p>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Stories list (Span 2) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Tags bar */}
          <div className="flex flex-wrap gap-2 border-b border-border pb-4">
            {tags.map((tg) => (
              <button
                key={tg}
                onClick={() => setSelectedTag(tg)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedTag === tg
                    ? 'bg-primary/10 text-primary border border-primary/20'
                    : 'bg-card text-muted-foreground border border-border hover:bg-muted/30 hover:text-foreground'
                }`}
              >
                {tg}
              </button>
            ))}
          </div>

          {/* Stories loop */}
          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredStories.map((story) => (
                <motion.div
                  key={story.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="border border-card-border bg-card p-6 sm:p-8 rounded-2xl shadow-sm space-y-4 hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  {/* Decorative badge */}
                  {!story.isInitial && (
                    <div className="absolute right-0 top-0 bg-primary/15 text-primary text-[10px] font-bold px-3 py-1 rounded-bl-xl flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>New</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-full font-medium bg-muted text-muted-foreground flex items-center gap-1 capitalize">
                      <Tag className="w-3.5 h-3.5" />
                      {story.tag}
                    </span>
                    <span className="text-muted-foreground">{story.date}</span>
                  </div>

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
            
            {filteredStories.length === 0 && (
              <div className="text-center py-16 bg-card rounded-2xl border border-dashed border-border text-muted-foreground">
                No success stories found for &quot;{selectedTag}&quot;.
              </div>
            )}
          </div>
        </div>

        {/* Submit Form (Span 1) */}
        <div className="border border-card-border bg-card p-6 sm:p-8 rounded-2xl shadow-md space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span>{t('successStories.addStoryTitle')}</span>
            </h2>
            <p className="text-xs text-muted-foreground">
              Have you found work or received guidance through the Guild? Share your achievements to inspire other remote professionals.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="author" className="text-xs font-semibold text-muted-foreground">
                {t('successStories.authorLabel')}
              </label>
              <input
                id="author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="e.g. John Doe"
                className="w-full px-3 py-2 text-xs rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="role" className="text-xs font-semibold text-muted-foreground">
                {t('successStories.roleLabel')}
              </label>
              <input
                id="role"
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. AI Evaluator at DataAnnotation"
                className="w-full px-3 py-2 text-xs rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="tag" className="text-xs font-semibold text-muted-foreground">
                Category Tag
              </label>
              <select
                id="tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              >
                <option value="Job Referral">Job Referral</option>
                <option value="Interview Prep">Interview Prep</option>
                <option value="Mentorship">Mentorship</option>
                <option value="General">General</option>
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="content" className="text-xs font-semibold text-muted-foreground">
                {t('successStories.contentLabel')}
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your success story..."
                rows={4}
                className="w-full px-3 py-2 text-xs rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-xs"
            >
              {isSubmitting ? (
                <span className="h-4.5 w-4.5 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{t('successStories.submitBtn')}</span>
                </>
              )}
            </button>
          </form>

          <AnimatePresence>
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-semibold flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Story submitted successfully!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
