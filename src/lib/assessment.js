import {
  ASSESSMENT_ITEMS,
  DOMAIN_DEFINITIONS,
  DOMAIN_ORDER,
  POST_ASSESSMENT_ITEM_IDS,
  PRE_ASSESSMENT_ITEM_IDS,
  TOTAL_ITEM_COUNT,
} from '../data/assessmentContent.js';

export const DOMAIN_MAX_SCORES = DOMAIN_ORDER.reduce((accumulator, key) => {
  accumulator[key] = Object.values(ASSESSMENT_ITEMS)
    .filter((item) => item.domainKey === key)
    .reduce((sum, item) => sum + item.points, 0);
  return accumulator;
}, {});

export function sanitizeAnswers(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return {};
  }

  return Object.entries(value).reduce((accumulator, [itemId, optionId]) => {
    const item = ASSESSMENT_ITEMS[itemId];
    if (!item || typeof optionId !== 'string') {
      return accumulator;
    }

    const isValidOption = item.options.some((option) => option.id === optionId);
    if (!isValidOption) {
      return accumulator;
    }

    accumulator[itemId] = optionId;
    return accumulator;
  }, {});
}

export function getAssessmentItemIdsForStage(stage) {
  if (stage === 'pre') {
    return PRE_ASSESSMENT_ITEM_IDS;
  }

  if (stage === 'post') {
    return POST_ASSESSMENT_ITEM_IDS;
  }

  return [];
}

export function getBaseQuestionId(itemId) {
  return itemId.replace(/^(pre|post)-/, '');
}

export function buildQuestionResultsForStage(stage, rawAnswers = {}) {
  const answers = sanitizeAnswers(rawAnswers);
  const itemIds = getAssessmentItemIdsForStage(stage);

  return Object.fromEntries(
    itemIds.map((itemId) => {
      const item = ASSESSMENT_ITEMS[itemId];
      const selectedOptionId = answers[itemId];
      const result =
        typeof selectedOptionId === 'string'
          ? selectedOptionId === item.correctOptionId
          : null;

      return [getBaseQuestionId(itemId), result];
    }),
  );
}

export function summarizeStageResults(stage, rawAnswers = {}) {
  const questionResults = buildQuestionResultsForStage(stage, rawAnswers);
  const values = Object.values(questionResults);

  return {
    questionResults,
    answeredCount: values.filter((value) => value !== null).length,
    correctCount: values.filter((value) => value === true).length,
    totalQuestions: values.length,
  };
}

export function getItemFeedback(itemId, selectedOptionId) {
  const item = ASSESSMENT_ITEMS[itemId];
  if (!item || !selectedOptionId) {
    return null;
  }

  return selectedOptionId === item.correctOptionId ? item.feedback.correct : item.feedback.incorrect;
}

export function computeResultsFromAnswers(rawAnswers = {}) {
  const answers = sanitizeAnswers(rawAnswers);
  const domainScores = Object.fromEntries(DOMAIN_ORDER.map((key) => [key, 0]));

  for (const item of Object.values(ASSESSMENT_ITEMS)) {
    if (answers[item.id] === item.correctOptionId) {
      domainScores[item.domainKey] += item.points;
    }
  }

  const totalScore = DOMAIN_ORDER.reduce((sum, key) => sum + domainScores[key], 0);

  let grade = 'Foundational';
  if (totalScore >= 85) {
    grade = 'Distinguished';
  } else if (totalScore >= 70) {
    grade = 'Proficient';
  } else if (totalScore >= 50) {
    grade = 'Developing';
  }

  const domainBreakdown = DOMAIN_ORDER.map((key) => {
    const score = domainScores[key];
    const maxScore = DOMAIN_MAX_SCORES[key];
    const ratio = maxScore === 0 ? 0 : score / maxScore;

    return {
      ...DOMAIN_DEFINITIONS[key],
      score,
      maxScore,
      ratio,
      status: ratio >= 0.75 ? 'strong' : ratio >= 0.5 ? 'steady' : 'needs-work',
      summary:
        ratio >= 0.75
          ? DOMAIN_DEFINITIONS[key].resultStrong
          : DOMAIN_DEFINITIONS[key].resultNeedsWork,
      recommendation:
        ratio >= 0.75
          ? DOMAIN_DEFINITIONS[key].recommendationGood
          : DOMAIN_DEFINITIONS[key].recommendationFocus,
    };
  });

  return {
    totalScore,
    grade,
    answeredCount: Object.keys(answers).length,
    totalItems: TOTAL_ITEM_COUNT,
    answers,
    domainScores,
    domainBreakdown,
    generatedAt: new Date().toISOString(),
  };
}
