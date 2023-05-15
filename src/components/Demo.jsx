import { useState, useEffect } from "react"
import { copy, linkIcon, loader, tick} from "../assets"
import { useLazyGetSummaryQuery } from "../services/article"


const Demo = () => {
    const [article, setArticle] = useState({
        url:"",
        summary:"",
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { data } = await getSummary({articleUrl: article.url})

        if(data?.summary){
            const newArticle = {...article,summary:data.summary }
            setArticle(newArticle);
            console.log(newArticle)
        }
    }
    const [getSummary, {error, isFetching }] = useLazyGetSummaryQuery();


  return (
    <section className="mt-16 w-full max-w-xl">
        <div className="flex flex-col w-full gap-2">
            <form className="relative flex justify-center items-center"
            onSubmit={handleSubmit}>
                <img src={linkIcon} alt="linkicon" className="absolute left-0 my-2 ml-3 w-5" />
                <input type="url"
                placeholder="Enter your Article URL" 
                className="url_input peer"
                value={article.url}
                onChange={(e)=> setArticle({
                    ...article, url: e.target.value
                })}
                required
                 />
                 <button type="submit"
                 className="submit_btn bg-green-500 peer-focus:border-blue-700 peer-focus:text-gray-200">
                    Summarize
                 </button>
            </form>
        </div>
    </section>
  )
}

export default Demo