import dynamic from "next/dynamic";

const Calc = dynamic(() => import("../../components/Calc/page"), {
  ssr: false,
});

export default function CalcPage() {
  return <Calc />;
}
