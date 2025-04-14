import { ToastContainer } from "react-toastify";
import AppRoutes from "./AppRouter";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <AppRoutes />;
      <ToastContainer />
    </UserProvider>
  )
}

export default App;
