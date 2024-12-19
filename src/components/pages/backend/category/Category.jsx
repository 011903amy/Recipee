import { Plus } from "lucide-react";
import React from "react";
import { StoreContext } from "@/components/store/StoreContext";
import ModalError from "../partials/modals/ModalError";
import ModalValidation from "../partials/modals/ModalValidation";
import SearchBar from "../partials/SearchBar";
import { setIsAdd } from "@/components/store/StoreAction";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import ModalAddCategory from "./ModalAddCategory";
import SideNavigation from "../partials/SideNavigation";
import ToastSuccess from "../partials/ToastSuccess";
import CategoryTable from "./CategoryTable";

const Category = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="category" />
          <main>
            <Header title="Category" subtitle="Category System" />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <div></div>
                <button className="btn btn-add mb-5" type="reset" onClick={handleAdd}>
                  <Plus size={16} />
                  Add New
                </button>
              </div>

              <CategoryTable setItemEdit={setItemEdit} />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.isAdd && (
        <ModalAddCategory setIsAdd={setIsAdd} itemEdit={itemEdit} setItemEdit={setItemEdit} />
      )}
      {store.isValidate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
    </>
  );
};

export default Category;
