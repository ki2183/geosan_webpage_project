type info_type = {
    title:string,
    id_name:string,
    information:string

}

export default function Info({
    title,id_name,information
}:info_type){
    return (
        <section id={id_name} className="w-full">
            <div className="box-border mx-auto flex flex-col gap-6 ">
                <span className="text-4xl font-bold">{title}</span>
                <span className="text text-gray-600">{information}</span>
            </div>
        </section>
    )
}