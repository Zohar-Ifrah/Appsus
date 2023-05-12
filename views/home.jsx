
const { Link } = ReactRouterDOM

export function Home() {
  return (
    <section className="home">
      <h1>Welcome to Appsus!</h1>
      <div className="apps-section">
        <div className="app-card mail-app">
          <h2>Mail</h2>
          <p>Preview of latest email or btns to access MailSUS</p>
          <Link to="/mail">Go to Mail</Link>
        </div>
        <div className="app-card notes-app">
          <h2>Note</h2>
          <p>Preview of latest note or btns to access note app</p>
          <Link to="/note">Go to Notes</Link>
        </div>
        {/* <div className="app-card books-app">
          <h2>Books</h2>
          <p>List of latest books or btns to access MissBook app</p>
          <Link to="/books">Go to Books</Link>
        </div> */}
      </div>
    </section>
  );
}







