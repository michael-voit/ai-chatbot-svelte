import { createMistral } from '@ai-sdk/mistral';
import { customProvider, extractReasoningMiddleware, wrapLanguageModel } from 'ai';
import { MISTRAL_API_KEY } from '$env/static/private';

const mistral = createMistral({ apiKey: MISTRAL_API_KEY });

export const myProvider = customProvider({
	languageModels: {
		'chat-model': mistral('mistral-medium-latest'),
		'chat-model-reasoning': wrapLanguageModel({
			model: mistral('magistral-medium-latest'),
			middleware: extractReasoningMiddleware({ tagName: 'think' })
		}),
		'title-model': mistral('mistral-medium-latest'),
		'artifact-model': mistral('mistral-medium-latest')
	}
});
