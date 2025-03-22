import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { Component } from 'lucide-react';


export const Route = createRootRoute(
    {
        component: RootComponent
    }    
);

function RootComponent(){
    return(
        <>
            <div className='p-2 flex items-start gap-2 text-lg'>
                <Link to="/home" activeProps={{className: 'font-bold'}} activeOptions={{exact: true}}>Home</Link>
                <Link to="/boxes" activeProps={{className: 'font-bold'}} activeOptions={{exact: true}}>Boxes</Link>
                <Link to="/box" activeProps={{className: 'font-bold'}} activeOptions={{exact: true}}>Box</Link>
            </div>
            <hr/>
            <Outlet/>
        </>
    )
}