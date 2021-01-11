import React from 'react'
import MainNews from './Components/MainNews'
import RegularNews from './Components/RegularNews'
import { NewsDataList } from './Components/NewsDataList'
import NewsPage from './Components/NewsPage'

const News = () => {
    return (
        <div className="container">
        
        {NewsDataList.map((item, index) => {
            return (
                <NewsPage key={index}
            title={item.title}
            date={item.date}
            sourceUrl={item.sourceUrl}
            alt={item.alt}
            content={item.content}

        />
            )
        })}

            {/* {CoverDataList.map((item, index) => {
                return (
                    <MainNews  key={index}
                        isMainNews={item.isMainNews}
                        isSecondNews={item.isSecondNews}
                        isThirdNews={item.isThirdNews}
                        newsImg={item.newsImg}
                        newsTag={item.newsTag}
                        newsTitle={item.newsTitle}
                        newsIntro={item.newsIntro}
                        timePost={item.timePost}
                        newsPath={item.newsPath}
                        newsText={item.newsText}

                    />
                )
            })} */}

            {/* {NewsDataList.map((item, index) => {
                return (
                    <RegularNews key={index}
                        newsImg={item.imgNews}
                        newsTag={item.newsTag}
                        newsTitle={item.newsTitle}
                        newsIntro={item.newsIntro}
                        timePost={item.timePost}
                        newsPath={item.newsPath}
                        isSponsored={item.isSponsored}
                    />
                )
            })} */}
        </div>
    )
}

export default News
