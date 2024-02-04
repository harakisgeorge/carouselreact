import PropTypes from 'prop-types';
import './index.css';
const Service = ({ details }) => {
    const { imageUrl, description } = details;
  
    return (
      <li className="service-card-container">
        <img src={imageUrl} className="service-image" alt="Service" />
        <hr className='greenLine'/>
        <div className="service-details">
          <p>{description}</p>
        </div>
      </li>
    );
  };
  
  Service.propTypes = {
    details: PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  export default Service;