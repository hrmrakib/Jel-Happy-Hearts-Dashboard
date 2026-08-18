"use client"

import * as React from "react"
import { Header } from "@/components/layout/Header"
import { Trash2, CornerUpRight, Download } from "lucide-react"

const supportTickets = [
  {
    id: 1,
    name: "Mr. John",
    email: "bulbulxyz@gmail.com",
    avatar: "https://i.pravatar.cc/150?u=1",
    time: "2024-03-09 - 10:30 AM",
    title: "The Title",
    message: "Dear users, the platform will undergo scheduled maintenance tonight from 2:00 AM to 3:00 AM. During this time, some features may be temporarily unavailable.",
    attachment: "xyz.pdf"
  },
  {
    id: 2,
    name: "Mr. John",
    email: "bulbulxyz@gmail.com",
    avatar: "https://i.pravatar.cc/150?u=2",
    time: "2024-03-09 - 10:30 AM",
    title: "The Title",
    message: "Dear users, the platform will undergo scheduled maintenance tonight from 2:00 AM to 3:00 AM. During this time, some features may be temporarily unavailable.",
    attachment: "xyz.pdf"
  },
  {
    id: 3,
    name: "Mr. John",
    email: "bulbulxyz@gmail.com",
    avatar: "https://i.pravatar.cc/150?u=3",
    time: "2024-03-09 - 10:30 AM",
    title: "The Title",
    message: "Dear users, the platform will undergo scheduled maintenance tonight from 2:00 AM to 3:00 AM. During this time, some features may be temporarily unavailable.",
    attachment: "xyz.pdf"
  }
]

export default function SupportPage() {
  return (
    <div className="container mx-auto flex flex-col min-h-full pb-8">
      <Header title="Support" />
      
      <main className="flex-1 mt-2 px-6">
        <div className="bg-white rounded-3xl p-8 min-h-[600px] shadow-sm flex flex-col gap-6">
          
          {supportTickets.map((ticket) => (
            <div key={ticket.id} className="bg-[#FDF6F3] rounded-[32px] p-6 relative group border border-transparent hover:border-gray-200 transition-colors">
              {/* Actions */}
              <div className="absolute right-6 top-6 flex items-center gap-4">
                <span className="text-sm text-gray-500 font-medium">{ticket.email}</span>
                <button className="text-gray-400 hover:text-gray-700 transition-colors">
                  <CornerUpRight className="h-5 w-5" />
                </button>
                <button className="text-red-400 hover:text-red-600 transition-colors">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-3 mb-2">
                <img 
                  src={ticket.avatar} 
                  alt={ticket.name} 
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h3 className="bg-[#C4602C] text-white text-xs font-medium px-4 py-1.5 rounded-full inline-block mb-1">
                    {ticket.name}
                  </h3>
                  <div className="text-gray-500 text-xs flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full border border-gray-400 flex items-center justify-center">
                      <div className="w-1 h-1 bg-gray-400 rounded-full" />
                    </div>
                    {ticket.time}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pl-[52px]">
                <h4 className="text-lg font-medium text-gray-900 mb-1">{ticket.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed max-w-4xl mb-4">
                  {ticket.message}
                </p>

                {/* Attachment */}
                <button className="flex flex-col items-center justify-center bg-white rounded-2xl w-24 py-3 gap-2 border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all group/btn">
                  <Download className="h-5 w-5 text-gray-400 group-hover/btn:text-gray-600" />
                  <span className="text-xs font-medium text-gray-500">{ticket.attachment}</span>
                </button>
              </div>
            </div>
          ))}

        </div>
      </main>
    </div>
  )
}
