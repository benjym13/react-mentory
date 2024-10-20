import './App.css';
import ProductList from './components/ProductList';
/* import data from './data/data.json'; */

export default function App() {
  return (
    <div className="prototype-container container mt-20 grid grid-cols-12 gap-8">
      <div className="product-list col-span-8">
        <ProductList></ProductList>
      </div>
      <div className="shopping-card col-span-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui minus maxime odio. Explicabo delectus impedit et officiis commodi voluptatum nihil quam, maiores eligendi magni deleniti exercitationem earum molestias similique.
      </div>
    </div>
  )
}
