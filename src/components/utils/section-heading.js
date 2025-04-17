const SectionHeading = ({ heading='heading' }) => {
    return <div className={"my-5 md:my-10 flex items-center justify-center flex-col"}>
        <h2 className="uppercase dark:text-white w-fit scale-[0.25] sm:scale-[0.35] md:scale-[0.50] lg:scale-[0.80] 2xl:scale-[1] text-7xl duration-700 text-center border2 relative 
        
        
        before:content-[''] before:bg-black dark:before:bg-white before:w-24 before:h-[1px] before:absolute  before:-translate-x-[150%]  before:translate-y-8
        
        
        
        after:content-[''] after:bg-black dark:after:bg-white after:w-24 after:h-[1px] after:absolute 1 after:translate-x-[50%] 1 after:translate-y-8">{heading}</h2>
    </div>
}

export default SectionHeading