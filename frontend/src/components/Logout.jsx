import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setauthUser] = useAuth();
    function handleLogout() {
        try{
        setauthUser({...authUser,user:null});
        
        toast.success("Logout successful");
          setTimeout(() => {
           localStorage.removeItem("User");
           window.location.href = "/"; // Redirect to home page after logout
          }, 1000);
        }
        catch(err){
            toast.error("Logout failed", err.message);
        }
    }
        
  return (
   <>

   <button className='px-3 py-2 bg-red-500 text-white rounded -b-md cursor-pointer hover:bg-red-800'onClick={handleLogout}>Logout</button>
   </>
  )
}

export default Logout