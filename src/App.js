import React from "react";
import Header from "./components/Header"
import Card from "./components/Card"
import Drawer from "./components/Drawer";

function App() {
  const [cartOpened,setCartOpened] = React.useState(false)
  const [items,setItems] = React.useState()
  const[favoriteItems,setFavoriteItems]= React.useState([])
   const favorites = []
  
  const pushId =(id)=>{  
      const existingItemIndex = favorites.findIndex(item => item.id === id);
 
      arr.forEach((item) => {
        if(item.id == id ) {
          favorites.push(item)
        }
      } )
      setFavoriteItems(favorites)
      console.log(existingItemIndex, 'asas')
      console.log(favorites, 'favor')
      console.log(id)
  }
  const arr = [{id : 1, title:"Man boots Nike Blazer Mid Suede", price:"12999 rubl", imageUrl:"/img/sneackers/1.jpg"},
  {id:2,title:"Man boots Nike AirMax", price:"5000 rubl", imageUrl : "/img/sneackers/2.jpg"},
  {id:3,title:"Man boots Nike Blazer", price:"7000 rubl", imageUrl : "/img/sneackers/3.jpg"},
  {id:4,title:"Man boots Puma", price:"17000 rubl", imageUrl : "/img/sneackers/4.jpg"},
  {id:5,title:"Man boots Adidas", price:"5000 rubl", imageUrl : "/img/sneackers/5.jpg"},
  {id:6,title:"Man boots Puma", price:"5000 rubl", imageUrl : "/img/sneackers/6.jpg"},
  {id:7,title:"Man boots Nike AirMax", price:"7000 rubl", imageUrl : "/img/sneackers/7.jpg"},
  {id:8,title:"Man boots Blazer AirMax", price:"2000 rubl", imageUrl : "/img/sneackers/8.jpg"},
  {id:9,title:"Man boots Adidas AirMax", price:"1000 rubl", imageUrl : "/img/sneackers/9.jpg"},
  {id:10,title:"Man boots Nike AirMax", price:"4000 rubl", imageUrl : "/img/sneackers/10.jpg"}
  ]
  return (
    <div className="wrapper">
        {cartOpened?<Drawer favoriteItems = {favoriteItems} onCloseCart = {()=>setCartOpened(false)}/>: null}
        <Header onClickCart = {()=>setCartOpened(true)}/>
      <div className="content">
        <h1>All boots</h1>
        <span>
          You can choose one boots to your favorites basket
        </span>
        <div className = "search-block">
          <img src = "/img/search.svg" alt = "Search"/>
          <input placeholder = "Search..." />
        </div>
        <div className = "sneackers">
          {arr.map((obj)=><Card title = {obj.title} price = {obj.price} imageUrl = {obj.imageUrl} 
          onFavorite ={()=>pushId(obj.id)}
          onPlus={()=>console.log("Plus")}/>)}
        </div>  
        </div>
        </div>
  );
}

export default App;
