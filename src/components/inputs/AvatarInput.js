import React, {useRef, useState} from "react";
import Cropper, {ReactCropperElement} from "react-cropper";
import "cropperjs/dist/cropper.css";


const AvatarInput = ({label, data, setData, placeholder, name}) => {
    const [preview, setPreview] = useState("")
    const cropperRef = useRef(null);
    const uploadRef = useRef()
    const onCrop = () => {
        const cropper = cropperRef.current?.cropper;
        setData({...data, [name]: cropper.getCroppedCanvas().toDataURL()})
    };
    const onUpload = (e) => {
        const reader = new FileReader()
        reader.onload = (r) => {
            setData({...data, [name]: r.target.result})
            setPreview(r.target.result)
        }
        reader.readAsDataURL(e.target.files[0])

        // setData({...data,[name]:e.target.files[0]})

    }
    return (
        <div className={"mb-3 px-2"}>
            <label htmlFor="first_name"
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label ?? name ?? ""}</label>

            <input type="file" hidden={true} onChange={onUpload} ref={uploadRef} className={"mb-3 border rounded"}/>

            {data[name] !== null && data[name] !== undefined ? <div className={"flex w-full items-end "}>
                    {preview !== "" ? <Cropper
                        src={preview}
                        style={{height: 200, width: 200}}
                        aspectRatio={1}
                        guides={true}
                        crop={onCrop}
                        ref={cropperRef}
                    /> : null}
                    <img src={data[name]} className={"ml-2 rounded-full max-w-[10rem]"}/>
                    <i
                        onClick={() => {
                            setPreview("")
                            setData({...data, [name]: null})
                            uploadRef.current.value = null
                        }}
                        className={"bx bx-x cursor-pointer hover:p-0.5 transition-all text-white bg-red-900 rounded-full text-2xl"}></i>
                </div> :
                <button
                    onClick={() => {
                        uploadRef.current.click()
                    }}
                    className={"mb-3"}>
                    <img src={require("../../media/upload.png")}
                         className={"max-w-[8rem] rounded border"}/>
                </button>}
        </div>
    );
};
export default AvatarInput