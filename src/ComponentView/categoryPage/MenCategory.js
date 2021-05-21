import menClothes from "../../Assets/menCategory/clothesCategory.jpg";
import menShoes from "../../Assets/menCategory/shoesCategory.jpg";
import menAcces from "../../Assets/menCategory/accesCategory.jpg";
import {Footer} from '../generalComponents/Footer'
import {Header} from '../generalComponents/Header'
const { Fragment } = require("react");

export function MenCategory() {
  // f()
  return (
    <Fragment>
      <Header />
      <body>
      <div className="title">
        <h1>CATEGORIAS DE HOMBRE</h1>
      </div>
      <div>
        <img className="category" src={menClothes} alt="men Clothes" />
        <img className="category" src={menAcces} alt="men Acces" />
        <img className="category" src={menShoes} alt="men Shoes" />
      </div>
      <div>
        <h2 className="categoryName">ROPA</h2>
        <h2 className="categoryName">ACCESORIOS</h2>
        <h2 className="categoryName">ZAPATOS</h2>
      </div>
      </body>
      <Footer/>
    </Fragment>
  );
  }