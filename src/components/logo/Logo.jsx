import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const LogoDark = ({ light }) => {
  return (
    <Link to='/'>
      <img
        src="assets/img/th-4/orbytlogo.png"
        alt='AIMass'
        width='100'
        height='50'
      />
    </Link>
  );
};

export default LogoDark;
