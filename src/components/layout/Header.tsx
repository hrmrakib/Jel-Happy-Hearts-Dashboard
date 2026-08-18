import * as React from "react"
import { NotificationsDropdown } from "../shared/NotificationsDropdown"

interface HeaderProps {
  title: string;
  description?: string;
}

export function Header({ title, description }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4 shadow-sm rounded-2xl mx-6 mt-6 mb-4">
      <div>
        <h1 className="text-xl font-serif text-gray-900">{title}</h1>
        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium text-gray-700">Aiden Max</span>
          <img
            className="h-9 w-9 rounded-full object-cover border border-gray-200"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704c"
            alt="User avatar"
          />
        </div>
        <NotificationsDropdown />
      </div>
    </header>
  )
}
