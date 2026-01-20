import { View, Text, StyleSheet, Image } from "react-native";

const ProductCard = ({ product }) => {
  return (
    <View style={styles.productCard}>
      <Image style={styles.image} source={product.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{`PKR ${product.price}`}</Text>
        <Text style={styles.desc} numberOfLines={1} ellipsizeMode="tail">
          {product.desc}
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 16,
    marginRight: 12,
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontFamily: "Bold",
    color: "#000",
    marginBottom: 8,
  },
  price: {
    fontSize: 22,
    color: "#000",
    marginBottom: 8,
    fontFamily: "Medium",
  },
  desc: {
    fontSize: 18,
    color: "#000",
    fontFamily: "Regular",
  },
});
