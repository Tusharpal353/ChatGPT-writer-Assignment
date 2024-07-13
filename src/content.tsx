/* import type { PlasmoCSConfig } from "plasmo"

// Configuration for Plasmo content script
export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

// Function to handle click events on LinkedIn
const handleClick = () => {
  const messageInput = document.querySelector(".msg-form__contenteditable")
  if (messageInput instanceof HTMLElement) {
    messageInput.focus()
    messageInput.textContent = "jiji" // Set the message box content to "jiji"
  }
}

// Main function for injecting behavior into LinkedIn page
const injectLinkedInBehavior = () => {
  // Add click listener to LinkedIn page
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement
    // Check if the clicked element matches a specific selector (e.g., message button)
    if (target.matches(".specific-selector")) {
      handleClick() // Call handleClick function to set "jiji" in message box
    }
  })
}

// Execute the function when the content script is loaded
injectLinkedInBehavior()
 */

/////////////////////////////////////////JIJI?///////////////////
/* 
import type { PlasmoCSConfig } from "plasmo"

// Configuration for Plasmo content script
export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

// Function to handle click events on LinkedIn
const handleClick = () => {
  const messageInput = document.querySelector(".msg-form__contenteditable")
  if (messageInput instanceof HTMLElement) {
    messageInput.focus()
    messageInput.textContent = "jiji" // Set the message box content to "jiji"
  }
}

// Main function for injecting behavior into LinkedIn page
const injectLinkedInBehavior = () => {
  // Add click listener to LinkedIn page
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement
    // Check if the clicked element matches the message input field selector
    if (target.matches(".msg-form__contenteditable")) {
      handleClick() // Call handleClick function to set "jiji" in message box
    }
  })
}

// Execute the function when the content script is loaded
injectLinkedInBehavior()
 */

////////////////////////////////////////////////////////////////LOGO?///////////////// submmit 1

import type { PlasmoCSConfig } from "plasmo"
import ReactDOM from "React-dom"
import { createRoot } from "React-dom/client"

// Main function for injecting behavior into LinkedIn page
/* const injectLinkedInBehavior = () => {
  // Add click listener to LinkedIn page
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement
    // Check if the clicked element matches the message input field selector
    if (target.matches(".msg-form__contenteditable")) {
      handleClick() // Call handleClick function to set SVG logo in message box
    }
  })
} */
import Modal from "~Components/Modal"

//import ".././src/styles/tailwind.css"

// SVG logo content (replace with your actual SVG content)
const svgLogo = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 13h-6v-2h6v2zm0-4h-6V7h6v4z"/>
  </svg>
