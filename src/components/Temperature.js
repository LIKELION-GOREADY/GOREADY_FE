import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as LocationButton } from "../assets/images/locationButton.svg";
import { axiosInstance } from "../apis/axiosInstance";

const TemperatureContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 49px;
  width: 100%;
`;

const StyledLocationButton = styled(LocationButton)`
  position: absolute;
  left: 0px;
  top: 45px;
  width: 23px;
  height: 20px;
`;

const LocationText = styled.span`
  position: absolute;
  top: 55px;
  left: 30px;
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 0px;
`;

const TemperatureText = styled.h3`
  position: absolute;
  top: 97px;
  left: 0;
  color: #000;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;

  .colored {
    color: ${({ changeColor }) => changeColor || "#000"};
  }
`;

const TemperatureValue = styled.p`
  position: absolute;
  top: 154px;
  left: 202px;
  color: var(--WF-Base-800, #2d3648);
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
  letter-spacing: 0.4px;
`;

const TemperatureRange = styled.div`
  position: absolute;
  top: 173px;
  left: 0;
  font-style: normal;

  span {
    margin-right: 5px;
    color: #979797;
  }

  .low {
    font-size: 16px;
    color: #007bff;
  }

  .high {
    font-size: 16px;
    color: #f40;
  }
  .arrow {
    margin-left: 15px;
    color: black;
    font-size: 16px;
  }
  .change {
    margin-left: 5px;
    color: ${({ changeColor }) => changeColor || "#000"};
    font-size: 13px;
  }
`;

const Temperature = ({ weatherInfo, currLocation }) => {
  const arrowDirection = weatherInfo?.status === "hot" ? "↑" : "↓";
  const tempDiffTxt =
    weatherInfo?.status === "hot" ? (
      <span>
        오늘의 기온은 어제보다 <span className="colored">높아요</span>
      </span>
    ) : weatherInfo?.status === "cold" ? (
      "오늘의 기온은 어제보다 낮아요"
    ) : (
      "오늘의 기온은 어제와 같아요"
    );

  const changeColor =
    weatherInfo?.status === "hot"
      ? "#ff4500"
      : weatherInfo?.status === "cold"
      ? "#007aff"
      : "#000";

  return (
    <TemperatureContainer>
      <StyledLocationButton />
      <LocationText>{currLocation}</LocationText>
      <TemperatureText changeColor={changeColor}>{tempDiffTxt}</TemperatureText>
      <TemperatureValue>{weatherInfo?.currentTemp}°C</TemperatureValue>
      <TemperatureRange changeColor={changeColor}>
        <span className="low">{weatherInfo?.lowTemp}°C</span>
        <span>–</span>
        <span className="high">{weatherInfo?.highTemp}°C</span>
        <span className="arrow">{arrowDirection}</span>
        <span className="change">{weatherInfo?.diffTemp}°C</span>
      </TemperatureRange>
    </TemperatureContainer>
  );
};

export default Temperature;
