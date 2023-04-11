import { MdClose } from "react-icons/md";
const TermsModal = ({ setOpenModal }) => {
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-black/70 h-full z-30 flex items-center justify-center">
      <div className="bg-white w-[300px] rounded-lg py-4 h-[70%] relative shadow-2xl ">
        <div
          className="bg-theme_green-500 w-8 h-8 text-white text-2xl rounded-full flex items-center justify-center absolute -top-2 -right-2"
          onClick={closeModal}
        >
          <MdClose />
        </div>
        <div className="w-full h-full overflow-auto px-4">
          <div className="grid grid-cols-1 divide-y ">
            <p className=" text-slate-700 py-3">Terms and conditions:</p>
            <div className="space-y-4 py-3">
              <p className="text-sm text-slate-700">
                This initiative titled initiate to control campaign is an
                initiative by Sanofi to spread awareness among healthcare
                professionals on the importance of titrating insulin dose for
                the diabetes patient. By using the link sent by us to you which
                allows you to create an e-postcard on the "initiatetocontrol"
                (Site) using the link for initiate to control campaign, you
                hereby understand, confirm, consent and acknowledge to the
                following:
              </p>
              <ol className="space-y-2 text-sm text-slate-700 list-decimal pl-4">
                <li>
                  The Site allows you to create an e-postcard using photos which
                  can be uploaded using the link.
                </li>
                <li>
                  You confirm that you have full right to use the photos
                  uploaded by you. You are responsible for the photos and the
                  appropriateness thereof. Uploading of photographs is optional
                  and the e-postcard can be transmitted without the same. The
                  link and any e-postcard created using the link is not publicly
                  available unless you transmit the same.
                </li>
                <li>
                  You understand and agree that the e-postcard you have created
                  which includes the photo you have uploaded as a part of
                  initiatetocontrol campaign is voluntary and any transmission
                  thereof is your responsibility.
                </li>
                <li>
                  This initiative is solely being undertaken in the public
                  interest and your participation/usage of the link is
                  voluntary.
                </li>
                <li>
                  You are not permitted to transmit or share the link with any
                  other individual and only have the right to transmit the
                  e-postcard created.
                </li>
                <li>
                  The e-postcard can only be transmitted on SMS, Email and
                  WhatsApp.
                </li>
                <li>
                  Sanofi shall not be liable for improper use of the postcard
                  and/or any usage or transmission which is not in keeping with
                  the above terms.
                </li>
                <li>
                  This e-postcard and/or initiative are available for usage and
                  transmission only by registered healthcare professionals who
                  have received the link directly from Sanofi.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TermsModal;
