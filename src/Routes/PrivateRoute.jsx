import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // if (loading) {
    //     return <div>
    //         <progress className="progress w-56 progress-warning h-8"></progress>
    //     </div>;
    // }
    
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location}} replace></Navigate>
};

export default PrivateRoute;