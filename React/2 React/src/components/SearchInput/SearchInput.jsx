import SuperButton from "../SuperButton/SuperButton";

export function SearchInput({labelName, placeholder}){
  return(
    <div>
      <label htmlFor="search">{labelName}</label>
      <input type="text" id="search" placeholder={placeholder} />
      <SuperButton title='Search' bg='green' color='black'/>
    </div>
  )
}