import { Star } from "@/src/assets";
import { style } from "@/src/constants";
import { Product } from "@/src/types";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

interface RecommendItemProps {
  product: Product | null;
}

export const RecommendedItem = ({ product }: RecommendItemProps) => {
  return (
    <View style={styles.container}>
      <View style={{ padding: 5 }}>
        <Image
          style={{ width: 150, height: 150 }}
          source={{ uri: product?.images_url }}
        />
      </View>
      <Text style={{ width: "100%" }}>{product?.name}</Text>
      <View style={styles.info}>
        <View style={styles.rating}>
          <Star width={18} height={18} />
          <Text>4.5</Text>
        </View>
        <View>
          <Text style={style.priceText}>${product?.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
  },
  info: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {},
});