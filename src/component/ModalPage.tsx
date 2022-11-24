import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Button, Col, Row } from "antd";
import * as Yup from "yup";
import { Formik } from "formik";

import SosInputComponent from "../../component/SosInputComponent";

type AddCustomerMasterPageType = {
  isModalOpen: boolean;
  isEditLinkage?: boolean;
  editLinkageData?: any;
  onClose: () => void;
};

const initialValues = {
  phone_number: 0,
};

const AddCustomerMasterPage = ({
  isModalOpen = false,
  onClose = () => {},
}: AddCustomerMasterPageType) => {
  const onCloseModal = () => onClose();

  const ModalFieldsSchema = Yup.object().shape({
    phone_number: Yup.string()
      .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Invalid Phone number entered.")
      .required("Phone number is required")
      .nullable(),
  });

  const onSubmitFormData = async (values: any) => {};

  return (
    <>
      <Modal
        classNames={{ root: "wesa-add-linkage-modal-root " }}
        open={isModalOpen}
        onClose={onCloseModal}
        // closeIcon={<CloseIcon color="#707070" />}
        center
        closeOnOverlayClick={false}
      >
        <Formik
          validationSchema={ModalFieldsSchema}
          initialValues={initialValues}
          onSubmit={onSubmitFormData}
          validator={() => ({})}
        >
          {function Render({
            handleChange,
            handleSubmit,
            values,
            errors,
            setFieldValue,
            touched,
          }) {
            return (
              <div className="add-fields-modal-root">
                <Row>
                  <Col span={24}>
                    <SosInputComponent
                      label="Phone Number"
                      name="phone_number"
                      value={values.phone_number}
                      onChange={handleChange}
                      required
                    />
                    {errors.phone_number && touched.phone_number && (
                      <span className="org-error">{errors.phone_number}</span>
                    )}
                  </Col>
                </Row>
              </div>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};

export default AddCustomerMasterPage;
