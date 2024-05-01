import "./Home.css";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const url = "http://localhost:3000/products";

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Pagina Home - Lista de Produtos</h1>

      {loading && <p>Atualizando os dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul className="products">
          {items &&
            items.map((product) => (
              <li key={product.id}>
                <h2>{product.name} </h2>
                <p>R$: {product.price}</p>
                <Link to={`/products/${product.id}`}>Detalhes</Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
