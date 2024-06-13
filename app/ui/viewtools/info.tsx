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
            <div className="mx-auto flex flex-col gap-6 1060:bg-white 1060:p-5 1060:rounded-3xl 1060:shadow-md">
                <span className="text-4xl font-bold">{title}</span>
                <span className="text">{information}</span>
            </div>
        </section>
    )
}