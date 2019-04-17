import React from 'react';

const ProjetDetails = (props) => {
    const id = props.match.params.id

    return (
      <div className="container section project-details">
          <div className="card z-depth-0">
              <div className="card-content">
                  <span className="card-title">Project Title {id}</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quis necessitatibus quam, ea recusandae possimus doloribus ipsum labore velit cum natus ad numquam quasi asperiores fugiat quibusdam excepturi sunt dolorum.</p>
              </div>
              <div className="card-action gret lighten-4 grey-text">
                  <div>Posted by the Net Ninja</div>
                  <div>2nd September, 1pm</div>
              </div>
          </div>
      </div>
    )
}

export default ProjetDetails;
