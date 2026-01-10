import { useState, useEffect } from 'react'
import MainPage from './components/MainPage'
import { products } from './components/products'
import { categorys } from './components/filterCategory'
import HeaderPage from './components/HeaderPage'
import FooterPage from './components/FooterPage'
import SidebarPage from './components/SidebarPage'
import CartModal from './components/CartModal'
import ProfileModal from './components/ProfileModal'
import FavouritesModal from './components/favouritesModal'
import './App.css'

function App() {

  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('my-order')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('my-order', JSON.stringify(orders))
  }, [orders])


  function makeOrder() {
    if (cart.length === 0) {
      alert('Корзина пуста :(')
      return
    }

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      totalCost: cart.reduce((acc, item) => acc + item.cost, 0),
      items: cart
    }

    console.log(newOrder)
    setOrders([...orders, newOrder])
    setCart([])

    setIsCartOpen(false)
    alert('Спасибо за заказ! Уточки в пути!!')
  }

  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem('my-favourites')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('my-favourites', JSON.stringify(favourites))
  }, [favourites])

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('my-cart')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('my-cart', JSON.stringify(cart))
  }, [cart])

  function addToFavourites(product) {
    const isInFavourites = favourites.some(item => item.id === product.id)

    if(isInFavourites) {
      const newFavourites = favourites.filter(item => item.id !== product.id)
      setFavourites(newFavourites)
    }
    else {
      setFavourites([...favourites, product])
    }
  }

  function addToCart(product) {
    const isInCart = cart.some(item => item.id === product.id)

    if(isInCart) {
      const newCart = cart.filter(item => item.id !== product.id)
      setCart(newCart)
    }
    else {
      setCart([...cart, product])
    }
  }

  const [isFavouritesOpen, setIsFavouritesOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const [searchItem, setSearchItem] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Все')

  const filteredItem = products.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(searchItem.toLowerCase())
    const matchCategory = selectedCategory === 'Все' || product.category === selectedCategory
    return matchSearch && matchCategory
  })

  const totalCostCart = cart.reduce((acc, product) => {
    return acc + product.cost
  }, 0)

  const totalCostFavourites = favourites.reduce((acc, products) => {
    return acc + products.cost
  }, 0)

  return (
    <>
      <div className='container'>

        <header className='header'>
          <HeaderPage
          cart={cart}
          favourites={favourites}
          setIsCartOpen={setIsCartOpen}
          setIsProfileOpen={setIsProfileOpen}
          setSearchItem={setSearchItem}
          setIsFavouritesOpen={setIsFavouritesOpen}
          orders={orders}
          />
        </header>

        <main className='main'>
          <MainPage
          products={filteredItem}
          cart={cart}
          favourites={favourites}
          addToCart={addToCart}
          addToFavourites={addToFavourites}
          />
        </main>

        <aside className='sidebar'>
          <SidebarPage
          categorys={categorys}
          setSelectedCategory={setSelectedCategory}/>
        </aside>

        <footer className='footer'>
          <FooterPage/>
        </footer>
      </div>

      {
        isFavouritesOpen && (
          <FavouritesModal
          closeFavourites={() => setIsFavouritesOpen(false)}
          removeFromFavourites={addToFavourites}
          favourites={favourites}
          totalCostFavourites={totalCostFavourites}
          />
        )
      }

      {
        isCartOpen && (
          <CartModal
          cart={cart}
          closeCart={() => setIsCartOpen(false)}
          removeFromCart={addToCart}
          totalCostCart={totalCostCart}
          makeOrder={makeOrder}
        />
        )
      }

      {
        isProfileOpen && (
          <ProfileModal
          newOrder={orders}
          closeProfile={() => setIsProfileOpen(false)}
          />
        )
      }
    </>
  )
}

export default App
