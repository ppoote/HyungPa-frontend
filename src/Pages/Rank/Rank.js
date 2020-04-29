import React, { Component } from "react";
import { RankData } from "../../Config";
import HeaderItem from "./HeaderItem/HeaderItem";
import ItemRank from "./ItemRank/ItemRank";
import SlideRank from "./SlideRank/SlideRank";
import "./Rank.scss";

class Rank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      headerItems: [
        {
          id: 1,
          image:
            "https://d33ur1yh5ph6b5.cloudfront.net/6ab44471-66e4-43a5-bb24-d9809b6096b2-mid",
          banner: "POPULAR",
          title: "인기 제품 랭킹",
        },
        {
          id: 2,
          image:
            "https://d33ur1yh5ph6b5.cloudfront.net/fe52bc21-68a6-4694-ae68-ed2044a1ed3d-mid",
          banner: "BRAND",
          title: "인기 브랜드",
        },
        {
          id: 3,
          image:
            "https://d33ur1yh5ph6b5.cloudfront.net/b584c32d-ecf3-40b0-bf89-e507abcdf29c-mid",
          banner: "AWARD",
          title: "뷰티 리뷰 위너스",
        },
        {
          id: 4,
          image:
            "https://d33ur1yh5ph6b5.cloudfront.net/28278d2d-0ccc-4473-bcf7-559ab16e5c26-mid",
          banner: "NEW ITEM",
          title: "언니의 신상픽",
        },
      ],
      data: { rankData1: [], rankData2: [] },
    };
  }
  async componentDidMount() {
    const res = await fetch(RankData);
    const json = await res.json();
    this.setState({
      isLoading: true,
      data: json,
    });
  }
  render() {
    const { isLoading, headerItems } = this.state;
    const { rankData1, rankData2, slideItem } = this.state.data;
    return (
      <div className="Rank">
        <div className="headerItems">
          {isLoading
            ? headerItems.map((headerItem, index) => (
                <HeaderItem
                  key={headerItem.id}
                  headerItem={headerItem}
                  index={index}
                />
              ))
            : ""}
        </div>
        <div className="itemRank">
          <div className="title"># 이달의 틴트 랭킹</div>
          {isLoading
            ? rankData1.map((rankData, index) => (
                <ItemRank key={index} rankData={rankData} rankNum={index} />
              ))
            : ""}
        </div>
        <div className="itemRank">
          <div className="title"># 이달의 이니스프리 랭킹</div>
          {isLoading
            ? rankData2.map((rankData, index) => (
                <ItemRank key={index} rankData={rankData} rankNum={index} />
              ))
            : ""}
        </div>
        <div className="slideRank">
          <div className="title">
            # 형님의 신상픽 <span>6</span>
          </div>
          {isLoading && <SlideRank slideItem={slideItem} />}
        </div>
      </div>
    );
  }
}

export default Rank;