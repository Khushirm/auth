import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-sky-500">
      <div className=" text-center space-y-6">
        <h1 className="text-6xl font-semibold drop-shadow-md text-white">
          🔐AUTH
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButton>
            <Link href="/auth/login">
          <Button variant="secondary" size="lg">
            Sign In
          </Button>
          </Link>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
