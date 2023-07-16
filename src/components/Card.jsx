import data from "../data.json"

const Card=({ setAbout ,id, setId})=>{
let infoName = ['population' , 'region' , 'capital']
	
return(<div className='card shadow'  onClick = {()=>{setId(id); setAbout(true)}}>
<div style={{width:'300px' , height:'175px' , backgroundImage: `url(${data[id].flags.png  })`, backgroundSize:'100% 100%' , borderRadius:'6px 6px 0 0' }} ></div>
<div className='infoText'>
<p className='name'>{data[id].name}</p>
{ infoName.map((e,i)=>{return( <p key={e} className='info'><b>{e+':'}</b><span>{ i==0? data[id][e].toLocaleString('en-US') :data[id][e] }</span> </p> )})  }
	</div>
	</div>
	)


}

export default Card

