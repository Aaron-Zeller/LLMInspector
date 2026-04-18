async function postJson(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.error || `Submission failed with status ${response.status}`);
  }

  return response.json();
}

export function submitAssessmentStage(payload) {
  return postJson('/api/assessment-submissions', payload);
}

export function submitExperienceFeedback(payload) {
  return postJson('/api/experience-feedback', payload);
}
