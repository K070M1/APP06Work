import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Modal = ({ visible, onClose, children }: { visible: boolean, onClose: () => void, children: React.ReactNode }) => {
    if (!visible) return null

    return (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
                {children}
            </View>
        </View>
    )
}

export default Modal