import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTema } from '../context/TemaContext'; 
import Login from '../screens/Login';
import Home from '../screens/Home';
import Produtos from '../screens/Produtos';
import Carrinho from '../screens/Carrinho';
import Perfil from '../screens/Perfil';
import Pedidos from '../screens/Pedidos';
import Mapa from '../screens/Mapa';
import Configuracoes from '../screens/Configuracoes';
import DetalhesRestaurante from '../screens/DetalhesRestaurante';
import Checkout from '../screens/Checkout';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = ({ carrinho, setCarrinho }) => {
  const { temaEscuro } = useTema();

  
  const tabBarOptions = temaEscuro
    ? {
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#aaaaaa',
        tabBarStyle: { backgroundColor: '#333333' },
      }
    : {
        tabBarActiveTintColor: '#ff914d',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#ffffff' },
      };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Carrinho') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Pedidos') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Mapa') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Configuracoes') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

         
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        ...tabBarOptions, 
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Carrinho">
        {(props) => <Carrinho {...props} carrinho={carrinho} />}
      </Tab.Screen>
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Pedidos" component={Pedidos} />
      <Tab.Screen name="Mapa" component={Mapa} />
      <Tab.Screen name="Configuracoes" component={Configuracoes} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [carrinho, setCarrinho] = useState([]);

  return (
    <Stack.Navigator>
      {!isAuthenticated ? (
        <Stack.Screen name="Login">
          {(props) => <Login {...props} setIsAuthenticated={setIsAuthenticated} />}
        </Stack.Screen>
      ) : (
        <>
          <Stack.Screen name="Main">
            {(props) => (
              <TabNavigation {...props} carrinho={carrinho} setCarrinho={setCarrinho} />
            )}
          </Stack.Screen>
          <Stack.Screen name="Products">
            {(props) => (
              <Produtos
                {...props}
                carrinho={carrinho}
                setCarrinho={setCarrinho}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="DetalhesRestaurante" component={DetalhesRestaurante} />
          <Stack.Screen name="Checkout" component={Checkout} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Navigation;


