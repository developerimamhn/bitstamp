import Image from "next/image";
import Header from "./component/Header";
import Body from "./component/Body";
import LenisProvider from "./LenisProvider";

export default function Home() {
  return (
    <>
      <LenisProvider>
      <Header />
      <Body />
    </LenisProvider>
    </>
  );
}
