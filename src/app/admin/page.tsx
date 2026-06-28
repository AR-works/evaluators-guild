'use client';

import { useState, useEffect } from 'react';
import { getSuccessStories, saveSuccessStory, deleteSuccessStory, getNewsletterSignups } from '@/utils/storage';
import { SuccessStory, mockMetrics } from '@/data/initialData';
import { ShieldCheck, Plus, Trash2, Edit2, Download, Mail, Users, TrendingUp, Sparkles, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'stories' | 'newsletter' | 'insights'>('stories');
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [subscribers, setSubscribers] = useState<string[]>([]);
  
  // Story form states
  const [editingStory, setEditingStory] = useState<SuccessStory | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('Job Referral');

  // Hydrate data from local storage on client load
  useEffect(() => {
    const storiesData = getSuccessStories();
    const subscribersData = getNewsletterSignups();
    setTimeout(() => {
      setStories(storiesData);
      setSubscribers(subscribersData);
    }, 0);
  }, []);

  const handleOpenAddForm = () => {
    setEditingStory(null);
    setAuthor('');
    setRole('');
    setContent('');
    setTag('Job Referral');
    setIsFormOpen(true);
  };

  const handleOpenEditForm = (story: SuccessStory) => {
    setEditingStory(story);
    setAuthor(story.author);
    setRole(story.role);
    setContent(story.content);
    setTag(story.tag);
    setIsFormOpen(true);
  };

  const handleSaveStory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !role || !content) return;

    const storyToSave: SuccessStory = {
      id: editingStory ? editingStory.id : `story-${Date.now()}`,
      author,
      role,
      content,
      tag,
      date: editingStory ? editingStory.date : new Date().toISOString().split('T')[0]
    };

    const updated = saveSuccessStory(storyToSave);
    setStories(updated);
    setIsFormOpen(false);
    
    confetti({
      particleCount: 50,
      spread: 40,
      origin: { y: 0.8 }
    });
  };

  const handleDeleteStory = (id: string) => {
    if (confirm('Are you sure you want to delete this success story?')) {
      const updated = deleteSuccessStory(id);
      setStories(updated);
    }
  };

  const handleExportCSV = () => {
    if (subscribers.length === 0) {
      alert('No subscribers to export.');
      return;
    }
    const csvContent = "data:text/csv;charset=utf-8," 
      + ["Email Address"].concat(subscribers).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `evalguild_subscribers_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Render SVG Growth chart
  const renderChart = () => {
    const data = mockMetrics.trafficGrowth;
    const maxVal = Math.max(...data.map(d => d.pageviews));
    const width = 500;
    const height = 180;
    const padding = 30;
    
    const points = data.map((d, idx) => {
      const x = padding + (idx / (data.length - 1)) * (width - padding * 2);
      const y = height - padding - (d.pageviews / maxVal) * (height - padding * 2);
      return { x, y, label: d.month };
    });

    const pathD = points.reduce((acc, curr, idx) => {
      return acc + `${idx === 0 ? 'M' : 'L'} ${curr.x} ${curr.y} `;
    }, '');

    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto text-primary">
        {/* Grid lines */}
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="var(--border)" strokeWidth={1} />
        <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="var(--border)" strokeDasharray="4" strokeWidth={0.5} />
        
        {/* Trend Area */}
        {points.length > 0 && (
          <path
            d={`${pathD} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`}
            fill="currentColor"
            fillOpacity={0.06}
          />
        )}

        {/* Trend Line */}
        <path d={pathD} fill="none" stroke="currentColor" strokeWidth={2.5} />

        {/* Circles & Labels */}
        {points.map((pt, idx) => (
          <g key={idx}>
            <circle cx={pt.x} cy={pt.y} r={4} fill="currentColor" />
            <text x={pt.x} y={height - 10} textAnchor="middle" className="text-[10px] fill-muted-foreground font-sans">
              {pt.label}
            </text>
          </g>
        ))}
      </svg>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex-grow flex flex-col gap-8">
      {/* Title */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-border pb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-heading text-2xl font-extrabold text-foreground tracking-tight">
              Guild Association Panel
            </h1>
            <p className="text-xs text-muted-foreground mt-0.5">
              Control community publications, newsletters, and administrative audits.
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex bg-muted/50 p-1.5 rounded-xl border border-border w-fit text-xs font-semibold">
          <button
            onClick={() => setActiveTab('stories')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'stories' ? 'bg-card text-foreground shadow' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Stories
          </button>
          <button
            onClick={() => setActiveTab('newsletter')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'newsletter' ? 'bg-card text-foreground shadow' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Newsletter
          </button>
          <button
            onClick={() => setActiveTab('insights')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'insights' ? 'bg-card text-foreground shadow' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Insights
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="flex-grow">
        {activeTab === 'stories' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg text-foreground">Community Success Stories</h3>
                <p className="text-xs text-muted-foreground">Manage references displaying on the landing page carousel and stories wall.</p>
              </div>
              <button
                onClick={handleOpenAddForm}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 flex items-center gap-1 text-xs transition-colors shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>Add Story</span>
              </button>
            </div>

            {/* List Stories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stories.map((story) => (
                <div key={story.id} className="border border-border bg-card p-5 rounded-xl flex flex-col justify-between shadow-sm">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                      <span className="bg-muted px-2 py-0.5 rounded font-bold capitalize">{story.tag}</span>
                      <span>{story.date}</span>
                    </div>
                    <p className="text-xs text-foreground leading-relaxed italic">&quot;{story.content}&quot;</p>
                    <div className="text-xs">
                      <strong className="text-foreground">{story.author}</strong>
                      <span className="text-muted-foreground"> - {story.role}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border flex justify-end gap-2 text-xs">
                    <button
                      onClick={() => handleOpenEditForm(story)}
                      className="px-2.5 py-1.5 rounded bg-muted/50 border border-border text-foreground hover:bg-muted transition-colors flex items-center gap-1"
                    >
                      <Edit2 className="w-3 h-3 text-muted" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDeleteStory(story.id)}
                      className="px-2.5 py-1.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-500 hover:bg-rose-500/20 transition-colors flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'newsletter' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg text-foreground">Newsletter Signups</h3>
                <p className="text-xs text-muted-foreground">List of emails that registered via the landing page newsletter widget.</p>
              </div>
              <button
                onClick={handleExportCSV}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 flex items-center gap-1.5 text-xs transition-colors shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Export CSV</span>
              </button>
            </div>

            {subscribers.length > 0 ? (
              <div className="border border-border bg-card rounded-xl overflow-hidden shadow-sm max-w-2xl">
                <div className="bg-muted/50 px-4 py-2.5 border-b border-border flex items-center justify-between text-xs font-semibold text-muted-foreground">
                  <span>Email Address</span>
                  <span>Registered</span>
                </div>
                <div className="divide-y divide-border">
                  {subscribers.map((email, idx) => (
                    <div key={idx} className="px-4 py-3 flex items-center justify-between text-xs text-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-muted" />
                        <span>{email}</span>
                      </div>
                      <span className="text-muted-foreground text-[10px]">Client Local Storage</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-16 bg-card rounded-xl border border-dashed border-border text-muted-foreground max-w-2xl">
                No email subscriptions found. Try signing up on the landing page!
              </div>
            )}
          </div>
        )}

        {activeTab === 'insights' && (
          <div className="space-y-6 max-w-4xl">
            <div>
              <h3 className="font-bold text-lg text-foreground">Guild Traffic & Scale</h3>
              <p className="text-xs text-muted-foreground">Mock analytics demonstrating association growth and metrics dashboard representation.</p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="border border-border bg-card p-5 rounded-xl flex items-center gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-500">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground font-semibold uppercase block">Active Today</span>
                  <span className="text-2xl font-black text-foreground">{mockMetrics.activeUsersToday}</span>
                </div>
              </div>

              <div className="border border-border bg-card p-5 rounded-xl flex items-center gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground font-semibold uppercase block">Newsletter Users</span>
                  <span className="text-2xl font-black text-foreground">{subscribers.length + mockMetrics.newsletterSubscribers}</span>
                </div>
              </div>

              <div className="border border-border bg-card p-5 rounded-xl flex items-center gap-4">
                <div className="p-3 bg-violet-500/10 rounded-lg text-violet-500">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground font-semibold uppercase block">New Leads</span>
                  <span className="text-2xl font-black text-foreground">+{mockMetrics.guildApplicationsThisMonth}</span>
                </div>
              </div>
            </div>

            {/* Chart container */}
            <div className="border border-border bg-card p-6 rounded-xl space-y-4">
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Pageviews Trend (2026)</h4>
              <div className="w-full">
                {renderChart()}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Story Editor Dialog Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-card border border-border rounded-2xl w-full max-w-md p-6 relative shadow-2xl space-y-4"
            >
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute right-4 top-4 p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="font-bold text-lg text-foreground flex items-center gap-1.5">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>{editingStory ? 'Edit Success Reference' : 'New Success Reference'}</span>
              </h3>

              <form onSubmit={handleSaveStory} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-muted-foreground">Author Name</label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g. Elena Rostova"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-muted-foreground">Role / Platform</label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g. AI Analyst at Outlier"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-muted-foreground">Category Tag</label>
                  <select
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Job Referral">Job Referral</option>
                    <option value="Interview Prep">Interview Prep</option>
                    <option value="Mentorship">Mentorship</option>
                    <option value="General">General</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-muted-foreground">Story Content</label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Write success reference details..."
                    required
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2 font-semibold">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-4 py-2 border border-border bg-muted/30 hover:bg-muted text-foreground rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <Check className="w-4 h-4" />
                    <span>Save Reference</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
