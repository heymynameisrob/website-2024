import { Section } from "@/components/layout";
import Three from "@/components/three";
import { Separator } from "@/components/ui/separator";


export default function Home() {
  
  return (  
    <>
      {/* <div className="absolute top-0 left-0 w-full h-[90vh] overflow-hidden z-[-1] pointer-events-none linear-mask">
        <Three />        
      </div> */}
      <Section>
        <h1 className="animate-fade-up font-work font-medium text-2xl lg:text-4xl xl:text-5xl tracking-tight xl:leading-tight ">Hey, my name is Rob 👋</h1>
        <h1 className="animate-fade-up animate-delay-300 font-work font-medium text-2xl lg:text-4xl xl:text-5xl tracking-tight xl:leading-tight">I design and build products, mainly for startups. Currently I lead design for Lantum, a healthcare startup working with the NHS.</h1>      
      </Section>      
      <Separator />
      <Section>
        <h2 className="font-syne font-bold text-xl lg:text-3xl xl:text-4xl tracking-tight xl:leading-tight">Showcase</h2>        
      </Section>
      <Separator />
      <Section>
        <h2 className="font-syne font-bold text-xl lg:text-3xl xl:text-4xl tracking-tight xl:leading-tight">Posts</h2>        
      </Section>
    </>
  )
}

