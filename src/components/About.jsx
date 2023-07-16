import {BsArrowLeft as Arrow} from 'react-icons/bs'
import data from '../data.json'
import {useEffect , useState} from 'react'

const About=({setAbout , ind })=>{

const [languages , setLanguages] = useState()
const [currencies , setCurrencies] = useState()
const [borders , setBorders] = useState([])
const [id , setId] = useState(ind)

useEffect(()=>{
	if(data[id]){
	if(data[id].languages)	{
			let newLanguages =[...data[id].languages]
		newLanguages.forEach((e,i)=> newLanguages[i]=newLanguages[i].name)
		newLanguages = newLanguages.join(', ')
		setLanguages(newLanguages)}
	
	if(data[id].currencies)	{
		let newCurrencies =[...data[id].currencies]
	newCurrencies.forEach((e,i)=> newCurrencies[i]=newCurrencies[i].name)
	newCurrencies = newCurrencies.join(', ')
setCurrencies(newCurrencies)}
	
	if(data[id].borders)	{
		let newBorders = [...data[id].borders]
		let bordersNames=[]
	for(let i = 0 ; i< newBorders.length ; i++)
	{
		data.forEach(e=> { if(e.alpha3Code==newBorders[i])
			bordersNames.push( e.name )
	
		  })
	}
	
	
setBorders(bordersNames)}
}
},[id])

const borderClick=(n)=>{
	console.log(n)
setId(data.find(e=> e.name == n ).id)


}


	return( <>
			<button className='button shadow' style={{ marginTop:'100px' , alignItems:'center' , display:'inline-flex'}} onClick={()=> setAbout(false)}>
			<Arrow style={{marginRight:'10px'}}/>
			Back
			</button>
			<div className='aboutPage'>
			
			<img  src={ data[id].flags.png } className='aboutFlag shadow'/>
			<div className='allInfo'>	
			<h2 style = {{ fontSize:'25px' , marginBottom:'20px'}} >{ data[id].name }</h2>
			<div className='cols'>
			<div className='col1'>
			<p className='info'><b>Native Name:</b><span>{data[id].name}</span></p>
			<p className='info'><b>Population:</b><span>{data[id].population.toLocaleString('en-US')}</span></p>
			<p className='info'><b>Region:</b><span>{data[id].region}</span></p>
			<p className='info'><b>Sub Region:</b><span>{data[id].subregion}</span></p>
			<p className='info'><b>Capital:</b><span>{data[id].subregion}</span></p>
			</div>

			<div className='col2'>
			<p className='info'><b>Top Level Domain:</b><span>{data[id].topLevelDomain}</span></p>
			<p className='info'><b>Currencies:</b><span>{currencies}</span></p>
			<p className='info'><b>Languages:</b><span>{languages}</span></p>
			</div>
			</div>
{borders.length>0 &&
				<div className='borders info'>
				<b>Border Countries:</b>
				<div className='bordersCountries'>
					{borders.map(e=>{return (<button className='button shadow' onClick ={()=>{borderClick(e)}}>{e}</button>)})}

				</div>

				</div>}
					


			</div>
			</div>
	
	
		</>)
}

export default About