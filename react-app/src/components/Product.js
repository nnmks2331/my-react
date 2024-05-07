 function Product(props){
    console.log(props);
    const{product}=props;
    return(<>
           <div className="card" >
  <img src={product.image} className="card-img-top" alt="logo"/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <button className="btn btn-primary">Details</button>
  </div>
</div>
    
    </>);
 }
 export default Product;