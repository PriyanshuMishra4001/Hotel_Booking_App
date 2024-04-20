const Footer = ()=>{
    return <div className="bg-blue-800 py-10 px-5">
        <div className="conatiner mx-auto flex justify-between items-center">
            <span className="text-3xl text-white font-bold tracking-tight">
                MernHolidays.com
            </span>
            <span className="text-white font-bold tracking-tight flex gap-4">
                <p className="cursor-poiner">
                    Privacy Policy
                </p>
                <p className="cursor-pointer">
                    Terms of Service
                </p>
            </span>
        </div>
    </div>
}

export default Footer;