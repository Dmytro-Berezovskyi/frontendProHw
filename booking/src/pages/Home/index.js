import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Field, ErrorMessage, Formik } from "formik";
import dayjs from "dayjs";

import { fetchDestination } from "../../store/thunks/destinationThunk";
import { fetchSelectedHotels } from "../../store/thunks/selectedHotelsThunk";

import DestinationHotels from "./DestinationHotels"

import { Select, DatePicker, Button, Divider } from "antd";

export default function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const destination = useSelector((state) => state.destination);
    const selectedHotels = useSelector((state) => state.selectedHotels);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (submitted && !selectedHotels.loading && selectedHotels.selectedHotels.length === 0 && selectedHotels.error === "") {
            navigate("/hotels");
        }
    }, [submitted, selectedHotels, navigate]);

    const initialValues = {
        destination: null,
        checkIn: null,
        checkOut: null,
        adults: 1,
        children: 0,
    }

    const validate = (values) => {
        const errors = {};

        if (!values.destination) {
            errors.destination =
                <div>
                    <span>Enter your destination or </span>
                    <NavLink to={"/hotels"} style={{fontWeight: "bold"}}>view all available hotels</NavLink>
                </div>;
        }

        if (values.checkOut < values.checkIn ) {
            errors.checkIn = "Please enter valid dates"
        }

        return errors;
    };

    const handleSubmit = (values, { resetForm }) => {
        const selectedCity = destination.destination.find((destination) => values.destination === destination.value)

        if (selectedCity) {
            dispatch(fetchSelectedHotels(selectedCity.label));
            setSubmitted(true);
        }

        resetForm();
    };


    return (
        <>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue, setFieldTouched, values }) => (
                    <Form style={{display: "flex", gap: "10px", justifyContent: "center"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
                                <Field name="destination">
                                    {({ field }) => (
                                        <Select
                                            {...field}
                                            showSearch
                                            style={{ width: 200 }}
                                            placeholder="Destination"
                                            optionFilterProp="label"
                                            filterSort={(optionA, optionB) =>
                                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                            }
                                            onChange={(values) => setFieldValue("destination", values)}
                                            options={destination.destination}
                                        />
                                    )}
                                </Field>

                                <Field name="checkIn">
                                    {({ field }) => (
                                        <DatePicker
                                            {...field}
                                            value={values.checkIn ? dayjs(values.checkIn) : null}
                                            onChange={(date) => setFieldValue("checkIn", date ? date.format("YYYY-MM-DD") : null)}
                                            onBlur={() => setFieldTouched("checkIn", true)}
                                            needConfirm
                                            placeholder="Check In"
                                        />
                                    )}
                                </Field>

                                <Field name="checkOut">
                                    {({ field }) => (
                                        <DatePicker
                                            {...field}
                                            value={values.checkOut ? dayjs(values.checkOut) : null}
                                            onChange={(date) => setFieldValue("checkOut", date ? date.format("YYYY-MM-DD") : null)}
                                            onBlur={() => setFieldTouched("checkIn", true)}
                                            needConfirm
                                            placeholder="Check Out"
                                        />
                                    )}
                                </Field>
                            </div>
                            <ErrorMessage name="destination" component="div" style={{color: "red", marginTop: "10px"}}/>
                            <ErrorMessage name="checkIn" component="span" style={{color: "red", marginTop: "10px"}}/>
                        </div>

                        <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
                            <Button
                                onClick={() => setFieldValue("adults", values.adults + 1)}
                            >
                                Adults {values.adults}
                            </Button>
                            <Button
                                onClick={() => setFieldValue("children", values.children + 1)}
                            >
                                Children {values.children}
                            </Button>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </div>

                    </Form>
                )}
            </Formik>

            <div style={{width: "100%", marginLeft: "auto", marginRight: "auto"}}>
                <Divider orientation="left">
                    <h1 style={{textTransform: "uppercase", fontWeight: "800", fontSize: "25px", margin: 0}}>
                        Plan&Stay - your ideal place is just a few clicks away!
                    </h1>
                </Divider>

                <DestinationHotels selectedHotels={selectedHotels.selectedHotels} />
            </div>
        </>
    )
}