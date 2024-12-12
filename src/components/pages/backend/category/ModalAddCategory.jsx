import React from "react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { ImagePlusIcon, Minus, Plus, X } from "lucide-react";
import SpinnerButton from "../partials/spinners/SpinnerButton";
import {
  InputPhotoUpload,
  InputSelect,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs";
import { StoreContext } from "@/components/store/storeContext";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/storeAction";
import { Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "@/components/helpers/queryData";
import useUploadPhoto from "@/components/custom-hook/useUploadPhoto";
import { imgPath } from "@/components/helpers/functions-general";
const ModalAddCategory = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);

  const { uploadPhoto, handleChangePhoto, photo } =
  useUploadPhoto("/v2/upload-photo");





  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v2/category/${itemEdit.category_aid}` : `/v2/category`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["category"],
      });


      // show error box
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
      } else {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });


  const handleClose = () => dispatch(setIsAdd(false));


  const initVal = {
    category_title: itemEdit ? itemEdit.category_title : "",


  };
  const yupSchema = Yup.object({
    category_title: Yup.string().required("required"),

  });


  return (
    <ModalWrapper>
      <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[300px] w-full rounded-md border border-line">
        <div className="modal-header flex gap-2 p-2 items-center border-b border-line mb-2 ">
          <span className="text-body">Add Category</span>
          <button className="ml-auto" onClick={handleClose}>
            <X />
          </button>
        </div>
        <div className="modal-body p-4 ">
        <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              mutation.mutate({
                ...values,
                recipe_image:
                  (itemEdit?.recipe_image === "" && photo) ||
                  (!photo && "") ||
                  (photo === undefined && "") ||
                  (photo && itemEdit?.recipe_image !== photo?.name)
                    ? photo?.name || ""
                    : itemEdit?.recipe_image || "",
              });
              uploadPhoto();
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="flex">
                    <div className="info">
                      <h3 className="mb-0">Category</h3>

                      <div className="input-wrap">
                        <InputText
                          label="Title"
                          type="text"
                          name="category_title"
                        />
                      </div>
                      
                    </div>

                  </div>


                  <div className="flex justify-end gap-3 mt-5">
                    <button className="btn btn-accent" type="submit">
                    {mutation.isPending && <SpinnerButton />} 
                    {itemEdit ? "Save" : "Add"}
                    </button>
                    <button
                      className="btn btn-cancel"
                      onClick={handleClose}
                      type="reset"
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </ModalWrapper>
  );
};


export default ModalAddCategory;





