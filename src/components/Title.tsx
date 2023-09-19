interface Props{
    title: string
}
export default function Title({title}: Props){
    return(
        <h2 className="text-2xl font-semibold">{title}</h2>
    )
}