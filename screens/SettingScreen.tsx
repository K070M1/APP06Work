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
import { SunMoon, Bell, ChevronRight, Lock, CreditCard, HelpCircle, LogOut, } from "lucide-react-native"

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
            <SunMoon color="#333" size={24} />
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
            <Bell size={24} color="#333" />
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
      <Text style={styles.sectionTitle}>Cuenta</Text>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.settingRow}
          onPress={() => handlePress("Cambiar Contraseña")}
        >
          <View style={styles.settingLeft}>
            <Lock color="#333" size={24} />
            <Text style={styles.settingText}>Cambiar Contraseña</Text>
          </View>
          <ChevronRight color="#ccc" size={20} />
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          style={styles.settingRow}
          onPress={() => handlePress("Métodos de Pago")}
        >
          <View style={styles.settingLeft}>
            <CreditCard color="#333" size={24} />
            <Text style={styles.settingText}>Métodos de Pago</Text>
          </View>
          <ChevronRight color="#ccc" size={20} />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => handlePress("Soporte Técnico")}
        >
          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <HelpCircle color="#333" size={24} />
              <Text style={styles.settingText}>Ayuda y Soporte</Text>
            </View>
            <ChevronRight color="#ccc" size={20} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, styles.logoutButton]}
          onPress={() => handlePress("Cerrar Sesión")}
        >
          <LogOut color="#e74c3c" size={24} />
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
