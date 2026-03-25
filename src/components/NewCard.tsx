import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



interface CardProps {
  classname? : string
  heading: string
  subheading?: string // Subheading is optional
  description?: string // For the main content of the card
  xyz:React.ReactNode

}
function NewCard({classname, heading, subheading, description, xyz }: CardProps) {
  return (
    <Card className={classname}>
      <CardHeader>
        <CardTitle>{heading}</CardTitle>
        <CardTitle className="text-lg">{subheading}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
        {xyz}
    </Card>
  )
}

export default NewCard
