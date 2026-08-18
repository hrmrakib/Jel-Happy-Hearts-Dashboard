"use client"

import * as React from "react"
import { Bell, Trash2 } from "lucide-react"
import { mockNotifications } from "@/lib/mock-data"
import { Button } from "../ui/Button"
import { cn } from "@/lib/utils"

export function NotificationsDropdown() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [notifications, setNotifications] = React.useState(mockNotifications)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const deleteNotification = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setNotifications(notifications.filter(n => n.id !== id))
  }

  const clearAll = () => setNotifications([])

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="icon" 
        className="relative rounded-full bg-primary-50 text-gray-600 hover:bg-primary-100"
        onClick={toggleDropdown}
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
            {unreadCount}
          </span>
        )}
      </Button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="absolute right-0 top-full mt-2 w-80 z-50 rounded-xl bg-primary text-primary-foreground shadow-lg overflow-hidden border border-primary/20">
            <div className="flex items-center justify-between px-4 py-3 bg-primary/95">
              <h3 className="font-semibold">Notification</h3>
              <button 
                onClick={clearAll}
                className="text-xs text-primary-foreground/80 hover:text-white font-medium"
              >
                Refresh
              </button>
            </div>
            
            <div className="max-h-96 overflow-y-auto">
              {notifications.length > 0 ? (
                <div className="divide-y divide-white/10">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className="group relative flex items-start px-4 py-3 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex-1 pr-6">
                        <p className="text-sm font-medium leading-snug">
                          {notification.title}
                        </p>
                        <p className="text-xs text-primary-foreground/70 mt-1 flex items-center">
                          <span className="inline-block w-3 h-3 rounded-full border border-primary-foreground/30 mr-1 flex items-center justify-center">
                            <span className="w-1 h-1 rounded-full bg-primary-foreground/50"></span>
                          </span>
                          {notification.time}
                        </p>
                      </div>
                      <button 
                        onClick={(e) => deleteNotification(notification.id, e)}
                        className="absolute right-4 top-4 text-primary-foreground/50 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Delete notification"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-8 text-center text-primary-foreground/70">
                  No new notifications
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
