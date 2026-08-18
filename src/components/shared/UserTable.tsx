"use client"

import * as React from "react"
import { Eye, Ban } from "lucide-react"
import { User } from "@/types"
import { Badge } from "../ui/Badge"
import { Button } from "../ui/Button"
import { UserDetailsModal } from "./UserDetailsModal"

interface UserTableProps {
  users: User[];
}

export function UserTable({ users }: UserTableProps) {
  const [selectedUser, setSelectedUser] = React.useState<User | null>(null)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const handleViewUser = (user: User) => {
    setSelectedUser(user)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-primary-100/50 text-gray-500 font-medium">
              <th className="px-6 py-4 rounded-tl-xl whitespace-nowrap">
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" />
                  <span>Users</span>
                </div>
              </th>
              <th className="px-6 py-4 whitespace-nowrap">Gmail</th>
              <th className="px-6 py-4 whitespace-nowrap">Phone</th>
              <th className="px-6 py-4 whitespace-nowrap">Subscription</th>
              <th className="px-6 py-4 whitespace-nowrap">Role</th>
              <th className="px-6 py-4 whitespace-nowrap">Joining Date</th>
              <th className="px-6 py-4 whitespace-nowrap">Status</th>
              <th className="px-6 py-4 rounded-tr-xl whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 bg-white">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" />
                    <img className="h-8 w-8 rounded-full object-cover" src={user.avatarUrl} alt="" />
                    <div>
                      <div className="font-medium text-gray-900">{user.name}</div>
                      <div className="text-xs text-gray-400">{user.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{user.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={user.subscription === 'Premium' ? 'text-emerald-500 font-medium' : 'text-gray-600'}>
                    {user.subscription}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{user.joiningDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge 
                    variant={user.status === 'Active' ? 'success' : 'destructive'}
                    className="font-normal px-3 py-1 rounded-md"
                  >
                    {user.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-red-500">
                      <Ban className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-gray-400 hover:text-primary"
                      onClick={() => handleViewUser(user)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <UserDetailsModal 
        user={selectedUser} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
