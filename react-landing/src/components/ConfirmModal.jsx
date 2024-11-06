import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext';
import Button from './Button';
import ModalProductCartList from './ModalProductCartList';
import ShoppingCartTotalPrice from './ShoppingCartTotalPrice';

export default function ConfirmModal() {

    const { cart, setCart } = useContext(CartContext);

    let [isOpen, setIsOpen] = useState(false);

    function handleClickResetCart() {
        setCart([]);
    }

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Confirm Order</Button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 ">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-slate-700 bg-opacity-55 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border bg-white p-6 rounded-lg">
                        <img src="/assets/images/icon-order-confirmed.svg" alt="confirmed-icon" />

                        <DialogTitle className="text-4xl font-bold mb-2">Order Confirmed</DialogTitle>
                        <Description className="text-sm font-regular text-rose-400">We hope you enjoy your food!</Description>
                        <div className="modal-cart-items__container bg-rose-50 p-4 rounded-lg inline-block w-full">
                            <ul></ul>
                            <div className="modal-total w-96">
                                <ModalProductCartList items={cart} />
                                <ShoppingCartTotalPrice orderItems={cart} />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Button onClick={handleClickResetCart}>Start New Order</Button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}
