import { useState } from "react";
import "./App.css";
import { AddProductForm } from "./components/AddProductForm";
import { AddProductOrder } from "./components/AddProductOrder";
import { MostrarProdPed } from "./components/MostrarProdPed";
import { MostrarPromos } from "./components/MostrarPromos";
import { Promos } from "./components/Promos";
import productos from "./productos.json";
import {
 longMin,
 impMinMenu,
 dos,
 SpringRolls,
 PromoMenu,
 PromoGastaAhorrar,
 Promodosporuno
} from "./utils/constants"

function App() {
  const [product, setProductos] = useState(productos);
  const [pedido, setPedido] = useState([]);
  const [promo, setPromo] = useState([]);
  const [añadir, setAñadir] = useState(false);
  const [pedir, setPedir] = useState(false);

  const addProduct = (producto) => {
    setProductos([...product, producto]);
  };
  const addProductOrder = ({ number }) => {
    const productoPorNumero = product.find((prod) => prod.number == number);
    setPedido([...pedido, productoPorNumero]);
  };
  const promoOrder = () => {
    let arrayPromo = [];
    let importe = 0;
    const result = [];
    const promo2X1 = [];
    
    pedido.map((prod) => {
      if (!promo.includes(prod) && !result.includes(prod)) {
        result.push(prod);
      } else if (prod.name == SpringRolls && !promo2X1.includes(prod)) {
        promo2X1.push(prod.name);
      }
      importe = importe + prod.price;
    });

    if (result.length > dos && !promo.includes("Promoción Menú!!")) {
      arrayPromo.push("Promoción Menú!!");
    }

    if (importe > impMinMenu && !promo.includes(PromoGastaAhorrar)) {
      arrayPromo.push("Promoción Gasta para ahorrar!!");
    }

    if (promo2X1.length >= longMin && !promo.includes(Promodosporuno)) {
      arrayPromo.push("Promoción 2X1!!");
    }

    setPromo(arrayPromo);
  };

  return (
    <div className="App">
      <h1 className="header">Nǐ hǎo Restaurant</h1>
      <MostrarProdPed
        product={product}
        pedido={pedido}
        setAñadir={setAñadir}
        setPedir={setPedir}
      />
      {añadir && <AddProductForm addProduct={addProduct} />}
      {pedir && (
        <div>
          <AddProductOrder
            addProductOrder={addProductOrder}
            product={product}
          />
          <Promos promoOrder={promoOrder} />
          <MostrarPromos promo={promo} />
        </div>
      )}
    </div>
  );
}

export default App;
