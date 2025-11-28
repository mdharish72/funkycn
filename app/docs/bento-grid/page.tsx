import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"

export default function BentoGridPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold">Bento Grid</h1>
        <p className="text-muted-foreground mt-2">
          A grid of items that can be used to display features, products, or anything else.
        </p>
      </div>
      <div className="rounded-xl border bg-card text-card-foreground shadow">
        <div className="p-6 pt-0">
          <BentoGrid className="max-w-4xl mx-auto mt-10">
            <BentoGridItem
              title="Savage Roast"
              description="A roast so hot it burns."
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-teal-400 to-teal-600" />}
              className="md:col-span-2"
            />
            <BentoGridItem
              title="Mild Roast"
              description="Just a little tease."
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-400 to-orange-600" />}
              className="md:col-span-1"
            />
            <BentoGridItem
              title="Spicy Roast"
              description="For those who can handle the heat."
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-red-400 to-red-600" />}
              className="md:col-span-1"
            />
            <BentoGridItem
              title="Dark Roast"
              description="The darkest of roasts."
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-400 to-purple-600" />}
              className="md:col-span-2"
            />
          </BentoGrid>
        </div>
      </div>
    </div>
  )
}

