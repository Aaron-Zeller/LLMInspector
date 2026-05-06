import './new-assessment-items.js';
import { PRE_NEW_ITEM_IDS, POST_NEW_ITEM_IDS, PRE_NEW_SECTIONS, POST_NEW_SECTIONS } from './new-assessment-items.js';

export const PRE_ASSESSMENT_ITEM_IDS = PRE_NEW_ITEM_IDS;
export const POST_ASSESSMENT_ITEM_IDS = POST_NEW_ITEM_IDS;
export const PRE_ASSESSMENT_SECTIONS = PRE_NEW_SECTIONS;
export const POST_ASSESSMENT_SECTIONS = POST_NEW_SECTIONS;

export const EXPERIENCE_FEEDBACK_QUESTIONS = [
  {
    id: 'clarity',
    prompt: 'The distinction between what goes into an LLM and what comes out of it felt clear to me.',
  },
  {
    id: 'relevance',
    prompt: 'The case studies and examples felt relevant to real workplace decisions.',
  },
  {
    id: 'confidence',
    prompt: 'After this experience, I feel more confident judging when LLM use is safe and appropriate.',
  },
  {
    id: 'platforms',
    prompt: 'The comparison of different LLM platforms helped me think more critically about tool choice.',
  },
  {
    id: 'supervision',
    prompt: 'The material made it clearer when human supervision should remain in the loop.',
  },
];
