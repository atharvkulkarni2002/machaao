import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Search from "@/app/components/Search";
import Slides from "@/app/components/Slides";
import Cards from "@/app/components/Cards";

export default function Home() {
  return (
    <>
    <main>
      <Navbar/>
      <Search/>
      <Slides/>
      <Cards/>
    </main>
    </>
  );
}
