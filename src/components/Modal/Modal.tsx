import { createPortal } from 'react-dom'
import './Modal.scss'
import React, { useRef, useEffect } from 'react'

interface ModalProps {
    children?: React.ReactNode,
    open?: boolean,
}

export const Modal: React.FC<ModalProps> = ({ children, open = false}) => {
    const dialog = useRef<HTMLDialogElement>(null)  

    useEffect(() => {
        if (open) {
            dialog.current?.showModal()
        } else {
            dialog.current?.close()
        }
    }, [open])

    return createPortal(
        <dialog ref={dialog}>{children}</dialog>,
        document.getElementById('modal') as HTMLElement
    )
}