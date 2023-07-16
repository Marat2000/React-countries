const Regions=({setRegionsOpen, setRegion})=>{
	let arr = ['All','Africa' , 'Americas' , 'Asia', 'Europe', 'Oceania']
const regionSelect =(e)=>{
	e!='All' ? setRegion(e): setRegion(null)
	setRegionsOpen(false)
}


	return (<>
	<div style={{ width:'180px' , zIndex:'100' , backgroundColor:'var(--Elements)' , borderRadius:'6px', marginTop:'6px', padding:'10px', fontFamily:'inerit' , boxSizing:'border-box', position:'absolute' , boxShadow:'rgba(0,0,0,0.3) 0px 3px 30px 2px'}}>
	{arr.map((e)=> {return( <p key={e} onClick={()=>regionSelect(e)} style={{marginTop:'8px' , cursor:'pointer'}}>{e}</p> )})}
		
	</div>
	<div onClick={()=>setRegionsOpen(false)} style={{top:'0', left:'0',zIndex:'95', backgroundColor:'blue' , opacity:'0', position:'fixed' , width:'100vw' , height:'100vh' }}></div>
	</>
	)
	}

export default Regions
