import SANOFILOGO from "./../assets/sanofi_logo.svg";
import BOTTOM from "./../assets/bottom.svg";
import CONTENT from "./../assets/thumbs/Content.png";
import HAND from "./../assets/hand12.svg";
import CIRCLE from "./../assets/circleFrame.svg";
import REMARK from "./../assets/thumbs/Remarks.png";
import CODE from "./../assets/thumbs/code.png";
import CONTENTHINDI from "./../assets/thumbs/Content_Hindi.png";
import html2canvas from "html2canvas";
import { useContext, useEffect } from "react";
import { AppContext } from "../context";
import { useNavigate } from "react-router-dom/dist";
import { MdOutlineRefresh, MdOutlineFileDownload } from "react-icons/md";
import axios from "axios";
const DownloadPoster = () => {
  const navigate = useNavigate();
  const { user, docInfo, setIsLoading } = useContext(AppContext);
  const { templateData, setTemplateData } = useContext(AppContext);
  console.log(templateData, "templateData");

  useEffect(() => {
    if (!docInfo) {
      navigate("/");
    }
  }, []);

  const reloadPage = () => {
    window.location.reload();
  };

  const downloadImage = () => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    html2canvas(document.getElementById("fullImg"), {
      allowTaint: true,
      useCORS: true,
      logging: true,
      scrollX: 0,
      scrollY: -window.scrollY,
      onrendered: function (canvas) {
        document.body.appendChild(canvas);
        window.scrollTo(0, 0);
      },
    })
      .then((canvas) => {
        var myImage = canvas.toDataURL("image/jpeg", 1);
        uploadData(myImage);
        // const link = document.createElement("a");
        // link.href = myImage;
        // link.target = "_blank";
        // link.setAttribute("download", "image.jpeg");
        // document.body.appendChild(link);
        // link.click();
        // setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
        alert("oops, something went wrong!", error);
      });
  };

  const uploadData = async (img) => {
    const data = {
      emp_id: user?.emp_id,
      emp_name: user?.emp_name,
      emp_email: user?.emp_email,
      emp_contact: user?.emp_contact,
      role: user?.role,
      hq: user?.hq,
      manager_emp_id: user?.manager_emp_id,
      am: user?.am,
      rbm: user?.rbm,
      doctor_name: docInfo?.fullName,
      doctor_speciality: docInfo?.speciality,
      doctor_place: docInfo?.place,
      template: img,
    };

    await axios
      .post("insert.php", data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const link = document.createElement("a");
          link.href = `https://besafebesmart.in/initiatetocontrol/${response.data.path}`;
          link.target = "_blank";
          link.setAttribute("download", "image.jpeg");
          document.body.appendChild(link);
          link.click();
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };
  return (
    <div className="grow flex flex-col items-center p-4 gap-4">
      <div
        id="fullImg"
        className="relative w-[310px] mx-auto bg-white flex flex-col border-4 border-theme_green-500 items-center justify-start"
      >
        <div className="flex w-full items-center justify-end px-4 mt-4">
          <img src={SANOFILOGO} alt="sanofi" className="w-16" />
        </div>

        {templateData.poster_name && templateData.poster_name === "temp1" && (
          <>
            <div className="flex items-center justify-center   w-[280px] mx-auto  ">
              <div className="">
                <div className="mx-auto w-[90px]   relative">
                  <img src={CIRCLE} alt="sanofi" />
                  <img
                    src={docInfo?.photo}
                    className="rounded-full absolute top-[13px] left-[1px] w-[78px]"
                    alt="doctor"
                  />
                </div>
              </div>
              <div className=" mt-6  ">
                <div className="text-purple-900 text-lg px-1 w-full ml-1 font-bold block leading-5 pb-1 capitalize">
                  {docInfo?.fullName}
                </div>
                <div className="w-full h-[1px] bg-theme_purple-800"></div>
                <div className="text-sm px-1 w-full ml-1 text-gray-900 truncate block font-[500] ">
                  {docInfo?.speciality}
                </div>
                <div className="text-sm px-1 w-full ml-1 text-gray-900 truncate block font-[500]">
                  {docInfo?.place}
                </div>
              </div>
            </div>
            <div className="p-4">
              <img
                src={CONTENT}
                alt="bottom"
                width={"100%"}
                className="w-full"
              />
            </div>
            <div className="p-4 relative">
              <img
                src={REMARK}
                alt="bottom"
                width={"100%"}
                className="w-full"
              />
              <img
                src={CODE}
                alt="codeimg"
                className="absolute right-0 bottom-8 h-[100px] "
              />
            </div>
          </>
        )}
        {templateData.poster_name && templateData.poster_name === "temp2" && (
          <>
            <div className="flex items-center justify-center   w-[280px] mx-auto  ">
              <div className="">
                <div className="mx-auto w-[90px]   relative">
                  <img src={CIRCLE} alt="sanofi" />
                  <img
                    src={docInfo?.photo}
                    className="rounded-full absolute top-[13px] left-[1px] w-[78px]"
                    alt="doctor"
                  />
                </div>
              </div>
              <div className=" mt-6  ">
                <div className="text-purple-900 text-lg px-1 w-full ml-1 font-bold block leading-5 pb-1 capitalize">
                  {docInfo?.fullName}
                </div>
                <div className="w-full h-[1px] bg-theme_purple-800"></div>
                <div className="text-sm px-1 w-full ml-1 text-gray-900 truncate block font-[500] ">
                  {docInfo?.speciality}
                </div>
                <div className="text-sm px-1 w-full ml-1 text-gray-900 truncate block font-[500]">
                  {docInfo?.place}
                </div>
              </div>
            </div>
            <div className="p-4">
              <img
                src={CONTENTHINDI}
                alt="bottom"
                width={"100%"}
                className="w-full"
              />
            </div>
            <div className="p-4 relative">
              <img
                src={REMARK}
                alt="bottom"
                width={"100%"}
                className="w-full"
              />
              <img
                src={CODE}
                alt="codeimg"
                className="absolute right-0 bottom-8 h-[100px] "
              />
            </div>
          </>
        )}
        {templateData.poster_name && templateData.poster_name === "temp3" && (
          <>
            <div className="mx-auto w-[120px] mt-6 relative">
              <img src={CIRCLE} alt="sanofi" />
              <img
                src={docInfo?.photo}
                className="rounded-full absolute top-[13px] left-[1px] w-[108px]"
                alt="doctor"
              />
            </div>
            <div className="flex items-center justify-center gap-2 mt-6 w-[260px] mx-auto">
              <div className="w-[50px]">
                <img src={HAND} alt="sanofi" width={"50px"} height={"auto"} />
              </div>
              <div className="w-1 h-full bg-theme_green-300"></div>
              <div>
                <div className="text-purple-900 text-lg px-2 w-full font-bold block leading-5 pb-1 capitalize">
                  {docInfo?.fullName}
                </div>
                <div className="text-sm px-2 w-full text-gray-900 truncate block ">
                  {docInfo?.speciality}
                </div>
                <div className="text-sm px-2 w-full text-gray-900 truncate block ">
                  {docInfo?.place}
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={BOTTOM}
                alt="bottom"
                width={"100%"}
                className="w-full"
              />
              <img
                src={CODE}
                alt="codeimg"
                className="absolute right-0 bottom-6 h-[30%] "
              />
            </div>
          </>
        )}
      </div>
      <div className="actionBtns">
        <button onClick={reloadPage}>
          <MdOutlineRefresh />
        </button>
        <button onClick={downloadImage}>
          <MdOutlineFileDownload />
        </button>
      </div>
    </div>
  );
};
export default DownloadPoster;
