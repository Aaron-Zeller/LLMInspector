import { 
  DOMAIN_ORDER, 
  DOMAIN_DEFINITIONS, 
  OVERVIEW_DOMAINS 
} from './shared.js';

import { 
  ASSESSMENT_ITEMS, 
  ASSESSMENT_ITEM_ORDER,
  TOTAL_ITEM_COUNT
} from './questions.js';

import { 
  ASSESSMENT_SECTION_TEMPLATES, 
  PRE_ASSESSMENT_ITEM_IDS, 
  POST_ASSESSMENT_ITEM_IDS, 
  PRE_ASSESSMENT_SECTIONS, 
  POST_ASSESSMENT_SECTIONS, 
  EXPERIENCE_FEEDBACK_QUESTIONS 
} from './assessment-logic.js';

import { 
  PAGE_SEQUENCE, 
  NAV_SECTIONS 
} from './navigation.js';

import { overviewSegments } from './segments/overview.js';
import { preAssessmentSegments } from './segments/pre-assessment.js';
import { mainPartSegments } from './segments/main-part.js';
import { mainSensitiveSegments } from './segments/main-sensitive.js';
import { mainPromptSegments } from './segments/main-prompt.js';
import { mainMisinformationSegments } from './segments/main-misinformation.js';
import { mainOutputSegments } from './segments/main-output.js';
import { mainOversightSegments } from './segments/main-oversight.js';
import { mainPlatformSegments } from './segments/main-platforms.js';
import { postAssessmentSegments } from './segments/post-assessment.js';
import { feedbackSegments } from './segments/feedback.js';
import { thankYouSegments } from './segments/thank-you.js';

export const SEGMENTS = {
  ...overviewSegments,
  ...preAssessmentSegments,
  ...mainPartSegments,
  ...mainSensitiveSegments,
  ...mainPromptSegments,
  ...mainMisinformationSegments,
  ...mainOutputSegments,
  ...mainOversightSegments,
  ...mainPlatformSegments,
  ...postAssessmentSegments,
  ...feedbackSegments,
  ...thankYouSegments,
};

export {
  DOMAIN_ORDER,
  DOMAIN_DEFINITIONS,
  OVERVIEW_DOMAINS,
  ASSESSMENT_ITEMS,
  ASSESSMENT_ITEM_ORDER,
  TOTAL_ITEM_COUNT,
  ASSESSMENT_SECTION_TEMPLATES,
  PRE_ASSESSMENT_ITEM_IDS,
  POST_ASSESSMENT_ITEM_IDS,
  PRE_ASSESSMENT_SECTIONS,
  POST_ASSESSMENT_SECTIONS,
  EXPERIENCE_FEEDBACK_QUESTIONS,
  PAGE_SEQUENCE,
  NAV_SECTIONS
};
