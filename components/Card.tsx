import { View, Text, TouchableOpacity } from 'react-native'
import { Trash } from 'lucide-react-native'
import React from 'react'

const Card = ({ item, onDelete }: { item: any, onDelete: () => void }) => {
    return (
        <View style={{ backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 10, shadowColor: "#ccc", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{item.name}</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 17 }}>S/ {item.total}.00</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }} >
                <View>
                    <Text style={{ fontWeight: '500', color: "#9f9f9f" }}>Cantidad: {item.quantity}</Text>
                    <Text style={{ fontWeight: '500', color: "#9f9f9f" }}>Precio: S/ {item.price}.00</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={onDelete}>
                        <Trash color="red" size={24} style={{ marginRight: 8 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Card