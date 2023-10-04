import Home from './src/components/Home.jsx'
import { AuthFirebase } from './src/context/ContextFirebaseLogin.jsx'

export default function App() {
  return (
    <>
      <AuthFirebase>
        <Home />
      </AuthFirebase>
    </>
  );
}

