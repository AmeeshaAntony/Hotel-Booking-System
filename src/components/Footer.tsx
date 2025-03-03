const Footer=()=>{
    return(
        <div className="bg-blue-800 py-10">
            <div className="container mx-auto flex justify-between items-center px-4">
                <span className="text-3xl text-white font-bold tracking-tight">
                    BloomHolidays.com
                </span>
                <span className="text-white font-bold track flex gap-4">
                    <p className="cursor-pointer hover:underline">Privacy Policy</p>
                    <p className="cursor-pointer hover:underline">Terms of Service</p>
                </span>
            </div>
        </div>
    )
}

export default Footer;