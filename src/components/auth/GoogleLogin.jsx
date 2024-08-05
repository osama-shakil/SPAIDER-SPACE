import { loginWithGoogle } from '@/store/user/userThunk';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { Button } from '../ui/button';



const GoogleLogin = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    // const [checkProvider, setCheckProvider] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [firebase, setFirebase] = useState(null);
  
    

    const signUpWithGoogle = () => {
        // setCheckProvider(true)
        startTransition(async() => {
          dispatch(loginWithGoogle({
            onSuccess: (data) => { 
              if(data?.communities && data?.communities?.length>0){
                router.push(`/${data.communities[0]}/Community`);
              }else{
                
                router.push("/");
              }
             },
            onError: (msg) => {  } 
            }))
        
        })
       
      };

    
  return (
    <Button
  
    type="button"
    onClick={signUpWithGoogle}
      className="mx-auto rounded-xl mt-2 text-dark  font-bold w-full bg-transparent  hover:text-white border-secondary border-2 gap-x-2 flex justify-center items-center"
    >
      
            <FcGoogle size={20} />
            <p >Google</p>
          
       
    </Button>  )
}

export default GoogleLogin