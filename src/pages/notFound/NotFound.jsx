import "./notFound.css"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <section>
      <div className="container notfound_container">
        <h2>Page Not Found</h2>
        <Link to="/" className="btn">Go back to Homepage</Link>
      </div>
    </section>
  )
}

export default NotFound