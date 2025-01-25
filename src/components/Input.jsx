function Input(props){
    return(
        <input placeholder={props.children} className="border border-slate-400 outline-slate-400 py-2 px-4 w-full rounded-md"
            onChange={props.onChange} value={props.value}
        />
    )
}

export default Input;