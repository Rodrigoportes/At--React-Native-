import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Produtos from '../screens/Produtos';
import Carrinho from '../screens/Carrinho';
import Perfil from '../screens/Perfil';
import Pedidos from '../screens/Pedidos';
import Mapa from '../screens/Mapa';
import DetalhesRestaurante from '../screens/DetalhesRestaurante';
import Checkout from '../screens/Checkout';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = ({ carrinho, setCarrinho }) => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Carrinho">
      {(props) => <Carrinho {...props} carrinho={carrinho} setCarrinho={setCarrinho} />}
    </Tab.Screen>
    <Tab.Screen name="Perfil" component={Perfil} />
    <Tab.Screen name="Pedidos" component={Pedidos} />
    <Tab.Screen name="Mapa" component={Mapa} />
  </Tab.Navigator>
);

const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [carrinho, setCarrinho] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
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

            <Stack.Screen name="Produtos">
              {(props) => (
                <Produtos {...props} carrinho={carrinho} setCarrinho={setCarrinho} />
              )}
            </Stack.Screen>
            <Stack.Screen name="DetalhesRestaurante" component={DetalhesRestaurante} />
            <Stack.Screen name="Checkout" component={Checkout} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;








