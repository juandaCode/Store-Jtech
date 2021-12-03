import './App.css';

function App() {
  return (
    
<main>
  <section className="login">
    <div className="signup-fondo">
      <img className="fondo" src="../../../assets/resources/feliz.jpg" alt="" />
    </div>

      <form classNameName="login-form" action="">
        <label for="">Nombre Usuario</label>
        <input type="text" />
        <label for="">Email</label>
          <input type="email" />
          <label for="">Password</label>
        <input type="password" />
        <label for=""> Confirmar Password</label>
          <input type="password" />
        <button className="btn-ingresar" type="submit">Registrarte</button>
      </form>
      <a href="#" className="forget-password">Ya tienes Cuenta? Inicia Sesión</a>
  </section>
</main>

  );
}

export default App;