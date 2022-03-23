import { useState } from "react";
import { LeafletMap } from "./Componetns/LeafletMap";
function App() {
  const [details, setDetails] = useState({
    polylinePoints: [
      [33.281, 44.3886],
      [33.2897, 44.4095],
      [33.302, 44.43],
      [33.31, 44.4295],
      [33.315, 44.426],
    ],
    center: [],
    mailBox: [
      [33.2891, 44.409338],
      [33.28982, 44.393608],
      [33.2805, 44.38869],
      [33.3043, 44.4464],
      [33.3024, 44.4299],
    ],
  });
  return (
    <div>
      <LeafletMap details={details} />
    </div>
  );
}

export default App;
