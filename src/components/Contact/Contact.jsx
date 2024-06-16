import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

function Contact({ contact:{id, name, number} }) {
    const dispatch = useDispatch();
    const handleDelete = () => {
      dispatch(deleteContact(id));
         };
return (
    <div className={css.container}>
    <div className={css.contact}>
        <p className={css.items}><FaUser/>{name}</p>
        <p className={css.items}><FaPhone/>{number}</p>
    </div>
    <div><button className={css.button} onClick={handleDelete} >Delate</button></div>
    </div>
);
}
export default Contact;