import Row from "@/components/layout-library/Row";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-gray-300">
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
            <Link href="#">about</Link>
            <Link href="#">contact</Link>
          </Row>
        </Row>
      </header>
    </>
  );
}
