import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./css/Info.module.css";

function Info() {
  const buttonClick2 = () => {
    setModalIsOpen(false);
    window.location.href = "/Main";
  };

  const [modalIsOpen, setModalIsOpen] = useState(true);
  return (
    <div>
      <div className={styles.modalBackground}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className={styles.modalContainer}
        >
          <div className={styles.modalContent}>
            <div className={styles.modalContentMessage}>
              <div className={styles.modalContentMessageHd}>
                <h2>πΎ λ°λ €λλ¦¬ π±</h2>
                <button
                  onClick={buttonClick2}
                  className={styles.modalContentMessageClose}
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
              <p>
                μλνμΈμ. <b>λ°λ €λλ¦¬</b> μΉ μλΉμ€λ₯Ό μ΄μ©ν΄μ£Όμμ κ°μ¬ν©λλ€.
                <br />
                λ°λ €λλ¦¬λ λ°λ €λλ¬Όκ³Ό λ€μν μΆμ΅μ μκ³ μ,
                <br />μ§ λ΄λΆ λΏ μλλΌ μΈλΆμμλ ν¨κ»ν  μλ μμκΉ νλ
                κ³ λ―Όμμμ λμ¨ μλΉμ€λ‘
                <br />
                <b>λ°λ €λλ¬Όκ³Ό μΈλΆμμ ν¨κ» ν  μ μλ κ³΅κ°</b>μ μ°Ύμ
                μ κ³΅ν΄μ€λλ€.
              </p>
              <p>
                λ°λ €λλ¦¬μμλ <b>μ§μ­λ³/μΉ΄νκ³ λ¦¬λ³</b>λ‘ κ²μμ΄ κ°λ₯ν©λλ€.
                <br /> μ§μ­λ³ ν­μ ν΄λ¦­νμ¬ μ°Ύκ³ μ νλ μ§μ­μ κ²μνμ€ μ
                μμΌλ©°, <br />
                μΉ΄νκ³ λ¦¬λ³ ν­μ μ΄μ©νμ¬ νμ, μλ°, λ―Έμ©, λ³μ λ±μ μνμλ
                μ₯μμ λν μ λ³΄λ₯Ό μ»μ μ μμ΅λλ€.
              </p>
              <p>
                κ·ΈλΌ λ°λ €λλ¦¬μμ μ¦κ±°μ΄ μκ° λ³΄λ΄μκΈΈ λ°λλλ€. μ΄μ©ν΄μ£Όμμ
                κ°μ¬ν©λλ€.
                <br />
                <small>(μλ¨μ xλ²νΌμ λλ¬ μ΄λν΄μ£ΌμΈμ.)</small>
              </p>
              <p>
                λ¬Έμ μ¬ν­ :
                https://github.com/companionnuri/companionnuri/issues
              </p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Info;
