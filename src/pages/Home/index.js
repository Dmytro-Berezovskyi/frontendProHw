import {Form, Field, ErrorMessage, Formik} from "formik";
import {Select, DatePicker, DatePickerProps, Button} from "antd";
import type { Dayjs } from 'dayjs';
//import {Input} from "antd";

const onChange: DatePickerProps<Dayjs[]>['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

export default function Home() {
    const initialValues = {
        description: '',
        checkIn: '',
        checkOut: '',
    }

    const hendleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting...');
    }
    return (
        <>
            <Formik
                initialValues={{initialValues}}
                onSubmit={hendleSubmit}
            >
                {({ values }) => (
                    <Form style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
                        <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Destination"
                                optionFilterProp="label"
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={[
                                    {
                                        value: '1',
                                        label: 'Kyiv',
                                    },
                                    {
                                        value: '2',
                                        label: 'Dnipro',
                                    },
                                    {
                                        value: '3',
                                        label: 'Kharkiv',
                                    },
                                    {
                                        value: '4',
                                        label: 'Prague',
                                    },
                                    {
                                        value: '5',
                                        label: 'Brno',
                                    },
                                    {
                                        value: '6',
                                        label: 'Plzen',
                                    },
                                ]}
                            />

                            <DatePicker onChange={onChange} needConfirm />
                            <DatePicker onChange={onChange} needConfirm />
                        </div>

                        <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
                            <Button>Adults</Button>
                            <Button>Children</Button>
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