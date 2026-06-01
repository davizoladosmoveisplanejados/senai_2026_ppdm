import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

//import das telas
import Login from '../pages/login';
import Musica from '../pages/musica';
import Cadastro from '../pages/cadastro';
import TelaInicial from '../pages/telainicial';
import Favoritos from '../pages/favoritos';
//import dos navegadores
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Draw = createDrawerNavigator();

function abasInferiores(){
    return(
        <Tabs.Navigator
            screenOptions={({route}) => ({
                headerShown: true,
                tabBarActiveTintColor: '#006437',
                tabBarInactiveTintColor: '#777',
                tabBarIcon: ({color, size, focused}) => {
                    let nomeIcone = 'elipse-outline';
                    
                    if(route.name === 'Favoritos'){
                        nomeIcone = focused ? 'heart' : 'heart-outline';
                    };
                    if(route.name === 'Tela Inicial'){
                        nomeIcone = focused ? 'home' : 'home-outline';
                    };
                    return <Ionicons name={nomeIcone} size={size} color={color} />
                }
            })}
        >
            <Tabs.Screen name='Tela Inicial' component={TelaInicial} />
            <Tabs.Screen name='Favoritos' component={Favoritos} />
        </Tabs.Navigator>
    );
};
function menuSuperior(){
    return(
    <Draw.Navigator
        screenOptions={({route}) => ({
            headerShown: true,
            tabBarActiveTintColor: '#006437',
            tabBarInactiveTintColor: '#777',
            tabBarIcon: ({color, size, focused}) => {
                let nomeIcone = 'menu-outline';
                
                if(route.name === 'Favoritos'){
                    nomeIcone = focused ? 'heart' : 'heart-outline';
                };
                if(route.name === 'Tela Inicial'){
                    nomeIcone = focused ? 'home' : 'home-outline';
                };
                return <Ionicons name={nomeIcone} size={size} color={color} />
            }
        })}
    >
        <Draw.Screen name='Inicio' component={abasInferiores} />
        <Draw.Screen name='Favoritos' component={Favoritos} />
    </Draw.Navigator>
    );
};


export default function Rotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
            <Stack.Screen name='Cadastro' component={Cadastro} options={{headerShown: false}} />
            <Stack.Screen name='Principal' component={menuSuperior} options={{headerShown: false}} />
            <Stack.Screen name='Musica' component={Musica} options={{headerShown: false}} />
            <Stack.Screen name='Favoritos' component={Favoritos} options={{headerShown: false}} />
        </Stack.Navigator>
    );
};