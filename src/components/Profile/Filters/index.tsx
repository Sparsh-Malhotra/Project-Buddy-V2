'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Label } from '@/components/ui/label'
import { SelectOption } from '@/constants'
import { RegularText } from '@/core/Typography'
import { useDisclosure } from '@/hooks'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface IFilters {
  filterTitle: string
  filterOptions: SelectOption<string>[]
  defaultOpen?: boolean
}

const Filters = ({
  filterTitle,
  filterOptions,
  defaultOpen = false,
}: IFilters) => {
  const { isOpen, onClose, onOpen } = useDisclosure({
    defaultIsOpen: defaultOpen,
  })

  const handleStateChange = (open: boolean) => {
    if (open) onOpen()
    else onClose()
  }

  return (
    <Collapsible open={isOpen} onOpenChange={handleStateChange}>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 px-1">
          <RegularText className="text-base">{filterTitle}</RegularText>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
          <span className="sr-only">Toggle</span>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="CollapsibleContent ml-2">
        {filterOptions.map(({ label, value }, index) => (
          <div className="flex items-center my-4 gap-2" key={index}>
            <Checkbox id={value} />
            <Label className="m-0 text-[#515B6F] text-sm" htmlFor={value}>
              {label}
            </Label>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}

export default Filters
