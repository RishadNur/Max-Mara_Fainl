import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Юбка Weekend FORNOVO ',
          img: '200.jpg',
          desc: 'Основной цвет: чёрный',
          category: 'Skirt',
          price: '152.580'
        },
        {
          id: 2,
          title: 'Юбка Weekend FAGUS',
          img: '100.jpg',
          desc: 'Основной цвет: многоцветный',
          category: 'Skirt',
          price: '206.99'
        },
        {
          id: 3,
          title: 'Жилет Weekend ARIZIA',
          img: '300.jpg',
          desc: 'Основной цвет: хаки',
          category: 'Gilet',
          price: '627.640'
        },
        {
          id: 4,
          title: 'Пальто Weekend RANGO',
          img: '409.jpg',
          desc: 'Основной цвет: песочный',
          category: 'Coat',
          price: '116.260'
        },
        {
          id:5,
          title: 'Платье MaxMara NOCERA',
          img: '500.jpg',
          desc: 'Основной цвет: терракотовый',
          category: 'Dress',
          price: '1500'
        },

        {

          id:6,
          title: 'Брюки MaxMara SEGNALE ',
          img: '600.jpg',
          desc: 'Основной цвет: айвори',
          category: 'MaxMara',
          price: '100.99'
      
  
        }
      ],
      showFullItem: false,
      fullItem: {}
    }

this.state.currentItems = this.state.items
this.addToOrder = this.addToOrder.bind(this)
this.deleteOrder = this.deleteOrder.bind(this)
this.chooseCategory = this.chooseCategory.bind(this)
this.onShowItem = this.onShowItem.bind(this)


  }

render() {
  return (
    <div className="wrapper">
   <Header orders={this.state.orders} onDelete={this.deleteOrder} />
    <Categories chooseCategory={this.chooseCategory} />
    <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
    
    {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
    <Footer />
   </div>
  )
}

onShowItem(item) {
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}


chooseCategory(category) {
  if(category === 'all') {
  this.setState({currentItems: this.state.items})
  return
  }

  this.setState({
  currentItems: this.state.items.filter(el => el.category === category)
  })
}

deleteOrder(id) {
this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}


addToOrder(item) {
  let isInArray = false
  this.state.orders.forEach(el => {
    if(el.id == item.id)
    isInArray = true
  })
 if(!isInArray)

  this.setState({ orders: [...this.state.orders, item] })
}

}

export default App;
