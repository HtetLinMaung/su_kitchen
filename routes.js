import GetstartedScreen from "./screens/GetstartedScreen";
import StartScreen from "./screens/StartScreen";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";

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
  }
];

export default routes;
