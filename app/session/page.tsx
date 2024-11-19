import { auth } from '@/auth'
import React from 'react'
import Heading from '../components/Heading';
import AuthTest from './authTest';

export default async function page() {
    const session = await auth();
    return (
    <div>
        <Heading title='Sesion dashboard'/>
        <div className='bg-blue-200 border-2 border-blue-500'>
            <h3 className='text-lg'>Session data</h3>
            <pre className='whitespace-pre-wrap break-all'>{JSON.stringify(session, null, 2)}</pre>
        </div>

        <div className='mt-4'>
            <AuthTest />
        </div>
    </div>
  )
}
