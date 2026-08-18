import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./Button"
import { cn } from "@/lib/utils"

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  return (
    <div className={cn("flex items-center justify-center space-x-2 py-4", className)}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="rounded-full bg-primary-50 text-primary hover:bg-primary-100"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      {Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "secondary" : "ghost"}
          size="icon"
          onClick={() => onPageChange(page)}
          className={cn(
            "rounded-full w-8 h-8",
            currentPage === page ? "bg-primary-50 text-primary" : "text-gray-500 hover:text-gray-900"
          )}
        >
          {page}
        </Button>
      ))}

      {totalPages > 3 && <span className="text-gray-500">...</span>}
      
      {totalPages > 3 && Array.from({ length: 3 }, (_, i) => totalPages - 2 + i).map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "secondary" : "ghost"}
          size="icon"
          onClick={() => onPageChange(page)}
          className={cn(
            "rounded-full w-8 h-8",
            currentPage === page ? "bg-primary-50 text-primary" : "text-gray-500 hover:text-gray-900"
          )}
        >
          {page}
        </Button>
      ))}

      <Button
        variant="ghost"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="rounded-full bg-primary-50 text-primary hover:bg-primary-100"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
