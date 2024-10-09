import { useState } from "react";
import authApi from "../../redux/fetures/auth/authApi";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import './AllUsersStyle.css';
import { toast } from "react-toastify";

const AllUsers = () => {
    const { data } = authApi.useGetALlUserQuery()
    const [sendEmail, { isLoading }] = authApi.useSendEmailMutation()
    const [value, setValue] = useState('');
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("")
    


    const modules = {
        toolbar: [
            // [ { 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet',
        'link', 'image', 'video'
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { email, subject, value }
        const res = await sendEmail(data)
        if (res?.data?.success) {
            toast.success(res?.data?.message)
        }
    }


    return (
        <div>
            <h2 className="text-center py-10 text-4xl">All Users</h2>

            <div className="grid grid-cols-5 w-[1356px] mx-auto gap-10">

                <div className="col-span-2">
                    {
                        data?.data.map(item => (
                            <div onClick={() => setEmail(item?.email)} key={item?._id} className="mb-3 bg-gray-200 p-2 rounded cursor-pointer" >
                                <h2>{item.name}</h2>
                                <p className="text-[12px]">{item.email}</p>
                            </div>
                        ))
                    }
                </div>

                <div className="col-span-3">

                    <form action="" onSubmit={handleSubmit} >
                        <input className=" border mb-3 px-2 py-2 w-full  rounded" type="text" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />

                        <ReactQuill theme="snow"
                            modules={modules}
                            formats={formats}
                            value={value}
                            onChange={setValue} />

                        <div className="mt-3">
                            <button type="submit" className="button w-[120px] flex items-center justify-center py-2 " >
                                {
                                    isLoading ? <span className="loading loading-dots loading-md "></span> : "Send"
                                }
                            </button>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default AllUsers;