import React from 'react'

function Footer() {
  return (
    <footer>
      
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h4>PlayCoins</h4>
        <p>123 Main St, Anytown USA</p>
        <p>Email: info@playcoins.com</p>
        <p>Phone: 555-123-4567</p>
      </div>
      <div class="col-md-4">
        <h4>Links útiles</h4>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Juegos</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h4>Síguenos</h4>
        <ul class="social-icons">
          <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer