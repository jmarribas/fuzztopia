import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contact} id='contactsection'>
      <h2>CONTACTO</h2>
      <p>Envíanos tu consulta y te responderemos lo antes posible o si lo prefieres nos puedes escribir a: contratacion@fuzztopiarock.com</p>
      <p>Gracias!</p>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}