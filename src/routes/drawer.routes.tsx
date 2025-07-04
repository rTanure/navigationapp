import { createDrawerNavigator } from "@react-navigation/drawer"
import {Feather} from "@expo/vector-icons"

import TabRoutes from "./tab.routes"

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{title: ""}}>
      <Drawer.Screen 
        name="feed"
        component={TabRoutes}
        options={{
          drawerIcon: ({color, size}) => <Feather name="home" color={color} size={size} />,
          drawerLabel: "Início"
        }}
      />
    </Drawer.Navigator>
  )
}