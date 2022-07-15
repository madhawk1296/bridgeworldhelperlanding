import Image from "next/image"

export default function Landing() {
    const tweetLink = `https://twitter.com/intent/tweet?text=Can%E2%80%99t%20wait%20to%20use%20%40bridgeworldhelp%20tools%20to%20maximize%20profit%20in%20Bridgeworld%21%20https%3A%2F%2Fbridgeworldhelper.com`
    return (
        <div className="relative">
            <header className="fixed top-0 w-full h-[60px] px-[12px] flex flex-row justify-between shadow-md md:px-[20px] bg-white z-10">
                <div className="relative h-full flex flex-row gap-x-2 py-[19px] items-center">
                    <img className="inline-block h-full" src="images/Dragon.svg" />
                    <h1 className="inline-block font-sans font-extrabold text-xl text-[#101827] whitespace-nowrap ">Bridgeworld Helper</h1>
                </div>
                <div className="relative h-full flex flex-row gap-x-2 py-[20px] items-center">
                    <a className="h-full" target="_blank" rel="noopener noreferrer" href="https://twitter.com/bridgeworldhelp">
                        <img className="relative block h-full" src="images/twitter.png" />
                    </a>
                </div>
            </header>
            <main className="relative pt-[70px] px-[25px]">
                <img className="w-full px-[60px] md:max-w-[500px] m-auto" src="images/spreadsheets.svg" />
                <h1 className="relative font-sans font-bold text-[36px] text-gray-700 text-left pb-[20px] md:text-center z-0">Take your <span className="text-purple-500">$magic</span> <span className="text-[#DC2626]">Hoarding</span> to the Next Level.</h1>
                <h1 className="relative font-sans font-semibold text-xl text-gray-500 text-left pb-[45px] md:text-center z-0">Tools to help you calculate costs and maximize profit when playing <span className="text-purple-500">Bridgeworld</span>.</h1>
                <a href={tweetLink}>
                    <button className="relative h-[40px] w-fit py-[13px] px-[10px] text-white bg-[#1DA1F2] rounded-2xl flex flex-row gap-x-2 items-center m-auto">
                        <h1 className="whitespace-nowrap inline-block">Spread the Word</h1>
                        <img className="inline-block h-full" src="images/twitterWhite.png" />
                    </button>
                </a>
            </main>
        </div>
    )
}