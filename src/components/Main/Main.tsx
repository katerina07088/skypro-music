import { Track } from "@/types/types"
import { CenterBlock } from "../CenterBlock/CenterBlock"
import { Nav } from "../Nav/Nav"
import { Sidebar } from "../Sidebar/Sidebar"
import styles from "./Main.module.css"
type props={
    setCurrentTrack: (track: Track) => void
}
export const Main = ({setCurrentTrack}: props)=>{
    return(
        <main className={styles.main}>
            <Nav />
            <CenterBlock setCurrentTrack = {setCurrentTrack}/>
            <Sidebar />
          </main>
    )
}