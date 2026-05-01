import { View, Text } from 'react-native'
import JSON from '../data/menu.json'
import React from 'react'

const MenuScreen = () => {
    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 10 }}>Menu del Día</Text>
            {(JSON.platillos || []).map((item, index) => (
                <View key={index} style={{ marginBottom: 10, backgroundColor: "#f2f2f2", padding: 5, borderRadius: 5 }}>
                    <Text style={{ fontSize: 15, fontWeight: '600' }}>{item.nombre}</Text>
                    <Text style={{ fontSize: 13, color: '#555' }}>{item.descripcion}</Text>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 5 }}>S/ {item.precio}.00</Text>
                </View>
            ))}
        </View>
    )
}

export default MenuScreen