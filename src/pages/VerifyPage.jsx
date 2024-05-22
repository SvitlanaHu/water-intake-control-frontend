import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verifyPageAction } from '../redux/auth/operations';
import toast from 'react-hot-toast';
import RefreshLoader from '../components/RefreshLoader/RefreshLoader';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const VerifyPage = () => {
  const dispatch = useDispatch();
  let query = useQuery();
  const token = query.get('token');
  const refreshToken = query.get('refreshToken');
  const error = query.get('error');
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate('/error-verify-email');
    } else if (token && refreshToken) {
      dispatch(verifyPageAction({ token, refreshToken }))
        .then(() => {
          toast.success('Верифікація пройшла успішно');

          navigate('/tracker');

          setTimeout(() => {
            window.location.reload();
          }, 100);
        })
        .catch(() => {
          navigate('/error-verify-email');
        });
    } else {
      navigate('/signin');
    }
  }, [dispatch, token, refreshToken, error, navigate]);

  return (
    <div>
      <RefreshLoader />
    </div>
  );
};

export default VerifyPage;
