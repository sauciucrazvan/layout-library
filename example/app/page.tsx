import Column from "@/components/layout-library/Column";
import Row from "@/components/layout-library/Row";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-neutral-800 text-white">
        <Row
          gap={1}
          justify={"space-between"}
          wrap={true}
          className="px-12 py-6"
        >
          <Link href="/" className="text-lg font-bold">
            example.com
          </Link>
          <Row gap={4}>
            <Link href="#">login</Link>
            <Link href="#">register</Link>
          </Row>
        </Row>
      </header>

      <Row className="text-white" gap={0}>
        <aside className="bg-neutral-800 w-1/6">
          <Column className="px-12 py-6">
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

        <main className="bg-neutral-700 px-2 py-2 flex-1">Content</main>
      </Row>
    </>
  );
}
