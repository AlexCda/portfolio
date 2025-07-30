const SecondHeader = () => {
    return (
        <>
            <div className="grid grid-cols-2 px-10 gap-4 items-center mt-7">
                <div className="flex justify-start">
                    <h3 className="text-xs sm:text-2xl md:text-2xl">
                        Portfolio
                    </h3>
                </div>
                <div className="flex justify-end">
                    <h3 className="text-base sm:text-lg whitespace-nowrap md:text-2xl lg:text-2xl">
                        Alexandre Teixeira
                    </h3>
                </div>
            </div>
            <hr className="border-1 mb-4 border-amber-500" />
        </>
    );
};

export default SecondHeader;
