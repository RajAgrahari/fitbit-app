import "./plans.css"
import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_4.jpg"
import Card from "../../UI/Card"
import { plan, plans } from "../../data"

const Plan = () => {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
      Experience Quality Fitness at a Fair Price: Our Transparent Pricing Model   </Header>
      <section className="plans">
        <div className="container plans_container">
          {
            plans.map(({id, name, desc, price, features}) => {
              return <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`₹${price}`}</h1><h2>/M</h2>
                <h4>Features</h4>
                {
                  features.map(({feature, available}, index) => {
                    return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                  })
                }
                <button className="btn lg">Claim Plan</button>
              </Card>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Plan