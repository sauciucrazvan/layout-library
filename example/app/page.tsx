import Column from "@/components/layout-library/Column";
import { Grid } from "@/components/layout-library/Grid";
import Row from "@/components/layout-library/Row";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-neutral-800 text-white">
        <Row gap={1} justify="space-between" wrap={true} className="px-12 py-6">
          <Link href="/" className="text-lg font-bold">
            example.com
          </Link>
          <Row gap={4}>
            <Link href="#">login</Link>
            <Link href="#">register</Link>
          </Row>
        </Row>
      </header>

      <div className="flex flex-1 gap-0 text-white">
        <aside className="bg-neutral-800 w-1/6">
          <Column className="px-12 py-6 h-full">
            <Link href="#" className="italic">
              about
            </Link>
            <Link href="#" className="italic">
              blog
            </Link>
            <Link href="#" className="italic">
              updates
            </Link>
            <Link href="#" className="italic">
              contact
            </Link>
          </Column>
        </aside>

        <main className="bg-neutral-700 p-4 flex-1">
          <Grid>
            {["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"].map((card) => (
              <div key={card} className="p-4 bg-neutral-600 rounded-md">
                <h1 className="text-lg font-bold">{card}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque error, quasi fugiat excepturi earum esse cupiditate,
                  repudiandae suscipit ea, reiciendis ipsam officiis dolores
                  iste? Fuga distinctio repudiandae ipsum magnam! Reprehenderit?
                </p>
              </div>
            ))}
          </Grid>
        </main>
      </div>

      <footer className="p-4 bg-neutral-800 text-white">
        <Row justify="space-between">
          <Link href="/">&copy; example.com</Link>
          <Link href="#">donate</Link>
        </Row>
      </footer>
    </div>
  );
}
