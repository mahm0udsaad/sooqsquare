
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"

export default function Component({content}) {
  return (
    <section className="flex flex-col items-center p-10">
      <Card className="w-64 mb-8">
          <Link href="#">
            <CardContent className="p-4">
            <h2 className="font-bold text-lg mb-2">{content}</h2>
            </CardContent>
          </Link>
      </Card>
    </section>
  )
}

