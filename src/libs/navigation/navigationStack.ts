import { RouteProp } from '@react-navigation/native';
import {
	createNativeStackNavigator,
	NativeStackNavigationProp,
} from '@react-navigation/native-stack';

export const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
	TabScreenApp: undefined;
	Login: undefined;
	Register: undefined;
	ProductDetail: {productId: string};
	SubCategory: undefined;
	PaymentOption: undefined;
	Order: undefined;
	Feedback: undefined;
	PaymentResult: undefined;
};

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type StackScreenNavigationProp =
	NativeStackNavigationProp<RootStackParamList>;

export type StackScreenRouteProp = RouteProp<RootStackParamList>;
