"use client"

import * as React from "react"
import { X, LogIn, Heart, CheckCircle, MessageSquare } from "lucide-react"
import { User } from "@/types"
import { Button } from "../ui/Button"
import { Badge } from "../ui/Badge"

interface UserDetailsModalProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

export function UserDetailsModal({ user, isOpen, onClose }: UserDetailsModalProps) {
  if (!isOpen || !user) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl border border-gray-100">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center pt-2">
          <div className="relative">
            <img 
              src={user.avatarUrl} 
              alt={user.name} 
              className="h-20 w-20 rounded-full border-4 border-primary-50 object-cover"
            />
          </div>
          
          <h2 className="mt-3 text-xl font-serif font-medium text-gray-900">{user.name}</h2>
          
          <div className="mt-2 flex items-center space-x-2 text-sm text-gray-500">
            <span>Joined {user.joiningDate}</span>
            <span>•</span>
            <span className="flex items-center">✉ {user.email}</span>
            <span>•</span>
            <span className="flex items-center">📞 {user.phone}</span>
          </div>

          <div className="absolute right-6 top-16">
             {user.subscription === 'Premium' && (
               <Badge variant="premium" className="rounded-full px-3 py-1 text-[10px]">Premium</Badge>
             )}
          </div>

          <div className="mt-8 w-full rounded-xl bg-primary-50 p-5">
            <h3 className="font-serif text-sm font-medium text-gray-700 mb-4">App Usage Summary</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
                <div className="mb-2 flex items-center text-primary">
                  <LogIn className="mr-2 h-4 w-4" />
                  <span className="text-xs font-medium text-gray-500">Last Login</span>
                </div>
                <p className="text-sm font-medium">Today, 10:45 AM</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
                <div className="mb-2 flex items-center text-primary">
                  <Heart className="mr-2 h-4 w-4" />
                  <span className="text-xs font-medium text-gray-500">Children</span>
                </div>
                <p className="text-sm font-medium">2</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
                <div className="mb-2 flex items-center text-primary">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  <span className="text-xs font-medium text-gray-500">Completed Exercises</span>
                </div>
                <p className="text-sm font-medium">24</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
                <div className="mb-2 flex items-center text-primary">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span className="text-xs font-medium text-gray-500">AI Questions Used</span>
                </div>
                <p className="text-sm font-medium">12 / 20</p>
              </div>
            </div>
          </div>

          <Button className="mt-6 w-full rounded-full py-6 text-base shadow-md hover:shadow-lg transition-shadow">
            Make A Notification
          </Button>
        </div>
      </div>
    </>
  )
}
