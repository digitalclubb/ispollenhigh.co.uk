/**
 * Tiny shared state so the InstallPrompt knows when a useful answer has
 * rendered. Spec §7: never show on first visit, never before the answer.
 */

const state = $state({ answerRendered: false });

export function markAnswerRendered() {
	state.answerRendered = true;
}

export function answerHasRendered() {
	return state.answerRendered;
}
