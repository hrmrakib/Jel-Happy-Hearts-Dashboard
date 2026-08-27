"use client"

import * as React from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import { StarterKit } from "@tiptap/starter-kit"
import { Underline } from "@tiptap/extension-underline"
import { TextAlign } from "@tiptap/extension-text-align"
import { TextStyle } from "@tiptap/extension-text-style"
import { Color } from "@tiptap/extension-color"
import { Link } from "@tiptap/extension-link"
import { FontFamily } from "@tiptap/extension-font-family"
import {
  Bold,
  Italic,
  UnderlineIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Link2,
  Undo,
  Redo,
} from "lucide-react"

interface TiptapEditorProps {
  content?: string
  onChange?: (html: string) => void
  placeholder?: string
}

const FONT_FAMILIES = [
  { label: "Default", value: "" },
  { label: "Inter", value: "Inter, sans-serif" },
  { label: "Serif", value: "Georgia, serif" },
  { label: "Mono", value: "monospace" },
]

const FONT_SIZES = ["12px", "14px", "16px", "18px", "20px", "24px", "28px", "32px"]

function ToolbarButton({
  onClick,
  active,
  title,
  children,
}: {
  onClick: () => void
  active?: boolean
  title?: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`p-1.5 rounded transition-colors ${
        active
          ? "bg-white/20 text-white"
          : "text-white/70 hover:text-white hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  )
}

export function TiptapEditor({ content = "", onChange, placeholder }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      FontFamily,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Link.configure({ openOnClick: false }),
    ],
    content,
    onUpdate({ editor }) {
      onChange?.(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class:
          "outline-none min-h-[200px] text-gray-700 text-[15px] leading-relaxed prose prose-sm max-w-none",
      },
    },
  })

  if (!editor) return null

  const setLink = () => {
    const url = window.prompt("Enter URL:")
    if (url) editor.chain().focus().setLink({ href: url }).run()
  }

  return (
    <div className="flex flex-col flex-1">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 mb-3 pb-3 border-b border-white/20">
        {/* Font Family */}
        <select
          className="bg-white/10 text-white text-xs px-2 py-1 rounded-md outline-none cursor-pointer border border-white/20"
          onChange={(e) =>
            e.target.value
              ? editor.chain().focus().setFontFamily(e.target.value).run()
              : editor.chain().focus().unsetFontFamily().run()
          }
        >
          {FONT_FAMILIES.map((f) => (
            <option key={f.value} value={f.value} className="text-gray-800">
              {f.label}
            </option>
          ))}
        </select>

        {/* Font Size */}
        <select
          className="bg-white/10 text-white text-xs px-2 py-1 rounded-md outline-none cursor-pointer border border-white/20"
          onChange={(e) =>
            editor.chain().focus().setMark("textStyle", { fontSize: e.target.value }).run()
          }
        >
          {FONT_SIZES.map((s) => (
            <option key={s} value={s} className="text-gray-800">
              {s}
            </option>
          ))}
        </select>

        <div className="w-px h-5 bg-white/20 mx-1" />

        {/* Undo / Redo */}
        <ToolbarButton title="Undo" onClick={() => editor.chain().focus().undo().run()}>
          <Undo className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton title="Redo" onClick={() => editor.chain().focus().redo().run()}>
          <Redo className="h-4 w-4" />
        </ToolbarButton>

        <div className="w-px h-5 bg-white/20 mx-1" />

        {/* Bold / Italic / Underline */}
        <ToolbarButton
          title="Bold"
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          title="Italic"
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          title="Underline"
          active={editor.isActive("underline")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <UnderlineIcon className="h-4 w-4" />
        </ToolbarButton>

        <div className="w-px h-5 bg-white/20 mx-1" />

        {/* Alignment */}
        <ToolbarButton
          title="Align Left"
          active={editor.isActive({ textAlign: "left" })}
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <AlignLeft className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          title="Align Center"
          active={editor.isActive({ textAlign: "center" })}
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <AlignCenter className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          title="Align Right"
          active={editor.isActive({ textAlign: "right" })}
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <AlignRight className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          title="Justify"
          active={editor.isActive({ textAlign: "justify" })}
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        >
          <AlignJustify className="h-4 w-4" />
        </ToolbarButton>

        <div className="w-px h-5 bg-white/20 mx-1" />

        {/* Lists */}
        <ToolbarButton
          title="Bullet List"
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          title="Ordered List"
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered className="h-4 w-4" />
        </ToolbarButton>

        <div className="w-px h-5 bg-white/20 mx-1" />

        {/* Link */}
        <ToolbarButton
          title="Insert Link"
          active={editor.isActive("link")}
          onClick={setLink}
        >
          <Link2 className="h-4 w-4" />
        </ToolbarButton>

        {/* Text Color */}
        <label title="Text Color" className="cursor-pointer p-1.5 rounded hover:bg-white/10 transition-colors">
          <span className="text-white/70 text-xs font-medium">A</span>
          <input
            type="color"
            className="sr-only"
            onInput={(e) =>
              editor.chain().focus().setColor((e.target as HTMLInputElement).value).run()
            }
          />
        </label>
      </div>

      {/* Editor Content */}
      <div className="flex-1 bg-white rounded-xl p-4 overflow-y-auto min-h-[220px]">
        <EditorContent editor={editor} />
        {editor.isEmpty && placeholder && (
          <p className="pointer-events-none absolute text-gray-400 text-sm">{placeholder}</p>
        )}
      </div>
    </div>
  )
}
