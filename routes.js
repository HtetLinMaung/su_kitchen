import GetstartedScreen from "./screens/GetstartedScreen";
import StartScreen from "./screens/StartScreen";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

const routes = [
  {
    options: { headerShown: false },
    name: "GetstartedScreen",
    component: GetstartedScreen
  },
  {
    options: { headerShown: false },
    name: "StartScreen",
    component: StartScreen
  },
  {
    options: { headerShown: false },
    name: "SignupScreen",
    component: SignupScreen
  },
  {
    options: { headerShown: false },
    name: "LoginScreen",
    component: LoginScreen
  },
  {
    options: { headerShown: false },
    name: "HomeScreen",
    component: HomeScreen
  }
];

export default routes;
