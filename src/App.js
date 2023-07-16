import Card from "./components/Card"
import Header from "./components/Header"
import Sorting from "./components/Sorting"
import About from "./components/About"
import {useState, useEffect} from 'react'

import data from "./data.json"


function App() {
 
const [region , setRegion] = useState(null)
const [allData , setAllData] = useState([])
const [searchInput , setSearchInput] = useState('')
const [about , setAbout] = useState(false)
const [id , setId] = useState(0)
const [dark , setDark] = useState(true)
data.forEach((e,i)=> data[i].id=i)


useEffect(()=>{
	let newArray
	region != null ?newArray =  data.filter(x=> x.region==region)  : newArray = data;
	if(searchInput!='') newArray =  newArray.filter(x=> x.name.toLowerCase().includes( searchInput.toLowerCase() ))
	setAllData([...newArray])
},[region,searchInput])

useEffect(()=>{

if(dark){
			document.documentElement.style.setProperty("--Elements", "var(--DarkElements)");
			document.documentElement.style.setProperty("--Background", "var(--DarkBackground)");
			document.documentElement.style.setProperty("--Text", "var(--DarkText)");
}
	
else {		document.documentElement.style.setProperty("--Elements", "var(--LightElements)");
			document.documentElement.style.setProperty("--Background", "var(--LightBackground)");
			document.documentElement.style.setProperty("--Text", "var(--LightText)");}


},[dark])

  return (<>
<div className='top' style={{ paddingBottom:`${ about?"0px":"20px" }` }}>
<Header dark={dark} setDark={setDark}/>
{!about && <Sorting region={region} setRegion={setRegion} searchInput={searchInput} setSearchInput={setSearchInput}/>}
{!about && searchInput.length > 0 && region!=null && <h1 style={{color:'var(--Text)' , marginLeft:'48px' , marginTop:'20px' , fontSize:'20px'}}> {"Search in "+region } </h1>}
</div>
{!about ?<div className='cards' >
{ allData.map((e,i)=>{  return	<Card
	id={e.id}
	 setAbout={setAbout}  
	 key = {i}  
	 setId={setId}
	 />})   }

</div>:

<About setAbout={setAbout} ind={id} />
}

</>)}


export default App;
