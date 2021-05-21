import categoryClothes from "../../Assets/menCategory/clothesCategory.jpg";
import categoryShoes from "../../Assets/menCategory/shoesCategory.jpg";
import categoryAcces from "../../Assets/menCategory/accesCategory.jpg";
const { Fragment } = require("react");

export function MenCategory() {
  return (
    <Fragment>
      <div className="title">
        <h1>CATEGORIAS DE HOMBRE</h1>
      </div>
      <div>
        <img className="category" src={categoryClothes} alt="men Clothes" />
        <img className="category" src={categoryAcces} alt="men Acces" />
        <img className="category" src={categoryShoes} alt="men Shoes" />
      </div>
      <div>
        <h2 className="categoryName">ROPA</h2>
        <h2 className="categoryName">ACCESORIOS</h2>
        <h2 className="categoryName">ZAPATOS</h2>
      </div>
    </Fragment>
  );
}
