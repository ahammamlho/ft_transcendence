'use client';
import styles from './styles.module.css';

export default function LoginPage() {
  let username = '';
  let password = '';
  const handleUserName = (e: any) => {
    const { name, value } = e.target;
    if (name === 'username') username = value;
    else password = value;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(username, password);
  };
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className={styles.inputText}
            placeholder="Enter userName"
            required
            onChange={handleUserName}
          />
          <input
            type="text"
            name="password"
            className={styles.inputText}
            placeholder="Enter passWord"
            required
            onChange={handleUserName}
          />
          <input type="submit" value="Enter" className={styles.button} />
        </form>
      </div>
    </main>
  );
}
