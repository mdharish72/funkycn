"use client";

import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import Link from "next/link"

export default function ThreeDCardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold">3D Card</h1>
        <p className="text-muted-foreground mt-2">
          A card that rotates in 3D when you hover over it.
        </p>
      </div>
      <div className="rounded-xl border bg-card text-card-foreground shadow p-10 flex justify-center items-center">
        <CardContainer className="inter-var">
          <CardBody className="bg-card relative group/card border-2 border-border comic-shadow-4 w-auto sm:w-[30rem] h-auto rounded-xl p-6">
            <CardItem
              translateZ="50"
              className="text-xl font-bold font-display text-foreground"
            >
              3D Funky Card
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-muted-foreground text-sm max-w-sm mt-2 font-body"
            >
              Hover over this card to see the funky 3D effect in action.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
               <div className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl bg-teal-400" />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="#"
                className="px-4 py-2 rounded-xl text-xs font-normal text-foreground hover:underline"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-xl comic-border-2 font-bold text-xs"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  )
}

