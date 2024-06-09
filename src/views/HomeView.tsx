import React, { useState, useEffect } from "react";
import { getMarketData } from "../api/weatherApi";
import FilterComponent from "../components/FilterStates/FilterComponent";
import FilterGraphsComponent from "../components/FiltersGraphs";
import { renderChart } from "../helpers/charts";
import FilterDate from "../components/FilterDate";
import {
  Background,
  ChartsSection,
  Content,
  MainContent,
} from "../styled-components/Nav/Navbar.styled";
import { Container } from "../styled-components/Global/Global.styled";
import ModalNoData from "../components/ModalNoData";
import Header from "../components/Header";

interface HomeViewProps {
  darkMode: boolean;
}

const HomeView: React.FC<HomeViewProps> = ({ darkMode }) => {
  const [data, setData] = useState<any[]>([]);
  const [filterStateBase, setFilterStateBase] = useState<string[]>([]);
  const [selectedGraphs, setSelectedGraphs] = useState<string[]>([]);
  const [selectedDateFrom, setSelecteDateFrom] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  const compareInfo = async () => {
    try {
      if (
        filterStateBase.length > 0 &&
        selectedGraphs.length > 0 &&
        selectedDateFrom !== ""
      ) {
        setLoading(true);
        const result = await getMarketData({
          filterStateBase,
          selectedGraphs,
          selectedDateFrom,
        });
        setData(result.data);
        setLoading(false);
      } else {
        setData([]);
      }
    } catch (error: any) {
      console.error("Error fetching data:", error?.message);
      setData([]);
      setLoading(false);
      setError(error?.message);
      if (
        filterStateBase.length > 0 &&
        selectedGraphs.length > 0 &&
        selectedDateFrom !== ""
      ) {
        setOpenModal(true);
      }
    }
  };

  useEffect(() => {
    setData([...selectedGraphs]);
    compareInfo();
  }, [filterStateBase, selectedGraphs, selectedDateFrom]);

  useEffect(() => {
    if (openModal) {
      setData([]);
    }
  }, [openModal]);

  return (
    <>
      <ModalNoData
        openModal={openModal}
        setOpenModal={setOpenModal}
        error={error}
        darkMode={darkMode}
      />
      <Background darkMode={darkMode}>
        <Content>
          <Header darkMode={darkMode} />
          <MainContent>
            <Container>
              <FilterGraphsComponent
                setFiltersGraphs={setSelectedGraphs}
                darkMode={darkMode}
              />
              <FilterDate
                label=""
                darkMode={darkMode}
                selectedDate={selectedDateFrom}
                setSelectedDate={setSelecteDateFrom}
              />
            </Container>
            <FilterComponent
              handleFilterChange={setFilterStateBase}
              darkMode={darkMode}
              filterStateBase={filterStateBase}
            />
          </MainContent>
          <ChartsSection>
            {data.map((item, index) => (renderChart(item, index, loading)))}
          </ChartsSection>
        </Content>
      </Background>
    </>
  );
};

export default HomeView;
