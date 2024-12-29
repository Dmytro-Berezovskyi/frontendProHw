import {Form, Field, ErrorMessage, Formik} from "formik";
import {Select, DatePicker, Button} from "antd";
import dayjs from "dayjs";

export default function Home() {
    const initialValues = {
        destination: null,
        checkIn: null,
        checkOut: null,
        adults: 1,
        children: 0,
    }

    const hendleSubmit = (values, { resetForm }) => {
        console.log("Form Values:", values);
        resetForm();
    }
    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={hendleSubmit}
            >
                {({ setFieldValue, setFieldTouched, values }) => (
                    <Form style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
                        <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
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
                                        onChange={(values) => setFieldValue('destination', values)}
                                        options={[
                                            {
                                                value: 'Kyiv',
                                                label: 'Kyiv',
                                            },
                                            {
                                                value: 'Dnipro',
                                                label: 'Dnipro',
                                            },
                                            {
                                                value: 'Kharkiv',
                                                label: 'Kharkiv',
                                            },
                                            {
                                                value: 'Prague',
                                                label: 'Prague',
                                            },
                                            {
                                                value: 'Brno',
                                                label: 'Brno',
                                            },
                                            {
                                                value: 'Plzen',
                                                label: 'Plzen',
                                            },
                                        ]}
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

                        <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
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

            <div style={{width: '60%', marginLeft: 'auto', marginRight: 'auto'}}>
                <h1>Plan&Stay - your ideal place is just a few clicks away!</h1>
                <p>
                    Plan&Stay is a modern booking platform dedicated to making travel planning seamless and stress-free.
                    Whether you're looking for a cozy getaway, a luxurious retreat, or a budget-friendly option, we
                    bring
                    you a curated selection of accommodations tailored to your preferences. With intuitive tools and
                    personalized recommendations, Plan&Stay ensures your next adventure starts with the perfect booking.
                </p>
            </div>
        </>
    )
}