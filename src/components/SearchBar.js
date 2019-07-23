import React,{useState} from 'react';

const SearchBar = props => {

	const [term, setTerm] = useState('');

	const onInputChange = event => {
		setTerm(event.target.value)
	}

	const onFormSubmit = event => {
		event.preventDefault();
		props.onFormSumbit(term);

	}

	return(
		<nav className="navbar">
			<div className="container-fluid">
			 <div className="navbar-header">
			   <a className="navbar-brand" href="/"><img className="logo"src="https://www.itsnicethat.com/system/files/082017/59a68a737fa44c9e4d005b79/index_default/youtube_logo_redesign_graphic_design_digital_itsnicethat4.gif?1504087327" alt="img"/></a>
			 </div>
			 <form className="navbar-form navbar-left" onSubmit={onFormSubmit} >
			   <div className="input-group">
			     <input 
			     		type="text" 
			     		className="form-control" 
			     		placeholder="Search" 
			     		name="search"
			     		value={term} 
						onChange={onInputChange}
			     	/>
			     <div className="input-group-btn">
			       <button className="btn btn-default" type="submit">
			         <i className="glyphicon glyphicon-search"></i>
			       </button>
			     </div>
			   </div>
			 </form>
			</div>
			</nav>
	);
}
export default SearchBar;