`

// Configuration for Plasmo content script
export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

// Function to handle click events on LinkedIn
/* const handleClick = () => {
  const messageInput = document.querySelector(".msg-form__contenteditable")
  if (messageInput instanceof HTMLElement) {
    messageInput.focus()
    messageInput.innerHTML = svgLogo // Set the message box content to the SVG logo
  }
}
 */
const handleClick = () => {
  ////WORKING THIS IS
  const messageInput = document.querySelector(".msg-form__contenteditable")
  if (messageInput instanceof HTMLElement) {
    messageInput.focus()
    const wrapperElement = document.createElement("div")
    messageInput.appendChild(wrapperElement)
    const root = createRoot(wrapperElement)
    root.render(<Modal />)
  }
}

// ... rest of your code ...

const injectLinkedInBehavior = () => {
  // Add click listener to LinkedIn page
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement
    // Check if the clicked element matches the message input field selector
    if (target.matches(".msg-form__contenteditable")) {
      handleClick() // Call handleClick function to set SVG logo in message box
      // Show the Modal component
      const modalContainer = document.createElement("div")
      modalContainer.innerHTML = `<${Modal} />`
      document.body.appendChild(modalContainer)
    }
  })
}

// Execute the function when the content script is loaded
injectLinkedInBehavior()

// content.tsx

/* *************************************wroking 1 */ /* 
                                                     import type { PlasmoCSConfig } from "plasmo"
                                                     import React, { useState } from "react"
                                                     import ReactDOM from "react-dom"
                                                     import Modal from "../src/Components/Modal"
                                                     // SVG logo content (replace with your actual SVG content)
                                                     const svgLogo = `
                                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="svg-logo">
                                                     <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 13h-6v-2h6v2zm0-4h-6V7h6v4z"/>
                                                     </svg>
                                                     `
                                                     // Configuration for Plasmo content script
                                                     export const config: PlasmoCSConfig = {
                                                     matches: ["https://*.linkedin.com/*"]
                                                     }
                                                     // Function to handle click events on LinkedIn
                                                     const handleClick = () => {
                                                     const messageInput = document.querySelector(".msg-form__contenteditable")
                                                     if (messageInput instanceof HTMLElement) {
                                                     messageInput.focus()
                                                     messageInput.innerHTML = svgLogo // Set the message box content to the SVG logo
                                                     positionSVGLogo(messageInput) // Position SVG logo within the message box
                                                     // Show modal when SVG logo is clicked
                                                     openModal()
                                                     }
                                                     }
                                                     // Function to position the SVG logo in the bottom right corner of the message input box
                                                     const positionSVGLogo = (messageInput: HTMLElement) => {
                                                     const svgElement = messageInput.querySelector(".svg-logo")
                                                     if (svgElement instanceof HTMLElement) {
                                                     svgElement.style.position = "absolute"
                                                     svgElement.style.bottom = "5px" // Adjust bottom position as needed
                                                     svgElement.style.right = "5px" // Adjust right position as needed
                                                     svgElement.style.width = "24px" // Adjust width as needed
                                                     svgElement.style.height = "24px" // Adjust height as needed
                                                     svgElement.style.pointerEvents = "none" // Ensure SVG does not capture events
                                                     }
                                                     }
                                                     // Function to open the modal
                                                     const openModal = () => {
                                                     const modalRoot = document.createElement("div")
                                                     modalRoot.id = "modal-root"
                                                     document.body.appendChild(modalRoot)
                                                     const closeModal = () => {
                                                     ReactDOM.unmountComponentAtNode(modalRoot)
                                                     document.body.removeChild(modalRoot)
                                                     }
                                                     const handleGenerate = (text: string) => {
                                                     // Dummy functionality for now, can be replaced with actual generation logic
                                                     console.log(`Generated response: ${text}`)
                                                     }
                                                     ReactDOM.render(
                                                     <Modal onClose={closeModal} onGenerate={handleGenerate} />,
                                                     modalRoot
                                                     )
                                                     }
                                                     // Main function for injecting behavior into LinkedIn page
                                                     const injectLinkedInBehavior = () => {
                                                     // Add click listener to LinkedIn page
                                                     document.addEventListener("click", (event) => {
                                                     const target = event.target as HTMLElement
                                                     // Check if the clicked element matches the message input field selector
                                                     if (target.matches(".msg-form__contenteditable")) {
                                                     handleClick() // Toggle SVG logo in message box
                                                     } else {
                                                     handleOutsideClick(event) // Handle click outside message box
                                                     }
                                                     })
                                                     }
                                                     // Function to handle click events outside the message box
                                                     const handleOutsideClick = (event: MouseEvent) => {
                                                     const messageInput = document.querySelector(".msg-form__contenteditable")
                                                     const target = event.target as HTMLElement
                                                     // Check if the click target is not within the message input field and not the SVG logo itself
                                                     if (
                                                     !messageInput?.contains(target) &&
                                                     !target.classList.contains("svg-logo")
                                                     ) {
                                                     if (messageInput instanceof HTMLElement) {
                                                     messageInput.innerHTML = "" // Clear the message box content
                                                     }
                                                     }
                                                     }
                                                     // Execute the function when the content script is loaded
                                                     injectLinkedInBehavior()
                                                     */

// content.tsx

// content.tsx
/* 
import type { PlasmoCSConfig } from "plasmo"
import React, { useState } from "react"
import { createRoot } from "react-dom/client"

import Modal from "../src/Components/Modal"

// SVG logo content (replace with your actual SVG content)
const svgLogo = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="svg-logo">
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 13h-6v-2h6v2zm0-4h-6V7h6v4z"/>
  </svg>
`

// Configuration for Plasmo content script
export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

// Function to handle click events on LinkedIn
const handleClick = () => {
  const messageInput = document.querySelector(".msg-form__contenteditable")
  if (messageInput instanceof HTMLElement) {
    messageInput.focus()
    messageInput.innerHTML = svgLogo // Set the message box content to the SVG logo
    positionSVGLogo(messageInput) // Position SVG logo within the message box
    openModal() // Open modal when SVG logo is clicked
  }
}

// Function to position the SVG logo in the bottom right corner of the message input box
const positionSVGLogo = (messageInput: HTMLElement) => {
  const svgElement = messageInput.querySelector(".svg-logo")
  if (svgElement instanceof HTMLElement) {
    svgElement.style.position = "absolute"
    svgElement.style.bottom = "5px" // Adjust bottom position as needed
    svgElement.style.right = "5px" // Adjust right position as needed
    svgElement.style.width = "24px" // Adjust width as needed
    svgElement.style.height = "24px" // Adjust height as needed
    svgElement.style.pointerEvents = "none" // Ensure SVG does not capture events
  }
}

// Function to open the modal
const openModal = () => {
  const modalRoot = document.createElement("div")
  modalRoot.id = "modal-root"
  document.body.appendChild(modalRoot)

  const closeModal = () => {
    modalRoot.remove() // Remove modal root from the DOM
  }

  // Render modal component using createRoot
  const root = createRoot(modalRoot)
  root.render(<Modal onClose={closeModal} />)
}

// Main function for injecting behavior into LinkedIn page
const injectLinkedInBehavior = () => {
  // Add click listener to LinkedIn page
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement
    // Check if the clicked element matches the message input field selector
    if (
      target.matches(".msg-form__contenteditable") ||
      target.classList.contains("svg-logo")
    ) {
      handleClick() // Toggle SVG logo in message box
    } else {
      handleOutsideClick(event) // Handle click outside message box
    }
  })
}

// Function to handle click events outside the message box
const handleOutsideClick = (event: MouseEvent) => {
  const messageInput = document.querySelector(".msg-form__contenteditable")
  const target = event.target as HTMLElement
  // Check if the click target is not within the message input field and not the SVG logo itself
  if (
    !messageInput?.contains(target) &&
    !target.classList.contains("svg-logo")
  ) {
    if (messageInput instanceof HTMLElement) {
      messageInput.innerHTML = "" // Clear the message box content
    }
  }
}

// Execute the function when the content script is loaded
injectLinkedInBehavior()
 */
