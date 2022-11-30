import { useState } from "react";
import "./App.css";
import { AddProductForm } from "./components/AddProductForm";
import { AddProductOrder } from "./components/AddProductOrder";
import { MostrarPedido } from "./components/MostrarPedido";
import { MostrarProductos } from "./components/MostrarProductos";
import { MostrarPromos } from "./components/MostrarPromos";
import { Promoción2X1 } from "./components/Promoción2X1";
import { Promos } from "./components/Promos";
import productos from "./productos.json";

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
    console.log(productoPorNumero);
    setPedido([...pedido, productoPorNumero]);
    console.log(pedido);
  };
  const promoOrder = () => {
    let total = 0;
    const result = [];
    const promo2X1 = [];
    pedido.forEach((prod) => {
      if (!promo.includes(prod) && !result.includes(prod)) {
        result.push(prod);
      } else if (prod.name == "Spring rolls" && !promo2X1.includes(prod)) {
        promo2X1.push(prod.name);
      }
      total = total + prod.price;
    });
    if (result.length > 2 && !promo.includes("Promoción Menú")) {
      setPromo([...promo, "Promoción Menú"]);
    }
    if (total > 20 && !promo.includes("Promoción Gasta para ahorrar")) {
      setPromo([...promo, "Promoción Gasta para ahorrar"]);
    }
    if (promo2X1.length >= 1 && !promo.includes("Promoción 2X1")) {
      setPromo([...promo, "Promoción 2X1"]);
    }
    console.log(promo);
    console.log(result);
    console.log(promo2X1);
    console.log(total);
  };

  return (
    <div className="App">
      <div>
        <h1 className="header">Nǐ hǎo</h1>
      </div>
      <div className="cuarta1">
        <MostrarProductos product={product} setAñadir={setAñadir} />
      </div>
      {añadir && (
        <div className="cuarta">
          <AddProductForm addProduct={addProduct} />
        </div>
      )}
      {pedir && (
        <div className="cuarta">
          <AddProductOrder addProductOrder={addProductOrder} />
          <Promos promoOrder={promoOrder} />
          <MostrarPromos promo={promo} />
        </div>
      )}

      <div className="cuarta">
        <MostrarPedido pedido={pedido} setPedir={setPedir} />
      </div>
      <div className="cuarta"></div>
    </div>
  );
}

export default App;
