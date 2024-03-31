function Header(props){
    return(<header>
        <div className = "headerLeft">
          <img width = '40' height = '40'src ="/img/logo.png"/>

          <h3>
            Magazine of Boots
          </h3>
        </div>

        <ul className="headerRight">
          <li onClick= {props.onClickCart}>
            <img src = "/img/cart.svg" width ="70px" height = "70px"/>
            <span>
              rubl
            </span>
          </li>
          <img src = "/img/user.svg"/>
        </ul>
      </header>
      )
}
export default Header