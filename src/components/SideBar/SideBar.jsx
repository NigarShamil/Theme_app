
import { useContext } from 'react';
import { ThemeContext } from '../../Context/Context';
import { ThemeOptions } from '../../../theme_options/colors';
import HomeIcon from '@mui/icons-material/Home';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import TopicIcon from '@mui/icons-material/Topic';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';



 
export default function Sidebar(){
 const {theme, handler}= useContext(ThemeContext)
//  const schema= ThemeOptions[theme]
const schema = ThemeOptions[theme] || ThemeOptions["light"];
 
    return(
       <div className="sidebar" style={{...schema.theme}}>
        <span className='list'><span><HomeIcon/></span>Dashboard </span>
        <span className='list'><span><GroupsIcon/></span> Team</span>
        <span className='list'><span><FolderCopyIcon/></span> Documents</span>
        <span className='list'><span><CalendarMonthIcon/></span> Calendar</span>
        <span className='list'><span><DonutSmallIcon/></span> Reports</span>

       </div>
    )
}