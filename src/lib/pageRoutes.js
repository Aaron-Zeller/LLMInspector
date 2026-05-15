export const PAGE_ROUTES = {
  'project-about': 'about',
  'project-faq': 'faq',
  'project-walkthrough': 'walkthrough',
  'project-lesson-plan': 'lesson-plan',
  'project-worksheets': 'worksheets',
  'project-facilitation-guide': 'guide',
  'project-setup': 'setup',
};

export const PAGE_IDS_BY_ROUTE = Object.fromEntries(
  Object.entries(PAGE_ROUTES).map(([pageId, route]) => [route, pageId]),
);

export function getPageRoute(pageId) {
  return PAGE_ROUTES[pageId] ?? null;
}

export function getPageIdFromHash(hash) {
  const route = hash.replace(/^#\/?/, '').replace(/^\/+/, '').replace(/\/+$/, '');
  return PAGE_IDS_BY_ROUTE[route] ?? null;
}
