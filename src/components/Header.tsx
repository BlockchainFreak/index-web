import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { IconArrowBigLeftLineFilled, IconArrowLeftTail, IconHome, IconLayoutSidebarLeftExpand, TablerIconsProps } from "@tabler/icons-react"
import { Button } from "@mantine/core"

// Logo: (Original Dimensions) 2149 x 1009

type HeaderProps = {
    routes: { label: string, path: string, Icon: (props: TablerIconsProps) => JSX.Element }[]
}

const SCALE_DOWN_RATIO = 20

export default function Header({ routes }: HeaderProps) {

    const router = useRouter()
    const currentPath = usePathname()
    const [open, setOpen] = useState(true)

    const Routes = routes.map(({ label, path, Icon }) => (
        <div key={path} onClick={(e) => {e.stopPropagation(); router.push(path)}}
            className={`z-10 flex justify-center items-center gap-4 h-12 font-mono font-extrabold pl-4 ${open ? "hover:bg-zinc-700 ml-1 rounded-r-lg" : "rounded-lg"}`}
        >
            <Icon />
            <span className={`overflow-hidden transition-all duration-300 ease-in-out delay-0 ${open ? "w-full" : "w-0"}`}>
                {label}
            </span>
        </div>
    ))

    const index = routes.findIndex(({ path }) => path === currentPath)

    const headStyles = open ? "w-64" : "w-16 cursor-pointer"

    return (
        <div className={"relative h-screen flex flex-col bg-zinc-900 transition-all duration-300 ease-in-out delay-0 " + headStyles} onClick={() => setOpen(true)}>
            <div className={`rounded-3xl transition-all duration-300 ease-in-out delay-0 ${open ? "p-4" : " grid place-items-center p-0 my-8"}`}>
                <Image
                    className={`transition-all duration-300 ease-in-out ${open ? "" : "-rotate-90"}`}
                    src="/logo.png"
                    alt="Index"
                    width={2149 / SCALE_DOWN_RATIO * (open ? 1 : 0.4)}
                    height={1009 / SCALE_DOWN_RATIO * (open ? 1 : 0.4)}
                />
            </div>
            <div className="flex flex-col mt-8 flex-grow relative">
                {Routes}
                <span style={{ top: 48 * index }} className={`absolute left-0 h-12 transition-all duration-300 ease-in-out delay-0 z-0 ${open ? "w-0.5 bg-teal-400" : "w-12 mx-2 rounded-md bg-emerald-700"}`} />
            </div>
            {open && <Button className="absolute right-4 bottom-4" onClick={(e) => {setOpen(false); e.stopPropagation()}}>
                <IconArrowBigLeftLineFilled/>
            </Button>}
            {!open && <div className="absolute right-4 bottom-4" onClick={(e) => {setOpen(true); e.stopPropagation()}}>
                <IconLayoutSidebarLeftExpand/>
            </div>

            }
        </div>
    )

}