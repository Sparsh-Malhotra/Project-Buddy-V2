'use client'

import * as React from 'react'
import { X } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import { Command as CommandPrimitive } from 'cmdk'
import { SelectOption } from '@/constants'

interface IMultiSelect {
  options: SelectOption<string>[]
  placeholder: string
  onChange: (values: [string, ...string[]]) => void
  dir?: 'top' | 'bottom'
  className?: string
}

export default function MultiSelect({
  options,
  placeholder,
  onChange,
  dir = 'bottom',
  className,
}: IMultiSelect) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<SelectOption<string>[]>([])
  const [inputValue, setInputValue] = React.useState('')

  const handleUnselect = React.useCallback((option: SelectOption<string>) => {
    setSelected((prev) => prev.filter((s) => s.value !== option.value))
  }, [])

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current
      if (input) {
        if (e.key === 'Delete' || e.key === 'Backspace') {
          if (input.value === '') {
            setSelected((prev) => {
              const newSelected = [...prev]
              newSelected.pop()
              return newSelected
            })
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === 'Escape') {
          input.blur()
        }
      }
    },
    []
  )

  React.useEffect(() => {
    if (selected.length > 0) {
      const selectedArray = selected.map((ele) => ele.value) as [
        string,
        ...string[],
      ]
      onChange(selectedArray)
    }
  }, [selected])

  const selectables = options.filter((option) => !selected.includes(option))

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="overflow-visible bg-transparent"
    >
      <div
        className={`group border border-input px-3 py-2 text-sm ring-offset-background rounded-md focus-within:ring-1 focus-within:ring-ring ${className}`}
      >
        <div className="flex gap-1 flex-wrap">
          {selected.map((option) => {
            return (
              <Badge key={option.value}>
                {option.label}
                <button
                  className="ml-1 ring-offset-background rounded-full outline-none focus:ring-1 focus:ring-ring"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleUnselect(option)
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  onClick={() => handleUnselect(option)}
                >
                  <X className="h-3 w-3 text-white font-bold hover:text-foreground" />
                </button>
              </Badge>
            )
          })}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            className="ml-2 bg-transparent outline-none placeholder:text-secondary flex-1"
          />
        </div>
      </div>
      <div className="relative">
        {open && selectables.length > 0 ? (
          <div
            className={`absolute w-full z-10 ${
              dir === 'top' ? 'bottom-10' : 'top-0'
            } rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in overflow-y-auto max-h-[200px]`}
          >
            <CommandGroup className="h-full overflow-auto">
              {selectables.map((option) => {
                return (
                  <CommandItem
                    key={option.value}
                    onMouseDown={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                    onSelect={() => {
                      setInputValue('')
                      setSelected((prev) => [...prev, option])
                    }}
                    className={'cursor-pointer'}
                  >
                    {option.label}
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </div>
        ) : null}
      </div>
    </Command>
  )
}
