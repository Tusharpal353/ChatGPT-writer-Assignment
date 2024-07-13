import Modal from "~Components/Modal"
import { CountButton } from "~features/CountButton"

import "~style.css"

function IndexPopup() {
  return (
    <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-h-16 plasmo-w-40">
      <CountButton />
      <h1>hello popup</h1>
      <Modal />
    </div>
  )
}

export default IndexPopup
