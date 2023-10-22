import Avatar from "@/components/avatar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return(    
    <div className="flex flex-col items-start justify-start h-screen p-8 md:p-12">
      <div className="flex flex-col items-start justify-start mb-auto">
        <Avatar />
        <div className="space-y-1 mt-4">
          <p className="md:text-lg">Hey, my name is Rob 👋</p>
          <p className="md:text-lg">Currently, I'm leading design at <a className="underline bg-transparent hover:bg-white hover:dark:bg-[#1A1A1A] p-1" href="https://lantum.com">Lantum</a> on a mission to save the NHS £3bn</p>
          <p className="text-slate-700 dark:text-slate-400 md:text-lg">Livin' it up in Nottingham, United Kingdom</p>
        </div>   
      </div>  
      <div className="flex flex-col items-start justify-start w-full space-y-8 md:space-y-12">
        <Separator />
        <ul className="flex space-x-4">
          <li className="text-lg">✉️ <a className="underline bg-transparent hover:bg-white hover:dark:bg-[#1A1A1A] p-1" href="mailto:robhough@hey.com">Email</a></li>
          <li className="text-lg">🧑‍💻 <a className="underline bg-transparent hover:bg-white hover:dark:bg-[#1A1A1A] p-1" href="https://github.com/heymynameisrob">Github</a></li>
          <li className="text-lg">📸 <a className="underline bg-transparent hover:bg-white hover:dark:bg-[#1A1A1A] p-1" href="https://instagram.com/heymynameisrob0">Instagram</a></li>        
        </ul>
      </div>   
    </div>
  )
}