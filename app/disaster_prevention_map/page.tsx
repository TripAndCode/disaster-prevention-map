import Map from "./map";
import { Suspense } from "react";

export default function DisasterPreventionMap() {
  return (
    <>
      <Suspense fallback={<div>A map is loading</div>}>
        {/* ↓サスペンドしなかったらこれが表示される */}
        <Map />
      </Suspense>
    </>
  );
}
