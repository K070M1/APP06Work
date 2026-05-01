import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { List, PlusSquare, Trash, BrushCleaning } from 'lucide-react-native'
import JSON from '../data/menu.json'
import { useState, useEffect } from 'react'

import Modal from '../components/Modal'
import Card from '../components/Card'

const OrderScreen = () => {
    const [orders, setOrders] = useState<any[]>([])

    const [modalAdd, setModalAdd] = useState(false);
    const [selected, setSelected] = useState(null);
    const [quantity, setQuantity] = useState('');

    const addOrder = ({ item, quantity }: { item: any, quantity: number }) => {

        const existingIndex = orders.findIndex(order => order.name === item.nombre);
        if (existingIndex !== -1) {
            setOrders(prev => {
                const updatedOrders = [...prev];
                const existingOrder = updatedOrders[existingIndex];
                existingOrder.quantity += quantity;
                existingOrder.total = existingOrder.price * existingOrder.quantity;
                return updatedOrders;
            });
            setModalAdd(false);
            setSelected(null);
            setQuantity('');
            return;
        }

        const newOrder = {
            name: item.nombre,
            price: item.precio,
            quantity,
            total: item.precio * quantity,
        }
        setOrders([...orders, newOrder]);
        setModalAdd(false);
        setSelected(null);
        setQuantity('');
    }

    const deleteOrder = (index: number) => {
        Alert.alert(
            "Eliminar Pedido",
            "¿Eliminar este pedido?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Eliminar",
                    style: "destructive",
                    onPress: () => {
                        setOrders(orders.filter((_, i) => i !== index));
                    }
                }
            ]
        );
    }

    const deleteAllOrders = () => {
        Alert.alert(
            "Vaciar Pedidos",
            "¿Eliminar todos los pedidos?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Eliminar todos",
                    style: "destructive",
                    onPress: () => {
                        setOrders([]);
                    }
                }
            ]
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 20, flex: 1, justifyContent: 'space-between', backgroundColor: '#f2f2f2' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }} >
                    <View style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center', gap: 5 }} >
                        <List color="#000" size={20} />
                        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
                            Mis Pedidos
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 20, alignItems: 'center' }} >
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setModalAdd(true)}>
                            <PlusSquare color="green" size={24} style={{ marginRight: 8 }} />
                            <Text style={{ color: 'green' }}>Nuevo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={deleteAllOrders}>
                            <Trash color="red" size={24} style={{ marginRight: 8 }} />
                            <Text style={{ color: 'red' }}>Vaciar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginVertical: 20, gap: 10, flexGrow: 1 }} >
                    {
                        orders.length === 0 ? (
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                                <BrushCleaning color="#000" size={48} style={{ marginBottom: 10 }} />
                                <Text>No tienes pedidos aún</Text>
                            </View>
                        ) : (
                            <>
                                {orders.map((order, index) => (
                                    <Card key={index} item={order} onDelete={() => deleteOrder(index)} />
                                ))}
                            </>
                        )
                    }
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#fff", padding: 20 }} >
                <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Total:</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 17 }}>S/ {orders.reduce((total, order) => total + (order.total || 0), 0)}.00</Text>
            </View>

            <Modal visible={modalAdd} onClose={() => setModalAdd(false)}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Nuevo Pedido</Text>
                    <Text style={{ fontWeight: '500', fontSize: 12, marginBottom: 10 }}>Seleccionar plato</Text>
                    <View style={{ marginBottom: 10, flexDirection: 'column', gap: 5 }} >
                        {(JSON.platillos || []).map((item: any, index) => (
                            <TouchableOpacity style={{ padding: 10, borderWidth: selected === item ? 2 : 1, borderColor: selected === item ? 'green' : '#ccc', borderRadius: 5, backgroundColor: selected === item ? '#e0f7e0' : '#fff' }} key={index} onPress={() => setSelected(item)}>
                                <Text>{item.nombre}</Text>
                                <Text>S/ {item.precio}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <Text style={{ fontWeight: '500', fontSize: 12, marginBottom: 5 }}>Cantidad</Text>
                    <View>
                        <TextInput
                            style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10 }}
                            placeholder="Cantidad"
                            keyboardType="numeric"
                            value={quantity}
                            onChangeText={setQuantity}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 10, marginTop: 20 }} >
                        <TouchableOpacity style={{ padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, backgroundColor: "#f0f0f0" }} onPress={() => setModalAdd(false)}>
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, backgroundColor: "#4CAF50" }} onPress={() => {
                            if (selected && quantity) {
                                addOrder({ item: selected, quantity: parseInt(quantity) });
                            }
                        }}>
                            <Text style={{ color: "#fff" }}>Agregar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    )
}

export default OrderScreen