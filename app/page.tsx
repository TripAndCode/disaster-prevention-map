import Header from "@/components/header";
import Map from "@/components/map";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>A map is loading</div>}>
        {/* ↓サスペンドしなかったらこれが表示される */}
        <Map />
      </Suspense>
    </>
  );
}
