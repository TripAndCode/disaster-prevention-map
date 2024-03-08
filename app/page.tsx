import { Suspense } from "react";
import Map from "@/components/map";

export default function Home() {
  return (
    <Suspense fallback={<div>A map is loading</div>}>
      {/* ↓サスペンドしなかったらこれが表示される */}
      <Map />
    </Suspense>
  );
}
