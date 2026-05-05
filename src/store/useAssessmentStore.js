import { create } from 'zustand';
import { EXPERIENCE_FEEDBACK_QUESTIONS, PAGE_SEQUENCE } from '../data/assessmentContent.js';
import { submitAssessmentStage, submitExperienceFeedback } from '../lib/api.js';
import { summarizeStageResults } from '../lib/assessment.js';

const firstPageId = PAGE_SEQUENCE[0].id;

function getOrCreateAnonymousSessionId() {
  if (typeof window === 'undefined') {
    return 'server-session';
  }

  const storageKey = 'colorcode-anonymous-session-id';
  const existingId = window.localStorage.getItem(storageKey);
  if (existingId) {
    return existingId;
  }

  const sessionId = window.crypto?.randomUUID?.() ?? `anon-${Date.now()}`;
  window.localStorage.setItem(storageKey, sessionId);
  return sessionId;
}

function createEmptyFeedbackResponses() {
  return Object.fromEntries(EXPERIENCE_FEEDBACK_QUESTIONS.map((question) => [question.id, null]));
}

export const useAssessmentStore = create((set, get) => ({
  sessionId: getOrCreateAnonymousSessionId(),
  currentPageId: firstPageId,
  aboutReturnPageId: firstPageId,
  decisionCheckStatus: {},
  completedLabs: {},
  answers: {},
  assessmentSectionIndex: {
    pre: 0,
    post: 0,
  },
  feedbackResponses: createEmptyFeedbackResponses(),
  feedbackComment: '',
  preAssessmentState: 'idle',
  postAssessmentState: 'idle',
  postAssessmentLocked: false,
  postAssessmentSummary: '',
  feedbackState: 'idle',
  experienceMessage: '',
  experienceError: '',
  goToPage(pageId) {
    set({ currentPageId: pageId });
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  openAboutPage() {
    const currentPageId = get().currentPageId;
    set({
      aboutReturnPageId: currentPageId === 'project-about' ? get().aboutReturnPageId : currentPageId,
      currentPageId: 'project-about',
    });
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  closeAboutPage() {
    const aboutReturnPageId = get().aboutReturnPageId || firstPageId;
    set({ currentPageId: aboutReturnPageId });
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  answerItem(itemId, optionId) {
    set((state) => {
      return {
        answers: {
          ...state.answers,
          [itemId]: optionId,
        },
      };
    });
  },
  recordDecisionCheck(segmentId, scenarioId, optionId, correct) {
    set((state) => ({
      decisionCheckStatus: {
        ...state.decisionCheckStatus,
        [segmentId]: {
          scenarioId,
          optionId,
          correct: Boolean(correct),
        },
      },
    }));
  },
  markLabCompleted(segmentId) {
    set((state) => ({
      completedLabs: {
        ...state.completedLabs,
        [segmentId]: true,
      },
    }));
  },
  setAssessmentSectionIndex(stage, index) {
    set((state) => ({
      assessmentSectionIndex: {
        ...state.assessmentSectionIndex,
        [stage]: Math.max(0, index),
      },
    }));
  },
  setFeedbackResponse(questionId, value) {
    set((state) => ({
      feedbackResponses: {
        ...state.feedbackResponses,
        [questionId]: value,
      },
      experienceError: '',
      experienceMessage: '',
    }));
  },
  setFeedbackComment(comment) {
    set({
      feedbackComment: comment,
      experienceError: '',
      experienceMessage: '',
    });
  },
  async continueFromPreAssessment(nextPageId) {
    const { sessionId, answers } = get();

    set({
      preAssessmentState: 'submitting',
    });

    try {
      await submitAssessmentStage({
        sessionId,
        assessmentStage: 'pre',
        answers,
      });

      set({
        preAssessmentState: 'submitted',
      });
    } catch (error) {
      set({
        preAssessmentState: 'error',
      });
    } finally {
      get().goToPage(nextPageId);
    }
  },
  async submitPostAssessment() {
    const { sessionId, answers } = get();

    set({
      postAssessmentLocked: true,
      postAssessmentState: 'submitting',
      experienceError: '',
      experienceMessage: '',
    });

    try {
      await submitAssessmentStage({
        sessionId,
        assessmentStage: 'post',
        answers,
      });

      const summary = summarizeStageResults('post', answers);

      set({
        postAssessmentState: 'submitted',
        postAssessmentSummary: `${summary.correctCount} of ${summary.totalQuestions} post-assessment questions were marked correct.`,
      });
    } catch (error) {
      set({
        postAssessmentState: 'error',
        experienceError: error.message,
      });
    }
  },
  async submitExperienceFeedbackOnly() {
    const { sessionId, feedbackResponses, feedbackComment } = get();
    const allFeedbackAnswered = Object.values(feedbackResponses).every((value) => Number.isInteger(value));

    if (!allFeedbackAnswered) {
      set({
        experienceError: 'Please complete all five feedback ratings before submitting.',
      });
      return;
    }

    set({
      feedbackState: 'submitting',
      experienceError: '',
      experienceMessage: '',
    });

    try {
      await submitExperienceFeedback({
        sessionId,
        responses: feedbackResponses,
        comment: feedbackComment.trim(),
      });

      set({
        feedbackState: 'submitted',
        experienceMessage: 'Thank you. Your anonymised feedback was submitted successfully.',
      });

      get().goToPage('thank-you');
    } catch (error) {
      set({
        feedbackState: 'error',
        experienceError: error.message,
      });
    }
  },
  resetAssessment() {
    set({
      sessionId: getOrCreateAnonymousSessionId(),
      currentPageId: firstPageId,
      aboutReturnPageId: firstPageId,
      decisionCheckStatus: {},
      completedLabs: {},
      answers: {},
      assessmentSectionIndex: {
        pre: 0,
        post: 0,
      },
      feedbackResponses: createEmptyFeedbackResponses(),
      feedbackComment: '',
      preAssessmentState: 'idle',
      postAssessmentState: 'idle',
      postAssessmentLocked: false,
      postAssessmentSummary: '',
      feedbackState: 'idle',
      experienceMessage: '',
      experienceError: '',
    });

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
}));
