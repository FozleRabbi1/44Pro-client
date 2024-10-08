import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pro44 = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const swiperRef1 = useRef(null);
    const swiperRef = useRef(null);
    const swiperRef3 = useRef(null);
    const [nextPrevId, setNextPrev] = useState("Leather 1");
    const [size, setSize] = useState(""); 
    const [logoObj, setLogo] = useState(null); 

    const [colorState, setColorState] = useState({
        "Leather 1": "#f3f4f6",
        "Leather 2": "#f3f4f6",
        "Leather 3": "#f3f4f6",
        "Leather 4": "#f3f4f6",
        "Leather 5": "#f3f4f6",
        "Leather 6": "#f3f4f6",
        "Leather 7": "#f3f4f6",
        "Leather 8": "#f3f4f6",
        Palm: "#f3f4f6",
        Web: "#f3f4f6",
        Wrist: "#f3f4f6",
        Binding: "#f3f4f6",
        Welting: "#f3f4f6",
        "Home Plate": "#f3f4f6",
        "Logo Color": "gray",
        Laces: "#f3f4f6",
    });

    console.log(37, isButtonDisabled);
    

    useEffect(() => {
        // const allFieldsPopulated = size !== "" && logoObj !== null && Object.values(colorState).every(color => color !== "#f3f4f6");


        if (!logoObj || !size ) {  // kaj hosse but ektu stady korte hobe eita niye
            setIsButtonDisabled(true);
        } else {
            setIsButtonDisabled(false); 
        }

    }, [size, logoObj, colorState]);


    const colors = [
        { name: "Black", value: "black" },
        { name: "Gray", value: "#888888" },
        { name: "White", value: "#ffffff" },
        { name: "Wheat", value: "wheat" },
        { name: "Yellow", value: "yellow" },
        { name: "Orange", value: "orange" },
        { name: "Tomato", value: "tomato" },
        { name: "Chocolate", value: "chocolate" },
        { name: "Brown", value: "brown" },
        { name: "Pink", value: "pink" },
        { name: "Red", value: "red" },
        { name: "Maroon", value: "maroon" },
        { name: "Purple", value: "purple" },
        { name: "Blue", value: "blue" },
        { name: "Darkblue", value: "darkblue" },
        { name: "Skyblue", value: "skyblue" },
        { name: "Mint", value: "#33d7ff" },
        { name: "Green", value: "green" },
        { name: "Darkgreen", value: "darkgreen" },
        { name: "Lightgreen", value: "lightgreen" },
    ];

    const glovesColorFieldName = [
        "Leather 1", "Leather 2", "Leather 3", "Leather 4", "Leather 5", "Leather 6", "Leather 7", "Leather 8",
        "Web", "Wrist", "Binding", "Welting", "Home Plate", "Logo Color", "Laces"
    ];

    const handleColor = (colorValue) => {
        setColorState((prev) => ({
            ...prev,
            [nextPrevId]: colorValue,
        }));
    };

    const prevFun1 = () => {
        swiperRef1.current.slidePrev();
    };

    const nextFun1 = () => {
        swiperRef1.current.slideNext();
    };

    const prevFun = () => {
        const currentIndex = glovesColorFieldName.indexOf(nextPrevId);
        const newIndex = currentIndex > 0 ? currentIndex - 1 : 0;
        setNextPrev(glovesColorFieldName[newIndex]);
        swiperRef.current.slidePrev();
    };

    const nextFun = () => {
        const currentIndex = glovesColorFieldName.indexOf(nextPrevId);
        const newIndex =
            currentIndex < glovesColorFieldName.length - 1
                ? currentIndex + 1
                : glovesColorFieldName.length - 1;
        setNextPrev(glovesColorFieldName[newIndex]);
        swiperRef.current.slideNext();
    };

    const prevFun3 = () => {
        swiperRef3.current.slidePrev();
    };

    const nextFun3 = () => {
        swiperRef3.current.slideNext();
    };

    const [show1, setShow1] = useState("block")
    const [show2, setShow2] = useState("hidden")
    const [show3, setShow3] = useState("hidden")

    const base = () => {
        setShow1("block")
        setShow2("hidden")
        setShow3("hidden")
    }

    const color = () => {
        setShow1("hidden")
        setShow2("block")
        setShow3("hidden")
    }

    const personalize = () => {
        setShow1("hidden")
        setShow2("hidden")
        setShow3("block")
    }


    const sizeArray = ["11", "11.25", "11.5", "11.75", "12", "12.25"];

    const ThumbLogoData = [
        { name: 'None' },
        { name: 'Home Plate Logo' },
        { name: 'Graphic (+$7)', description: "Change graphic and color on the next steps." },
        { name: 'Premium Graphic (+$15)', description: "Change graphic on the next step." },
        { name: 'Jumbo Number (+$7)', description: "Enter number and change color on the next step." },
        { name: 'Stamped Flag (+$7)', description: "Choose a flag on the next step." },
        { name: 'Custom Plate Number (+$7)', description: "Enter number and change color on the next step." },
    ]




    const getGlovsData = () => {
        console.log(size);
        console.log(colorState);
        console.log(logoObj);
    }



    return (
        <div className="bg-gray-200 py-10">
            <div className="max-w-[1536px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center">

                    <div>
                        <svg version="1.1" viewBox="0 0 900 859" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill={colorState["Leather 1"]}
                                transform="translate(430,39)"
                                d="m0 0h10l22 6 11 7v2h2l5 10v18l-1 1-1 7-1 1v10l4 2 3-4 6-12 9-13h2l2-4 9-6 5-3 7-7 4-2 16-1 15 1 9 3 10 7 6 5 13 3 16 5 5 3h7l1-1 19-1 7 3 9 6 8 3 8 7 1 5-1 7 10-5 9 4 4 4v11l6-1 5-1 9 6 2 2 1 11h13l8 7 1 1v13l12-1 6 3v2l4 2 1 2v9h9l9 8v12h11l3 2v2l3 1 5 8 9 7 6 9 5 5 4 5 4 10 6 8 2 4v13l-1 1v8l11 9 9 9-1 5-8 3-2 8-4 5-6 34-1 1-4 21-2 9-1 1-4 21-1 2-1 10-1 1-4 24-2 11-1 1-1 9-2 8-3 15-3 11-4 23-3 11-3 17-3 12-3 8-1 1h-10l-4-3 2-13 2-9 1-1 2-11 2-9 1-1 1-9 3-12 2-15 1-2 1-10 1-1 4-21 3-10 1-9 2-10 1-7 1-1 1-8 1-1 3-16 3-15 3-9 2-12 1-2 2-14v-14l-6-3-5 1-1 1v16l-3 8-6 7-9 5-7 20-4 14-5 12-7 18-3 9v29l1 5-1 2-1 11-7 11-7 5-7 3-6 2-2 1-5 13-8 18-3 8h12l1 1v8l-9 15-24 36-7 11-6 8-9 15-3 12-8 9-2 4h-2v2h-2v2l-2 1-10 1-5 4h-2v2h-2l-2 4-8 11-2 5h-2l-1 4-10 11-7 8-9 8-12 18-8 16-9 14-3 6-1 12-5 7h-2v2l-11 8-23 12-12 6-9 3-13 4-19 3-12 2-14 2-15 1-4 1h-60l-4-1-18-2-25-7-13-8-8-7v-2h-2l-6-8-6-11-4-3-13-1-7-4-10 1-5-3-4-12-14-28-4-7-5-5-6-10-4-11 2-11 2-3h2v-8l-3-5-6-4-4-5-3-6v-2h-2l-10-16-14-20-9-12-9-6-4-4-10-3-5-4-2-4v-27l1-7-7-21-4-13-2-7-3-14-1-1-3-14-5-13-1-1v-7l4-1 5 5 5 9 7 14 3 8 3 6 2 10 5-3 3-5 8-7v-8l-1-2-2-17-2-47v-13l1-23 2-14 1-21-1-9-9-3-4-5v-5l3-5 2-9 5-10 4-3 7-2 2-10 3-9 2-13 3-12 4-23 2-11 4-8 7-22 3-10 3-7 5-15 1-6-6 2-8 8h-2v2l-8 7-12 12-14 16-6 8-5 6-4 8h-2l-1 4-9 14-8 15-6 13-8 19-7 19-2 5-3 12-5 18-3 9-2 12-3 12-2 10-2 20-1 2-1 11-1 2-1 10-3 3-6-2-3-4v-8l2-12 1-13 1-2 1-11 1-2 2-12 2-13 3-11 4-20 2-9 3-9 4-16 5-15 16-32 9-16 7-11 7-10 8-11 6-8h2v-2l4-4 1-2h2l2-4 3-3h2l2-4 5-6h2v-2l3-3h2v-2l16-14 10-8 8-6 4-4 2-6 5-5 6-4 6-2h5l5 3 14 1 5 4 4-1 5-8 4-6 1-15 7-13 7-6 8-4 13-4 7-6h24l10 5v2l3 1 4 6 2 16 4-2 6-12 7-9 8-9 8-13h2v-2l11-3 18-1z" />
                            <path
                                fill={colorState["Leather 2"]}
                                transform="translate(406,58)"
                                d="m0 0h5l1 4-13 27-9 22-7 17-4 10-11 27-6 15-13 36-4 14-7 26-3 11-6 33-6 56-2 40v49l2 40 2 22 3 21 1 9v10l9-1h27l5 1v-77l3-36 3-17 9-31 10-28 4-7 5-17 1-4 1-13 8-51 10-38 16-47 11-26 6-11 10-2 3-5 5-13 3-6v-7l1-5-1-3 4-1 8-15 9-13h2l2-4 9-6 5-3 4-3-2 5-5 4-3 3-1 3 14-3 2-1h27l5 3v2l5 2 3 1 4 4 13 4 19 6h8l5 3v5l-8 3-1 23-3 6-5-2v14l3 9 3-1-1 7v9l5 5 12 11 8 7 14 12 13 12 8 7 12 11 2 1-1 7-8 30-7 27-4 2 1 7-7 19-3 2-7-8-19-19-8-7-11-10-16-12-6 2-6 8-7-1-2 8v6l4 5-2 9-1 1-7-1-6-3v-2l-6-1-3 7-2 10 5 1 8 5-3 9-2 5-5 2-2 5-1 6v8l5 4 27 18 10 8 8 8v2l4 2 1 3 4 2 4 4v18l-10 4-16 3-10 4-3 2-9 1 1 11 3 5h7l23-6 11-3h5l-1 18-8 3-2 6h-2v10l1 5 8 1 12-5 4-6 1-4h2l1-10 8-9h2l2-10 1-2 4 2 8 9 1 4-10 11-3 6-3 3-2 4-3 3-1 4 4-2 8-8 5-8h3v5l12-3 8 10 2 3v4l-8 2h-5v2l-15 3h-12l-2 10v9l12 5-1 13 19 2 1 2-6 10-6 7-7 8h-2l-2 5-11 16-11 13-18 18-14 11-10 7-16 6-18 3h-10l1 6-4 1-1 6-5 1-3 5 2 3-6-1-11 9-13 9-14 5-22 4-24 2h-43l-31-2-44-5-29-5-14-5-16-9h-4l4 10 5 13 5 11v2l4-2-2 6-4 9-3 7h-2l-2 5-3-3-4-8v-2h-2l-6-13-10-24-10-28-4-15-1-8v-19l4-11 6-11-7-25-7-23-7-28-3-15-2-21v-22h1l4 23 5 24 9 35 7 23 6 20v3l17-12h2l-11-42-8-28-5-23-5-35-4-40-1-27v-22l1-20 5-34 7-32 10-37 8-27 6-17 9-25 15-36 13-30 3-5 2-2h4l-2 6-15 32-8 20-5 12-8 20-12 36-7 23-7 27-5 21-4 24-3 28-1 28v22l2 28 3 31 6 37 10 36 7 21 4 17 2 8 16-6 13-3-4-13-4-18-7-31-4-24-2-22v-23l2-19 6-18h2l-1 40v17l4 34 5 25 9 36 3 13 3 1v-2l18-4 10-1-2-6-4-34-3-24-1-52 1-46 5-63 5-36 6-31 7-24 4-14 11-33 18-45 6-13 8-20 17-40 4-8z" />
                            <path
                                fill={colorState["Leather 3"]}
                                transform="translate(430,39)"
                                d="m0 0h10l22 6 11 7v2h2l5 10v18l-1 1-1 7-1 1v10l3 5-1 8-1 7-6 12-3 7-2 3-10 2-10 21-9 24-13 38-10 38-9 57v10l-3 7-4 14-4 6-11 33-8 28-3 21-2 28-1 77-3 1-4-1h-34l-4-35-2-16-2-27-1-24v-49l2-40 3-28 4-34 5-27 4-16 6-21 7-23 11-30 11-27 6-15 4-9 15-37 13-27v-3l-7 1-12 28-6 15-10 24-6 13-6 14-6 16-6 15-12 35-10 36-6 31-5 36-5 63-1 56 1 42 7 58 1 6-5 2-9 1-14 2v2l-4-1-7-29-9-38-4-30-1-11v-17l1-29 1-11h-2l-6 24-1 13v23l3 30 5 26 8 33 4 19-27 9h-2l-4-11-4-18-8-24-8-29-6-37-4-40-1-19v-22l1-28 4-36 5-26 6-24 7-24 5-16 9-27 6-15 6-16 7-17 11-25 11-23-5 2-3 5-11 26-6 13-12 30-6 16-12 36-7 24-10 40-5 26-4 27-1 20v22l1 27 5 48 5 32 6 25 12 44 4 14v5l-12 8-5 4h-2l-6-19-7-25-7-24-6-26-5-27v15l2 21 5 24 8 29 8 28 3 11-8 14-2 7v19l3 16 9 27 10 25 5 12 3 6v2h2l6 12 3-4h2l2-7 7-15h5l7 8-2 6-10 19-3 7v7l12 6 4 1h8l3 4-1 4-7 3-9-1-9-4-8-5 4 10v4h2l2 5-1 4-11 1-4-12-14-28-4-7-5-5-6-10-4-11 2-11 2-3h2v-8l-3-5-6-4-4-5-3-6v-2h-2l-10-16-14-20-9-12-9-6-4-4-10-3-5-4-2-4v-27l1-7-7-21-4-13-2-7-3-14-1-1-3-14-5-13-1-1v-7l4-1 5 5 5 9 7 14 3 8 3 6 2 10 5-3 3-5 8-7v-8l-1-2-2-17-2-47v-13l1-23 2-14 1-21-1-9-9-3-4-5v-5l3-5 2-9 5-10 4-3 7-2 2-10 3-9 2-13 3-12 4-23 2-11 4-8 7-22 3-10 3-7 5-15 1-6-6 2-8 8h-2v2l-8 7-12 12-14 16-6 8-5 6-4 8h-2l-1 4-9 14-8 15-6 13-8 19-7 19-2 5-3 12-5 18-3 9-2 12-3 12-2 10-2 20-1 2-1 11-1 2-1 10-3 3-6-2-3-4v-8l2-12 1-13 1-2 1-11 1-2 2-12 2-13 3-11 4-20 2-9 3-9 4-16 5-15 16-32 9-16 7-11 7-10 8-11 6-8h2v-2l4-4 1-2h2l2-4 3-3h2l2-4 5-6h2v-2l3-3h2v-2l16-14 10-8 8-6 4-4 2-6 5-5 6-4 6-2h5l5 3 14 1 5 4 4-1 5-8 4-6 1-15 7-13 7-6 8-4 13-4 7-6h24l10 5v2l3 1 4 6 2 16 4-2 6-12 7-9 8-9 8-13h2v-2l11-3 18-1z" />

                            <path fill={colorState["Leather 4"]} transform="translate(520,58)" d="m0 0v3l-9 9-1 3 14-3 2-1h27l5 3v2l5 2 3 1 4 4 13 4 19 6h8l5 3v5l-8 3-1 23-3 6-5-2v14l3 9 3-1-1 7v9l5 5 12 11 8 7 14 12 13 12 8 7 12 11 2 1-1 7-8 30-7 27-4 2 1 7-7 19-3 2-7-8-19-19-8-7-11-10-16-12-6 2-6 8-7-1-2 8v6l4 5-2 9-1 1-7-1-6-3v-2l-6-1-3 7-2 10 5 1 8 5-3 9-2 5-5 2-2 5-1 6v8l5 4 6 4-6 19-3 13h-2l-5 11-6 15-5 11v7l-3 9-2 1-2 6-8 16-8 11-9 11-10 13-6 9-5 11-3 7-3 8v7l4 1-1 5h-4l4 2v4l-7-1-11-4v-2h-9l-7-2-10-2v-11l2-9 4-15 1-7 3-9 6-23 1-7 3-7 7-24 4-14 7-29 3-9 7-27 6-24 8-30 5-19 7-28 6-21 9-34 7-23 3-11 7-24 8-30 5-20 7-22v-2l-5-1-1-2-6 12-8 31-6 23-4 13-6 21-3 9-7 24-9 35-20 80-8 27-14 55-4 17-4 14-7 25-10 34-7 25-6 24-2 9-14-1-19-1-1-7v-90l2-20 6-30 6-25 3-25 5-17 1-4 1-13 8-51 10-38 16-47 11-26 6-11 10-2 3-5 5-13 3-6v-7l1-5-1-3 4-1 8-15 9-13h2l2-4 9-6 5-3z" />
                            <path fill={colorState["Leather 5"]} transform="translate(430,39)" d="m0 0h10l22 6 11 7v2h2l5 10v18l-1 1-1 7-1 1v10l3 5-1 8-1 7-6 12-3 7-2 3-10 2-10 21-9 24-13 38-10 38-9 57v10l-3 7-4 14-4 6-11 33-8 28-3 21-2 28-1 77-3 1-4-1h-34l-4-35-2-16-2-27-1-24v-49l2-40 3-28 4-34 5-27 4-16 6-21 7-23 11-30 11-27 6-15 4-9 15-37 13-27v-3l-7 1-12 28-6 15-10 24-6 13-6 14-6 16-6 15-12 35-10 36-6 31-5 36-5 63-1 56 1 42 7 58 1 6-5 2-9 1-14 2v2l-4-1-7-29-9-38-4-30-1-11v-17l1-29 1-11 1-23 2-13 2-5 10-40 6-26 6-28 5-19 1-6h2l2-12 2-11 4-9 2-7 5-15 2-2 1-4h2l2-9 2-6h2l1-5 8-16 6-13 2-7h2l1-6 3-7 1-2v-14l-1-9 2 1 2 16 4-2 6-12 7-9 8-9 8-13h2v-2l11-3 18-1z" />
                            <path fill={colorState["Leather 6"]} transform="translate(740,498)" d="m0 0 4 1-3 2-5 13-8 18-3 8h12l1 1v8l-9 15-24 36-7 11-6 8-9 15-3 12-8 9-2 4h-2v2h-2v2l-2 1-10 1-5 4h-2v2h-2l-2 4-8 11-2 5h-2l-1 4-10 11-7 8-9 8-12 18-8 16-9 14-3 6-1 12-5 7h-2v2l-11 8-23 12-12 6-9 3-13 4-19 3-12 2-14 2-15 1-4 1h-60l-4-1-18-2-25-7-13-8-8-7v-2h-2l-6-8-6-11-4-3-13-1-7-4-10 1-4-2 1-2 9-1-1-8h-2l-4-11v-3l5 2 6 4 9 3h6l7-3-1-5-2-1h-7l-9-3-8-5v-7l9-19 6-11-2-5-4-4h-6l-3 1-6-13-6-15-2-4v-4l4-1 16 9 14 5 37 6 36 4 31 2h43l24-2 26-5 11-5 16-11 7-6 5 1-2-3 4-5 4-1 1-5 3-2 2 1 3 5 5 5 9 8 8 10 2 6h2l6 13 4 17 1 15v14l-1 11-5 18-4 9 5-4 10-14 9-14 8-16 7-10 4-5-4-3v-3l7 1 10-8 3-1 2-5 8-9 3-5 3-7 3-4h2l2-5 4-5 10-5h8l10-11 5-7 2-10 11-17 10-15 11-16 7-11 10-16 7-12v-4l-13-1-4 2 2-5 4-8 7-15 5-11z" />
                            <path fill={colorState["Leather 7"]} transform="translate(231,117)" d="m0 0h5l5 3 14 1 4 5-1 8-6 15-4 9-4 10-9 4-1 2-6 2-1 3-3 3-2 4v9l3 10 5 1-4 17-4 10-6 22-2 6-5 19-3 15-2 7-3 23-2 8-3 28-2 13-1 9v48l2 19 1 2 1 25 2 21 5 24 8 29 8 28 3 11-8 14-2 7v19l3 16 9 27 10 25 5 12 3 6v2h2l6 12 3-4h2l2-7 7-15h5l7 8-2 6-10 19-3 7v7l12 6 4 1h8l3 4-1 4-7 3-9-1-9-4-8-5 4 10v4h2l2 5-1 4-11 1-4-12-14-28-4-7-5-5-6-10-4-11 2-11 2-3h2v-8l-3-5-6-4-4-5-3-6v-2h-2l-10-16-14-20-9-12-9-6-4-4-10-3-5-4-2-4v-27l1-7-7-21-4-13-2-7-3-14-1-1-3-14-5-13-1-1v-7l4-1 5 5 5 9 7 14 3 8 3 6 2 10 5-3 3-5 8-7v-8l-1-2-2-17-2-47v-13l1-23 2-14 1-21-1-9-9-3-4-5v-5l3-5 2-9 5-10 4-3 7-2 2-10 3-9 2-13 3-12 4-23 2-11 4-8 7-22 3-10 3-7 5-15 1-6-6 2-8 8h-2v2l-8 7-12 12-14 16-6 8-5 6-4 8h-2l-1 4-9 14-8 15-6 13-8 19-7 19-2 5-3 12-5 18-3 9-2 12-3 12-2 10-2 20-1 2-1 11-1 2-1 10-3 3-6-2-3-4v-8l2-12 1-13 1-2 1-11 1-2 2-12 2-13 3-11 4-20 2-9 3-9 4-16 5-15 16-32 9-16 7-11 7-10 8-11 6-8h2v-2l4-4 1-2h2l2-4 3-3h2l2-4 5-6h2v-2l3-3h2v-2l16-14 10-8 8-6 4-4 2-6 5-5 6-4z" />
                            <path fill={colorState["Leather 8"]} transform="translate(520,58)" d="m0 0v3l-9 9-1 3 14-3 2-1h17l2 1-3 12-4 13-6 25-3 9-3 11-9 32-3 9-7 24-9 35-20 80-8 27-14 55-4 17-4 14-7 25-10 34-7 25-6 24-2 9-14-1-19-1-1-7v-90l2-20 6-30 6-25 3-25 5-17 1-4 1-13 8-51 10-38 16-47 11-26 6-11 10-2 3-5 5-13 3-6v-7l1-5-1-3 4-1 8-15 9-13h2l2-4 9-6 5-3z" />
                            <path fill={colorState["Laces"]} transform="translate(536,51)" d="m0 0 23 1 9 3 10 7 6 5 13 3 16 5 5 3h7l1-1 19-1 7 3 9 6 8 3 8 7 1 5-1 7 10-5 9 4 4 4v11l6-1 5-1 9 6 2 2 1 11h13l8 7 1 1v13l12-1 6 3v2l4 2 1 2v9h9l9 8v12h11l3 2v2l3 1 5 8 9 7 6 9 5 5 4 5 4 10 6 8 2 4v13l-1 1v8l11 9 9 9-1 5-8 3-2 8-4 5-6 34-1 1-4 21-2 9-1 1-4 21-1 2-1 10-1 1-4 24-2 11-1 1-1 9-2 8-3 15-3 11-4 23-3 11-3 17-3 12-3 8-1 1h-10l-4-3 2-13 2-9 1-1 2-11 2-9 1-1 1-9 3-12 2-15 1-2 1-10 1-1 4-21 3-10 1-9 2-10 1-7 1-1 1-8 1-1 3-16 3-15 3-9 2-12 1-2 2-14v-14l-6-3v-2h-2v-2l-4-2 5-6 11-7 8-9-1-4-12-10-12-8-15-6-24-6-13-5-5-4-4-1 3 6-1 5-6 5-6 1-3-3-5-2-3-3h-8l-2-2v-22l-4-2-14-12-14-11-15-13-10-9-11-9-13-12-20-18-2-1-6 11-4-1-4-4v-3l-4 1-3-4-1-4v-10l1-4 5 2 2-6 1-23 6-3h3v-5l-5-2h-8l-19-6-13-4-4-3v-2l-4-1-4-2-3-3-7-1h-22l-9 3h-7l1-4h2l2-4 4-2 2-6 3-3 4-2z" />
                            <path fill={colorState["Web"]} transform="translate(618,146)" d="m0 0 5 3 15 14 8 7 10 9 11 9 12 11 22 18 13 11 8 6 1 6v16l1 1h8l4 4 5 2 2 2 6-1 6-5-1-6-1-4 5 1 6 4 14 5 21 5 15 6 16 11 10 9-1 4-7 8-10 7-6 5 3 3v2l2 1-5 2-1 1v16l-3 8-6 7-9 5-7 20-4 14-5 12-7 18-3 9v29l1 5-1 2-1 11-7 11-7 5-7 3h-5l1-2 13-6h2l2-6 5-7h2v-15l-2-3 1-13-3-4v-2h2l-1-2h-3l-10-16-7-12-5-12-5-8-2-1 1-5 1-6-5-8-8-5h-11l-8 3-5-1-8-5-2-4-10-7-5-5-13-10-12-7-11-4h-8l-3-1v14l-2 1-34-16-16-8-11-5 3-2 2-9-4-5 1-11 2-4 7 2 2-5 6-5 4-1 13 10 13 11 7 7 8 7 21 21 5-12 3-8v-7l3-2 10-39 7-25-4-2-16-15-11-9-7-7-11-9-12-11-8-7-5-4-1-2v-9l1-6h-3l1-2h4l3 5 5 3 2-5z" />
                            <path fill={colorState["Wrist"]} transform="translate(336,568)" d="m0 0h43l9 1 22 1 32 7 16 4 16 8 11 9 7 6 3 5v2h2l6 15 1 10-5 10-8 9-15 9h-2l-1-4-5 1-11-2-5 1-1-6-8 2h-22l-13 2-9 1v3l-7-1v2l-11 3-4 2h-10l-3 1-7 1-11 1-2 1-14-1-3-4v-3h-3l-1-3-11-5-1-1-8-1-3-3-7-3-12-5-8-1-7 3v6l-6-1-1-1h-9l-6 4-3 3-3-6-4-15v-16l4-10 9-10 13-9 13-6 12-3 13-4 13-1 15-6 1-1z" />
                            <path fill={colorState["Binding"]} transform="translate(426,42)" d="m0 0 11 1 10 4 6 4 1 3h2l2 10-1 1h-13l-21-5-17-1-2 1-12 28-6 15-10 24-6 13-6 14-6 16-6 15-12 35-10 36-6 31-5 36-5 63-1 56 1 42 7 58 1 6-5 2-9 1-14 2v2l-4-1-7-29-9-38-4-30-1-11v-17l1-29 1-11 1-23 2-13 2-5 10-40 6-26 6-28 5-19 1-6h2l2-12 2-11 4-9 2-7 5-15 2-2 1-4h2l2-9 2-6h2l1-5 8-16 6-13 2-7h2l1-6 3-7 1-2v-14l-1-9 2 1 2 16 4-2 6-12 7-9 8-9 8-13h2v-2l14-2z" />
                            <path fill={colorState["Web"]} transform="translate(555,324)" d="m0 0 6 2 28 13 60 28 9 4 1 2 6 1 15 6 7 4 4 9v2h2v2l12 3 8 11 6 11 1 7-2 3h7l2-5 4-6 4 4 9 15 2 9-4 11-7 9-7 7-2 3-2 6-9 11-6 8-3 10-4 6-5 5h-10l-2-2 7-4h2l2-5 6-8 2-5-1-13-7-8-1-1-1-13-3-8-6-9h-3l-6 11-8 8 2 9 1 1v16l-2-4-9-12-13 3 1-6h-3l-2 5-9 10-4 4-3-1 2-6 3-1 2-6 3-1 2-6 10-11-2-5-7-8-3-2-3 12-9 9-2 10h-2l-1 6-4 5-12 5h-5l-4-4-1-9 1-4h2l1-6 2-2 6-1 2-18-16 4-23 6h-7l-4-6v-11l11-3 7-4 7-2 13-2 8-3h2l-1-18-7-6-7-8-9-9-17-12-14-9-8-6-1-1v-8l2-9 3-4h4l1-5 3-9z" />
                            <path fill={colorState["Web"]} transform="translate(613,76)" d="m0 0 5 2h7l1-1 19-1 7 3 9 6 8 3 8 7 1 5-1 7 10-5 9 4 4 4v11l6-1 5-1 9 6 2 2 1 11h13l8 7 1 1v13l12-1 6 3v2l4 2 1 2v9h9l9 8v12h11l3 2v2l3 1 5 9-4-1-2-5-3-3v-2l-3-1h-7l-1 6-5 6v12l6 3 7-6h2l2-4h4l-1 5-6 8-1 9 2 3h6l8-5 4-4h2v9l-5 6-2 9-4 1-6-3-21-6-9-2-5-2-2-8v-8l-13-2-7-3-5 1-4 1-7-6-9-6-10-9-14-11-13-11-15-13-13-12-8-7-14-12-8-6-3-3-9-7v-4l10-7 4-13-1-14-12-5z" />
                            <path fill={colorState["Welting"]} transform="translate(318,69)" d="m0 0 11 1v2l4 1 3 4v5l-4 3-3 1-21 1-16 3-3 3-7 17-11 25-12 30-6 16-12 36-7 24-10 40-5 26-4 27-1 20v22l1 27 5 48 5 32 6 25 12 44 4 14v5l-12 8-5 4h-2l-6-19-7-25-7-24-6-26-5-27-2-10-2-9-1-12v-48l2-18 2-12 3-26 2-10 3-19 3-12 5-21 2-9 3-9 4-14 4-10 4-15 1-2h-5l-3-8-1-3v-9l4-7 6-5h3l1-3 6-3h3l1-5 3-8 6-14 4-10v-6h5l10-15 1-15 7-13 7-6 8-4 12-2z" />
                            <path fill={colorState["Home Plate"]} transform="translate(599,166)" d="m0 0 4 1 5 5 12 11 8 7 14 12 13 12 8 7 12 11 2 1-1 7-8 30-7 27-4 2 1 7-7 19-3 2-7-8-19-19-8-7-11-10-16-12-6 2-5 6-3 1 3-16 7-37 4-18 5-21z" />
                            <path fill={colorState["Laces"]} transform="translate(548,301)" d="m0 0 4 1 2 1v2l6 2 16 8 25 12 15 7 10 4v-11l1-3h11l13 5 14 9 10 8 4 3v2l5 2 7 6 1 3 9 5 9-2 2-1h11l8 5 4 5 2 4-1 6-2 5 4 2 14 28 8 13 4 6 3-1v3h-2l4 6v6l-1 6 2 4-1 15h-2l-2 4-5 9-15 7h-7l1-7 5-14 12-21-6-11-13-20-3-9-2 6-7 11-2 1h-6l2-4-1-7-6-11-6-8-1-3-9-1-3-2v-2h-2l-4-8v-3l-6-2-11-5-8-3h-4v-3l-5-1-28-13-14-7-65-30-3-1 1-10 3-7z" />
                            <path fill={colorState["Laces"]} transform="translate(740,498)" d="m0 0 4 1-3 2-5 13-8 18-3 8h12l1 1v8l-9 15-24 36-7 11-6 8-9 15-3 12-8 9-2 4h-2v2h-2v2l-2 1-10 1-5 4h-2v2h-2l-2 4-8 11-2 5h-2l-1 4-10 11-7 8-9 8-12 18-8 16-9 14-3 6-1 12-5 7h-2v2l-11 8-23 12-12 6-9 3-13 4-19 3-12 2-14 2-15 1-4 1h-60l-4-1-18-2-25-7-13-8-8-7v-2h-2l-6-8-6-11-4-3-13-1-7-4-10 1-4-2 1-2 9-1-1-8h-2l-4-11v-3l5 2 6 4 9 3h10l4 9 7 14 11 12 7 6 11 7 14 3 4 1h6v2h8l4 1 9 1h13l6 1h11l8-1 39-3 26-4 12-2 12-3 14-3 10-4 8-6 4-1v-2l5-3 16-6 10-8 10-14 9-14 8-16 7-10 4-5-4-3v-3l7 1 10-8 3-1 2-5 8-9 3-5 3-7 3-4h2l2-5 4-5 10-5h8l10-11 5-7 2-10 11-17 10-15 11-16 7-11 10-16 7-12v-4l-13-1-4 2 2-5 4-8 7-15 5-11z" />
                            <path fill={colorState["Logo Color"]} transform="translate(450,705)" d="m0 0 4 1 24 16 10 6 26 13 4 16v6l-5 4-25 9-21 6-1 3 2 9v5l-12 5-5 1h-8l-2-1-3-15-13 2-2-6-2-15 13-3-1-11-7-39v-5l3-2 18-4z" />
                            <path fill={colorState["Laces"]} transform="translate(231,117)" d="m0 0h5l3 2 3 6 2 1v7l-6 10-3 11h-2l-1 3h-17l-6-1v2l-10 7-11 9-8 9-5 3-4 6-6 5-7 8-10 12-9 13-2 4-3 3-12 20-1 4h-2l-3 10h-2l-1 5-4 8-4 9-2 6-3 10-3 6-3 12-3 7-5 17-4 22h-2l-2 19-2 6-2 19-2 14-1 1-2 10-7-1-2-2v-8l2-12 1-13 1-2 1-11 1-2 2-12 2-13 3-11 4-20 2-9 3-9 4-16 5-15 16-32 9-16 7-11 7-10 8-11 6-8h2v-2l4-4 1-2h2l2-4 3-3h2l2-4 5-6h2v-2l3-3h2v-2l16-14 10-8 8-6 4-4 2-6 5-5 6-4z" />
                            <path fill={colorState["Logo Color"]} transform="translate(369,714)" d="m0 0h24l3 9 7 37 2 10h13l1 1 3 20-13 2 1 14-1 2-3 1h-20l-3-4-2-13-48-3-5-3-2-9-1-5v-7l13-15 9-10 9-11 10-13z" />
                            <path fill={colorState["Laces"]} transform="translate(604,372)" d="m0 0 5 1 7 8 12 18 6 12 3 7 4-1 5-8 1-1h6l4 4 2 9v7l-5 6-14 7-4 11-2 7-9 9-2 10h-2l-1 6-4 5-12 5h-5l-4-4-1-9 1-4h2l1-6 2-2 6-1 2-18-16 4-23 6h-7l-4-6v-11l11-3 7-4 7-2 13-2 1-1 10-2v-12l-2-15-6-11-1-1v-11z" />
                            <path fill={colorState["Logo Color"]} transform="translate(758,319)" d="m0 0 5 5 9 10 9 11 9 10 4 2-1 6-10 30-9 25-5 13-1 5 1 10-4-4v-2h2l-1-2h-3l-10-16-7-12-5-12-5-8-2-1 1-5 3-3 3-9 2-11h2l3-12z" />
                            <path fill={colorState["Laces"]} transform="translate(682,448)" d="m0 0 4 1 7 10 2 7 1 13 7 7 2 8v7l-5 10-6 8-11 6-6 8-5 4-9 3h-16l-8-2v-10l1-3-5-1-8-4v-9l2-8 1-2 12-1 9-2h6v-2l14-2-1-16-3-8 2-4 7-7z" />
                            <path fill="white" transform="translate(546,71)" d="m0 0 3 3h5l-2 9-6 20-8 32-7 23-4 15-5 17-8 29-6 22-7 24-8 34-3 10-7 28-8 30-7 28-3 9-3 10h-2v-4h2l1-11h-2l2-6-3 3-4 15h-1l1-12 13-52 10-35 25-100 7-24 4-15 3-9 7-24 5-18 4-16 6-22z" />
                            <path fill={colorState["Leather 6"]} transform="translate(638,614)" d="m0 0 5 2 8 6 5 6v17l-3 10-7 11-7 10-4 4-7 10-8 10-9 7-6 4-4-2-8-8-8-7 6-12 10-13 13-19 7-10 8-12z" />
                            <path fill={colorState["Web"]} transform="translate(585,270)" d="m0 0 5 2 16 13 10 9 15 14 17 17-1 3-9-3h-8l-3-1v14l-2 1-34-16-16-8-11-5 3-2 2-9-4-5 1-11 2-4 7 2 2-5 6-5z" />
                            <path fill={colorState["Laces"]} transform="translate(220,679)" d="m0 0 3 1 4 13 2 9 3-1 1 3 4 2v2h2l4 8v2h2l6 12 3-4h2l2-7 7-15h5l7 8-2 6-10 19-3 7v7l12 6 4 1h8l3 4-1 4-7 3-9-1-9-4-8-5 4 10v4h2l2 5-1 4-11 1-4-12-14-28-4-7-5-5-6-10-4-11 2-11 2-3 3-1v-9l-3-6z" />
                            <path fill="white" transform="translate(403,61)" d="m0 0h3v3l2 1h-2l-1 7-9 19-10 25-1 3h-2l-1 7-9 21-10 25-9 24-7 20-3 9-3 14-2 4-6 26-3 14-5 34-1 10-3 33-2 53v23l1 32 1 22-2 2-2-22v8 3l1 13 1 5-1 1 1 4v8h-2l-3-18-1-10-1-52 1-46 5-63 5-36 6-31 7-24 4-14 11-33 18-45 6-13 8-20 17-40z" />
                            <path fill={colorState["Leather 2"]} transform="translate(553,369)" d="m0 0 4 1 18 12 10 8 8 8v2l4 2 1 3 4 2 4 4v18l-10 4-13 2h-8l-8-8-7-8-7-7-7-8-2-4 7-27z" />
                            <path fill={colorState["Leather 2"]} transform="translate(723,540)" d="m0 0 13 1 1 5-9 16-10 15-7 11-7 10-12 18-11 17-3 12-12 14-3 3h-8l-5 2 6-12 1-1 1-10 4 1 8-17 9-17 6-3v-7l5-9 3-5 1-2h2l2-7 6-8 4-8h2l2-5 1-3h2v-3h2l1-5z" />
                            <path fill={colorState["Leather 2"]} transform="translate(460,143)" d="m0 0h7l-10 27-16 47-13 42-12 42-7 22-2 7h-2l1-13 8-51 10-38 16-47 11-26 6-11z" />
                            {/* <path fill={colorState["Laces"]} transform="translate(175,402)" d="m0 0 13 4 1 1v8l-3 14-3 3-9 4 1 5 3 14 4 11 5 13 1 9-4 9-3 1-3-2-4-11v-5l-2-1v-4h-2l-6-17-2-9-1-20h-2v-8l1-3h2v-6l4-4 5-3h2v-2z" /> */}
                            <path fill={colorState["Logo Color"]} transform="translate(559,795)" d="m0 0 2 1-8 7-15 8-24 12-5 1v2l-13 4-19 3-12 2-14 2-15 1-4 1h-60l-4-1-18-2-25-7-13-8-5-5v-2l5 2 11 6 16 5 15 3 28 2h44l17-2 17-1 24-4 10-2 16-5 13-4 12-5 11-7 10-4z" />
                            <path fill={colorState["Logo Color"]} transform="translate(646,633)" d="m0 0 4 1 1 1v5l-6 9-3 7h2l-1 6-4 6-5 1-4 8 1 4-7 8-4 2-11 13-4-2v-29l7-9 6 3 7 5 6-10h-2l-10-10 2-4 4-5z" />
                            <path fill={colorState["Laces"]} transform="translate(426,42)" d="m0 0 11 1 10 4 6 4 1 3h2l2 10-1 1h-13l-21-5-17-1-3 2-13 4-3 2h-3l-1-4 3-4 3-7 3-5h2v-2l14-2z" />
                            <path fill="gray" transform="translate(292,89)" d="m0 0h4l-2 6-15 32-8 20-5 12-8 20-12 36-7 23-7 27-5 21-4 24-3 28h-1v-12l1-16-2 7-1-4 4-22 5-23 10-37 8-27 6-17 9-25 15-36 13-30 3-5z" />
                            <path fill={colorState["Laces"]} transform="translate(318,69)" d="m0 0 11 1v2l4 1 3 4v5l-4 3-3 1-21 1-16 3-6 5-8 7-3 1v-7l3-9 6-8 8-5 8-3z" />
                            <path fill={colorState["Laces"]} transform="translate(635,78)" d="m0 0h13l16 8 5 2 2 2v3l3 1 1 5-6 11-7 5h-8l-6-4-6-12v-14l-7-6z" />
                            <path fill={colorState["Laces"]} transform="translate(474,101)" d="m0 0 4 2 2 5-1 6-1 7-6 12-3 7-2 3-9 1v-8l-9-3-5-5-1-2v-11l7-3 12-1h7z" />
                            <path fill={colorState["Laces"]} transform="translate(674,546)" d="m0 0 5 1 7 7-1 10-4 11-2 2v14l3 5 4 4v5l-5 3-6-7-4-10-2-13-3-5-2-7v-6l6-9z" />
                            <path fill={colorState["Laces"]} transform="translate(255,759)" d="m0 0 5 2 6 4 9 3h10l4 9 7 14 11 12 3 3h-3l-14-14-6-4v-2l-4 2h-11l-6-3-10 1-4-2 1-2 9-1-1-8h-2l-4-11z" />
                            <path fill={colorState["Laces"]} transform="translate(346,119)" d="m0 0 2 1-8 16-8 18-4 1h-8l-4-4-1-8 3-7 10-9 9-5z" />
                            <path fill={colorState["Laces"]} transform="translate(686,104)" d="m0 0 7 2 4 2 1 5-5 10-8 8-9 3-5-2-3-3-1-7 3-5 7-4 6-8z" />
                            <path fill={colorState["Laces"]} transform="translate(637,447)" d="m0 0 4 2 8 9 1 4-10 11-3 6-3 3-2 4-4 4-4-1-3-3 2-11 1-7 8-9h2l2-10z" />
                            <path fill={colorState[""]} transform="translate(219,407)" d="m0 0h1l4 40 4 25 1 13 7 27 3 11 3 7 5 17 1 11v7l3 1h-2v2h-2l-5-16-12-44-7-30-2-14v-7h1v-8l-3-28z" />
                            <path fill={colorState["Laces"]} transform="translate(707,121)" d="m0 0 6 1 6 2 1 6-5 10-8 7-4 2-6-1-4-5v-6l3-5 5-5 2-4z" />
                            <path fill={colorState["Laces"]} transform="translate(731,138)" d="m0 0 7 1 3 3 2 4-1 8-5 5-8 7-6 1-5-5v-9l8-10 1-3z" />
                            <path fill={colorState[""]} transform="translate(814,317)" d="m0 0 7 2-4 2-2 2v16l-3 8-6 7-9 5-7 20-4 14-5 12-7 18-3 9v29l1 5-1 2-1 11-7 11-7 5-7 3h-5l1-2 13-6h2l2-6 5-7h2v-15l-2-3 1-7v-12l-1-8 5-12 6-15 16-48 11-6 4-5 3-7v-10l-1-5z" />
                            <path fill={colorState["Laces"]} transform="translate(750,160)" d="m0 0h11l2 1v2l3 1-1 7-1 3h-2l-2 5-8 6-7 1-4-4v-9l3-5 5-4z" />
                            <path fill={colorState["Laces"]} transform="translate(771,177)" d="m0 0h5l4 3v2l3 1v2h2l-1 4-6 8-8 7h-6l-3-5 1-11 6-7 1-3z" />
                            <path fill={colorState["Laces"]} transform="translate(242,169)" d="m0 0 2 1-3 10-3 7-6 17-5 1-4-9-1-2v-7l2-4 1-4 6-5 10-4z" />
                            <path fill={colorState["Leather 6"]} transform="translate(372,744)" d="m0 0h2l4 27h-15l-11-1 2-5 9-10z" />
                            <path fill={colorState["Leather 6"]} transform="translate(457,734)" d="m0 0 4 2 15 10 11 6 1 2-18 6-8 1-2-9z" />
                            <path fill={colorState["Logo Color"]} transform="translate(271,728)" d="m0 0h3l5 12 4 13v5l-12-1-6-3-1-5v-7z" />
                        </svg>
                    </div>



                    <div className="mb-auto pt-10">

                        <div className="grid grid-cols-3" >

                            <div onClick={() => { base() }} className={`bg-gray-200 p-5 shadow-2xl hover:bg-gray-400 cursor-pointer ${show1 === "block" ? "bg-yellow-500 hover:bg-yellow-500" : ""} `} >
                                <h2>Base</h2>
                                <p>2 remaining </p>
                            </div>

                            <div onClick={() => { color() }} className={`bg-gray-200 p-5 shadow-2xl hover:bg-gray-400 cursor-pointer ${show2 === "block" ? "bg-yellow-500 hover:bg-yellow-500" : ""} `} >
                                <h2>Colors</h2>
                                <p>18 remaining </p>
                            </div>

                            <div onClick={() => { personalize() }} className={`bg-gray-200 p-5 shadow-2xl hover:bg-gray-400 cursor-pointer ${show3 === "block" ? "bg-yellow-500 hover:bg-yellow-500" : ""} `} >
                                <h2>Personalize</h2>
                                <p>1 remaining </p>
                            </div>

                        </div>

                        <div className={`relative ${show1}`}>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={false}
                                speed={800}
                                modules={[Navigation]}
                                className="mySwiper  "
                                onSwiper={(swiper) => {
                                    swiperRef1.current = swiper;
                                }}
                                allowTouchMove={false}
                            >
                                <SwiperSlide className="overflow-hidden flex justify-center items-center text-center bg-gray-50">

                                    <div className="flex justify-between bg-gray-300 p-3">
                                        <button
                                            // onClick={() => prevFun1()}
                                            className="flex items-center text-sky-500 text-[16px] font-semibold"
                                        >
                                            {/* <FaChevronLeft /> Previous */}
                                        </button>
                                        <button
                                            onClick={() => nextFun1()}
                                            className="flex items-center text-sky-500 text-[16px] font-semibold"
                                        >
                                            Next <FaChevronRight />
                                        </button>
                                    </div>

                                    <div className="">
                                        <div className="flex justify-between items-center px-10 pt-10 ">
                                            <h2 className="text-2xl font-semibold">SIZE</h2>
                                            <h2 className="text-gray-600">help</h2>
                                        </div>
                                        <div className="shadow-xl">
                                            <ul>
                                                {
                                                    sizeArray?.map((item, i) => (
                                                        <li key={i} className="text-left flex items-center border-b px-10 py-5">
                                                            <input onClick={() => setSize(item)} type="radio" name="radio-4" className="radio radio-accent mr-5" defaultChecked />
                                                            {item}&quot;
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                </SwiperSlide>

                                <SwiperSlide className="overflow-hidden flex justify-center items-center text-center">

                                    <div className="flex justify-between bg-gray-300 p-3">
                                        <button
                                            onClick={() => prevFun1()}
                                            className="flex items-center text-sky-500 text-[16px] font-semibold"
                                        >
                                            <FaChevronLeft /> Previous
                                        </button>

                                        <button
                                            onClick={() => nextFun1()}
                                            className="flex items-center text-sky-500 text-[16px] font-semibold"
                                        >
                                            Next <FaChevronRight />
                                        </button>
                                    </div>

                                    <div className=" ">
                                        <div className="flex flex-col justify-center items-center">
                                            <h2 className="text-2xl pt-5"> Comming Soon </h2>
                                        </div>
                                    </div>

                                </SwiperSlide>

                            </Swiper>
                        </div>

                        <div className={`relative ${show2}`}>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={false}
                                speed={800}
                                modules={[Navigation]}
                                className="mySwiper  "
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                allowTouchMove={false}
                            >
                                {
                                    glovesColorFieldName.map((item, i) => (
                                        <SwiperSlide key={item} className="overflow-hidden flex justify-center items-center text-center">

                                            <div className="flex justify-between bg-gray-300 p-3 ">

                                                {
                                                    i === 0 ? <p></p> : <button
                                                        onClick={() => prevFun(i)}
                                                        className="flex items-center text-sky-500 text-[16px] font-semibold"
                                                    >
                                                        <FaChevronLeft /> Previous
                                                    </button>

                                                }

                                                {
                                                    i + 1 === glovesColorFieldName.length ? <p></p> :
                                                        <button
                                                            onClick={() => nextFun(i)}
                                                            className="flex items-center text-sky-500 text-[16px] font-semibold"
                                                        >
                                                            Next <FaChevronRight />
                                                        </button>
                                                }
                                            </div>
                                            <h2 className="text-left text-2xl font-semibold bg-gray-100 p-3 ">{item}</h2>
                                            <div key={item} className="grid grid-cols-5 gap-5  h-[400px] bg-white p-4 ">
                                                {colors.map(({ name, value }) => (
                                                    <div
                                                        key={name}
                                                        onClick={() => handleColor(value)}
                                                        className="flex flex-col justify-center items-center  "
                                                    >
                                                        <div
                                                            style={{ backgroundColor: value }}
                                                            className={`h-12 shadow-lg rounded-lg border w-full`}
                                                        ></div>
                                                        <h2>
                                                            {name}
                                                        </h2>
                                                    </div>
                                                ))}
                                            </div>
                                        </SwiperSlide>
                                    ))}
                            </Swiper>
                        </div>

                        <div className={`relative ${show3}`}>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={false}
                                speed={800}
                                modules={[Navigation]}
                                className="mySwiper  "
                                onSwiper={(swiper) => {
                                    swiperRef3.current = swiper;
                                }}
                                allowTouchMove={false}
                            >
                                <SwiperSlide className="overflow-hidden flex justify-center items-center text-center">

                                    <div className="flex justify-between bg-gray-300 p-3">
                                        <p></p>

                                        <button
                                            onClick={() => nextFun3()}
                                            className="flex items-center text-sky-500 text-[16px] font-semibold"
                                        >
                                            Next <FaChevronRight />
                                        </button>
                                    </div>

                                    <div className=" ">
                                        <h2 className="text-left px-10 py-5 text-2xl font-semibold bg-gray-100">Thumb Logo/Graphic</h2>

                                        <div className="shadow-xl bg-gray-50">
                                            <ul className="max-h-[450px] overflow-y-auto" >
                                                {
                                                    ThumbLogoData?.map((item, i) => (
                                                        <li key={i} className="text-left flex  items-center border-b px-10 py-5">
                                                            <input onClick={() => { setLogo(item) }} type="radio" name="radio-4" className="radio radio-accent mr-5" defaultChecked />
                                                            <div>
                                                                <p className="text-xl">{item.name}</p>
                                                                <p className="opacity-70">{item?.description}</p>
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                </SwiperSlide>


                                <SwiperSlide className="overflow-hidden flex justify-center items-center text-center">

                                    <div className="flex justify-between bg-gray-300 p-3">

                                        <button
                                            onClick={() => prevFun3()}
                                            className="flex items-center text-sky-500 text-[16px] font-semibold"
                                        >
                                            <FaChevronLeft /> Previous
                                        </button>



                                        <button
                                            onClick={() => nextFun3()}
                                            className="flex items-center text-sky-500 text-[16px] font-semibold"
                                        >
                                            Next <FaChevronRight />
                                        </button>


                                    </div>

                                    <div className=" ">
                                        <div className="flex flex-col justify-center items-center">
                                            <h2>3333333333333333 hellowwwwwwwwwwwwwwwwww   222222222222222</h2>

                                        </div>
                                    </div>

                                </SwiperSlide>

                            </Swiper>
                        </div>

                        <div>
                            <button
                                onClick={() => getGlovsData()}
                                className={`bg-gray-100 mt-3 px-16 py-3 text-xl font-light rounded-md ${isButtonDisabled ? 'cursor-not-allowed' : ''}`}
                                disabled={isButtonDisabled} 
                            >
                                Add To Cart
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pro44;


