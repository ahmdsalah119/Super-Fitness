import { Outlet } from "react-router-dom";


export default function AuthLayout() {
  return (
    <main className="relative grid min-h-screen grid-cols-1 bg-[rgba(36,36,36,0.6)] backdrop-blur-[47px]  bg-cover bg-center md:grid-cols-2">
      {/*overlay*/}
      <div className="absolute inset-0 bg-[rgba(36,36,36,0.6)] backdrop-blur-[47px]" />

    
      <section className="z-10 flex flex-col items-center justify-center border-r-2 border-[#FF4100]/20">
       
        

       
        
      </section>

      {/*children*/}
      <section className="z-10 flex flex-col relative  items-center justify-center">
        <Outlet />
      </section>
    </main>
  );
}