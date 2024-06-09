import BarChartComponent from "../components/CharGraphBar";
import ChartComponent from "../components/ChartGraphLine";
import { arrCapitalCities, arrGraphs } from "../constants/filters";
const chooseChart = (name: string) => {
  switch (name) {
    case "t_2m:C":
    case "t_max_2m_24h:C":
    case "t_min_2m_24h:C":
      return ChartComponent;
    case "precip_1h:mm":
    case "uv:idx":
      return BarChartComponent;
    default:
      return ChartComponent;
  }
};
const getNameParameter = (name: string) => {
  const findName = arrGraphs.find((item) => item.value === name);
  return findName ? findName.label : "";
};

const getNameTitle = (name: string) => {
  const findName = arrGraphs.find((item) => item.value === name);
  return findName ? findName.nameFilter : "";
};
export const renderChart = (item: any, index: number, loading: boolean) => {
  const ChartComponentType = chooseChart(item.parameter);
  return (
    <div
    className="cuztomizeScroll"
    style={{
        width: "100%",
        overflowX: "auto",
        borderRadius: "10px",
        // scrollbarWidth: "5px",
        scrollbarColor: "#61dafb",
    }}
    >
      <div
        style={{
          position: "relative",
          height: "auto",
          width: "80vw",
          backdropFilter: "blur(20px)",
          backgroundColor: "rgb(181 226 255)",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minWidth: "700px",
        }}
      >
        {loading ? (
          <div className="loader" />
        ) : (
          <>
            <ChartComponentType
              key={index}
              data={item.coordinates}
              parameter={getNameParameter(item.parameter)}
              title={getNameTitle(item.parameter)}
            />
            <br />
          </>
        )}
      </div>
    </div>
  );
};

export const getNameState = (lat: number, lon: number) => {
  const state = arrCapitalCities.find(
    (item) => `${item.lat},${item.lon}` === `${lat},${lon}`
  );
  return state ? `${state.nameState} (${state.capital})` : "";
};

export const getNameStateSelect = (coordinates: string) => {
  const state = arrCapitalCities.find(
    (item) => `${item.lat},${item.lon}` === `${coordinates}`
  );
  return state ? `${state.capital}` : "";
};
export const formatDate = (dateObject: string) => {
  const date = new Date(dateObject);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}hrs`;
};
