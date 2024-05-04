import { Link } from 'react-router-dom';

const error = () => {
  return (
    <div>
      <h2>You've found the error page</h2>
      <Link to='../'>Go back</Link>
    </div>
  );
};

export default error;
