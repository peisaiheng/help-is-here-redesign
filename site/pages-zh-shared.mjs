// Re-exports from the English pages so the Chinese pages reuse the same blocks.
export { show, needLink } from './pages-en.mjs';
// Review excerpts kept in their original language (do not machine-translate testimonials).
export const REVIEWS_ZH_SAFE = [
  ['Very professional and no hard selling of helpers on hand.', 'Jesslyn K.', '14个月大宝宝的家长'],
  ['They make an effort to find and recommend a suitable helper who matches what we are looking for, which gives us great peace of mind.', 'Jo A.', ''],
  ['Help Is Here was the only one that impressed me with their high level of professionalism and customer service.', 'Chung', '联系多家中介后'],
];
