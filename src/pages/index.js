import { Geist, Geist_Mono } from "next/font/google";
import MarsForm from "@/components/MarsForm";
import dynamic from "next/dynamic";
import StarsBackground from "@/components/starBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const MarsModel = dynamic(() => import('../components/MarsModel'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
    <StarsBackground/>
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Mars Visit Application Form</h1>
        <MarsForm />
      </div>
      <div style={{ flex: 1 }}>
        <MarsModel />
      </div>
    </div>
    </>
  );
}
