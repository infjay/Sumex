import {logo} from "../assets"


const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
              <a href="https://infjay.github.io/Sumex/"><img src={logo} alt="logo" className="w-28 object-contain" /></a>  
                <button type="button"
                onClick={() => window.open("https://github.com/infjay")}
                className="black_btn">
                GitHub
                </button>
            </nav>
            <h1 className="head_text">
                Summarize Articles with <br className="max-md:hidden" />
                <span className="colorful_gradient">OpenAI GPT-4</span>
            </h1>
            <h2 className="desc">
            Get the gist of any article with our innovative article summarizer website. Say goodbye to information overload and hello to efficient summarization.
            </h2>
    </header>
    )
}

export default Hero