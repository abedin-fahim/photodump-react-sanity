import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { useState } from 'react';
import bgVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';

const Login = () => {
  const [user, setUser] = useState(false);
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative h-full w-full'>
        <video
          className='w-full h-full object-cover'
          src={bgVideo}
          type='video/mp4'
          muted
          autoPlay
          controls={false}
          loop
        />
        <div className='absolute left-0 top-0 flex justify-center items-center bottom-0 right-0 bg-blackOverlay'>
          <div className='flex items-center justify-center flex-col p-5'>
            <img
              className='pb-5'
              src={logo}
              width='130px'
              alt='logo'
            />
            <div className='shadow-2xl'>
              {user ? (
                <div>Logged in</div>
              ) : (
                <GoogleLogin
                  onSuccess={(response) => console.log(response)}
                  onError={(error) => console.log(error)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
