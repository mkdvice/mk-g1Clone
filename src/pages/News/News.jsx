import React from 'react'
import MainNews from './Components/MainNews'
import RegularNews from './Components/RegularNews'
import { NewsDataList } from './Components/NewsDataList'

const News = () => {
    return (
        <div className="container">
            <MainNews />
            {NewsDataList.map((item, index) => {
                return (
                    <RegularNews key={index}
                        newsImg={item.imgNews}
                        newsTag={item.newsTag }
                        newsTitle={item.newsTitle}
                        newsIntro={item.newsIntro}
                        timePost={item.timePost}
                        newsPath={item.newsPath}
                        isSponsored={item.isSponsored}
                    />
                )
            })}
        </div>
    )
}

export default News
