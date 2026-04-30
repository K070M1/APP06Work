import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SettingScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);

  const handlePress = (option: string) => {
    Alert.alert(option, `Aquí iría la lógica para: ${option}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Preferencias de la App</Text>
      <View style={styles.card}>
        <View style={styles.settingRow}>
          <View style={styles.settingLeft}>
            <Ionicons name="moon-outline" size={24} color="#333" />
            <Text style={styles.settingText}>Modo Oscuro</Text>
          </View>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: "#d3d3d3", true: "#ea1f1f" }}
            thumbColor={isDarkMode ? "#ffffff" : "#f4f3f4"}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.settingRow}>
          <View style={styles.settingLeft}>
            <Ionicons name="notifications-outline" size={24} color="#333" />
            <Text style={styles.settingText}>Notificaciones de Pedidos</Text>
          </View>
          <Switch
            value={pushNotifications}
            onValueChange={setPushNotifications}
            trackColor={{ false: "#d3d3d3", true: "#e81515" }}
            thumbColor={pushNotifications ? "#ffffff" : "#f4f3f4"}
          />
        </View>
      </View>

      {/* Sección: Cuenta */}
      <Text style={styles.sectionTitle}>Cuenta</Text>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.settingRow}
          onPress={() => handlePress("Cambiar Contraseña")}
        >
          <View style={styles.settingLeft}>
            <Ionicons name="lock-closed-outline" size={24} color="#333" />
            <Text style={styles.settingText}>Cambiar Contraseña</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="#ccc" />
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          style={styles.settingRow}
          onPress={() => handlePress("Métodos de Pago")}
        >
          <View style={styles.settingLeft}>
            <Ionicons name="card-outline" size={24} color="#333" />
            <Text style={styles.settingText}>Métodos de Pago</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="#ccc" />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => handlePress("Soporte Técnico")}
        >
          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Ionicons name="help-circle-outline" size={24} color="#333" />
              <Text style={styles.settingText}>Ayuda y Soporte</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="#ccc" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, styles.logoutButton]}
          onPress={() => handlePress("Cerrar Sesión")}
        >
          <Ionicons name="log-out-outline" size={24} color="#e74c3c" />
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#888",
    textTransform: "uppercase",
    marginTop: 25,
    marginBottom: 10,
    marginLeft: 5,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 15,
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginLeft: 40,
  },
  logoutButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    paddingVertical: 15,
    marginBottom: 40,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e74c3c",
    marginLeft: 10,
  },
});

export default SettingScreen;
