function Chat() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    console.log("Message envoyé"); // Affiche un message dans la console
  };

  return (
    <body><div className="container">
      <div className="section">
        <h2 className="title">Interface de Chat</h2>
        <div className="chat-list">
          <div className="chat-item">Jean Dupont: Bonjour !</div>
          <div className="chat-item">Clarisse Roger: À bientôt !</div>
          <div className="chat-item">Jean Dupont: Merci pour l'aide !</div>
        </div>
        <form className="chat-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Votre texte ici..."
          />
          <button type="submit" className="button">
            Envoyer
          </button>
        </form>
      </div>
    </div>
    </body>
  );
}

export default Chat;
