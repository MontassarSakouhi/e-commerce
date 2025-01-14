
const SignNewsLetter = ({ formik }) => {

    return (
        <div className="suse  ">
            <p className="text-center">Your inspiration interests us. What will you choose?</p>

            <div className="flex justify-around">
                <div className="flex items-center justify-center">
                    <input
                        className="w-4 h-4 "
                        type="radio"
                        name="topic"
                        value="girl"
                        id="girl-topic"
                        checked={formik.values.topic === 'girl'}
                        onChange={formik.handleChange}
                    />
                    <label className="p-3 font-normal text-sm" htmlFor="girl-topic">
                        Girl Topic <span className="text-xl">♀</span>
                    </label>
                </div>
                <div className="flex items-center justify-center">
                    <input
                        className="w-4 h-4 "
                        type="radio"
                        name="topic"
                        value="boy"
                        id="boy-topic"
                        checked={formik.values.topic === 'boy'}
                        onChange={formik.handleChange}
                    />
                    <label className="p-3 font-normal text-sm" htmlFor="boy-topic">
                        Boy Topic <span className="text-xl">♂</span>
                    </label>
                </div>
            </div>
            {formik.errors.topic && formik.touched.topic && <p className="text-red-500 font-normal text-center ">{formik.errors.topic}</p>}

            <h3 className="text-center my-2 text-gray-800 font-medium">P.S: Do you like surprises? Let us know your birthday!</h3>

            <div className='flex justify-around'>
                <div className="flex flex-col justify-center items-center" >
                    <input
                        type="text"
                        name="birthdayDay"
                        placeholder="Day"
                        value={formik.values.birthdayDay}
                        onChange={formik.handleChange}
                        className="mb-2  bg-slate-60 w-16 text-center rounded-lg sm:py-3 "
                    />
                    {formik.errors.birthdayDay && formik.touched.birthdayDay && <p className="text-red-500 text-[15px] text-center font-normal ">{formik.errors.birthdayDay}</p>}
                </div>

                <div className="flex flex-col justify-center items-center" >
                    <input
                        type="text"
                        name="birthdayMonth"
                        placeholder="Month"
                        value={formik.values.birthdayMonth}
                        onChange={formik.handleChange}
                        className="mb-2  w-16 text-center rounded-lg sm:py-3 "
                    />
                    {formik.errors.birthdayMonth && formik.touched.birthdayMonth && <p className="text-red-500 font-normal  text-center text-[15px] px-10">{formik.errors.birthdayMonth}</p>}
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <input
                    className='m-2 w-10'
                    type="checkbox"
                    name="consent"
                    id="consent"
                    checked={formik.values.consent}
                    onChange={formik.handleChange}
                />
                <label htmlFor="consent" className='text-[10px] flex py-2'>
                    {formik.errors.consent && formik.touched.consent && <p className="text-red-500 text-[20px] font-normal mr-3">{formik.errors.consent}</p>}
                    I have read and understood that I accept to receive personalized commercial communications via email or other means.
                </label>

            </div>
        </div>
    );
};

export default SignNewsLetter;
