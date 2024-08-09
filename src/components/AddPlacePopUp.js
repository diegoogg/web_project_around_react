import PopUpWithForm from "./PopUpWithForm";

export default function AddPlacePopUp({ open, handleClose, onSubmit }) {
  return (
    <PopUpWithForm
      title="Nuevo Lugar"
      handleClose={handleClose}
      classId={"popup_container-place"}
      open={open}
      onSubmit={onSubmit}
      buttonTitle="Guardar"
    >
      <input
        type="text"
        placeholder="Titulo"
        className="popup__input popup__input_place"
        required
        minLength="2"
        maxLength="30"
        name="name"
      />
      <span className="popup__error popup__error_type_place"></span>
      <input
        type="url"
        placeholder="Enlace a la imagen"
        className="popup__input popup__input_src"
        required
        name="link"
      />
      <span className="popup__error popup__error_type_url"></span>
    </PopUpWithForm>
  );
}
