function Login() {
  return (
    <div className="container">
      <div className="section">
        <h2 className="title">Page de Connexion Learn@Home</h2>
        <form className="form">
          <label htmlFor="email" className="label">
            Email :
          </label>
          <input
            type="email"
            id="email"
            className="input"
            placeholder="Entrez votre email"
            required
          />
          <label htmlFor="password" className="label">
            Mot de Passe :
          </label>
          <input
            type="password"
            id="password"
            className="input"
            placeholder="Entrez votre mot de passe"
            required
          />
          <button type="submit" className="button">
            Se connecter
          </button>
          <div className="links">
            <a href="/forgot_password" className="link">
              Mot de passe oublié ?
            </a>
            <a href="/register" className="link">
              Créer un compte
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
