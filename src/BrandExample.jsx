import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./App.css";

function BrandExample() {
  return (
    <>
     <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <h1>Welcome to my website!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit odio vitae quam interdum, id dapibus augue aliquam. Donec euismod lorem ac dolor feugiat, id aliquet lacus congue.</p>
      <p>Suspendisse vitae lorem vel elit lobortis tincidunt eget auctor quam. Sed bibendum lobortis orci, non ultricies leo venenatis a. Praesent vel nibh ac augue facilisis faucibus eget vel purus.</p>
    </main>
    <footer>
      <p>&copy; 2023 My Website</p>
    </footer>
    </>
  );
}

export default BrandExample;