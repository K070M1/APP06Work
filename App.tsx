import { Text } from 'react-native';
import {
  createStaticNavigation,
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, UserCircleIcon, Settings, List, UtensilsCrossed } from 'lucide-react-native'

// Screens
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import MenuScreen from './screens/MenuScreen';
import OrderScreen from './screens/OrderScreen';
import SettingScreen from 'screens/SettingScreen';

// Rojo claro
const colorFocused = '#FF6B6B';
const textFocused = '#FF6B6B';
// Rojo mas claro para el fondo del item activo
const drawerActiveTintColor = '#fae6e6';

const DrawerConfig = createDrawerNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? textFocused : 'black' }}>Inicio</Text>
        ),
        drawerIcon: ({ focused, color, size }) => (
          <Home color={focused ? colorFocused : color} size={size} />
        ),
        drawerActiveBackgroundColor: drawerActiveTintColor,
        title: 'Inicio',
      },
    },
    Menu: {
      screen: MenuScreen,
      options: {
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? textFocused : 'black' }}>Menú</Text>
        ),
        drawerIcon: ({ focused, color, size }) => (
          <UtensilsCrossed color={focused ? colorFocused : color} size={size} />
        ),
        drawerActiveBackgroundColor: drawerActiveTintColor,
        title: 'Menú',
      },
    },
    Order: {
      screen: OrderScreen,
      options: {
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? textFocused : 'black' }}>Pedidos</Text>
        ),
        drawerIcon: ({ focused, color, size }) => (
          <List color={focused ? colorFocused : color} size={size} />
        ),
        drawerActiveBackgroundColor: drawerActiveTintColor,
        title: 'Pedidos',
      },
    },
    Profile: {
      screen: ProfileScreen,
      options: {
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? textFocused : 'black' }}>Perfil</Text>
        ),
        drawerIcon: ({ focused, color, size }) => (
          <UserCircleIcon color={focused ? colorFocused : color} size={size} />
        ),
        drawerActiveBackgroundColor: drawerActiveTintColor,
        title: 'Perfil',
      },
    },
    Settings: {
      screen: SettingScreen,
      options: {
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? textFocused : 'black' }}>Configuración</Text>
        ),
        drawerIcon: ({ focused, color, size }) => (
          <Settings color={focused ? colorFocused : color} size={size} />
        ),
        drawerActiveBackgroundColor: drawerActiveTintColor,
        title: 'Configuración',
      },
    },
  },
});

const Navigation = createStaticNavigation(DrawerConfig);


export default function App() {
  return (
    <Navigation />
  );
}