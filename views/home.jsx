
const { Link } = ReactRouterDOM

export function Home() {
  return (

    <section>
      <div className="apps-section">
        <div className="">
          <h2>Mail</h2>

          <p>Preview of latest mail app! to access MailSUS app click on the img</p>
          <Link to="/mail"><img className="mail-img" src="assets/img/home1.png" alt="" /></Link>
        </div>
        <div>
          <h2>Note</h2>
          <p>Preview of latest notes app! to access note-keeper app click on the img</p>
          <Link to="/note"><img className="mail-img" src="assets/img/home2.png" alt="" /> </Link>
        </div>
        <div>
          <h2>Book</h2>
          <p>Preview of latest books app! to access note-keeper app click on the img</p>
          <a href="https://zohar-ifrah.github.io/miss-book/"><img className="mail-img" src="assets/img/books.png" alt="" /></a>
        </div>
      </div>
    </section>
  )
}







