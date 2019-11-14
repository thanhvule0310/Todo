import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const Logout = ({ logout, history }) => {
  history.push('/signin');
  useEffect(() => {
    logout();
  }, [logout]);
  return null;
};

const mapDispatchToProps = { logout: actions.signOut };

export default connect(null, mapDispatchToProps)(Logout);
