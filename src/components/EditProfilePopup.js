import React from "react";
import { currentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = React.useContext(currentUserContext);
  const [name, setName] = React.useState(false);
  const [description, setDescription] = React.useState(false);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return <div>test</div>;
}

export default EditProfilePopup;
