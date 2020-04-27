import React, { Component } from "react";
import ReviewCard from "./ReviewCard/ReviewCard";
import "./HomeReview.scss";

class HomeReview extends Component {
  render() {
    const { reviewData } = this.props;
    return (
      <div className="HomeReview">
        <div className="titleWrap">
          <div className="title">
            오늘의 <span>플러스 리뷰</span>
          </div>
          <div className="subTitle">
            <span role="img" aria-label="handDown">
              👇
            </span>
            잊지 않았죠? 플러스 리뷰! 지금 읽고 포인트 적립해요
            <span role="img" aria-label="money">
              💰
            </span>
          </div>
        </div>
        <div className="container">
          {reviewData.map((data) => (
            <ReviewCard
              key={data.id}
              img={data.img}
              title={data.title}
              brand={data.brand}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default HomeReview;
