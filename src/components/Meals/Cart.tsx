import Modal from "../ui/Modal";

interface Props {
  show: boolean;
  onDismiss(): void;
}

const Cart: React.FC<Props> = ({ show, onDismiss }) => {
  return <Modal show={show} onDismiss={onDismiss}>
    <h1>Hello there!</h1>
    <button onClick={onDismiss}>close</button>
  </Modal>
};

export default Cart;
