import { SuccessStory, initialSuccessStories } from '../data/initialData';
import { Language } from '../data/translations';

const SUCCESS_STORIES_KEY = 'evalguild_success_stories';
const NEWSLETTER_SUBSCRIBERS_KEY = 'evalguild_newsletter_subscribers';
const THEME_KEY = 'evalguild_theme';
const LANGUAGE_KEY = 'evalguild_language';

// Helper to check if window is defined (for client-side code in SSR nextjs)
const isClient = () => typeof window !== 'undefined';

export function getSuccessStories(): SuccessStory[] {
  if (!isClient()) return initialSuccessStories;
  try {
    const data = localStorage.getItem(SUCCESS_STORIES_KEY);
    if (!data) {
      localStorage.setItem(SUCCESS_STORIES_KEY, JSON.stringify(initialSuccessStories));
      return initialSuccessStories;
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading success stories from localStorage', error);
    return initialSuccessStories;
  }
}

export function saveSuccessStory(story: SuccessStory): SuccessStory[] {
  if (!isClient()) return [];
  try {
    const stories = getSuccessStories();
    const existingIndex = stories.findIndex((s) => s.id === story.id);
    
    if (existingIndex >= 0) {
      stories[existingIndex] = story;
    } else {
      stories.unshift(story); // Add to the top
    }
    
    localStorage.setItem(SUCCESS_STORIES_KEY, JSON.stringify(stories));
    return stories;
  } catch (error) {
    console.error('Error saving success story to localStorage', error);
    return [];
  }
}

export function deleteSuccessStory(id: string): SuccessStory[] {
  if (!isClient()) return [];
  try {
    const stories = getSuccessStories();
    const filtered = stories.filter((s) => s.id !== id);
    localStorage.setItem(SUCCESS_STORIES_KEY, JSON.stringify(filtered));
    return filtered;
  } catch (error) {
    console.error('Error deleting success story from localStorage', error);
    return [];
  }
}

export function getNewsletterSignups(): string[] {
  if (!isClient()) return [];
  try {
    const data = localStorage.getItem(NEWSLETTER_SUBSCRIBERS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading newsletter signups from localStorage', error);
    return [];
  }
}

export function addNewsletterSignup(email: string): boolean {
  if (!isClient()) return false;
  try {
    const signups = getNewsletterSignups();
    if (signups.includes(email)) return true; // Already signed up
    
    signups.push(email);
    localStorage.setItem(NEWSLETTER_SUBSCRIBERS_KEY, JSON.stringify(signups));
    return true;
  } catch (error) {
    console.error('Error saving newsletter signup to localStorage', error);
    return false;
  }
}

export function getStoredLanguage(): Language {
  if (!isClient()) return 'en';
  try {
    const lang = localStorage.getItem(LANGUAGE_KEY);
    return (lang as Language) || 'en';
  } catch {
    return 'en';
  }
}

export function setStoredLanguage(lang: Language): void {
  if (!isClient()) return;
  try {
    localStorage.setItem(LANGUAGE_KEY, lang);
  } catch (error) {
    console.error('Error saving language selection to localStorage', error);
  }
}

export function getStoredTheme(): 'light' | 'dark' {
  if (!isClient()) return 'dark'; // Dark by default
  try {
    const theme = localStorage.getItem(THEME_KEY);
    return (theme as 'light' | 'dark') || 'dark';
  } catch {
    return 'dark';
  }
}

export function setStoredTheme(theme: 'light' | 'dark'): void {
  if (!isClient()) return;
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    console.error('Error saving theme selection to localStorage', error);
  }
}
