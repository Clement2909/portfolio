export const localizedPath = (lang, page = 'portfolio', id) => {
  const base = `/${lang}`;

  if (page === 'faq') return `${base}/faq`;
  if (page === 'blog') return `${base}/blog`;
  if (page === 'article') return `${base}/blog/${id}`;
  if (page === 'legal') return `${base}/mentions-legales`;
  if (page === 'about') return `${base}/about`;
  if (page === 'services') return `${base}/services`;
  if (page === 'skills') return `${base}/skills`;
  if (page === 'process') return `${base}/process`;
  if (page === 'projects') return `${base}/projects`;
  if (page === 'cv') return `${base}/cv`;
  if (page === 'contact') return `${base}/contact`;

  return base;
};
