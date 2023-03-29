import { MdClose } from "react-icons/md";
const TermsModal = ({ setOpenModal }) => {
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-black/70 h-full z-30 flex items-center justify-center">
      <div className="bg-white w-[300px] rounded-lg py-4 h-[70%] relative shadow-lg">
        <div
          className="bg-theme_green-500 w-8 h-8 text-white text-2xl rounded-full flex items-center justify-center absolute -top-2 -right-2"
          onClick={closeModal}
        >
          <MdClose />
        </div>
        <div className="w-full h-full overflow-auto px-4">
          <h4 className="font-semibold mb-3">Terms & Conditions.</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos tenetur corporis debitis doloremque alias vel quisquam
            ipsa error laudantium, dicta incidunt dolor ipsam consequuntur
            quaerat molestiae laboriosam beatae excepturi. Ipsam architecto nisi
            dignissimos reiciendis animi ad nobis, hic officiis soluta
            voluptatem minima commodi iste sint ratione culpa magni provident
            vitae asperiores nemo? Voluptatem optio, veritatis quam corrupti vel
            consequuntur. Facere numquam non iste! Iusto, perferendis nesciunt
            necessitatibus, ipsum minus facilis, dolor doloremque minima
            assumenda cumque quia recusandae accusantium sapiente cupiditate
            eveniet ratione nulla non voluptas magnam reiciendis autem
            reprehenderit. Deserunt veritatis nobis similique quas totam non
            aperiam voluptatibus, aliquam saepe.
          </p>
        </div>
      </div>
    </div>
  );
};
export default TermsModal;
