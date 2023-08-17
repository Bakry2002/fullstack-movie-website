//? this file contains helper functions that are used in the app frequently

// Handle click outside element container
export const handleClickOutsideElementContainer = (selector, callback) => {
    const handleClick = (e) => {
        const target = e.target
        const elements = document.querySelectorAll(selector)
        let isOutside = true

        elements.forEach((element) => {
            if (element.contains(target)) {
                isOutside = false
            }
        })

        if (isOutside) {
            callback()
        }
    }

    document.addEventListener('mousedown', handleClick)
    // what does mousedown do? it is a mouse event that is fired when a pointing device button (usually a mouse button) is pressed on an element
    // its better to use mousedown than click because click is fired after the mouse button has been pressed and released but the mouse down is fired when the mouse button is pressed
    return () => {
        document.removeEventListener('mousedown', handleClick) // remove the event listener when the component is unmounted
    }
}
