export const DEFAULT_CHAT_MODEL: string = 'chat-model';

interface ChatModel {
	id: string;
	name: string;
	description: string;
}

export const chatModels: Array<ChatModel> = [
	{
		id: 'chat-model',
		name: 'Mistral Chat',
		description: 'Balanced performance for general conversations'
	},
	{
		id: 'chat-model-reasoning',
		name: 'Mistral Reasoning',
		description: 'Advanced reasoning with step-by-step thinking'
	}
];
