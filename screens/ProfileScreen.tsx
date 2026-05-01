import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [ocupacion, setOcupacion] = useState('');
    const [isEditing, setIsEditing] = useState(true);

    const handleAccion = () => {
        if (isEditing) {
            alert("¡Datos guardados con éxito!");
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>

                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        style={styles.editIcon}
                        onPress={() => setIsEditing(!isEditing)}
                    >
                        <Ionicons name={isEditing ? "eye-outline" : "create-outline"} size={24} color="#FF8C00" />
                    </TouchableOpacity>

                    <View style={styles.avatarPlaceholder}>
                        <Ionicons name="person-add" size={50} color="#FF8C00" />
                    </View>
                    <Text style={styles.headerName}>{nombre || "Nuevo Usuario"}</Text>
                    <Text style={styles.headerRole}>{ocupacion || "Estudiante / Profesional"}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Configurar Perfil</Text>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.label}>Nombre Completo</Text>
                        <View style={[styles.inputContainer, !isEditing && styles.disabledInput]}>
                            <Ionicons name="person-outline" size={20} color="#FF8C00" style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Ej. Juan Pérez"
                                value={nombre}
                                onChangeText={setNombre}
                                editable={isEditing}
                            />
                        </View>
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.label}>Ocupación / Carrera</Text>
                        <View style={[styles.inputContainer, !isEditing && styles.disabledInput]}>
                            <Ionicons name="school-outline" size={20} color="#FF8C00" style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Ej. Estudiante de Ingeniería"
                                value={ocupacion}
                                onChangeText={setOcupacion}
                                editable={isEditing}
                            />
                        </View>
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.label}>Correo Electrónico</Text>
                        <View style={[styles.inputContainer, !isEditing && styles.disabledInput]}>
                            <Ionicons name="mail-outline" size={20} color="#FF8C00" style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="usuario@ejemplo.com"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                editable={isEditing}
                            />
                        </View>
                    </View>

                    <TouchableOpacity
                        style={[styles.primaryButton, !isEditing && styles.secondaryButton]}
                        onPress={handleAccion}
                    >
                        <Text style={styles.buttonText}>
                            {isEditing ? "GUARDAR DATOS" : "EDITAR PERFIL"}
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContent: {
        paddingBottom: 30,
    },
    headerContainer: {
        backgroundColor: '#FFF5EB',
        padding: 40,
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        position: 'relative',
    },
    editIcon: {
        position: 'absolute',
        right: 20,
        top: 20,
        backgroundColor: '#FFFFFF',
        padding: 8,
        borderRadius: 20,
        elevation: 2,
    },
    avatarPlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        elevation: 4,
    },
    headerName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    headerRole: {
        fontSize: 14,
        color: '#FF8C00',
        fontWeight: '500',
    },
    card: {
        marginTop: -20,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 25,
        elevation: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 20,
        color: '#444',
    },
    inputWrapper: {
        marginBottom: 20,
    },
    label: {
        fontSize: 13,
        color: '#777',
        marginBottom: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F0F0F0',
        borderRadius: 12,
        backgroundColor: '#FAFAFA',
        paddingHorizontal: 12,
    },
    disabledInput: {
        backgroundColor: '#F5F5F5',
        borderColor: '#EEE',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 45,
        fontSize: 16,
        color: '#333',
    },
    primaryButton: {
        backgroundColor: '#FF8C00',
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
    },
    secondaryButton: {
        backgroundColor: '#444',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    footerText: {
        textAlign: 'center',
        marginTop: 25,
        color: '#BBB',
        fontSize: 12,
    }
});

export default ProfileScreen;