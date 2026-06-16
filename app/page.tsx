import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-editor-bg font-sans">

      <section className="w-full p-5">
        <Image src={"/editor_logo/dark_nobg.png"} alt={"Logo"} width={300} height={300}/>
      </section>
    
    </div>
  );
}
