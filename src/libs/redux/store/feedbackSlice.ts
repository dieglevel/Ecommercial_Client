import { Product } from '@/src/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FeedbackState {
	feedback: Product[] | null;
}

const initialState: FeedbackState = {
	feedback: null,
};

const feedbackSlice = createSlice({
	name: 'feedback',
	initialState,
	reducers: {
		setFeedback: (state, action: PayloadAction<Product[] | null>) => {
			state.feedback = action.payload;
		},
		addFeedback: (state, action: PayloadAction<Product>) => {
			if (!state.feedback) {
				state.feedback = [action.payload];
			} else {
				state.feedback.push(action.payload);
			}
		},
		removeFeedback: (state, action: PayloadAction<string>) => {
			if (state.feedback) {
				state.feedback = state.feedback.filter(
					(item) => item.id !== action.payload,
				);
			}
		},
	},
});

export const { setFeedback, addFeedback, removeFeedback } = feedbackSlice.actions;
export const feedbackReducer = feedbackSlice.reducer;