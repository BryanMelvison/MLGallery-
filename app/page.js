import Image from "next/image";
import Title from "../components/title";
import MainPage from "@/components/mainpage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Title/>
      <MainPage />
    </main>
  );
}
