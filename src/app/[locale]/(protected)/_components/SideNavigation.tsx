'use client'

import { Home, User, MessageCircle } from "lucide-react";
import { SideNavButton } from "@/app/[locale]/(protected)/_components/SideNavButton"


export function SideNavigation(){
    
    return (
        <nav className="border-r border-accent">
          <ul className="flex flex-col gap-2 h-full text-lg">
          <li>
        <SideNavButton icon={Home} label="home" href="/users"/>
           </li>
           <li>
        <SideNavButton icon={User} label="user" href="/users/profile"/>
          </li>
          <li>
        <SideNavButton icon={MessageCircle} label="messages" href="/users/messages"/>
          </li>
            
  
            <li className="mt-auto">
              <div>


            <p>Sign Out Button</p>
              </div>
            </li>
          </ul>
        </nav>
      );
    }
    