
import IconNoData from "../partials/IconNoData";
import { getCategoryPrices } from "./functions";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import DashboardCard from "./DashboardCard";
import DashboardAccordion from "./DashboardAccordion";
import SideNavigation from "../partials/SideNavigation";
import useQueryData from "@/components/custom-hook/useQueryData";
import { StoreContext } from "@/components/store/StoreContext";
import TableLoader from "../partials/TableLoader";
import FetchingSpinner from "../partials/spinners/FetchingSpinner";
import React from "react";

const Dashboard = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [isCategoryEdit, setIsCategoryEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setIsCategoryEdit(null);
  };
  const {
    isLoading: isLoadingCategory,
    isFetching: isFetchingCategory,
    error: errorCategory,
    data: dataCategory,
  } = useQueryData(
    `/v2/category`, //enpoint
    "get", //method
    "category" //key
  );
  const {
    isLoading: isLoadingRecipe,
    isFetching: isFetchingRecipe,
    error: errorRecipe,
    data: dataRecipe,
  } = useQueryData(
    `/v2/recipe`, //enpoint
    "get", //method
    "recipe" //key
  );
  const {
    isLoading: isLoadingLevel,
    isFetching: isFetchingLevel,
    error: errorLevel,
    data: dataLevel,
  } = useQueryData(
    `/v2/level`, //enpoint
    "get", //method
    "level" //key
  );

  const tableData = getCategoryPrices(dataCategory, dataRecipe,dataLevel);

  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="dashboard" />
          <main>
            <Header title="DashBoard" subtitle="Welcome To Jollibee" />
            <div className="p-2">
              <div className="grid grid-cols-[1fr_400px] gap-5">
                <div className="stats">
                  <div className="relative chart mt-2">
                    {(isFetchingCategory || isFetchingRecipe) &&
                      isLoadingCategory &&
                      isLoadingRecipe && <FetchingSpinner />}
                    {isLoadingCategory || isLoadingRecipe ? (
                      <TableLoader cols={1} count={10} />
                    ) : (
                      <ResponsiveContainer width={"100%"} height={300}>
                        <BarChart
                          width={1300}
                          height={300}
                          // data={menus.slice(0, 10)}
                          data={tableData}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 10,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="0 0" />
                          <XAxis dataKey="category_title" interval={0} />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar
                            dataKey="recipe_level"
                            fill="#AA0000"
                            barSize={80}
                            activeBar={<Rectangle fill="pink" stroke="blue" />}
                          />
                          <Bar
                            dataKey="recipe_level"
                            fill="#7CB9E8"
                            barSize={80}
                            activeBar={<Rectangle fill="pink" stroke="blue" />}
                          />
                          <Bar
                            dataKey="recipe_level"
                            fill="#32de84"
                            barSize={80}
                            activeBar={<Rectangle fill="pink" stroke="blue" />}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    )}
                  </div>
                  <div className="relative">
                    {isFetchingCategory && isLoadingCategory && (
                      <FetchingSpinner />
                    )}
                    {isLoadingCategory && <TableLoader cols={4} count={20} />}
                    {dataCategory?.count == 0 && <IconNoData />}
                    <div className="grid grid-cols-4 gap-5 custom-scroll h-[calc(100vh-493px)] overflow-y-auto mt-4">
                      {dataCategory?.count > 0 &&
                        dataCategory?.data.map((item, key) => {
                          return (
                            <DashboardCard
                              item={item}
                              key={key}
                              dataRecipe={dataRecipe}
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>

                <div className=" relative sidebar custom-scroll h-[calc(100vh-180px)] overflow-auto ">
                  {isFetchingCategory && isLoadingCategory && (
                    <FetchingSpinner />
                  )}
                  {isLoadingCategory && <TableLoader cols={1} count={55} />}
                  {dataCategory?.count === 0 && <IconNoData />}

                  {dataCategory?.data.map((item, key) => {
                    const recipeItem = dataRecipe?.data.filter(
                      (recipeItem) =>
                        recipeItem.recipe_category_id == item.category_aid
                    );
                    return (
                      <DashboardAccordion
                        item={item}
                        key={key}
                        recipeItem={recipeItem}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <Footer />
          </main>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
