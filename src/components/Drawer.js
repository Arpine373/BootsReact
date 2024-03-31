function Drawer(props){
    return(
      <div className="overlay">
        <div className = "drawer">
        <h2> Favorites Basket</h2>
        <img className = "removeBtn" src = "/img/btn-remove.svg"/>
      {props.favoriteItems.length ? props.favoriteItems.map((item)=>{
        return (
          
          <div className = "cartItem">
            <img src = {item.imageUrl} height = "200px" width = "200px"/>
            <div className = "first">
              <p>
                {item.title}
              </p>
              <b> {item.price}</b> <br/>
              <div className="cartTotalBlock">
                
              <button className="greenButton" style={{color:"green"}}>
               <b> Checkout </b>
              </button>
              <ul style={{listStyleType:"none"}} >
                <li>
                  <span>Amount:</span>
                  <b> {item.price} </b>
                </li>
                <li>
                  <div></div>
                  <p><b> Tax 5%<span><br/>
                  Sum:</span>{item.price}</b></p>
                </li>
              </ul>
            </div>
          

        </div>
        </div>
        )
      }):<></>
      }
      </div>
      
      </div>
    )
    }
export default Drawer