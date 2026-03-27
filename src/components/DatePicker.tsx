"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"

function formatDate(date: Date | undefined) {
  if (!date) {
    return ""
  }

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

export function DatePicker({
  value,
  onChange,
}: {
  value: Date | undefined
  onChange: (date: Date) => void
}) {
  const [open, setOpen] = React.useState(false)

  const date = value
  const [month, setMonth] = React.useState(value)

  const displayValue = value ? formatDate(value) : ""

  return (
    <Field className="mx-auto w-md">
      <FieldLabel htmlFor="date-required">Invoice Date</FieldLabel>

      <InputGroup>
        <InputGroupInput
          value={displayValue}
          placeholder="June 01, 2025"
          onChange={(e) => {
            const newDate = new Date(e.target.value)
            if (!isNaN(newDate.getTime())) {
              onChange(newDate)
              setMonth(newDate)
            }
          }}
        />

        <InputGroupAddon align="inline-end">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <InputGroupButton variant="ghost" size="icon-xs">
                <CalendarIcon />
              </InputGroupButton>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={date}
                month={month}
                onMonthChange={setMonth}
                onSelect={(selectedDate) => {
                  if (selectedDate) {
                    onChange(selectedDate) // ✅ only pass Date
                    setOpen(false)
                  }
                }}
              />
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
