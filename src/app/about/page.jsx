"use client"; 
import { useRouter } from 'next/navigation';

const AboutPage = () => {
  const router = useRouter();
  const loggedIn = true;

  const handleNavigation = ()=>{
    if(loggedIn){
      router.push('/about/address');
    }
    else{
      router.push('/')
    }
  }
  return (
    <div>
      <h2>About page</h2>
      <button type='button' className='text-blue-700 bg-white' onClick={handleNavigation}>Address</button>
    </div>
  );
};

export default AboutPage;