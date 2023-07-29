import React from 'react'
import { Input, Button, Link, FormControl, FormLabel,useToast,Checkbox, CheckboxGroup, FormErrorMessage,
  FormHelperText,} from '@chakra-ui/react'
  import { Link as LinkRoute} from "react-router-dom";

function Login() {
    const toast=useToast()
  return (
      <div className='w-full h-screen flex justify-center items-center'>
      <div className='max-w-md bg-gray-100 border p-10 rounded-xl flex justify-center items-center flex-col'>
        <h1  className='text-3xl font-bold text-teal-700'>Login</h1>
        <p className='text-1xl text-center'>Silahkan masuk username dan password untuk masuk ke akun</p>
        <div >
        <FormControl>
            <FormLabel>username
            </FormLabel>
            <Input placeholder='masukan username' type='text' colorScheme='teal' color={'teal'}/>
            </FormControl>
            <FormControl>

            <FormLabel>password</FormLabel>
            <Input placeholder='masukan password' type='password' colorScheme='teal'color={'teal'} />
            </FormControl>
            <FormControl>

            <Checkbox defaultChecked>Remember me</Checkbox>
           
            
            </FormControl>
            <FormControl>
            <Button onClick={() =>
        toast({
          title: 'succes Login.',
          description: "you succes login to your account.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })} colorScheme='teal' width={"full"}>Login</Button>
        </FormControl>
        <Link colorScheme='steal'className='mt-1xl' color={'telegram.700'}>Forgot Pasword?</Link>
        <div className='mt-3 flex flex-col justify-center items-center'>
             <div>Belum punya akun? <LinkRoute to={'/register'}> <Link colorScheme='text' color={'teal.700'}>Register</Link></LinkRoute></div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Login
