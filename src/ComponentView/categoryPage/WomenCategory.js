import categoryClothes from "../../Assets/womenCategory/categoryClothes.jpg";
import categoryShoes from "../../Assets/womenCategory/categoryShoes.jpg";
import categoryAcces from "../../Assets/womenCategory/categoryAcces.jpg";
const { Fragment } = require("react");

export function WomenCategory() {
  return (
    <Fragment>
      <div className="title">
        <h1>CATEGORIAS DE MUJER</h1>
      </div>
      <div>
        <img className="category" src={categoryClothes} alt="women Clothes" />
        <img className="category" src={categoryAcces} alt="women Acces" />
        <img className="category" src={categoryShoes} alt="women Shoes" />
      </div>
      <div>
        <h2 className="categoryName">ROPA</h2>
        <h2 className="categoryName">ACCESORIOS</h2>
        <h2 className="categoryName">ZAPATOS</h2>
      </div>
    </Fragment>
  );
}
