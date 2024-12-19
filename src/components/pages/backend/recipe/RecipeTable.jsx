
import {
  Archive,
  ArchiveRestore,
  FilePenLine,
  Trash2,
} from "lucide-react";

import LoadMore from "../partials/LoadMore";
import Pills from "../partials/Pills";
import ModalConfirm from "../partials/modals/ModalConfirm";
import ModalDelete from "../partials/modals/ModalDelete";
import React from "react";
import { setIsAdd, setIsArchive, setIsConfirm, setIsDelete, setIsRestore } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import useQueryData from "@/components/custom-hook/useQueryData";
import SpinnerTable from "../partials/spinners/SpinnerTable";
import TableLoader from "../partials/TableLoader";
import IconNoData from "../partials/IconNoData";
import IconServerError from "../partials/IconServerError";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "@/components/helpers/queryDataInfinite";
import SearchBarWithFilterStatus from "../partials/SearchBarWithFilterStatus";
import { FaArchive, FaEdit, FaTrash, FaTrashRestore } from "react-icons/fa";
import ModalArchive from "../partials/modals/ModalArchive";
import ModalRestore from "../partials/modals/ModalRestore";


const RecipeTable = ({setItemEdit}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isActive, setIsActive] = React.useState(0)
  const [id, setId] = React.useState(null)
   const [isFilter, setIsFilter] = React.useState(false);
   const [onSearch, setOnSearch] = React.useState(false);
   const [statusFilter, setStatusFilter] = React.useState("");
   const search = React.useRef({ value: "" });
   const [page, setPage] = React.useState(1);
   const { ref, inView } = useInView();
   let counter = 1;

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.recipe_aid)
  };
  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsActive(1)
    setId(item.recipe_aid)
  };
  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsActive(0)
    setId(item.recipe_aid)
  };
 
  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item)
  };
// const {
//   isLoading,
//   isFetching,
//   error,
//   data: result,
// } = useQueryData(
//   `/v2/recipe`, // endpoint
//   "get", // method
//   "recipe"
// );
 const {
   data: result,
   error,
   fetchNextPage,
   hasNextPage,
   isFetching,
   isFetchingNextPage,
   status,
 } = useInfiniteQuery({
   queryKey: ["recipe", onSearch, isFilter, statusFilter],
   queryFn: async ({ pageParam = 1 }) =>
     await queryDataInfinite(
       "/v2/recipe/search", // search or filter endpoint
       `/v2/recipe/page/${pageParam}`, //page api/ endpoint
       isFilter || store.isSearch, //search boolean
       {
         isFilter,
         statusFilter,
         searchValue: search?.current.value,
         id: "",
       } //payload
     ),
   getNextPageParam: (lastPage) => {
     if (lastPage.page < lastPage.total) {
       return lastPage.page + lastPage.count;
     }
     return;
   },
   refetchOnWindowFocus: false,
 });

 React.useEffect(() => {
   if (inView) {
     setPage((prev) => prev + 1);
     fetchNextPage();
   }
 }, [inView]);


  return (
    <div>
      <div>
        <SearchBarWithFilterStatus
          search={search}
          dispatch={dispatch}
          store={store}
          result={result}
          isFetching={isFetching}
          setOnSearch={setOnSearch}
          onSearch={onSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          setIsFilter={setIsFilter}
          setPage={setPage}
        />
      </div>
      <div className="relative p-4 bg-secondary rounded-md mt-10 border border-line">
        {/* {!isLoading || (isFetching && <SpinnerTable />)} */}
        <div className="table-wrapper custom-scroll">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Title</th>
                <th>Category</th>
                <th>Level</th>
                <th>Serving</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* LOADING OF NO DATA */}
              {(status === "pending" || result?.pages[0].data.length === 0) && (
                <tr>
                  <td colSpan="100%" className="p-10">
                    {status === "pending" ? (
                      <TableLoader cols={2} count={20} />
                    ) : (
                      <IconNoData />
                    )}
                  </td>
                </tr>
              )}

              {/* ERROR */}
              {error && (
                <tr>
                  <td colSpan={100}>
                    <IconServerError />
                  </td>
                </tr>
              )}

              {result?.pages.map((page, pageKey) => (
                <React.Fragment key={pageKey}>
                  {page.data.map((item, key) => {
                    return (
                      <tr key={key} className="group relative cursor-pointer">
                        <td>{counter++}.</td>
                        <td>
                          {item.food_is_active ? (
                            <Pills text="Active" />
                          ) : (
                            <Pills text="Inactive" />
                          )}
                        </td>
                        <td>{item.recipe_title}</td>
                        <td className="capitalize">{item.category_title}</td>
                        <td className="capitalize">{item.level_title}</td>
                        <td>{item.recipe_serving}</td>
                        <td
                          colSpan="100%"
                          className="opacity-0 group-hover:opacity-100"
                        >
                          <div className="flex items-center justify-end gap-2 mr-5">
                            {item.category_is_active == 1 ? (
                              <>
                                <button
                                  type="button"
                                  className="tooltip"
                                  data-tooltip="Edit"
                                  disabled={isFetching}
                                  onClick={() => handleEdit(item)}
                                >
                                  <FaEdit />
                                </button>
                                <button
                                  type="button"
                                  className="tooltip"
                                  data-tooltip="Archive"
                                  disabled={isFetching}
                                  onClick={() => handleArchive(item)}
                                >
                                  <FaArchive />
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  className="tooltip"
                                  data-tooltip="Restore"
                                  disabled={isFetching}
                                  onClick={() => handleRestore(item)}
                                >
                                  <FaTrashRestore />
                                </button>
                                <button
                                  type="button"
                                  className="tooltip"
                                  data-tooltip="Delete"
                                  disabled={isFetching}
                                  onClick={() => handleDelete(item)}
                                >
                                  <FaTrash />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              ))}
            </tbody>
          </table>

          <div className="pb-10 flex items-center justify-center text-white">
            <LoadMore
              fetchNextPage={fetchNextPage}
              isFetchingNextPage={isFetchingNextPage}
              hasNextPage={hasNextPage}
              result={result?.pages[0]}
              setPage={setPage}
              page={page}
              refView={ref}
            />
          </div>
        </div>
      </div>
      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          mysqlApiDelete={`/v2/recipe/${id}`}
          queryKey={"recipe"}
        />
      )}
      {store.isConfirm && <ModalConfirm />}
      {store.isArchive && (
        <ModalArchive
          setIsArchive={setIsArchive}
          mysqlEndpoint={`/v2/recipe/active/${id}`}
          queryKey={"recipe"}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          setIsRestore={setIsRestore}
          mysqlEndpoint={`/v2/recipe/active/${id}`}
          queryKey={"recipe"}
        />
      )}
    </div>
  );
};

export default RecipeTable;
