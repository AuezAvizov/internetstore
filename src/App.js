import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';
import './style/index.scss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items:[
        {
            id: 1,
            title: "Hat",
            description: "A warm fleece hat is suitable for outdoor walks, winter sports, and running.",
            category: 'hat',
            price: 30,
            img: 'Hat.webp'
          },
          {
            id: 2,
            title: "Leather Jacket",
            description: "A stylish black leather jacket for a cool and edgy look.",
            price: 150,
            category: 'jacket',
            img: "Jacket.webp"
          },        
          {
            id: 3,
            title: "Denim Jeans",
            description: "Classic blue denim jeans for everyday comfort and style.",
            category: "pants",
            price: 50,
            img: "denim_jeans.webp"
          },        
          {
            id: 4,
            title: "Running Shoes",
            description: "High-performance running shoes with cushioning for long-distance runs.",
            price: 80,
            category:"shoes",
            img: "running_shoes.webp"
          },        
          {
            id: 5,
            title: "Knit Sweater",
            description: "Cozy knit sweater perfect for chilly evenings by the fireplace.",
            price: 45,
            category: "sweaters",
            img: "knit_sweater.webp"
          },        
          {
            id: 6,
            title: "Raincoat",
            description: "Waterproof raincoat with a hood to keep you dry in wet weather.",
            category: "sweaters",
            price: 60,
            img: "raincoat.webp"
          },        
          {
            id: 7,
            title: "Summer Dress",
            description: "Light and airy summer dress with floral patterns for a breezy look.",
            price: 35,
            category: "dress",
            img: "summer_dress.webp"
          },      
          {
            id: 8,
            title: "Hiking Boots",
            description: "Durable hiking boots designed for rugged outdoor adventures.",
            price: 90,
            category: "shoes",
            img: "hiking_boots.webp"
          },
          {
            id: 9,
            title: "Wool Coat",
            description: "Elegant wool coat to keep you warm and stylish during the winter season.",
            price: 120,
            category: "dress",
            img: "wool_coat.webp"
          },
          {
            id: 10,
            title: "Baseball Cap",
            description: "Classic baseball cap with an adjustable strap for a comfortable fit.",
            price: 15,
            category: "hat",
            img: "baseball_cap.webp"
        }        
      ], 
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete = {this.deleteOrder}/>
        <Categories chooseCategory = {this.chooseCategory}/>
        <Items onShowItem ={this.onShowItem} items={this.state.currentItems} onAdd ={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} item ={this.state.fullItem}/>} 
        <Footer />
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el=> el.id !== id)})
  }

  addToOrder(item){
    let isInArray = false
    this .state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if (!isInArray)
    this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;