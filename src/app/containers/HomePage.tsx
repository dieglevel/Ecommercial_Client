import { FlatList, ScrollView, View } from 'react-native';

import Banner from './Banner';

import { HomePageHeader } from '../navigation/components';
import { Category } from './category';
import data from '@/dbTest.json';
import { Text } from 'react-native-paper';
import { style } from '@/src/constants';
import { ProductItem } from '../components/items/ProductItemVertical';

export const HomePage = () => {
	return (
		<View style={{ flex: 1 }}>
			<HomePageHeader />
			<FlatList
				numColumns={2}
				data={data.products}
				renderItem={({ item }) => <ProductItem product={item} />}
				keyExtractor={(item) => item.id.toString()}
				ListHeaderComponent={() => (
					<>
						<Category />
						<Banner title="Fashion" subTitle="World have many colors" />
						<Banner title="Food" subTitle="World have many colors" />
						<Text
							style={[style.headerText, { fontSize: 16, padding: 12 }]}
						>
							Recommended for you
						</Text>
					</>
				)}
			></FlatList>
		</View>
	);
};
