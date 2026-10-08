
import {shopProducts} from "../../utils/mockData";


const Banner = () =>{

}

export const Shopbody = ()=>{
    return <div>
      <div>FILTER</div>
       <div className="prd_box">
        {shopProducts.map((elem) => (
          <Prd_grid  prdDetails={elem} key={elem.id} />
        ))}
      </div>
    </div>
}

const Prd_grid = ({prdDetails}) =>{
    const { name, brand, price, ratings, imgid } = prdDetails;

  return <div>
     <div className="card">
      <img className="prd-img" src={imgid} />
      <div className="prd-details">
        <h3>{name}</h3>
        <p>brand:{brand}</p>
        <span>rating:{ratings}</span>
        <span>
          {" "}
          price:<b>{price}</b>
        </span>
      </div>
    </div>
    </div>
}