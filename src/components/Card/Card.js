import Reach from 'react'

const Card = props => {
    return (
        <div className='card-group'>
        <div className="card">
          <img src="https://randomuser.me/api/portraits/thumb/women/13.jpg" className="card-img-top" alt="Lilly Wallace" />
          <div className="card-body">
          <h5 className="card-title">{this.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"
              name="firstname"
              value={this.name.first}></li>
            <li className="list-group-item">{this.phone}</li>
            <li className="list-group-item"></li>
          </ul>
        </div>
    )
  }

  export default Card