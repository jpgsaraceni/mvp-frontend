import Modal from '../../components/Modal';

const TestComponent = () => {

  return (
    // <Modal title="RANKING" type="ranking" _openModal={true} />
    // <Modal title="LOGIN" type="login" _openModal={true} />
    <Modal 
      title="PARABÉNS" 
      type="choose_name" 
      message="INSIRA UM NOME PARA REGISTRAR A SUA PONTUAÇÃO NO RANK." 
      _openModal={true} 
    />
    // <Modal
    //   title="QUASE LÁ!"
    //   type="store"
    //   message="VOCÊ ESTÁ PRESTES A ADQUIRIR UM NOVO ITEM.
    //           TEM CERTEZA QUE DESEJA CONTINUAR?"
    //   _openModal={true}
    // />
    // <Modal _openModal={true}>teste</Modal>
  );
};

export default TestComponent;
