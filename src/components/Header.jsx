import {BsMoon, BsMoonFill}  from 'react-icons/bs'

const Header=({dark , setDark})=>{
	return(<header className='shadow'>
		<p>Where in the world?</p>
		<div style={{cursor:'pointer'}} onClick={()=> setDark(!dark)}>{ dark ?<BsMoon/> : <BsMoonFill/>} <p>{dark ?"Dark ":"Light "}Mode</p></div>

		</header>)
}
export default Header