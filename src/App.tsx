import "./App.css";
import OverlayLoading from "./components/ui/loading/overlayLoading";
import Header from "./components/layout/header/header";
import { useAppSelector } from "./hooks/redux";
import FlashBar from "./components/ui/loading/flashBar";
function App() {
  const loading: boolean = useAppSelector((state) => state.uiSlice.loading);
  const msg: string = useAppSelector((state) => state.uiSlice.msg);
  return (
    <div>
      <Header />

      <OverlayLoading open={loading}/>
      {msg.length>1 &&<FlashBar/>}
    </div>
  );
}

export default App;
