import React from "react";

import TopNav from "../components/Top-nav/TopNav";
import Sidebar from "../components/sidebar/Sidebar"

function DefaultLayout ({children}){
    return (

        <div className="flex flex-row min-h-screen">
            <Sidebar/>

        <div className="flex flex-col min-h-screen">
            <TopNav />
            <div className="bg-gray-100">
                
                <div className="p-6">{children}</div>

                </div>
            </div>
        </div>
    );
}

export  default DefaultLayout;