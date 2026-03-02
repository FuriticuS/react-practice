import Button from "../button/Button.jsx";
import Modal from "../modal/Modal.jsx";
import {useEffect, useState} from "react";
import ModalRoot from "../modal/ModalRoot.jsx";

export default function EffectsManual() {
  const [modal, setModal] = useState(false)
  const [isModal, setIsModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const resp = await fetch('https://jsonplaceholder.typicode.com/users/')
      const users = await resp.json()

      setUsers(users)
      setLoading(false);
    }

    fetchUsers();
  }, [])

  function openModal() {
    setModal(!modal)
  }

  function openIsModal() {
    setIsModal(!isModal)
  }

  return (
    <div>
      <h3>Effects</h3>

      <Button
        title="Открыть окно со стилями"
        functionClick={openModal}
      />

      <Modal open={modal}>
        <h3>Modal</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, suscipit.</p>
      </Modal>

      <Button
        title="Открыть окно без стилей"
        functionClick={openIsModal}
      />

      <ModalRoot open={isModal}>
        <h3>Modal Root</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, suscipit.</p>

        <Button functionClick={() => setIsModal(false)} title={"Close"}/>
      </ModalRoot>

      {loading && <p>Loading...</p>}

      {!loading && <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>}
    </div>
  )
}