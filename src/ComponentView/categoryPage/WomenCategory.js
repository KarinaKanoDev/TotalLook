import {useState, useEffect} from 'react'
import womenClothes from "../../Assets/womenCategory/categoryClothes.jpg";
import womenShoes from "../../Assets/womenCategory/categoryShoes.jpg";
import womenAcces from "../../Assets/womenCategory/categoryAcces.jpg";
import {Footer} from '../generalComponents/Footer'
import {Header} from '../generalComponents/Header'
import {Promo} from '../homePage/Promo'

const { Fragment } = require("react");

export function WomenCategory() {
  const [product, setProduct] = useState()

  const handleGetData = async () => {
      let url = 'http://localhost:3000/product';
      let getFetchData = await fetch(url).then(resul => resul.json())
      setProduct(getFetchData)
  }

  useEffect(() => {

    handleGetData()

  }, [])

  console.log(product, 'productos')

  return (
    <div>
                
                {product && product.map(item =>
                    
                    <Promo 
                        item={item}
                        key={item._id}
                    />
               )}
            </div>
    // <Fragment>
    //   <Header />
    //   <body>
    //   <div className="titleCategory">
    //     <p>CATEGORIAS DE MUJER</p>
    //   </div>

    //   <div>
    //     {/* <h2 className="categoryName">ROPA</h2>
    //     <h2 className="categoryName">ACCESORIOS</h2>
    //     <h2 className="categoryName">ZAPATOS</h2> */}
    //   </div>
    //   <div className="categoryClothes">
    //     <img
    //       src={womenClothes}
    //       alt="women Clothes"
    //     />
    //     <h2 className="categoryName">ROPA</h2>
    //     </div>
        
    //     <div className='categoryAcc'>
    //       <img className="category" src={womenAcces} alt="women Acces" />
    //       <h2 className="categoryName">ACCESORIOS</h2>
    //     </div>

    //     <div className='categoryShoes'>
    //       <img className="category" src={womenShoes} alt="women Shoes" />
    //       <h2 className="categoryName">ZAPATOS</h2>
    //     </div>
      
    //   </body>
    //   <Footer/>
    // </Fragment>
  );
}
