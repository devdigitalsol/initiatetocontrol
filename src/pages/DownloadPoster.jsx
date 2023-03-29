import SANOFILOGO from "./../assets/sanofi_logo.svg";
import BOTTOM from "./../assets/bottom.svg";
import HAND from "./../assets/hand12.svg";
import CIRCLE from "./../assets/circleFrame.svg";
import html2canvas from "html2canvas";
import { useContext, useEffect } from "react";
import { AppContext } from "../context";
import { useNavigate } from "react-router-dom/dist";
import { MdOutlineRefresh, MdOutlineFileDownload } from "react-icons/md";
const DownloadPoster = () => {
  const navigate = useNavigate();
  const { docInfo, setIsLoading } = useContext(AppContext);
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
        // uploadData(myImage);
        const link = document.createElement("a");
        link.href = myImage;
        link.target = "_blank";
        link.setAttribute("download", "image.jpeg");
        document.body.appendChild(link);
        link.click();
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
        alert("oops, something went wrong!", error);
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
            <div className="text-theme-blue text-lg px-2 w-full font-semibold block leading-5 pb-1 capitalize">
              {docInfo?.fullName}
            </div>
            <div className="text-sm px-2 w-full text-slate-600 truncate block">
              {docInfo?.speciality}
            </div>
            <div className="text-sm px-2 w-full text-slate-600 truncate block">
              {docInfo?.place}
            </div>
          </div>
        </div>
        <img src={BOTTOM} alt="bottom" width={"100%"} className="w-full" />
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
