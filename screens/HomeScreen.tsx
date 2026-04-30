import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import { UtensilsCrossed, ShoppingBag, User } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation<any>();
    return (
        <ImageBackground
            source={{
                uri: "https://images.pexels.com/photos/30729159/pexels-photo-30729159.jpeg?_gl=1*8z0r4j*_ga*MTM3NDI5MTM3MS4xNzc3NTIyMDc4*_ga_8JE65Q40S6*czE3Nzc1MjIwNzckbzEkZzEkdDE3Nzc1MjIxMjIkajE1JGwwJGgw",
            }}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                {/* Titulo */}
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>🍽️ Bienvenidos a Restaurante UTP 🍽️</Text>
                    <Text style={styles.subtitle}>Elige una opción para empezar</Text>
                </View>

                {/* Bontones */}
                <View style={styles.buttonContainer}>
                    {/* Menú */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("Menu")}
                    >
                        <View style={styles.contentWrapper}>
                            <UtensilsCrossed color="#fff" size={24} style={styles.icon} />
                            <Text style={styles.buttonText}>Menú</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Mis Pedidos */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("Order")}
                    >
                        <View style={styles.contentWrapper}>
                            <ShoppingBag color="#fff" size={24} style={styles.icon} />
                            <Text style={styles.buttonText}>Mis Pedidos</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Mi Perfil */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("Profile")}
                    >
                        <View style={styles.contentWrapper}>
                            <User color="#fff" size={24} style={styles.icon} />
                            <Text style={styles.buttonText}>Mi Perfil</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    //Imagen de fondo
    background: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        paddingHorizontal: 30,
    },

    //Titulo y subtitulo
    headerContainer: {
        alignItems: "center",
        marginBottom: 60,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: "#fff",
    },
    subtitle: {
        fontSize: 16,
        color: "#ddd",
        marginTop: 5,
    },

    //Botones
    buttonContainer: {
        width: "100%",
        gap: 15,
    },
    button: {
        backgroundColor: "#FF6B6B",
        borderRadius: 12,
        paddingVertical: 18,
        paddingHorizontal: 20,
        width: "100%",
    },
    contentWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    icon: {
        marginRight: 15,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
});

export default HomeScreen;