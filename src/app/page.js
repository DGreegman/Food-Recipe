import Link from "next/link";


export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className=" justify-center items-center">Welcome to Home Recipes</h1>
      <Link href={'/recipe-list'}>Explore Recipes</Link>
    </div>
  );
}
