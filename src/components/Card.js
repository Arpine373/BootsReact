import React from "react"
function Card(props){
  const [isAdded,setisAdded] = React.useState(false)
  const [isFavorite,setisFavorite] = React.useState(false)
  const [cartItems,setCartItems] =React.useState({})
  const onClickPlus = ()=>{
    setisAdded (true)
  }
  const onClickFavorite = ()=>{
    setisFavorite (true)
    props.onFavorite()
  }
    return(
        <div className="card">
            <div className = "favorite">
              <img  alt ="Unlike" onClick = {onClickFavorite} src = {isFavorite?"/img/liked.svg":"/img/unliked.svg"}/>
            </div>
            <img src = {props.imageUrl} width="133" height="112" alt = "boots1"/>
            <p>{props.title}</p>
            <div className = "cardboots1">
              <div className ="cardboots1Info">
                <span> Price </span><br/>
                <b> {props.price}</b> &nbsp;
              <img  className = "button" width= "31" height = "31" onClick = {onClickPlus} src = {isAdded?"/img/btn-checked.svg":"/img/plus.svg"}/>
              </div>
            </div>
          </div>
    )
}
export default Card