import {BsSearch, BsXLg} from 'react-icons/bs'
import {MdKeyboardArrowUp as Arrow} from 'react-icons/md'
import {useRef, useState} from 'react'
import Regions from './Regions'
const Sorting=({region , setRegion , searchInput , setSearchInput})=>{

const inputRef = useRef(null)
const [regionsOpen , setRegionsOpen] = useState(false)

	return <div className='sorting'>
<div className='sortElement sortSearch shadow' onClick={()=>inputRef.current.focus()}>
	<BsSearch/>
	<input ref={inputRef} value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} placeholder ='Search for a country...'/>
	{searchInput.length>0 && <BsXLg onClick={()=>setSearchInput('')}/>}
</div>

<div style={{width:'180px'}}>
<div className='sortElement sortRegion shadow' onClick={()=>setRegionsOpen(!regionsOpen)}>
	<p>{ region==null ?"Filter by Region": region}</p>
	<Arrow style={{rotate:`${regionsOpen?0:180}deg` , transition:'.2s'}}/>
	
</div>

<div >
{ regionsOpen && <Regions setRegionsOpen={setRegionsOpen} setRegion={setRegion}/>}
</div>

</div>
</div>

}
export default Sorting