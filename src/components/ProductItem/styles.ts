import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#d1d1d1',
        backgroundColor: '#fff',
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',
        margin: 1
    },
    rightContainer: {
        padding: 10,
        flex: 3,
    },
    title: {
        fontSize: 18,
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    star: {
        margin: 2,
    },


})

export default styles;